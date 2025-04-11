
import React from 'react';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { LineChart, Lightbulb, Users, Target, ArrowUpRight, BarChart3, Brain, Handshake } from 'lucide-react';

const SoftwareConsulting = () => {
  return (
    <ServicePageTemplate
      title="Software Consulting"
      description="Expert guidance on technology strategy, architecture, and development approaches to help your business make informed decisions and maximize ROI."
      mainIcon={LineChart}
      features={[
        {
          title: "Technology Strategy",
          description: "Develop roadmaps aligned with your business goals, ensuring technology investments deliver maximum value."
        },
        {
          title: "Architecture Evaluation",
          description: "Review and optimize your existing systems for improved performance, scalability, and security."
        },
        {
          title: "Digital Transformation",
          description: "Navigate the complexities of modernizing legacy systems and adopting innovative technologies."
        },
        {
          title: "Product Development Advisory",
          description: "Strategic guidance on bringing new software products to market efficiently and effectively."
        },
        {
          title: "Tech Stack Selection",
          description: "Identify the optimal combination of technologies to meet your specific business requirements."
        },
        {
          title: "Process Optimization",
          description: "Enhance your development methodologies and workflows for greater productivity and quality."
        }
      ]}
      benefits={[
        {
          title: "Reduced Risk",
          description: "Make informed technology decisions backed by expert analysis and industry experience."
        },
        {
          title: "Accelerated Innovation",
          description: "Identify opportunities to leverage emerging technologies for business advantage."
        },
        {
          title: "Cost Efficiency",
          description: "Optimize your technology investments and avoid costly mistakes and unnecessary expenditures."
        },
        {
          title: "Strategic Alignment",
          description: "Ensure your technology initiatives support and advance your core business objectives."
        },
        {
          title: "Competitive Intelligence",
          description: "Gain insights into industry trends and competitive positioning through our market expertise."
        },
        {
          title: "Knowledge Transfer",
          description: "Build internal capabilities through collaboration with our experienced consultants."
        }
      ]}
      process={[
        {
          step: 1,
          title: "Assessment",
          description: "We evaluate your current technology landscape, business goals, and challenges."
        },
        {
          step: 2,
          title: "Strategy Development",
          description: "We create a customized roadmap to address your specific needs and opportunities."
        },
        {
          step: 3,
          title: "Recommendations",
          description: "We provide detailed guidance on technology selection, architecture, and implementation approaches."
        },
        {
          step: 4,
          title: "Implementation Support",
          description: "We assist with executing recommendations, providing expertise and oversight."
        },
        {
          step: 5,
          title: "Review & Optimization",
          description: "We continuously evaluate outcomes and refine strategies to maximize results."
        },
        {
          step: 6,
          title: "Knowledge Sharing",
          description: "We empower your team through training and collaborative learning."
        }
      ]}
      technologies={[
        "Agile/Scrum", "DevOps", "Cloud Architecture", "Microservices", "API Design", 
        "Data Strategy", "Security Frameworks", "Business Intelligence", "Enterprise Architecture"
      ]}
      caseStudyTitle="Digital Transformation for Financial Services Firm"
      caseStudyDescription="We helped a mid-size financial services company modernize their legacy systems and adopt a microservices architecture, resulting in 60% faster deployment cycles and a 35% reduction in operational costs."
      relatedServices={[
        "Custom Software Development", "Mobile & Web Applications", "SaaS Solutions", 
        "Cloud Services", "UI/UX Design"
      ]}
    />
  );
};

export default SoftwareConsulting;
