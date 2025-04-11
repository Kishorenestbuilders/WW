
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-whitewhiz-purple-light/10">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-whitewhiz-purple to-whitewhiz-purple-light rounded-3xl overflow-hidden shadow-xl">
          <div className="p-8 md:p-16 relative">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 h-64 w-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 h-64 w-64 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:pr-8 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-white/90 text-lg max-w-xl">
                  Let's discuss how our custom software solutions can help your business grow and thrive in the digital age.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-white hover:bg-gray-100 text-whitewhiz-purple font-semibold transition-colors px-8 py-6">
                  <span>Get Started</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/20 transition-colors px-8 py-6">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
