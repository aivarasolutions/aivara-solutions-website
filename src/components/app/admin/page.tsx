"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// GPT data
const gptData = [
  {
    id: "g-680b665c99a08191b6b40908ebf68fe0-marketing-genius-ai",
    name: "Marketing Genius AI",
    initials: "MG",
    description: "Generate powerful marketing strategies, content ideas, and campaign plans for your business",
    url: "https://chatgpt.com/g/g-680b665c99a08191b6b40908ebf68fe0-marketing-genius-ai"
  },
  {
    id: "g-680b62acead481919fbc50db2dc8b3e9-musicbiz-pro-ai",
    name: "MusicBiz Pro AI",
    initials: "MB",
    description: "Your ultimate assistant for music business management, marketing, and industry insights",
    url: "https://chatgpt.com/g/g-680b62acead481919fbc50db2dc8b3e9-musicbiz-pro-ai"
  },
  {
    id: "g-67bff639b358819193665c8963bcc298-freightgenius-ai",
    name: "FreightGenius AI",
    initials: "FG",
    description: "Optimize logistics operations, shipping routes, and supply chain management with AI",
    url: "https://chatgpt.com/g/g-67bff639b358819193665c8963bcc298-freightgenius-ai"
  },
  {
    id: "g-67bfbffe1450819188152eda86a7fbfc-richaf-travel-ai",
    name: "RichAF Travel AI",
    initials: "RT",
    description: "Your luxury travel planning assistant for high-end destinations and exclusive experiences",
    url: "https://chatgpt.com/g/g-67bfbffe1450819188152eda86a7fbfc-richaf-travel-ai"
  },
  {
    id: "g-67bb293512a881919c40348a03bfea8c-quantum-trades",
    name: "Quantum Trades",
    initials: "QT",
    description: "Advanced trading strategies and market analysis for investment professionals",
    url: "https://chatgpt.com/g/g-67bb293512a881919c40348a03bfea8c-quantum-trades"
  },
  {
    id: "g-67b9ee91a0a0819191f89ecf8f0d2d5f-credit-capital-ai",
    name: "Credit Capital AI",
    initials: "CC",
    description: "Financial planning, credit optimization, and capital management assistant",
    url: "https://chatgpt.com/g/g-67b9ee91a0a0819191f89ecf8f0d2d5f-credit-capital-ai"
  },
  {
    id: "g-679f1f5a47c48191968aeb02a1fd4e91-property-manager-assistant",
    name: "Property Manager Assistant",
    initials: "PM",
    description: "Streamline property management tasks, tenant communications, and maintenance scheduling",
    url: "https://chatgpt.com/g/g-679f1f5a47c48191968aeb02a1fd4e91-property-manager-assistant"
  }
]

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [activeTab, setActiveTab] = useState("gpts")
  const [editingGpt, setEditingGpt] = useState<any>(null)
  const [newGpt, setNewGpt] = useState({
    name: "",
    initials: "",
    description: "",
    url: ""
  })
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would validate credentials against a database
    if (username === "admin" && password === "password") {
      setIsAuthenticated(true)
    } else {
      alert("Invalid credentials. For demo purposes, use username: admin, password: password")
    }
  }
  
  const handleLogout = () => {
    setIsAuthenticated(false)
    setUsername("")
    setPassword("")
  }
  
  const handleEditGpt = (gpt: any) => {
    setEditingGpt({ ...gpt })
  }
  
  const handleUpdateGpt = () => {
    // In a real implementation, this would update the GPT in the database
    alert(`GPT "${editingGpt.name}" updated successfully!`)
    setEditingGpt(null)
  }
  
  const handleAddGpt = () => {
    // In a real implementation, this would add the new GPT to the database
    if (newGpt.name && newGpt.description && newGpt.url) {
      alert(`New GPT "${newGpt.name}" added successfully!`)
      setNewGpt({
        name: "",
        initials: "",
        description: "",
        url: ""
      })
    } else {
      alert("Please fill in all required fields")
    }
  }
  
  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="w-full max-w-md">
          <div className="flex flex-col items-center mb-8">
            <Image 
              src="/images/logo.png" 
              alt="IT Investment Technology" 
              width={80} 
              height={80} 
              className="object-contain mb-4"
            />
            <h2 className="text-2xl font-bold">Admin Login</h2>
            <p className="text-muted-foreground mt-2">Sign in to access the admin panel</p>
          </div>
          
          <Card className="p-6 border border-border bg-card">
            <form className="space-y-6" onSubmit={handleLogin}>
              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-medium">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-2 rounded-md border border-input bg-background"
                  placeholder="admin"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 rounded-md border border-input bg-background"
                  placeholder="password"
                  required
                />
              </div>
              
              <Button type="submit" className="w-full">
                Sign In
              </Button>
              
              <p className="text-xs text-muted-foreground text-center mt-4">
                For demo purposes, use:<br />
                Username: admin<br />
                Password: password
              </p>
            </form>
          </Card>
        </div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border py-4">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image 
              src="/images/logo.png" 
              alt="IT Investment Technology" 
              width={40} 
              height={40} 
              className="object-contain"
            />
            <span className="font-bold text-xl">Admin Panel</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Logged in as Admin</span>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </header>
      
      <div className="container py-8">
        <div className="flex border-b border-border mb-6">
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'gpts' ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground'}`}
            onClick={() => setActiveTab('gpts')}
          >
            GPT Management
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'content' ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground'}`}
            onClick={() => setActiveTab('content')}
          >
            Content Management
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'settings' ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground'}`}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button>
        </div>
        
        {activeTab === 'gpts' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">GPT Management</h2>
              <Button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
                Add New GPT
              </Button>
            </div>
            
            {editingGpt ? (
              <Card className="p-6 border border-border bg-card mb-8">
                <h3 className="text-xl font-bold mb-4">Edit GPT</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        GPT Name
                      </label>
                      <input
                        type="text"
                        value={editingGpt.name}
                        onChange={(e) => setEditingGpt({ ...editingGpt, name: e.target.value })}
                        className="w-full p-2 rounded-md border border-input bg-background"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Initials
                      </label>
                      <input
                        type="text"
                        value={editingGpt.initials}
                        onChange={(e) => setEditingGpt({ ...editingGpt, initials: e.target.value })}
                        className="w-full p-2 rounded-md border border-input bg-background"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Description
                    </label>
                    <textarea
                      value={editingGpt.description}
                      onChange={(e) => setEditingGpt({ ...editingGpt, description: e.target.value })}
                      className="w-full p-2 rounded-md border border-input bg-background min-h-[100px]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      URL
                    </label>
                    <input
                      type="text"
                      value={editingGpt.url}
                      onChange={(e) => setEditingGpt({ ...editingGpt, url: e.target.value })}
                      className="w-full p-2 rounded-md border border-input bg-background"
                    />
                  </div>
                  
                  <div className="flex gap-2">
                    <Button onClick={handleUpdateGpt}>
                      Update GPT
                    </Button>
                    <Button variant="outline" onClick={() => setEditingGpt(null)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {gptData.map((gpt) => (
                  <Card key={gpt.id} className="overflow-hidden border border-border bg-card">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-primary text-lg font-bold">{gpt.initials}</span>
                        </div>
                        <h3 className="font-bold text-lg">{gpt.name}</h3>
                      </div>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {gpt.description}
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" className="flex-1" onClick={() => handleEditGpt(gpt)}>
                          Edit
                        </Button>
                        <Button variant="outline" className="flex-1 text-destructive hover:text-destructive-foreground hover:bg-destructive">
                          Delete
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
            
            <Card className="p-6 border border-border bg-card">
              <h3 className="text-xl font-bold mb-4">Add New GPT</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      GPT Name
                    </label>
                    <input
                      type="text"
                      value={newGpt.name}
                      onChange={(e) => setNewGpt({ ...newGpt, name: e.target.value })}
                      className="w-full p-2 rounded-md border border-input bg-background"
                      placeholder="e.g., Marketing Genius AI"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Initials
                    </label>
                    <input
                      type="text"
                      value={newGpt.initials}
                      onChange={(e) => setNewGpt({ ...newGpt, initials: e.target.value })}
                      className="w-full p-2 rounded-md border border-input bg-background"
                      placeholder="e.g., MG"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Description
                  </label>
                  <textarea
                    value={newGpt.description}
                    onChange={(e) => setNewGpt({ ...newGpt, description: e.target.value })}
                    className="w-full p-2 rounded-md border border-input bg-background min-h-[100px]"
                    placeholder="Describe what this GPT does..."
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    URL
                  </label>
                  <input
                    type="text"
                    value={newGpt.url}
                    onChange={(e) => setNewGpt({ ...newGpt, url: e.target.value })}
                    className="w-full p-2 rounded-md border border-input bg-background"
                    placeholder="https://chatgpt.com/g/..."
                  />
                </div>
                
                <Button onClick={handleAddGpt}>
                  Add GPT
                </Button>
              </div>
            </Card>
          </div>
        )}
        
        {activeTab === 'content' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Content Management</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 border border-border bg-card">
                <h3 className="text-xl font-bold mb-4">Homepage Content</h3>
                <Button asChild className="w-full">
                  <Link href="/">
                    Edit Homepage
                  </Link>
                </Button>
              </Card>
              
              <Card className="p-6 border border-border bg-card">
                <h3 className="text-xl font-bold mb-4">About Page</h3>
                <Button asChild className="w-full">
                  <Link href="/about">
                    Edit About Page
                  </Link>
                </Button>
              </Card>
              
              <Card className="p-6 border border-border bg-card">
                <h3 className="text-xl font-bold mb-4">Custom GPTs Page</h3>
                <Button asChild className="w-full">
                  <Link href="/custom">
                    Edit Custom GPTs Page
                  </Link>
                </Button>
              </Card>
              
              <Card className="p-6 border border-border bg-card">
                <h3 className="text-xl font-bold mb-4">Contact Page</h3>
                <Button asChild className="w-full">
                  <Link href="/contact">
                    Edit Contact Page
                  </Link>
                </Button>
              </Card>
            </div>
          </div>
        )}
        
        {activeTab === 'settings' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Settings</h2>
            
            <Card className="p-6 border border-border bg-card mb-6">
              <h3 className="text-xl font-bold mb-4">Payment Settings</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    PayPal Client ID
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 rounded-md border border-input bg-background"
                    placeholder="Enter PayPal Client ID"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    QuickBooks API Key
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 rounded-md border border-input bg-background"
                    placeholder="Enter QuickBooks API Key"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Square Application ID
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 rounded-md border border-input bg-background"
                    placeholder="Enter Square Application ID"
                  />
                </div>
                
                <Button>
                  Save Payment Settings
                </Button>
              </div>
            </Card>
            
            <Card className="p-6 border border-border bg-card">
              <h3 className="text-xl font-bold mb-4">Admin Account</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Change Username
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 rounded-md border border-input bg-background"
                    placeholder="New username"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Change Password
                  </label>
                  <input
                    type="password"
                    className="w-full p-2 rounded-md border border-input bg-background"
                    placeholder="New password"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="w-full p-2 rounded-md border border-input bg-background"
                    placeholder="Confirm new password"
                  />
                </div>
                
                <Button>
                  Update Account
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
