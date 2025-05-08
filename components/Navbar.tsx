'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const joinArenaLinks = [
    {
      name: 'Class Schedule',
      href: 'https://arenastrong.sites.zenplanner.com/calendar.cfm',
    },
    {
      name: 'Book Appointment',
      href: 'https://arenastrong.sites.zenplanner.com/scheduler.cfm',
    },
    {
      name: 'Individual Memberships',
      href: 'https://arenastrong.sites.zenplanner.com/sign-up-now.cfm',
    },
  ];
  
  const navItems = [
    { name: 'Event Announcements', href: '/announcements', external: false },
    { name: 'Contact Us', href: '/#contact', external: false },
  ];

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
        <a href="/" className="flex items-center">
          <Image
            src="/images/arena.svg"
            alt="Arena Training Center Logo"
            width={140}
            height={40}
            priority
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium relative">
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

          {/* Join Arena Dropdown on Hover */}
          <div className="relative group">
            <div className="flex items-center gap-1 hover:text-[var(--secondary)] transition cursor-pointer">
              <span>Join Arena</span>
              <ChevronDown size={16} />
            </div>

            <div className="absolute right-0 mt-2 w-52 bg-[var(--primary)]/95 backdrop-blur-md shadow-lg rounded p-2 text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              {joinArenaLinks.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:text-[var(--secondary)] transition"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="md:hidden text-white hover:text-[var(--secondary)]"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out bg-[var(--primary)]/95 ${
          isOpen ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >
        <nav className="px-4 pb-4">
          <ul className="flex flex-col gap-4 mt-4 text-sm font-medium">
            {navItems.map(({ name, href, external }) => (
              <li key={name}>
                <a
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="block py-2 hover:text-[var(--secondary)] transition"
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </a>
              </li>
            ))}

            <li className="pt-2 border-t border-white/10">
              <span className="block text-xs uppercase text-gray-400 mb-1">Join Arena</span>
              {joinArenaLinks.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 hover:text-[var(--secondary)] transition"
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </a>
              ))}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
