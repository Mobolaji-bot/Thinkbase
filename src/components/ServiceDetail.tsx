import { ArrowLeft, CheckCircle2, Clock, Shield, Target, ArrowRight } from 'lucide-react';
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
    fullTitle: 'Strategic Business Consultation',
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
    title: 'Assessment',
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
    image: 'assets/insight_reporting_revamped.png'
  }
};

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const service = serviceId ? serviceDetails[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-white pt-32 pb-20 flex items-center justify-center">
        <div className="text-center space-y-6">
           <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
             <Target className="text-gray-400 w-12 h-12" />
           </div>
           <h1 className="text-4xl font-bold text-[#1d2d45]">Service Not Found</h1>
           <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-[#3b5d91] hover:text-[#1d2d45] font-bold"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Spacer */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gray-50 py-24">
        <div className="absolute inset-0 bg-blue-50/50 opacity-50 blur-3xl rounded-full transform -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button
            onClick={() => navigate('/#services')}
            className="inline-flex items-center gap-2 text-[#3b5d91] hover:text-[#1d2d45] font-bold mb-12 group transition-colors"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </button>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 bg-[#1d2d45]/5 text-[#1d2d45] rounded-full text-xs font-bold tracking-widest uppercase">
                Service Overview
              </div>
              <h1 className="text-6xl font-extrabold text-[#1d2d45] leading-tight tracking-tight">
                {service.fullTitle}
              </h1>
              <p className="text-2xl text-gray-600 font-light leading-relaxed">
                {service.overview}
              </p>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={service.image}
                  alt={service.fullTitle}
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits & Process */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Benefits */}
          <div className="space-y-12">
            <h2 className="text-4xl font-bold text-[#1d2d45] flex items-center gap-4">
              <Shield className="text-[#3b5d91]" />
              Key Benefits
            </h2>
            <div className="grid gap-6">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 items-start p-6 bg-blue-50/50 rounded-2xl border border-blue-100/50 hover:bg-white hover:shadow-lg transition-all">
                  <CheckCircle2 className="text-[#3b5d91] w-6 h-6 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 leading-relaxed font-light">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="space-y-12">
            <h2 className="text-4xl font-bold text-[#1d2d45] flex items-center gap-4">
              <Clock className="text-[#3b5d91]" />
              Our Approach
            </h2>
            <div className="relative space-y-12 before:absolute before:left-[27px] before:top-2 before:bottom-2 before:w-[2px] before:bg-blue-100">
              {service.process.map((step, index) => (
                <div key={index} className="relative pl-16 group">
                  <div className="absolute left-0 top-0 w-14 h-14 bg-white border-2 border-blue-100 rounded-full flex items-center justify-center font-bold text-[#1d2d45] z-10 group-hover:bg-[#1d2d45] group-hover:text-white group-hover:border-[#1d2d45] transition-all">
                    {index + 1}
                  </div>
                  <div className="p-4 rounded-xl group-hover:bg-gray-50 transition-colors">
                    <p className="text-lg text-gray-700 leading-relaxed font-light">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#1d2d45] to-[#3b5d91] rounded-[3rem] p-12 md:p-20 text-center space-y-10 relative overflow-hidden shadow-3xl text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Ready to transform your business?</h2>
            <p className="text-xl text-blue-50 font-light leading-relaxed">
              Take the first step towards operational excellence. Schedule a consultation today to discuss how we can help you achieve sustainable growth.
            </p>
            <div className="pt-6">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#1d2d45] px-10 py-5 rounded-2xl hover:bg-blue-50 transition-all shadow-xl font-bold text-lg group"
              >
                Schedule Your Consultation
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
