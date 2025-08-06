export default function StepPageLayout({ children, vendor, step }) {
    const data = learningPaths[vendor].steps.find(s => s.id === step);
    return (
      <article className="prose mx-auto">
        <StepHero title={data.title} vendor={vendor} />
        <StepTimeline modules={data.modules} />
        {children}   {/* any extra narrative Markdown */}
      </article>
    );
  }