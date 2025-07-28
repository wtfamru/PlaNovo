import Link from "next/link"

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold font-syne text-planovo-dark mb-8">Privacy Policy</h1>
          
          <div className="text-sm text-gray-500 mb-8">
            <p>Last updated: December 2024</p>
          </div>

          <div className="space-y-6 text-planovo-secondary">
            <section>
              <h2 className="text-2xl font-bold font-syne text-planovo-dark mb-4">1. Information We Collect</h2>
              <p className="font-syne leading-relaxed mb-4">
                We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.
              </p>
              <h3 className="text-xl font-bold font-syne text-planovo-dark mb-3">Personal Information</h3>
              <ul className="list-disc pl-6 space-y-2 font-syne">
                <li>Name and email address</li>
                <li>Company information</li>
                <li>Usage data and preferences</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-syne text-planovo-dark mb-4">2. How We Use Your Information</h2>
              <p className="font-syne leading-relaxed mb-4">
                We use the information we collect to provide, maintain, and improve our services, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-syne">
                <li>Providing and personalizing our services</li>
                <li>Processing transactions and sending related information</li>
                <li>Sending technical notices, updates, and support messages</li>
                <li>Responding to your comments and questions</li>
                <li>Communicating with you about products, services, and events</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-syne text-planovo-dark mb-4">3. Information Sharing</h2>
              <p className="font-syne leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except as described in this policy. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-syne mt-4">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>In connection with a business transfer</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-syne text-planovo-dark mb-4">4. Data Security</h2>
              <p className="font-syne leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
                the internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-syne text-planovo-dark mb-4">5. Cookies and Tracking</h2>
              <p className="font-syne leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-syne text-planovo-dark mb-4">6. Your Rights</h2>
              <p className="font-syne leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-syne">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-syne text-planovo-dark mb-4">7. Data Retention</h2>
              <p className="font-syne leading-relaxed">
                We retain your personal information for as long as necessary to provide our services and fulfill 
                the purposes outlined in this policy, unless a longer retention period is required or permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-syne text-planovo-dark mb-4">8. International Transfers</h2>
              <p className="font-syne leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. 
                We ensure appropriate safeguards are in place to protect your information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-syne text-planovo-dark mb-4">9. Children&apos;s Privacy</h2>
              <p className="font-syne leading-relaxed">
                Our services are not intended for children under 13 years of age. We do not knowingly collect 
                personal information from children under 13. If you believe we have collected such information, 
                please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-syne text-planovo-dark mb-4">10. Changes to This Policy</h2>
              <p className="font-syne leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes by posting 
                the new policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-syne text-planovo-dark mb-4">Contact Information</h2>
              <p className="font-syne leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-planovo-light rounded-lg">
                <p className="font-syne">
                  <strong>Email:</strong> privacy@planovo.com<br />
                  <strong>Address:</strong> PlaNovo Privacy Team<br />
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