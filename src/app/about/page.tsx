"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-12">
        <div className="container text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About <span className="gold-text">Aivara</span> Solutions</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground">
            Revolutionizing business with AI-powered GPT solutions from Houston, TX
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                At <span className="gold-text">Aivara</span> Solutions, based in Houston, TX, we're dedicated to making advanced AI technology accessible and practical for businesses of all sizes. Our mission is to help organizations leverage the power of GPT technology to enhance productivity, streamline operations, and drive innovation.
              </p>
              <p className="text-muted-foreground">
                We believe that AI should be a tool that empowers human creativity and problem-solving, not replace it. That's why we focus on creating custom GPT solutions that work alongside your team, enhancing their capabilities and freeing them to focus on what matters most.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 rounded-full bg-muted/30 flex items-center justify-center">
                <span className="font-bold text-4xl">
                  <span className="gold-text">Aivara</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">What We Do</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Public GPTs</h3>
              <p className="text-muted-foreground">
                We offer a range of specialized GPTs available for public use, designed to address common business challenges and enhance productivity across various industries.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Custom GPT Development</h3>
              <p className="text-muted-foreground">
                We create tailored GPT solutions designed specifically for your business needs, processes, and industry challenges, with flexible pricing options.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">GPT Hosting</h3>
              <p className="text-muted-foreground">
                We provide secure hosting for your custom GPTs with regular updates, improvements, and technical support to ensure optimal performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-muted/30 mx-auto mb-4"></div>
              <h3 className="text-xl font-bold">John Smith</h3>
              <p className="text-muted-foreground">Founder & CEO</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-muted/30 mx-auto mb-4"></div>
              <h3 className="text-xl font-bold">Sarah Johnson</h3>
              <p className="text-muted-foreground">AI Development Lead</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-muted/30 mx-auto mb-4"></div>
              <h3 className="text-xl font-bold">Michael Chen</h3>
              <p className="text-muted-foreground">Client Solutions Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose <span className="gold-text">Aivara</span> Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                <span className="text-primary text-sm font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Expertise</h3>
                <p className="text-muted-foreground">
                  Our team consists of AI specialists with extensive experience in developing and implementing GPT solutions across various industries.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                <span className="text-primary text-sm font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Customization</h3>
                <p className="text-muted-foreground">
                  We don't believe in one-size-fits-all solutions. Each GPT we develop is tailored to your specific business needs and challenges.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                <span className="text-primary text-sm font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
                <p className="text-muted-foreground">
                  We provide continuous support, updates, and improvements to ensure your GPT solutions evolve with your business.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                <span className="text-primary text-sm font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Flexible Pricing</h3>
                <p className="text-muted-foreground">
                  Our pricing options are designed to accommodate businesses of all sizes, from startups to enterprise organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 hero-gradient">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Contact us today to discuss how our GPT solutions can help your business thrive
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Get in Touch
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
