import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import GooglePage from './pages/GooglePage'
import AmazonPage from './pages/AmazonPage'
import MicrosoftPage from './pages/MicrosoftPage'
import GoogleStep1 from './content/google/step-1.mdx'
import GoogleStep2 from './content/google/step-2.mdx'
import GoogleStep3 from './content/google/step-3.mdx'
import GoogleResources from './content/google/resources.mdx'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/google" element={<GooglePage />} />
        <Route path="/google/step-1" element={<GoogleStep1 />} />
        <Route path="/google/step-2" element={<GoogleStep2 />} />
        <Route path="/google/step-3" element={<GoogleStep3 />} />
        <Route path="/google/resources" element={<GoogleResources />} />
        <Route path="/amazon" element={<AmazonPage />} />
        <Route path="/microsoft" element={<MicrosoftPage />} />
      </Routes>
    </Layout>
  )
}

export default App
