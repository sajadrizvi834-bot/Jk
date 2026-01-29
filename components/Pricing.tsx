
import React from 'react';

const Pricing: React.FC = () => {
  const contactEmail = "labbaikwelferfoundation5@gmail.com";
  
  const plans = [
    {
      name: "Starter Website",
      price: "999",
      description: "A fast, professional landing page for independent agents.",
      features: ["Custom Landing Page", "5 Property Listings", "WhatsApp Button", "Mobile Responsive", "Free Hosting"],
      button: "Buy Starter Pack",
      highlight: false
    },
    {
      name: "Professional Site",
      price: "1999",
      description: "Complete agency website with full inventory management.",
      features: ["Unlimited Listings", "Lead Tracking Dashboard", "Advanced SEO Setup", "Google Maps Integration", "Custom Domain Support"],
      button: "Buy Pro Package",
      highlight: true
    },
    {
      name: "AI-Premium Suite",
      price: "4999",
      description: "Our best website with built-in AI to handle your customers.",
      features: ["All Pro Features", "AI Sales Assistant", "Automatic Lead Capture", "Priority Support", "Weekly Site Backups", "White-glove Setup"],
      button: "Get Premium AI",
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Choose Your Website Package</h2>
          <p className="mt-4 text-slate-600 text-lg">Invest in your digital property store today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 transition-transform hover:-translate-y-2 flex flex-col ${
                plan.highlight ? 'border-indigo-600 scale-105 z-10' : 'border-transparent'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Best Seller
                </span>
              )}
              <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-extrabold text-slate-900">₹{plan.price}</span>
                <span className="text-slate-500 font-medium">/month</span>
              </div>
              <p className="text-slate-600 text-sm mb-8">{plan.description}</p>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href={`mailto:${contactEmail}?subject=Order Request for ${plan.name}`}
                className={`w-full py-4 rounded-xl font-bold transition-all text-center ${
                  plan.highlight 
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200' 
                    : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}
              >
                {plan.button}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
