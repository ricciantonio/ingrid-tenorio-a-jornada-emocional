import { Quote } from "lucide-react";
import sobrePhoto from "@/assets/ingrid/ingrid-sobre.jpeg.asset.json";
import cafe1 from "@/assets/ingrid/cafe-europeu-1.jpeg.asset.json";
import cafe2 from "@/assets/ingrid/cafe-europeu-2.jpeg.asset.json";

export function Sobre() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -left-4 -top-4 -z-10 h-full w-full rounded-[1.75rem] bg-secondary/30"
              style={{ transform: "rotate(2deg)" }}
            />
            <div className="overflow-hidden rounded-[1.75rem] shadow-soft ring-1 ring-border">
              <img
                src={sobrePhoto.url}
                alt="Ingrid Tenorio em seu consultório em Londrina"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
            <span className="absolute -right-3 top-6 inline-flex rotate-3 items-center gap-2 rounded-full border border-accent/50 bg-cream px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brown shadow-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> 4 anos de experiência
            </span>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Quem é
            </span>
            <h2 className="mt-3 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Ingrid Tenorio
            </h2>
            <div className="gold-divider mt-6 w-24" />

            <div className="mt-7 space-y-5 text-lg leading-relaxed text-foreground/80">
              <p>
                Terapeuta emocional com{" "}
                <span className="text-foreground">4 anos dedicados</span> a transformar vidas em
                Londrina. Acolho cada história com escuta atenta, presença e um olhar humanizado —
                porque sentir é o primeiro passo para se libertar.
              </p>
              <p>
                Meu trabalho une técnica e sensibilidade para que você compreenda o que se passa por
                dentro, ressignifique dores e construa uma vida com mais consciência, propósito e
                liberdade.
              </p>
            </div>

            <blockquote className="mt-8 rounded-2xl border border-accent/40 bg-cream/70 p-6 shadow-soft">
              <Quote className="h-5 w-5 text-primary" />
              <p className="mt-3 font-display text-xl italic leading-snug text-foreground">
                “Eu trabalho com você para identificar padrões limitantes e construir uma vida com
                clareza e poder.”
              </p>
            </blockquote>
          </div>
        </div>

        {/* Atmosphere mosaic */}
        <div className="mt-20 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
          <figure className="overflow-hidden rounded-[1.5rem] ring-1 ring-border">
            <img
              src={cafe1.url}
              alt="Atmosfera europeia retrô — café parisiense aconchegante"
              className="h-72 w-full object-cover sm:h-96"
              loading="lazy"
            />
          </figure>
          <figure className="overflow-hidden rounded-[1.5rem] ring-1 ring-border">
            <img
              src={cafe2.url}
              alt="Boulangerie europeia — aconchego e ritual"
              className="h-72 w-full object-cover sm:h-96"
              loading="lazy"
            />
          </figure>
        </div>
        <p className="mt-6 text-center font-display text-lg italic text-muted-foreground">
          Um espaço com ritmo europeu, calor humano e tempo para você.
        </p>
      </div>
    </section>
  );
}
