import { Target, Lightbulb, TrendingUp, Users } from 'lucide-react';

const keyObjectives = [
  { text: 'Reduce silent customer loss through structured engagement.', icon: <Users className="w-6 h-6" /> },
  { text: 'Deliver insights and training to transform interactions.', icon: <Lightbulb className="w-6 h-6" /> },
  { text: 'Implement practical tools for SME operational excellence.', icon: <Target className="w-6 h-6" /> },
  { text: 'Strengthen systems and controls for sustainable growth.', icon: <TrendingUp className="w-6 h-6" /> }
];

const businessProblems = [
  'Inconsistent customer service experiences',
  'Limited visibility into frontline behavior',
  'Weak internal processes and discipline',
  'Poor complaint handling and follow-up'
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {/* Intro Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-1.5 bg-[#3b5d91]/10 text-[#3b5d91] rounded-full text-xs font-bold tracking-widest uppercase">
              Who We Are
            </div>
            <h2 className="text-5xl font-extrabold text-[#1d2d45] leading-tight">
              About <br />
              <span className="text-gradient">Thinkbase Advisory</span>
            </h2>
            
            <div className="space-y-6 text-xl text-gray-600 font-light leading-relaxed">
              <p>
                Thinkbase Advisory is a customer experience-led business advisory firm dedicated to helping organisations improve service delivery and strengthen operational systems.
              </p>
              <p>
                We bridge the gap between attracting customers and retaining them, ensuring that your business has the systems, processes, and behaviors needed for long-term success.
              </p>
            </div>

            <div className="bg-[#1d2d45] p-10 rounded-[2rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transform transition-transform group-hover:scale-150 duration-700"></div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Target className="text-blue-300" />
                Our Mission
              </h3>
              <p className="text-blue-50 text-lg leading-relaxed font-light">
                To help small and growing businesses retain customers, strengthen systems, and achieve sustainable growth through practical CX solutions and effective risk management.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-50">
              <img
                src="assets/customer.jpeg"
                alt="Thinkbase Collaboration"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative backgrounds */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-10 opacity-30"></div>
          </div>
        </div>

        {/* Objectives Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-50">
              <img
                src="assets/office.jpg"
                alt="Business Advisory"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-12">
            <h3 className="text-4xl font-bold text-[#1d2d45]">Key Objectives</h3>
            <div className="grid gap-8">
              {keyObjectives.map((obj, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-[#3b5d91] group-hover:bg-[#3b5d91] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg">
                    {obj.icon}
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 leading-relaxed group-hover:text-[#1d2d45] transition-colors">
                      {obj.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Problems Solved Section */}
        <div className="bg-gradient-to-br from-[#1d2d45] to-[#3b5d91] rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-3xl">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-32 -mt-32"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h3 className="text-4xl font-bold">The Business Problems <br /> <span className="text-blue-300">We Solve</span></h3>
              <p className="text-xl text-blue-50 font-light leading-relaxed">
                Many businesses lose customers and revenue due to hidden operational and service delivery gaps. We help you identify and close these gaps once and for all.
              </p>
              <div className="pt-8 grid gap-4">
                {businessProblems.map((problem, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                    <span className="text-lg">{problem}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8 flex flex-col justify-center">
              <div className="glass p-10 rounded-3xl border-white/5">
                <blockquote className="text-2xl font-light italic text-blue-100 leading-relaxed">
                  "Thinkbase Advisory helps organisations identify and address these gaps in a structured and practical way, ensuring that every customer interaction adds value."
                </blockquote>
              </div>
              <div className="flex items-center gap-4 px-4">
                <div className="h-[1px] flex-grow bg-white/10"></div>
                <span className="text-blue-300 font-bold tracking-widest uppercase text-xs">Excellence Guaranteed</span>
                <div className="h-[1px] flex-grow bg-white/10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
