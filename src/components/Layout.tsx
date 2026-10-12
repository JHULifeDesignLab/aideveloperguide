import { Link, useLocation } from 'react-router-dom'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-slate-200 shadow-sm border-b border-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14">
            <div className="flex items-center space-x-3">
              {/* Official Johns Hopkins / Life Design Lab lockup */}
              <img
                src={`${import.meta.env.BASE_URL}jhu-lifedesign-logo.png`}
                alt="Johns Hopkins University — Integrative Learning and Life Design, Life Design Lab"
                className="w-auto h-10"
              />
              <div className="h-8 border-l border-slate-300" />
              <Link to="/" className="flex flex-col leading-tight group">
                <span className="text-lg font-bold text-gray-900">
                  <span className="text-blue-600 transition-colors group-hover:text-blue-500">AI</span> Developer Starter Guide
                </span>
                <span className="text-[11px] font-medium tracking-wide text-gray-500">
                  Learn · Build · Get Hired
                </span>
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              {[
                { label: 'Resume',    to: '/resources/resume' },
                { label: 'LinkedIn',  to: '/resources/linkedin' },
                { label: 'GitHub',    to: '/resources/github' },
                { label: 'Projects',  to: '/resources/projects' },
                { label: 'Resources', to: '/resources' },
              ].map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === to
                      ? 'text-gray-900'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {label}
                </Link>
              ))}
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
            <div className="flex justify-center mb-3">
              <img
                src={`${import.meta.env.BASE_URL}jhu-lifedesign-logo.png`}
                alt="Johns Hopkins University — Integrative Learning and Life Design, Life Design Lab"
                className="w-auto h-12"
              />
            </div>
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
