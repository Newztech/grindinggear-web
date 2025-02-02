import React from 'react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'MAIN', href: '#main' },
  { label: 'ABOUT', href: '#about' },
  { label: 'GAME FEATURES', href: '#features' },
  { label: 'SYSTEM REQUIREMENTS', href: '#requirements' },
  { label: 'SUBSCRIBE', href: '#subscribe' }
];

export const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-teal-400 transition-colors font-semibold text-sm tracking-wider"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center">
            <select className="bg-transparent text-white border-none outline-none">
              <option value="en">ENG</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};