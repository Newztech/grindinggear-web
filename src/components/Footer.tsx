import React from 'react';
import { NavItem } from '../types';
import { Linkedin, X, } from 'lucide-react';

const footerLinks: NavItem[] = [
  { label: 'MAIN', href: '#main' },
  { label: 'ABOUT', href: '#about' },
  { label: 'COMPANY', href: '#features' },
  { label: 'SYSTEM REQUIREMENTS', href: '#requirements' },
  { label: 'CONTACT US', href: '#subscribe' }
];

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 bg-black border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="space-x-8 space-y-8 grid-auto-row items-center">
          <div className="w-full space-x-8 space-y-8 grid-auto-row items-center ">
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
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/company/grinding-gear-games/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
              <Linkedin size={20} />
            </a>
            <a href="https://x.com/grindinggear?t=JeIkCZdBQ13VHYdJFaIxiQ&s=08" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
              <X size={20} />
            </a>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <img src="https://ima.grindinggear.online/grindinggear/Logo%20ft.svg" alt="Footer Image" className="w-32 h-auto" />
        </div>
      </div>
    </footer>
  );
};
