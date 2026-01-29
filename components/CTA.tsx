
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-600 rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                   <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                   </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
             </svg>
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Launch your professional property website in 48 hours.</h2>
            <p className="text-indigo-100 text-xl mb-10 max-w-2xl mx-auto">
              Join the elite circle of property dealers who own high-converting websites. We build, you sell.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:labbaikwelferfoundation5@gmail.com?subject=Website Order Inquiry"
                className="bg-white text-indigo-600 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-slate-50 transition-all shadow-xl inline-block"
              >
                Buy My Website Now
              </a>
              <button className="bg-indigo-500 text-white border border-indigo-400 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-indigo-400 transition-all">
                See Live Demo
              </button>
            </div>
            <p className="mt-8 text-indigo-200 text-sm">
              Contact: labbaikwelferfoundation5@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
