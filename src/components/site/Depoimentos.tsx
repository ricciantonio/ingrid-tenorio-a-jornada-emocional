import { Quote } from "lucide-react";

const placeholders = [
  "Espaço reservado para o depoimento de uma cliente.",
  "Em breve, uma história real de transformação.",
  "Sua experiência poderá estar aqui em breve.",
];

export function Depoimentos() {
  return (
    <section className="relative bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Histórias
          </span>
          <h2 className="mt-3 font-display text-4xl leading-tight text-foreground sm:text-5xl">
            Quem caminha com a Ingrid
          </h2>
          <div className="gold-divider mx-auto mt-6 w-24" />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {placeholders.map((text, i) => (
            <article
              key={i}
              className="flex flex-col gap-4 rounded-3xl border border-dashed border-accent/50 bg-card/60 p-8 text-foreground/70 shadow-soft"
            >
              <Quote className="h-5 w-5 text-accent" />
              <p className="font-display text-xl italic leading-snug">{text}</p>
              <div className="mt-auto flex items-center gap-3 pt-4">
                <span className="h-9 w-9 rounded-full bg-secondary/40" />
                <span className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                  Em breve
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
