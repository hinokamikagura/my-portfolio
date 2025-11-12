# Kairos Portfolio Website

A modern, multi-page portfolio website for a Senior Web3 Backend Developer built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern Design**: Dill Green color palette with elegant typography
- 🌓 **Dark Mode**: Toggle between light and dark themes
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile
- ✨ **Smooth Animations**: Framer Motion powered transitions and interactions
- 🗺️ **Interactive Bubble Map**: Visualize 35+ projects in an interactive force graph
- 📄 **Multi-page Structure**: Home, About, Projects, Services, and Contact pages
- 🔍 **SEO Optimized**: Meta tags and Open Graph support
- ⚡ **Performance**: Built with Next.js 14 App Router for optimal performance

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Visualization**: React Force Graph 2D
- **Icons**: Lucide React
- **Theme**: next-themes
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── projects/       # Projects page with bubble map
│   ├── services/       # Services page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   ├── Footer.tsx      # Footer component
│   ├── Navigation.tsx  # Navigation bar
│   ├── ProjectBubbleMap.tsx  # Interactive bubble map
│   └── ThemeProvider.tsx    # Theme context provider
├── data/
│   └── projects.ts     # Project data
└── public/
    └── resume.pdf      # Resume PDF (placeholder)
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the Dill Green color palette:

```typescript
colors: {
  'dill-green': {
    primary: '#3B7A57',
    light: '#E8F3EC',
    dark: '#1F2D27',
    hover: '#2D5F42',
  },
}
```

### Projects

Add or modify projects in `data/projects.ts`. Each project includes:
- Name and description
- Category (Backend, Smart Contracts, Frontend, etc.)
- Technologies used
- GitHub and demo links (optional)

### Social Links

Update social media links in:
- `components/Footer.tsx`
- `app/contact/page.tsx`

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This project is ready to deploy on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform supporting Next.js

## License

MIT License - feel free to use this template for your own portfolio!

