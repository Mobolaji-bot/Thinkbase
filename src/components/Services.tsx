import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const servicePhases = [
  {
    id: 'consultation',
    title: 'CONSULTATION',
    description: 'Understanding the business, its customers, and operational challenges.',
    image: 'assets/ChatGPT_Image_Mar_13,_2026,_07_47_14_PM.png',
    shortDescription: 'Discover the foundations of your business and identify key opportunities through deep-dive consultation and analysis.'
  },
  {
    id: 'assessment',
    title: 'BUSINESS OR CX ASSESSMENT',
    description: 'Conducting audits, diagnostics, or risk reviews.',
    image: 'assets/ChatGPT_Image_Mar_13,_2026,_07_50_09_PM.png',
    shortDescription: 'Comprehensive assessment of your customer experience and operational systems to identify gaps and risks.'
  },
  {
    id: 'insights',
    title: 'INSIGHT & REPORTING',
    description: 'Delivering clear findings and practical recommendations.',
    image: 'assets/image_2026-03-13_195418076.png',
    shortDescription: 'Transform data into actionable intelligence with clear visualizations and prioritized recommendations.'
  },
  {
    id: 'implementation',
    title: 'IMPLEMENTATION',
    description: 'Supporting businesses in implementing systems and improvements.',
    image: 'assets/office.jpg',
    shortDescription: 'Hands-on support to translate recommendations into operational reality with proper change management.'
  },
  {
    id: 'advisory',
    title: 'CONTINUOUS ADVISORY',
    description: 'Providing training, follow-up services, and strategic guidance.',
    image: 'assets/customer.jpeg',
    shortDescription: 'Ongoing strategic support to sustain improvements and drive continuous business growth.'
  }
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
              <div className="h-48 overflow-hidden bg-gray-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#1d2d45] mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 font-semibold mb-4">{service.description}</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow">
                  {service.shortDescription}
                </p>

                <Link
                  to={`/service/${service.id}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#3b5d91] text-white px-6 py-2 rounded-lg hover:bg-[#1d2d45] transition-all duration-300 font-medium text-sm"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-[#1d2d45] to-[#3b5d91] text-white py-16 px-8 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <h3 className="text-4xl font-bold mb-8">Why Choose Our Approach</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-blue-300 font-bold text-2xl">✓</span>
                  <span>Structured methodology covering all critical business areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-300 font-bold text-2xl">✓</span>
                  <span>Focused on practical, implementable solutions for SMEs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-300 font-bold text-2xl">✓</span>
                  <span>Ongoing support to ensure sustained success</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-300 font-bold text-2xl">✓</span>
                  <span>Data-driven insights to guide business decisions</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="assets/customer.jpeg"
                alt="Service consultation"
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
