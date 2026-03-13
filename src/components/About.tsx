const keyObjectives = [
  'Helping businesses reduce silent customer loss by implementing structured follow-up and customer engagement systems.',
  'Providing insights and training that improve how businesses interact with customers.',
  'Helping SMEs implement practical tools for managing customer data and operations.',
  'Supporting businesses with effective systems, controls and risk management frameworks that prevent revenue leakage, service failures and achievement of organizational objectives.'
];

const businessProblems = [
  'Inconsistent customer service experiences',
  'Limited visibility into how customers are treated',
  'Weak internal processes and operational discipline',
  'Poor complaint handling and customer follow-up',
  'Lack of accountability across frontline teams'
];

const businessConsequences = [
  'Customer churn',
  'Reduced revenue growth',
  'Reputational damage',
  'Operational inefficiencies'
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold text-[#1d2d45] mb-6">About</h1>
              <h2 className="text-5xl font-bold text-[#1d2d45] underline decoration-[#f4a96f] decoration-4 underline-offset-4">
                ThinkBase Advisory
              </h2>
            </div>

            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Thinkbase Advisory is a customer experience-led business advisory firm focused on helping organisations improve service delivery, strengthen operational systems, and enhance business performance.
              </p>

              <p>
                Many businesses invest heavily in attracting customers but pay less attention to the systems, processes, and behaviours that determine whether those customers return.
              </p>
            </div>

            <div className="bg-[#1d2d45] text-white p-8 rounded-xl space-y-4">
              <h3 className="text-2xl font-bold">MISSION STATEMENT:</h3>
              <p className="text-base leading-relaxed">
                To help small and growing businesses retain customers, strengthen business systems, and achieve sustainable growth through practical customer experience solutions, structured operational systems, and effective risk management.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              src="assets/customer.jpeg"
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="flex items-center justify-center">
            <img
              src="assets/office.jpg"
              alt="Business advisory"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-[#1d2d45] mb-4">KEY OBJECTIVES:</h3>
              <ul className="space-y-4">
                {keyObjectives.map((objective, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-[#f4a96f] font-bold text-xl flex-shrink-0">•</span>
                    <span className="text-gray-700 text-base leading-relaxed">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#1d2d45] to-[#3b5d91] text-white py-16 px-8 rounded-2xl space-y-12">
          <div>
            <h3 className="text-4xl font-bold mb-6">The BUSINESS PROBLEMS WE SOLVE</h3>
            <p className="text-lg mb-8">
              Many businesses lose customers and revenue due to hidden operational and service delivery gaps.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4 text-blue-200">Common issues include:</h4>
                <ul className="space-y-3">
                  {businessProblems.map((problem, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-blue-300 font-bold">▪</span>
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-4 text-blue-200">These challenges can lead to:</h4>
                <ul className="space-y-3">
                  {businessConsequences.map((consequence, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-blue-300 font-bold">▪</span>
                      <span>{consequence}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-8 text-base font-semibold">
              <span className="underline">Thinkbase Advisory</span> helps organisations identify and address these gaps in a structured and practical way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
