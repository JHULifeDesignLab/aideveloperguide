import { Link } from 'react-router-dom'
import ResourcePageLayout from '../components/ResourcePageLayout'
import keywordsData from '../content/other/keywords.json'

const accentColors = [
  'border-l-teal-400',
  'border-l-blue-400',
  'border-l-purple-400',
]

export default function KeywordsIndexPage() {
  const keywords = keywordsData.keywords

  return (
    <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
      <div className="pt-6">
        <Link to="/" className="text-sm text-gray-400 transition-colors hover:text-gray-600">← Back to Home</Link>
      </div>

      <ResourcePageLayout
        title="AI Keywords"
        subtitle={`Your working vocabulary for the AI industry · ${keywords.length} terms and counting`}
        icon="📖"
      >
        <div className="not-prose">
          <div className="space-y-3 text-sm leading-relaxed text-gray-700">
            <p>
              This glossary is your working vocabulary for the AI industry. These are the terms that show up in job
              requirements, technical interviews, and everyday engineering conversations — many of them (RAG, MCP,
              fine-tuning, agents) are among the most requested skills in AI job postings right now. Knowing what
              they mean is how you read a posting and see the actual work behind the buzzwords.
            </p>
            <p>
              Use it in three passes: <strong className="text-gray-900">learn</strong> the terms below,{' '}
              <strong className="text-gray-900">build</strong> them into a real{' '}
              <Link to="/resources/projects" className="font-medium text-blue-600 underline hover:text-blue-800 hover:no-underline transition-colors">project</Link>, then{' '}
              <strong className="text-gray-900">apply</strong> them precisely on your{' '}
              <Link to="/resources/resume" className="font-medium text-blue-600 underline hover:text-blue-800 hover:no-underline transition-colors">resume</Link>{' '}
              — recruiters and ATS software match these words literally, and a keyword backed by something you
              actually built is what turns a scan into an interview.
            </p>
          </div>

          <div className="mt-6 space-y-2.5">
            {keywords.map((kw, i) => (
              <div
                key={kw.term}
                className={`px-5 py-4 bg-white border border-gray-200 border-l-4 rounded-xl transition-all hover:shadow-md hover:-translate-y-0.5 ${accentColors[i % accentColors.length]}`}
              >
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-sm font-semibold text-gray-900">{kw.term}</span>
                  {kw.fullName !== kw.term && (
                    <span className="text-xs text-gray-400">{kw.fullName}</span>
                  )}
                </div>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">{kw.explanation}</p>
                <div className="flex flex-wrap items-center justify-between gap-2 mt-1">
                  <p className="text-xs italic text-gray-400">Origin: {kw.origin}</p>
                  {(kw as { link?: string }).link && (
                    <a
                      href={(kw as { link?: string }).link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none' }}
                      className="shrink-0 px-3 py-1 text-xs font-medium text-blue-600 transition-colors border border-blue-200 rounded-full bg-blue-50 hover:bg-blue-100"
                    >
                      Click to learn more →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ResourcePageLayout>
    </div>
  )
}
