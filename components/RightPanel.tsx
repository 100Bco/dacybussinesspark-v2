import React, { useState, useEffect } from 'react';
import { ConnectSuccessSection } from './ConnectSuccessSection';
import { Building2, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';

const PROJECT_IMAGES = [
  "/images/gallery/Image 0.jpg",
  "/images/gallery/Image 1.jpg",
  "/images/gallery/Image 2.jpg",
  "/images/gallery/Image 3.jpg",
  "/images/gallery/Image 4.jpg",
  "/images/gallery/Image 5.jpg"
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-ink mb-6 md:mb-8 leading-[0.95] tracking-tight">
                Stop Renting Your Dream!
              </h2>

              {/* PROJECT GALLERY CAROUSEL */}
              <div className="w-full mb-6 md:mb-8">
                <div className="relative overflow-hidden rounded-sm w-full h-[300px] md:h-[400px] lg:h-[500px] bg-gray-100">
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

              {/* Single Description Text */}
              <p className="text-sm md:text-base text-graphite font-sans font-light text-center">
                First look at Phase II flex units. Secure for your business.
              </p>
           </div>
        </div>
      </section>

      {/* SECTION 3: THE STRATEGIC PARTNERS */}
      <section className="px-6 md:px-8 lg:px-16 bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto text-center w-full">
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-ink mb-10 md:mb-12">Hosted by</h2>

           {/* All 4 Logos in a Row */}
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 max-w-5xl mx-auto">
              {/* Sage Capital Bank */}
              <div className="flex items-center justify-center">
                <img
                  src="/images/partners/sage%20bank%20logo.png"
                  alt="Sage Capital Bank"
                  className="h-12 md:h-14 lg:h-16 w-full object-contain"
                />
              </div>

              {/* LT Commercial Group */}
              <div className="flex items-center justify-center">
                <img
                  src="/images/partners/LT%20Commercial%20group%20logo.png"
                  alt="LT Commercial Group"
                  className="h-12 md:h-14 lg:h-16 w-full object-contain"
                />
              </div>

              {/* Taco Man */}
              <div className="flex items-center justify-center">
                <img
                  src="/images/partners/Tacoman%20logo.jpg"
                  alt="Taco Man"
                  className="h-12 md:h-14 lg:h-16 w-full object-contain"
                />
              </div>

              {/* Subele Tequila */}
              <div className="flex items-center justify-center">
                <img
                  src="/images/partners/Subele%20logo.png"
                  alt="Súbele Tequila"
                  className="h-12 md:h-14 lg:h-16 w-full object-contain"
                />
              </div>
           </div>

        </div>
      </section>

      {/* SECTION 4: CONNECT SUCCESS - CONFIRM ATTENDANCE */}
      <ConnectSuccessSection />

      <footer className="bg-ink py-12 md:py-16 text-center text-white px-6">
         <img
           src="/images/partners/Dacy%20logo.png"
           alt="Dacy Business Park"
           className="h-10 md:h-12 mx-auto mb-3 md:mb-4 object-contain"
         />
         <p className="text-[10px] md:text-xs font-mono text-gray-500 mb-6 md:mb-8 tracking-widest uppercase">Phase II Preview Event /// March 11, 2026</p>
         <a
           href="https://www.minai.biz/"
           target="_blank"
           rel="noopener noreferrer"
           className="text-[9px] md:text-[10px] font-mono text-white uppercase hover:text-alert transition-colors"
         >
           Powered by MinAI
         </a>
      </footer>
    </div>
  );
};
