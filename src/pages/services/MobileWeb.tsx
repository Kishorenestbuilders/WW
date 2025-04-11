
import React from 'react';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Smartphone, Laptop, Tablet, Globe, Layout, Zap, Check, Layers } from 'lucide-react';

const MobileWeb = () => {
  return (
    <ServicePageTemplate
      title="Mobile & Web Applications"
      description="Responsive, cross-platform applications that deliver exceptional user experiences across all devices, helping you engage customers and drive growth."
      mainIcon={Smartphone}
      features={[
        {
          title: "Cross-Platform Development",
          description: "Build once, deploy everywhere with apps that work seamlessly across iOS, Android, and web platforms."
        },
        {
          title: "Progressive Web Apps",
          description: "Create web applications that offer native-like experiences with offline capabilities and fast loading times."
        },
        {
          title: "Responsive Design",
          description: "Ensure your applications adapt perfectly to any screen size, from smartphones to desktops."
        },
        {
          title: "Native Performance",
          description: "Deliver smooth, high-performance experiences that leverage device capabilities and meet user expectations."
        },
        {
          title: "Seamless Integration",
          description: "Connect your mobile and web apps with your existing systems, APIs, and third-party services."
        },
        {
          title: "Offline Functionality",
          description: "Enable users to continue working even without an internet connection, with automatic synchronization."
        }
      ]}
      benefits={[
        {
          title: "Enhanced User Engagement",
          description: "Deliver intuitive, engaging experiences that keep users coming back to your application."
        },
        {
          title: "Broader Market Reach",
          description: "Reach users across all devices and platforms with a single development investment."
        },
        {
          title: "Faster Time to Market",
          description: "Deploy your applications more quickly with efficient cross-platform development approaches."
        },
        {
          title: "Consistent Brand Experience",
          description: "Maintain a unified brand presence across all digital touchpoints and devices."
        },
        {
          title: "Improved Conversion Rates",
          description: "Turn visitors into customers with optimized user journeys and seamless experiences."
        },
        {
          title: "Lower Development Costs",
          description: "Reduce development and maintenance expenses with modern, efficient frameworks."
        }
      ]}
      process={[
        {
          step: 1,
          title: "Requirements Gathering",
          description: "We define your application goals, target audience, and required functionality."
        },
        {
          step: 2,
          title: "UX/UI Design",
          description: "Our designers create intuitive interfaces and user flows optimized for all devices."
        },
        {
          step: 3,
          title: "Development",
          description: "We build your application using the most appropriate technologies for your specific needs."
        },
        {
          step: 4,
          title: "Testing",
          description: "We thoroughly test your application across different devices, platforms, and conditions."
        },
        {
          step: 5,
          title: "Deployment",
          description: "We handle the submission and deployment process for app stores and web hosting."
        },
        {
          step: 6,
          title: "Ongoing Support",
          description: "We provide maintenance, updates, and enhancements to keep your application competitive."
        }
      ]}
      technologies={[
        "React", "React Native", "Flutter", "Angular", "Vue.js", "Swift", "Kotlin", 
        "Progressive Web Apps", "Responsive Design", "Material Design", "iOS", "Android"
      ]}
      caseStudyTitle="E-commerce Mobile App for Retail Chain"
      caseStudyDescription="We developed a cross-platform mobile application for a retail chain, which increased their mobile sales by 120% in the first quarter after launch and improved customer retention rates by 35%."
      relatedServices={[
        "Custom Software Development", "UI/UX Design", "Software Consulting", 
        "Quality Assurance", "Maintenance & Support"
      ]}
    />
  );
};

export default MobileWeb;
