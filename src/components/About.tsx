const keyObjectives = [
  'Helping businesses reduce silent customer loss by implementing structured follow-up and customer engagement systems.',
  'Providing insights and training that improve how businesses interact with customers.',
  'Helping SMEs implement practical tools for managing customer data and operations.',
  'Supporting businesses with effective systems, controls and risk management frameworks that prevent revenue leakage, service failures and achievement of organizational objectives.'
];

export default function About() {
  return (
    <section id="about" className="pt-12 bg-white">
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

              <div>
                <h3 className="text-3xl font-bold text-[#1d2d45] mt-10 mb-3">KEY OBJECTIVES:</h3>
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

          <div className="flex items-center justify-center">
            <img
              src="./assets/reception.jpg"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>


        
      </div>
    </section>
  );
}