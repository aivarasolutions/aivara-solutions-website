import { Card } from "@/components/ui/card"

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-12">
        <div className="container text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground">
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <Card className="p-8 shadow-lg border-t-4 border-secondary">
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <div className="mb-8 pb-6 border-b border-border/40">
                <p className="text-muted-foreground">
                  Last Updated: April 25, 2025
                </p>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-secondary mb-4">1. Agreement to Terms</h2>
                <p className="mb-4">
                  By accessing or using IT Investment Technology's website, services, or products, you agree to be bound by these Terms of Service. 
                  If you disagree with any part of the terms, you may not access our services.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-secondary mb-4">2. Use of Services</h2>
                <p className="mb-4">
                  Our services are provided "as is" and "as available" for your use. You may not:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Use our services for any illegal purposes</li>
                  <li>Infringe upon or violate the intellectual property rights of others</li>
                  <li>Attempt to gain unauthorized access to any portion of our services</li>
                  <li>Use our services in any manner that could disable, overburden, damage, or impair our systems</li>
                  <li>Engage in any data mining, scraping, or extraction methods</li>
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-secondary mb-4">3. GPT Services</h2>
                <p className="mb-4">
                  Our GPT services are designed to provide AI-powered assistance and solutions. When using our GPT services:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>You retain ownership of any content you provide to our GPTs</li>
                  <li>We retain ownership of our GPT models, technology, and any improvements</li>
                  <li>You may not reverse engineer or attempt to extract our proprietary models</li>
                  <li>We do not guarantee specific outcomes or results from using our GPT services</li>
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-secondary mb-4">4. Payment Terms</h2>
                <p className="mb-4">
                  For paid services:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Payments are due at the time of purchase or according to the subscription terms</li>
                  <li>All fees are exclusive of taxes unless stated otherwise</li>
                  <li>Refunds are provided in accordance with our refund policy</li>
                  <li>We reserve the right to change our pricing with notice to our users</li>
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-secondary mb-4">5. Intellectual Property</h2>
                <p className="mb-4">
                  The service and its original content, features, and functionality are owned by IT Investment Technology and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-secondary mb-4">6. Limitation of Liability</h2>
                <p className="mb-4">
                  In no event shall IT Investment Technology, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Your access to or use of or inability to access or use the service</li>
                  <li>Any conduct or content of any third party on the service</li>
                  <li>Any content obtained from the service</li>
                  <li>Unauthorized access, use or alteration of your transmissions or content</li>
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-secondary mb-4">7. Termination</h2>
                <p className="mb-4">
                  We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-secondary mb-4">8. Changes to Terms</h2>
                <p className="mb-4">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-secondary mb-4">9. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <div className="bg-muted/30 p-4 rounded-md">
                  <p>
                    <span className="font-semibold">Email:</span> legal@itinvestmenttech.com<br />
                    <span className="font-semibold">Phone:</span> (555) 123-4567
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-6 border-t border-border/40 text-center">
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} IT Investment Technology. All rights reserved.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
