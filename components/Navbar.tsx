'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: 'About', href: '#about', external: false },
    { name: 'Training', href: '#services', external: false },
    { name: 'Recovery', href: '#recovery', external: false },
    { name: 'Coaches', href: '#coaches', external: false },
    {
      name: 'Class Schedule',
      href: 'https://arenastrong.sites.zenplanner.com/calendar.cfm',
      external: true,
    },
    {
      name: 'Book Appointment',
      href: 'https://arenastrong.sites.zenplanner.com/scheduler.cfm',
      external: true,
    },
    {
      name: 'Individual Memberships',
      href: 'https://arenastrong.sites.zenplanner.com/sign-up-now.cfm',
      external: true,
    },
    { name: 'Contact Us', href: '#contact', external: false },
  ];

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <header className="bg-[var(--primary)]/80 backdrop-blur-md text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <Image
            src="/images/arena.svg"
            alt="Arena Training Center Logo"
            width={140}
            height={40}
            priority
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map(({ name, href, external }) =>
            external ? (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--secondary)] transition"
              >
                {name}
              </a>
            ) : (
              <a
                key={name}
                href={href}
                className="hover:text-[var(--secondary)] transition"
              >
                {name}
              </a>
            )
          )}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
          className="md:hidden text-white hover:text-[var(--secondary)] transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out bg-[var(--primary)]/95 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="px-4 pb-4">
          <ul className="flex flex-col gap-4 mt-4 text-sm font-medium">
            {navItems.map(({ name, href, external }) => (
              <li key={name}>
                {external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 hover:text-[var(--secondary)] transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {name}
                  </a>
                ) : (
                  <a
                    href={href}
                    className="block py-2 hover:text-[var(--secondary)] transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

