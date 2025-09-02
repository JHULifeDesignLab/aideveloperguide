import { Link } from 'react-router-dom'
import { ReactNode } from 'react'
import navigationData from '../data/navigation.json'

interface StepPageLayoutProps {
  vendor: "google" | "amazon" | "microsoft";
  pageKey: string;
  children: ReactNode
}

export default function StepPageLayout({ vendor, pageKey, children }: StepPageLayoutProps) {
  const navigation = (navigationData as any)[vendor]?.[pageKey]
  
  const vendorConfig = {
    google: {
      name: 'Google Cloud',
      bgColor: 'bg-blue-500',
      textColor: 'text-blue-500',
      borderColor: 'border-blue-500'
    },
    amazon: {
      name: 'Amazon AWS',
      bgColor: 'bg-orange-500',
      textColor: 'text-orange-500',
      borderColor: 'border-orange-500'
    },
    microsoft: {
      name: 'Microsoft Azure',
      bgColor: 'bg-blue-600',
      textColor: 'text-blue-600',
      borderColor: 'border-blue-600'
    }
  }

  const config = vendorConfig[vendor]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </ol>
      </nav>

      {/* Content */}
      <div className="bg-white shadow-lg rounded-2xl border border-gray-100 overflow-hidden">
        <div className="prose prose-lg max-w-none p-8 md:p-12">
          {children}
        </div>
      </div>

      {/* Navigation - Consistent for all pages */}
      <div className="flex justify-between items-center mt-8 not-prose">
        {navigation?.back ? (
          <Link 
            to={navigation.back.href} 
            className={`group inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-xl text-white ${config.bgColor} hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 no-underline`}
          >
            <svg className="mr-3 h-5 w-5 text-white group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            {navigation.back.label}
          </Link>
        ) : (
          <div />
        )}
        
        {navigation?.forward ? (
          <Link 
            to={navigation.forward.href} 
            className={`group inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-xl text-white ${config.bgColor} hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 no-underline`}
          >
            {navigation.forward.label}
            <svg className="ml-3 h-5 w-5 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}
