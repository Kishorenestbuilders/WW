
import React from 'react';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Code, Server, Users, LineChart, ShieldCheck, Layers, Zap, Database } from 'lucide-react';

const CustomSoftware = () => {
  return (
    <ServicePageTemplate
      title="Custom Software Development"
      description="Tailor-made software solutions designed to address your specific business needs and challenges, driving efficiency and growth."
      mainIcon={Code}
      features={[
        {
          title: "Bespoke Solutions",
          description: "Software developed specifically for your business processes, ensuring a perfect fit for your needs."
        },
        {
          title: "Scalable Architecture",
          description: "Future-proof systems that grow with your business, adapting to changing requirements."
        },
        {
          title: "Integration Capabilities",
          description: "Seamless connections with your existing systems, tools, and third-party services."
        },
        {
          title: "User-Centered Design",
          description: "Intuitive interfaces crafted with your users in mind, enhancing productivity and satisfaction."
        },
        {
          title: "Security-First Approach",
          description: "Robust security measures implemented at every level to protect your sensitive data."
        },
        {
          title: "Continuous Support",
          description: "Ongoing maintenance and updates to ensure your software remains current and effective."
        }
      ]}
      benefits={[
        {
          title: "Competitive Advantage",
          description: "Gain an edge over competitors with software uniquely adapted to your business model."
        },
        {
          title: "Enhanced Efficiency",
          description: "Streamline operations with workflows designed specifically for your processes."
        },
        {
          title: "Reduced Costs",
          description: "Eliminate expenses from unnecessary features found in off-the-shelf solutions."
        },
        {
          title: "Improved Decision Making",
          description: "Access custom analytics and reporting tailored to your key performance indicators."
        },
        {
          title: "Future Readiness",
          description: "Easily adapt your software as market conditions and business requirements evolve."
        },
        {
          title: "Greater Control",
          description: "Own your software solution completely, with no dependency on third-party vendors."
        }
      ]}
      process={[
        {
          step: 1,
          title: "Discovery & Analysis",
          description: "We work closely with you to understand your business processes, challenges, and goals."
        },
        {
          step: 2,
          title: "Solution Design",
          description: "Our team creates a comprehensive blueprint for your custom software solution."
        },
        {
          step: 3,
          title: "Development",
          description: "We build your solution using modern, robust technologies with regular client feedback."
        },
        {
          step: 4,
          title: "Quality Assurance",
          description: "Rigorous testing ensures your software is reliable, secure, and performs optimally."
        },
        {
          step: 5,
          title: "Deployment",
          description: "We carefully implement your solution, ensuring minimal disruption to your operations."
        },
        {
          step: 6,
          title: "Ongoing Support",
          description: "Our team provides continuous maintenance, updates, and enhancements as needed."
        }
      ]}
      technologies={[
        "JavaScript/TypeScript", "React", "Node.js", "Python", "Java", "C#", ".NET", 
        "AWS", "Azure", "Docker", "Kubernetes", "MongoDB", "PostgreSQL", "MySQL", "Redis"
      ]}
      caseStudyTitle="Healthcare Provider Management System"
      caseStudyDescription="We developed a custom healthcare provider management system for a regional healthcare network, resulting in a 40% reduction in administrative workload and a 25% improvement in patient scheduling efficiency."
      relatedServices={[
        "Software Consulting", "Mobile & Web Applications", "SaaS Solutions", 
        "Cloud Services", "Maintenance & Support"
      ]}
    />
  );
};

export default CustomSoftware;
