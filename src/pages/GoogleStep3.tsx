import StepPageLayout from '../components/StepPageLayout'

export default function GoogleStep3() {
  return (
    <StepPageLayout vendor="google" step="responsible-ai">
      <div className="prose prose-lg max-w-none">
        <h2>Goal</h2>
        <p>Show that you can <strong>communicate risks and limitations</strong> just like a professional AI team.</p>
        
        <ol>
          <li><strong>Write a Model Card / README section</strong> covering purpose, data, failure modes, and safety filters.</li>
          <li><strong>Explore the Model Context Protocol (MCP)</strong> for standardized risk disclosures and user expectations.</li>
          <li><strong>Publish transparently</strong>—add your documentation to GitHub or your app's "About" page.</li>
        </ol>
        
        <p>A concise Model Card strengthens your résumé bullet or LinkedIn post ("Built a Q&A bot with PaLM 2 and documented scope & ethics").</p>
      </div>
    </StepPageLayout>
  )
}
