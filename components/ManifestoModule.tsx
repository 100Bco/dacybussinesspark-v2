import React from 'react';
import { BentoItem } from './BentoItem';

export const ManifestoModule: React.FC = () => {
  return (
    <BentoItem className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 min-h-[250px] p-8 flex flex-col justify-center bg-[#0F0F0F]">
      <div className="h-full flex flex-col justify-between">
        <h3 className="font-mono text-neon text-xs tracking-[0.2em] uppercase">The Manifesto</h3>
        
        <div className="font-sans font-bold text-2xl md:text-3xl leading-tight text-white my-4">
          MORE THAN AN <br/>
          OPEN HOUSE.
        </div>
        
        <p className="font-mono text-sm text-gray-400 leading-relaxed">
          We are bringing together Austin’s industrial elite for an afternoon of genuine connection.
        </p>
        
        <div className="mt-4 pt-4 border-t border-steel/50">
          <p className="font-sans font-extrabold text-white text-lg">
            Good Conversations. <br/>
            <span className="text-neon">No Sales Pitches.</span>
          </p>
        </div>
      </div>
    </BentoItem>
  );
};