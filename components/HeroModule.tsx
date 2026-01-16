import React from 'react';
import { BentoItem } from './BentoItem';
import { MapPin, Calendar } from 'lucide-react';

export const HeroModule: React.FC = () => {
  return (
    <BentoItem className="col-span-1 md:col-span-2 lg:col-span-4 row-span-2 min-h-[400px] flex flex-col justify-end p-6 md:p-10 relative group">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1200/800?grayscale" 
          alt="Industrial Warehouse" 
          className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center gap-3 text-neon font-mono text-xs md:text-sm tracking-widest uppercase mb-2">
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" /> March 11, 2026
          </span>
          <span className="hidden md:block text-steel">|</span>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Austin, TX
          </span>
          <span className="hidden md:block text-steel">|</span>
          <span className="bg-neon/10 px-2 py-0.5 rounded border border-neon/30">Phase II</span>
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-gray-400 tracking-wider">
          THE INDUSTRIAL SOCIAL
        </h2>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-sans leading-[0.9] text-white uppercase break-words">
          The Phase II <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-offwhite to-gray-500">Unveiling</span>
        </h1>
        
        <div className="h-1 w-24 bg-neon mt-6 shadow-[0_0_10px_rgba(255,59,48,0.8)]"></div>
      </div>
    </BentoItem>
  );
};