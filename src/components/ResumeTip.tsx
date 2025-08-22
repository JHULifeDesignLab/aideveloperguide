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

  return (
    <div className={`rounded-lg border-l-4 p-4 my-4 ${variantStyles[variant]}`}>
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <span className="text-lg mr-2">{iconVariants[variant]}</span>
        </div>
        <div className="ml-2 flex-1">
          <h4 className="text-sm font-semibold mb-2">{title}</h4>
          <div className="text-sm">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
