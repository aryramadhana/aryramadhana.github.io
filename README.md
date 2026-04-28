# Reza — Data Engineer & Analyst Portfolio

Personal portfolio for Reza, Data Engineer & Analyst based in Jakarta, Indonesia.
Converted from a single-file HTML prototype into a production-ready React project.

## ✨ Features

- 3D parallax hero with mouse-tracking and morphing blob animation
- Filterable project grid (by category and tool)
- Project detail modal
- Scroll-reveal animations (IntersectionObserver)
- Contact form with form state
- Fully responsive layout

## 🛠 Tech Stack

- **React 18** — component-based UI
- **Vite 5** — lightning-fast dev server and build tool
- **Tailwind CSS 3** — utility-first styling
- **CSS Variables** — theming (all brand colors defined in `src/styles/index.css`)

## 📋 Prerequisites

- Node.js >= 18.x
- npm >= 9.x

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder. Preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── assets/            # Static files (images, fonts)
├── components/
│   ├── Navbar.jsx         # Fixed top navigation
│   ├── HeroSection.jsx    # 3D parallax hero
│   ├── AboutSection.jsx   # About + stats + skill chips
│   ├── ProjectCard.jsx    # Single project card
│   ├── ProjectModal.jsx   # Full project detail modal
│   ├── ProjectsSection.jsx# Filterable project grid
│   ├── ContactSection.jsx # Contact form + info
│   └── Footer.jsx         # Dark footer
├── hooks/
│   └── use3DParallax.js   # Mouse parallax effect hook
├── constants/
│   └── projects.js        # All project data (edit here!)
└── styles/
    └── index.css          # Global CSS + CSS variables
```

## ✏️ Customization

**To update projects:** Edit `src/constants/projects.js`

**To change colors:** Edit `:root` CSS variables in `src/styles/index.css`

**To connect the contact form:** Add your email service integration in `ContactSection.jsx` inside `handleSubmit`

## 📄 License

MIT
