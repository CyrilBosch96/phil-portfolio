
import React from 'react';

const Contact = () => {
  return (
    <section className="py-16 bg-white">
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
          </div>
          <div>
            {/* Implement a contact form here */}
            <p className="dark-charcoal">Contact form coming soon...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
