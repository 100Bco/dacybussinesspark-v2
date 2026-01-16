import React from 'react';
import { LeftPanel } from './components/LeftPanel';
import { RightPanel } from './components/RightPanel';

const App: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-paper font-sans">
      
      {/* 
        Mobile Layout Strategy:
        We want the header and hook to be first, but the Split Screen logic 
        normally puts LeftPanel (Form) first in DOM.
        
        On Mobile: We will render components in a stacked order.
        On Desktop: Side by side.
      */}

      {/* Left Panel: Sticky Conversion Engine */}
      {/* On mobile, this will appear after the content or we can adjust order via flex */}
      <div className="w-full md:w-[30%] md:h-screen md:sticky md:top-0 order-2 md:order-1 border-t md:border-t-0 border-gray-200 md:border-none">
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