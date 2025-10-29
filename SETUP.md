# Portfolio Setup Guide

This guide will help you get your portfolio website up and running.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages:
- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion
- Lucide React (icons)
- TypeScript

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

### 3. Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Update Personal Information

#### 1. Projects
Edit `data/projects.ts` to add your real projects:

```typescript
{
  name: "Project Name",
  description: "Brief description",
  imageLight: "/images/project-light.png",  // or URL
  imageDark: "/images/project-dark.png"     // or URL
}
```

**Adding Project Images:**
- Place images in the `public/images/` folder
- Or use external URLs (like Imgur, Cloudinary, etc.)
- Create two versions: one for light mode, one for dark mode

#### 2. Social Links
Edit `components/Contact.tsx` to update social links:

```typescript
const socialLinks = [
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:your-email@example.com',  // Update this
    color: 'from-red-500 to-orange-500',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/yourprofile',  // Update this
    color: 'from-blue-600 to-blue-400',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/yourusername',  // Update this
    color: 'from-gray-700 to-gray-900',
  },
];
```

#### 3. Bio & Skills
Edit `components/About.tsx`:
- Update the bio paragraph
- Modify the skills array to match your stack

#### 4. SEO & Meta Tags
Edit `app/layout.tsx` metadata:

```typescript
export const metadata: Metadata = {
  title: 'Your Name | Full-Stack Mobile Developer',
  description: 'Your custom description',
  // ... update other fields
};
```

### Theme Customization

#### Colors
Edit `tailwind.config.ts` to change accent colors:

```typescript
extend: {
  colors: {
    // Add custom colors here
  }
}
```

#### Animations
All animations use Framer Motion. Customize in individual component files.

## 📂 File Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Main page composition
│   └── globals.css         # Global styles, scrollbar
│
├── components/
│   ├── Header.tsx          # Navigation + theme toggle
│   ├── Hero.tsx            # Animated hero section
│   ├── About.tsx           # Bio + skills
│   ├── Projects.tsx        # Project showcase
│   ├── Contact.tsx         # Contact links
│   └── Footer.tsx          # Footer + scroll-to-top
│
├── contexts/
│   └── ThemeContext.tsx    # Dark/light mode logic
│
├── data/
│   └── projects.ts         # Project data
│
└── public/
    └── images/             # Your project screenshots
```

## 🎨 Theme System

The theme system uses:
- React Context for state management
- localStorage for persistence
- Tailwind's dark mode class strategy
- Smooth transitions on all elements

Toggle between light and dark mode using the sun/moon button in the header.

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Deploy automatically

### Other Platforms

Build the static site:
```bash
npm run build
```

Deploy the `.next` folder to any static hosting service.

## 🔧 Troubleshooting

### Hydration Errors
If you see hydration warnings, it's likely from the theme system. The `suppressHydrationWarning` prop in `layout.tsx` should handle this.

### Images Not Loading
- Ensure images are in the `public/` folder
- Or use full URLs for external images
- Check image paths in `data/projects.ts`

### Theme Not Persisting
Clear browser localStorage and try again:
```javascript
localStorage.clear()
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

## 💡 Tips

1. **Performance**: Use optimized images (WebP format recommended)
2. **SEO**: Update all meta tags in `layout.tsx`
3. **Analytics**: Add Google Analytics or Plausible to track visitors
4. **Favicon**: Add a favicon.ico to the `public/` folder

---

Built with ❤️ using Next.js, Tailwind CSS & Framer Motion

