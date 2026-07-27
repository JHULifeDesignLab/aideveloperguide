import { useState } from 'react'
import { Link } from 'react-router-dom'
import keywordsData from '../content/other/keywords.json'

type Item = { name: string; description: string; to: string | null }

const deploymentItems: Item[] = [
  { name: 'Vercel', description: 'Zero-config deploys for modern frontend frameworks.', to: null },
  { name: 'Render', description: 'Simple hosting for full-stack apps, APIs, and databases.', to: null },
  { name: 'Netlify', description: 'Popular zero-config host for frontend and JAMstack apps.', to: null },
]

const deploymentExtras: Item[] = [
  { name: 'Railway', description: 'Deploy full-stack apps and databases with no infra setup.', to: null },
  { name: 'Streamlit Community Cloud', description: 'Free hosting for Python data and AI app demos.', to: null },
]

const productStackItems: Item[] = [
  { name: 'RAG', description: 'Pattern for grounding LLM responses in your own data.', to: '/rag' },
  { name: 'LangChain', description: 'Framework for building apps with LLMs and agents.', to: null },
  { name: 'MCP', description: 'Open protocol for connecting LLMs to tools and data.', to: null },
]

const productStackExtras: Item[] = [
  { name: 'Hugging Face', description: 'Hub for sharing and deploying ML models and datasets.', to: null },
  { name: 'Vector Databases', description: 'Store embeddings for fast semantic search.', to: null },
]

const devToolsItems: Item[] = [
  { name: 'Claude Code', description: "Anthropic's agentic coding assistant for terminal and IDE.", to: '/claude-code' },
  { name: 'Cursor', description: 'AI-first code editor with inline edits and chat.', to: null },
  { name: 'GitHub Copilot', description: "Microsoft's AI pair programmer integrated directly into your editor.", to: null },
]

const devToolsExtras: Item[] = [
  { name: 'Windsurf', description: 'Agentic editor that plans and executes multi-file changes.', to: null },
  { name: 'Gemini CLI', description: "Google's open-source AI agent for the terminal.", to: null },
]

/* pillColors — used by the daily keywords ticker, insert back for spring launch
const pillColors = [
  'text-red-400',
  'text-indigo-400',
  'text-purple-400',
  'text-teal-400',
  'text-emerald-400',
  'text-yellow-400',
  'text-blue-400',
  'text-pink-400',
]
*/

function CategoryCard({ name, description, to }: Item) {
  if (!to) {
    return (
      <div className="px-4 py-3 bg-white border border-gray-100 rounded-xl cursor-default">
        <div className="flex items-start justify-between gap-2">
          <p className="text-sm font-semibold text-gray-300">{name}</p>
          <span className="shrink-0 px-2 py-0.5 text-[10px] font-medium text-gray-400 bg-gray-50 border border-gray-200 rounded-full">
            coming soon
          </span>
        </div>
        <p className="text-xs text-gray-300 mt-0.5">{description}</p>
      </div>
    )
  }
  return (
    <Link to={to} className="block">
      <div className="px-4 py-3 transition-all duration-200 bg-white border border-gray-200 cursor-pointer rounded-xl hover:shadow-md hover:-translate-y-1 hover:-rotate-1">
        <p className="text-sm font-semibold text-gray-900">{name}</p>
        <p className="text-xs text-gray-400 mt-0.5">{description}</p>
      </div>
    </Link>
  )
}

const sectionStyles = {
  teal: {
    frame: 'border-teal-100 bg-teal-50',
    bar: 'bg-teal-500',
    heading: 'text-teal-800',
    button: 'text-teal-600 border-teal-200 hover:bg-teal-50 hover:text-teal-800',
  },
  blue: {
    frame: 'border-blue-100 bg-blue-50',
    bar: 'bg-blue-500',
    heading: 'text-blue-900',
    button: 'text-blue-600 border-blue-200 hover:bg-blue-50 hover:text-blue-900',
  },
  purple: {
    frame: 'border-purple-100 bg-purple-50',
    bar: 'bg-purple-500',
    heading: 'text-purple-900',
    button: 'text-purple-600 border-purple-200 hover:bg-purple-50 hover:text-purple-900',
  },
} as const

function CategorySection({
  title,
  color,
  items,
  extras,
  delay,
}: {
  title: string
  color: keyof typeof sectionStyles
  items: Item[]
  extras: Item[]
  delay: number
}) {
  const [expanded, setExpanded] = useState(false)
  const s = sectionStyles[color]

  return (
    <div
      className={`overflow-hidden border rounded-xl fade-in-up ${s.frame}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`h-1 ${s.bar}`} />
      <div className="p-3.5">
        <h2 className={`mb-3 text-base font-bold ${s.heading}`}>{title}</h2>
        <div className="space-y-2">
          {items.map((item) => (
            <CategoryCard key={item.name} {...item} />
          ))}
        </div>
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            expanded ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0 mt-0'
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="space-y-2">
              {extras.map((item) => (
                <CategoryCard key={item.name} {...item} />
              ))}
            </div>
          </div>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className={`w-full py-2 mt-2.5 text-xs font-medium transition-colors bg-white border rounded-xl ${s.button}`}
        >
          <span className={`inline-block transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}>⇓</span>{' '}
          {expanded ? 'less' : 'more'}
        </button>
      </div>
    </div>
  )
}

