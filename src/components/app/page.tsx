"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full hero-gradient py-16 md:py-24">
        <div className="container flex flex-col items-center text-center gap-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Making AI <span className="orange-gradient">Simple</span> and <span className="orange-gradient">Powerful</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl">
            Aivara Solutions helps businesses leverage AI technology with custom chatbots, 
            AI-powered websites, and specialized GPT solutions that drive results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              <Link href="/marketplace">
                Explore Our GPTs
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/custom">
                Create Custom AI Solutions
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="orange-text">AI Services</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="border-2 border-primary/10 hover:border-primary/30 transition-all">
              <CardContent className="pt-6">
                <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Custom GPT Chatbots</h3>
                <p className="text-muted-foreground">
                  Specialized AI assistants designed for your specific business needs, from customer service to sales support.
                </p>
              </CardContent>
            </Card>
            
            {/* Service 2 */}
            <Card className="border-2 border-primary/10 hover:border-primary/30 transition-all">
              <CardContent className="pt-6">
                <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">AI-Powered Websites</h3>
                <p className="text-muted-foreground">
                  Modern, responsive websites with integrated AI features that engage visitors and convert leads.
                </p>
              </CardContent>
            </Card>
            
            {/* Service 3 */}
            <Card className="border-2 border-primary/10 hover:border-primary/30 transition-all">
              <CardContent className="pt-6">
                <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">AI Strategy Consulting</h3>
                <p className="text-muted-foreground">
                  Expert guidance on implementing AI solutions that align with your business goals and drive ROI.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured GPTs Section */}
      <section className="w-full py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Featured <span className="orange-text">GPT Solutions</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Explore our most popular AI assistants designed to solve specific business challenges
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* GPT Card 1 */}
            <Card className="gpt-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7"/>
                      <path d="M15 7h6v6"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Marketing Genius AI</h3>
                    <p className="text-sm text-muted-foreground">Digital marketing assistant</p>
                  </div>
                </div>
                <p className="mb-4">Creates marketing strategies, content plans, and ad copy optimized for your target audience.</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="https://chatgpt.com/g/g-680b665c99a08191b6b40908ebf68fe0-marketing-genius-ai">
                    Try Marketing Genius
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* GPT Card 2 */}
            <Card className="gpt-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M9 18V5l12-2v13"/>
                      <circle cx="6" cy="18" r="3"/>
                      <circle cx="18" cy="16" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">MusicBiz Pro AI</h3>
                    <p className="text-sm text-muted-foreground">Music industry assistant</p>
                  </div>
                </div>
                <p className="mb-4">Helps musicians and producers with marketing, distribution, and business strategy in the music industry.</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="https://chatgpt.com/g/g-680b62acead481919fbc50db2dc8b3e9-musicbiz-pro-ai">
                    Try MusicBiz Pro
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* GPT Card 3 */}
            <Card className="gpt-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">FreightGenius AI</h3>
                    <p className="text-sm text-muted-foreground">Logistics assistant</p>
                  </div>
                </div>
                <p className="mb-4">Optimizes shipping routes, manages logistics documentation, and provides cost-saving recommendations.</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="https://chatgpt.com/g/g-67bff639b358819193665c8963bcc298-freightgenius-ai">
                    Try FreightGenius
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex justify-center mt-10">
            <Button asChild size="lg">
              <Link href="/marketplace">
                View All GPT Solutions
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How We Make <span className="orange-text">AI Easy</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Consultation</h3>
              <p className="text-muted-foreground">
                We discuss your business needs and identify the AI solutions that will deliver the most value.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Custom Development</h3>
              <p className="text-muted-foreground">
                Our team builds and trains AI solutions specifically tailored to your business requirements.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Integration & Support</h3>
              <p className="text-muted-foreground">
                We seamlessly integrate AI into your existing systems and provide ongoing support and optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Create an account today and start exploring our AI solutions or contact us for custom development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/auth">
                Create Account
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
