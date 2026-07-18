import { ReactNode } from 'react'

interface ResourcePageLayoutProps {
  title: string
  subtitle: string
  icon: string
  children: ReactNode
}

export default function ResourcePageLayout({ title, subtitle, icon, children }: ResourcePageLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8 overflow-hidden text-center border border-gray-100 rounded-2xl bg-gradient-to-r from-teal-50 via-blue-50 to-purple-50 fade-in-up">
        <div className="px-6 py-8">
          <div className="flex items-center justify-center mx-auto bg-white shadow-sm w-14 h-14 rounded-2xl float-bob">
            <span className="text-3xl">{icon}</span>
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
          <p className="mt-1 text-sm text-gray-600">{subtitle}</p>
          <div className="w-16 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400" />
        </div>
      </div>

      <div className="prose prose-sm max-w-none">
        {children}
      </div>
    </div>
  )
}
