import { Link } from 'react-router-dom'

export default function WhereToStartPage() {
  return (
    <div className="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8 py-12">
      <Link to="/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">← Back to Home</Link>

      <h1 className="mt-6 text-2xl font-bold text-gray-900">Not sure where to start?</h1>

      <div className="mt-6 space-y-4 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-lg font-bold text-gray-900 mt-8">Cloud still matters — maybe more than ever</h2>
        <p>
          It's tempting to think that with AI doing so much of the work, infrastructure knowledge doesn't matter anymore.
          It's the opposite. Every AI product, every LLM API call, every vector database, every model deployment runs
          on cloud infrastructure. The industry doesn't just value cloud skills alongside AI — it expects them together.
        </p>
        <p>
          Scalability is what separates a side project from something real. Cloud platforms give you managed compute,
          auto-scaling, logging, security, and global distribution out of the box. Learning this as a student means
          you can speak the language that engineering teams actually use on the job.
        </p>
        <p>
          <strong>Start with Google Cloud.</strong> It has the most beginner-friendly learning path, gives you a
          verifiable skill badge after about an hour, and Vertex AI is increasingly relevant for anyone building with LLMs.
        </p>
      </div>

      <div className="mt-6 mb-10">
        <Link
          to="/google"
          className="inline-block px-6 py-3 text-sm font-semibold text-white bg-blue-500 rounded-xl shadow-md hover:shadow-lg hover:opacity-90 transition-all"
        >
          Start with Google Cloud →
        </Link>
      </div>

      <div className="mt-10 space-y-4 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-lg font-bold text-gray-900">Then pick a coding agent</h2>
        <p>
          Once you have some cloud grounding, add a coding agent to your daily workflow. These tools will meaningfully
          change how fast you write and understand code — but they're not all the same.
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-xs text-amber-800 leading-relaxed">
          <strong>Heads up (April 2026):</strong> The pricing landscape is shifting fast. Most of these companies have been absorbing the cost of LLM tokens on your behalf to stay competitive — that's not sustainable. Almost all major coding agents have recently reduced their included allowances or tightened what's covered under flat monthly plans. Always check current pricing before committing. What's in this table is accurate as of April 2026 but will likely be outdated soon.
        </div>

        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide w-32"></th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-purple-600 uppercase tracking-wide">Claude Code</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-blue-600 uppercase tracking-wide">Cursor</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">GitHub Copilot</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { label: 'Best for', claude: 'Agentic, multi-file tasks in terminal', cursor: 'In-editor AI with strong autocomplete', copilot: 'Inline suggestions in VS Code / JetBrains' },
                { label: 'Pricing', claude: 'Usage-based or $20/mo Pro', cursor: '$20/mo Pro', copilot: '$10/mo, free for students' },
                { label: 'Strengths', claude: 'Deep reasoning, runs bash, reads your whole repo', cursor: 'Slick UX, fast inline edits, good chat', copilot: 'Lowest friction, familiar IDE feel' },
                { label: 'Weaknesses', claude: 'Can get expensive on large sessions; terminal-first', cursor: 'Proprietary, model quality varies by tier', copilot: 'Shallower reasoning, less useful for complex tasks' },
                { label: 'Who it\'s for', claude: 'Devs comfortable in terminal who want an autonomous agent', cursor: 'Anyone who wants AI baked into their editor', copilot: 'Beginners, or anyone already deep in VS Code' },
              ].map((row) => (
                <tr key={row.label} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold text-gray-500 text-xs">{row.label}</td>
                  <td className="px-4 py-3 text-gray-700">{row.claude}</td>
                  <td className="px-4 py-3 text-gray-700">{row.cursor}</td>
                  <td className="px-4 py-3 text-gray-700">{row.copilot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4">
          No single tool wins for everyone. If you're comfortable in the terminal, Claude Code pays off fast.
          If you want something that just works inside your editor from day one, start with Cursor or Copilot.
        </p>
      </div>

      <div className="mt-10 bg-gray-50 border border-gray-200 rounded-xl px-6 py-5">
        <p className="text-sm text-gray-700 leading-relaxed">
          <strong>A note before you start.</strong> These tools are genuinely powerful — and that's exactly why
          you shouldn't lean on them completely. Coding is still important. Not because AI can't write code,
          but because you don't want to be a slave to your tools. If a model goes down, if pricing changes,
          if government regulation suddenly restricts LLM access — you don't want to be left with nothing.
          The developers who stay valuable are the ones who understand what the AI is doing, can catch its
          mistakes, and can work without it when they have to. <strong>Use these tools to go faster. Not to avoid learning.</strong>
        </p>
      </div>
    </div>
  )
}
