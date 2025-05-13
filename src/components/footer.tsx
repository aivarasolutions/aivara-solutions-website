"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background py-8">
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-4">
        {/* Company Info - Centered on mobile */}
        <div className="flex flex-col gap-2 items-center text-center md:items-start md:text-left">
          <Link href="/" className="flex flex-col md:flex-row items-center gap-2">
            {/* Text placeholder instead of logo */}
            <span className="font-bold text-lg">
              <span className="gold-text">Aivara</span> Solutions
            </span>
          </Link>
          <p className="text-sm text-muted-foreground mt-2 max-w-xs mx-auto md:mx-0">
            AI-focused business based in Houston, TX, offering Custom GPTs for public and business use.
          </p>
        </div>
        
        {/* Quick Links - Centered on mobile */}
        <div className="flex flex-col gap-2 items-center text-center md:items-start md:text-left">
          <h3 className="font-semibold">Quick Links</h3>
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/marketplace" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            GPT Marketplace
          </Link>
          <Link href="/custom" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Custom GPTs
          </Link>
        </div>
        
        {/* Company Links - Centered on mobile */}
        <div className="flex flex-col gap-2 items-center text-center md:items-start md:text-left">
          <h3 className="font-semibold">Company</h3>
          <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
        
        {/* Get Started - Centered on mobile */}
        <div className="flex flex-col gap-2 items-center text-center md:items-start md:text-left">
          <h3 className="font-semibold">Get Started</h3>
          <div className="w-full max-w-xs">
            <Button asChild variant="default" className="bg-primary hover:bg-primary/90 w-full mb-2">
              <Link href="/marketplace">
                Use Our GPTs
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground w-full">
              <Link href="/custom">
                Create Your Own
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Copyright and Links - Centered on mobile */}
      <div className="container mt-8 pt-4 border-t border-border/40">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Aivara Solutions. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

