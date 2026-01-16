import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="col-span-1 md:col-span-4 lg:col-span-6 py-8 text-center border-t border-steel/30 mt-8">
      <div className="flex flex-col items-center gap-4">
        <div className="font-black font-sans text-2xl tracking-tighter text-white">
            DACY <span className="text-neon">BP</span>
        </div>
        <div className="text-xs font-mono text-gray-500 space-y-1">
            <p>1234 Industrial Blvd, Austin, TX 78701</p>
            <p>© 2026 LT Commercial Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};