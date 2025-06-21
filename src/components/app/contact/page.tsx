"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would send the form data to a server
    setFormSubmitted(true)
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-12">
        <div className="container text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground">
            Get in touch with our team to discuss your GPT needs
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 border border-border bg-card">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-muted-foreground">
                (555) 123-4567
              </p>
              <p className="text-muted-foreground">
                Monday - Friday, 9am - 5pm CST
              </p>
            </Card>
            
            <Card className="p-6 border border-border bg-card">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-muted-foreground">
                info@aivarasolutions.com
              </p>
              <p className="text-muted-foreground">
                support@aivarasolutions.com
              </p>
            </Card>
            
            <Card className="p-6 border border-border bg-card">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Office</h3>
              <p className="text-muted-foreground">
                456 Innovation Drive, Suite 300
              </p>
              <p className="text-muted-foreground">
                Houston, TX 77002
              </p>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {formSubmitted ? (
                <Card className="p-6 border border-border bg-card">
                  <h3 className="text-xl font-bold mb-2 text-primary">Thank You!</h3>
                  <p className="text-muted-foreground mb-4">
                    Your message has been sent successfully. Our team will get back to you shortly.
                  </p>
                  <Button onClick={() => setFormSubmitted(false)}>
                    Send Another Message
                  </Button>
                </Card>
              ) : (
                <Card className="p-6 border border-border bg-card">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          className="w-full p-2 rounded-md border border-input bg-background"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full p-2 rounded-md border border-input bg-background"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        className="w-full p-2 rounded-md border border-input bg-background"
                        placeholder="How can we help you?"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="w-full p-2 rounded-md border border-input bg-background min-h-[150px]"
                        placeholder="Please provide details about your inquiry..."
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </Card>
              )}
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                <Card className="p-4 border border-border bg-card">
                  <h3 className="font-bold mb-2">How quickly can you develop a custom GPT?</h3>
                  <p className="text-sm text-muted-foreground">
                    Development time varies based on complexity, but most custom GPTs can be developed within 2-4 weeks from the initial consultation.
                  </p>
                </Card>
                
                <Card className="p-4 border border-border bg-card">
                  <h3 className="font-bold mb-2">Do you offer discounts for multiple GPTs?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, we offer package deals for businesses that need multiple custom GPTs. Contact us for a custom quote.
                  </p>
                </Card>
                
                <Card className="p-4 border border-border bg-card">
                  <h3 className="font-bold mb-2">Can I try your GPTs before purchasing?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, you can try our public GPTs in the marketplace. For custom GPTs, we can provide a demo or prototype before final development.
                  </p>
                </Card>
                
                <Card className="p-4 border border-border bg-card">
                  <h3 className="font-bold mb-2">What payment methods do you accept?</h3>
                  <p className="text-sm text-muted-foreground">
                    We accept PayPal, QuickBooks, Square, and major credit cards for all our services.
                  </p>
                </Card>
              </div>
              
              <div className="mt-6">
                <Button asChild variant="outline">
                  <Link href="/custom">
                    Learn More About Custom GPTs
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
