import { ArrowRight } from 'lucide-react';

const servicePhases = [
  {
    id: 'consultation',
    title: 'CONSULTATION',
    description: 'Understanding the business, its customers, and operational challenges.',
    image: 'assets/support.jpg',
    shortDescription: 'Discover the foundations of your business and identify key opportunities through deep-dive consultation and analysis.'
  },
  {
    id: 'assessment',
    title: 'BUSINESS OR CX ASSESSMENT',
    description: 'Conducting audits, diagnostics, or risk reviews.',
    image: 'assets/risk.jpg',
    shortDescription: 'Comprehensive assessment of your customer experience and operational systems to identify gaps and risks.'
  },
  {
    id: 'insights',
    title: 'INSIGHT & REPORTING',
    description: 'Delivering clear findings and practical recommendations.',
    image: 'assets/business-support.jpg',
    shortDescription: 'Transform data into actionable intelligence with clear visualizations and prioritized recommendations.'
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-[#1d2d45] mb-6">Our Service Model</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive framework designed to understand your business, identify opportunities, and implement sustainable improvements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicePhases.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="flex justify-center h-48 overflow-hidden bg-white">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-[50%] h-full hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#1d2d45] mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 font-semibold mb-4">{service.description}</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow">
                  {service.shortDescription}
                </p>

                <a
                  className="inline-flex items-center justify-center gap-2 bg-[#3b5d91] text-white px-6 py-2 rounded-lg hover:bg-[#1d2d45] transition-all duration-300 font-medium text-sm"
                >
                  Learn More
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}