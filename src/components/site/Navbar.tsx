import { useEffect, useState } from "react";
import { Instagram, MapPin } from "lucide-react";
import { INSTAGRAM_URL, WHATSAPP_URL } from "./WhatsappFloat";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#faq", label: "Dúvidas" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <span className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Ingrid Tenorio
          </span>
          <span className="hidden items-center gap-1 text-xs uppercase tracking-[0.18em] text-muted-foreground sm:inline-flex">
            <span className="h-px w-4 bg-accent" /> Terapeuta Emocional
          </span>
        </a>

        <nav className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative rounded-md px-3 py-2 text-sm text-foreground/80 transition-colors hover:text-foreground"
                >
                  {l.label}
                  <span className="absolute inset-x-3 -bottom-0.5 h-px scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @iingridtenorioo"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-accent hover:text-foreground sm:inline-flex"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition-colors hover:bg-primary/90"
          >
            <MapPin className="h-3.5 w-3.5" />
            <span>Agendar</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
