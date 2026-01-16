import React, { useState, useEffect } from 'react';
import { RSVPForm } from './RSVPForm';
import { PlexusSphereSection } from './PlexusSphereSection';
import { Building2, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';

const PROJECT_IMAGES = [
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2340&auto=format&fit=crop", // Industrial Exterior
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop", // Modern Flex Space
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2340&auto=format&fit=crop", // Construction/Steel
  "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2340&auto=format&fit=crop", // Warehouse Interior
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2340&auto=format&fit=crop"  // Corporate/Business Park
];

export const RightPanel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % PROJECT_IMAGES.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="w-full bg-paper text-ink selection:bg-alert/10 selection:text-alert">

      {/* SECTION 2: THE BUSINESS CASE */}
      <section className="bg-paper py-12 md:py-16 lg:py-20">
        <div className="px-6 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
           {/* Title Group */}
           <div className="mb-10 md:mb-12 max-w-4xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-ink mb-3 md:mb-4 leading-[0.95] tracking-tight">
                The Pre-Market <br/>Preview.
              </h2>
              <div className="w-16 md:w-24 h-px bg-alert mb-3 md:mb-4"></div>

              <p className="text-sm md:text-base leading-relaxed text-graphite font-light max-w-3xl font-sans mb-4 md:mb-6">
                Demand for flex-industrial in Kyle is outpacing supply. <strong className="text-ink font-medium">Tour the steel and concrete</strong> of Phase II before the mass market listing.
              </p>

              {/* PROJECT GALLERY CAROUSEL */}
              <div className="w-full">
                <div className="relative overflow-hidden rounded-sm w-full h-[200px] md:h-[280px] bg-gray-100">
                  <div 
                    className="flex h-full transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {PROJECT_IMAGES.map((img, index) => (
                      <div key={index} className="min-w-full h-full relative">
                         <img 
                            src={img} 
                            alt={`Dacy Business Park Preview ${index + 1}`} 
                            className="w-full h-full object-cover"
                         />
                         <div className="absolute inset-0 bg-ink/10"></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Carousel Dots */}
                <div className="flex justify-start gap-3 mt-4">
                  {PROJECT_IMAGES.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        currentSlide === index ? 'w-12 bg-alert' : 'w-6 bg-gray-200 hover:bg-gray-300'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
           </div>

           {/* Features List with Hairline Dividers */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Item 1 */}
              <div className="pt-4 border-t border-gray-200 group hover:border-alert transition-colors duration-500">
                 <div className="flex justify-between items-start mb-2">
                    <h4 className="font-mono font-bold text-base uppercase tracking-wider text-ink">Inventory Preview</h4>
                    <Building2 className="w-4 h-4 text-gray-300 group-hover:text-alert transition-colors" />
                 </div>
                 <p className="text-sm text-graphite leading-relaxed font-sans">
                   First look at 1,500 – 15,000 SQFT flex units suited for diverse industries.
                 </p>
              </div>

              {/* Item 2 */}
              <div className="pt-4 border-t border-gray-200 group hover:border-alert transition-colors duration-500">
                 <div className="flex justify-between items-start mb-2">
                    <h4 className="font-mono font-bold text-base uppercase tracking-wider text-ink">Ownership Opportunity</h4>
                    <TrendingUp className="w-4 h-4 text-gray-300 group-hover:text-alert transition-colors" />
                 </div>
                 <p className="text-sm text-graphite leading-relaxed font-sans">
                   Stop renting the dream. A rare chance for owner-operators to build equity.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 3: PLEXUS SPHERE */}
      <PlexusSphereSection isMobile={isMobile} />

      {/* SECTION 4: THE STRATEGIC PARTNERS */}
      <section className="px-6 md:px-8 lg:px-16 bg-white border-y border-gray-100 py-12 md:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto text-center w-full">
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-ink mb-6 md:mb-8">In Association With</h2>

           {/* Tier 1 */}
           <div className="mb-8 md:mb-10">
             <img
               src="/images/partners/sage%20bank%20logo.png"
               alt="Sage Capital Bank"
               className="h-12 md:h-16 lg:h-20 mx-auto mb-3 object-contain"
             />
             <div className="inline-block px-3 md:px-4 py-1 border border-alert/30 rounded-full">
                <p className="text-alert font-mono text-[9px] md:text-[10px] lg:text-xs uppercase tracking-widest font-bold">Exclusive Financial Partner</p>
             </div>
           </div>

           {/* Tier 2 */}
           <div className="flex justify-center items-center max-w-3xl mx-auto mb-8 md:mb-10 opacity-80">
              <img
                src="/images/partners/LT%20Commercial%20group%20logo.png"
                alt="LT Commercial Group"
                className="h-16 md:h-20 lg:h-24 mx-auto object-contain"
              />
           </div>

           {/* Tier 3: Hospitality Logos */}
           <div className="border-t border-gray-200 pt-6 md:pt-8 max-w-2xl mx-auto">
             <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">

                {/* Taco Man Logo */}
                <div className="flex items-center justify-center group cursor-default">
                  <img
                    src="/images/partners/Tacoman%20logo.jpg"
                    alt="Taco Man"
                    className="h-16 md:h-20 lg:h-24 object-contain group-hover:opacity-100 transition-opacity"
                  />
                </div>

                {/* Subele Tequila Logo */}
                <div className="flex items-center justify-center group cursor-default">
                  <img
                    src="/images/partners/Subele%20logo.png"
                    alt="Súbele Tequila"
                    className="h-16 md:h-20 lg:h-24 object-contain group-hover:opacity-100 transition-opacity"
                  />
                </div>

             </div>
           </div>

        </div>
      </section>

      {/* SECTION 5: RSVP FORM */}
      <section id="rsvp-section" className="px-6 md:px-8 lg:px-16 bg-canvas scroll-mt-0 py-12 md:py-16 lg:py-20">
        <div className="max-w-2xl mx-auto w-full">
          <div className="mb-8 md:mb-10 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-ink mb-3 md:mb-4 leading-none">Confirm Your Attendance.</h2>
            <p className="text-graphite font-sans text-sm md:text-base font-light">Space is strictly limited to ensure quality networking.</p>
          </div>

          <RSVPForm />
        </div>
      </section>

      <footer className="bg-ink py-12 md:py-16 text-center text-white px-6">
         <img
           src="/images/partners/Dacy%20logo.png"
           alt="Dacy Business Park"
           className="h-10 md:h-12 mx-auto mb-3 md:mb-4 object-contain"
         />
         <p className="text-[10px] md:text-xs font-mono text-gray-500 mb-6 md:mb-8 tracking-widest uppercase">Phase II Preview Event /// March 11, 2026</p>
         <p className="text-[9px] md:text-[10px] font-mono text-gray-700 uppercase">Designed by MinAI</p>
      </footer>
    </div>
  );
};