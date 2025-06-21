"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { loadPaymentSDKs, processPayment } from "@/lib/payment"

export default function Checkout() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [amount, setAmount] = useState<number>(99)
  const [paymentMethod, setPaymentMethod] = useState<'paypal' | 'quickbooks' | 'square'>('paypal')
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle')
  const [paymentDetails, setPaymentDetails] = useState<any>(null)
  
  useEffect(() => {
    // Load payment SDKs when component mounts
    loadPaymentSDKs()
  }, [])
  
  const handlePlanSelect = (plan: string, price: number) => {
    setSelectedPlan(plan)
    setAmount(price)
  }
  
  const handlePaymentSuccess = (details: any) => {
    setPaymentStatus('success')
    setPaymentDetails(details)
    console.log('Payment successful:', details)
  }
  
  const handleInitiatePayment = () => {
    setPaymentStatus('processing')
    
    // Process payment with selected method
    setTimeout(() => {
      processPayment(
        paymentMethod,
        'payment-container',
        amount,
        handlePaymentSuccess
      )
    }, 500)
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-12">
        <div className="container text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Checkout</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground">
            Complete your purchase to get started with our GPT solutions
          </p>
        </div>
      </section>

      {/* Checkout Section */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan Selection */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Select Your Plan</h2>
              
              <div className="space-y-4 mb-8">
                <Card 
                  className={`p-4 border ${selectedPlan === 'monthly' ? 'border-primary' : 'border-border'} bg-card cursor-pointer hover:border-primary transition-colors`}
                  onClick={() => handlePlanSelect('monthly', 99)}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center h-6 mt-1">
                      <div className={`w-4 h-4 rounded-full ${selectedPlan === 'monthly' ? 'bg-primary' : 'border border-muted-foreground'}`}></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-bold">Monthly Hosting Plan</h3>
                        <span className="font-bold gold-text">$99</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        We host and maintain your custom GPT with regular updates and improvements
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card 
                  className={`p-4 border ${selectedPlan === 'buyout' ? 'border-primary' : 'border-border'} bg-card cursor-pointer hover:border-primary transition-colors`}
                  onClick={() => handlePlanSelect('buyout', 999)}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center h-6 mt-1">
                      <div className={`w-4 h-4 rounded-full ${selectedPlan === 'buyout' ? 'bg-primary' : 'border border-muted-foreground'}`}></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-bold">One-Time Buyout</h3>
                        <span className="font-bold gold-text">$999</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Full ownership of your custom GPT with complete transfer of all assets
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
              
              <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
              
              <div className="space-y-4 mb-8">
                <Card 
                  className={`p-4 border ${paymentMethod === 'paypal' ? 'border-primary' : 'border-border'} bg-card cursor-pointer hover:border-primary transition-colors`}
                  onClick={() => setPaymentMethod('paypal')}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center h-6 mt-1">
                      <div className={`w-4 h-4 rounded-full ${paymentMethod === 'paypal' ? 'bg-primary' : 'border border-muted-foreground'}`}></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold">PayPal</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Pay securely using your PayPal account
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card 
                  className={`p-4 border ${paymentMethod === 'quickbooks' ? 'border-primary' : 'border-border'} bg-card cursor-pointer hover:border-primary transition-colors`}
                  onClick={() => setPaymentMethod('quickbooks')}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center h-6 mt-1">
                      <div className={`w-4 h-4 rounded-full ${paymentMethod === 'quickbooks' ? 'bg-primary' : 'border border-muted-foreground'}`}></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold">QuickBooks</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Pay using your QuickBooks account
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card 
                  className={`p-4 border ${paymentMethod === 'square' ? 'border-primary' : 'border-border'} bg-card cursor-pointer hover:border-primary transition-colors`}
                  onClick={() => setPaymentMethod('square')}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center h-6 mt-1">
                      <div className={`w-4 h-4 rounded-full ${paymentMethod === 'square' ? 'bg-primary' : 'border border-muted-foreground'}`}></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold">Square</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Pay securely using Square
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            
            {/* Order Summary */}
            <div>
              <Card className="p-6 border border-border bg-card sticky top-4">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                
                {selectedPlan ? (
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Plan:</span>
                      <span className="font-medium">
                        {selectedPlan === 'monthly' ? 'Monthly Hosting' : 'One-Time Buyout'}
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Price:</span>
                      <span className="font-medium">${amount}</span>
                    </div>
                    
                    <div className="border-t border-border pt-4">
                      <div className="flex justify-between font-bold">
                        <span>Total:</span>
                        <span className="gold-text">${amount}</span>
                      </div>
                    </div>
                    
                    {paymentStatus === 'idle' && (
                      <Button 
                        className="w-full" 
                        onClick={handleInitiatePayment}
                        disabled={!selectedPlan}
                      >
                        Proceed to Payment
                      </Button>
                    )}
                    
                    {paymentStatus === 'processing' && (
                      <div className="space-y-4">
                        <div className="text-center text-sm text-muted-foreground mb-2">
                          Processing your payment...
                        </div>
                        <div id="payment-container" className="min-h-[50px]"></div>
                      </div>
                    )}
                    
                    {paymentStatus === 'success' && (
                      <div className="space-y-4">
                        <div className="bg-green-100 text-green-800 p-3 rounded-md text-sm">
                          Payment successful! Thank you for your purchase.
                        </div>
                        <Button className="w-full" onClick={() => window.location.href = '/'}>
                          Return to Homepage
                        </Button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center text-muted-foreground">
                    Please select a plan to continue
                  </div>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
