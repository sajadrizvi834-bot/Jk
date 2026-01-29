
import React from 'react';

const steps = [
  {
    title: "Sign Up",
    desc: "Create your workspace on JK Property in under 2 minutes.",
    icon: "👤"
  },
  {
    title: "Add Inventory",
    desc: "Upload properties, client details, and active leads effortlessly.",
    icon: "🏠"
  },
  {
    title: "Manage & Follow-up",
    desc: "Let the app handle reminders and lead tracking while you close sales.",
    icon: "⚡"
  },
  {
    title: "Track Success",
    desc: "View real-time performance on your visual dashboard.",
    icon: "📊"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">How It Works</h2>
          <p className="mt-4 text-slate-600 text-lg">Four simple steps to digitize your real estate business.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group text-center">
              <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-indigo-50 text-4xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600">{step.desc}</p>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[70%] w-full h-px bg-slate-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
