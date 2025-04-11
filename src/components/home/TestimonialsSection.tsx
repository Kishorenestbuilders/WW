
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote: "White Whiz transformed our outdated systems into a streamlined, modern platform that has significantly increased our operational efficiency.",
    author: "Sarah Johnson",
    role: "CTO, TechGlobe Inc.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    company: "TechGlobe Inc.",
    stars: 5
  },
  {
    quote: "The custom CRM system developed by White Whiz has revolutionized how we manage customer relationships, leading to a 40% increase in customer retention.",
    author: "Michael Chen",
    role: "VP of Operations, Nexus Solutions",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    company: "Nexus Solutions",
    stars: 5
  },
  {
    quote: "What impressed me most was White Whiz's ability to understand our complex requirements and translate them into an intuitive, powerful software solution.",
    author: "Emily Rodriguez",
    role: "Product Manager, Innovate Health",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    company: "Innovate Health",
    stars: 4
  },
  {
    quote: "Working with White Whiz was a game-changer for our startup. Their expertise and agile approach helped us bring our vision to market in record time.",
    author: "David Thompson",
    role: "Founder, LaunchPad Tech",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    company: "LaunchPad Tech",
    stars: 5
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-whitewhiz-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-whitewhiz-gray-dark mb-4">
            What Our Clients Say
          </h2>
          <p className="text-whitewhiz-gray-medium text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with White Whiz.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
                    <div className="flex justify-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={cn(
                            "w-5 h-5 mx-1",
                            i < testimonial.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                          )} 
                        />
                      ))}
                    </div>
                    <p className="text-lg md:text-xl text-whitewhiz-gray-dark mb-8 text-center italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex flex-col items-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author} 
                        className="w-16 h-16 rounded-full mb-4"
                      />
                      <h4 className="text-lg font-medium text-whitewhiz-gray-dark">
                        {testimonial.author}
                      </h4>
                      <p className="text-whitewhiz-gray-medium">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="rounded-full border-whitewhiz-purple text-whitewhiz-purple hover:bg-whitewhiz-purple/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-colors",
                    index === activeIndex ? "bg-whitewhiz-purple" : "bg-gray-300"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button 
              variant="outline" 
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-whitewhiz-purple text-whitewhiz-purple hover:bg-whitewhiz-purple/10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
