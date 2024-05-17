<img src="https://nekhor-web-v1-production.up.railway.app/favicon.png" />

# Nekhor Web

### Circling the Sacred

> An initiative of Lhasey Lotsawa, Nekhor is driven by a single mission: to connect you with the sacred sites where awakened masters have lived, practiced, and benefited our world

### [Website](https://nekhor.org/) | [Android App](https://nekhor.org/) | [iOS App](https://nekhor.org/)

## About Us

Nekhor connects you with the holy sites of Guru Rinpoche - also known as Padmasambhava, the forefather of Tibetan Buddhism - by providing pilgrimage information, translated prayers and histories, and an array of other media to help you experience the richness of these pilgrimage sites in Nepal, the Himalaya, Tibet, India, and beyond. Nekhor is home to Pema Jungne Translations. Emerging from Nekhor 2019s core mission to revitalize the holy sites of Guru Rinpoche, our translation group focuses on making traditional prayers and compositions honoring Guru Rinpoche and his activities available to all.

## Setup

Install the dependencies:

```bash
yarn install
```

## Get Started

Start the dev server:

```bash
yarn run dev
```

Enable optional features or add a new entry:

```bash
yarn run new
```

Build the app for production:

```bash
yarn run build
```

Preview the production build locally:

```bash
yarn run serve
```

## Resume

- 🇺🇸 en-US

### Tecnologies

- Typescript
- [React](https://react.dev/) with server-side rendering
- Uses [Modern.js](https://modernjs.dev/) for SSR and SEO composition
- Configured to run in a [Docker](https://www.docker.com/) container or directly in Node.js
- Consumes APIs for locations and itineraries: /posts, /categories, /subcategories
- Uses [Supabase](https://supabase.com/) to store information for /news, /publications, /about-us

### Application Routes

- Home page featuring main locations sorted by category, along with news and publications
- Content pages divided by category, integrated with the API
- Content pages for News, Publications, and About Us integrated with [Supabase](https://supabase.com/)

---

- 🇧🇷 pt-BR

### Tecnologias

- Typescript
- [React](https://react.dev/) com renderização do lado do servidor
- Utilização do [Modern.js](https://modernjs.dev/) para composição da aplicação SSR e SEO
- Configuração para rodar em um container [Docker](https://www.docker.com/) ou diretamente em [Node.js](https://nodejs.org/en)
- Consome APIs para locais e roteiros: /posts, /categories, /subcategories
- Utilização do [Supabase](https://supabase.com/) para armazenar informações de /news, /publications, /about-us

### Rotas (Páginas) da aplicação

- Página inicial com os principais locais separados por categoria, além de notícias e publicações
- Páginas de conteúdo divididas por categoria, integradas com a API
- Páginas de conteúdo de News, Publications e About Us integradas com [Supabase](https://supabase.com/)
