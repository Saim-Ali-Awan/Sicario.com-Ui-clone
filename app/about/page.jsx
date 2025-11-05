'use client';
import Link from 'next/link';
import { IconCheck } from '@tabler/icons-react';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center w-full px-4 bg-background ">
      {/* Header */}
      <div className="w-full max-w-[862px] flex flex-col items-center mt-20 mb-16">
        <h1 className="text-[32px] md:text-[48px] mb-6 text-center font-semibold font-cursive
 text-foreground">
          About Sicario.com
        </h1>
        <p className="text-center max-w-[640px] text-base md:text-lg text-muted-foreground font-normal md:leafont-cursive">
          Sicario.com is your all-in-one e-commerce solution, empowering businesses with AI-powered tools, blazing-fast landing pages, and seamless dropshipping integration.
        </p>
      </div>

      {/* Mission Section */}
      <div className="w-full max-w-[862px] mb-16">
        <h2 className="text-2xl md:text-3xl mb-4 text-center font-semibold font-cursive text-foreground">
          Our Mission
        </h2>
        <p className="text-center max-w-[640px] mx-auto text-base md:text-lg text-muted-foreground font-cursive">
          At Sicario.com, we aim to simplify e-commerce by providing cutting-edge tools that help entrepreneurs build high-converting stores and funnels effortlessly. Our mission is to empower businesses of all sizes to succeed online with speed, efficiency, and innovation.
        </p>
      </div>

      {/* Values Section */}
      <div className="w-full max-w-[862px] mb-16">
        <h2 className="text-2xl md:text-3xl mb-6 text-center font-semibold font-cursive text-foreground">
          Our Values
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {[
            { title: 'Innovation', description: 'Leveraging AI to deliver smarter e-commerce solutions.' },
            { title: 'Speed', description: 'Blazing-fast landing pages to maximize conversions.' },
            { title: 'Accessibility', description: 'Tools designed for businesses of all sizes.' },
          ].map((value, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-[260px]">
              <IconCheck className="p-1.5 rounded-full text-primary text-xl bg-primary/10 mb-2" />
              <h3 className="text-lg font-semibold textfont-cursive">{value.title}</h3>
              <p className="text-sm text-mutedfont-cursive">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full max-w-[862px] mb-20 text-center">
        <h2 className="text-2xl md:text-3xl mb-4 font-semibold font-cursive text-foreground">
          Ready to Grow Your Business?
        </h2>
        <p className="text-base md:text-lg text-muted-foreground font-cursive mb-6 max-w-[640px] mx-auto">
          Join thousands of entrepreneurs using Sicario.com to build their dream e-commerce stores.
        </p>
        <Link
          href="/pricing"
          className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3  text-base font-semibold hover:bg-primary/90 animate-breath
  transition-all duration-300
  hover:scale-105 hover:shadow-primary/50 rounded-xl hover:rounded-none  "
          aria-label="Start a 30-day trial with Sicario.com"
        >
          Get Started
          <IconCheck className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
