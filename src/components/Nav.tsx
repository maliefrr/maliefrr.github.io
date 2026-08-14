import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ListIcon, MoonStarsIcon, SunIcon, XIcon } from '@phosphor-icons/react';

const ICON_WEIGHT = 'regular';
const ICON_SIZE = 22;

export interface NavItem {
  label: string;
  href: string;
}

interface NavProps {
  brand: string;
  items: readonly NavItem[];
}

type Theme = 'light' | 'dark';

function readTheme(): Theme {
  if (typeof document === 'undefined') return 'dark';
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

export function Nav({ brand, items }: NavProps) {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(readTheme);
  const [activeId, setActiveId] = useState<string>('');
  const reduce = useReducedMotion();

  // Highlight the section currently in view. IntersectionObserver instead of a
  // scroll listener so this never runs work on every scroll frame.
  useEffect(() => {
    const sections = items
      .map((item) => document.querySelector(item.href))
      .filter((element): element is Element => element !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveId(`#${visible.target.id}`);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  // Close the drawer on Escape, and lock body scroll while it is open.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Private mode or blocked storage: the toggle still works for this visit.
    }
    setTheme(next);
  };

  const linkClass = (href: string) =>
    [
      'text-sm transition-colors duration-200',
      activeId === href ? 'text-accent' : 'text-muted hover:text-text',
    ].join(' ');

  return (
    <>
      <nav
        aria-label="Primary"
        className="glass mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-4 sm:px-6"
      >
        <a
          href="#hero"
          className="font-mono text-sm tracking-tight text-text transition-colors duration-200 hover:text-accent"
        >
          {brand}
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={linkClass(item.href)}
                aria-current={activeId === item.href ? 'true' : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="grid h-10 w-10 place-items-center rounded-glass text-muted transition-colors duration-200 hover:text-accent active:scale-[0.96]"
          >
            {theme === 'dark' ? (
              <SunIcon size={ICON_SIZE} weight={ICON_WEIGHT} />
            ) : (
              <MoonStarsIcon size={ICON_SIZE} weight={ICON_WEIGHT} />
            )}
          </button>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-glass text-muted transition-colors duration-200 hover:text-accent active:scale-[0.96] md:hidden"
          >
            <ListIcon size={ICON_SIZE} weight={ICON_WEIGHT} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute inset-0 h-full w-full bg-bg-deep/70 backdrop-blur-sm"
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              className="glass absolute right-3 top-3 flex w-64 flex-col gap-2 p-5"
              initial={reduce ? false : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: 24 }}
              transition={{ type: 'spring', stiffness: 220, damping: 26 }}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="mb-2 grid h-9 w-9 place-items-center self-end rounded-glass text-muted transition-colors duration-200 hover:text-accent"
              >
                <XIcon size={20} weight={ICON_WEIGHT} />
              </button>

              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-glass px-3 py-2 text-base text-text transition-colors duration-200 hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
