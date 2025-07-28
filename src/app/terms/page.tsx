import Link from "next/link"

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold font-syne text-planovo-dark mb-8">Terms and Conditions</h1>
          
          <div className="text-sm text-gray-500 mb-8">
            <p>Last updated: December 2024</p>
          </div>

          <div className="space-y-6 text-planovo-secondary">
            <section>
              <h2 className="text-2xl font-bold font-syne text-planovo-dark mb-4">1. Acceptance of Terms</h2>
              <p className="font-syne leading-relaxed">
                By accessing and using PlaNovo's services, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-syne text-planovo-dark mb-4">2. Use License</h2>
              <p className="font-syne leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on PlaNovo's website for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-syne">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                <li>attempt to decompile or reverse engineer any software contained on PlaNovo's website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
                <li>transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-syne text-planovo-dark mb-4">3. Disclaimer</h2>
              <p className="font-syne leading-relaxed">
                The materials on PlaNovo's website are provided on an 'as is' basis. PlaNovo makes no warranties, expressed or implied, 
                and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of 
                merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-syne text-planovo-dark mb-4">4. Limitations</h2>
              <p className="font-syne leading-relaxed">
                In no event shall PlaNovo or its suppliers be liable for any damages (including, without limitation, damages for loss of data 
                or profit, or due to business interruption) arising out of the use or inability to use the materials on PlaNovo's website, 
                even if PlaNovo or a PlaNovo authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-syne text-planovo-dark mb-4">5. Accuracy of Materials</h2>
              <p className="font-syne leading-relaxed">
                The materials appearing on PlaNovo's website could include technical, typographical, or photographic errors. 
                PlaNovo does not warrant that any of the materials on its website are accurate, complete or current. 
                PlaNovo may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-syne text-planovo-dark mb-4">6. Links</h2>
              <p className="font-syne leading-relaxed">
                PlaNovo has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. 
                The inclusion of any link does not imply endorsement by PlaNovo of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-syne text-planovo-dark mb-4">7. Modifications</h2>
              <p className="font-syne leading-relaxed">
                PlaNovo may revise these terms of service for its website at any time without notice. By using this website you are agreeing 
                to be bound by the then current version of these Terms and Conditions of Use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-syne text-planovo-dark mb-4">8. Governing Law</h2>
              <p className="font-syne leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the 
                exclusive jurisdiction of the courts in that state or location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-syne text-planovo-dark mb-4">Contact Information</h2>
              <p className="font-syne leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-planovo-light rounded-lg">
                <p className="font-syne">
                  <strong>Email:</strong> legal@planovo.com<br />
                  <strong>Address:</strong> PlaNovo Legal Department<br />
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