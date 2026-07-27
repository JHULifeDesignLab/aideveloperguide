import { Link } from 'react-router-dom'

const agentRows = [
  { label: 'Best for', claude: 'Agentic, multi-file tasks in terminal', cursor: 'In-editor AI with strong autocomplete', copilot: 'Inline suggestions in VS Code / JetBrains' },
  { label: 'Pricing', claude: 'Usage-based or $20/mo Pro', cursor: '$20/mo Pro', copilot: '$10/mo, free for students' },
  { label: 'Strengths', claude: 'Deep reasoning, runs bash, reads your whole repo', cursor: 'Slick UX, fast inline edits, good chat', copilot: 'Lowest friction, familiar IDE feel' },
  { label: 'Weaknesses', claude: 'Can get expensive on large sessions; terminal-first', cursor: 'Proprietary, model quality varies by tier', copilot: 'Shallower reasoning, less useful for complex tasks' },
  { label: "Who it's for", claude: 'Devs comfortable in terminal who want an autonomous agent', cursor: 'Anyone who wants AI baked into their editor', copilot: 'Beginners, or anyone already deep in VS Code' },
]

function StepCard({
  number,
  title,
  color,
  children,
}: {
  number: string
  title: string
  color: 'teal' | 'blue' | 'purple'
  children: React.ReactNode
}) {
  const styles = {
    teal: { frame: 'border-teal-100 bg-teal-50', bar: 'bg-teal-500', circle: 'bg-teal-100 text-teal-700', heading: 'text-teal-800' },
    blue: { frame: 'border-blue-100 bg-blue-50', bar: 'bg-blue-500', circle: 'bg-blue-100 text-blue-700', heading: 'text-blue-900' },
    purple: { frame: 'border-purple-100 bg-purple-50', bar: 'bg-purple-500', circle: 'bg-purple-100 text-purple-700', heading: 'text-purple-900' },
  }[color]

  return (
    <div className={`overflow-hidden border rounded-xl ${styles.frame}`}>
      <div className={`h-1 ${styles.bar}`} />
      <div className="p-4 sm:p-5">
        <div className="flex items-center gap-3 mb-2.5">
          <span className={`flex items-center justify-center w-9 h-9 text-sm font-bold rounded-full shrink-0 ${styles.circle}`}>
            {number}
          </span>
          <h2 className={`text-lg font-bold ${styles.heading}`}>{title}</h2>
        </div>
        {children}
      </div>
    </div>
  )
}

