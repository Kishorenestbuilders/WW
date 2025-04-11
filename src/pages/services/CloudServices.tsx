
import React from 'react';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Cloud, Server, Database, Shield, LineChart, RefreshCw, Lock, Zap } from 'lucide-react';

const CloudServices = () => {
  return (
    <ServicePageTemplate
      title="Cloud Services"
      description="Secure, scalable cloud infrastructure and deployment solutions that reduce costs, increase flexibility, and accelerate innovation."
      mainIcon={Cloud}
      features={[
        {
          title: "Cloud Migration",
          description: "Seamless transition of your existing applications and infrastructure to the cloud with minimal disruption."
        },
        {
          title: "Infrastructure as Code",
          description: "Automated, reproducible infrastructure deployment using modern DevOps practices and tools."
        },
        {
          title: "Containerization",
          description: "Efficient application packaging and deployment using Docker, Kubernetes, and other container technologies."
        },
        {
          title: "Serverless Architectures",
          description: "Cost-effective, scalable solutions that automatically handle provisioning and scaling."
        },
        {
          title: "Cloud Security",
          description: "Comprehensive security measures to protect your data and applications in the cloud."
        },
        {
          title: "Hybrid & Multi-cloud",
          description: "Solutions that leverage multiple cloud providers or combine on-premises and cloud resources."
        }
      ]}
      benefits={[
        {
          title: "Cost Optimization",
          description: "Reduce capital expenditure and pay only for the resources you actually use."
        },
        {
          title: "Scalability On Demand",
          description: "Easily scale resources up or down based on your business needs and traffic patterns."
        },
        {
          title: "Enhanced Reliability",
          description: "Improve uptime and disaster recovery capabilities with distributed cloud infrastructure."
        },
        {
          title: "Faster Time to Market",
          description: "Accelerate development and deployment cycles with automated cloud infrastructure."
        },
        {
          title: "Global Presence",
          description: "Deploy your applications closer to your users for better performance worldwide."
        },
        {
          title: "Advanced Capabilities",
          description: "Leverage cutting-edge cloud services for AI, machine learning, analytics, and more."
        }
      ]}
      process={[
        {
          step: 1,
          title: "Assessment",
          description: "We evaluate your current infrastructure, applications, and requirements for cloud migration or implementation."
        },
        {
          step: 2,
          title: "Strategy & Planning",
          description: "We develop a comprehensive cloud strategy, including provider selection, architecture, and migration approach."
        },
        {
          step: 3,
          title: "Infrastructure Setup",
          description: "We establish your cloud environment with proper networking, security, and monitoring."
        },
        {
          step: 4,
          title: "Migration/Implementation",
          description: "We execute the migration or implementation plan, moving or deploying applications to the cloud."
        },
        {
          step: 5,
          title: "Optimization",
          description: "We fine-tune your cloud resources for performance, security, and cost-effectiveness."
        },
        {
          step: 6,
          title: "Ongoing Management",
          description: "We provide continuous monitoring, maintenance, and optimization of your cloud infrastructure."
        }
      ]}
      technologies={[
        "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "CloudFormation", 
        "Ansible", "Serverless", "CI/CD", "Microservices", "Containerization"
      ]}
      caseStudyTitle="Global SaaS Company Infrastructure Modernization"
      caseStudyDescription="We helped a growing SaaS company migrate from a traditional data center to a multi-region cloud architecture, resulting in 99.99% availability, 40% cost reduction, and the ability to scale to millions of users."
      relatedServices={[
        "Custom Software Development", "SaaS Solutions", "Software Consulting", 
        "Maintenance & Support", "Quality Assurance"
      ]}
    />
  );
};

export default CloudServices;
