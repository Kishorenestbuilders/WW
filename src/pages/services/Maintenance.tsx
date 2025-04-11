
import React from 'react';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { LifeBuoy, Settings, RefreshCw, Shield, LineChart, Truck, Bell, Zap } from 'lucide-react';

const Maintenance = () => {
  return (
    <ServicePageTemplate
      title="Maintenance & Support"
      description="Ongoing support and maintenance to keep your software running smoothly, secure, and up-to-date with evolving business needs and technologies."
      mainIcon={LifeBuoy}
      features={[
        {
          title: "Proactive Monitoring",
          description: "Continuous oversight of your systems to identify and address issues before they impact users."
        },
        {
          title: "Bug Fixes & Patches",
          description: "Timely resolution of software defects and security vulnerabilities."
        },
        {
          title: "Performance Optimization",
          description: "Regular tuning and enhancements to ensure your software operates at peak efficiency."
        },
        {
          title: "Security Updates",
          description: "Ongoing implementation of security patches and best practices to protect your data."
        },
        {
          title: "Feature Enhancements",
          description: "Incremental improvements to your software based on user feedback and changing requirements."
        },
        {
          title: "Technical Support",
          description: "Responsive assistance for users and administrators encountering issues or questions."
        }
      ]}
      benefits={[
        {
          title: "Maximized Uptime",
          description: "Keep your software available and performing optimally for users and business operations."
        },
        {
          title: "Extended Software Lifespan",
          description: "Prolong the useful life of your applications through regular updates and modernization."
        },
        {
          title: "Reduced Total Cost of Ownership",
          description: "Prevent costly emergency fixes and downtime through proactive maintenance."
        },
        {
          title: "Enhanced Security Posture",
          description: "Protect your data and users with continuous security monitoring and updates."
        },
        {
          title: "Business Continuity",
          description: "Ensure critical systems remain operational through preventive maintenance and quick issue resolution."
        },
        {
          title: "Continuous Improvement",
          description: "Steadily enhance your software with incremental updates based on real-world usage."
        }
      ]}
      process={[
        {
          step: 1,
          title: "Assessment",
          description: "We evaluate your systems to establish baselines and identify improvement opportunities."
        },
        {
          step: 2,
          title: "Support Plan Development",
          description: "We create a tailored maintenance and support strategy based on your business needs."
        },
        {
          step: 3,
          title: "Monitoring Implementation",
          description: "We set up proactive monitoring systems to track performance, availability, and security."
        },
        {
          step: 4,
          title: "Regular Maintenance",
          description: "We perform scheduled updates, optimizations, and health checks."
        },
        {
          step: 5,
          title: "Incident Response",
          description: "We provide timely resolution of issues according to agreed service levels."
        },
        {
          step: 6,
          title: "Continuous Review",
          description: "We regularly assess and improve our support processes and your software quality."
        }
      ]}
      technologies={[
        "Application Performance Monitoring", "Log Management", "Backup Solutions", "CI/CD", 
        "Automated Testing", "Infrastructure Monitoring", "Incident Management", "Patch Management"
      ]}
      caseStudyTitle="Enterprise Resource Planning System Support"
      caseStudyDescription="We took over maintenance of a critical ERP system for a manufacturing company, improving system availability from 95% to 99.9%, reducing incident resolution time by 60%, and implementing performance optimizations that cut database query times in half."
      relatedServices={[
        "Custom Software Development", "Cloud Services", "Quality Assurance", 
        "Software Consulting", "SaaS Solutions"
      ]}
    />
  );
};

export default Maintenance;
