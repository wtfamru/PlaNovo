import Link from "next/link"

export function Footer() {
  return (
    <footer id="footer" className="bg-planovo-dark py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold font-outfit text-white">PlaNovo</h3>
            <p className="font-syne text-planovo-light mt-2">Agentic AI for modern project management</p>
            <p className="font-syne text-planovo-light mt-4">
              Transforming how teams work with intelligent automation and AI-powered insights.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold font-syne text-white mb-4">Contact Us</h4>
            <div className="space-y-2">
              <p className="font-syne text-planovo-light">
                <span className="font-medium">Email:</span> hello@planovo.com
              </p>
              <p className="font-syne text-planovo-light">
                <span className="font-medium">Support:</span> support@planovo.com
              </p>
              <p className="font-syne text-planovo-light">
                <span className="font-medium">Status:</span> In Development
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-syne text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/privacy" className="block font-syne text-planovo-light hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block font-syne text-planovo-light hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="block font-syne text-planovo-light hover:text-white transition-colors">
                Cookies Policy
              </Link>
              <a href="#features" className="block font-syne text-planovo-light hover:text-white transition-colors">
                Features
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-planovo-secondary mt-8 pt-8 text-center">
          <p className="font-syne text-planovo-light">© 2024 PlaNovo. All rights reserved. Currently in development.</p>
        </div>
      </div>
    </footer>
  )
}
