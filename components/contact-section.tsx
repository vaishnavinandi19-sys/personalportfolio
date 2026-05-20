import { Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/vaishnavigenai/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:vaishnavinandi19@gmail.com", label: "Email" },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Contact
            </h2>
          </div>
          <div>
            <p className="text-xl md:text-2xl text-foreground mb-6 text-balance">
              If you&apos;d like to discuss a project or just say hi, I&apos;m
              always down to chat.
            </p>
            <p className="text-muted-foreground mb-6">
              vaishnavinandi19@gmail.com
            </p>
            <a
              href="mailto:vaishnavinandi19@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors mb-12"
            >
              <Mail className="w-5 h-5" />
              Get in touch
            </a>
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Find me online
              </p>
              <div className="flex items-center gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={link.label}
                  >
                    <link.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
