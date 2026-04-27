import { Link } from 'react-router-dom'
import keywordsData from '../content/other/keywords.json'

export default function KeywordsIndexPage() {
  const keywords = keywordsData.keywords

  return (
    <div className="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8 py-10">
      <Link to="/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">← Back to Home</Link>

      <h1 className="mt-4 text-2xl font-bold text-gray-900">AI Keywords</h1>
      <p className="mt-1 text-sm text-gray-500">{keywords.length} terms · as of {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

      <div className="mt-6 divide-y divide-gray-100 border border-gray-200 rounded-xl overflow-hidden">
        {keywords.map((kw) => (
          <div key={kw.term} className="px-5 py-4 bg-white">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-sm font-semibold text-gray-900">{kw.term}</span>
              {kw.fullName !== kw.term && (
                <span className="text-xs text-gray-400">{kw.fullName}</span>
              )}
            </div>
            <p className="mt-1 text-sm text-gray-600 leading-relaxed">{kw.explanation}</p>
            <p className="mt-1 text-xs italic text-gray-400">Origin: {kw.origin}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
