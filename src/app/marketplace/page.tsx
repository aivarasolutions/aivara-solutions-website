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
    category: "business"
  },
  {
    id: "g-680b62acead481919fbc50db2dc8b3e9-musicbiz-pro-ai",
    name: "MusicBiz Pro AI",
    initials: "MB",
    description: "Your ultimate assistant for music business management, marketing, and industry insights",
    url: "https://chatgpt.com/g/g-680b62acead481919fbc50db2dc8b3e9-musicbiz-pro-ai",
    category: "business"
  },
  {
    id: "g-67bff639b358819193665c8963bcc298-freightgenius-ai",
    name: "FreightGenius AI",
    initials: "FG",
    description: "Optimize logistics operations, shipping routes, and supply chain management with AI",
    url: "https://chatgpt.com/g/g-67bff639b358819193665c8963bcc298-freightgenius-ai",
    category: "business"
  },
  {
    id: "g-67bfbffe1450819188152eda86a7fbfc-richaf-travel-ai",
    name: "RichAF Travel AI",
    initials: "RT",
    description: "Your luxury travel planning assistant for high-end destinations and exclusive experiences",
    url: "https://chatgpt.com/g/g-67bfbffe1450819188152eda86a7fbfc-richaf-travel-ai",
    category: "travel"
  },
  {
    id: "g-67bb293512a881919c40348a03bfea8c-quantum-trades",
    name: "Quantum Trades",
    initials: "QT",
    description: "Advanced trading strategies and market analysis for investment professionals",
    url: "https://chatgpt.com/g/g-67bb293512a881919c40348a03bfea8c-quantum-trades",
    category: "finance"
  },
  {
    id: "g-67b9ee91a0a0819191f89ecf8f0d2d5f-credit-capital-ai",
    name: "Credit Capital AI",
    initials: "CC",
    description: "Financial planning, credit optimization, and capital management assistant",
    url: "https://chatgpt.com/g/g-67b9ee91a0a0819191f89ecf8f0d2d5f-credit-capital-ai",
    category: "finance"
  },
  {
    id: "g-679f1f5a47c48191968aeb02a1fd4e91-property-manager-assistant",
    name: "Property Manager Assistant",
    initials: "PM",
    description: "Streamline property management tasks, tenant communications, and maintenance scheduling",
    url: "https://chatgpt.com/g/g-679f1f5a47c48191968aeb02a1fd4e91-property-manager-assistant",
    category: "productivity"
  }
]

