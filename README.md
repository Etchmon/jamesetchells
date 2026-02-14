<div align="center">
  <h2>James Etchells - Portfolio Website</h2>
  <p>
    <a href="">
      <img src="https://img.shields.io/github/last-commit/Etchmon/jamesetchells" alt="last update" />
    </a>
    <a href="https://github.com/Etchmon/jamesetchells/issues/">
      <img src="https://img.shields.io/github/issues/Etchmon/jamesetchells" alt="open issues" />
    </a>
    <a href="">
      <img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/Etchmon/jamesetchells/deploy_on_pr.yml" />
    </a>
  </p>
  <h4>
    <a href="https://jamesetchells.com">View Website</a>
  </h4>
</div>

<br />

## About the Project

My personal portfolio website built with Astro and shadcn/ui, featuring a documentation-style layout with a dark theme.

<br />

## Tech Stack

- **Framework**: Astro 5
- **UI**: React + shadcn/ui
- **Styling**: Tailwind CSS v4
- **Deployment**: Cloudflare Pages
- **CI/CD**: GitHub Actions

<br />

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

<br />

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── Sidebar.astro    # Navigation sidebar
│   ├── Hero.astro       # Homepage hero
│   ├── AboutSection.astro
│   ├── Projects.astro
│   └── Footer.astro
├── layouts/
│   └── DocsLayout.astro
├── pages/
│   └── index.astro
├── lib/
│   └── utils.ts
└── styles/
    └── global.css
```

<br />

## Deployment

The site automatically deploys to Cloudflare Pages when changes are merged to the `main` branch.

<br />

## Contact

James Etchells - etch@jamesetchells.com

Project Link: [https://github.com/Etchmon/jamesetchells](https://github.com/Etchmon/jamesetchells)
