import React from 'react';
import { LeftPanel } from './components/LeftPanel';
import { RightPanel } from './components/RightPanel';

const App: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-paper font-sans">

      {/* Mobile: LeftPanel appears after Hero - Hidden on desktop */}
      <div className="md:hidden w-full order-2">
        <LeftPanel />
      </div>

      {/* Desktop: Sticky Left Panel */}
      <div className="hidden md:block md:w-[30%] md:h-screen md:sticky md:top-0 md:order-1 border-t md:border-t-0 border-gray-200 md:border-none">
        <LeftPanel />
      </div>

      {/* Right Panel: Scrollable Content */}
      <div className="w-full md:w-[70%] order-1 md:order-2">
        <RightPanel />
      </div>

    </div>
  );
};

export default App;