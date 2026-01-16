import React, { useState, useEffect } from 'react';
import { CountdownTime } from '../types';
import { ArrowRight, MapPin, Calendar, Clock } from 'lucide-react';

export const LeftPanel: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-03-11T15:30:00');
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToRSVP = () => {
    const element = document.getElementById('rsvp-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const formatTime = (val: number) => String(val).padStart(2, '0');

  return (
    <div className="h-full flex flex-col justify-between p-6 lg:p-8 overflow-hidden bg-ink text-paper relative border-r border-gray-800">
      
      {/* A. Top Area - Header */}
      <div className="flex flex-col gap-6 shrink-0">
        <div className="w-fit">
          <img
            src="/images/partners/Dacy%20logo.png"
            alt="Dacy Business Park"
            className="h-10 object-contain"
          />
        </div>
        
        <h1 className="font-montserrat font-bold text-4xl lg:text-6xl leading-[0.9] text-white tracking-tight">
          Phase II <br />
          <span className="italic text-gray-500 font-light">Reveal.</span>
        </h1>
      </div>

      {/* B. Middle Area (The Focus) - Countdown */}
      <div className="flex flex-col justify-center py-2">
         <p className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-4 pl-1">Event Countdown</p>
         
         {/* Updated: Tighter spacing (gap-1.5 to gap-2) to ensure seconds are visible and content fits */}
         <div className="flex flex-nowrap items-baseline gap-1.5 md:gap-2">
            {/* Days */}
            <div className="flex flex-col items-center">
              <span className="text-4xl lg:text-6xl font-mono font-medium tracking-tighter text-white leading-none">
                {formatTime(timeLeft.days)}
              </span>
              <span className="text-[9px] font-mono font-normal text-gray-600 tracking-widest uppercase mt-1">Days</span>
            </div>
            
            <span className="text-gray-700 font-thin text-3xl lg:text-5xl leading-none self-start mt-1 opacity-50">:</span>
            
            {/* Hours */}
            <div className="flex flex-col items-center">
              <span className="text-4xl lg:text-6xl font-mono font-medium tracking-tighter text-white leading-none">
                {formatTime(timeLeft.hours)}
              </span>
              <span className="text-[9px] font-mono font-normal text-gray-600 tracking-widest uppercase mt-1">Hrs</span>
            </div>

            <span className="text-gray-700 font-thin text-3xl lg:text-5xl leading-none self-start mt-1 opacity-50">:</span>

            {/* Minutes */}
            <div className="flex flex-col items-center">
              <span className="text-4xl lg:text-6xl font-mono font-medium tracking-tighter text-white leading-none">
                {formatTime(timeLeft.minutes)}
              </span>
              <span className="text-[9px] font-mono font-normal text-gray-600 tracking-widest uppercase mt-1">Min</span>
            </div>

            <span className="text-gray-700 font-thin text-3xl lg:text-5xl leading-none self-start mt-1 opacity-50">:</span>

            {/* Seconds */}
            <div className="flex flex-col items-center">
              <span className="text-4xl lg:text-6xl font-mono font-medium tracking-tighter text-white leading-none text-alert/90">
                {formatTime(timeLeft.seconds)}
              </span>
              <span className="text-[9px] font-mono font-normal text-gray-600 tracking-widest uppercase mt-1">Sec</span>
            </div>
         </div>
      </div>

      {/* C. Bottom Area (Logistics & Action) */}
      <div className="space-y-6 shrink-0">
        <div className="space-y-4 border-t border-white/10 pt-6">
           <div className="flex items-start gap-4 group">
              <Calendar className="w-4 h-4 text-gray-500 group-hover:text-alert transition-colors shrink-0 mt-0.5" />
              <div>
                <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-0.5">Date</span>
                <p className="font-sans font-light text-base text-gray-200">Wednesday, March 11, 2026</p>
              </div>
           </div>
           
           <div className="flex items-start gap-4 group">
              <Clock className="w-4 h-4 text-gray-500 group-hover:text-alert transition-colors shrink-0 mt-0.5" />
              <div>
                <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-0.5">Time</span>
                <p className="font-sans font-light text-base text-gray-200">3:30 PM — 5:30 PM</p>
              </div>
           </div>

           <div className="flex items-start gap-4 group">
              <MapPin className="w-4 h-4 text-gray-500 group-hover:text-alert transition-colors shrink-0 mt-0.5" />
              <div>
                <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-0.5">Location</span>
                <p className="font-sans font-light text-base text-gray-200">Kyle (Austin), TX</p>
              </div>
           </div>
        </div>

        <button 
          onClick={scrollToRSVP}
          className="w-full bg-white text-ink py-4 hover:bg-alert hover:text-white transition-all duration-300 group relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center justify-center gap-3 font-mono font-bold tracking-widest text-xs uppercase">
            Secure Access
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
      </div>
    </div>
  );
};