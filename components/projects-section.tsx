const projects = [
  {
    title: "Enterprise Knowledge Intelligence Platform",
    description:
      "A secure RAG-based knowledge platform that ingests PDFs, Word documents, and web content, then enables citation-backed natural language querying using semantic search, hybrid retrieval, grounding validation, and hallucination checks.",
    tech: ["LangChain", "OpenAI", "Pinecone", "Next.js", "RAGAS"],
  },
  {
    title: "Domain LLM Adaptation & Evaluation Pipeline",
    description:
      "An end-to-end LLM fine-tuning and evaluation pipeline for domain-specific datasets, covering data preprocessing, LoRA/QLoRA training, experiment tracking, model evaluation, deployment automation, and version control.",
    tech: ["PyTorch", "Hugging Face", "LoRA", "MLflow", "AWS SageMaker"],
  },
  {
    title: "Multimodal Agentic Workflow System",
    description:
      "A multimodal AI agent system that processes text, image, and audio inputs, routes tasks through specialized agents, performs tool calling, maintains memory, and executes multi-step reasoning workflows with fallback handling.",
    tech: ["GPT-4o", "Whisper", "CLIP", "LangGraph", "FastAPI"],
  },
  {
    title: "LLM Observability & Guardrails Dashboard",
    description:
      "A production-focused monitoring dashboard for LLM applications that tracks token usage, latency, retrieval quality, grounding score, hallucination risk, failed tool calls, user feedback, and system health alerts.",
    tech: ["Prometheus", "Grafana", "RAGAS", "OpenTelemetry", "FastAPI"],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 lg:px-24 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Projects
            </h2>
          </div>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group p-6 rounded-lg border border-border hover:border-primary/50 transition-colors bg-background/50"
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
