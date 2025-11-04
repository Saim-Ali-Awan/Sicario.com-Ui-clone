'use client';

import * as React from 'react';
import { Button } from './button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from './navigation-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './popover';
import { cn } from '@/lib/utils';

// Logo Component
const Logo = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 324 323"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <rect
      x="88.1023"
      y="144.792"
      width="151.802"
      height="36.5788"
      rx="18.2894"
      transform="rotate(-38.5799 88.1023 144.792)"
      fill="currentColor"
    />
    <rect
      x="85.3459"
      y="244.537"
      width="151.802"
      height="36.5788"
      rx="18.2894"
      transform="rotate(-38.5799 85.3459 244.537)"
      fill="currentColor"
    />
  </svg>
);

// Hamburger Icon with Animation
const HamburgerIcon = ({ isOpen, ...props }) => (
  <svg
    {...props}
    className={cn(
      'h-5 w-5 transition-all duration-300',
      isOpen ? 'rotate-90' : ''
    )}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path
      d="M4 12h16"
      className={cn(
        'origin-center transition-all duration-300',
        isOpen
          ? 'translate-y-0 rotate-45'
          : '-translate-y-2'
      )}
    />
    <path
      d="M4 12h16"
      className={cn(
        'origin-center transition-all duration-300',
        isOpen ? 'opacity-0' : 'opacity-100'
      )}
    />
    <path
      d="M4 12h16"
      className={cn(
        'origin-center transition-all duration-300',
        isOpen
          ? 'translate-y-0 -rotate-45'
          : 'translate-y-2'
      )}
    />
  </svg>
);

// Default Links
const defaultNavigationLinks = [
  { href: '#', label: 'Home', active: true },
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#about', label: 'About' },
];

const Navbar01 = React.forwardRef(
  (
    {
      className,
      logo = <Logo className="h-8 w-8" />,
      logoHref = '#',
      navigationLinks = defaultNavigationLinks,
      signInText = 'Sign In',
      signInHref = '#signin',
      ctaText = 'Get Started',
      ctaHref = '#get-started',
      onSignInClick,
      onCtaClick,
      ...props
    },
    ref
  ) => {
    const [isMobile, setIsMobile] = React.useState(false);
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
    const containerRef = React.useRef(null);

    // Detect mobile based on container width
    React.useEffect(() => {
      const checkWidth = () => {
        if (containerRef.current) {
          setIsMobile(containerRef.current.offsetWidth < 768);
        }
      };

      checkWidth();
      const observer = new ResizeObserver(checkWidth);
      if (containerRef.current) observer.observe(containerRef.current);

      return () => observer.disconnect();
    }, []);

    // Combine refs
    const combinedRef = React.useCallback(
      (node) => {
        containerRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
      },
      [ref]
    );

    return (
      <header
        ref={combinedRef}
        className={cn(
          'sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
          className
        )}
        {...props}>
        <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
          {/* Left: Logo + Nav */}
          <div className="flex items-center gap-6">
            {/* Mobile Menu */}
            {isMobile && (
              <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 hover:bg-accent"
                    aria-label="Toggle menu">
                    <HamburgerIcon isOpen={isPopoverOpen} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-48 p-2">
                  <NavigationMenu>
                    <NavigationMenuList className="flex flex-col gap-1">
                      {navigationLinks.map((link) => (
                        <NavigationMenuItem key={link.label}>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setIsPopoverOpen(false);
                            }}
                            className={cn(
                              'w-full rounded-md px-3 py-2 text-left text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
                              link.active
                                ? 'bg-accent text-accent-foreground'
                                : 'text-foreground/80'
                            )}>
                            {link.label}
                          </button>
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                </PopoverContent>
              </Popover>
            )}

            {/* Logo */}
            <a
              href={logoHref}
              onClick={(e) => e.preventDefault()}
              className="flex items-center gap-2 text-primary hover:text-primary/90 transition-colors">
              <div className="text-2xl">{logo}</div>
              <span className="hidden font-bold text-xl sm:inline-block">
                shadcn.io
              </span>
            </a>

            {/* Desktop Nav */}
            {!isMobile && (
              <NavigationMenu>
                <NavigationMenuList className="gap-1">
                  {navigationLinks.map((link) => (
                    <NavigationMenuItem key={link.label}>
                      <button
                        onClick={(e) => e.preventDefault()}
                        className={cn(
                          'rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
                          link.active
                            ? 'bg-accent text-accent-foreground'
                            : 'text-foreground/80 hover:text-foreground'
                        )}>
                        {link.label}
                      </button>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            )}
          </div>

          {/* Right: Buttons */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-sm font-medium"
              onClick={(e) => {
                e.preventDefault();
                onSignInClick?.();
              }}>
              {signInText}
            </Button>
            <Button
              size="sm"
              className="px-4 h-9 text-sm font-medium rounded-md shadow-sm"
              onClick={(e) => {
                e.preventDefault();
                onCtaClick?.();
              }}>
              {ctaText}
            </Button>
          </div>
        </div>
      </header>
    );
  }
);

Navbar01.displayName = 'Navbar01';

export { Navbar01, Logo, HamburgerIcon };