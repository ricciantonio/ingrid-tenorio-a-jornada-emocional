import comoPhoto from "@/assets/ingrid/ingrid-comofunciona.jpeg.asset.json";

const steps = [
  {
    n: "01",
    title: "Agendamento",
    desc: "Você fala comigo direto pelo WhatsApp e marcamos o melhor horário para nosso primeiro encontro.",
  },
  {
    n: "02",
    title: "Sessão de acolhimento",
    desc: "Um espaço seguro para escutar sua história, entender o momento atual e mapear o que precisa de cuidado.",
  },
  {
    n: "03",
    title: "Plano personalizado",
    desc: "Construímos juntos um caminho de trabalho com objetivos claros e ferramentas adaptadas a você.",
  },
  {
    n: "04",
    title: "Acompanhamento contínuo",
    desc: "Encontros recorrentes para sustentar a transformação, ajustar a rota e celebrar cada conquista.",
  },
];

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Como funciona
            </span>
            <h2 className="mt-3 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Um caminho pensado para você.
            </h2>
            <div className="gold-divider mt-6 w-24" />
            <p className="mt-6 text-lg text-foreground/75">
              Quatro passos simples para começar — sem burocracia, com o cuidado e a clareza que você
              merece.
            </p>

            <div className="relative mt-10 overflow-hidden rounded-[1.5rem] ring-1 ring-border">
              <img
                src={comoPhoto.url}
                alt="Ingrid Tenorio sorrindo em ambiente acolhedor"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <ol className="relative space-y-6 border-l border-dashed border-accent/50 pl-6 sm:pl-10">
            {steps.map((s) => (
              <li key={s.n} className="relative">
                <span className="absolute -left-[2.1rem] top-1 flex h-9 w-9 items-center justify-center rounded-full bg-primary font-display text-sm text-primary-foreground shadow-soft sm:-left-[3rem]">
                  {s.n}
                </span>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-colors hover:border-accent">
                  <h3 className="font-display text-2xl text-foreground">{s.title}</h3>
                  <p className="mt-2 text-foreground/75">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
