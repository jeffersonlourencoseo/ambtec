# 🌿 Ambtec — Licenciamento Ambiental

Site profissional e de alta conversão para **Ambtec Consultoria Ambiental**, especializada em licenciamento ambiental, CAR, EIA/RIMA e gestão sustentável no Rio de Janeiro.

🔗 **Domínio:** [licenciamentoambientalrio.com.br](https://licenciamentoambientalrio.com.br)

---

## 🚀 Status

**Pronto para Produção** ✅

- 11 páginas estáticas otimizadas
- SEO Técnico completo (Open Graph, Twitter Cards, Schema.org LocalBusiness)
- Sitemap XML automático
- Botão flutuante WhatsApp com pulsação
- Design responsivo com Tailwind CSS
- Menu mobile acessível (ARIA, Escape, click outside)

---

## 🛠 Tecnologias

| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| [Astro](https://astro.build) | 4.x | Framework web (SSR via Vercel) |
| [Tailwind CSS](https://tailwindcss.com) | 3.4 | Estilização utilitária |
| [Astro MDX](https://docs.astro.build/en/guides/integrations-guide/mdx/) | 3.x | Conteúdo em Markdown |
| [Astro Sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | 3.x | Geração de sitemap XML |
| [Vercel Adapter](https://docs.astro.build/en/guides/integrations-guide/vercel/) | 7.x | Deploy serverless |

---

## 📁 Estrutura

```
├── public/
│   └── favicon.svg
├── src/
│   ├── components/        # Componentes Astro reutilizáveis
│   ├── content/
│   │   ├── blog/          # Posts em Markdown
│   │   └── servicos/      # Páginas de serviço em Markdown
│   ├── data/
│   │   └── config.ts      # Central de dados (NAP, SEO, contato)
│   ├── layouts/
│   │   └── Layout.astro   # Layout base com SEO, Schema, WhatsApp
│   └── pages/             # Rotas do site
├── astro.config.ts
├── tailwind.config.mjs
└── package.json
```

---

## ⚙️ Configuração Central

Todos os dados da empresa estão centralizados em `src/data/config.ts`:

- **Domínio** do site
- **NAP** (Nome, Endereço, Telefone, WhatsApp, E-mail)
- **Horário de funcionamento**
- **Redes sociais**
- **SEO defaults** (title, description, imagem OG)

> ⚠️ **Importante:** Atualize os dados reais da empresa no `src/data/config.ts` antes do lançamento (CNPJ, telefone, endereço completo).

---

## 🚢 Deploy

O projeto está configurado para deploy na **Vercel** com SSR.

### Comandos úteis

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview local do build
npm run preview
```

---

## 📄 Páginas geradas

| Página | Rota | Descrição |
|--------|------|-----------|
| Home | `/` | Hero, diferenciais, serviços, depoimentos, CTA |
| Sobre | `/sobre` | História, missão/visão/valores, equipe |
| Serviços | `/servicos` | Grid de todos os serviços |
| Serviço | `/servicos/[slug]` | Página dinâmica de cada serviço |
| Blog | `/blog` | Listagem de artigos |
| Post | `/blog/[slug]` | Artigo individual com sidebar |
| Contato | `/contato` | NAP completo + formulário + WhatsApp |
| Termos | `/termos` | Termos de uso |
| Privacidade | `/privacidade` | Política de privacidade |

---

## 🏗 Funcionalidades

- ✅ **SEO Técnico:** Meta tags, Open Graph, Twitter Cards, canonical, JSON-LD LocalBusiness
- ✅ **Performance:** Preconnect fonts, lazy loading implícito do Astro, CSS purge do Tailwind
- ✅ **Acessibilidade:** Menu mobile com ARIA labels, focus management, Escape key
- ✅ **Conversão:** CTA multi-camada, botão WhatsApp flutuante com pulsação, formulário de contato
- ✅ **Blog técnico:** Content collection com Markdown/MDX
- ✅ **Serviços dinâmicos:** Páginas geradas a partir de arquivos Markdown

---

## 📬 Contato do Desenvolvedor

Projeto entregue com código limpo, documentado e pronto para escalada.

---

> **Última atualização:** 11 de junho de 2026