type Keyword = typeof keywordsData.keywords[number]

export default function HomePage() {
  const keywords = keywordsData.keywords
  const [hoveredKw, setHoveredKw] = useState<Keyword | null>(null)
  const [popupPos, setPopupPos] = useState({ x: 0, y: 0 })

  // Word of the day: rotates once per day through the keyword list
  const dayIndex = Math.floor(Date.now() / 86_400_000)
  const dailyKw = keywords[dayIndex % keywords.length]

  function handleMouseEnter(kw: Keyword, e: React.MouseEvent) {
    setHoveredKw(kw)
    setPopupPos({ x: e.clientX, y: e.clientY })
  }

  function handleMouseMove(e: React.MouseEvent) {
    setPopupPos({ x: e.clientX, y: e.clientY })
  }

  return (
    <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
      {/* Hero: centered content on the left 3/4, image slot on the right 1/4 */}
      <div className="grid items-center grid-cols-1 gap-6 py-4 md:grid-cols-4">
        <div className="flex flex-col items-center text-center md:col-span-3">
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
            JHU Life Design Lab
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
            AI Development Guide
          </h1>
          <p className="max-w-md mt-3 text-sm text-gray-600">
            Get started with generative AI and software development. Build real
            experience you can put on your resume!
          </p>
          <Link to="/where-to-start" className="inline-block px-5 py-2 mt-4 text-sm font-medium text-white transition-colors bg-slate-500 rounded-xl hover:bg-slate-400">
            I don't know where to start →
          </Link>
        </div>

        <div className="flex-col items-center hidden md:flex">
          <div className="float-bob">
            <img
              src={`${import.meta.env.BASE_URL}coding-bird.png`}
              alt="Coding bluejay mascot"
              className="w-full max-w-[220px] h-auto md:-translate-x-2"
            />
          </div>
          <Link
            to="/keywords"
            className="relative px-3 py-1.5 mt-3 bg-white border border-gray-200 rounded-full shadow-sm bubble-pop hover:shadow-md transition-shadow md:-translate-x-2"
            onMouseEnter={(e) => handleMouseEnter(dailyKw, e)}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setHoveredKw(null)}
          >
            <span className="absolute w-3 h-3 rotate-45 -translate-x-1/2 bg-white border-t border-l border-gray-200 -top-1.5 left-1/2" />
            <span className="relative text-xs text-gray-500">Word of the day: </span>
            <span className="relative text-xs font-bold text-blue-500">{dailyKw.term}</span>
          </Link>
        </div>
      </div>

      {/* ticker, insert back for spring launch
        <div className="mt-2">
        <span className="block mb-1.5 text-xs text-gray-500">Daily Keywords (hover to see explanations!):</span>
        <Link to="/keywords" className="block">
        <div className="py-2 overflow-hidden border border-gray-200 rounded-lg bg-gray-50 cursor-pointer hover:border-gray-300 transition-colors">
          <div className="marquee-track">
            {[...keywords, ...keywords].map((kw, i) => (
              <span
                key={i}
                className={`font-semibold mx-8 whitespace-nowrap text-sm cursor-default ${pillColors[i % pillColors.length]}`}
                onMouseEnter={(e) => handleMouseEnter(kw, e)}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setHoveredKw(null)}
              >
                {kw.term}
              </span>
            ))}
          </div>
        </div>
        </Link>
      </div> */}

      {hoveredKw && (
        <div
          className="fixed z-50 p-4 bg-white border border-gray-200 shadow-xl pointer-events-none w-72 rounded-xl"
          style={{
            left: Math.min(popupPos.x + 16, window.innerWidth - 304),
            top: popupPos.y + 16,
          }}
        >
          <p className="text-base font-bold text-gray-900">{hoveredKw.term}</p>
          {hoveredKw.fullName !== hoveredKw.term && (
            <p className="text-xs text-gray-400 mt-0.5">{hoveredKw.fullName}</p>
          )}
          <p className="mt-2 text-sm leading-relaxed text-gray-600">{hoveredKw.explanation}</p>
          <p className="mt-3 text-xs italic text-gray-400">Origin: {hoveredKw.origin}</p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 mt-4 sm:grid-cols-3">
        <CategorySection title="Product Stack" color="blue" items={productStackItems} extras={productStackExtras} delay={0} />
        <CategorySection title="Dev Tools +" color="purple" items={devToolsItems} extras={devToolsExtras} delay={120} />
        <CategorySection title="Deployment" color="teal" items={deploymentItems} extras={deploymentExtras} delay={240} />
      </div>
    </div>
  )
}
