import { test, expect, type ConsoleMessage, type Page } from '@playwright/test';

/**
 * Astro drops the `ssr` attribute from an island once it hydrates, so this is
 * the precise signal that a component's handlers are attached. Without it a
 * fast click lands on markup that looks interactive but is not.
 */
async function waitForHydration(page: Page, component: string): Promise<void> {
  await page.waitForFunction(
    (name) => {
      const island = document.querySelector(`astro-island[component-url*="${name}"]`);
      return island !== null && !island.hasAttribute('ssr');
    },
    component,
    { timeout: 10_000 }
  );
}

/** Collect anything the page logs as an error, plus uncaught exceptions. */
function watchForErrors(page: Page): string[] {
  const errors: string[] = [];
  page.on('console', (message: ConsoleMessage) => {
    if (message.type() === 'error') errors.push(`console: ${message.text()}`);
  });
  page.on('pageerror', (error) => errors.push(`uncaught: ${error.message}`));
  return errors;
}

test.describe('hero', () => {
  test('renders its copy with no JavaScript at all', async ({ browser }) => {
    // Regression guard: Motion serialises `initial` into an inline opacity:0 on
    // the server, which left the hero invisible until hydration finished.
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto('/');

    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText('Moh Alief Rizky Ramadhan');
    await expect(page.getByRole('link', { name: 'See my work' })).toBeVisible();

    await context.close();
  });

  test('ships no opacity:0 in the served markup', async ({ request }) => {
    const html = await (await request.get('/')).text();
    const hero = html.slice(html.indexOf('id="hero"'), html.indexOf('id="home"'));
    expect(hero).not.toContain('opacity:0');
  });

  test('panel is opaque and is not a framework island', async ({ page }) => {
    await page.goto('/');
    const panel = page.locator('#hero .glass').first();
    await expect(panel).toBeVisible();
    await expect(panel).toHaveCSS('opacity', '1');

    // The hero copy must not live inside an island: a failed hydration would
    // drop Astro's slotted children and blank the most important content.
    await expect(page.locator('#hero astro-island')).toHaveCount(1);
    await expect(page.locator('#hero astro-island')).toHaveAttribute(
      'component-url',
      /Nebula/
    );
  });
});

test.describe('theme toggle', () => {
  test('flips the theme attribute and repaints the page', async ({ page }) => {
    const errors = watchForErrors(page);
    await page.goto('/');

    await waitForHydration(page, 'Nav');

    const root = page.locator('html');
    await expect(root).toHaveAttribute('data-theme', /dark|light/);

    const before = await root.getAttribute('data-theme');
    const backgroundBefore = await page.evaluate(
      () => getComputedStyle(document.body).backgroundColor
    );

    await page.getByRole('button', { name: 'Toggle colour theme' }).click();

    const after = before === 'dark' ? 'light' : 'dark';
    await expect(root).toHaveAttribute('data-theme', after);

    const backgroundAfter = await page.evaluate(
      () => getComputedStyle(document.body).backgroundColor
    );
    expect(backgroundAfter).not.toBe(backgroundBefore);

    expect(errors, `page errors: ${errors.join(' | ')}`).toEqual([]);
  });

  test('remembers the choice across a reload', async ({ page }) => {
    await page.goto('/');
    await waitForHydration(page, 'Nav');
    await page.getByRole('button', { name: 'Toggle colour theme' }).click();
    const chosen = await page.locator('html').getAttribute('data-theme');

    await page.reload();
    await expect(page.locator('html')).toHaveAttribute('data-theme', chosen!);
  });
});

test.describe('navigation', () => {
  test('hydrates without errors and highlights the section in view', async ({ page }) => {
    const errors = watchForErrors(page);
    await page.goto('/');
    await waitForHydration(page, 'Nav');

    await page.getByRole('link', { name: 'Project', exact: true }).click();
    await expect(page.locator('#projects')).toBeInViewport();

    // The accent highlight only appears once the island's observer is running,
    // so this doubles as proof that the nav actually hydrated.
    await expect(page.locator('nav a[aria-current="true"]')).toHaveCount(1);

    expect(errors, `page errors: ${errors.join(' | ')}`).toEqual([]);
  });

  test('fits on a single line at desktop width', async ({ page }) => {
    await page.goto('/');
    const nav = page.locator('nav').first();
    const box = await nav.boundingBox();
    expect(box!.height).toBeLessThanOrEqual(80);
  });
});

test.describe('projects', () => {
  test('renders three cards of equal size', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');

    const cards = page.locator('#projects article');
    await expect(cards).toHaveCount(3);

    const boxes = await cards.evaluateAll((nodes) =>
      nodes.map((node) => {
        const rect = node.getBoundingClientRect();
        return { width: Math.round(rect.width), height: Math.round(rect.height) };
      })
    );

    const [first] = boxes;
    for (const box of boxes) {
      expect(Math.abs(box.width - first!.width)).toBeLessThanOrEqual(1);
      expect(Math.abs(box.height - first!.height)).toBeLessThanOrEqual(1);
    }
  });
});

test.describe('page health', () => {
  test('loads with no console errors or uncaught exceptions', async ({ page }) => {
    const errors = watchForErrors(page);
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    expect(errors, `page errors: ${errors.join(' | ')}`).toEqual([]);
  });
});

test.describe('reduced motion', () => {
  test('hydrates without mismatch when the visitor prefers reduced motion', async ({
    browser,
  }) => {
    // Regression guard: anything derived from `useReducedMotion()` differs
    // between server and client for these visitors, and a mismatch makes React
    // fall back to a client render that drops Astro's slotted children.
    const context = await browser.newContext({ reducedMotion: 'reduce' });
    const page = await context.newPage();
    const errors = watchForErrors(page);

    await page.goto('/');
    await waitForHydration(page, 'Nav');

    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.getByRole('link', { name: 'See my work' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Toggle colour theme' })).toBeVisible();

    expect(errors, `page errors: ${errors.join(' | ')}`).toEqual([]);
    await context.close();
  });
});
