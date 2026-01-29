
import React from 'react';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <img 
              src="https://picsum.photos/seed/choice/800/800" 
              alt="Happy user" 
              className="rounded-3xl shadow-xl w-full object-cover aspect-square"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">Why Thousands of Dealers Choose JK Property</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">✓</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Incredibly Easy to Use</h4>
                  <p className="text-slate-600">Built for agents, not IT experts. If you can use WhatsApp, you can use JK Property.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">✓</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Saves Time and Money</h4>
                  <p className="text-slate-600">Reduce operational costs by 40% and save 10+ hours a week on manual reporting.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">✓</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Tailored for Real Estate</h4>
                  <p className="text-slate-600">We don't do generic CRM. Every feature is designed for property dealers and builders.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
