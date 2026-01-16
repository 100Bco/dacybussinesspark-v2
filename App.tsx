import React from 'react';
import { LeftPanel } from './components/LeftPanel';
import { RightPanel } from './components/RightPanel';
import { HeroSection } from './components/HeroSection';

const App: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-paper font-sans">

      {/* Mobile Only: Hero at top */}
      <div className="md:hidden w-full order-1">
        <HeroSection />
      </div>

      {/* Mobile Only: LeftPanel after Hero */}
      <div className="md:hidden w-full order-2">
        <LeftPanel />
      </div>

      {/* Desktop: Sticky Left Panel */}
      <div className="hidden md:block md:w-[30%] md:h-screen md:sticky md:top-0 md:order-1">
        <LeftPanel />
      </div>

      {/* Desktop: Content with Hero + Sections | Mobile: Sections only */}
      <div className="w-full md:w-[70%] order-3 md:order-2">
        {/* Desktop Only: Hero at top of content */}
        <div className="hidden md:block">
          <HeroSection />
        </div>
        <RightPanel />
      </div>

    </div>
  );
};

export default App;