import React, { useState } from 'react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section id="subscribe" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="text-2xl text-white mb-2">
            Want to stay in touch?
          </h2>
          <h3 className="text-6xl font-bold text-white mb-8">
            Contact us
          </h3>
          <p className="text-white/80 mb-12 leading-relaxed">
            If you want to contact us, please use the following details:

General Email: contact@grindinggear.com

Press Email: media@grindinggear.com

Phone: +64 9 551 3935 (09 551 3935 inside New Zealand)
          </p>

          <form onSubmit={handleSubmit} className="grid-auto-row space-x-12 space-y-4 gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-white/10 text-white px-4 py-3 rounded-lg"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-colors"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};