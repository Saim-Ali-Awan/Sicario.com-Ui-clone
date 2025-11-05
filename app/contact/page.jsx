'use client';
import Link from 'next/link';
import { useState } from 'react';
import { IconMail, IconPhone, IconBrandTwitter, IconBrandFacebook, IconCheck } from '@tabler/icons-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Please fill out all fields.');
      return;
    }
    // Placeholder for form submission (e.g., to /api/contact)
    console.log('Form submitted:', formData);
    setFormStatus('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormStatus(null), 3000);
  };

  return (
    <div className="flex flex-col items-center w-full px-4 bg-background">
      {/* Header */}
      <div className="w-full max-w-[862px] flex flex-col items-center mt-20 mb-16">
        <h1 className="text-[32px] md:text-[48px] mb-6 text-center font-semibold font-cursive text-foreground">
          Contact Sicario.com
        </h1>
        <p className="text-center max-w-[640px] text-base md:text-lg text-muted-foreground font-normal md:leading-[28px] font-cursive">
          Have questions about our AI-powered e-commerce solutions? Reach out to our team for support, inquiries, or feedback.
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-[640px] mb-16">
        <h2 className="text-2xl md:text-3xl mb-4 text-center font-semibold font-cursive text-foreground">
          Send Us a Message
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className='p-3.5'>
            <label htmlFor="name" className="text-sm font-cursive text-foreground">
              Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your name"
              className="mt-1 border-border bg-background text-foreground"
              aria-required="true"
            />
          </div>
          <div className='p-3.5'>
            <label htmlFor="email" className="text-sm font-cursive text-foreground">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your email"
              className="mt-1 border-border bg-background text-foreground"
              aria-required="true"
            />
          </div>
          <div className='p-3.5'>
            <label htmlFor="message" className="text-sm font-cursive text-foreground">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your message"
              className="mt-1 border-border bg-background text-foreground"
              rows={5}
              aria-required="true"
            />
          </div>
          <Button
            type="submit"
            className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-lg cursor-pointer rounded-md"
            aria-label="Submit contact form"
          >
            Send Message
          </Button>
          {formStatus && (
            <p className={`text-sm font-cursive ${formStatus.includes('successfully') ? 'text-primary' : 'text-destructive'}`}>
              {formStatus}
            </p>
          )}
        </form>
      </div>

      {/* Contact Information */}
      <div className="w-full max-w-[862px] mb-16">
        <h2 className="text-2xl md:text-3xl mb-6 text-center font-semibold font-cursive text-foreground">
          Get in Touch
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {[
            { title: 'Email', icon: IconMail, value: 'support@sicario.com', href: 'mailto:support@sicario.com' },
            { title: 'Phone', icon: IconPhone, value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
            { title: 'Twitter', icon: IconBrandTwitter, value: '@SicarioEcom', href: 'https://twitter.com/SicarioEcom' },
            { title: 'Facebook', icon: IconBrandFacebook, value: 'Sicario.com', href: 'https://facebook.com/SicarioEcom' },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-[200px]">
              <item.icon className="p-1.5 rounded-full text-primary text-xl bg-primary/10 mb-2" />
              <h3 className="text-lg font-semibold text-foreground font-cursive">{item.title}</h3>
              <Link href={item.href} className="text-sm text-muted-foreground font-cursive hover:text-primary">
                {item.value}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full max-w-[862px] mb-20 text-center">
        <h2 className="text-2xl md:text-3xl mb-4 font-semibold font-cursive text-foreground">
          Ready to Start Your E-Commerce Journey?
        </h2>
        <p className="text-base md:text-lg text-muted-foreground font-normal font-cursive mb-6 max-w-[640px] mx-auto">
          Explore Sicario.com’s AI-powered tools and start building your dream store today.
        </p>
        <Link
          href="/pricing"
          className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 text-base font-semibold hover:bg-primary/90 duration-300
  hover:scale-105 hover:shadow-primary/50 rounded-xl hover:rounded-none "
          aria-label="Start a 30-day trial with Sicario.com"
        >
          Get Started
          <IconCheck className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
