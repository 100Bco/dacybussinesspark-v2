import React from 'react';

export const AuthorityStrip: React.FC = () => {
  const content = "HOSTED BY: LT COMMERCIAL GROUP /// POWERED BY: SAGE CAPITAL BANK (Exclusive Financial Partner) /// VENUE: DACY BUSINESS PARK /// TASTING: SUBULE TEQUILA /// ";
  
  return (
    <div className="col-span-1 md:col-span-4 lg:col-span-6 h-12 bg-neon overflow-hidden flex items-center relative border-y border-neon">
      <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none"></div>
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {/* Repeat content multiple times to ensure seamless loop */}
        <span className="text-charcoal font-mono font-bold text-sm tracking-widest uppercase px-4">{content}</span>
        <span className="text-charcoal font-mono font-bold text-sm tracking-widest uppercase px-4">{content}</span>
        <span className="text-charcoal font-mono font-bold text-sm tracking-widest uppercase px-4">{content}</span>
        <span className="text-charcoal font-mono font-bold text-sm tracking-widest uppercase px-4">{content}</span>
      </div>
    </div>
  );
};