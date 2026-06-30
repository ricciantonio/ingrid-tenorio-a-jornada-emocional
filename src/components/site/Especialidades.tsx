import { Brain, Compass, Sparkles } from "lucide-react";

const items = [
  {
    icon: Brain,
    title: "Transtornos Emocionais Graves",
    desc: "Tratamento especializado para ansiedade, depressão, luto, trauma e crises emocionais.",
  },
  {
    icon: Sparkles,
    title: "Eliminação de Padrões Limitantes",
    desc: "Identifique e transforme os padrões inconscientes que impedem o seu crescimento, suas relações e a sua felicidade.",
  },
  {
    icon: Compass,
    title: "Clareza, Identidade e Poder Pessoal",
    desc: "Construa uma identidade sólida, sinta-se seguro de si e recupere o seu poder pessoal para viver com propósito.",
  },
];

export function Especialidades() {
  return (
    <section id="especialidades" className="relative bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Especialidades</span>
          <h2 className="mt-3 font-display text-4xl leading-tight text-foreground sm:text-5xl">
            Onde posso te acompanhar
          </h2>
          <div className="gold-divider mx-auto mt-6 w-24" />
          <p className="mt-6 text-lg text-foreground/75">
            Três frentes de trabalho construídas para devolver leveza, direção e autonomia emocional a quem busca
            transformação real.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group relative flex flex-col gap-5 rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-warm"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="font-display text-2xl leading-tight text-foreground">{title}</h3>
              <p className="text-foreground/75">{desc}</p>
              <span className="mt-auto text-sm font-medium uppercase tracking-[0.18em] text-accent">· · ·</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
