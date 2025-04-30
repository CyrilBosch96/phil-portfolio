'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Linkedin, Twitter, Instagram } from 'lucide-react'; // Import icons
import Image from 'next/image';

// Define Zod schema for form validation
const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z.string().optional(), // Optional phone number
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

const Contact = () => {
  // Initialize react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  // Define submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: Implement actual form submission logic (e.g., send data to an API)
    console.log(values);
    alert('Form submitted! (Check console for values)');
    form.reset(); // Reset form after submission
  }

  return (
    <section id="contact" className="py-12 bg-background min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold mb-8 text-foreground text-center">Get in Touch</h2>
        
        {/* Mobile Profile Image - Only visible on mobile */}
        <div className="md:hidden mb-8">
          <div className="flex justify-center">
            <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden border-4 border-primary shadow-xl">
              <Image 
                src="/Philphil.jpg" 
                alt="Philip Clements Samuel Raj" 
                fill
                priority
                style={{ 
                  objectFit: 'cover',
                  objectPosition: 'center 30%'
                }}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
        
        {/* Mobile Connect Card - Only visible on mobile */}
        <div className="md:hidden mb-8">
          <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
            <h3 className="text-2xl font-serif font-semibold mb-6 text-foreground text-center">Connect with me</h3>
            <div className="flex justify-center gap-8">
              <a
                href="https://www.linkedin.com/in/philipclementssamuelraj/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={36} />
              </a>
              <a
                href="https://x.com/realtechCEO"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter Profile"
              >
                <Twitter size={36} />
              </a>
              <a
                href="https://www.instagram.com/phil.samuelraj/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram Profile"
              >
                <Instagram size={36} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Contact Form with enhanced styling */}
          <div className="bg-card p-8 rounded-xl shadow-lg border border-border h-full flex flex-col">
            <h3 className="text-2xl font-serif font-semibold mb-6 text-foreground">Send a Message</h3>
            <p className="mb-6 text-foreground/80 text-lg">
              Feel free to reach out for business inquiries or to connect.
            </p>

            {/* Contact Form */}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-grow flex flex-col">
                <div className="space-y-6 flex-grow">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your Name" 
                            {...field} 
                            className="bg-input border-border text-foreground rounded-md py-2 focus:ring-2 focus:ring-primary/50 transition-all" 
                          />
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
                        <FormLabel className="text-foreground font-medium">Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="your.email@example.com" 
                            {...field} 
                            className="bg-input border-border text-foreground rounded-md py-2 focus:ring-2 focus:ring-primary/50 transition-all" 
                          />
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
                        <FormLabel className="text-foreground font-medium">Phone (Optional)</FormLabel>
                        <FormControl>
                          <Input 
                            type="tel" 
                            placeholder="+1 (123) 456-7890" 
                            {...field} 
                            className="bg-input border-border text-foreground rounded-md py-2 focus:ring-2 focus:ring-primary/50 transition-all" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="flex-grow">
                        <FormLabel className="text-foreground font-medium">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message..." 
                            {...field} 
                            className="bg-input border-border text-foreground rounded-md py-2 min-h-[180px] resize-none focus:ring-2 focus:ring-primary/50 transition-all flex-grow" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mt-auto pt-4">
                  <Button 
                    type="submit" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 w-full py-6 rounded-md text-lg font-semibold transition-all shadow-md hover:shadow-lg"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </Form>
          </div>

          {/* Right Column: Profile with Image and Connect Card - Only visible on desktop */}
          <div className="hidden md:flex md:flex-col gap-8 md:sticky md:top-24">
            {/* Phil's Image - Larger and higher positioned */}
            <div className="flex justify-center">
              <div className="relative w-[600px] h-[600px] rounded-full overflow-hidden border-4 border-primary shadow-xl">
                <Image 
                  src="/Philphil.jpg" 
                  alt="Philip Clements Samuel Raj" 
                  fill
                  priority
                  style={{ 
                    objectFit: 'cover',
                    objectPosition: 'center 30%'
                  }}
                  className="rounded-full"
                />
              </div>
            </div>
            
            {/* Enhanced "Connect with me" card */}
            <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
              <h3 className="text-2xl font-serif font-semibold mb-6 text-foreground text-center">Connect with me</h3>
              <div className="flex justify-center gap-8">
                <a
                  href="https://www.linkedin.com/in/philipclementssamuelraj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={36} />
                </a>
                <a
                  href="https://x.com/realtechCEO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
                  aria-label="Twitter Profile"
                >
                  <Twitter size={36} />
                </a>
                <a
                  href="https://www.instagram.com/phil.samuelraj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
                  aria-label="Instagram Profile"
                >
                  <Instagram size={36} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
