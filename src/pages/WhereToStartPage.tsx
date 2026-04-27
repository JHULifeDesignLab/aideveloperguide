import { Link } from 'react-router-dom'

const paths = [
  {
    label: 'Start here',
    recommended: true,
    name: 'Google Cloud',
    tagline: 'Best first step. After about one hour you\'ll already have one new resumé item.',
    timeEstimate: '~1 hr to first win',
    to: '/google',
    color: 'border-blue-500',
    badgeColor: 'bg-blue-500',
    textColor: 'text-blue-600',
  },
  {
    label: 'Then try',
    recommended: false,
    name: 'Amazon AWS',
    tagline: 'Great second path — Bedrock is everywhere in job listings right now.',
    timeEstimate: '~1–6 hrs',
    to: '/amazon',
    color: 'border-orange-400',
    badgeColor: 'bg-orange-400',
    textColor: 'text-orange-500',
  },
  {
    label: 'Or jump straight to',
    recommended: false,
    name: 'Claude Code',
    tagline: 'If you already have some dev experience, this one pays off fast in your daily workflow.',
    timeEstimate: '~2–3 hrs',
    to: '/claude-code',
    color: 'border-purple-500',
    badgeColor: 'bg-purple-500',
    textColor: 'text-purple-600',
  },
]

export default function WhereToStartPage() {
  return (
    <div className="max-w-2xl px-4 mx-auto sm:px-6 lg:px-8 py-12">
      <Link to="/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">← Back to Home</Link>

      <h1 className="mt-6 text-2xl font-bold text-gray-900">Not sure where to start?</h1>
      <p className="mt-2 text-sm text-gray-500 leading-relaxed">
        That's totally fine — there's a lot here. Here's our honest recommendation based on what gets students
        the fastest, most visible results.
      </p>

      <div className="mt-8 space-y-4">
        {paths.map((path) => (
          <Link
            key={path.name}
            to={path.to}
            className={`block border-l-4 ${path.color} bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow px-6 py-5`}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{path.label}</span>
              {path.recommended && (
                <span className={`text-xs font-semibold text-white ${path.badgeColor} px-2 py-0.5 rounded-full`}>
                  Recommended
                </span>
              )}
            </div>
            <p className={`text-base font-bold ${path.textColor}`}>{path.name}</p>
            <p className="mt-1 text-sm text-gray-600 leading-relaxed">{path.tagline}</p>
            <p className="mt-2 text-xs text-gray-400">{path.timeEstimate}</p>
          </Link>
        ))}
      </div>

      <div className="mt-10 bg-gray-50 border border-gray-200 rounded-xl px-6 py-5">
        <p className="text-sm text-gray-700 leading-relaxed">
          <strong>Quick tip:</strong> You don't have to pick just one. The paths are independent — you can
          do Google one weekend and AWS the next. Each one leaves you with something concrete to put on your resumé.
        </p>
      </div>
    </div>
  )
}
