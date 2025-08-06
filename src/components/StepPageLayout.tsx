import { Link } from 'react-router-dom'
import { ReactNode } from 'react'
import learningPathsData from '../data/learning-paths.json'

interface StepPageLayoutProps {
  vendor: 'google' | 'amazon' | 'microsoft'
  step: string
  children: ReactNode
}

export default function StepPageLayout({ vendor, step, children }: StepPageLayoutProps) {
  const vendorData = learningPathsData[vendor]
  
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

  // Find current step info
  let currentStepIndex = -1
  let currentStepData = null
  
  if (vendorData && 'steps' in vendorData) {
    const steps = vendorData.steps
    currentStepIndex = steps.findIndex((s: any) => s.id === step)
    currentStepData = steps[currentStepIndex]
  }

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
          {currentStepData && (
            <li>
              <div className="flex items-center">
                <svg className="flex-shrink-0 h-4 w-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="ml-4 text-sm font-medium text-gray-500">
                  {currentStepData.title}
                </span>
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

      {/* Navigation */}
      {vendorData && 'steps' in vendorData && currentStepIndex >= 0 && (
        <div className="flex flex-col sm:flex-row justify-between items-center mt-12 gap-4">
          <div className="flex-1">
            {currentStepIndex > 0 && (
              <Link
                to={`/${vendor}/step-${currentStepIndex}`}
                className="group inline-flex items-center px-6 py-3 border border-gray-300 text-sm font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <svg className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous Step
              </Link>
            )}
          </div>
          
          <div className="flex-1 flex justify-end">
            {currentStepIndex < vendorData.steps.length - 1 && (
              <Link
                to={`/${vendor}/step-${currentStepIndex + 2}`}
                className={`group inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-xl text-white ${config.bgColor} hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}
              >
                Next Step
                <svg className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
            {currentStepIndex === vendorData.steps.length - 1 && (
              <Link
                to={`/${vendor}/resources`}
                className={`group inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-xl text-white ${config.bgColor} hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}
              >
                View Resources
                <svg className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
