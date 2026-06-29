# Site — Ingrid Tenorio, Terapeuta Emocional

Landing page em TanStack Start, estética europeia retrô e aconchegante com tons quentes (terracota, ocre, bege, dourado suave), tipografia serif clássica + sans-serif elegante. **Usaremos as 7 fotos reais da Ingrid enviadas** — nada de fotos geradas por IA.

## Fotos da Ingrid (uploads do usuário)

Subir todas via `lovable-assets` (CDN, sem inflar o repo) e referenciar por JSON pointer:

| Uso no site | Foto |
|---|---|
| **Hero** (retrato principal, vibe acolhedora) | `11.23.47.jpeg` — close pensativa, suéter cinza |
| **Sobre** (apresentação profissional) | `11.23.48 (3).jpeg` — blazer azul, escritório com quadro |
| **Especialidades — bloco intro / mosaico** | `11.23.48 (1).jpeg` — blazer creme, postura reflexiva |
| **Como funciona — imagem lateral** | `11.23.48.jpeg` — blazer creme + camisa listrada |
| **CTA Final / banner** | `11.23.48 (2).jpeg` — sorrindo, gesto de atenção |
| **Galeria/atmosfera europeia** (Sobre ou rodapé visual) | `11.23.47 (1).jpeg` — café parisiense + `11.23.47 (2).jpeg` — boulangerie |

As duas fotos do café europeu reforçam o conceito visual "europeu retrô com aconchego" — entram como bloco de atmosfera/lifestyle na seção Sobre (mosaico de 2 imagens) costurando o tema visual da marca.

## Design system (src/styles.css)

Tokens em oklch baseados na paleta sugerida pelo usuário:
- `--background`: branco creme (#FAFAF5)
- `--foreground`: marrom escuro
- `--primary`: terracota (#C85A54)
- `--secondary`: bege acaramelado (#D4A574)
- `--accent`: dourado suave (#D4AF37)
- `--muted`: cinza arenoso
- Extras: `--color-ocre`, `--color-brown`, `--gradient-warm`, `--shadow-soft`, textura grain SVG sutil
- Border radius generoso (2xl/3xl), cantos suaves retrô

Fontes via `<link>` no `__root.tsx`:
- Títulos: **Cormorant Garamond** (serif clássica europeia)
- Corpo: **Inter** (sans-serif elegante)

## Estrutura de arquivos

```
src/routes/
  __root.tsx          (meta SEO + Google Fonts link + WhatsApp flutuante global)
  index.tsx           (landing — monta as seções)
src/components/site/
  Navbar.tsx          (fixa, blur, links âncora)
  Hero.tsx            (headline + foto Ingrid + CTA + badge Londrina)
  Sobre.tsx           (bio + retrato + mosaico atmosfera europeia + badge 4 anos)
  Especialidades.tsx  (3 cards com ícones lucide)
  ComoFunciona.tsx    (timeline 4 passos + foto lateral)
  Depoimentos.tsx     (3 placeholders "espaço reservado")
  Faq.tsx             (Accordion shadcn, 5 perguntas)
  CtaFinal.tsx        (banner terracota com foto + CTA WhatsApp)
  Footer.tsx          (contato + links + privacidade)
  WhatsappFloat.tsx   (botão flutuante canto inferior direito)
src/assets/
  ingrid-hero.jpeg.asset.json
  ingrid-sobre.jpeg.asset.json
  ingrid-especialidades.jpeg.asset.json
  ingrid-comofunciona.jpeg.asset.json
  ingrid-cta.jpeg.asset.json
  cafe-europeu-1.jpeg.asset.json
  cafe-europeu-2.jpeg.asset.json
```

## Conteúdo por seção

1. **Hero** — Headline "Transforme suas emoções em liberdade", subheadline, badge "Londrina-PR" com ícone MapPin, CTA primário "Agende sua sessão inicial" (link WhatsApp com mensagem pré-preenchida), CTA secundário Instagram. Foto Hero à direita em moldura arredondada com leve overlay dourado e textura papel atrás.
2. **Sobre** — Retrato principal à esquerda, texto à direita com bio + diferencial em destaque, badge "4 anos de experiência". Abaixo, mosaico das 2 fotos do café europeu costurando a estética "europeu com aconchego".
3. **Especialidades** — 3 cards (Brain, Sparkles, Compass icons) com fundo creme, borda dourada sutil no hover.
4. **Como funciona** — Timeline vertical (mobile) / horizontal (desktop) com 4 passos numerados em círculos terracota, foto lateral em coluna desktop.
5. **Depoimentos** — 3 cards placeholder "Espaço reservado para depoimentos" para preenchimento futuro.
6. **FAQ** — Accordion shadcn com 5 perguntas/respostas redigidas em português.
7. **CTA Final** — Banner terracota com foto sorridente da Ingrid e CTA WhatsApp grande.
8. **Footer** — 3 colunas (contato, links rápidos, redes sociais) + linha de privacidade/confidencialidade.

## Elementos transversais

- **WhatsApp flutuante** fixo bottom-right com link `https://wa.me/5543988549807?text=Oi%20Ingrid,%20gostaria%20de%20agendar%20uma%20sessão`.
- **Navbar fixa** translúcida com blur, links âncora (#sobre, #especialidades, #como-funciona, #faq), Instagram + CTA WhatsApp compacto à direita.
- **Hover effects** suaves (300ms), leve elevação em cards, sublinhado dourado animado nos links.
- **Textura grain** SVG sutil em background do Hero e CTA final.

## SEO

Title: "Ingrid Tenorio — Terapia Emocional em Londrina, PR"
Description: "Acompanhamento emocional especializado em Londrina. Clareza, identidade e poder pessoal. 4 anos de experiência."
OG + Twitter meta com a foto Hero. H1 único no Hero. Alt text descritivo em todas imagens.

## Responsividade

Mobile-first. Hero empilha em mobile (foto acima). Timeline vira vertical. Mosaico do café vira coluna única. WhatsApp flutuante sempre visível.

## Fora de escopo

- Sem backend / formulário com persistência — contato é via WhatsApp/Instagram.
- Sem CMS para depoimentos — placeholders estáticos.
- Sem analytics / cookies.

Posso seguir e implementar?