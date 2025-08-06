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
      color: 'google-blue',
      bgColor: 'bg-google-blue',
      textColor: 'text-google-blue',
      borderColor: 'border-google-blue'
    },
    amazon: {
      name: 'Amazon AWS',
      color: 'amazon-orange',
      bgColor: 'bg-amazon-orange',
      textColor: 'text-amazon-orange',
      borderColor: 'border-amazon-orange'
    },
    microsoft: {
      name: 'Microsoft Azure',
      color: 'microsoft-blue',
      bgColor: 'bg-microsoft-blue',
      textColor: 'text-microsoft-blue',
      borderColor: 'border-microsoft-blue'
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
    <div className="mb-8">
      <div className={`${config.bgColor} text-white px-6 py-4 rounded-t-lg`}>
        <h2 className="text-xl font-semibold">{config.name} Learning Path</h2>
      </div>
      
      <div className="bg-white border border-gray-200 border-t-0 rounded-b-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {vendorData.steps.map((step: any, index: number) => (
            <Link
              key={step.id}
              to={`/${vendor}/step-${index + 1}`}
              className={`block p-4 border-2 ${config.borderColor} border-opacity-20 rounded-lg hover:border-opacity-100 hover:shadow-md transition-all`}
            >
              <div className="text-center">
                <div className={`w-12 h-12 ${config.bgColor} text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold text-lg`}>
                  {index + 1}
                </div>
                <h3 className={`font-semibold ${config.textColor} mb-2`}>
                  {step.title}
                </h3>
                {step.modules && typeof step.modules === 'number' && (
                  <p className="text-sm text-gray-600">
                    {step.modules} modules
                    {step.totalHours && ` • ~${step.totalHours}h`}
                  </p>
                )}
                {step.modules && Array.isArray(step.modules) && (
                  <p className="text-sm text-gray-600">
                    {step.modules.length} modules
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <Link
            to={`/${vendor}/resources`}
            className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white ${config.bgColor} hover:opacity-90 transition-opacity`}
          >
            View Resources & Project Ideas
          </Link>
        </div>
      </div>
    </div>
  )
}
