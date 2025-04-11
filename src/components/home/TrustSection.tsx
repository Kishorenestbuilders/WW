
import React from 'react';
import { Building2, Briefcase, DollarSign, ChevronRight, Globe, ShieldCheck, HeartPulse, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const industries = [
  { 
    name: 'Finance', 
    icon: DollarSign,
    description: 'Secure and compliant solutions for financial institutions'
  },
  { 
    name: 'Healthcare', 
    icon: HeartPulse,
    description: 'HIPAA-compliant software for medical providers'
  },
  { 
    name: 'Education', 
    icon: GraduationCap,
    description: 'Learning management systems and educational tools'
  },
  { 
    name: 'Enterprise', 
    icon: Building2,
    description: 'Scalable solutions for global enterprises'
  },
  { 
    name: 'Startups', 
    icon: Briefcase,
    description: 'Agile development for emerging businesses'
  },
  { 
    name: 'Global', 
    icon: Globe,
    description: 'Multilingual and multinational support'
  },
  { 
    name: 'Security', 
    icon: ShieldCheck,
    description: 'Defense-grade security implementations'
  },
];

export default function TrustSection() {
  return (
    <section className="py-16 bg-whitewhiz-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-whitewhiz-gray-dark mb-4">
            Preferred by Leading Sectors
          </h2>
          <p className="text-whitewhiz-gray-medium text-lg max-w-2xl mx-auto">
            We've helped organizations across diverse industries transform their operations with custom software solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {industries.map((industry, index) => (
            <div 
              key={industry.name}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-whitewhiz-purple/10 rounded-full flex items-center justify-center mb-4">
                <industry.icon className="h-7 w-7 text-whitewhiz-purple" />
              </div>
              <h3 className="text-lg font-medium text-whitewhiz-gray-dark mb-2">{industry.name}</h3>
              <p className="text-whitewhiz-gray-medium text-sm">{industry.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" className="border-whitewhiz-purple text-whitewhiz-purple hover:bg-whitewhiz-purple/10 transition-colors">
            <span>View Success Stories</span>
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
