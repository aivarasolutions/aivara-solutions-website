import { Card } from "@/components/ui/card"

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-12">
        <div className="container text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground">
            How we collect, use, and protect your information
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <Card className="p-8 shadow-lg border-t-4 border-primary">
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <div className="mb-8 pb-6 border-b border-border/40">
                <p className="text-muted-foreground">
                  Last Updated: April 25, 2025
                </p>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
                <p className="mb-4">
                  At IT Investment Technology, we respect your privacy and are committed to protecting your personal data. 
                  This privacy policy will inform you about how we look after your personal data when you visit our website 
                  and tell you about your privacy rights and how the law protects you.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary mb-4">2. Information We Collect</h2>
                <p className="mb-4">
                  We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><span className="font-semibold">Identity Data</span> includes first name, last name, username or similar identifier.</li>
                  <li><span className="font-semibold">Contact Data</span> includes email address and telephone numbers.</li>
                  <li><span className="font-semibold">Technical Data</span> includes internet protocol (IP) address, your login data, browser type and version, 
                  time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology 
                  on the devices you use to access this website.</li>
                  <li><span className="font-semibold">Usage Data</span> includes information about how you use our website, products and services.</li>
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">
                  We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>To register you as a new customer.</li>
                  <li>To process and deliver your order.</li>
                  <li>To manage our relationship with you.</li>
                  <li>To improve our website, products/services, marketing or customer relationships.</li>
                  <li>To recommend products or services which may be of interest to you.</li>
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary mb-4">4. Data Security</h2>
                <p className="mb-4">
                  We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
                  used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data 
                  to those employees, agents, contractors and other third parties who have a business need to know.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary mb-4">5. Data Retention</h2>
                <p className="mb-4">
                  We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, 
                  including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary mb-4">6. Your Legal Rights</h2>
                <p className="mb-4">
                  Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Request access to your personal data.</li>
                  <li>Request correction of your personal data.</li>
                  <li>Request erasure of your personal data.</li>
                  <li>Object to processing of your personal data.</li>
                  <li>Request restriction of processing your personal data.</li>
                  <li>Request transfer of your personal data.</li>
                  <li>Right to withdraw consent.</li>
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary mb-4">7. Changes to This Privacy Policy</h2>
                <p className="mb-4">
                  We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary mb-4">8. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about this privacy policy or our privacy practices, please contact us at:
                </p>
                <div className="bg-muted/30 p-4 rounded-md">
                  <p>
                    <span className="font-semibold">Email:</span> info@itinvestmenttech.com<br />
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
