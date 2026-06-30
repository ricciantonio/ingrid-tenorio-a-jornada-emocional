## Objetivo
Substituir a seção "Como funciona" atual (layout em grid com foto lateral e lista de passos) por um carousel de 3 cards interativos, com navegação por setas e indicadores de posição (dots).

## Alterações

### 1. Componente `src/components/site/ComoFunciona.tsx` — Reescrita completa
- **Remover**: layout atual com foto lateral e lista numerada de 4 passos.
- **Adicionar**: carousel usando o componente `Carousel` já existente em `src/components/ui/carousel.tsx` (baseado em Embla Carousel).
- **3 cards** com os seguintes conteúdos:

  **CARD 1 — "Como começamos?"**
  Antes de qualquer coisa, existe uma conversa inicial. Esse não é o início do tratamento, é o momento de entender sua história.
  - Seu histórico emocional
  - O que você já viveu
  - O que te trouxe até aqui
  - Essa primeira conversa é gratuita (até 40 minutos).

  **CARD 2 — "Como funciona o processo?"**
  Trabalho apenas com acompanhamento mensal usando a técnica TRG (Tratamento de Reprocessamento Generativo).
  - Avaliações mensais
  - Exercícios semanais
  - Acompanhamento contínuo

  **CARD 3 — "Qual é o objetivo?"**
  Reprocessar como seu cérebro e corpo armazenam experiências, para que deixem de gerar reações automáticas.
  - Redução de reações emocionais intensas
  - Quebra de padrões repetitivos
  - Mais clareza emocional e mental
  - Estabilidade interna
  - Mudança na forma de reagir

- **Navegação**: setas laterais (esquerda/direita) e indicadores de posição (dots abaixo dos cards).
- **Estilo**: manter o visual elegante do site — cores douradas (`--gold`, `--accent`), fundo escuro ou tom quente compatível, tipografia `font-display`, bordas refinadas e sombras suaves. Cards com boa legibilidade e espaçamento generoso.
- **Responsivo**: em mobile, os cards ocupam largura total com padding adequado para toque.

### 2. Dependências
- O projeto já possui `embla-carousel-react` instalado (usado em `src/components/ui/carousel.tsx`). Nenhuma instalação adicional é necessária.

### 3. Arquivos envolvidos
- `src/components/site/ComoFunciona.tsx` — reescrita completa.
- `src/routes/index.tsx` — não requer alteração (já importa e renderiza `<ComoFunciona />`).

### 4. Verificação
- Compilar o projeto para garantir ausência de erros de tipo (TypeScript) e imports corretos.
- Verificar responsividade em diferentes viewports.