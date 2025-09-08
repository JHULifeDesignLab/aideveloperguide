import { Link, useLocation } from 'react-router-dom'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-4">
              {/* Johns Hopkins Logo */}
              <div className="flex items-center">
                <img 
                  src="/aideveloperguide/jhu-shield.png" 
                  alt="Johns Hopkins University" 
                  className="h-8 w-auto"
                  onError={(e) => {
                    // Try alternative paths if the first one fails
                    const img = e.currentTarget as HTMLImageElement;
                    if (img.src.includes('/aideveloperguide/')) {
                      img.src = '/jhu-shield.png';
                    } else {
                      img.style.display = 'none';
                      const fallback = img.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }
                  }}
                />
                <div className="hidden bg-blue-900 text-white px-3 py-1 rounded font-bold text-sm">
                  JHU
                </div>
              </div>
              <Link to="/" className="text-xl font-bold text-gray-900">
                Life Design Lab AI Developer Guide
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link
                to="/google"
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname.startsWith('/google')
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-700 hover:text-blue-500'
                }`}
              >
                <img 
                  src="https://www.google.com/favicon.ico" 
                  alt="Google" 
                  className="h-4 w-4"
                />
                <span>Google</span>
              </Link>
              <Link
                to="/amazon"
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname.startsWith('/amazon')
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-700 hover:text-orange-500'
                }`}
              >
                <img 
                  src="https://www.amazon.com/favicon.ico" 
                  alt="Amazon" 
                  className="h-4 w-4"
                />
                <span>Amazon</span>
              </Link>
              <Link
                to="/microsoft"
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname.startsWith('/microsoft')
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                <img 
                  src="https://www.microsoft.com/favicon.ico" 
                  alt="Microsoft" 
                  className="h-4 w-4"
                />
                <span>Microsoft</span>
              </Link>
              <Link
                to="/resources"
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname.startsWith('/resources')
                    ? 'bg-green-500 text-white'
                    : 'text-gray-700 hover:text-green-500'
                }`}
              >
                <span className="text-lg">📚</span>
                <span>Resources</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 mb-3">
              Provided by the JHU Life Design Lab
            </p>
            <a 
              href="https://forms.office.com/Pages/ResponsePage.aspx?id=OPSkn-axO0eAP4b4rt8N7DQ1jmk83SBMnsReHYqtIqpURVJNVUY2N1U5VU1WQ01XSDJPVDNNQVhRWC4u"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10m0 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2m0 0v8a2 2 0 002 2h6a2 2 0 002-2V8m-9 4h4" />
              </svg>
              Anonymous Feedback
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
