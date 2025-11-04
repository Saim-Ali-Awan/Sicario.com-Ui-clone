"use client";
import Link from "next/link";
import { Icons } from "@/components/Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Pages: [
      { name: "Docs", href: "/docs" },
      { name: "Blocks", href: "/blocks" },
      { name: "Colors", href: "/colors" },
    ],
    Socials: [
      { name: "GitHub", href: "https://github.com/arihantcodes/spectrum-ui" },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/arihantcodes" },
      { name: "X", href: "https://x.com/arihantcodes" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/tos" },
    ],
  };

  return (
    <footer className="py-12 px-4 md:px-6 bg-background text-foreground border-t border-border font-sans">
      <div className="container mx-auto space-y-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Logo and Info */}
          <div>
            <Link href="/" className="flex items-center gap-3 group">
              <div className="h-8 w-8 bg-card border border-border rounded-md flex items-center justify-center p-1 shadow-sm group-hover:shadow-md transition-shadow">
                <img src="https://img.icons8.com/?size=100&id=53450&format=png&color=ff1454" alt="" />
              </div>
              <span className="font-bold text-lg tracking-wide group-hover:text-primary transition-colors">
                Sicario.com
              </span>
            </Link>

            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              Built by{" "}
              <Link
                href=""
                className="text-primary underline hover:text-primary-foreground transition-colors"
              >
                @Subhan Azam
              </Link>{" "}
              &{" "}
              <Link
                href="https://passwordworld.vercel.app/"
                className="text-primary underline hover:text-primary-foreground transition-colors"
              >
                @saimali
              </Link>
            </p>

            <p className="text-xs text-muted-foreground mt-4">
              © {currentYear} Sicario.com. All rights reserved.
            </p>
          </div>

          {/* Footer Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-semibold mb-3 text-foreground">{title}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-center items-center">
          <h1 className="text-center text-6xl md:text-6xl lg:text-[10rem] font-bold bg-gradient-to-b from-primary to-accent bg-clip-text text-transparent select-none tracking-wide">
            Sicario
          </h1>
        </div>
      </div>
    </footer>
  );
}
