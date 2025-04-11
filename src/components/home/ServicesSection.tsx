
import React from 'react';
import { 
  Code, 
  LineChart, 
  Smartphone, 
  Cloud, 
  PenTool, 
  CheckCircle, 
  Settings, 
  LifeBuoy,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const services = [
  {
    title: 'Custom Software Development',
    description: 'Tailor-made software solutions designed to address your specific business needs and challenges.',
    icon: Code,
    link: '/services/custom-software'
  },
  {
    title: 'Software Consulting',
    description: 'Expert guidance on technology stack, architecture, and development strategies.',
    icon: LineChart,
    link: '/services/consulting'
  },
  {
    title: 'Mobile & Web Applications',
    description: 'Responsive, cross-platform applications that deliver exceptional user experiences.',
    icon: Smartphone,
    link: '/services/mobile-web'
  },
  {
    title: 'SaaS Solutions',
    description: 'Subscription-based software that scales with your business needs.',
    icon: Settings,
    link: '/services/saas'
  },
  {
    title: 'Cloud Services',
    description: 'Secure, scalable cloud infrastructure and deployment solutions.',
    icon: Cloud,
    link: '/services/cloud'
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design that enhances usability and drives engagement.',
    icon: PenTool,
    link: '/services/ui-ux'
  },
  {
    title: 'Quality Assurance',
    description: 'Comprehensive testing to ensure your software meets the highest quality standards.',
    icon: CheckCircle,
    link: '/services/qa'
  },
  {
    title: 'Maintenance & Support',
    description: 'Ongoing support and maintenance to keep your software running smoothly.',
    icon: LifeBuoy,
    link: '/services/maintenance'
  }
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-whitewhiz-gray-dark mb-4">
            Our Services
          </h2>
          <p className="text-whitewhiz-gray-medium text-lg max-w-2xl mx-auto">
            We offer comprehensive software solutions to help your business thrive in the digital age.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-whitewhiz-purple/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-whitewhiz-purple/20 transition-colors">
                <service.icon className="h-7 w-7 text-whitewhiz-purple" />
              </div>
              <h3 className="text-xl font-semibold text-whitewhiz-gray-dark mb-3">{service.title}</h3>
              <p className="text-whitewhiz-gray-medium mb-4">{service.description}</p>
              <Link 
                to={service.link}
                className="inline-flex items-center text-whitewhiz-purple font-medium hover:text-whitewhiz-purple-light transition-colors"
              >
                Learn More
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
