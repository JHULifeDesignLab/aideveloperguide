import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import TopicPage from './pages/TopicPage'
import GitHubPage from './pages/resources/GitHubPage'
import ToolsPage from './pages/resources/ToolsPage'
import ResumePage from './pages/resources/ResumePage'
import LinkedInPage from './pages/resources/LinkedInPage'
import ResourcesPage from './pages/resources/ResourcesPage'
import KeywordsIndexPage from './pages/KeywordsIndexPage'
import WhereToStartPage from './pages/WhereToStartPage'
import LlmBasicsPage from './pages/LlmBasicsPage'
import AiToolsPage from './pages/AiToolsPage'
import AgentsPage from './pages/AgentsPage'

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Static utility pages — must be listed before /:vendor to take priority */}
        <Route path="/keywords" element={<KeywordsIndexPage />} />
        <Route path="/where-to-start" element={<WhereToStartPage />} />
        <Route path="/llm-basics" element={<LlmBasicsPage />} />
        <Route path="/ai-tools" element={<AiToolsPage />} />
        <Route path="/agents" element={<AgentsPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/resources/resume" element={<ResumePage />} />
        <Route path="/resources/linkedin" element={<LinkedInPage />} />
        <Route path="/resources/projects" element={<ToolsPage />} />
        <Route path="/resources/github" element={<GitHubPage />} />
        {/* Old standalone pages now live on the combined /resources page */}
        <Route path="/resources/learning" element={<Navigate to="/resources" replace />} />
        <Route path="/resources/community" element={<Navigate to="/resources" replace />} />
        <Route path="/resources/hopkins" element={<Navigate to="/resources" replace />} />

        {/* Dynamic topic routes — all vendor landing pages and their sub-pages */}
        <Route path="/:vendor" element={<TopicPage />} />
        <Route path="/:vendor/:page" element={<TopicPage />} />
      </Routes>
    </Layout>
  )
}

export default App
