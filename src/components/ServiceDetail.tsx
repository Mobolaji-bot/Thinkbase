import { ArrowLeft } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';

const serviceDetails: Record<string, {
  title: string;
  fullTitle: string;
  description: string;
  overview: string;
  benefits: string[];
  process: string[];
  image: string;
}> = {
  consultation: {
    title: 'Consultation',
    fullTitle: 'Business Consultation',
    description: 'Understanding the business, its customers, and operational challenges.',
    overview: 'Our consultation phase is designed to deeply understand your business landscape, customer dynamics, and operational challenges. We engage with your leadership team and frontline staff to gain comprehensive insights into how your organization operates, where friction points exist, and what opportunities lie ahead.',
    benefits: [
      'Clear understanding of your business ecosystem',
      'Identification of customer pain points',
      'Visibility into operational bottlenecks',
      'Foundation for strategic improvements',
      'Stakeholder alignment on priorities'
    ],
    process: [
      'Initial business assessment and scoping',
      'Stakeholder interviews with leadership and frontline teams',
      'Customer journey mapping',
      'Process flow analysis',
      'Findings and recommendations presentation'
    ],
    image: 'assets/ChatGPT_Image_Mar_13,_2026,_07_47_14_PM.png'
  },
  assessment: {
    title: 'Business or CX Assessment',
    fullTitle: 'Comprehensive Business & CX Assessment',
    description: 'Conducting audits, diagnostics, or risk reviews.',
    overview: 'We conduct thorough audits and diagnostics of your customer experience and business operations. This phase involves analyzing customer feedback, service delivery metrics, operational processes, and risk factors to identify gaps between intended and actual experiences.',
    benefits: [
      'Data-driven identification of service gaps',
      'Risk and compliance assessment',
      'Benchmarking against industry standards',
      'Quantified impact analysis',
      'Prioritized improvement roadmap'
    ],
    process: [
      'Customer feedback collection and analysis',
      'Service delivery audit',
      'Operational systems evaluation',
      'Risk and controls assessment',
      'Detailed diagnostic report with findings'
    ],
    image: 'assets/ChatGPT_Image_Mar_13,_2026,_07_50_09_PM.png'
  },
  insights: {
    title: 'Insight & Reporting',
    fullTitle: 'Actionable Insights & Strategic Reporting',
    description: 'Delivering clear findings and practical recommendations.',
    overview: 'Transform diagnostic findings into actionable intelligence. We deliver comprehensive reports with clear visualizations, detailed findings, and practical recommendations prioritized by impact and feasibility. Our insights equip you with the knowledge needed to drive meaningful change.',
    benefits: [
      'Clear, visual presentation of findings',
      'Prioritized recommendations with ROI estimates',
      'Practical implementation frameworks',
      'Stakeholder-ready reporting',
      'Data-backed decision making'
    ],
    process: [
      'Advanced analytics and data visualization',
      'Trend and pattern identification',
      'Root cause analysis',
      'Benchmarking against best practices',
      'Executive summary and detailed reports'
    ],
    image: 'assets/image_2026-03-13_195418076.png'
  },
  implementation: {
    title: 'Implementation',
    fullTitle: 'Guided Implementation & Change Management',
    description: 'Supporting businesses in implementing systems and improvements.',
    overview: 'We don\'t just recommend—we support you through implementation. Our team works alongside yours to ensure recommendations are translated into operational reality, systems are properly configured, and teams are equipped with the skills and mindset to sustain improvements.',
    benefits: [
      'Hands-on implementation support',
      'Risk mitigation through change management',
      'Staff training and capability building',
      'System configuration and testing',
      'Sustainable change embedding'
    ],
    process: [
      'Implementation planning and sequencing',
      'System setup and configuration',
      'Team training programs',
      'Change management support',
      'Quality assurance and testing'
    ],
    image: 'assets/office.jpg'
  },
  advisory: {
    title: 'Continuous Advisory',
    fullTitle: 'Ongoing Strategic Advisory & Support',
    description: 'Providing training, follow-up services, and strategic guidance.',
    overview: 'Success doesn\'t end at implementation. We provide continuous advisory support to ensure improvements stick, adapt to changing circumstances, and evolve as your business grows. This includes regular check-ins, advanced training, and strategic guidance on emerging opportunities.',
    benefits: [
      'Sustained performance improvement',
      'Quarterly business reviews',
      'Advanced team training',
      'Strategic growth guidance',
      'Risk monitoring and mitigation'
    ],
    process: [
      'Quarterly performance reviews',
      'Advanced staff training programs',
      'Process refinement and optimization',
      'Strategic planning sessions',
      'Ongoing support and mentoring'
    ],
    image: 'assets/customer.jpeg'
  }
};

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const service = serviceId ? serviceDetails[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-white pt-20 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <button
            onClick={() => navigate('/#services')}
            className="flex items-center gap-2 text-[#3b5d91] hover:text-[#1d2d45] mb-8 font-medium"
          >
            <ArrowLeft size={20} />
            Back to Services
          </button>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Service Not Found</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <button
        onClick={() => navigate('/#services')}
        className="fixed top-20 left-4 flex items-center gap-2 text-[#3b5d91] hover:text-[#1d2d45] font-medium z-40"
      >
        <ArrowLeft size={20} />
        Back
      </button>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold text-[#1d2d45] mb-4">{service.fullTitle}</h1>
              <div className="w-20 h-1 bg-[#f4a96f] rounded"></div>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed">{service.overview}</p>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1d2d45]">Key Benefits</h2>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-[#3b5d91] font-bold text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              src={service.image}
              alt={service.fullTitle}
              className="rounded-2xl shadow-2xl w-full h-auto object-cover max-h-[500px]"
            />
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#1d2d45] to-[#3b5d91] text-white py-16 px-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-8">Our Approach</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-200">Process Steps</h3>
              <ol className="space-y-3">
                {service.process.map((step, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="bg-blue-400 text-[#1d2d45] font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex flex-col justify-center">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <p className="text-base leading-relaxed">
                  This service phase is crucial to the overall success of your business transformation journey. We ensure every step is executed with precision, stakeholder input is gathered, and results are measurable and sustainable.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-[#1d2d45] mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Take the first step towards transforming your business. Contact us today to discuss how {service.title} can benefit your organization.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-[#3b5d91] text-white px-8 py-3 rounded-lg hover:bg-[#1d2d45] transition-colors font-medium"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
