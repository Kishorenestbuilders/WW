
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { services } from '@/components/home/ServicesSection';

const Services = () => {
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
    // Update page title
    document.title = "Our Services | White Whiz";
  }, []);

  return (
    <Layout>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-whitewhiz-gray-dark mb-4">
              Our Services
            </h1>
            <p className="text-whitewhiz-gray-medium text-lg max-w-3xl mx-auto">
              Comprehensive software solutions tailored to your business needs. Explore our full range of services below.
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
      </div>
    </Layout>
  );
};

export default Services;
