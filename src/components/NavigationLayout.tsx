import { ReactNode, useState } from 'react'
import { Link } from 'react-router-dom'
import navigationData from '../data/navigation.json'

interface NavigationLayoutProps {
  vendor: "google" | "amazon" | "microsoft" | "claude-code" | "rag";
  pageKey: string;
  children: ReactNode
}

const vendorConfig = {
  google:        { name: 'Google Cloud',    bgColor: 'bg-blue-500',   textColor: 'text-blue-500',   borderColor: 'border-blue-500',   gradientColor: 'rgba(59,130,246,0.13)'  },
  amazon:        { name: 'Amazon AWS',      bgColor: 'bg-orange-500', textColor: 'text-orange-500', borderColor: 'border-orange-500', gradientColor: 'rgba(249,115,22,0.13)'  },
  microsoft:     { name: 'Microsoft Azure', bgColor: 'bg-blue-600',   textColor: 'text-blue-600',   borderColor: 'border-blue-600',   gradientColor: 'rgba(37,99,235,0.13)'   },
  'claude-code': { name: 'Claude Code',     bgColor: 'bg-purple-600', textColor: 'text-purple-600', borderColor: 'border-purple-600', gradientColor: 'rgba(147,51,234,0.13)'  },
  rag:           { name: 'RAG Development', bgColor: 'bg-green-600',  textColor: 'text-green-600',  borderColor: 'border-green-600',  gradientColor: 'rgba(22,163,74,0.13)'   },
}

export default function NavigationLayout({ vendor, pageKey, children }: NavigationLayoutProps) {
  const navigation = (navigationData as any)[vendor]?.[pageKey]
  const [backHovered, setBackHovered]       = useState(false)
  const [forwardHovered, setForwardHovered] = useState(false)

  const config = vendorConfig[vendor]
  const { gradientColor } = config

  const sideBase = 'fixed inset-y-0 hidden xl:flex flex-col items-center justify-center gap-2 transition-all duration-300 text-gray-300 hover:text-gray-500 no-underline z-10 w-[calc((100vw-64rem)/2)]'

  return (
    <div>
      {/* Back — left margin */}
      {navigation?.back && (
        <Link
          to={navigation.back.href}
          className={`${sideBase} left-0`}
          style={{ background: backHovered ? `linear-gradient(to right, ${gradientColor}, transparent)` : 'transparent' }}
          onMouseEnter={() => setBackHovered(true)}
          onMouseLeave={() => setBackHovered(false)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-xs font-medium text-center leading-tight px-2">{navigation.back.label}</span>
        </Link>
      )}

      {/* Forward — right margin */}
      {navigation?.forward && (
        <Link
          to={navigation.forward.href}
          className={`${sideBase} right-0`}
          style={{ background: forwardHovered ? `linear-gradient(to left, ${gradientColor}, transparent)` : 'transparent' }}
          onMouseEnter={() => setForwardHovered(true)}
          onMouseLeave={() => setForwardHovered(false)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-xs font-medium text-center leading-tight px-2">{navigation.forward.label}</span>
        </Link>
      )}

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-4">
            <li>
              <Link to="/" className="text-gray-400 hover:text-gray-600 transition-colors flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5v6m4-6v6" />
                </svg>
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="flex-shrink-0 h-4 w-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <Link to={`/${vendor}`} className={`ml-4 text-sm font-medium ${config.textColor} hover:opacity-75 transition-opacity`}>
                  {config.name}
                </Link>
              </div>
            </li>
            {pageKey === 'resources' && (
              <li>
                <div className="flex items-center">
                  <svg className="flex-shrink-0 h-4 w-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-4 text-sm font-medium text-gray-500">Resources</span>
                </div>
              </li>
            )}
          </ol>
        </nav>

        {/* Content */}
        <div className="bg-white shadow-lg rounded-2xl border border-gray-100 overflow-hidden">
          <div className="prose prose-lg max-w-none p-8 md:p-12">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
