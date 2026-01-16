import React from 'react';
import { BentoItem } from './BentoItem';
import { Utensils, Wine } from 'lucide-react';

export const HospitalityModule: React.FC = () => {
  return (
    <BentoItem className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 min-h-[250px] relative group">
       <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/600/600?random=1" 
          alt="Tacos and Drinks" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50"
        />
        <div className="absolute inset-0 bg-charcoal/60 hover:bg-charcoal/40 transition-colors duration-500"></div>
      </div>

      <div className="relative z-10 h-full p-6 flex flex-col justify-between">
        <div className="flex justify-between items-start">
           <h3 className="font-mono text-white/70 text-xs tracking-[0.2em] uppercase bg-black/50 backdrop-blur-sm px-2 py-1 rounded">
             Hospitality
           </h3>
        </div>

        <div>
          <h2 className="font-sans font-black text-3xl text-white mb-4">CRAFTED<br/>HOSPITALITY</h2>
          
          <div className="space-y-3">
             <div className="flex items-center gap-3 bg-black/40 p-2 rounded border border-white/5 backdrop-blur-md">
                <div className="p-2 bg-neon/10 rounded-full">
                  <Utensils className="w-4 h-4 text-neon" />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-400 uppercase">Street Tacos</p>
                  <p className="text-sm font-bold text-white">By Taco Man</p>
                </div>
             </div>

             <div className="flex items-center gap-3 bg-black/40 p-2 rounded border border-white/5 backdrop-blur-md">
                <div className="p-2 bg-neon/10 rounded-full">
                  <Wine className="w-4 h-4 text-neon" />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-400 uppercase">Tequila Tasting</p>
                  <p className="text-sm font-bold text-white">By Subele</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </BentoItem>
  );
};