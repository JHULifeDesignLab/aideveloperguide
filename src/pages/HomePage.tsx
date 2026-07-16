import { useState } from 'react'
import { Link } from 'react-router-dom'
import keywordsData from '../content/other/keywords.json'

const deploymentItems = [
  { name: 'Amazon AWS', description: 'Leading cloud platform for hosting and scaling apps.', to: '/amazon' },
  { name: 'Google Cloud', description: 'Cloud suite strong in data, ML, and Kubernetes.', to: '/google' },
  { name: 'Microsoft Azure', description: 'Enterprise cloud deeply integrated with Microsoft tools.', to: '/microsoft' },
]

const productStackItems = [
  { name: 'LangChain', description: 'Framework for building apps with LLMs and agents.', to: null },
  { name: 'RAG', description: 'Pattern for grounding LLM responses in your own data.', to: '/rag' },
  { name: 'Hugging Face', description: 'Hub for sharing and deploying ML models and datasets.', to: null },
]

const devToolsItems = [
  { name: 'Claude Code', description: "Anthropic's agentic coding assistant for terminal and IDE.", to: '/claude-code' },
  { name: 'Cursor', description: 'AI-first code editor with inline edits and chat.', to: null },
  { name: 'GitHub Copilot', description: "Microsoft's AI pair programmer integrated directly into your editor.", to: null },
]

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

function CategoryCard({ name, description, to }: { name: string; description: string; to: string | null }) {
  if (!to) {
    return (
      <div className="px-4 py-3 bg-white border border-gray-100 rounded-xl cursor-default">
        <p className="text-sm font-semibold text-gray-300">{name}</p>
        <p className="text-xs text-gray-300 mt-0.5">{description}</p>
      </div>
    )
  }
  return (
    <Link to={to} className="block">
      <div className="px-4 py-3 transition-shadow bg-white border border-gray-200 cursor-pointer rounded-xl hover:shadow-md">
        <p className="text-sm font-semibold text-gray-900">{name}</p>
        <p className="text-xs text-gray-400 mt-0.5">{description}</p>
      </div>
    </Link>
  )
}

type Keyword = typeof keywordsData.keywords[number]

export default function HomePage() {
  const keywords = keywordsData.keywords
  const [hoveredKw, setHoveredKw] = useState<Keyword | null>(null)
  const [popupPos, setPopupPos] = useState({ x: 0, y: 0 })

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

        <div className="hidden md:flex items-center justify-center">
          <img
            src={`${import.meta.env.BASE_URL}coding-bird.png`}
            alt="Coding bluejay mascot"
            className="w-full max-w-[220px] h-auto md:-translate-x-2"
          />
        </div>
      </div>

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
      </div>

      {hoveredKw && (
        <div
          className="fixed z-50 p-4 bg-white border border-gray-200 shadow-xl pointer-events-none w-72 rounded-xl"
          style={{ left: popupPos.x + 16, top: popupPos.y + 16 }}
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
        {/* Deployment — teal */}
        <div className="overflow-hidden border border-teal-100 rounded-xl bg-teal-50">
          <div className="h-1 bg-teal-500" />
          <div className="p-3.5">
            <h2 className="mb-3 text-base font-bold text-teal-800">Deployment</h2>
            <div className="space-y-2">
              {deploymentItems.map((item) => (
                <CategoryCard key={item.name} {...item} />
              ))}
            </div>
            <button className="w-full py-2 mt-2.5 text-xs font-medium text-teal-600 transition-colors bg-white border border-teal-200 rounded-xl hover:bg-teal-50 hover:text-teal-800">
              ⇓ more
            </button>
          </div>
        </div>

        {/* Product Stack — blue */}
        <div className="overflow-hidden border border-blue-100 rounded-xl bg-blue-50">
          <div className="h-1 bg-blue-500" />
          <div className="p-3.5">
            <h2 className="mb-3 text-base font-bold text-blue-900">Product Stack</h2>
            <div className="space-y-2">
              {productStackItems.map((item) => (
                <CategoryCard key={item.name} {...item} />
              ))}
            </div>
            <button className="w-full py-2 mt-2.5 text-xs font-medium text-blue-600 transition-colors bg-white border border-blue-200 rounded-xl hover:bg-blue-50 hover:text-blue-900">
              ⇓ more
            </button>
          </div>
        </div>

        {/* Dev Tools — purple */}
        <div className="overflow-hidden border border-purple-100 rounded-xl bg-purple-50">
          <div className="h-1 bg-purple-500" />
          <div className="p-3.5">
            <h2 className="mb-3 text-base font-bold text-purple-900">Dev Tools +</h2>
            <div className="space-y-2">
              {devToolsItems.map((item) => (
                <CategoryCard key={item.name} {...item} />
              ))}
            </div>
            <button className="w-full py-2 mt-2.5 text-xs font-medium text-purple-600 transition-colors bg-white border border-purple-200 rounded-xl hover:bg-purple-50 hover:text-purple-900">
              ⇓ more
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
