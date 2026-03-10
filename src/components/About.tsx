import { CheckCircle2 } from 'lucide-react';

const features = [
  'Deep expertise in customer experience design and measurement',
  'Proven track record improving retention and operational efficiency',
  'Tailored solutions for businesses of all sizes and industries',
  'Data-driven approach to identifying and closing service gaps',
  'Comprehensive internal process optimization',
  'Commitment to sustainable, customer-centric growth'
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#e0e5ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="assets/customer.png"
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              Why <span className='text-[#43659b]'>Customer Experience</span> Matters
            </h2>

            <p className="text-lg text-black leading-relaxed">
              Most businesses fail not because of bad products, but because customer experience is unmanaged, unmeasured, and inconsistent.
              We believe that when you truly understand your customers and strengthen your operations around that understanding,
              sustainable growth naturally follows.
            </p>

            <p className="text-lg text-black leading-relaxed">
              We combine comprehensive CX audits, advanced measurement systems, and operational optimization to help you close
              the gap between your intended customer experience and what's actually being delivered.
            </p>

            <div className="space-y-4 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#2857a3] flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
