import React, { useState, useEffect } from 'react';
import { RSVPForm } from './RSVPForm';
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

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % PROJECT_IMAGES.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="w-full bg-paper text-ink selection:bg-alert/10 selection:text-alert">
      
      {/* SECTION 1: HERO VIDEO */}
      <section className="relative h-[80vh] md:h-[95vh] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2340&auto=format&fit=crop" 
          alt="Networking Atmosphere" 
          className="w-full h-full object-cover grayscale opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-80"></div>
        <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full">
          <div className="border-l-2 border-alert pl-6 md:pl-8">
            <h1 className="text-5xl md:text-8xl font-montserrat font-bold text-white leading-[0.9] tracking-tight">
              The Insider <br/> <span className="italic text-gray-300">Gathering.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE BUSINESS CASE */}
      <section className="py-24 bg-paper">
        <div className="px-8 md:px-16 max-w-7xl mx-auto">
           {/* Title Group */}
           <div className="mb-20 max-w-4xl">
              <h2 className="text-6xl font-montserrat font-bold text-ink mb-8 leading-[0.95] tracking-tight">
                The Pre-Market <br/>Preview.
              </h2>
              <div className="w-24 h-px bg-alert mb-8"></div>
              
              <p className="text-lg leading-relaxed text-graphite font-light max-w-3xl font-sans mb-12">
                Demand for flex-industrial in Kyle is outpacing supply. <strong className="text-ink font-medium">Tour the steel and concrete</strong> of Phase II before the mass market listing.
              </p>

              {/* PROJECT GALLERY CAROUSEL */}
              <div className="w-full">
                <div className="relative overflow-hidden rounded-sm w-full h-[300px] md:h-[500px] bg-gray-100">
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
                <div className="flex justify-start gap-3 mt-6">
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
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              {/* Item 1 */}
              <div className="pt-6 border-t border-gray-200 group hover:border-alert transition-colors duration-500">
                 <div className="flex justify-between items-start mb-4">
                    <h4 className="font-mono font-bold text-lg uppercase tracking-wider text-ink">Inventory Preview</h4>
                    <Building2 className="w-5 h-5 text-gray-300 group-hover:text-alert transition-colors" />
                 </div>
                 <p className="text-base text-graphite leading-relaxed font-sans">
                   First look at 1,500 – 15,000 SQFT flex units suited for diverse industries.
                 </p>
              </div>

              {/* Item 2 */}
              <div className="pt-6 border-t border-gray-200 group hover:border-alert transition-colors duration-500">
                 <div className="flex justify-between items-start mb-4">
                    <h4 className="font-mono font-bold text-lg uppercase tracking-wider text-ink">Ownership Opportunity</h4>
                    <TrendingUp className="w-5 h-5 text-gray-300 group-hover:text-alert transition-colors" />
                 </div>
                 <p className="text-base text-graphite leading-relaxed font-sans">
                   Stop renting the dream. A rare chance for owner-operators to build equity.
                 </p>
              </div>

              {/* Item 3 */}
              <div className="pt-6 border-t border-gray-200 group hover:border-alert transition-colors duration-500">
                 <div className="flex justify-between items-start mb-4">
                    <h4 className="font-mono font-bold text-lg uppercase tracking-wider text-ink">Broker Protection</h4>
                    <ShieldCheck className="w-5 h-5 text-gray-300 group-hover:text-alert transition-colors" />
                 </div>
                 <p className="text-base text-graphite leading-relaxed font-sans">
                   We value and protect our broker partnerships. Full commission structure protected.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 3: THE HOSPITALITY */}
      <section className="py-24 bg-canvas">
        <div className="px-8 md:px-16 max-w-[1600px] mx-auto">
            
            {/* Header Area */}
            <div className="mb-16 max-w-4xl">
               <h2 className="text-6xl font-montserrat font-bold text-ink mb-6 leading-none">Crafted <br/>Conversations.</h2>
               <p className="text-lg text-graphite leading-relaxed mb-8 font-sans font-light max-w-2xl">
                 Most open houses are transactional. This is relational. We are trading sales pitches for genuine connection, fueled by local culinary craftsmanship.
               </p>
            </div>

            {/* Images - Side by Side, Square, Smaller */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              
              {/* Item 1: Taco Man */}
               <div className="group cursor-pointer max-w-md">
                  {/* Changed to aspect-square and max-w-md to make it smaller and square */}
                  <div className="w-full aspect-square overflow-hidden rounded-sm mb-6 relative">
                    <img 
                      src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2271&auto=format&fit=crop" 
                      alt="Street Tacos" 
                      className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-150"
                    />
                  </div>
                  <div className="border-t border-gray-300 pt-5 flex justify-between items-end">
                     <div>
                        <h3 className="text-3xl font-sans font-bold text-ink mb-1">Live-Fire Culinary</h3>
                        <p className="font-mono text-xs text-alert uppercase tracking-widest font-bold">Taco Man</p>
                     </div>
                     <ArrowRight className="w-6 h-6 text-gray-300 group-hover:text-alert transition-colors duration-300" />
                  </div>
               </div>

               {/* Item 2: Tequila */}
               <div className="group cursor-pointer mt-12 md:mt-0 max-w-md">
                   {/* Changed to aspect-square and max-w-md to make it smaller and square */}
                  <div className="w-full aspect-square overflow-hidden rounded-sm mb-6 relative">
                    <img 
                      src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2340&auto=format&fit=crop" 
                      alt="Tequila Flight" 
                      className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-150"
                    />
                  </div>
                   <div className="border-t border-gray-300 pt-5 flex justify-between items-end">
                     <div>
                        <h3 className="text-3xl font-sans font-bold text-ink mb-1">Agave Tasting</h3>
                        <p className="font-mono text-xs text-alert uppercase tracking-widest font-bold">Subele Tequila</p>
                     </div>
                     <ArrowRight className="w-6 h-6 text-gray-300 group-hover:text-alert transition-colors duration-300" />
                  </div>
               </div>

            </div>

        </div>
      </section>

      {/* SECTION 4: THE STRATEGIC PARTNERS */}
      <section className="py-24 px-8 md:px-16 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
           <h2 className="text-6xl font-montserrat font-bold text-ink mb-16">In Association With</h2>
           
           {/* Tier 1 */}
           <div className="mb-20">
             <div className="text-4xl md:text-6xl font-serif text-ink tracking-tight mb-4">SAGE CAPITAL BANK</div>
             <div className="inline-block px-4 py-1 border border-alert/30 rounded-full">
                <p className="text-alert font-mono text-[10px] md:text-xs uppercase tracking-widest font-bold">Exclusive Financial Partner</p>
             </div>
           </div>

           {/* Tier 2 */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center max-w-3xl mx-auto mb-20 opacity-80">
              <div className="text-xl md:text-2xl font-mono font-bold tracking-tighter text-gray-600">LT COMMERCIAL GROUP</div>
              <div className="text-xl md:text-2xl font-mono font-bold tracking-tighter text-gray-600">DACY BUSINESS PARK</div>
           </div>

           {/* Tier 3: Hospitality Logos */}
           <div className="border-t border-gray-200 pt-16 max-w-2xl mx-auto">
             <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                
                {/* Visual Representation of Taco Man Logo */}
                <div className="flex flex-col items-center gap-2 group cursor-default">
                  <div className="border-2 border-black p-1 w-12 h-12 rounded-full flex items-center justify-center mb-1 bg-ink text-white">
                    <span className="font-sans font-black text-xl">T</span>
                  </div>
                  <span className="font-sans font-black text-xl tracking-tighter uppercase group-hover:text-alert transition-colors">TACO MAN</span>
                </div>

                {/* Visual Representation of Subele Tequila Logo */}
                <div className="flex flex-col items-center gap-2 group cursor-default">
                   <div className="font-serif italic text-3xl font-bold border-b border-black pb-1 group-hover:text-alert group-hover:border-alert transition-colors">
                     Súbele
                   </div>
                   <span className="font-mono text-[10px] tracking-[0.4em] uppercase">Tequila</span>
                </div>

             </div>
           </div>

        </div>
      </section>

      {/* SECTION 5: RSVP FORM */}
      <section id="rsvp-section" className="py-24 px-8 md:px-16 bg-canvas scroll-mt-0">
        <div className="max-w-3xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-6xl font-montserrat font-bold text-ink mb-6">Confirm Your Attendance.</h2>
            <p className="text-graphite font-sans text-lg font-light">Space is strictly limited to ensure quality networking.</p>
          </div>
          
          <RSVPForm />
        </div>
      </section>

      <footer className="bg-ink py-16 text-center text-white">
         <div className="font-serif text-2xl mb-4 italic">Dacy Business Park</div>
         <p className="text-xs font-mono text-gray-500 mb-8 tracking-widest uppercase">Phase II Preview Event /// March 11, 2026</p>
         <p className="text-[10px] font-mono text-gray-700 uppercase">Designed by MinAI</p>
      </footer>
    </div>
  );
};