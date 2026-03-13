import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-[#2c446b] to-[#5473a5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="text-white space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-blue-100 text-lg">
                Ready to understand your customers better and strengthen your business?
                Let's discuss how we can help you improve customer experience and drive sustainable growth.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1a283f] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <p className="text-blue-100">info@thinkbaseadvisory.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1a283f] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <p className="text-blue-100">+234-911-999-0083</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1a283f] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-semibold mb-1">Location</p>
                  <p className="text-blue-100">Suite 100,Adebola house,Opebi Ikeja,Lagos</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-2xl">
            <form className="space-y-6 mt-5">
              <div>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="Full Name"
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="Email address"
                />
              </div>

              <div>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="Company Name"
                />
              </div>

              <div>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell us what you need"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#3a5a8d] text-white px-8 py-4 rounded-full hover:bg-[#5988ce] transition-colors flex items-center justify-center gap-2 font-medium"
              >
                 Submit
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
