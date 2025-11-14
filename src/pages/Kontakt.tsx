import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

const Kontakt = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Lassen Sie uns reden
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ich bin offen für neue Herausforderungen, spannende Projekte und kreative Zusammenarbeit. 
              Ob Sie eine Idee haben, Unterstützung bei einem Projekt benötigen oder einfach nur ein 
              Gespräch führen möchten – ich freue mich, von Ihnen zu hören.
            </p>
          </div>

          {/* Contact Options */}
          <div className="space-y-6">
            {/* Email */}
            <a 
              href="mailto:igor.tanaskoski@example.com"
              className="block"
            >
              <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-accent group cursor-pointer">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      E-Mail
                    </h2>
                    <p className="text-muted-foreground">
                      igor.tanaskoski@example.com
                    </p>
                  </div>
                  <Button 
                    variant="outline"
                    className="border-border group-hover:border-primary group-hover:text-primary transition-colors"
                  >
                    Nachricht senden
                  </Button>
                </div>
              </div>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-accent group cursor-pointer">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      LinkedIn
                    </h2>
                    <p className="text-muted-foreground">
                      Vernetzen Sie sich mit mir auf LinkedIn
                    </p>
                  </div>
                  <Button 
                    variant="outline"
                    className="border-border group-hover:border-primary group-hover:text-primary transition-colors"
                  >
                    Profil ansehen
                  </Button>
                </div>
              </div>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-accent group cursor-pointer">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Github className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      GitHub
                    </h2>
                    <p className="text-muted-foreground">
                      Sehen Sie sich meine Repositories und Beiträge an
                    </p>
                  </div>
                  <Button 
                    variant="outline"
                    className="border-border group-hover:border-primary group-hover:text-primary transition-colors"
                  >
                    Profil ansehen
                  </Button>
                </div>
              </div>
            </a>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Ich antworte in der Regel innerhalb von 24-48 Stunden.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
