"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Custom() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  
  const handleProceedToCheckout = () => {
    if (!selectedPlan) {
      alert("Please select a plan first");
      return;
    }
    
    // In a real implementation, we would store the selected plan in a state management solution
    // For now, we'll use URL parameters
    window.location.href = `/checkout?plan=${selectedPlan}`;
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-12">
        <div className="container text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Custom GPTs for Business</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground">
            We create tailored GPT solutions designed specifically for your business needs
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 border border-border bg-card">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Tailored Solutions</h3>
              <p className="text-muted-foreground">
                Custom GPTs built specifically for your business processes, industry, and unique challenges
              </p>
            </Card>
            
            <Card className="p-6 border border-border bg-card">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Pricing</h3>
              <p className="text-muted-foreground">
                Choose between monthly hosting plans or one-time buyout fee based on your business needs
              </p>
            </Card>
            
            <Card className="p-6 border border-border bg-card">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
              <p className="text-muted-foreground">
                Regular updates, improvements, and technical support for your custom GPT solutions
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/2">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Consultation</h3>
                <p className="text-muted-foreground mb-4">
                  We start with a detailed consultation to understand your business needs, processes, and goals for your custom GPT solution.
                </p>
              </div>
              <div className="w-full md:w-1/2 bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold mb-2">During the consultation, we'll discuss:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Your business processes and pain points</li>
                  <li>• Specific tasks you want to automate</li>
                  <li>• Integration requirements with existing systems</li>
                  <li>• Success metrics and expected outcomes</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/2 order-2 md:order-1 bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold mb-2">Our development process includes:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Custom GPT architecture design</li>
                  <li>• Training on your business-specific data</li>
                  <li>• Integration with necessary APIs</li>
                  <li>• Rigorous testing and refinement</li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Development</h3>
                <p className="text-muted-foreground mb-4">
                  Our team of AI specialists develops your custom GPT solution, tailoring it to your specific requirements and business processes.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/2">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Deployment & Support</h3>
                <p className="text-muted-foreground mb-4">
                  We deploy your custom GPT solution and provide ongoing support, updates, and improvements based on your chosen plan.
                </p>
              </div>
              <div className="w-full md:w-1/2 bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold mb-2">Our support includes:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Regular performance monitoring</li>
                  <li>• Continuous improvements and updates</li>
                  <li>• Technical support and troubleshooting</li>
                  <li>• Training for your team members</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="pricing" className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Pricing Plans</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card id="monthly" className={`p-6 border ${selectedPlan === 'monthly' ? 'border-primary' : 'border-border'} bg-card relative overflow-hidden`}>
              {selectedPlan === 'monthly' && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">
                  Selected
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">Monthly Hosting Plan</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold gold-text">$99</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-muted-foreground mb-6">
                We host and maintain your custom GPT with regular updates and improvements
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <div className="text-primary">✓</div>
                  <p className="text-sm">Custom GPT development</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-primary">✓</div>
                  <p className="text-sm">Hosting on our secure servers</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-primary">✓</div>
                  <p className="text-sm">Monthly updates and improvements</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-primary">✓</div>
                  <p className="text-sm">Technical support</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-primary">✓</div>
                  <p className="text-sm">Cancel anytime</p>
                </div>
              </div>
              
              <Button 
                className="w-full" 
                onClick={() => setSelectedPlan('monthly')}
                variant={selectedPlan === 'monthly' ? 'default' : 'outline'}
              >
                Select Plan
              </Button>
            </Card>
            
            <Card id="buyout" className={`p-6 border ${selectedPlan === 'buyout' ? 'border-primary' : 'border-border'} bg-card relative overflow-hidden`}>
              {selectedPlan === 'buyout' && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">
                  Selected
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">One-Time Buyout</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold gold-text">$999</span>
                <span className="text-muted-foreground">one-time</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Full ownership of your custom GPT with complete transfer of all assets
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <div className="text-primary">✓</div>
                  <p className="text-sm">Custom GPT development</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-primary">✓</div>
                  <p className="text-sm">Full ownership of the GPT</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-primary">✓</div>
                  <p className="text-sm">Source code and all assets</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-primary">✓</div>
                  <p className="text-sm">30 days of technical support</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-primary">✓</div>
                  <p className="text-sm">Optional maintenance contract</p>
                </div>
              </div>
              
              <Button 
                className="w-full" 
                onClick={() => setSelectedPlan('buyout')}
                variant={selectedPlan === 'buyout' ? 'default' : 'outline'}
              >
                Select Plan
              </Button>
            </Card>
          </div>
          
          <div className="flex justify-center mt-8">
            <Button 
              size="lg" 
              onClick={handleProceedToCheckout}
              disabled={!selectedPlan}
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Request Your Custom GPT</h2>
          
          <Card className="p-6 border border-border bg-card">
            <form className="space-y-6">
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
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  Company Name
                </label>
                <input
                  id="company"
                  type="text"
                  className="w-full p-2 rounded-md border border-input bg-background"
                  placeholder="Acme Inc."
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Preferred Plan
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="plan"
                      value="monthly"
                      checked={selectedPlan === 'monthly'}
                      onChange={() => setSelectedPlan('monthly')}
                    />
                    <span>Monthly Hosting</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="plan"
                      value="buyout"
                      checked={selectedPlan === 'buyout'}
                      onChange={() => setSelectedPlan('buyout')}
                    />
                    <span>One-Time Buyout</span>
                  </label>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="requirements" className="text-sm font-medium">
                  GPT Requirements
                </label>
                <textarea
                  id="requirements"
                  className="w-full p-2 rounded-md border border-input bg-background min-h-[150px]"
                  placeholder="Please describe what you need your custom GPT to do..."
                />
              </div>
              
              <Button className="w-full" onClick={handleProceedToCheckout}>
                Submit Request
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <Card className="p-6 border border-border bg-card">
              <h3 className="text-xl font-bold mb-2">How long does it take to develop a custom GPT?</h3>
              <p className="text-muted-foreground">
                Development time varies based on complexity, but most custom GPTs can be developed within 2-4 weeks from the initial consultation.
              </p>
            </Card>
            
            <Card className="p-6 border border-border bg-card">
              <h3 className="text-xl font-bold mb-2">Can I upgrade from monthly to buyout later?</h3>
              <p className="text-muted-foreground">
                Yes, you can upgrade from the monthly hosting plan to the one-time buyout at any time. We'll apply a portion of your paid monthly fees toward the buyout price.
              </p>
            </Card>
            
            <Card className="p-6 border border-border bg-card">
              <h3 className="text-xl font-bold mb-2">What kind of support is included?</h3>
              <p className="text-muted-foreground">
                Monthly hosting plans include ongoing technical support, regular updates, and improvements. One-time buyouts include 30 days of technical support with optional maintenance contracts available.
              </p>
            </Card>
            
            <Card className="p-6 border border-border bg-card">
              <h3 className="text-xl font-bold mb-2">Can my custom GPT integrate with other systems?</h3>
              <p className="text-muted-foreground">
                Yes, we can develop custom GPTs that integrate with your existing systems and APIs, depending on technical feasibility and access permissions.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
