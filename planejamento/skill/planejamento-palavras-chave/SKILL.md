---
name: "planejamento-palavras-chave"
description: "Planeja palavras-chave de um site local (aluguel, cliente real, institucional): Semrush via SEO Pack, termos informacionais E comerciais/transacionais, limpeza por SERP, intenção, outlines H1/H2/H3 dos top 5 (via script) e mapa palavra→destino. Opcional: cronograma de backlinks de 16 semanas para o 8links."
---

# Planejamento de palavras-chave (qualquer site local)

Trabalho de **dados e análise**, não criativo. Engenharia reversa: descobrir o que o Google já aprovou e fazer melhor. Português informal e direto com o Jefferson; passo a passo; respostas curtas.

## Regras
1. **Nunca inventar** volume, SERP, concorrente ou preço. Tudo vem do Google ou do Semrush. Se divergirem, **vale o Google**. Sem dado: parar e pedir export/print.
2. Análise sempre na **cidade-alvo**: usar `pws=0` e colocar o nome da cidade na busca quando preciso.
3. Anotar a **data** de cada consulta (SERP muda em semanas; passou de ~40 dias, refazer a checagem das palavras principais).
4. Uma etapa por vez. Ao fim de cada uma, mostrar resumo curto e pedir o ok do Jefferson.
5. Gravar saídas numa pasta `planejamento/` do projeto e atualizar `planejamento/progresso.md`.
6. **Antes de pesquisar, conferir se já existe planejamento recente** (últimos ~40 dias) na pasta do cliente e no repositório do GitHub. Se existir, usar e pular a pesquisa. Se não, fazer e salvar nos dois lugares (pasta local + repo, via Chrome se o `gh`/MCP do GitHub não estiver disponível).
7. **Backlink nunca tem a URL do site como âncora.** Âncora = palavra-chave, variação, marca ou frase natural.

## Acesso ao navegador (temos Chrome)
- **Google**: `https://www.google.com.br/search?q=PALAVRA&hl=pt-BR&gl=BR&pws=0`. Ler com `get_page_text` (traz PAA, relacionadas, local pack). Para as URLs reais do top 10, rodar JS: `[...document.querySelectorAll('#rso a:has(h3)')].map(a=>{const u=new URL(a.href);return u.hostname+u.pathname})` (sem query string; o Chrome bloqueia retorno de URLs com parâmetros).
- **SEO Pack → Semrush**: `https://seopack.org/v2/dashboard/` → card SemRush → "ACESS SEMRUSH 01" (abre outra aba em `smr.seopacktools.com`). Banco **Brasil**. Limite: **30 consultas/dia e 200 linhas de export/dia**.
  - Keyword Magic direto por URL: `https://smr.seopacktools.com/analytics/keywordmagic/?q=PALAVRA&db=br`. Esperar ~15–20 s carregar. Extrair as linhas pelo texto da tela com JS (colunas: palavra, intenção, relevância, volume, KD, CPC) em vez de exportar, para poupar o limite.
  - Termos com cidade ("... rj", "... rio de janeiro") quase nunca têm volume próprio. Use a semente genérica e trate a cidade como variação/âncora. A ordem das palavras importa ("empresa de licenciamento ambiental", não "empresa licenciamento ambiental").
- **Outlines**: não abrir página por página. Usar um script Python (`urllib` + `html.parser`, User-Agent de navegador, `python -X utf8`) que baixa o HTML de cada URL e lista H1/H2/H3. Salvar o JSON bruto em `planejamento/exports/`. Páginas de governo, que dão timeout/403/404 ficam fora e isso é anotado.
- Regras do navegador: só Google, SEO Pack/Semrush, 8links, GitHub do cliente e os sites dos concorrentes; login/captcha o Jefferson resolve; nunca digitar senha.

## Etapa 0: Briefing
Perguntar (ou deduzir do repo): cidade-alvo e bairros, nicho/serviço, tipo de site (cliente real, afiliado, institucional, aluguel), domínio. Gravar em `planejamento/briefing.md`.

## Etapa 1: Coleta de palavras (três famílias, não só informacional)
Cobrir sempre:
1. **Comerciais/transacionais** (o que fecha contrato): "empresa de X", "consultoria X", "X + cidade/estado", "contratar X", "orçamento X", "preço/quanto custa X", "X perto de mim", "melhor empresa de X". No Semrush, filtrar **Intent = Commercial/Transactional**. Costumam ter volume baixo (50 a 300) mas CPC alto, KD baixo e SERP de homes de concorrentes pequenos: é onde um site novo consegue entrar.
2. **Serviço** (nomes dos serviços do site e dos concorrentes).
3. **Informacionais** (como, o que é, legislação, tipos, documentos): alimentam o blog.
- Fontes: Keyword Overview da principal, SERP Analysis dos 10 primeiros, palavras interligadas, Organic Research dos concorrentes, Keyword Magic, serviços listados nos sites dos concorrentes (viram página mesmo sem volume).
- Meta: mínimo ~10 palavras, ideal 20 a 30.
- **Vale a pena incluir comercial/transacional? Sim.** Dá pouco tráfego, mas é o tráfego que liga. Não fica invisível: o risco de invisibilidade está nas informacionais de volume alto (SERP de governo e portais). Peso sugerido: comerciais → home e páginas de serviço (e âncoras de backlink); informacionais → blog que leva para o serviço.

