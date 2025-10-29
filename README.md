# Portfolio - Misa Razafimahatratra

A stunning, modern, and animated portfolio website for a Full-Stack Mobile Application Developer.

## ✨ Features

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom gradients and animations
- **Animations**: Framer Motion for smooth, professional transitions
- **Theme**: Dark & Light mode with smooth toggle animation (localStorage persistence)
- **Fully Responsive**: Optimized for desktop, tablet, and mobile
- **SEO Optimized**: Meta tags and Open Graph support
- **Performance**: Optimized images and lazy loading

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Main page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Navbar with theme toggle
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Projects.tsx       # Projects showcase
│   ├── Contact.tsx        # Contact section
│   └── Footer.tsx         # Footer with scroll-to-top
├── contexts/              # React contexts
│   └── ThemeContext.tsx   # Theme provider
├── data/                  # Data files
│   └── projects.ts        # Project data
└── public/                # Static assets
```

## 🎨 Customization

### Projects

Edit `data/projects.ts` to add or modify projects. Each project should have:

```typescript
{
  name: string;
  description: string;
  imageLight: string;  // Image URL for light mode
  imageDark: string;   // Image URL for dark mode
}
```

### Theme Colors

Modify gradient colors in `tailwind.config.ts` and component files.

### Fonts

Fonts are configured in `app/layout.tsx`:
- **Headings**: Poppins
- **Body**: Inter

## 🌐 Sections

1. **Header/Navbar**: Sticky navigation with theme toggle
2. **Hero**: Animated introduction with gradient background
3. **About**: Bio and skill badges
4. **Projects**: Grid of featured projects with theme-aware images
5. **Contact**: Social links (Email, LinkedIn, GitHub)
6. **Footer**: Copyright and scroll-to-top button

## 📱 Technologies

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (icons)

## 📄 License

Copyright © 2025 Misa Razafimahatratra

---

Built with ❤️ using Next.js, Tailwind CSS & Framer Motion

