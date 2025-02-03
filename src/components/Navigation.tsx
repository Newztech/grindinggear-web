import React, { useState } from 'react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { imag: 'https://ima.grindinggear.online/grindinggear/notfnd.webp', href: '/' },
  { label: 'MAIN', href: '#main' },
  { label: 'ABOUT', href: '#about' },
  { label: 'COMPANY', href: '#features' },
  { label: 'SYSTEM REQUIREMENTS', href: '#requirements' },
  { label: 'CONTACT US', href: '#subscribe' }
];

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo con ajuste para 530px */}
          <a href="/" className="flex-shrink-0 z-60">
            <img
              src="https://ima.grindinggear.online/grindinggear/notfnd.webp"
              alt="Logo"
              className="size-auto"
              style={{ width: 'clamp(120px, 30vw, 150px)' }}
            />
          </a>

          {/* Menú Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
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

          {/* Controles Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            <select className="bg-transparent text-white border-none outline-none">
              <option value="en">ENG</option>
            </select>
          </div>

          {/* Botón Hamburguesa Mobile */}
          <button
            className="lg:hidden text-white z-60 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8 max-[530px]:w-6 max-[530px]:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Menú Mobile Overlay */}
          <div
            className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-sm transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
            style={{ zIndex: 40 }}
          >
            <div className="container mx-auto px-4 pt-20 relative h-full">
              {/* Botón de Cierre */}
              <button
                className="absolute top-6 right-4 text-white p-2"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  className="w-8 h-8 max-[530px]:w-6 max-[530px]:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Contenido del Menú */}
              <div className="flex flex-col items-center justify-center h-full space-y-6">
                {navItems.map((item, index) =>
                  item.label ? (
                    <a
                      key={index}
                      href={item.href}
                      className="text-xl max-[530px]:text-lg text-white hover:text-teal-400 transition-colors text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : null
                )}

                {/* Selector de Idioma Mobile */}
                <select className="bg-transparent text-white border-none outline-none text-lg mt-8">
                  <option value="en">ENG</option>
                </select>
              </div>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};