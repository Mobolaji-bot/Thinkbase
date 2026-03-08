import { Shield, BookOpen, LineChart, Users, Target, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Risk Assessment',
    description: 'Comprehensive evaluation of your business risks with actionable insights and mitigation strategies.'
  },
  {
    icon: BookOpen,
    title: 'Risk Education',
    description: 'Interactive training programs that teach your team the fundamentals of risk management.'
  },
  {
    icon: LineChart,
    title: 'Growth Strategy',
    description: 'Data-driven strategies to help your business scale while managing associated risks.'
  },
  {
    icon: Users,
    title: 'Consulting Services',
    description: 'One-on-one expert guidance tailored to your specific business challenges and goals.'
  },
  {
    icon: Target,
    title: 'Compliance Support',
    description: 'Navigate regulatory requirements and ensure your business stays compliant.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation Advisory',
    description: 'Strategic advice on adopting new technologies and processes with minimal risk.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive risk management solutions designed to protect and grow your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
