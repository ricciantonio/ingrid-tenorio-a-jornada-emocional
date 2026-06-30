## Objetivo
Preencher a moldura vazia na seção CTA final com a imagem do Imgur fornecida.

## Alteração
- `src/components/site/CtaFinal.tsx`: substituir o import de `@/assets/ingrid/ingrid-cta.jpeg.asset.json` por uma constante apontando para `https://i.imgur.com/oZiJr2D.jpg` (URL direta correspondente ao link `https://imgur.com/oZiJr2D`).

## Verificação
- `curl -I` para confirmar 200 e tipo de imagem.
- `bun run build` para garantir que nenhum import quebrou.