export default function WhereToStartPage() {
  return (
    <div className="max-w-6xl px-4 py-6 mx-auto sm:px-6 lg:px-8">
      <Link to="/" className="text-sm text-gray-400 transition-colors hover:text-gray-600">← Back to Home</Link>

      <h1 className="mt-4 text-2xl font-bold text-gray-900">Not sure where to start?</h1>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        Three steps to get your footing before you build. Each one takes minutes to start, and together they turn
        "I keep hearing about AI" into "I know what I'm doing and why."
      </p>

      <div className="mt-5 space-y-4">
        {/* Step 1 — Understand the machine */}
        <StepCard number="01" title="Understand the machine" color="teal">
          <p className="text-sm leading-relaxed text-gray-700">
            Before you touch a single tool, learn what a large language model actually is: a stateless
            text-in, text-out machine that predicts tokens — which explains both its power and its habit of
            confidently making things up. Fifteen minutes here will save you hours of confusion later, and it's
            the understanding interviewers probe for.
          </p>
          <div className="mt-4 text-center">
            <Link
              to="/llm-basics"
              className="inline-block px-5 py-2 text-sm font-semibold text-white transition-all bg-teal-600 shadow-sm rounded-xl hover:bg-teal-500 hover:shadow-md"
            >
              Read LLM Basics →
            </Link>
          </div>
        </StepCard>

        {/* Step 2 — Learn the language */}
        <StepCard number="02" title="Learn the language" color="blue">
          <p className="text-sm leading-relaxed text-gray-700">
            RAG, MCP, fine-tuning, guardrails — job postings and interviews are full of these terms, and knowing
            them is how you read a job description and see through the buzzwords. Browse the keyword glossary,
            hover anything unfamiliar, and check the word of the day on the homepage until they all feel like
            vocabulary you own.
          </p>
          <div className="mt-4 text-center">
            <Link
              to="/keywords"
              className="inline-block px-5 py-2 text-sm font-semibold text-white transition-all bg-blue-600 shadow-sm rounded-xl hover:bg-blue-500 hover:shadow-md"
            >
              Browse the glossary →
            </Link>
          </div>
        </StepCard>

        {/* Step 3 — Pick your path */}
        <StepCard number="03" title="Pick your path" color="purple">
          <p className="text-sm leading-relaxed text-gray-700">
            Now build something. Pick the track that matches what you want to make — each one ends with a
            project you can put on your resume:
          </p>
          <div className="grid grid-cols-1 gap-3 mt-4 sm:grid-cols-2">
            <Link to="/rag" className="block px-4 py-3 transition-all bg-white border border-gray-200 rounded-xl hover:shadow-md hover:-translate-y-0.5">
              <p className="text-sm font-semibold text-gray-900">Build an AI app → RAG</p>
              <p className="text-xs text-gray-500 mt-0.5">Ground an LLM in your own data — the most common first AI project.</p>
            </Link>
            <Link to="/claude-code" className="block px-4 py-3 transition-all bg-white border border-gray-200 rounded-xl hover:shadow-md hover:-translate-y-0.5">
              <p className="text-sm font-semibold text-gray-900">Code with AI → Claude Code</p>
              <p className="text-xs text-gray-500 mt-0.5">Learn agentic development and ship faster than you thought possible.</p>
            </Link>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-gray-700">
            Whichever path you pick, you'll want a coding agent in your daily workflow. They're not all the same:
          </p>

          <div className="px-4 py-3 mt-3 text-xs leading-relaxed border rounded-lg bg-amber-50 border-amber-200 text-amber-800">
            <strong>Heads up (April 2026):</strong> The pricing landscape is shifting fast. Most of these companies have
            been absorbing the cost of LLM tokens on your behalf to stay competitive — that's not sustainable. Almost all
            major coding agents have recently reduced their included allowances or tightened what's covered under flat
            monthly plans. Always check current pricing before committing.
          </div>

          <div className="mt-3 overflow-x-auto">
            <table className="w-full overflow-hidden text-sm bg-white border border-gray-200 rounded-xl">
              <thead className="bg-gray-50">
                <tr>
                  <th className="w-32 px-4 py-3 text-xs font-semibold tracking-wide text-left text-gray-500 uppercase"></th>
                  <th className="px-4 py-3 text-xs font-semibold tracking-wide text-left text-purple-600 uppercase">Claude Code</th>
                  <th className="px-4 py-3 text-xs font-semibold tracking-wide text-left text-blue-600 uppercase">Cursor</th>
                  <th className="px-4 py-3 text-xs font-semibold tracking-wide text-left text-gray-600 uppercase">GitHub Copilot</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {agentRows.map((row) => (
                  <tr key={row.label} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-xs font-semibold text-gray-500">{row.label}</td>
                    <td className="px-4 py-3 text-gray-700">{row.claude}</td>
                    <td className="px-4 py-3 text-gray-700">{row.cursor}</td>
                    <td className="px-4 py-3 text-gray-700">{row.copilot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-gray-700">
            No single tool wins for everyone. If you're comfortable in the terminal, Claude Code pays off fast.
            If you want something that just works inside your editor from day one, start with Cursor or Copilot.
          </p>
        </StepCard>
      </div>

      <div className="px-5 py-4 mt-5 border border-gray-200 bg-gray-50 rounded-xl">
        <p className="text-sm leading-relaxed text-gray-700">
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
