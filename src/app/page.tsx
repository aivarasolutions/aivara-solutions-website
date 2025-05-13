"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// GPT data
const gptData = [
  {
    id: "g-680b665c99a08191b6b40908ebf68fe0-marketing-genius-ai",
    name: "Marketing Genius AI",
    initials: "MG",
    description: "Generate powerful marketing strategies, content ideas, and campaign plans for your business",
    url: "https://chatgpt.com/g/g-680b665c99a08191b6b40908ebf68fe0-marketing-genius-ai",
    category: "business",
    featured: true
  },
  {
    id: "g-680b62acead481919fbc50db2dc8b3e9-musicbiz-pro-ai",
    name: "MusicBiz Pro AI",
    initials: "MB",
    description: "Your ultimate assistant for music business management, marketing, and industry insights",
    url: "https://chatgpt.com/g/g-680b62acead481919fbc50db2dc8b3e9-musicbiz-pro-ai",
    category: "business",
    featured: false
  },
  {
    id: "g-67bff639b358819193665c8963bcc298-freightgenius-ai",
    name: "FreightGenius AI",
    initials: "FG",
    description: "Optimize logistics operations, shipping routes, and supply chain management with AI",
    url: "https://chatgpt.com/g/g-67bff639b358819193665c8963bcc298-freightgenius-ai",
    category: "business",
    featured: true
  },
  {
    id: "g-67bfbffe1450819188152eda86a7fbfc-richaf-travel-ai",
    name: "RichAF Travel AI",
    initials: "RT",
    description: "Your luxury travel planning assistant for high-end destinations and exclusive experiences",
    url: "https://chatgpt.com/g/g-67bfbffe1450819188152eda86a7fbfc-richaf-travel-ai",
    category: "travel",
    featured: true
  },
  {
    id: "g-67bb293512a881919c40348a03bfea8c-quantum-trades",
    name: "Quantum Trades",
    initials: "QT",
    description: "Advanced trading strategies and market analysis for investment professionals",
    url: "https://chatgpt.com/g/g-67bb293512a881919c40348a03bfea8c-quantum-trades",
    category: "finance",
    featured: false
  },
  {
    id: "g-67b9ee91a0a0819191f89ecf8f0d2d5f-credit-capital-ai",
    name: "Credit Capital AI",
    initials: "CC",
    description: "Financial planning, credit optimization, and capital management assistant",
    url: "https://chatgpt.com/g/g-67b9ee91a0a0819191f89ecf8f0d2d5f-credit-capital-ai",
    category: "finance",
    featured: true
  },
  {
    id: "g-679f1f5a47c48191968aeb02a1fd4e91-property-manager-assistant",
    name: "Property Manager Assistant",
    initials: "PM",
    description: "Streamline property management tasks, tenant communications, and maintenance scheduling",
    url: "https://chatgpt.com/g/g-679f1f5a47c48191968aeb02a1fd4e91-property-manager-assistant",
    category: "productivity",
    featured: false
  }
]

export default function Home() {
  const [featuredGpts, setFeaturedGpts] = useState([])
  
  useEffect(() => {
    // Filter featured GPTs for the homepage
    const featured = gptData.filter(gpt => gpt.featured);
    setFeaturedGpts(featured);
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container flex flex-col items-center text-center">
          <div className="flex flex-col items-center mb-6">
            {/* Logo removed from here */}
            <h1 className="text-4xl md:text-6xl font-bold text-center">
              <span className="gold-text">Aivara</span> Solutions
            </h1>
          </div>
          <p className="text-xl md:text-2xl max-w-3xl mb-10 text-muted-foreground text-center">
            Revolutionizing business with AI-powered GPT solutions for enhanced productivity and innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
              <Link href="/marketplace">
                Use Our GPTs
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground w-full sm:w-auto">
              <Link href="/custom">
                Create Your Own
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* GPT Marketplace Preview */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured GPTs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of specialized GPTs designed to enhance your business operations and personal productivity
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGpts.map((gpt) => (
              <Card key={gpt.id} className="gpt-card overflow-hidden border border-border bg-card">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary text-lg font-bold">{gpt.initials}</span>
                    </div>
                    <h3 className="font-bold text-lg">{gpt.name}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {gpt.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground px-2 py-1 bg-muted/30 rounded-full">
                      {gpt.category.charAt(0).toUpperCase() + gpt.category.slice(1)}
                    </span>
                    <Button asChild className="w-auto">
                      <Link href={gpt.url} target="_blank">
                        Use Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link href="/marketplace">
                View All GPTs
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Custom GPTs for Business */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Custom GPTs for Your Business</h2>
              <p className="text-muted-foreground mb-6">
                We create tailored GPT solutions designed specifically for your business needs. Our custom GPTs can help automate tasks, enhance customer service, and drive innovation.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="text-primary text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Tailored to Your Needs</h4>
                    <p className="text-sm text-muted-foreground">Custom GPTs built specifically for your business processes</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="text-primary text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Flexible Pricing</h4>
                    <p className="text-sm text-muted-foreground">Choose between monthly hosting plans or one-time buyout fee</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="text-primary text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Ongoing Support</h4>
                    <p className="text-sm text-muted-foreground">Regular updates and improvements to your custom GPTs</p>
                  </div>
                </div>
              </div>
              
              <Button asChild size="lg">
                <Link href="/custom">
                  Learn More
                </Link>
              </Button>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Pricing Options</h3>
              
              <div className="space-y-6">
                <div className="p-4 border border-border rounded-md bg-background">
                  <h4 className="font-semibold text-lg mb-2">Monthly Hosting</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    We host and maintain your custom GPT with regular updates and improvements
                  </p>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-2xl font-bold gold-text">$99</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/custom#monthly">
                      Get Started
                    </Link>
                  </Button>
                </div>
                
                <div className="p-4 border border-border rounded-md bg-background">
                  <h4 className="font-semibold text-lg mb-2">One-Time Buyout</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Full ownership of your custom GPT with complete transfer of all assets
                  </p>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-2xl font-bold gold-text">$999</span>
                    <span className="text-muted-foreground">one-time</span>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/custom#buyout">
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 hero-gradient">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Start using our GPTs today or contact us to discuss your custom GPT needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/marketplace">
                Explore GPT Marketplace
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

