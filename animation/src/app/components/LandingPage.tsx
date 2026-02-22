import { WebDevAnimation } from './WebDevAnimation';
import { ArrowRight, CheckCircle, Mail, Phone } from 'lucide-react';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            YourAgency
          </div>
          <div className="flex items-center gap-8">
            <a href="#services" className="text-gray-700 hover:text-purple-600 transition">Services</a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition">About</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition">Contact</a>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Animation */}
      <section className="pt-20">
        {/* Animation Container - Full viewport height */}
        <div className="h-[600px] relative">
          <WebDevAnimation />
          
          {/* Overlay text on top of animation */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-20">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 drop-shadow-sm">
              We Turn Ideas Into
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Beautiful Websites
              </span>
            </h1>
          </div>
        </div>

        {/* CTA Section below animation */}
        <div className="bg-white py-12 text-center">
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto px-6">
            From concept to launch, we create stunning websites that help your business grow
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition flex items-center gap-2">
              Start Your Project <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            What We Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Design',
                description: 'Beautiful, modern designs that capture your brand and engage your audience',
                icon: '🎨'
              },
              {
                title: 'Development',
                description: 'Fast, responsive websites built with the latest technologies',
                icon: '⚡'
              },
              {
                title: 'Mobile Ready',
                description: 'Perfect on every device - desktop, tablet, and mobile',
                icon: '📱'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Why Choose Us?
              </h2>
              <div className="space-y-4">
                {[
                  'Fast turnaround times',
                  'Unlimited revisions until you\'re happy',
                  'Modern, professional designs',
                  'SEO optimized for search engines',
                  'Ongoing support and maintenance'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-12 text-center">
              <div className="text-6xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-xl text-gray-700 mb-8">Happy Clients</div>
              <div className="text-6xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-xl text-gray-700">Projects Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's bring your vision to life. Contact us today for a free consultation!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <a href="mailto:hello@youragency.com" className="flex items-center gap-2 text-lg hover:underline">
              <Mail className="w-5 h-5" />
              hello@youragency.com
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 text-lg hover:underline">
              <Phone className="w-5 h-5" />
              (123) 456-7890
            </a>
          </div>
          <button className="bg-white text-purple-600 px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition">
            Get Your Free Quote
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2026 YourAgency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
