import { Brain, Cpu, Database, MessageSquare, Sparkles, Workflow } from "lucide-react";

const expertise = [
  {
    icon: Brain,
    title: "Large Language Models",
    description:
      "Expert in GPT, Claude, Llama, and other LLMs. Fine-tuning, prompt engineering, and RAG implementations.",
  },
  {
    icon: Sparkles,
    title: "Generative AI Applications",
    description:
      "Building production-ready AI applications including chatbots, content generation, and code assistants.",
  },
  {
    icon: MessageSquare,
    title: "Conversational AI",
    description:
      "Designing intelligent conversational systems with context awareness and multi-turn dialogue capabilities.",
  },
  {
    icon: Database,
    title: "Vector Databases & RAG",
    description:
      "Implementing retrieval-augmented generation with Pinecone, Weaviate, and custom embedding solutions.",
  },
  {
    icon: Workflow,
    title: "AI Infrastructure",
    description:
      "Architecting scalable AI pipelines, model deployment, and MLOps best practices.",
  },
  {
    icon: Cpu,
    title: "Model Training & Fine-tuning",
    description:
      "Custom model training, LoRA/QLoRA fine-tuning, and optimization for specific use cases.",
  },
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-20 px-6 md:px-12 lg:px-24 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Expertise
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="group p-6 rounded-lg bg-background/50 border border-border hover:border-primary/50 transition-colors"
              >
                <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
