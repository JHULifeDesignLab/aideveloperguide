import { Link } from 'react-router-dom'
import { ReactNode } from 'react'
import navigationData from '../data/navigation.json'
import learningPathsData from '../data/learning-paths.json'

interface StepPageLayoutProps {
  vendor: "google" | "amazon" | "microsoft" | "claude-code" | "rag";
  pageKey: string;
  children: ReactNode;
  colorOverride?: { bgColor: string; textColor: string; borderColor: string }
}

export default function StepPageLayout({ vendor, pageKey, children, colorOverride }: StepPageLayoutProps) {
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
    },
    'claude-code': {
      name: 'Claude Code',
      bgColor: 'bg-purple-600',
      textColor: 'text-purple-600',
      borderColor: 'border-purple-600'
    },
    'rag': {
      name: 'RAG Development',
      bgColor: 'bg-green-600',
      textColor: 'text-green-600',
      borderColor: 'border-green-600'
    }
  }

  const baseConfig = vendorConfig[vendor]
  const config = colorOverride ? { ...baseConfig, ...colorOverride } : baseConfig

  const stepIndex = ['step-1', 'step-2', 'step-3'].indexOf(pageKey)
  const steps = (learningPathsData as any)[vendor]?.steps ?? []
  const currentStepTitle: string | null =
    pageKey === 'resources' ? 'Resources'
    : stepIndex >= 0 && steps[stepIndex] ? steps[stepIndex].title
    : null

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Floating nav buttons */}
      {navigation?.back && (
        <Link
          to={navigation.back.href}
          className={`fixed left-4 top-1/2 -translate-y-1/2 z-50 group flex flex-col items-center gap-1 ${config.bgColor} text-white rounded-2xl px-3 py-4 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 no-underline`}
        >
          <svg className="h-5 w-5 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-xs font-medium [writing-mode:vertical-rl] rotate-180 leading-tight tracking-wide">{navigation.back.label}</span>
        </Link>
      )}
      {navigation?.forward && (
        <Link
          to={navigation.forward.href}
          className={`fixed right-4 top-1/2 -translate-y-1/2 z-50 group flex flex-col items-center gap-1 ${config.bgColor} text-white rounded-2xl px-3 py-4 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 no-underline`}
        >
          <svg className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-xs font-medium [writing-mode:vertical-rl] leading-tight tracking-wide">{navigation.forward.label}</span>
        </Link>
      )}

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
          {currentStepTitle && (
            <li>
              <div className="flex items-center">
                <svg className="flex-shrink-0 h-4 w-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="ml-4 text-sm font-medium text-gray-500">{currentStepTitle}</span>
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
  )
}
