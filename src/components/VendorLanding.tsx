import { Link } from 'react-router-dom'
import { useState } from 'react'
import learningPathsData from '../data/learning-paths.json'
import navigationData from '../data/navigation.json'
import { topicConfigs } from '../data/topic-config'

interface VendorLandingProps {
  vendor: string
}

export default function VendorLanding({ vendor }: VendorLandingProps) {
  const vendorData = (learningPathsData as any)[vendor]
  const navigation = (navigationData as any)[vendor]?.['index']
  const [backHovered, setBackHovered]       = useState(false)
  const [forwardHovered, setForwardHovered] = useState(false)

  const config = topicConfigs[vendor] ?? {
    name: vendor,
    bgColor: 'bg-gray-500',
    textColor: 'text-gray-500',
    borderColor: 'border-gray-500',
    gradientColor: 'rgba(100,116,139,0.13)',
  }
  const { gradientColor } = config

  const sideBase = 'fixed inset-y-0 hidden xl:flex flex-col items-center justify-center gap-2 transition-all duration-300 text-gray-300 hover:text-gray-500 no-underline z-10 w-[calc((100vw-64rem)/2)]'

  if (!vendorData || !vendorData.steps) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Learning path data not available yet.</p>
      </div>
    )
  }

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

      <div className="mb-12">
        {/* Header Section */}
        <div className="px-8 py-12 mb-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2 text-gray-900">{config.name}</h2>
            <p className="text-xl text-gray-600">Complete Learning Path</p>
          </div>
        </div>

        {/* Steps Grid (show only first two steps on landing pages) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-5xl mx-auto">
          {vendorData.steps.slice(0, 2).map((step: any, index: number) => {
            const isPrereq = vendor === 'claude-code' && index === 0
            const cardConfig = isPrereq
              ? { bgColor: 'bg-slate-500', textColor: 'text-slate-500' }
              : { bgColor: config.bgColor, textColor: config.textColor }
            return (
              <Link
                key={step.id}
                to={`/${vendor}/step-${index + 1}`}
                className="group relative bg-white rounded-2xl border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Step number badge */}
                <div className={`absolute top-4 left-4 w-12 h-12 ${cardConfig.bgColor} text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10`}>
                  {isPrereq ? '~' : index + 1}
                </div>

                {/* Background decoration */}
                <div className={`absolute top-0 right-0 w-16 h-16 ${cardConfig.bgColor} opacity-10 rounded-full transform translate-x-6 -translate-y-6 group-hover:scale-125 transition-transform duration-500`}></div>

                <div className="p-5 pt-16">
                  <h3 className={`font-bold text-lg mb-2 ${cardConfig.textColor} group-hover:text-opacity-80 transition-colors`}>
                    {step.title}
                  </h3>

                  {step.description && (
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      {step.description}
                    </p>
                  )}

                  <div className="space-y-1 mb-4">
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
            )
          })}
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
    </div>
  )
}
