"use client";

import { ArrowDown } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-4xl">
        <p className="text-muted-foreground text-sm md:text-base mb-4 tracking-wide">
          Hello, I&apos;m
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          VAISHNAVI NANDIKANDI
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6">
          <span className="text-primary italic">Generative AI Engineer.</span>{" "}
          Building intelligent solutions that transform how businesses operate.
        </p>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-12">
          I specialize in designing and deploying cutting-edge AI systems, from
          large language models to custom machine learning pipelines. Currently
          focused on making AI accessible and impactful for organizations of all
          sizes.
        </p>
        <button
          onClick={() => scrollToSection("about")}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
