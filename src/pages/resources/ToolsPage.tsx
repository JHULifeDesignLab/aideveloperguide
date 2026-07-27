import ResourcePageLayout from '../../components/ResourcePageLayout'

interface Project {
  name: string
  description: string
  example?: boolean
  exampleHref?: string | null
}

interface Category {
  emoji: string
  title: string
  tagline: string
  tech: string[]
  color: 'blue' | 'purple' | 'teal' | 'amber'
  projects: Project[]
}

const categories: Category[] = [
  {
    emoji: '🔍',
    title: 'RAG & Knowledge Systems',
    tagline: 'Teach an AI to answer from *your* data. This is the pattern behind nearly every enterprise chatbot, and one of the first things AI teams ask if you\'ve built.',
    tech: ['Vector DB (Chroma · Pinecone · pgvector)', 'Embeddings', 'LangChain or raw LLM SDK', 'Chunking + citations'],
    color: 'blue',
    projects: [
      {
        name: 'Workout Tracker',
        example: true,
        exampleHref: null,
        description:
          'Build a workout tracker that remembers your training history and retrieves it to generate coaching messages grounded in your own past sessions — progress recaps, plateau nudges, next-workout suggestions. Our example adds encouragement informed by women\'s-health research; your version can go anywhere! (marathon prep, physical therapy, a team sport, etc.)',
      },
      {
        name: 'Study Companion',
        description:
          'Index your own course notes and readings, then ask questions and get answers that cite the exact lecture or page they came from. Works for any document collection: hobby manuals, recipes, board-game rules.',
      },
      {
        name: 'Codebase Q&A Assistant',
        description:
          'Point it at a GitHub repository and ask "how does login work?" — retrieval over code with file-and-line citations. The classic new-engineer onboarding tool.',
      },
    ],
  },
  {
    emoji: '🤖',
    title: 'AI Agents & MCP',
    tagline: 'Give an LLM hands! Tool-calling and orchestration are what companies are looking for in an \'AI engineer\'',
    tech: ['MCP servers', 'Function / tool calling', 'Claude Agent SDK or LangChain agents', 'Third-party APIs'],
    color: 'purple',
    projects: [
      {
        name: 'Daily Briefing Agent',
        example: true,
        exampleHref: null,
        description:
          'An agent that connects a few real APIs (calendar, weather, news) through MCP and composes a personalized morning brief it can answer follow-up questions about. Add whatever feeds you care about — sports scores, campus events, a stock watchlist.',
      },
      {
        name: 'Talk-to-Your-Data Assistant',
        description:
          'An MCP server over a real database you own (budget, fantasy-league stats, club roster): ask questions in plain English, get answers backed by actual queries.',
      },
      {
        name: 'Multi-Tool Task Agent',
        description:
          'An agent that chains 2–3 tools to finish a real task end to end — read a syllabus, check your calendar, schedule a study plan. The win is the reliable handoff between tools, not any single call.',
      },
    ],
  },
  {
    emoji: '🎙️',
    title: 'Multimodal AI',
    tagline: 'Voice and vision in, structured answers out — the most demo-able projects on a portfolio.',
    tech: ['Speech-to-text (Whisper)', 'Vision-capable LLMs', 'Text-to-speech', 'Image generation APIs'],
    color: 'teal',
    projects: [
      {
        name: 'Lecture Companion',
        example: true,
        exampleHref: null,
        description:
          'Upload a lecture recording; get a transcript, a structured summary, and auto-generated quiz questions. The same skeleton works for podcasts, meetings, or language practice.',
      },
      {
        name: 'Snap-to-Structure',
        description:
          'Take a photo, have a vision model extract structured data, then do something useful with it: fridge contents → recipe ideas, receipts → budget tracker, bookshelf → catalog.',
      },
      {
        name: 'Voice Interface for Anything',
        description:
          'Add speech-in/speech-out to any app you\'ve built — including your RAG project. Cheap to add, huge demo impact, and added accessibility.',
      },
    ],
  },
  {
    emoji: '🚀',
    title: 'Production AI: Ship, Evaluate, Monitor',
    tagline: 'Deployed, tested, and monitored. This is the difference between "it ran on my laptop" and engineering a company can trust you with!',
    tech: ['FastAPI', 'Docker', 'GitHub Actions CI', 'Render · Railway · Vercel', 'Eval harnesses', 'Guardrails'],
    color: 'amber',
    projects: [
      {
        name: 'Productionize One of Your Projects',
        example: true,
        exampleHref: null,
        description:
          'Take an AI app you\'ve built — any project on this page — and turn it into something people can actually visit and use. Deploy the backend and front end to a real host with a public URL, add automated tests that check the AI\'s answers are still good every time you push new code, and build a small dashboard tracking what your traffic costs and how fast responses come back. Our example will be the workout tracker from the RAG category, deployed end to end so you can follow every step.',
      },
      {
        name: 'LLM Test Suite',
        description:
          'How do you know your AI app still works after you tweak a prompt or swap models? Build the tool that answers that: a set of test questions with known good answers that runs automatically against your app and flags responses that made something up, lost their sources, or got worse than last version. It\'s the AI equivalent of a unit-test suite — every serious LLM product has one, and companies actively hire for this skill.',
      },
      {
        name: 'Real-Time Classifier API',
        description:
          'Build a model that labels incoming text on the fly (spam or not, toxic or safe, fraud or legit) and serve it behind a web API other apps can call. The classifier is the easy half; the resume value is the production wrapper: capping how many requests each user can send, logging every prediction, tracking accuracy over time, and staying fast under load. These are exactly the details interviewers poke at.',
      },
    ],
  },
]

