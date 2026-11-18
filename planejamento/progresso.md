# Progresso

## 16/11/2026
- [x] Conferido o repositório ambtec: não tinha planejamento de palavras-chave (último commit de conteúdo em 16/07/2026).
- [x] Etapas 0 a 5 feitas (briefing, Semrush, SERP, triagem, outlines, mapa). Falta só a planilha `planilha-serp.xlsx` (não gerada; os dados estão em `serp/` e `exports/`).
- [x] 8links: apagados os 2 backlinks pendentes de hoje (motterhome.com.br e fractald.com.br).
- [x] Semana 1: 2 backlinks criados no 8links (ver tabela abaixo).

## 16/11/2026: aplicado no site
- [x] Home: H1 Consultoria Ambiental no Rio de Janeiro, seções (o que faz, como funciona, órgãos, como escolher) e FAQ com schema.
- [x] Serviços: H1, título SEO, FAQ visível e links internos nos 5 serviços (licenciamento reescrito como Empresa de Licenciamento Ambiental; supressão reescrita).
- [x] Blog: guia pilar atualizado (INEA x prefeitura, Decreto 50.473/2026); artigo duplicado quebrado removido com 301 (vercel.json).
- [x] 3 artigos novos: custo do licenciamento no RJ, Decreto 50.473/2026, poda e remoção de árvore no RJ.
- [x] sitemap.xml atualizado (21 URLs).
- [x] Domínio: ambtec.bio.br é site antigo, tudo vai para licenciamentoambientalrio.com.br. O Vercel serve o site em www (apex redireciona 308 para www): canonical, sitemap, robots, llms.txt e schemas passaram para https://www.licenciamentoambientalrio.com.br.
- [ ] Pendente (Jefferson): redirecionar ambtec.bio.br no Vercel/DNS (ver passos na conversa).
- [ ] Pendente: Semrush incompleto, limite diário atingido. Ver `pendencias-semrush.md`.
- [ ] Pendente: revisar estatísticas sem fonte em outros artigos (ex.: 98% x 35% em licenciamento-com-sem-consultoria).

## 16/11/2026 (2): ajustes finais no site
- [x] Listagens otimizadas: /servicos, /blog, /sobre, /contato (H1 e title distintos da home).
- [x] Links internos ("Veja também") nos 7 artigos antigos do blog.
- [x] "laudo ambiental": artigo de apoio futuro, sem página de serviço (SERP mista).
- [x] Conferência visual desktop e celular (home, serviço, FAQ): ok, sem rolagem horizontal.
- [x] GA4: tag G-CX7M0R0M31 confere com o stream www.licenciamentoambientalrio.com.br (propriedade "licenciamento ambiental rio", conta Ambetec) e recebe tráfego.
- [x] GA4: criados eventos click_whatsapp, click_telefone, click_email e generate_lead. Marcar como eventos-chave no GA4 depois que aparecerem.
- [x] Formulário de contato: não enviava nada (action="#"). Agora abre o WhatsApp da Ambtec com os dados preenchidos e registra generate_lead.
- [x] Search Console (propriedade de domínio): enviado o sitemap https://www.licenciamentoambientalrio.com.br/sitemap.xml (21 páginas processadas) e solicitada indexação da home, do serviço de licenciamento, do serviço de supressão e dos 3 artigos novos. O sitemap antigo (sem www, 19 páginas) continua listado; pode ser removido.

## 18/11/2026: Semrush concluído
- [x] 2ª rodada do Semrush (organic do site e de 3 concorrentes, volumes faltantes, Keyword Overview). Dados em `exports/semrush-2026-11-18.md`.
- [x] Site: ASV como H2 e novo título (poda de árvores) no serviço de supressão; título do artigo de poda; artigo novo "Reflorestamento: o que é...".
- [x] Search Console: indexação solicitada para o artigo de reflorestamento e o de poda (título mudou). O serviço de supressão foi alterado, mas não foi reenviado.

## Registro de backlinks (preencher)
| Data | Destino | Âncora | Site parceiro | Status |
|---|---|---|---|---|
| 16/11/2026 (sem 1) | /servicos/licenciamento-ambiental/ | empresa de licenciamento ambiental no Rio de Janeiro | dingbatcobogo.com.br (Construção, DA 28) | publicado: dingbatcobogo.com.br/como-obter-licenciamento-ambiental-para-construcao |
| 16/11/2026 (sem 1) | Home | Ambtec Consultoria Ambiental | sibic.com.br (Educação, DA 32) | publicado: sibic.com.br/como-escolher-curso-tecnico-em-meio-ambiente-em-2026 |
| 26/06 a 14/07/2026 | (8 backlinks antigos, âncora "licenciamento ambiental" e variações) | | cideb, traineeflat, npcast, octooc, atelierh2o, decorandocomclasseshop, mobiliintelligenti, prefeituradecampogrande | publicados |