// Categories for filtering
const categories = [
  { id: "all", name: "All GPTs" },
  { id: "business", name: "Business" },
  { id: "finance", name: "Finance" },
  { id: "travel", name: "Travel" },
  { id: "productivity", name: "Productivity" }
]

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredGpts, setFilteredGpts] = useState(gptData)
  const [activeGpt, setActiveGpt] = useState<any>(null)
  
  // Filter GPTs by category and search query
  useEffect(() => {
    let filtered = gptData;
    
    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(gpt => gpt.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(gpt => 
        gpt.name.toLowerCase().includes(query) || 
        gpt.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredGpts(filtered);
  }, [selectedCategory, searchQuery]);
  
  const handleGptClick = (gpt: any) => {
    setActiveGpt(gpt);
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-12">
        <div className="container text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">GPT Marketplace</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground">
            Explore our collection of specialized GPTs designed to enhance your business operations and personal productivity
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b border-border/40">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            <div className="w-full md:w-auto flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search GPTs..."
                  className="w-full p-2 pl-10 rounded-md border border-input bg-background"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? "bg-primary" : ""}
                  size="sm"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
          
          {searchQuery && (
            <div className="mb-4 text-sm text-muted-foreground">
              Found {filteredGpts.length} GPTs matching "{searchQuery}"
              {selectedCategory !== "all" && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
            </div>
          )}
        </div>
      </section>

      {/* GPT Grid and Details */}
      <section className="py-12 bg-background flex-grow">
        <div className="container">
          {activeGpt ? (
            <div className="mb-8">
              <Button 
                variant="outline" 
                onClick={() => setActiveGpt(null)}
                className="mb-6"
              >
                ← Back to all GPTs
              </Button>
              
              <Card className="p-6 border border-border bg-card">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <span className="text-primary text-2xl font-bold">{activeGpt.initials}</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{activeGpt.name}</h2>
                    <p className="text-muted-foreground mb-6">
                      {activeGpt.description}
                    </p>
                    
                    <Button asChild className="w-full mb-4">
                      <Link href={activeGpt.url} target="_blank">
                        Use This GPT
                      </Link>
                    </Button>
                    
                    <div className="text-sm text-muted-foreground">
                      <p>Category: {categories.find(c => c.id === activeGpt.category)?.name}</p>
                      <p className="mt-1">ID: {activeGpt.id}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-border pt-6 md:pt-0 md:pl-6">
                    <h3 className="text-xl font-bold mb-4">What This GPT Can Do</h3>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-muted/30 rounded-md">
                        <h4 className="font-bold mb-2">Key Features</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="text-primary mt-1">•</div>
                            <p>Specialized AI assistance tailored for {activeGpt.category === 'business' ? 'business operations' : activeGpt.category === 'finance' ? 'financial management' : activeGpt.category === 'travel' ? 'travel planning' : 'productivity enhancement'}</p>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="text-primary mt-1">•</div>
                            <p>Advanced natural language processing for intuitive interactions</p>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="text-primary mt-1">•</div>
                            <p>Contextual understanding of your specific needs and requirements</p>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="text-primary mt-1">•</div>
                            <p>Continuous learning and improvement based on your interactions</p>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="p-4 bg-muted/30 rounded-md">
                        <h4 className="font-bold mb-2">Example Use Cases</h4>
                        <ul className="space-y-2">
                          {activeGpt.category === 'business' && (
                            <>
                              <li className="flex items-start gap-2">
                                <div className="text-primary mt-1">•</div>
                                <p>Generate comprehensive marketing strategies for new product launches</p>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="text-primary mt-1">•</div>
                                <p>Create content calendars and social media campaigns</p>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="text-primary mt-1">•</div>
                                <p>Analyze market trends and competitor strategies</p>
                              </li>
                            </>
                          )}
                          
                          {activeGpt.category === 'finance' && (
                            <>
                              <li className="flex items-start gap-2">
                                <div className="text-primary mt-1">•</div>
                                <p>Analyze investment opportunities and portfolio performance</p>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="text-primary mt-1">•</div>
                                <p>Develop financial planning strategies and budgeting</p>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="text-primary mt-1">•</div>
                                <p>Optimize credit utilization and debt management</p>
                              </li>
                            </>
                          )}
                          
                          {activeGpt.category === 'travel' && (
                            <>
                              <li className="flex items-start gap-2">
                                <div className="text-primary mt-1">•</div>
                                <p>Create personalized luxury travel itineraries</p>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="text-primary mt-1">•</div>
                                <p>Find exclusive accommodations and experiences</p>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="text-primary mt-1">•</div>
                                <p>Optimize travel budgets and logistics</p>
                              </li>
                            </>
                          )}
                          
                          {activeGpt.category === 'productivity' && (
                            <>
                              <li className="flex items-start gap-2">
                                <div className="text-primary mt-1">•</div>
                                <p>Streamline property management workflows and tenant communications</p>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="text-primary mt-1">•</div>
                                <p>Automate maintenance scheduling and tracking</p>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="text-primary mt-1">•</div>
                                <p>Generate professional tenant communications and reports</p>
                              </li>
                            </>
                          )}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button asChild>
                        <Link href={activeGpt.url} target="_blank">
                          Try It Now
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGpts.length > 0 ? (
                filteredGpts.map((gpt) => (
                  <Card 
                    key={gpt.id} 
                    className="gpt-card overflow-hidden border border-border bg-card cursor-pointer hover:border-primary transition-colors"
                    onClick={() => handleGptClick(gpt)}
                  >
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
                          {categories.find(c => c.id === gpt.category)?.name}
                        </span>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={gpt.url} target="_blank" onClick={(e) => e.stopPropagation()}>
                            Use Now
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                <div className="col-span-3 text-center py-12">
                  <h3 className="text-xl font-bold mb-2">No GPTs Found</h3>
                  <p className="text-muted-foreground mb-4">
                    No GPTs match your current search criteria. Try adjusting your filters or search query.
                  </p>
                  <Button onClick={() => {setSearchQuery(""); setSelectedCategory("all");}}>
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-muted/30">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4">Need a Custom GPT Solution?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            We can create tailored GPT solutions designed specifically for your business needs
          </p>
          <Button asChild size="lg">
            <Link href="/custom">
              Learn About Custom GPTs
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
