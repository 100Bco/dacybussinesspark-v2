import React from 'react';
import { BentoItem } from './BentoItem';
import { Box, ArrowUpRight } from 'lucide-react';

export const ProductModule: React.FC = () => {
  return (
    <BentoItem className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 min-h-[250px] relative group cursor-pointer">
      <div className="absolute inset-0 bg-[#1a1a1a]">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#1a1a1a_25%,#222_25%,#222_50%,#1a1a1a_50%,#1a1a1a_75%,#222_75%,#222_100%)] bg-[length:20px_20px] opacity-20"></div>
      </div>
      
      {/* Label */}
      <div className="absolute top-0 right-0 bg-neon text-charcoal font-black text-xs px-3 py-1 uppercase tracking-wider rounded-bl-xl shadow-[0_0_15px_rgba(255,59,48,0.5)] z-20">
        Move-In Ready
      </div>

      <div className="relative z-10 p-6 h-full flex flex-col justify-between">
        <div>
           <Box className="w-8 h-8 text-white mb-4" />
           <h2 className="font-sans font-black text-2xl lg:text-3xl text-white uppercase leading-none mb-2">
             Built For<br/>Operators
           </h2>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {['Flex-Industrial', 'Scalable', 'Phase II'].map((tag) => (
              <span key={tag} className="text-[10px] font-mono border border-steel text-gray-300 px-2 py-1 rounded bg-charcoal/50">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-2 text-neon font-bold text-sm group-hover:translate-x-2 transition-transform duration-300">
            VIEW SPECS <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </BentoItem>
  );
};