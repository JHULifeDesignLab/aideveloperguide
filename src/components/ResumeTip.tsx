import { ReactNode } from 'react'

interface ResumeTipProps {
  children: ReactNode
  title?: string
  variant?: 'default' | 'success' | 'warning' | 'info'
}

export default function ResumeTip({ children, title = "📝 Resume Tip", variant = 'default' }: ResumeTipProps) {
  const variantStyles = {
    default: 'bg-blue-50 border-blue-200 text-blue-800',
    success: 'bg-green-50 border-green-200 text-green-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800', 
    info: 'bg-indigo-50 border-indigo-200 text-indigo-800'
  }

  const iconVariants = {
    default: '📝',
    success: '✅',
    warning: '⚠️',
    info: 'ℹ️'
  }

  const iconBg = {
    default: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    info: 'bg-indigo-100 text-indigo-800'
  }

  return (
    <div className={`rounded-lg border-l-4 px-3 py-2 my-2 ${variantStyles[variant]}`}>
      <div className="flex items-start">
        {/* Icon column - fixed width, aligned with the first line of content */}
        <div className="flex-shrink-0 mr-3">
          <span className={`inline-flex items-center justify-center h-6 w-6 rounded ${iconBg[variant]}`}>{iconVariants[variant]}</span>
        </div>

        {/* Content column */}
        <div className="flex-1">
          <div className="mb-1">
            <h4 className="text-sm font-semibold leading-none">{title}</h4>
          </div>
          <div className="text-sm leading-snug">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
