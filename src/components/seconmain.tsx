import React from 'react';
import { HeroSection } from '../types';

const heroData: HeroSection = {
  title: ' text',
  subtitle: 'Grinding Gear Games was founded in November 2006 in Auckland, New Zealand. Its founding members come from various countries and have a selection of diverse backgrounds ranging from artificial intelligence and software security to industrial design to professional tournament game play.\n' +
      '\n' +
      'We are currently developing Path of Exile, a competitive online action RPG. Much more information about this project is available at www.pathofexile.com\n' +
      '\n' +
      'As veterans of various online role playing games, we understand what is required to make a compelling action RPG with visceral combat and a complex item economy.',
  backgroundImage: 'https://ima.grindinggear.online/grindinggear/main.jpeg'
};

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroData.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
      </div>
      
      <div className="relative z-10 text-center text-withe">
        <h1 className="text-7xl font-bold tracking-wider mb-4">
          {heroData.title}
        </h1>
        <p className="text-2xl font-light">{heroData.subtitle}</p>
          {/* <button className="mt-8 px-8 py-3 bg-teal-500 hover:bg-teal-600 transition-colors rounded-lg">
              <a
                  href="https://run.grindinggear.online/launcher/PathOfExile2Installer.exe"
                  className="mt-8 px-8 py-3 bg-teal-500 hover:bg-teal-600 transition-colors rounded-lg text-white text-center"
              >
                  Download Now
              </a>
          </button> */}
      </div>
    </section>
  );
};