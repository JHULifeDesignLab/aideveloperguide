import { Link } from 'react-router-dom'
import learningPathsData from '../data/learning-paths.json'
import { VendorName } from '../types/learning-paths'

interface VendorLandingProps {
  vendor: VendorName
}

export default function VendorLanding({ vendor }: VendorLandingProps) {
  const vendorData = (learningPathsData as any)[vendor]
  
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

  if (!vendorData || !vendorData.steps) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Learning path data not available yet.</p>
      </div>
    )
  }

  return (
    <div className="mb-12">
      {/* Header Section */}
      <div className={`${config.bgColor} text-white px-8 py-12 rounded-2xl mb-8 shadow-xl`}>
        <div className="text-center">
          <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl font-bold">📚</span>
          </div>
          <h2 className="text-3xl font-bold mb-2">{config.name}</h2>
          <p className="text-xl text-white text-opacity-90">Complete Learning Path</p>
        </div>
      </div>
      
      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {vendorData.steps.map((step: any, index: number) => (
          <Link
            key={step.id}
            to={`/${vendor}/step-${index + 1}`}
            className="group relative bg-white rounded-2xl border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
          >
            {/* Step number badge */}
            <div className={`absolute top-4 left-4 w-12 h-12 ${config.bgColor} text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10`}>
              {index + 1}
            </div>
            
            {/* Background decoration */}
            <div className={`absolute top-0 right-0 w-16 h-16 ${config.bgColor} opacity-10 rounded-full transform translate-x-6 -translate-y-6 group-hover:scale-125 transition-transform duration-500`}></div>
            
            <div className="p-8 pt-20">
              <h3 className={`font-bold text-xl mb-3 ${config.textColor} group-hover:text-opacity-80 transition-colors`}>
                {step.title}
              </h3>

              {/* Description */}
              {step.description && (
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {step.description}
                </p>
              )}
              
              <div className="space-y-2 mb-6">
                {step.modules && typeof step.modules === 'number' && (
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-4 h-4 mr-2 text-center">📚</span>
                    {step.modules} modules
                    {step.totalHours && (
                      <>
                        <span className="mx-2 text-gray-400">•</span>
                        <span className="w-4 h-4 mr-1 text-center">⏰</span>
                        ~{step.totalHours}h
                      </>
                    )}
                  </div>
                )}
                {step.modules && Array.isArray(step.modules) && (
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-4 h-4 mr-2 text-center">📋</span>
                    {step.modules.length} modules
                  </div>
                )}
              </div>
              
              {/* Call to action */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">
                    {step.description ? "Get Started" : "Start Learning"}
                </span>
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <span className="text-gray-600 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {/* Resources button */}
      <div className="text-center">
        <Link
          to={`/${vendor}/resources`}
          className={`group inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-2xl text-white ${config.bgColor} hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
        >
          <span className="mr-3">📚</span>
          View Resources & Project Ideas
          <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  )
}
