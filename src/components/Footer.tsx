import React from 'react';
import { NavItem } from '../types';

const footerLinks: NavItem[] = [
  { label: 'MAIN', href: '#main' },
  { label: 'ABOUT', href: '#about' },
  { label: 'GAME FEATURES', href: '#features' },
  { label: 'SYSTEM REQUIREMENTS', href: '#requirements' },
  { label: 'SUBSCRIBE', href: '#subscribe' }
];

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-black border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-6 flex justify-center with:300px">
          <img src="https://ima.grindinggear.online/grindinggear/Logo%20ft.svg" alt="Footer Image" className="w-32 h-auto" />
        </div>
      </div>
    </footer>
  );
};
