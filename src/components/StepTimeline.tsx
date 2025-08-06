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
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 my-8 border border-blue-100">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
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
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {index + 1}
                </div>
                
                {/* Content */}
                <div className="flex-grow min-w-0">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">
                    {module.title}
                  </h4>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {module.duration}
                  </div>
                </div>
                
                {/* Arrow indicator */}
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              {/* Connection line (except for last item) */}
              {index < modules.length - 1 && (
                <div className="absolute left-9 top-20 w-0.5 h-4 bg-gradient-to-b from-blue-300 to-gray-300"></div>
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
      gradient: 'from-google-blue to-blue-600',
      bg: 'bg-google-blue',
      text: 'text-google-blue'
    },
    amazon: {
      gradient: 'from-amazon-orange to-orange-600',
      bg: 'bg-amazon-orange', 
      text: 'text-amazon-orange'
    },
    microsoft: {
      gradient: 'from-microsoft-blue to-blue-600',
      bg: 'bg-microsoft-blue',
      text: 'text-microsoft-blue'
    }
  }

  const config = vendorConfig[vendor as keyof typeof vendorConfig] || vendorConfig.google

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 mb-12 border border-gray-200">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br opacity-10 rounded-full transform rotate-12"></div>
      <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-gradient-to-tr opacity-5 rounded-full"></div>
      
      <div className="relative text-center">
        {/* Vendor badge */}
        <div className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${config.gradient} text-white text-sm font-semibold mb-6 shadow-lg`}>
          <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></div>
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
        
        {/* Progress indicator */}
        <div className="flex items-center justify-center mt-8 space-x-4">
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Industry-Recognized
          </div>
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Hands-On Projects
          </div>
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Self-Paced
          </div>
        </div>
      </div>
    </div>
  )
}
