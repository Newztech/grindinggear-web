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
            NEWSLETTER SUBSCRIBE
          </h3>
          <p className="text-white/80 mb-12 leading-relaxed">
            In order to start receiving our news, all you have to do is enter your email address. 
            Everything else will be taken care of by us. We will send you emails containing 
            information about game. We don't spam.
          </p>

          <form onSubmit={handleSubmit} className="flex gap-4">
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