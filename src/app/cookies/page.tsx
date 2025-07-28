import Link from "next/link"

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
                PlaNovo
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold font-syne text-planovo-dark mb-8">Cookies Policy</h1>
          
          <div className="text-sm text-gray-500 mb-8">
            <p>Last updated: December 2024</p>
          </div>

          <div className="space-y-6 text-planovo-secondary">
            <section>
              <h2 className="text-2xl font-bold font-syne text-planovo-dark mb-4">1. What Are Cookies</h2>
              <p className="font-syne leading-relaxed">
                Cookies are small text files that are placed on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                understanding how you use our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-syne text-planovo-dark mb-4">2. How We Use Cookies</h2>
              <p className="font-syne leading-relaxed mb-4">
                We use cookies for several purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-syne">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Targeting Cookies:</strong> Used to deliver relevant content and advertisements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-syne text-planovo-dark mb-4">3. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-bold font-syne text-planovo-dark mb-3">Essential Cookies</h3>
              <p className="font-syne leading-relaxed mb-4">
                These cookies are necessary for the website to function and cannot be switched off. 
                They are usually only set in response to actions made by you which amount to a request 
                for services, such as setting your privacy preferences, logging in, or filling in forms.
              </p>

              <h3 className="text-xl font-bold font-syne text-planovo-dark mb-3">Analytics Cookies</h3>
              <p className="font-syne leading-relaxed mb-4">
                These cookies allow us to count visits and traffic sources so we can measure and improve 
                the performance of our site. They help us to know which pages are the most and least 
                popular and see how visitors move around the site.
              </p>

              <h3 className="text-xl font-bold font-syne text-planovo-dark mb-3">Functional Cookies</h3>
              <p className="font-syne leading-relaxed mb-4">
                These cookies enable the website to provide enhanced functionality and personalization. 
                They may be set by us or by third-party providers whose services we have added to our pages.
              </p>

              <h3 className="text-xl font-bold font-syne text-planovo-dark mb-3">Marketing Cookies</h3>
              <p className="font-syne leading-relaxed">
                These cookies may be set through our site by our advertising partners. They may be used 
                by those companies to build a profile of your interests and show you relevant adverts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-syne text-planovo-dark mb-4">4. Third-Party Cookies</h2>
              <p className="font-syne leading-relaxed mb-4">
                We may use third-party services that set their own cookies. These services include:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-syne">
                <li>Google Analytics for website analytics</li>
                <li>Stripe for payment processing</li>
                <li>Clerk for authentication</li>
                <li>Social media platforms for sharing features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-syne text-planovo-dark mb-4">5. Cookie Duration</h2>
              <p className="font-syne leading-relaxed mb-4">
                Cookies on our website may be:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-syne">
                <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Cookies that remain on your device for a set period or until deleted</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-syne text-planovo-dark mb-4">6. Managing Your Cookie Preferences</h2>
              <p className="font-syne leading-relaxed mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-syne">
                <li>Browser settings: Most browsers allow you to refuse or accept cookies</li>
                <li>Cookie consent: We provide options to accept or decline non-essential cookies</li>
                <li>Third-party opt-outs: You can opt out of specific third-party cookies</li>
                <li>Device settings: You can manage cookies through your device settings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-syne text-planovo-dark mb-4">7. Impact of Disabling Cookies</h2>
              <p className="font-syne leading-relaxed">
                Please note that if you choose to disable cookies, some features of our website may not 
                function properly. Essential cookies cannot be disabled as they are necessary for the 
                website to work correctly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-syne text-planovo-dark mb-4">8. Updates to This Policy</h2>
              <p className="font-syne leading-relaxed">
                We may update this cookies policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons. We will notify you of any 
                material changes by posting the updated policy on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-syne text-planovo-dark mb-4">9. Your Rights</h2>
              <p className="font-syne leading-relaxed mb-4">
                Under applicable data protection laws, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-syne">
                <li>Access information about cookies we use</li>
                <li>Withdraw consent for non-essential cookies</li>
                <li>Request deletion of cookie data</li>
                <li>Object to processing of cookie data</li>
                <li>Lodge a complaint with supervisory authorities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-syne text-planovo-dark mb-4">Contact Information</h2>
              <p className="font-syne leading-relaxed">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-planovo-light rounded-lg">
                <p className="font-syne">
                  <strong>Email:</strong> cookies@planovo.com<br />
                  <strong>Address:</strong> PlaNovo Data Protection Team<br />
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
} 