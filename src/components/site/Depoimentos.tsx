import { Quote, Star } from "lucide-react";

const depoimentos = [
  {
    texto:
      "Com Ingrid consegui ver o mundo com outros olhos e desenvolver uma força interior que não conhecia. Aprendi a confiar em mim, a lidar melhor com meus sentimentos e deixei de me preocupar tanto com julgamentos alheios. As pessoas ao meu redor também perceberam minha transformação. Sou imensamente grata por esse novo eu!",
    local: "Cliente, Londrina",
  },
  {
    texto:
      "Entrei na terapia com certa desconfiança, pois já tinha tentado outras abordagens sem sucesso. Mas desde a primeira sessão com Ingrid percebi que era diferente — ela realmente me via. Em 10 sessões vivenciei transformações profundas. O mais surpreendente é que minha situação financeira também começou a melhorar. Estou vivendo uma nova vida. Infinitamente grata!",
    local: "Cliente, Londrina",
  },
  {
    texto:
      "Ingrid me ajudou a me compreender de uma forma que eu nunca tinha experimentado. Ela explicou cada aspecto da minha personalidade com precisão impressionante. Além de ser uma profissional excelente e uma grande inspiração, Ingrid trouxe clareza sobre quem realmente sou. Uma experiência transformadora!",
    local: "Cliente, Londrina",
  },
  {
    texto:
      "Ingrid me ensinou a começar cada dia com intenção e fé. Em meu período mais difícil, percebi que Deus me colocou exatamente onde eu precisava — e Ingrid foi parte dessa jornada providencial. Ela me guiou emocionalmente e me ajudou a encontrar direção e propósito. Você sempre terá um lugar especial no meu coração.",
    local: "Cliente, Londrina",
  },
];

export function Depoimentos() {
  return (
    <section className="relative bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Histórias
          </span>
          <h2 className="mt-3 font-display text-4xl leading-tight text-foreground sm:text-5xl">
            Quem caminha com a Ingrid
          </h2>
          <div className="gold-divider mx-auto mt-6 w-24" />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {depoimentos.map((dep, i) => (
            <article
              key={i}
              className="flex flex-col gap-5 rounded-3xl border border-primary/30 bg-secondary/25 p-8 shadow-soft"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>

              <Quote className="h-5 w-5 text-primary/60" />

              <p className="font-display text-lg italic leading-relaxed text-foreground/90">
                "{dep.texto}"
              </p>

              <div className="mt-auto pt-4">
                <span className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  — {dep.local}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
