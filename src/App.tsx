import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import GooglePage from './pages/GooglePage'
import AmazonPage from './pages/AmazonPage'
import MicrosoftPage from './pages/MicrosoftPage'
import GoogleStep1 from './pages/GoogleStep1'
import GoogleStep2 from './pages/GoogleStep2'
import GoogleStep3 from './pages/GoogleStep3'
import GoogleResourcesPage from './pages/GoogleResourcesPage'
import AmazonStep1 from './pages/AmazonStep1'
import AmazonStep2 from './pages/AmazonStep2'
import AmazonStep3 from './pages/AmazonStep3'
import AmazonResourcesPage from './pages/AmazonResourcesPage'
import MicrosoftStep1 from './pages/MicrosoftStep1'
import MicrosoftStep2 from './pages/MicrosoftStep2'
import MicrosoftStep3 from './pages/MicrosoftStep3'
import MicrosoftResourcesPage from './pages/MicrosoftResourcesPage'
// New Resources pages
import ResourcesPage from './pages/ResourcesPage'
import LearningPage from './pages/resources/LearningPage'
import GitHubPage from './pages/resources/GitHubPage'
import ToolsPage from './pages/resources/ToolsPage'
import CommunityPage from './pages/resources/CommunityPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/google" element={<GooglePage />} />
        <Route path="/google/step-1" element={<GoogleStep1 />} />
        <Route path="/google/step-2" element={<GoogleStep2 />} />
        <Route path="/google/step-3" element={<GoogleStep3 />} />
        <Route path="/google/resources" element={<GoogleResourcesPage />} />
        <Route path="/amazon" element={<AmazonPage />} />
        <Route path="/amazon/step-1" element={<AmazonStep1 />} />
        <Route path="/amazon/step-2" element={<AmazonStep2 />} />
        <Route path="/amazon/step-3" element={<AmazonStep3 />} />
        <Route path="/amazon/resources" element={<AmazonResourcesPage />} />
        <Route path="/microsoft" element={<MicrosoftPage />} />
        <Route path="/microsoft/step-1" element={<MicrosoftStep1 />} />
        <Route path="/microsoft/step-2" element={<MicrosoftStep2 />} />
        <Route path="/microsoft/step-3" element={<MicrosoftStep3 />} />
        <Route path="/microsoft/resources" element={<MicrosoftResourcesPage />} />
        {/* New Resources routes */}
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/resources/learning" element={<LearningPage />} />
        <Route path="/resources/github" element={<GitHubPage />} />
  <Route path="/resources/projects" element={<ToolsPage />} />
        <Route path="/resources/community" element={<CommunityPage />} />
      </Routes>
    </Layout>
  )
}

export default App
