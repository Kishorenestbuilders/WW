
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Briefcase, CheckCircle, ChevronRight } from 'lucide-react';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const jobListings = [
  {
    title: "UX Developer",
    type: "Full Time / Part Time",
    location: "Remote / Onsite",
    description: "Design and implement user-centered interfaces for our software products."
  },
  {
    title: "Back End Developer",
    type: "FULL TIME ONLY",
    location: "Remote / Onsite",
    description: "Build scalable and maintainable backend systems for our enterprise applications."
  },
  {
    title: "Front End Developer",
    type: "FULL TIME ONLY",
    location: "Remote / Onsite",
    description: "Create responsive and interactive user interfaces using modern JavaScript frameworks."
  },
  {
    title: "SEO Setup",
    type: "Contract / Part Time",
    location: "Remote",
    description: "Optimize our digital presence to improve search engine rankings and visibility."
  },
  {
    title: "GRAPHIC DESIGNER",
    type: "Full Time / Part Time",
    location: "Remote / Onsite",
    description: "Create visual concepts and designs for various digital and print media."
  },
  {
    title: "SOCIAL MEDIA MANAGER",
    type: "Full Time / Part Time",
    location: "Remote",
    description: "Develop and implement social media strategies to increase brand awareness."
  },
  {
    title: "Software Tester",
    type: "Full Time / Contract",
    location: "Remote / Onsite",
    description: "Ensure software quality through comprehensive testing methodologies."
  }
];

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  position: z.string().min(1, {
    message: "Please select a position.",
  }),
  resume: z.any(),
  coverLetter: z.string().optional(),
  agreeToTerms: z.literal(true, {
    errorMap: () => ({ message: "You must agree to our terms and conditions." }),
  }),
});

export default function Careers() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      position: "",
      coverLetter: "",
      agreeToTerms: false as unknown as true, // Type assertion to fix the error
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Application submitted successfully! We'll be in touch soon.");
    form.reset();
  }

  return (
    <Layout>
      <div className="pt-24 md:pt-32 pb-12 bg-whitewhiz-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-whitewhiz-gray-dark mb-4">
              Join Our Team
            </h1>
            <p className="text-lg text-whitewhiz-gray-medium mb-6">
              Build your career with White Whiz and be part of a team that's changing the digital landscape.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-whitewhiz-gray-dark mb-4">
              Current Vacancies
            </h2>
            <p className="text-whitewhiz-gray-medium text-lg max-w-2xl mx-auto">
              Explore our open positions and find the right opportunity for your skills and ambitions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobListings.map((job, index) => (
              <div 
                key={job.title} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-whitewhiz-purple/10 rounded-full flex items-center justify-center group-hover:bg-whitewhiz-purple/20 transition-colors">
                    <Briefcase className="h-6 w-6 text-whitewhiz-purple" />
                  </div>
                  <span className="text-sm font-medium text-whitewhiz-purple bg-whitewhiz-purple/10 px-3 py-1 rounded-full">
                    {job.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-whitewhiz-gray-dark mb-2">{job.title}</h3>
                <p className="text-whitewhiz-gray-medium mb-2 text-sm">Location: {job.location}</p>
                <p className="text-whitewhiz-gray-medium mb-4">{job.description}</p>
                <a 
                  href="#apply-now"
                  className="inline-flex items-center text-whitewhiz-purple font-medium hover:text-whitewhiz-purple-light transition-colors"
                >
                  Apply Now
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-whitewhiz-gray-light" id="apply-now">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-md">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-whitewhiz-gray-dark mb-4">
                Apply Now
              </h2>
              <p className="text-whitewhiz-gray-medium">
                Fill out the form below to apply for a position at White Whiz.
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john.doe@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 (555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Position</FormLabel>
                        <FormControl>
                          <select
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                            {...field}
                          >
                            <option value="">Select a position</option>
                            {jobListings.map(job => (
                              <option key={job.title} value={job.title}>{job.title}</option>
                            ))}
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="resume"
                  render={({ field: { value, onChange, ...fieldProps } }) => (
                    <FormItem>
                      <FormLabel>Resume/CV</FormLabel>
                      <FormControl>
                        <Input 
                          type="file" 
                          accept=".pdf,.doc,.docx" 
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              onChange(file);
                            }
                          }}
                          {...fieldProps}
                        />
                      </FormControl>
                      <p className="text-xs text-muted-foreground mt-1">
                        Accepted formats: PDF, DOC, DOCX (Max 5MB)
                      </p>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="coverLetter"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cover Letter / Additional Information</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us why you're a good fit for this position..."
                          className="min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="agreeToTerms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I agree to the <a href="#" className="text-whitewhiz-purple hover:underline">terms and conditions</a> and <a href="#" className="text-whitewhiz-purple hover:underline">privacy policy</a>
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-whitewhiz-purple hover:bg-whitewhiz-purple-light"
                >
                  Submit Application
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-whitewhiz-gray-dark mb-4">
                Why Work With Us?
              </h2>
              <p className="text-whitewhiz-gray-medium text-lg">
                Join a team that values innovation, growth, and work-life balance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in">
                <div className="w-12 h-12 bg-whitewhiz-purple/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-whitewhiz-purple" />
                </div>
                <h3 className="text-xl font-semibold text-whitewhiz-gray-dark mb-3">Professional Growth</h3>
                <p className="text-whitewhiz-gray-medium">
                  We invest in our team's development through continuous learning opportunities, mentorship programs, and career advancement paths.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in" style={{ animationDelay: '100ms' }}>
                <div className="w-12 h-12 bg-whitewhiz-purple/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-whitewhiz-purple" />
                </div>
                <h3 className="text-xl font-semibold text-whitewhiz-gray-dark mb-3">Innovative Environment</h3>
                <p className="text-whitewhiz-gray-medium">
                  Work on cutting-edge projects using the latest technologies and methodologies in software development.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="w-12 h-12 bg-whitewhiz-purple/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-whitewhiz-purple" />
                </div>
                <h3 className="text-xl font-semibold text-whitewhiz-gray-dark mb-3">Work-Life Balance</h3>
                <p className="text-whitewhiz-gray-medium">
                  We promote a healthy balance between professional responsibilities and personal life, with flexible working arrangements.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in" style={{ animationDelay: '300ms' }}>
                <div className="w-12 h-12 bg-whitewhiz-purple/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-whitewhiz-purple" />
                </div>
                <h3 className="text-xl font-semibold text-whitewhiz-gray-dark mb-3">Competitive Benefits</h3>
                <p className="text-whitewhiz-gray-medium">
                  Enjoy competitive salaries, health benefits, retirement plans, and other perks as part of our comprehensive compensation package.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
