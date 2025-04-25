
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-6">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4 dark-charcoal">
              Feel free to reach out for business inquiries or to connect.
            </p>
            <p className="mb-4 dark-charcoal">
              Email: <a href="mailto:philip@example.com" className="teal-accent">philip@example.com</a>
            </p>
            <p className="mb-4 dark-charcoal">
              Phone: +1 (123) 456-7890
            </p>
            {/* Contact form coming soon... */}
            <div className="mt-6">
              <p className="dark-charcoal">Contact form coming soon...</p>
            </div>
            {/* Social media links with subtle animations */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2 dark-charcoal">Connect with me</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:teal-accent">LinkedIn</a>
                <a href="#" className="hover:teal-accent">Twitter</a>
                {/* Add more social media links as needed */}
              </div>
            </div>
          </div>
          <div>
            {/* Implement a contact form here */}
            {/* Replace the placeholder with a map location */}
            <div className="h-64 bg-gray-200 rounded-lg">
              {/* Replace with an actual map component or image */}
              <p className="text-center py-24 dark-charcoal">Map location of Techjays headquarters</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