const colorStyles = {
  blue: { frame: 'border-blue-100 bg-blue-50', bar: 'bg-blue-500', heading: 'text-blue-900', chip: 'bg-white border-blue-200 text-blue-700', badge: 'bg-blue-600' },
  purple: { frame: 'border-purple-100 bg-purple-50', bar: 'bg-purple-500', heading: 'text-purple-900', chip: 'bg-white border-purple-200 text-purple-700', badge: 'bg-purple-600' },
  teal: { frame: 'border-teal-100 bg-teal-50', bar: 'bg-teal-500', heading: 'text-teal-800', chip: 'bg-white border-teal-200 text-teal-700', badge: 'bg-teal-600' },
  amber: { frame: 'border-amber-200 bg-amber-50', bar: 'bg-amber-500', heading: 'text-amber-900', chip: 'bg-white border-amber-300 text-amber-800', badge: 'bg-amber-600' },
} as const

const deliverables = [
  { name: 'Responsible-AI README', detail: 'a 2–3 minute skim: what the app does, who it\'s intended for, which models and services it uses, and what\'s explicitly out of scope' },
  { name: 'Model card', detail: 'intended use, data sources (if known), primary risks, and key metrics' },
  { name: 'Guardrails & safety controls', detail: 'what filters or rules are in place, and why (content safety thresholds, vendor guardrails, custom rules)' },
  { name: 'Evaluation checklist', detail: 'grounding checks, hallucination spot-checks, and known failure cases' },
  { name: 'Ops notes', detail: 'costs and quotas, what you monitor, and privacy considerations' },
]

function ProjectCard({ project, color }: { project: Project; color: Category['color'] }) {
  const s = colorStyles[color]
  return (
    <div className={`px-4 py-3 bg-white border rounded-xl transition-all ${project.example ? 'border-gray-300 shadow-sm' : 'border-gray-200'} hover:shadow-md hover:-translate-y-0.5`}>
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm font-semibold text-gray-900">{project.name}</p>
        {project.example && (
          project.exampleHref ? (
            <a
              href={project.exampleHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#ffffff', textDecoration: 'none' }}
              className={`shrink-0 px-2 py-0.5 text-[10px] font-semibold rounded-full ${s.badge}`}
            >
              ⭐ our example — see the build
            </a>
          ) : (
            <span className={`shrink-0 px-2 py-0.5 text-[10px] font-semibold text-white rounded-full ${s.badge}`}>
              ⭐ our example — guide coming soon
            </span>
          )
        )}
      </div>
      <p className="mt-1 text-xs leading-relaxed text-gray-600">{project.description}</p>
    </div>
  )
}

export default function ToolsPage() {
  return (
    <ResourcePageLayout
      title="Projects"
      subtitle="Pick a project. Make it yours. Build ideas that recruiters will remember."
      icon="🧩"
    >
      <div className="not-prose">
        <p className="text-sm leading-relaxed text-gray-700">
          The projects you build are often the first things recruiters and interviewers see. They usually
          speak louder than grades alone. Each category below maps to a skill employers currently screen for. Pick the
          project that matches what you want to make, then spin it in the direction of whatever you're passionate about:
          the descriptions are starting points, and the starred <strong>example projects</strong> are ones we're
          building ourselves so you can follow along with the code and a step-by-step guide.
        </p>

        <div className="px-5 py-4 mt-5 border border-gray-200 bg-gray-50 rounded-xl">
          <h2 className="text-base font-bold text-gray-900">Minimum deliverables (one-pager README + artifacts)</h2>
          <p className="mt-1 text-sm leading-relaxed text-gray-600">
            These are what make your work complete, credible, and ready to put in front of a recruiter:
          </p>
          <ul className="mt-3 space-y-1.5">
            {deliverables.map((d) => (
              <li key={d.name} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="font-bold text-green-600">✓</span>
                <span>
                  <strong className="text-gray-900">{d.name}</strong> — {d.detail}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 space-y-6">
          {categories.map((cat) => {
            const s = colorStyles[cat.color]
            return (
              <div key={cat.title} className={`overflow-hidden border rounded-xl ${s.frame}`}>
                <div className={`h-1 ${s.bar}`} />
                <div className="p-4 sm:p-5">
                  <h2 className={`text-lg font-bold ${s.heading}`}>
                    {cat.emoji} {cat.title}
                  </h2>
                  <p className="mt-1 text-sm italic text-gray-600">{cat.tagline}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {cat.tech.map((t) => (
                      <span key={t} className={`px-2 py-0.5 text-[11px] font-medium border rounded-full ${s.chip}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 space-y-2.5">
                    {cat.projects.map((project) => (
                      <ProjectCard key={project.name} project={project} color={cat.color} />
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </ResourcePageLayout>
  )
}
