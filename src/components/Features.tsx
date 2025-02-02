import React from 'react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: 'SURVIVE AT ALL COSTS',
    description: 'Grinding Gear Games was founded in November 2006 in Auckland, New Zealand. Its founding members come from various countries and have a selection of diverse backgrounds ranging from artificial intelligence and software security to industrial design to professional tournament game play.\n' +
        '\n' +
        'We are currently developing Path of Exile, a competitive online action RPG. Much more information about this project is available at www.pathofexile.com\n' +
        '\n' +
        'As veterans of various online role playing games, we understand what is required to make a compelling action RPG with visceral combat and a complex item economy..'
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="text-2xl text-white mb-2">Why so special?</h2>
          <h3 className="text-6xl font-bold text-white mb-12">Company</h3>
          
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