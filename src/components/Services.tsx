const servicePhases = [
  {
    title: 'CONSULTATION',
    description: 'Understanding the business, its customers, and operational challenges.'
  },
  {
    title: 'BUSINESS OR CX ASSESSMENT',
    description: 'Conducting audits, diagnostics, or risk reviews.'
  },
  {
    title: 'INSIGHT & REPORTING',
    description: 'Delivering clear findings and practical recommendations.'
  },
  {
    title: 'IMPLEMENTATION',
    description: 'Supporting businesses in implementing systems and improvements.'
  },
  {
    title: 'CONTINUOUS ADVISORY',
    description: 'Providing training, follow-up services, and strategic guidance.'
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

        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {servicePhases.slice(0, 3).map((phase, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-full bg-[#3b5d91] text-white py-6 px-6 rounded-2xl">
                  <h3 className="text-2xl font-bold">{phase.title}</h3>
                </div>
                <p className="text-lg text-gray-700 font-semibold leading-relaxed min-h-[80px] flex items-center">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#1d2d45] to-[#3b5d91] text-white py-16 px-8 rounded-2xl">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {servicePhases.slice(3).map((phase, index) => (
              <div
                key={index + 3}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-full bg-[#5a7fb8] text-white py-6 px-6 rounded-2xl">
                  <h3 className="text-2xl font-bold">{phase.title}</h3>
                </div>
                <p className="text-lg text-gray-700 font-semibold leading-relaxed min-h-[80px] flex items-center">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
