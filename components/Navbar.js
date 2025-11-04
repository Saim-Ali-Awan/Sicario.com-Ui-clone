'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ThemeProvider } from './theme-provider'; // Fixed import for ShadCN ModeToggle
import { ModeToggle } from './theme-btn';

export default function Navbar() {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <nav className="shadow-lg bg-background/50 shadow-secondary px-2 md:p-4 max-h-fit md:max-h-fit fixed top-0 w-full z-50 backdrop-blur mb-20">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}

        <Link href="/">
        <div className='flex items-center cursor-pointer mx-2'>
          <img src="https://img.icons8.com/?size=100&id=53450&format=png&color=ff1454" className='w-[30px]' alt="" />
          <div className="text-lg font-bold mx-2">Sicario.com</div>
        </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/" className="hover:text-primary transition-transform duration-300">
            Home
          </Link>
          <Link href="/dashboard" className="hover:text-primary transition-transform duration-300">
            Dashboard
          </Link>
          <Link href="/about" className="hover:text-primary transition-transform duration-300">
            About
          </Link>
          <Link href="/contact" className="hover:text-primary transition-transform duration-300">
            Contact
          </Link>
          <div className="flex items-center">
           <Link href="/login">
            <Button className="mx-1 cursor-pointer" variant="outline">
              Login
            </Button>
           </Link>
           <Link href="/signup">
            <Button className="mx-1 cursor-pointer" variant="default">
              Signup
            </Button>
           </Link>
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <span className="my-4 mx-3">
            <ModeToggle />
          </span>
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger aria-label="Toggle navigation">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-bold my-4">Sicario.com</SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-6">
                    <Link href="/" onClick={() => setSheetOpen(false)}>
                      Home
                    </Link>
                     <Link href="/dashboard" onClick={() => setSheetOpen(false)} className="hover:text-primary transition-transform duration-300">
            Dashboard
          </Link>
                    <Link href="/about" onClick={() => setSheetOpen(false)}>
                      About
                    </Link>
                    <Link href="/contact" onClick={() => setSheetOpen(false)}>
                      Contact
                    </Link>
                    <div>
                     <Link href="/login">
                      <Button className="mx-2 cursor-pointer text-xs" variant="outline" size='lg'>
                        Login
                      </Button>
                     </Link>
                     <Link href="/signup">
                      <Button className="mx-2 cursor-pointer text-xs" variant="default" size='lg'>
                        Signup
                      </Button>
                     </Link>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}