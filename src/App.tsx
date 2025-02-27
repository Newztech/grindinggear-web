import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { seconmain } from './components/seconmain';
import { Features } from './components/Features';
import { Requirements } from './components/Requirements';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
        <seconmain />
      <Features />
      <Requirements />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;