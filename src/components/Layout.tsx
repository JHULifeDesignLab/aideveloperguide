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
                  src="/developerguide/jhu-shield.png" 
                  alt="Johns Hopkins University" 
                  className="h-8 w-auto"
                  onError={(e) => {
                    // Try alternative paths if the first one fails
                    const img = e.currentTarget as HTMLImageElement;
                    if (img.src.includes('/developerguide/')) {
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
                Life Design Lab Developer Guide
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
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">
            Provided by the JHU Life Design Lab
          </p>
        </div>
      </footer>
    </div>
  )
}
