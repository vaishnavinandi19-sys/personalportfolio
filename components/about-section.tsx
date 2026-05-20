export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              About
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              I&apos;m a{" "}
              <span className="text-primary font-medium">
                Generative AI expert
              </span>{" "}
              passionate about pushing the boundaries of what&apos;s possible
              with artificial intelligence. My work lies at the intersection of
              research and practical application, creating AI solutions that
              deliver real business value.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              In the past, I&apos;ve had the opportunity to work across a variety
              of settings — from{" "}
              <span className="text-foreground font-medium">
                leading tech companies
              </span>{" "}
              and{" "}
              <span className="text-foreground font-medium">
                innovative startups
              </span>{" "}
              to{" "}
              <span className="text-foreground font-medium">
                research institutions
              </span>
              . I&apos;ve led teams in developing LLM-powered applications,
              fine-tuning models for specific domains, and building AI
              infrastructure that scales.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              When I&apos;m not working with AI, I enjoy learning about emerging AI trends, and playing with my cat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
