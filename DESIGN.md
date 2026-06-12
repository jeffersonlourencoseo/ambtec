---
name: Ambtec Consultoria Ambiental
description: Site institucional de captação para consultoria ambiental premium no Rio de Janeiro.
colors:
  brand-deep: "oklch(20% 0.05 145)"
  brand-mid: "oklch(50% 0.09 145)"
  brand-light: "oklch(80% 0.05 145)"
  paper: "oklch(98% 0.005 145)"
  cream: "oklch(95% 0.01 145)"
  ink: "oklch(20% 0.02 145)"
  ink-muted: "oklch(50% 0.03 145)"
  gold: "oklch(75% 0.12 85)"
  gold-deep: "oklch(60% 0.12 85)"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, Cambria, serif"
    fontSize: "clamp(2.5rem, 6vw, 5rem)"
    fontWeight: 700
    lineHeight: "0.95"
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Playfair Display, Georgia, Cambria, serif"
    fontSize: "clamp(1.75rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: "1"
    letterSpacing: "-0.02em"
  title:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "normal"
  body:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: "1.65"
    letterSpacing: "normal"
  label:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: "1.4"
    letterSpacing: "0.05em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  full: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
  2xl: "80px"
  3xl: "120px"
components:
  button-primary:
    backgroundColor: "{colors.brand-deep}"
    textColor: "{colors.paper}"
    rounded: "{rounded.full}"
    padding: "16px 40px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.brand-mid}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.brand-deep}"
    rounded: "{rounded.full}"
    padding: "16px 40px"
    typography: "{typography.label}"
  card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.lg}"
    padding: "32px"
---

# Design System: Ambtec

## 1. Overview

**Creative North Star: "A Mata Sob o Lápis"**

A Ambtec não vende sustentabilidade como quem vende promessa. Vende experiência de campo: quem protocola é quem pisa na lama. O design traduz essa integração técnica em uma linguagem visual de autoridade silenciosa — verde profundo, papel frio, ouro quase escondido. Não é um site de ONG; é um relatório técnico que sabe se vestir para decisores ocupados.

A estética rejeita explicitamente o verde-amarelo institucional e o visual genérico de startups SaaS. Em vez disso, evoca a Mata Atlântica em estado bruto: sombra, musgo, profundidade. O visitante não deve pensar "site verde"; deve pensar "quem fez isso entende de floresta".

**Key Characteristics:**
- **Autoridade silenciosa:** a cor mais forte é a mais escura; não há gritos
- **Superfície como papel técnico:** fundos quase brancos, com micro tonalidade verde que só se revela no contraste
- **Ouro como rareza:** dourado aparece em <5% da superfície, sempre como detalhe, nunca como voz principal
- **Edição única por viewport:** um display headline por seção; um comando visual por fold

## 2. Colors

A paleta vem do chão da floresta, não da folha nova: sombra, musgo, casca úmida. O verde profundo carrega a marca; os neutros garantem legibilidade; o ouro pontua onde o olho precisa de guia.

### Primary
- **Mata Profunda** (`oklch(20% 0.05 145)`): A cor da marca. Usada em headings, botões primários, e como fundo de seções hero. Carrega autoridade e vínculo com a floresta atlântica em estado bruto — não o verde-claro de campanhas ambientalistas.
- **Mata Média** (`oklch(50% 0.09 145)`): Estado hover do botão primário, links ativos, e preenchimento de ícones em estados de interação.
- **Mata Suave** (`oklch(80% 0.05 145)`): Backgrounds de destaque técnico, bordas sutis, e hover em superfícies neutras.

### Neutral
- **Papel Frio** (`oklch(98% 0.005 145)`): Fundo de leitura universal. Off-white quase neutro, com micro tonalidade verde que só se revela quando contrastado com branco puro. Usado em 60%+ da superfície.
- **Creme Mata** (`oklch(95% 0.01 145)`): Fundo de seções alternadas. Um passo mais quente que o Papel, usado para criar ritmo sem introduzir nova cor.
- **Tinta** (`oklch(20% 0.02 145)`): Corpo de texto e headings. Quase preto com halo verde ínfimo — o suficiente para não ser um cinza genérico.
- **Tinta Suave** (`oklch(50% 0.03 145)`): Descrições, legendas, metadados. Contraste ≥4.5:1 contra Papel Frio.

### Accent
- **Ouro Restrito** (`oklch(75% 0.12 85)`): Aparições esporádicas — números de destaque ("200+"), hover sutis em ícones, detalhes decorativos. Nunca como gradiente de texto. Sua escassez é o luxo.
- **Ouro Profundo** (`oklch(60% 0.12 85)`): Estado pressionado ou foco do ouro. Usado para criar profundidade no acento.

### Named Rules
**The One Voice Rule.** A cor de marca (verde profundo) aparece em ≤30% de qualquer tela. O resto é neutro. Sua contenção é o que a torna premium.

## 3. Typography

**Display Font:** Playfair Display (com Georgia, Cambria, serif)
**Body Font:** DM Sans (com ui-sans-serif, system-ui, sans-serif)

**Character:** A combinação serif de transição + sans humanista cria um contraste editorial: o display trajasse para a importância, o body desarma para a clareza. Não é uma revista; é um relatório técnico que sabe se vestir. A serif carrega a herança institucional; a sans garante que o decisor leia até o fim sem fadiga.

