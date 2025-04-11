
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const About = () => {
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
    // Update page title
    document.title = "About Us | White Whiz";
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 bg-whitewhiz-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-whitewhiz-gray-dark mb-6 animate-fade-in">
              About <span className="text-whitewhiz-purple">White Whiz</span>
            </h1>
            <p className="text-whitewhiz-gray-medium text-lg mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              We're a team of passionate software engineers, designers, and problem-solvers 
              dedicated to building exceptional software solutions that empower businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-12">
              <h2 className="text-3xl font-bold text-whitewhiz-gray-dark mb-6">Our Story</h2>
              <p className="text-whitewhiz-gray-medium mb-6">
                White Whiz was founded in 2015 by a group of technology enthusiasts who believed 
                that software should be both powerful and accessible. What started as a small 
                consultancy has grown into a comprehensive software development company serving 
                clients across multiple industries.
              </p>
              <p className="text-whitewhiz-gray-medium mb-6">
                Our journey has been defined by a relentless pursuit of excellence, a dedication 
                to understanding the unique challenges faced by our clients, and a commitment to 
                delivering solutions that exceed expectations.
              </p>
              <p className="text-whitewhiz-gray-medium">
                Today, we're proud to be trusted by businesses ranging from emerging startups to 
                established enterprises, helping them leverage technology to achieve their goals 
                and transform their operations.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="White Whiz team" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-whitewhiz-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-whitewhiz-gray-dark mb-4">
              Our Core Values
            </h2>
            <p className="text-whitewhiz-gray-medium text-lg max-w-2xl mx-auto">
              These principles guide everything we do, from how we build our products to how we interact with our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-whitewhiz-purple/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-whitewhiz-purple">01</span>
              </div>
              <h3 className="text-xl font-semibold text-whitewhiz-gray-dark mb-4">Excellence</h3>
              <p className="text-whitewhiz-gray-medium">
                We strive for excellence in every line of code we write, every design we create, 
                and every solution we deliver. Mediocrity is not an option.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-whitewhiz-purple/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-whitewhiz-purple">02</span>
              </div>
              <h3 className="text-xl font-semibold text-whitewhiz-gray-dark mb-4">Innovation</h3>
              <p className="text-whitewhiz-gray-medium">
                We embrace new technologies and methodologies to push the boundaries of what's 
                possible, constantly seeking better ways to solve complex problems.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-whitewhiz-purple/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-whitewhiz-purple">03</span>
              </div>
              <h3 className="text-xl font-semibold text-whitewhiz-gray-dark mb-4">Integrity</h3>
              <p className="text-whitewhiz-gray-medium">
                We operate with honesty, transparency, and ethical principles in all our 
                interactions, building trust through our actions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-whitewhiz-purple/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-whitewhiz-purple">04</span>
              </div>
              <h3 className="text-xl font-semibold text-whitewhiz-gray-dark mb-4">Collaboration</h3>
              <p className="text-whitewhiz-gray-medium">
                We believe in the power of teamwork, both within our organization and with our 
                clients, to create solutions that exceed individual capabilities.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-whitewhiz-purple/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-whitewhiz-purple">05</span>
              </div>
              <h3 className="text-xl font-semibold text-whitewhiz-gray-dark mb-4">Client-Centric</h3>
              <p className="text-whitewhiz-gray-medium">
                We put our clients' needs at the center of everything we do, focusing on 
                delivering value and solving real business challenges.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-whitewhiz-purple/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-whitewhiz-purple">06</span>
              </div>
              <h3 className="text-xl font-semibold text-whitewhiz-gray-dark mb-4">Continuous Learning</h3>
              <p className="text-whitewhiz-gray-medium">
                We foster a culture of ongoing education and improvement, staying at the 
                forefront of technology to deliver cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-whitewhiz-purple rounded-3xl overflow-hidden">
            <div className="px-6 py-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
                Join the many businesses that have transformed their operations with our custom software solutions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-white hover:bg-gray-100 text-whitewhiz-purple">
                  <span>Contact Us</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/20">
                  View Our Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
