import { useEffect, useState } from 'react'

export interface TocItem {
  id: string
  label: string
}

const circleColors = [
  'bg-teal-100 text-teal-700',
  'bg-blue-100 text-blue-700',
  'bg-purple-100 text-purple-700',
]

export default function TocSidebar({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    function onScroll() {
      // Active section = last heading above the top 30% of the viewport
      const viewportH = document.documentElement.clientHeight || window.innerHeight
      let current = ''
      for (const { id } of items) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= viewportH * 0.3) {
          current = id
        }
      }
      setActiveId(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [items])

  function handleClick(e: React.MouseEvent, id: string) {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav aria-label="Table of contents" className="px-4 py-3.5 border rounded-xl border-slate-200 bg-slate-100">
      <h2 className="mb-2 text-lg font-semibold text-gray-800">Table of Contents</h2>
      <ol>
        {items.map(({ id, label }, i) => {
          const active = activeId === id
          return (
            <li key={id} className="border-b border-slate-200 last:border-b-0">
              <a
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className="flex items-center gap-3 py-3 group"
              >
                <span
                  className={`flex items-center justify-center w-7 h-7 text-xs font-semibold rounded-full shrink-0 transition-colors ${
                    active ? 'bg-blue-600 text-white' : circleColors[i % circleColors.length]
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className={`text-sm transition-colors ${
                    active
                      ? 'font-semibold text-gray-900'
                      : 'font-medium text-gray-600 group-hover:text-gray-900'
                  }`}
                >
                  {label}
                </span>
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
