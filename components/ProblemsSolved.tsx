
import React from 'react';

const ProblemCard: React.FC<{ title: string; desc: string; icon: string }> = ({ title, desc, icon }) => (
  <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
    <div className="text-2xl">{icon}</div>
    <div>
      <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
      <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const ProblemsSolved: React.FC = () => {
  return (
    <section className="py-24 bg-indigo-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <span className="inline-block px-4 py-1 rounded-full bg-indigo-500/30 text-indigo-200 text-sm font-semibold mb-6">
              The Problem
            </span>
            <h2 className="text-4xl font-bold mb-6">Tired of messy paperwork?</h2>
            <p className="text-indigo-100 text-lg mb-8">
              Real estate management is tough. We solve the biggest headaches so you can focus on selling.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ProblemCard 
                icon="❌" 
                title="No Manual Records" 
                desc="Move away from registers and Excel sheets that get lost or deleted." 
              />
              <ProblemCard 
                icon="📍" 
                title="Lead Tracking" 
                desc="Never lose a client. Track every call and visit in one central place." 
              />
              <ProblemCard 
                icon="🚀" 
                title="Faster Sales" 
                desc="Match buyers with properties instantly using our smart filters." 
              />
              <ProblemCard 
                icon="🗂️" 
                title="Organized Clients" 
                desc="Segment clients based on budget, location, and urgency automatically." 
              />
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="bg-indigo-800 p-8 rounded-3xl shadow-2xl rotate-3">
               <div className="space-y-4">
                 <div className="h-4 bg-indigo-700/50 rounded w-3/4"></div>
                 <div className="h-4 bg-indigo-700/50 rounded w-1/2"></div>
                 <div className="h-24 bg-indigo-700/50 rounded w-full"></div>
                 <div className="grid grid-cols-3 gap-2">
                   <div className="h-20 bg-indigo-600 rounded"></div>
                   <div className="h-20 bg-indigo-600 rounded"></div>
                   <div className="h-20 bg-indigo-600 rounded"></div>
                 </div>
               </div>
            </div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSolved;
