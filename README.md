# Roshan Shrestha — Portfolio

A modern, production-ready personal portfolio website built with **Next.js 14 App Router**, **Tailwind CSS**, **Three.js**, and **Framer Motion**.

## Features

- Full-screen 3D animated hero with Three.js floating particles
- Smooth scroll single-page layout with active nav tracking
- About, Skills, Projects, and Contact sections
- React Hook Form + Zod contact form validation
- Framer Motion scroll-reveal animations
- Fully responsive — mobile, tablet, desktop
- Dark futuristic design with teal accent

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v3
- **3D**: Three.js + @react-three/fiber + @react-three/drei
- **Animation**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: react-icons, lucide-react

## Getting Started

```bash
# Install dependencies
npm install
# or
yarn install
# or
pnpm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Deployment to Vercel

```bash
# Build for production
npm run build

# Or deploy directly via Vercel CLI
npx vercel
```

Or push to GitHub and connect the repo at [vercel.com](https://vercel.com).

## Customization

Update your details in these files:

| What to change | File |
|---|---|
| Name, bio, description | `components/sections/Hero.tsx`, `About.tsx` |
| Skills list | `components/sections/Skills.tsx` |
| Projects (title, description, links) | `components/sections/Projects.tsx` |
| Social links, email | `components/sections/Contact.tsx` |
| SEO metadata | `app/layout.tsx` |
| Colors, fonts | `tailwind.config.ts`, `app/globals.css` |
