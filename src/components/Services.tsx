import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Search, Users2, ShieldCheck } from 'lucide-react';

const servicePhases = [
  {
    id: 'consultation',
    title: 'CONSULTATION',
    icon: <Users2 className="w-8 h-8" />,
    description: 'Understanding the business, its customers, and operational challenges.',
    image: 'assets/ChatGPT_Image_Mar_13,_2026,_07_47_14_PM.png',
    shortDescription: 'Discover the foundations of your business and identify key opportunities through deep-dive consultation and analysis.'
  },
  {
    id: 'assessment',
    title: 'BUSINESS OR CX ASSESSMENT',
    icon: <Search className="w-8 h-8" />,
    description: 'Conducting audits, diagnostics, or risk reviews.',
    image: 'assets/ChatGPT_Image_Mar_13,_2026,_07_50_09_PM.png',
    shortDescription: 'Comprehensive assessment of your customer experience and operational systems to identify gaps and risks.'
  },
  {
    id: 'insights',
    title: 'INSIGHT & REPORTING',
    icon: <BarChart3 className="w-8 h-8" />,
    description: 'Delivering clear findings and practical recommendations.',
    image: 'assets/insight_reporting_revamped.png',
    shortDescription: 'Transform data into actionable intelligence with clear visualizations and prioritized recommendations.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-block px-4 py-1.5 bg-[#3b5d91]/10 text-[#3b5d91] rounded-full text-xs font-bold tracking-widest uppercase">
            What We Do
          </div>
          <h2 className="text-5xl font-bold text-[#1d2d45] tracking-tight">Our Service Model</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            A precise framework designed to unlock value and drive operational excellence in your SME.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicePhases.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex flex-col h-full border border-gray-100"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1d2d45]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-6 left-6 p-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 transform -translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 text-[#1d2d45]">
                  {service.icon}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[#1d2d45] mb-3 group-hover:text-[#3b5d91] transition-colors">{service.title}</h3>
                <p className="text-[#3b5d91] text-sm font-bold mb-4 tracking-wide uppercase">{service.description}</p>
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow font-light">
                  {service.shortDescription}
                </p>

                <Link
                  to={`/service/${service.id}`}
                  className="inline-flex items-center justify-between bg-gray-50 text-[#1d2d45] px-6 py-4 rounded-2xl group-hover:bg-[#1d2d45] group-hover:text-white transition-all duration-300 font-bold"
                >
                  Explore Details
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 relative overflow-hidden bg-[#1d2d45] rounded-[2.5rem] p-8 md:p-16">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#3b5d91]/20 to-transparent"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Why Choose <br />
                <span className="text-blue-300">Thinkbase Advisory</span>
              </h3>
              
              <div className="grid gap-6">
                {[
                  'Structured methodology for SMEs',
                  'Practical, implementable solutions',
                  'Strategic alignment and growth',
                  'Data-backed decision intelligence'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group/item">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-400/20 flex items-center justify-center text-blue-300 border border-blue-400/30 group-hover/item:bg-blue-400 group-hover/item:text-[#1d2d45] transition-all">
                      <ShieldCheck size={18} />
                    </div>
                    <span className="text-lg text-blue-50 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="glass-dark p-4 rounded-3xl border-white/5">
                <img
                  src="assets/customer.jpeg"
                  alt="Thinkbase Excellence"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover border border-white/10"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
