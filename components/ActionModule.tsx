import React, { useState, useEffect } from 'react';
import { BentoItem } from './BentoItem';
import { ArrowRight, Timer } from 'lucide-react';
import { CountdownTime } from '../types';

export const ActionModule: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const handleRegister = () => {
    window.open('https://api.leadconnectorhq.com/widget/form/vt4QR61BC3YlZj3ph6Wp', '_blank');
  };

  useEffect(() => {
    // Set target date to March 11, 2026
    const targetDate = new Date('2026-03-11T12:00:00');

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <BentoItem className="col-span-1 md:col-span-4 lg:col-span-4 row-span-1 min-h-[200px] bg-charcoal flex flex-col md:flex-row border-neon/30 hover:border-neon">
      {/* Countdown Section */}
      <div className="flex-1 p-6 md:p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-steel/50">
        <div className="flex items-center gap-2 mb-4 text-neon">
            <Timer className="w-4 h-4 animate-pulse-slow" />
            <span className="font-mono text-xs uppercase tracking-[0.2em]">Event Starts In:</span>
        </div>
        
        <div className="grid grid-cols-4 gap-2 md:gap-4 text-center">
          {[
            { label: 'DAYS', value: timeLeft.days },
            { label: 'HRS', value: timeLeft.hours },
            { label: 'MIN', value: timeLeft.minutes },
            { label: 'SEC', value: timeLeft.seconds }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="font-mono text-2xl md:text-3xl lg:text-4xl font-light text-white">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="text-[10px] text-gray-500 font-mono mt-1">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full md:w-[350px] p-6 md:p-8 flex flex-col justify-center items-center bg-gradient-to-br from-charcoal to-[#151515]">
         <button onClick={handleRegister} className="w-full group relative overflow-hidden bg-neon text-charcoal font-black font-sans text-lg uppercase py-4 px-6 rounded transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,59,48,0.6)]">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Secure Your Attendance <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
         </button>
         <p className="mt-3 text-xs text-gray-500 font-mono text-center">
           Limited spots available for Phase II unveiling.
         </p>
      </div>
    </BentoItem>
  );
};