## Etapa 2: Limpeza por SERP (trabalho principal)
- Para cada palavra, gravar o top 10 do Google em `planejamento/serp/` logo depois da busca (com data).
- **Regra de canibalização:** se 3 ou mais das 5 primeiras URLs forem iguais às de uma palavra já mantida, são a mesma intenção → fica a de maior volume, sai a de menor (vira variação/âncora).
- **Intenção** = tipo de página que predomina no top 5 (serviço, artigo, home, diretório, e-commerce, gov...). Em empate, segue o 1º colocado. Se o top 5 é governo/portal, marcar como **difícil** e usar só como apoio.
- Gerar planilha (`planilha-serp.xlsx`, skill xlsx) com: palavra, volume, KD, CPC, intenção, concorrentes, SERP bruta e PAA. (Alternativa aceita: tabelas em `.md`.)

## Etapa 3: Triagem
- Descartar: marca de terceiros, SERP vaga/confusa, venda (se o site é de serviço).
- Outra cidade: fica fora (anotar para site futuro). Bairro da cidade-alvo e região metropolitana entram.
- Informacional → **artigo de blog**, amarrado a um serviço que ele alimenta. Se vierem poucos, garimpar com "como / quanto custa / qual / melhor".
- Palavra cuja SERP é a home dos concorrentes → destino é a **home**.
- Procurar **lacunas**: SERP sem nenhum resultado local (ex.: "quanto custa ... no RJ") e temas novos (lei/decreto recente).
- Perguntas do PAA vão para o FAQ da página correspondente.
- Checar o site atual: artigos duplicados (canibalização), domínios duplicados, páginas ausentes.

## Etapa 4: Outlines dos concorrentes (engenharia reversa de conteúdo)
Outlines = tópicos H1/H2/H3. É o **fator mais importante**: as outlines dos primeiros colocados já foram aprovadas pelo Google.
Para cada palavra principal (e cada artigo):
1. Extrair H1/H2/H3 do top 5 por script (ver Acesso ao navegador).
2. Juntar os tópicos e **organizar semanticamente** numa hierarquia limpa.
3. Outline final = **melhores tópicos de cada concorrente** + diferencial próprio + PAA como FAQ.
4. Gravar em `planejamento/outlines/` (URLs com data, tópicos de cada uma, outline final) e o JSON bruto em `planejamento/exports/`.
5. Só depois redigir; sem inventar preço, prazo ou estatística.

## Etapa 5: Mapa palavra → destino
`planejamento/palavras-chave.md`: palavra | volume | KD | intenção (C comercial ou I informacional) | destino | serviço que alimenta | observações.
- Uma palavra por página; uma H1 por página; H2/H3 em ordem.
- Páginas de atuação (cidade/bairro) precisam de conteúdo próprio (60%+ diferente entre elas). Aviso com 30+ páginas, trava com 50+.

## Etapa 6 (opcional): Cronograma de backlinks no 8links
Quando o Jefferson pedir backlinks recorrentes: tabela de **16 semanas × 2 backlinks** em `palavras-chave.md`: semana | destino · âncora A | destino · âncora B | tipo.
- Mix de âncoras: ~40% palavra-chave/variação com cidade, ~25% semântica, ~20% marca, ~15% genérica. Nunca URL.
- Priorizar páginas de serviço/home (comerciais), alternando com blog. Nunca repetir o mesmo destino em semanas seguidas; no máximo 1 por semana para a home.
- Backlink para artigo novo só depois de publicado.
- **8links:** `app.8links.com.br/backlinks`. O app volta para o último projeto usado e **pode ser de outro cliente**: sempre trocar o projeto no seletor do topo antes de criar ou apagar qualquer coisa. "Criar backlink" pede caminho da página (sem domínio; vazio = home), texto âncora e site parceiro. Cada parceiro reforça a mesma página uma única vez ("Já usado (1x)"). Os parceiros têm nicho/DA; escolher o mais próximo do tema. Depois de criar, o status passa por Gerando → Pendente → "Publicar" → Publicado.
- Registrar cada backlink em `progresso.md` (data, destino, âncora, parceiro).

## Ao fim
Resumo curto para o Jefferson (quantas palavras, destinos, o que ficou de fora e por quê) e pedir o ok antes de seguir para arquitetura/construção. Salvar tudo na pasta local e no repositório do cliente.
