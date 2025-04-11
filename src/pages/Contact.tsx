
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
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
import { services } from '@/components/home/ServicesSection';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  service: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Message sent successfully! We'll be in touch soon.");
    form.reset();
  }

  return (
    <Layout>
      <div className="pt-24 md:pt-32 pb-12 bg-whitewhiz-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-whitewhiz-gray-dark mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-whitewhiz-gray-medium mb-6">
              Have questions or ready to start your next project? Contact us today.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl font-bold text-whitewhiz-gray-dark mb-6">
                Let's Discuss Your Project
              </h2>
              <p className="text-whitewhiz-gray-medium mb-8">
                We're excited to hear about your ideas and help transform them into powerful software solutions. Fill out the form, and our team will get back to you promptly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-whitewhiz-purple/10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <MapPin className="h-6 w-6 text-whitewhiz-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-whitewhiz-gray-dark mb-1">Our Location</h3>
                    <p className="text-whitewhiz-gray-medium">
                      1234 Tech Avenue, Suite 567<br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-whitewhiz-purple/10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Phone className="h-6 w-6 text-whitewhiz-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-whitewhiz-gray-dark mb-1">Phone</h3>
                    <p className="text-whitewhiz-gray-medium">
                      <a href="tel:+14155552671" className="hover:text-whitewhiz-purple transition-colors">
                        (415) 555-2671
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-whitewhiz-purple/10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Mail className="h-6 w-6 text-whitewhiz-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-whitewhiz-gray-dark mb-1">Email</h3>
                    <p className="text-whitewhiz-gray-medium">
                      <a href="mailto:info@whitewhiz.com" className="hover:text-whitewhiz-purple transition-colors">
                        info@whitewhiz.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-whitewhiz-purple/10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <MessageSquare className="h-6 w-6 text-whitewhiz-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-whitewhiz-gray-dark mb-1">Support Hours</h3>
                    <p className="text-whitewhiz-gray-medium">
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Weekend: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md animate-fade-in-right">
              <h2 className="text-2xl font-bold text-whitewhiz-gray-dark mb-6">
                Send Us a Message
              </h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service You're Interested In</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service.title} value={service.title}>
                                {service.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project or inquiry..."
                            className="min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-whitewhiz-purple hover:bg-whitewhiz-purple-light"
                  >
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-whitewhiz-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-whitewhiz-gray-dark mb-6">
              Our Office Location
            </h2>
            <div className="bg-white p-4 rounded-xl shadow-md">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.26983523822!2d-122.43196537244939!3d37.77516822843966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1713718953400!5m2!1sen!2sus" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="White Whiz Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
