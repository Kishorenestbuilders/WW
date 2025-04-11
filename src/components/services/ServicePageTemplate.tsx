
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ChevronRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServiceBenefit {
  title: string;
  description: string;
}

interface ServiceProcess {
  step: number;
  title: string;
  description: string;
}

interface ServicePageTemplateProps {
  title: string;
  description: string;
  mainIcon: LucideIcon;
  features: ServiceFeature[];
  benefits: ServiceBenefit[];
  process: ServiceProcess[];
  relatedServices: string[];
  technologies?: string[];
  caseStudyImage?: string;
  caseStudyTitle?: string;
  caseStudyDescription?: string;
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  title,
  description,
  mainIcon: MainIcon,
  features,
  benefits,
  process,
  relatedServices,
  technologies = [],
  caseStudyImage,
  caseStudyTitle,
  caseStudyDescription,
}) => {
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
    // Update page title
    document.title = `${title} | White Whiz`;
  }, [title]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white to-whitewhiz-gray-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-whitewhiz-gray-dark mb-4">
                {title}
              </h1>
              <p className="text-whitewhiz-gray-medium text-lg mb-8">
                {description}
              </p>
              <div className="flex space-x-4">
                <Button asChild className="bg-whitewhiz-purple hover:bg-whitewhiz-purple-light">
                  <a href="#contact">Get Started</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#features">Learn More</a>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center animate-fade-in-left">
              <div className="w-40 h-40 md:w-56 md:h-56 bg-whitewhiz-purple/10 rounded-full flex items-center justify-center">
                <MainIcon className="h-20 w-20 md:h-28 md:w-28 text-whitewhiz-purple" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-whitewhiz-gray-dark mb-4 animate-fade-in">
              Key Features
            </h2>
            <p className="text-whitewhiz-gray-medium text-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
              Discover how our {title} service can transform your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <h3 className="text-xl font-semibold text-whitewhiz-gray-dark mb-3">{feature.title}</h3>
                <p className="text-whitewhiz-gray-medium">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-whitewhiz-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-whitewhiz-gray-dark mb-4 animate-fade-in">
              Our Process
            </h2>
            <p className="text-whitewhiz-gray-medium text-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
              How we deliver exceptional {title} solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {process.map((step, index) => (
              <div 
                key={step.title}
                className="flex animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-whitewhiz-purple rounded-full flex items-center justify-center mr-4 text-white font-semibold">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-whitewhiz-gray-dark mb-2">{step.title}</h3>
                  <p className="text-whitewhiz-gray-medium">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-whitewhiz-gray-dark mb-4 animate-fade-in">
              Benefits
            </h2>
            <p className="text-whitewhiz-gray-medium text-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
              Why choose our {title} services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="flex items-start animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <CheckCircle className="h-5 w-5 text-whitewhiz-purple mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-whitewhiz-gray-dark mb-1">{benefit.title}</h3>
                  <p className="text-whitewhiz-gray-medium">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section - Conditional Rendering */}
      {caseStudyTitle && caseStudyDescription && (
        <section className="py-16 md:py-24 bg-whitewhiz-gray-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-whitewhiz-gray-dark mb-4 animate-fade-in">
                Case Study
              </h2>
              <p className="text-whitewhiz-gray-medium text-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
                See how we've helped our clients succeed
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="md:flex">
                {caseStudyImage && (
                  <div className="md:w-1/2">
                    <img src={caseStudyImage} alt="Case Study" className="w-full h-64 md:h-full object-cover" />
                  </div>
                )}
                <div className={`p-8 ${caseStudyImage ? 'md:w-1/2' : 'w-full'}`}>
                  <h3 className="text-2xl font-semibold text-whitewhiz-gray-dark mb-4">{caseStudyTitle}</h3>
                  <p className="text-whitewhiz-gray-medium mb-6">{caseStudyDescription}</p>
                  <Button variant="outline" className="inline-flex items-center">
                    Read Full Case Study
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Technologies Section - Conditional Rendering */}
      {technologies.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-whitewhiz-gray-dark mb-4 animate-fade-in">
                Technologies We Use
              </h2>
              <p className="text-whitewhiz-gray-medium text-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
                Our expertise spans a wide range of technologies
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <div 
                  key={tech}
                  className="bg-white px-6 py-3 rounded-full shadow-sm text-whitewhiz-gray-dark font-medium animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 50}ms` }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      <section className="py-16 md:py-24 bg-whitewhiz-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-whitewhiz-gray-dark mb-4 animate-fade-in">
              Related Services
            </h2>
            <p className="text-whitewhiz-gray-medium text-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
              Explore more ways we can help your business
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {relatedServices.map((service, index) => (
              <Link
                key={service}
                to={`/services/${service.toLowerCase().replace(/&|\s+/g, '-')}`}
                className="bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all text-whitewhiz-gray-dark font-medium hover:text-whitewhiz-purple animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 50}ms` }}
              >
                {service}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 md:py-24 bg-whitewhiz-purple text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg opacity-90 mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
              Let's discuss how our {title} services can help you achieve your goals. Contact us today to schedule a consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <Button className="bg-white text-whitewhiz-purple hover:bg-whitewhiz-gray-light">
                Schedule a Call
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicePageTemplate;
