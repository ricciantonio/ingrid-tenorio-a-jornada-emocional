## Objetivo
Substituir as imagens atuais (servidas via `.asset.json` no CDN do Lovable) pelas URLs do Imgur fornecidas, em todos os componentes do site.

## Mapeamento

| Asset atual | Nova URL |
|---|---|
| `ingrid-hero.jpeg` | https://i.imgur.com/xRgTROM.jpg |
| `ingrid-sobre.jpeg` | https://i.imgur.com/fPpqVvW.jpg |
| `cafe-europeu-1.jpeg` | https://i.imgur.com/jG3uTfS.jpg |
| `cafe-europeu-2.jpeg` | https://i.imgur.com/RSeUYUl.jpg |
| `ingrid-especialidades.jpeg` | *(não fornecida — manter atual)* |
| `ingrid-comofunciona.jpeg` | *(não fornecida — manter atual, caso ainda referenciada)* |
| `ingrid-cta.jpeg` | *(não fornecida — manter atual)* |

Você listou 4 URLs e escreveu "adicione as outras conforme necessário". Existem 3 outras imagens no projeto (especialidades, comofunciona, cta) sem URL correspondente. **Vou manter essas três como estão** (continuam servidas pelo CDN atual). Se quiser substituí-las também, me envie os links.

## Alterações

Em cada componente que importa um `.asset.json`, trocar o import por uma constante string com a URL do Imgur:

- `src/components/site/Hero.tsx` → `heroPhoto.url` vira `"https://i.imgur.com/xRgTROM.jpg"`
- `src/components/site/Sobre.tsx` → `sobrePhoto.url`, `cafe1.url`, `cafe2.url` viram as 3 URLs correspondentes
- `src/routes/index.tsx` → `heroPhoto.url` usado em `og:image`/`twitter:image` vira a URL do Imgur do hero

Os arquivos `.asset.json` em `src/assets/ingrid/` não serão deletados (caso queira reverter), mas deixam de ser importados quando trocados.

## Verificação

1. `bun run build` para confirmar que não há imports quebrados.
2. Playwright headless em `http://localhost:8080`: abrir a home, rolar a página, capturar screenshots desktop (1280) e mobile (390), e checar no console que cada `<img>` substituído tem `naturalWidth > 0` (Imgur carregou).

## Observação sobre Imgur

Imgur às vezes aplica hotlink protection e devolve a imagem "removed.png" quando carregada fora do imgur.com. Se isso acontecer no preview, a alternativa recomendada é fazer upload das imagens como assets do projeto (`lovable-assets create`) em vez de hotlink. Vou avisar caso a verificação detecte.
