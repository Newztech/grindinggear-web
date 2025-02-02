import React from 'react';
import { SystemRequirement } from '../types';

const requirements: SystemRequirement[] = [
  {
    title: 'OS',
    specs: ['Windows 7 64-bit only', '(No OSX support at this time)']
  },
  {
    title: 'PROCESSOR',
    specs: ['Intel Core 2 Duo @ 2.4 GHZ or', 'AMD Athlon X2 @ 2.8 GHZ']
  },
  {
    title: 'MEMORY',
    specs: ['8 GB RAM']
  },
  {
    title: 'STORAGE',
    specs: ['8 GB available space']
  },
  {
    title: 'GRAPHICS',
    specs: [
      'NVIDIA GeForce GTX 660 2GB or',
      'AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)'
    ]
  },
  {
    title: 'Status server',
    specs: ['https://uptime.grindinggear.online/status/1']
  }
];

export const Requirements: React.FC = () => {
  return (
    <section id="requirements" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl text-white mb-2">
            Can My Computer Run this game?
          </h2>
          <h3 className="text-6xl font-bold text-white">
            SYSTEM REQUIREMENTS
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {requirements.map((req) => (
            <div key={req.title} className="border border-teal-500/30 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-teal-500 mb-4">
                {req.title}
              </h4>
              {req.specs.map((spec, index) => (
                <p key={index} className="text-white/80 text-sm leading-relaxed">
                  {spec.startsWith('http') ? (
                    <a href={spec} className="text-teal-400 underline" target="_blank" rel="noopener noreferrer">
                       Online Server
                    </a>
                  ) : (
                    spec
                  )}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
