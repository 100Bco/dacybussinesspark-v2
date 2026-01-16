import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2340&auto=format&fit=crop"
        alt="Networking Atmosphere"
        className="w-full h-full object-cover grayscale opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-80"></div>
      <div className="absolute bottom-0 left-0 p-6 md:p-8 lg:p-16 w-full">
        <div className="border-l-2 border-alert pl-4 md:pl-6 lg:pl-8">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-montserrat font-bold text-white leading-[0.9] tracking-tight">
            The Insider <br/> <span className="italic text-gray-300">Gathering.</span>
          </h1>
        </div>
      </div>
    </section>
  );
};
