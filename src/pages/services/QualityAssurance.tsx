
import React from 'react';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { CheckCircle, Shield, Bug, FileSearch, TestTube, Microscope, Terminal, AlertCircle } from 'lucide-react';

const QualityAssurance = () => {
  return (
    <ServicePageTemplate
      title="Quality Assurance"
      description="Comprehensive testing to ensure your software meets the highest quality standards, delivering reliable, secure, and user-friendly experiences."
      mainIcon={CheckCircle}
      features={[
        {
          title: "Manual Testing",
          description: "Thorough human evaluation of your software from a user perspective to identify usability issues."
        },
        {
          title: "Automated Testing",
          description: "Efficient, repeatable test scripts that can quickly validate functionality across your application."
        },
        {
          title: "Performance Testing",
          description: "Evaluation of how your system performs under various loads and conditions to ensure reliability."
        },
        {
          title: "Security Testing",
          description: "Identification and remediation of vulnerabilities to protect your data and users."
        },
        {
          title: "Compatibility Testing",
          description: "Verification that your software works correctly across different devices, browsers, and operating systems."
        },
        {
          title: "Continuous Integration Testing",
          description: "Seamless integration of testing into your development workflow for rapid feedback and quality control."
        }
      ]}
      benefits={[
        {
          title: "Enhanced Reliability",
          description: "Deliver consistent, dependable experiences that users can trust."
        },
        {
          title: "Reduced Development Costs",
          description: "Identify and fix issues early in the development cycle when they're less expensive to address."
        },
        {
          title: "Improved User Satisfaction",
          description: "Provide smooth, error-free experiences that meet user expectations."
        },
        {
          title: "Protected Reputation",
          description: "Avoid the damage to your brand that can result from releasing buggy or insecure software."
        },
        {
          title: "Accelerated Release Cycles",
          description: "Deliver new features and updates more rapidly with confidence in their quality."
        },
        {
          title: "Compliance Assurance",
          description: "Ensure your software meets industry regulations and standards."
        }
      ]}
      process={[
        {
          step: 1,
          title: "Test Planning",
          description: "We develop comprehensive test strategies based on your project requirements and risk assessment."
        },
        {
          step: 2,
          title: "Test Case Development",
          description: "We create detailed test cases and scenarios that thoroughly evaluate your software."
        },
        {
          step: 3,
          title: "Test Execution",
          description: "We perform manual and automated testing across various dimensions of your application."
        },
        {
          step: 4,
          title: "Defect Reporting",
          description: "We document and communicate identified issues with clear steps to reproduce and supporting evidence."
        },
        {
          step: 5,
          title: "Regression Testing",
          description: "We verify that new changes don't negatively impact existing functionality."
        },
        {
          step: 6,
          title: "Continuous Improvement",
          description: "We refine testing processes and expand test coverage as your software evolves."
        }
      ]}
      technologies={[
        "Selenium", "Cypress", "JUnit", "Jest", "Appium", "Postman", "LoadRunner", 
        "JMeter", "OWASP ZAP", "SonarQube", "TestRail", "Jenkins", "GitLab CI"
      ]}
      caseStudyTitle="Critical Healthcare Application Testing"
      caseStudyDescription="We implemented a comprehensive QA process for a healthcare software provider, identifying and resolving 200+ critical issues before release and establishing an automated test suite that reduced regression testing time by 70%."
      relatedServices={[
        "Custom Software Development", "Mobile & Web Applications", "Cloud Services", 
        "Maintenance & Support", "UI/UX Design"
      ]}
    />
  );
};

export default QualityAssurance;
