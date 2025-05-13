"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:justify-start justify-center w-full md:w-auto">
          <Link href="/" className="flex items-center space-x-2 md:justify-start justify-center">
            {/* Text placeholder instead of logo */}
            <span className="font-bold text-xl text-center">
              <span className="gold-text">Aivara</span> Solutions
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/marketplace" className="text-sm font-medium transition-colors hover:text-primary">
            GPT Marketplace
          </Link>
          <Link href="/custom" className="text-sm font-medium transition-colors hover:text-primary">
            Custom GPTs
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="default" className="bg-primary hover:bg-primary/90">
            <Link href="/marketplace">
              Use Our GPTs
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
            <Link href="/custom">
              Create Your Own
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation - Horizontal Links */}
      <div className="md:hidden w-full overflow-x-auto">
        <div className="flex justify-center space-x-4 py-2 px-4">
          <Link href="/" className="text-xs whitespace-nowrap font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/marketplace" className="text-xs whitespace-nowrap font-medium transition-colors hover:text-primary">
            GPT Market
          </Link>
          <Link href="/custom" className="text-xs whitespace-nowrap font-medium transition-colors hover:text-primary">
            Custom
          </Link>
          <Link href="/about" className="text-xs whitespace-nowrap font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="text-xs whitespace-nowrap font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}

