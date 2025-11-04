// ❌ Remove "use client" from this file
import Link from "next/link";
import { IconCheck } from "@tabler/icons-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// ✅ Add metadata (server-side)
export const metadata = {
  title: "Sicario.com | Pricing",
  description: "E-Commerce solutions for brands",
};

// ✅ Make this a server component (default)
export default function PricingPage() {
  const pricingTiers = [
    {
      title: "Starter",
      price: "$19/mo",
      description: "Perfect for new entrepreneurs starting their e-commerce journey.",
      features: [
        "1 AI-powered store",
        "Basic funnel builder",
        "Up to 1,000 monthly visitors",
        "Email support",
      ],
      href: "/signup?plan=starter",
    },
    {
      title: "Pro",
      price: "$49/mo",
      description: "Ideal for growing businesses with advanced needs.",
      features: [
        "3 AI-powered stores",
        "Advanced funnel builder",
        "Up to 10,000 monthly visitors",
        "Priority email support",
        "Dropshipping integration",
      ],
      href: "/signup?plan=pro",
      highlighted: true,
    },
    {
      title: "Enterprise",
      price: "$99/mo",
      description: "For large-scale businesses scaling without limits.",
      features: [
        "Unlimited AI-powered stores",
        "Premium funnel builder",
        "Unlimited monthly visitors",
        "24/7 phone & email support",
        "Dropshipping & COD integration",
        "Custom analytics",
      ],
      href: "/signup?plan=enterprise",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full px-4 bg-background">
      {/* Header */}
      <div className="w-full max-w-[862px] flex flex-col items-center mt-20 mb-16">
        <h1 className="text-[32px] md:text-[48px] mb-6 text-center font-semibold font-serif text-foreground">
          Pricing Plans for Sicario.com
        </h1>
        <p className="text-center max-w-[640px] text-base md:text-lg text-muted-foreground font-normal md:leading-[28px] font-sans">
          Choose the perfect plan for your e-commerce business. All plans include a 30-day free trial to get you started.
        </p>
      </div>

      {/* Pricing Tiers */}
      <div className="w-full max-w-[862px] mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`flex flex-col ${
                tier.highlighted ? "border-primary shadow-lg" : "border-border"
              } bg-card text-card-foreground`}
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold font-serif text-foreground">
                  {tier.title}
                </CardTitle>
                <p className="text-3xl font-bold font-sans text-foreground">{tier.price}</p>
                <p className="text-sm text-muted-foreground font-sans">{tier.description}</p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {tier.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-muted-foreground font-sans"
                    >
                      <IconCheck className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link
                  href={tier.href}
                  className={`w-full text-center bg-primary text-primary-foreground px-4 py-2 rounded-[--radius] text-base font-semibold hover:bg-primary/90 transition-colors duration-300 ${
                    tier.highlighted ? "bg-primary/90" : ""
                  }`}
                  aria-label={`Start a 30-day trial with Sicario.com ${tier.title} plan`}
                >
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full max-w-[862px] mb-20 text-center">
        <h2 className="text-2xl md:text-3xl mb-4 font-semibold font-serif text-foreground">
          Not Sure Which Plan to Choose?
        </h2>
        <p className="text-base md:text-lg text-muted-foreground font-normal font-sans mb-6 max-w-[640px] mx-auto">
          Contact our team to find the best plan for your e-commerce needs.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-[--radius] text-base font-semibold hover:bg-primary/90 transition-colors duration-300"
          aria-label="Contact Sicario.com for pricing inquiries"
        >
          Contact Us
          <IconCheck className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
