import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const items = [
  {
    q: "Qual é a duração de uma sessão?",
    a: "Cada sessão tem aproximadamente 50 minutos — tempo dedicado integralmente a você, com escuta atenta e ferramentas terapêuticas adaptadas ao seu momento.",
  },
  {
    q: "Como funciona o acompanhamento?",
    a: "Após a sessão inicial de acolhimento, construímos juntos um plano personalizado. Os encontros seguintes acontecem com frequência regular para sustentar e aprofundar a transformação.",
  },
  {
    q: "Qual é a frequência recomendada?",
    a: "Geralmente, sessões semanais oferecem o melhor ritmo de cuidado. A frequência ideal é definida com você, considerando seu momento, seus objetivos e sua rotina.",
  },
  {
    q: "Como posso agendar?",
    a: "O agendamento é simples e direto pelo WhatsApp (+55 43 98854-9807). Você me conta um pouco sobre o que está buscando e combinamos o melhor horário.",
  },
  {
    q: "Atende pacientes em Londrina e região?",
    a: "Sim. Atendo online para pessoas de outras cidades — com a mesma qualidade de presença e cuidado.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Dúvidas frequentes</span>
          <h2 className="mt-3 font-display text-4xl leading-tight text-foreground sm:text-5xl">Antes de começar</h2>
          <div className="gold-divider mx-auto mt-6 w-24" />
        </div>

        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {items.map((it, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-6 shadow-soft data-[state=open]:border-accent"
            >
              <AccordionTrigger className="text-left font-display text-lg text-foreground hover:no-underline sm:text-xl">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-foreground/75">{it.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
