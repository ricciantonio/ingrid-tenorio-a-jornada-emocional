import { ArrowRight, Instagram, MapPin, Sparkles } from "lucide-react";
import heroPhoto from "@/assets/ingrid/ingrid-hero.jpeg.asset.json";
import { INSTAGRAM_URL, WHATSAPP_URL } from "./WhatsappFloat";

export function Hero() {
  return (
    <section
      id="top"
      className="texture-grain relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      <div className="texture-grain-overlay" />
      {/* warm radial wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 20%, color-mix(in oklab, var(--accent) 22%, transparent), transparent 70%), radial-gradient(45% 40% at 10% 90%, color-mix(in oklab, var(--secondary) 28%, transparent), transparent 70%)",
        }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col items-start gap-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-cream/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-brown shadow-soft">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            Londrina · Paraná
          </span>

          <h1 className="font-display text-5xl leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Transforme suas
            <span className="block italic text-primary">emoções</span>
            em liberdade.
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-foreground/75 sm:text-xl">
            Acompanhamento emocional especializado para quem quer viver com{" "}
            <span className="text-foreground">clareza, identidade</span> e{" "}
            <span className="text-foreground">poder pessoal</span>.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-medium text-primary-foreground shadow-warm transition-all hover:bg-primary/90 hover:shadow-soft"
            >
              Agende sua sessão inicial
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-cream/60 px-5 py-3.5 text-base font-medium text-foreground transition-colors hover:border-accent"
            >
              <Instagram className="h-4 w-4" />
              @iingridtenorioo
            </a>
          </div>

          <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-accent" />
            <span>4 anos transformando vidas em Londrina</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          {/* decorative frame */}
          <div
            aria-hidden
            className="absolute -inset-3 -z-10 rounded-[2rem] border border-accent/40"
            style={{ transform: "rotate(-2deg)" }}
          />
          <div
            aria-hidden
            className="absolute -bottom-6 -right-4 -z-10 h-32 w-32 rounded-full bg-secondary/40 blur-2xl"
          />
          <div className="overflow-hidden rounded-[1.75rem] bg-card shadow-warm ring-1 ring-border">
            <img
              src={heroPhoto.url}
              alt="Ingrid Tenorio, terapeuta emocional, em um momento sereno"
              className="aspect-[4/5] w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-5 left-6 rounded-full border border-accent/40 bg-background/95 px-4 py-2 text-sm font-medium text-foreground shadow-soft backdrop-blur">
            <span className="font-display text-base italic text-primary">Ingrid Tenorio</span>{" "}
            <span className="text-muted-foreground">· Terapeuta Emocional</span>
          </div>
        </div>
      </div>
    </section>
  );
}
