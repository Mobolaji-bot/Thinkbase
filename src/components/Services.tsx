import { Shield, BookOpen, LineChart, Users, Target, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Customer Experience Audit',
    description: 'Deep-dive analysis of your customer journey to uncover pain points, service gaps, and opportunities for improvement.'
  },
  {
    icon: BookOpen,
    title: 'CX Measurement & Analytics',
    description: 'Establish measurable KPIs and monitoring systems to track customer satisfaction, retention, and loyalty metrics consistently.'
  },
  {
    icon: LineChart,
    title: 'Operational Excellence',
    description: 'Strengthen internal processes and controls to ensure consistent service delivery and operational efficiency across all touchpoints.'
  },
  {
    icon: Users,
    title: 'Team Alignment & Training',
    description: 'Align your entire organization around customer-centric values and equip teams with tools to deliver exceptional experiences.'
  },
  {
    icon: Target,
    title: 'Retention Strategy',
    description: 'Develop actionable strategies to improve customer retention, reduce churn, and increase lifetime value.'
  },
  {
    icon: Lightbulb,
    title: 'Sustainable Growth Planning',
    description: 'Build long-term strategies for predictable, sustainable business growth rooted in strong customer relationships.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Help</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to help you understand, measure, and improve your customer experience
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
