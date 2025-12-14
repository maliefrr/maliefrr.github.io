import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

interface NavbarProps {
  scrollToRef: (ref: React.RefObject<HTMLElement>) => void;
  heroRef: React.RefObject<HTMLElement>;
  homeRef: React.RefObject<HTMLElement>;
  expRef: React.RefObject<HTMLElement>;
  projectRef: React.RefObject<HTMLElement>;
  skillsRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
}

export const Navbar: React.FC<NavbarProps> = ({
  scrollToRef,
  heroRef,
  homeRef,
  expRef,
  projectRef,
  skillsRef,
  contactRef,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const handleItemClick = (ref: React.RefObject<HTMLElement>) => {
    scrollToRef(ref);
    setMenuOpen(false);
  };

  const navItems = [
    { name: "Home", ref: homeRef },
    { name: "Experience", ref: expRef },
    { name: "Project", ref: projectRef },
    { name: "Skills", ref: skillsRef },
    { name: "Contact", ref: contactRef },
  ];

  return (
    <nav className="flex justify-between items-center p-4 relative z-50">
      <h1
        className="text-xl text-white hover:text-[#c7d5e0] duration-300 cursor-pointer"
        onClick={() => handleItemClick(heroRef)}
      >
        Mohamad Alief Rizky R
      </h1>

      {/* Desktop menu */}
      <ul className={`hidden md:flex justify-around w-[60%]`}>
        {navItems.map((item) => (
          <li
            key={item.name}
            className="hover:text-[#c7d5e0] text-white duration-300 cursor-pointer"
            onClick={() => handleItemClick(item.ref)}
          >
            {item.name}
          </li>
        ))}
      </ul>

      {/* Hamburger Icon */}
      <div className="md:hidden flex">
        <Button className="text-white focus:outline-none" onClick={handleToggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </Button>
      </div>

      {/* Mobile Menu (Slide from right) with dynamic color */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 p-6 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <button onClick={handleToggleMenu} className="mb-4 text-white">
          ✕
        </button>
        <ul className="flex flex-col space-y-4 text-white bg-[#171A21] p-4 rounded">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="hover:text-[#c7d5e0] duration-300 cursor-pointer text-inherit"
              onClick={() => handleItemClick(item.ref)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