### Hierarchy
- **Display** (700, clamp(2.5rem, 6vw, 5rem), line-height 0.95): Hero headlines e títulos de seção. Apenas um por viewport. Letter-spacing -0.03em (piso de -0.04em; nunca mais apertado).
- **Headline** (700, clamp(1.75rem, 4vw, 3rem), line-height 1): Subtítulos e nomes de seção.
- **Title** (600, 1.25rem, line-height 1.2): Títulos de cards e componentes.
- **Body** (400, 1.125rem, line-height 1.65): Texto corrido. Máximo 70ch por parágrafo. `text-wrap: pretty` em blocos longos.
- **Label** (500, 0.875rem, letter-spacing 0.05em, uppercase): Navegação, botões, metadados. Tracking amplo para autoridade silenciosa.

### Named Rules
**The One Display Rule.** Apenas um elemento display por viewport/seção. Dois headlines grandes competem; um comanda.

## 4. Elevation

O sistema é predominantemente flat. A profundidade vem de variação de tonalidade (alternância entre Papel Frio e Creme Mata) e de bordas sutis, não de sombras. Sombras são restritas a estados de hover em elementos interativos — nunca como decoração permanente.

### Shadow Vocabulary
- **Sutil** (`0 4px 20px -4px rgba(20, 40, 30, 0.08)`): Cards e containers em repouso. Quase invisível, apenas o suficiente para separar do fundo.
- **Elevado** (`0 12px 40px -8px rgba(20, 40, 30, 0.15)`): Estado hover de cards e botões secundários.

### Named Rules
**The Flat-By-Default Rule.** Superfícies são planas em repouso. Sombras aparecem apenas como resposta a estado (hover, foco, elevação). Nenhuma sombra "para enfeitar".

## 5. Components

### Buttons
- **Shape:** Pill completo (border-radius: 9999px). A forma orgânica contrasta com a rigidez técnica do conteúdo.
- **Primary:** Fundo Mata Profunda, texto Papel Frio, padding 16px 40px. Tipografia Label (uppercase, tracking amplo).
- **Hover / Focus:** Fundo transita para Mata Média, leve translação Y -2px, sombra Elevada. Transição 300ms ease-out-quart.
- **Secondary:** Borda 1px sólida brand-deep, fundo transparente, texto brand-deep. Hover: fundo preenche com brand-deep, texto inverte para Papel Frio.
- **Ghost (sobre fundo escuro):** Fundo branco/10, backdrop-blur sutil, borda branca/20, texto branco. Usado apenas em hero.

### Cards / Containers
- **Corner Style:** 12px radius. Sofisticado sem ser "insanamente arredondado".
- **Background:** Papel Frio ou Creme Mata. Nunca gradiente.
- **Shadow Strategy:** Sutil em repouso; Elevado no hover.
- **Border:** Opcional, 1px com Tinta Suave a 10% de opacidade. Quando presente, é uma linha de separação, não um destaque.
- **Internal Padding:** 32px (2rem).

### Inputs / Fields
- **Style:** Fundo Papel Frio, borda 1px Tinta Suave a 20%, radius 8px. Sem sombra.
- **Focus:** Borda muda para brand-mid, outline de 2px brand-light a 30% de opacidade. Nenhum glow colorido.
- **Error:** Borda em tom terroso escuro (nunca vermelho vivo; viola a paleta).

### Navigation
- **Estilo:** Fixo no topo, fundo transparente que ganha backdrop-blur e fundo mata-900/80 após 50px de scroll.
- **Tipografia:** Label, uppercase, tracking amplo.
- **Hover:** Linha dourada inferior animada, largura 0 → 100%, duração 300ms.
- **Mobile:** Drawer full-screen, fundo mata-900/98, navegação em display font em tamanho grande.

### Signature Component: Glass Card Hero
Usado apenas sobre fundos escuros (hero, sobre nós). Fundo em gradiente de brand-deep para brand-mid com backdrop-blur e textura noise sutil. Não é glassmorphism decorativo; é uma necessidade funcional de legibilidade sobre imagem de floresta.

## 6. Do's and Don'ts

### Do:
- **Do** manter o verde profundo como voz principal. Sua profundidade transmite experiência de campo.
- **Do** usar Papel Frio como fundo universal. Clareza antes de "personalidade".
- **Do** reservar o ouro para números de destaque e micro-interações. Sua escassez é o luxo.
- **Do** testar headings em breakpoints mobile antes de implementar. Textos longos + clamp grande + grid estreito = estouro.
- **Do** usar `text-wrap: balance` em h1–h3 e `text-wrap: pretty` em body.
- **Do** respeitar `prefers-reduced-motion`: reveals de scroll devem ter fallback instantâneo.

### Don't:
- **Don't** usar gradient text (`background-clip: text`). Proibido. Texto em gradiente é decorativo, nunca significativo.
- **Don't** repetir tiny uppercase tracked eyebrow em cada seção. Um kicker intencional é voz; um em cada seção é scaffolding de IA.
- **Don't** usar bordas laterais coloridas (`border-left` ou `border-right` > 1px) como acento em cards, list items ou callouts. Nunca intencional.
- **Don't** usar verde-claro vivo (#4CAF50, #2E7D32, qualquer verde acima de oklch 65%). Qualquer verde deve ser profundo ou musgo; folha nova é clichê de ONG.
- **Don't** usar glassmorphism como padrão. Backdrop-blur é raro e proposital (apenas sobre imagens de hero), ou inexistente.
- **Don't** usar border-radius > 16px em cards ou seções. Topo em 12–16px; pill (9999px) apenas para botões e tags.
- **Don't** usar sombras com blur ≥ 16px em conjunto com bordas de 1px no mesmo elemento. Escolha um: borda sólida OU sombra definida, nunca ambos como decoração.
- **Don't** usar o template hero-metric (big number + small label + supporting stats + gradient accent). É clichê SaaS e quebra o registro brand.
