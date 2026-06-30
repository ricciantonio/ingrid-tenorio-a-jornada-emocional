import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    id: 1,
    title: "Como começamos?",
    intro:
      "Antes de qualquer coisa, existe uma conversa inicial. Esse não é o início do tratamento, é o momento de entender sua história.",
    items: [
      "Seu histórico emocional",
      "O que você já viveu",
      "O que te trouxe até aqui",
    ],
    highlight: "Essa primeira conversa é gratuita (até 40 minutos).",
  },
  {
    id: 2,
    title: "Como funciona o processo?",
    intro:
      "Trabalho apenas com acompanhamento mensal usando a técnica TRG (Tratamento de Reprocessamento Generativo).",
    items: [
      "Avaliações mensais",
      "Exercícios semanais",
      "Acompanhamento contínuo",
    ],
    highlight: null,
  },
  {
    id: 3,
    title: "Qual é o objetivo?",
    intro:
      "Reprocessar como seu cérebro e corpo armazenam experiências, para que deixem de gerar reações automáticas.",
    items: [
      "Redução de reações emocionais intensas",
      "Quebra de padrões repetitivos",
      "Mais clareza emocional e mental",
      "Estabilidade interna",
      "Mudança na forma de reagir",
    ],
    highlight: null,
  },
];

export function ComoFunciona() {
  const [active, setActive] = useState(0);
  const total = cards.length;

  const goTo = useCallback(
    (index: number) => {
      setActive(((index % total) + total) % total);
    },
    [total],
  );

  const prev = useCallback(() => goTo(active - 1), [active, goTo]);
  const next = useCallback(() => goTo(active + 1), [active, goTo]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  return (
    <section id="como-funciona" className="relative py-24 sm:py-32">
      {/* warm radial wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(50% 45% at 50% 0%, color-mix(in oklab, var(--accent) 18%, transparent), transparent 70%), radial-gradient(40% 35% at 50% 100%, color-mix(in oklab, var(--secondary) 20%, transparent), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Como funciona
          </span>
          <h2 className="mt-3 font-display text-4xl leading-tight text-foreground sm:text-5xl">
            Um caminho pensado para você.
          </h2>
          <div className="gold-divider mx-auto mt-6 w-24" />
          <p className="mt-6 text-lg text-foreground/75">
            Três etapas simples — sem burocracia, com o cuidado e a clareza que você merece.
          </p>
        </div>

        {/* carousel */}
        <div className="relative mt-14 sm:mt-18">
          {/* track */}
          <div className="overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="w-full shrink-0 px-0 sm:px-16"
                >
                  <div className="mx-auto max-w-xl rounded-2xl border border-border bg-card p-8 shadow-soft sm:p-10">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-display text-sm text-primary">
                      0{card.id}
                    </span>
                    <h3 className="mt-5 font-display text-3xl text-foreground sm:text-4xl">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-foreground/80 leading-relaxed">
                      {card.intro}
                    </p>

                    {card.items.length > 0 && (
                      <ul className="mt-6 space-y-3">
                        {card.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-foreground/80"
                          >
                            <span
                              aria-hidden
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {card.highlight && (
                      <p className="mt-6 font-medium italic text-primary">
                        {card.highlight}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* arrows */}
          <button
            onClick={prev}
            className="absolute top-1/2 -left-0 -translate-y-1/2 z-10 hidden sm:flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-soft backdrop-blur transition-colors hover:border-accent hover:text-accent"
            aria-label="Card anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 -right-0 -translate-y-1/2 z-10 hidden sm:flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-soft backdrop-blur transition-colors hover:border-accent hover:text-accent"
            aria-label="Próximo card"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* dots + mobile arrows */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-sm transition-colors hover:border-accent hover:text-accent sm:hidden"
            aria-label="Card anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2.5">
            {cards.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-7 bg-primary"
                    : "w-2.5 bg-border hover:bg-accent/60"
                }`}
                aria-label={`Ir para card ${i + 1}`}
                aria-current={i === active ? "true" : undefined}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-sm transition-colors hover:border-accent hover:text-accent sm:hidden"
            aria-label="Próximo card"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
