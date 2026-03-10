import { ArrowRight, TrendingUp } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-[#7ea1d7] via-white to-[#38598a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 bg-[#b1c8eb] text-[#253b5b] px-4 py-2 rounded-full text-sm font-medium">
                            <TrendingUp size={16} />
                            CX-Led Business Advisory
                        </div>
        
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Transform Customer Experience,
                            <span className="text-[#304c76]"> Transform Your Business</span>
                        </h1>
        
                        <p className="text-lg font-sans text-black leading-relaxed">
                            Most businesses fail because customer experience is unmanaged, unmeasured, and inconsistent.
                            We help you understand your real customer experience, identify gaps, and build sustainable growth
                            through stronger operations and customer retention.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#304c76] text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all hover:scale-105 font-medium">
                                Start Your Journey
                                <ArrowRight size={20} />
                            </a>
                            <a href="#services" className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-lg border-2 border-gray-200 hover:border-blue-600 transition-colors font-medium">
                                Explore Services
                            </a>
                        </div>

                        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                            <div>
                                <p className="text-3xl font-bold text-gray-900">500+</p>
                                <p className="text-gray-600">Clients Served</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-gray-900">15+</p>
                                <p className="text-gray-600">Years Experience</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-gray-900">98%</p>
                                <p className="text-gray-600">Success Rate</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative lg:h-[600px] flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#3b5d91] to-[#20324e] rounded-3xl transform rotate-3"></div>
                        <div className="relative bg-white p-8 rounded-2xl shadow-2xl">
                            <img
                                src="assets/office.jpg"
                                alt="Business professionals analyzing data"
                                className="rounded-lg w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
