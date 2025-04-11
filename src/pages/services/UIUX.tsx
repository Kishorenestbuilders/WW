
import React from 'react';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { PenTool, Eye, Layout, Smartphone, Users, Layers, Palette, MousePointer } from 'lucide-react';

const UIUX = () => {
  return (
    <ServicePageTemplate
      title="UI/UX Design"
      description="User-centered design that enhances usability, drives engagement, and creates memorable brand experiences across all digital touchpoints."
      mainIcon={PenTool}
      features={[
        {
          title: "User Research",
          description: "In-depth understanding of your users through interviews, surveys, and behavioral analysis."
        },
        {
          title: "Information Architecture",
          description: "Logical organization of content and functionality to create intuitive navigation and flow."
        },
        {
          title: "Wireframing & Prototyping",
          description: "Visual blueprints and interactive models to validate concepts before development."
        },
        {
          title: "Visual Design",
          description: "Attractive, on-brand visual elements that create a cohesive and memorable user experience."
        },
        {
          title: "Interaction Design",
          description: "Thoughtful design of how users interact with your product, creating satisfying and efficient experiences."
        },
        {
          title: "Usability Testing",
          description: "Validation of design decisions through real user testing and feedback cycles."
        }
      ]}
      benefits={[
        {
          title: "Improved User Satisfaction",
          description: "Create experiences that delight users and keep them coming back to your product."
        },
        {
          title: "Higher Conversion Rates",
          description: "Turn more visitors into customers with intuitive, friction-free user journeys."
        },
        {
          title: "Reduced Development Costs",
          description: "Identify and address usability issues before development, saving time and resources."
        },
        {
          title: "Brand Differentiation",
          description: "Stand out from competitors with distinctive, memorable user experiences."
        },
        {
          title: "Lower Support Costs",
          description: "Decrease support requests with intuitive interfaces that users can navigate easily."
        },
        {
          title: "Increased User Retention",
          description: "Build loyalty through experiences that meet and exceed user expectations."
        }
      ]}
      process={[
        {
          step: 1,
          title: "Discovery",
          description: "We learn about your business, users, and goals through research and stakeholder interviews."
        },
        {
          step: 2,
          title: "User Research",
          description: "We develop a deep understanding of your users' needs, behaviors, and pain points."
        },
        {
          step: 3,
          title: "Information Architecture",
          description: "We organize your content and functionality into a logical, intuitive structure."
        },
        {
          step: 4,
          title: "Wireframing & Prototyping",
          description: "We create visual blueprints and interactive models of your product."
        },
        {
          step: 5,
          title: "Visual Design",
          description: "We develop the visual language of your product, including colors, typography, and imagery."
        },
        {
          step: 6,
          title: "Testing & Refinement",
          description: "We validate designs with real users and refine based on feedback and observations."
        }
      ]}
      technologies={[
        "Figma", "Adobe XD", "Sketch", "InVision", "Zeplin", "UserTesting", 
        "Hotjar", "Optimal Workshop", "Lookback", "Maze", "Usability Hub"
      ]}
      caseStudyTitle="Fintech App Redesign"
      caseStudyDescription="We redesigned a complex financial services application, resulting in a 70% increase in user engagement, 45% reduction in support tickets, and significantly higher user satisfaction scores."
      relatedServices={[
        "Mobile & Web Applications", "Custom Software Development", "Software Consulting", 
        "Quality Assurance", "SaaS Solutions"
      ]}
    />
  );
};

export default UIUX;
