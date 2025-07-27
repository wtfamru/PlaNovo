export function Footer() {
  return (
    <footer className="bg-planovo-dark py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold font-outfit text-white">PlaNovo</h3>
            <p className="font-syne text-planovo-light mt-2">Agentic AI for modern project management</p>
          </div>

          <div className="flex space-x-8">
            <a href="#" className="font-syne text-planovo-light hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-syne text-planovo-light hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="font-syne text-planovo-light hover:text-white transition-colors">
              Support
            </a>
          </div>
        </div>

        <div className="border-t border-planovo-secondary mt-8 pt-8 text-center">
          <p className="font-syne text-planovo-light">© 2024 PlaNovo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
