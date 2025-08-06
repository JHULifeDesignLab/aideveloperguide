import { Module } from '../types/learning-paths'

interface StepTimelineProps {
  modules: Module[] | number
}

interface StepHeroProps {
  title: string
  vendor: string
}

export function StepTimeline({ modules }: StepTimelineProps) {
  if (typeof modules === 'number') {
    return (
      <div className="bg-blue-50 rounded-xl p-8 my-8 border border-blue-100">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">📋</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Course Structure</h3>
          <p className="text-gray-600 text-lg">
            This comprehensive path contains <span className="font-semibold text-blue-600">{modules} modules</span>
          </p>
          <div className="mt-6 text-sm text-gray-500">
            Detailed module breakdown coming soon
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden my-8">
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-6 border-b border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 flex items-center">
          <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Learning Modules
        </h3>
        <p className="text-gray-600 mt-1">Complete these modules in order</p>
      </div>
      
      <div className="p-8">
        <div className="space-y-4">
          {modules.map((module, index) => (
            <div key={index} className="group relative">
              <div className="flex items-start space-x-4 p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 bg-white hover:bg-blue-50">
                {/* Step number */}
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {index + 1}
                </div>
                
                {/* Content */}
                <div className="flex-grow min-w-0">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">
                    {module.title}
                  </h4>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-4 h-4 mr-1 text-center">⏱️</span>
                    {module.duration}
                  </div>
                </div>
                
                {/* Arrow indicator */}
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-blue-500 text-xl">→</span>
                </div>
              </div>
              
              {/* Connection line (except for last item) */}
              {index < modules.length - 1 && (
                <div className="absolute left-9 top-20 w-0.5 h-4 bg-blue-300"></div>
              )}
            </div>
          ))}
        </div>
        
        {/* Progress indicator */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Total modules: {modules.length}</span>
            <div className="flex items-center">
              <span className="mr-2">Estimated time:</span>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                {modules.reduce((total, module) => {
                  const time = parseInt(module.duration.match(/\d+/)?.[0] || '0');
                  return total + time;
                }, 0)} min total
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function StepHero({ title, vendor }: StepHeroProps) {
  const vendorConfig = {
    google: {
      bg: 'bg-blue-500',
      text: 'text-blue-500'
    },
    amazon: {
      bg: 'bg-orange-500', 
      text: 'text-orange-500'
    },
    microsoft: {
      bg: 'bg-blue-600',
      text: 'text-blue-600'
    }
  }

  const config = vendorConfig[vendor as keyof typeof vendorConfig] || vendorConfig.google

  return (
    <div className="bg-gray-50 rounded-2xl p-12 mb-12 border border-gray-200">
      <div className="text-center">
        {/* Vendor badge */}
        <div className={`inline-flex items-center px-6 py-3 rounded-full ${config.bg} text-white text-sm font-semibold mb-6 shadow-lg`}>
          <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
          {vendor.charAt(0).toUpperCase() + vendor.slice(1)} Learning Path
        </div>
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          {title}
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Master the skills you need with our comprehensive, step-by-step learning approach
        </p>
        
        {/* Features */}
        <div className="flex items-center justify-center mt-8 space-x-8 flex-wrap gap-4">
          <div className="flex items-center text-sm text-gray-500">
            <span className="w-5 h-5 mr-2 text-green-500">✅</span>
            Industry-Recognized
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <span className="w-5 h-5 mr-2 text-blue-500">⚡</span>
            Hands-On Projects
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <span className="w-5 h-5 mr-2 text-purple-500">📖</span>
            Self-Paced
          </div>
        </div>
      </div>
    </div>
  )
}
