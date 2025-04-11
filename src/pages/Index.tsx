
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import TrustSection from '@/components/home/TrustSection';
import ServicesSection from '@/components/home/ServicesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import BlogSection from '@/components/home/BlogSection';
import CtaSection from '@/components/home/CtaSection';

const Index = () => {
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
    // Update page title
    document.title = "White Whiz | Software Development Company";
  }, []);

  return (
    <Layout>
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <TestimonialsSection />
      <BlogSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
