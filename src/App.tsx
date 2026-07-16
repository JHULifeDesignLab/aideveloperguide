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
import LearningPage from './pages/resources/LearningPage'
import GitHubPage from './pages/resources/GitHubPage'
import ToolsPage from './pages/resources/ToolsPage'
import CommunityPage from './pages/resources/CommunityPage'
import ResumePage from './pages/resources/ResumePage'
import LinkedInPage from './pages/resources/LinkedInPage'
import KeywordsIndexPage from './pages/KeywordsIndexPage'
import WhereToStartPage from './pages/WhereToStartPage'

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Static utility pages — must be listed before /:vendor to take priority */}
        <Route path="/keywords" element={<KeywordsIndexPage />} />
        <Route path="/where-to-start" element={<WhereToStartPage />} />
        <Route path="/resources" element={<Navigate to="/resources/resume" replace />} />
        <Route path="/resources/resume" element={<ResumePage />} />
        <Route path="/resources/linkedin" element={<LinkedInPage />} />
        <Route path="/resources/projects" element={<ToolsPage />} />
        <Route path="/resources/learning" element={<LearningPage />} />
        <Route path="/resources/github" element={<GitHubPage />} />
        <Route path="/resources/community" element={<CommunityPage />} />

        {/* Dynamic topic routes — all vendor landing pages and their sub-pages */}
        <Route path="/:vendor" element={<TopicPage />} />
        <Route path="/:vendor/:page" element={<TopicPage />} />
      </Routes>
    </Layout>
  )
}

export default App
