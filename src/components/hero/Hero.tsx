import { ArrowRight, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-50 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#3b5d91] px-4 py-2 rounded-full text-sm font-semibold tracking-wide border border-blue-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3b5d91]"></span>
              </span>
              EXPERT STRATEGIC GUIDANCE
            </div>
            
            <h1 className="text-6xl md:text-7xl font-extrabold text-[#1d2d45] leading-tight font-sans">
              Empowering SMEs <br />
              <span className="text-gradient">Through Innovation</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed font-light font-sans">
              We provide structured methodology and data-driven insights to help forward-thinking small and medium enterprises achieve sustainable growth and operational excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-[#1d2d45] text-white px-8 py-4 rounded-xl hover:bg-[#3b5d91] transition-all duration-300 shadow-xl hover:shadow-[#1d2d45]/20 font-bold group"
              >
                Our Services
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1d2d45] border-2 border-[#1d2d45]/10 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 font-bold"
              >
                Get Started
                <ChevronRight size={20} />
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative z-10 animate-float">
              <img
                src="assets/thinkbase_logo_revamped.png"
                alt="Thinkbase UI"
                className="w-full max-w-lg mx-auto drop-shadow-[0_35px_35px_rgba(29,45,69,0.15)]"
              />
            </div>
            {/* Abstract geometric elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-blue-100 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
