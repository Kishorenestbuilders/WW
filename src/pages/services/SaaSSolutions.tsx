
import React from 'react';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Settings, Cloud, Database, Users, Globe, Shield, LineChart, Repeat } from 'lucide-react';

const SaaSSolutions = () => {
  return (
    <ServicePageTemplate
      title="SaaS Solutions"
      description="Subscription-based software that scales with your business needs, providing flexibility, cost efficiency, and continuous innovation."
      mainIcon={Settings}
      features={[
        {
          title: "Multi-tenant Architecture",
          description: "Efficient, secure infrastructure that serves multiple customers while maintaining data isolation."
        },
        {
          title: "Subscription Management",
          description: "Robust billing and subscription systems with support for various pricing models and payment processors."
        },
        {
          title: "Scalable Infrastructure",
          description: "Cloud-based solutions that can grow seamlessly with your user base and processing requirements."
        },
        {
          title: "User Management",
          description: "Comprehensive tools for managing accounts, roles, permissions, and user onboarding."
        },
        {
          title: "White-labeling Options",
          description: "Customization capabilities allowing you to rebrand the solution for different clients or markets."
        },
        {
          title: "Analytics & Reporting",
          description: "Built-in metrics and reporting tools to track usage, performance, and business outcomes."
        }
      ]}
      benefits={[
        {
          title: "Predictable Revenue",
          description: "Establish stable, recurring revenue streams through subscription-based business models."
        },
        {
          title: "Lower Customer Acquisition Costs",
          description: "Reduce the cost of acquiring new customers with a scalable, cloud-based delivery model."
        },
        {
          title: "Rapid Market Entry",
          description: "Launch your software product faster with pre-built components and cloud infrastructure."
        },
        {
          title: "Continuous Improvement",
          description: "Deliver regular updates and new features to maintain competitive advantage and customer satisfaction."
        },
        {
          title: "Global Reach",
          description: "Deliver your solution to customers worldwide with cloud-based accessibility."
        },
        {
          title: "Operational Efficiency",
          description: "Streamline operations with automated deployment, monitoring, and maintenance processes."
        }
      ]}
      process={[
        {
          step: 1,
          title: "Business Model Definition",
          description: "We help you define your SaaS business model, pricing strategy, and target market."
        },
        {
          step: 2,
          title: "Solution Architecture",
          description: "We design a scalable, secure, and maintainable architecture for your SaaS product."
        },
        {
          step: 3,
          title: "Core Development",
          description: "We build the fundamental components of your SaaS solution, including multi-tenancy and subscription management."
        },
        {
          step: 4,
          title: "Feature Implementation",
          description: "We develop the specific features and capabilities that differentiate your SaaS offering."
        },
        {
          step: 5,
          title: "Integration & Testing",
          description: "We ensure your solution works seamlessly with payment processors, analytics tools, and other services."
        },
        {
          step: 6,
          title: "Launch & Scaling",
          description: "We support your go-to-market strategy and help you scale as your customer base grows."
        }
      ]}
      technologies={[
        "Cloud Infrastructure", "Microservices", "API-First Design", "CI/CD", "DevOps", 
        "Containerization", "Payment Processing", "OAuth/OIDC", "Analytics", "Multi-tenancy"
      ]}
      caseStudyTitle="HR Management SaaS Platform"
      caseStudyDescription="We created a comprehensive HR management platform for a startup, which grew to serve over 500 businesses within 18 months of launch and secured Series A funding based on its market traction."
      relatedServices={[
        "Custom Software Development", "Cloud Services", "Software Consulting", 
        "UI/UX Design", "Maintenance & Support"
      ]}
    />
  );
};

export default SaaSSolutions;
