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
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Contact Info & Form */}
          <div>
            <p className="mb-4 text-foreground">
              Feel free to reach out for business inquiries or to connect.
            </p>

            {/* Contact Form */}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="bg-input border-border text-foreground" />
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
                      <FormLabel className="text-foreground">Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} className="bg-input border-border text-foreground" />
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
                      <FormLabel className="text-foreground">Phone (Optional)</FormLabel>
                      <FormControl>
                        {/* Consider adding country code selection later if needed */}
                        <Input type="tel" placeholder="+1 (123) 456-7890" {...field} className="bg-input border-border text-foreground" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message..." {...field} className="bg-input border-border text-foreground" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">Send Message</Button>
              </form>
            </Form>
          </div>

          {/* Right Column: Moved Connect with me here */}
          <div className="flex flex-col gap-6">
            {/* Phil's Image - Now circular and positioned at the top */}
            <div className="mt-4 flex justify-center">
              <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden border-4 border-primary">
                <Image 
                  src="/Philphil.jpg" 
                  alt="Philip Clements Samuel Raj" 
                  fill
                  style={{ 
                    objectFit: 'cover',
                    objectPosition: 'center 30%'
                  }}
                  className="rounded-full"
                />
              </div>
            </div>
            
            {/* Container for "Connect with me" - Now below the image */}
            <div className="bg-card p-6 rounded-lg shadow-md border border-border mt-4">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Connect with me</h3>
              <div className="flex gap-6">
                <a
                  href="https://www.linkedin.com/in/philipclementssamuelraj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://x.com/realtechCEO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors duration-300"
                  aria-label="Twitter Profile"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="https://www.instagram.com/phil.samuelraj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors duration-300"
                  aria-label="Instagram Profile"
                >
                  <Instagram size={24} />
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
