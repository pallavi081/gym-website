import React from 'react';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-heading font-bold mb-6">POWER<span className="text-primary">FIT</span></h2>
            <p className="text-gray-400 max-w-sm mb-8">
              We are dedicated to helping you reach your peak physical potential. Our expert trainers and state-of-the-art facilities are here to support your journey.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Mail size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-primary transition-colors text-sm">Home</a></li>
              <li><a href="#facilities" className="hover:text-primary transition-colors text-sm">Facilities</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors text-sm">Services</a></li>
              <li><a href="#plans" className="hover:text-primary transition-colors text-sm">Plans</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>123 Fitness Street, New Delhi, India</li>
              <li>+91 9931322271</li>
              <li>shripallavi3108@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} PowerFit Gym. All rights reserved. Designed for performance.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
