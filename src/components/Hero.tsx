import React from 'react';
import { HeroSection } from '../types';

const heroData: HeroSection = {
  title: 'SURVIVE AT ALL COSTS',
  subtitle: 'Experience our games',
  backgroundImage: 'EGS_PathofExile_GrindingGearGames_S1_2560x1440-08b6f16a13c9ed005105920f6335fa30.jpeg'
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
      
      <div className="relative z-10 text-center text-white">
        <h1 className="text-7xl font-bold tracking-wider mb-4">
          {heroData.title}
        </h1>
        <p className="text-2xl font-light">{heroData.subtitle}</p>
        <button className="mt-8 px-8 py-3 bg-teal-500 hover:bg-teal-600 transition-colors rounded-lg">
          Download Now
        </button>
      </div>
    </section>
  );
};