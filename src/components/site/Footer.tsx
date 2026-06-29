import { Instagram, MapPin, MessageCircle } from "lucide-react";
import { INSTAGRAM_URL, WHATSAPP_URL } from "./WhatsappFloat";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40 py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <span className="font-display text-2xl text-foreground">Ingrid Tenorio</span>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Terapeuta Emocional
            </p>
            <div className="gold-divider mt-5 w-20" />
            <p className="mt-5 max-w-xs text-sm text-foreground/70">
              Acompanhamento emocional especializado para quem busca clareza, identidade e poder
              pessoal.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg text-foreground">Navegação</h3>
            <ul className="mt-5 space-y-2 text-sm">
              {[
                { href: "#top", label: "Início" },
                { href: "#sobre", label: "Sobre" },
                { href: "#especialidades", label: "Especialidades" },
                { href: "#como-funciona", label: "Como funciona" },
                { href: "#faq", label: "Dúvidas" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-foreground/70 transition-colors hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg text-foreground">Contato</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground/80 transition-colors hover:text-primary"
                >
                  <MessageCircle className="h-4 w-4 text-primary" />
                  +55 43 98854-9807
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground/80 transition-colors hover:text-primary"
                >
                  <Instagram className="h-4 w-4 text-primary" />
                  @iingridtenorioo
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-foreground/80">
                <MapPin className="h-4 w-4 text-primary" />
                Londrina, Paraná
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Ingrid Tenorio · Todos os direitos reservados.
          </p>
          <p className="italic">
            Atendimentos confidenciais e em respeito ao sigilo profissional.
          </p>
        </div>
      </div>
    </footer>
  );
}
