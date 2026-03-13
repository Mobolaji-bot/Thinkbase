import { Linkedin, Twitter, Facebook, Mail, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1d2d45] text-blue-50 py-20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3b5d91]/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="assets/thinkbase_logo_revamped.png"
                alt="Thinkbase Logo"
                className="h-10 w-10 object-contain brightness-0 invert"
              />
              <span className="text-xl font-bold tracking-tight text-white">THINKBASE</span>
            </Link>
            <p className="text-blue-100/70 text-base leading-relaxed font-light">
              Empowering small and medium enterprises through structured strategic guidance and data-driven operational intelligence.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-blue-100/70 font-light">
              <li><Link to="/" className="hover:text-blue-300 transition-colors flex items-center gap-2 group">Home <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><a href="/#services" className="hover:text-blue-300 transition-colors flex items-center gap-2 group">Services <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="/#about" className="hover:text-blue-300 transition-colors flex items-center gap-2 group">About Us <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="/#contact" className="hover:text-blue-300 transition-colors flex items-center gap-2 group">Contact <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Our Service Model</h4>
            <ul className="space-y-4 text-blue-100/70 font-light">
              <li><Link to="/service/consultation" className="hover:text-blue-300 transition-colors">Strategic Consultation</Link></li>
              <li><Link to="/service/assessment" className="hover:text-blue-300 transition-colors">Business Assessment</Link></li>
              <li><Link to="/service/insights" className="hover:text-blue-300 transition-colors">Insight & Reporting</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Connect With Us</h4>
            <p className="text-blue-100/70 text-sm mb-6 font-light">Follow our journey and stay updated with strategic business insights.</p>
            <div className="flex gap-4">
              {[
                { icon: <Linkedin size={20} />, href: '#' },
                { icon: <Twitter size={20} />, href: '#' },
                { icon: <Facebook size={20} />, href: '#' },
                { icon: <Mail size={20} />, href: 'mailto:hello@thinkbase.com' }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-[#3b5d91] hover:border-[#3b5d91] text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-blue-100/40 text-sm font-light">
          <p>&copy; {currentYear} Thinkbase Advisory. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-blue-100 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-100 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
