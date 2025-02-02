import React from 'react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { imag: 'https://ima.grindinggear.online/grindinggear/notfnd.webp', href: '/' },
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

          {/* Contenedor del logo */}
          <a href="/" className="flex-shrink-0">
            <img
              src="https://ima.grindinggear.online/grindinggear/notfnd.webp"
              alt="Logo"
              className="h-auto"
              style={{ width: '150px' }}
            />
          </a>

          {/* Menú de navegación */}
          <div className="flex items-center space-x-8">
            {navItems.map((item, index) =>
              item.label ? (
                <a
                  key={index}
                  href={item.href}
                  className="text-white hover:text-teal-400 transition-colors font-semibold text-sm tracking-wider"
                >
                  {item.label}
                </a>
              ) : null
            )}
          </div>

          {/* Selector de idioma */}
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
