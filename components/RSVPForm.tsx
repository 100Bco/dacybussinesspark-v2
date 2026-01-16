import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export const RSVPForm: React.FC = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const inputClasses = "w-full bg-transparent border-b border-gray-300 py-2 md:py-3 text-ink text-lg md:text-xl outline-none transition-all duration-300 placeholder:text-gray-300 font-sans focus:border-alert focus:placeholder-gray-400";
  const labelClasses = "block text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500 mb-1.5 md:mb-2 transition-colors duration-300";

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form className="space-y-8 md:space-y-12" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="input-group">
            <label className={labelClasses}>First Name</label>
            <input 
              type="text" 
              placeholder="Jane"
              className={inputClasses}
              onFocus={() => setFocusedField('firstName')}
              onBlur={() => setFocusedField(null)}
            />
          </div>
          <div className="input-group">
            <label className={labelClasses}>Last Name</label>
            <input 
              type="text" 
              placeholder="Doe"
              className={inputClasses}
              onFocus={() => setFocusedField('lastName')}
              onBlur={() => setFocusedField(null)}
            />
          </div>
        </div>

        <div className="input-group">
          <label className={labelClasses}>Work Email</label>
          <input 
            type="email" 
            placeholder="jane@company.com"
            className={inputClasses}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
          />
        </div>

        <div className="input-group">
          <label className={labelClasses}>Phone Number</label>
          <input 
            type="tel" 
            placeholder="+1 (512) 000-0000"
            className={inputClasses}
            onFocus={() => setFocusedField('mobile')}
            onBlur={() => setFocusedField(null)}
          />
        </div>

        <div className="input-group">
          <label className={labelClasses}>Role</label>
          <div className="relative">
            <select 
              className={`${inputClasses} appearance-none cursor-pointer rounded-none`}
              onFocus={() => setFocusedField('role')}
              onBlur={() => setFocusedField(null)}
              defaultValue=""
            >
              <option value="" disabled>Select your role</option>
              <option value="broker">Commercial Broker</option>
              <option value="owner">Business Owner</option>
              <option value="investor">Investor</option>
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              ↓
            </div>
          </div>
        </div>

        <div className="pt-6 md:pt-8">
          <button className="w-full bg-ink text-white py-4 md:py-6 hover:bg-alert transition-colors duration-500 group relative overflow-hidden shadow-2xl shadow-gray-200">
            <span className="relative z-10 flex items-center justify-between px-6 md:px-8 font-mono font-bold tracking-[0.15em] md:tracking-[0.2em] text-[10px] md:text-xs uppercase">
              Confirm Registration
              <ArrowRight className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};