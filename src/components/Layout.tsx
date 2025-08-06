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
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-gray-900">
                Developer Guide
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link
                to="/google"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname.startsWith('/google')
                    ? 'bg-google-blue text-white'
                    : 'text-gray-700 hover:text-google-blue'
                }`}
              >
                Google
              </Link>
              <Link
                to="/amazon"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname.startsWith('/amazon')
                    ? 'bg-amazon-orange text-white'
                    : 'text-gray-700 hover:text-amazon-orange'
                }`}
              >
                Amazon
              </Link>
              <Link
                to="/microsoft"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname.startsWith('/microsoft')
                    ? 'bg-microsoft-blue text-white'
                    : 'text-gray-700 hover:text-microsoft-blue'
                }`}
              >
                Microsoft
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
