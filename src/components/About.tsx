import { CheckCircle2 } from 'lucide-react';

const features = [
  'Expert team with decades of combined experience',
  'Proven track record across multiple industries',
  'Tailored solutions for businesses of all sizes',
  'Continuous support and guidance',
  'Data-driven decision making',
  'Focus on sustainable growth'
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              Empowering Businesses Through Risk Intelligence
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              At thinkbase, we believe that understanding and managing risk is the key
              to unlocking sustainable business growth. Our mission is to equip businesses
              with the knowledge, tools, and strategies they need to navigate uncertainty
              with confidence.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              We combine cutting-edge risk assessment methodologies with practical,
              hands-on education to ensure that you and your team are prepared for
              whatever challenges lie ahead.
            </p>

            <div className="space-y-4 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={24} />
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
