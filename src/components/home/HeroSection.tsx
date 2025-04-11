
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const services = [
  "Custom Software Development",
  "Software Consulting",
  "Mobile & Web Applications",
  "SaaS Solutions",
  "Cloud Services",
  "UI/UX Design"
];

export default function HeroSection() {
  const [currentService, setCurrentService] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
      setIsTyping(true);
      
      // Reset the typing animation after a short delay
      setTimeout(() => {
        setIsTyping(false);
      }, 3000); // Adjust based on your animation duration
    }, 4000); // Change service every 4 seconds
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="pt-28 md:pt-36 pb-16 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-whitewhiz-gray-dark mb-6 animate-fade-in">
              Transforming Ideas Into <br/>
              <span className="text-whitewhiz-purple">Powerful Software</span>
            </h1>
            
            <div className="h-16 mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="typing-container">
                <span className="text-lg md:text-xl font-medium">
                  Specialized in{" "}
                </span>
                <span className={`typing-text ${isTyping ? "typing-effect" : "w-full"} text-lg md:text-xl font-medium text-whitewhiz-purple-light`}>
                  {services[currentService]}
                </span>
              </div>
            </div>
            
            <p className="text-whitewhiz-gray-medium text-lg mb-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
              Partner with us to build cutting-edge software solutions 
              that drive growth, efficiency, and competitive advantage.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: '600ms' }}>
              <Button className="bg-whitewhiz-purple hover:bg-whitewhiz-purple-light transition-colors text-white px-6 py-6">
                Get Started
              </Button>
              <Button variant="outline" className="border-whitewhiz-purple text-whitewhiz-purple hover:bg-whitewhiz-purple/10 transition-colors px-6 py-6">
                <span>Explore Services</span>
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative animate-fade-in-left" style={{ animationDelay: '800ms' }}>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-whitewhiz-purple/10 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-whitewhiz-purple-light/10 rounded-full filter blur-3xl"></div>
              
              <div className="relative bg-gradient-to-br from-white to-whitewhiz-gray-light p-1 rounded-2xl shadow-xl">
                <div className="bg-white rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Software development team" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
