import React from 'react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: 'SURVIVE AT ALL COSTS',
    description: 'You have 30 minutes to find a relic, signal for extraction, and grab one of three spots on the rescue chopper.'
  },
  {
    title: 'CREATE ALLIES AND ENEMIES'
  },
  {
    title: 'IMPRESS THE AUDIENCE'
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="text-2xl text-white mb-2">Why so special?</h2>
          <h3 className="text-6xl font-bold text-white mb-12">FEATURES</h3>
          
          <div className="space-y-12">
            {features.map((feature, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-teal-500">
                <h4 className="text-3xl font-bold text-teal-500 mb-4">
                  {feature.title}
                </h4>
                {feature.description && (
                  <p className="text-white/80 leading-relaxed">
                    {feature.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};