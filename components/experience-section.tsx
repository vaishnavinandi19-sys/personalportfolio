import { ExternalLink } from "lucide-react";

const experiences = [
  {
    period: "2024 — Present",
    title: "Senior AI Engineer",
    company: "AI Research Lab",
    link: "#",
    description:
      "Leading the development of enterprise-grade LLM applications. Architecting RAG systems and fine-tuning models for domain-specific tasks. Managing a team of 5 AI engineers.",
    skills: ["LLMs", "RAG", "Python", "LangChain", "AWS"],
  },
  {
    period: "2022 — 2024",
    title: "Machine Learning Engineer",
    company: "Tech Startup",
    link: "#",
    description:
      "Built and deployed production ML models for natural language processing. Developed conversational AI systems serving 100K+ users. Implemented MLOps pipelines for continuous model improvement.",
    skills: ["PyTorch", "Transformers", "Docker", "Kubernetes", "GCP"],
  },
  {
    period: "2020 — 2022",
    title: "Data Scientist",
    company: "Enterprise Corp",
    link: "#",
    description:
      "Developed predictive models and NLP solutions for business intelligence. Created automated reporting systems and dashboards. Collaborated with cross-functional teams to deliver AI-driven insights.",
    skills: ["Python", "TensorFlow", "SQL", "Spark", "Tableau"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Experience
            </h2>
          </div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group grid md:grid-cols-[140px_1fr] gap-4 md:gap-8"
              >
                <p className="text-sm text-muted-foreground font-mono">
                  {exp.period}
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
                    {exp.title} · {exp.company}
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
