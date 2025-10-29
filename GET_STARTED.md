# 🚀 Get Started - Portfolio Website

## Quick Start (3 Steps)

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Run Development Server
```bash
npm run dev
```

### 3️⃣ Open Browser
Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🎉 What You Just Built

A **stunning, modern, fully-animated portfolio website** with:

✅ Dark & Light mode with smooth transitions  
✅ Theme-aware project screenshots  
✅ Fully responsive (mobile, tablet, desktop)  
✅ 100+ animations using Framer Motion  
✅ SEO-optimized with meta tags  
✅ Professional UI/UX design  

---

## 📝 Next Steps - Personalization

### Step 1: Update Projects

**File:** `data/projects.ts`

Replace placeholder images with your own:

```typescript
{
  name: "Your Project Name",
  description: "Your description",
  imageLight: "/images/your-project-light.png",
  imageDark: "/images/your-project-dark.png"
}
```

**Tips for Project Images:**
- Create two versions of each screenshot (light theme & dark theme)
- Place images in `public/images/` folder
- Recommended size: 600x400px or larger
- Use `.png` or `.webp` format for best quality

### Step 2: Update Social Links

**File:** `components/Contact.tsx`

Update your contact information:

```typescript
href: 'mailto:your-email@example.com',  // Line 10
href: 'https://linkedin.com/in/yourprofile',  // Line 16
href: 'https://github.com/yourusername',  // Line 22
```

### Step 3: Customize Bio

**File:** `components/About.tsx`

Edit the bio paragraph (around line 35) to tell your story.

### Step 4: Update Skills (Optional)

**File:** `components/About.tsx`

Modify the `skills` array (around line 7) to match your tech stack.

### Step 5: Update SEO Meta Tags

**File:** `app/layout.tsx`

Update metadata for better SEO (lines 17-35):
- Title
- Description
- Keywords
- Open Graph tags

---

## 🎨 Customization Guide

### Change Color Scheme

**File:** `tailwind.config.ts`

Modify gradient colors throughout the site by changing color values in components:

- **Indigo → Cyan**: Main gradient (hero, headers)
- **Blue → Violet**: Projects section
- **Purple → Pink**: Accent colors

Search for color patterns like:
- `from-indigo-600 to-cyan-500`
- `from-blue-600 to-violet-600`

And replace with your preferred colors.

### Modify Fonts

**File:** `app/layout.tsx`

Change fonts by importing different Google Fonts:

```typescript
import { YourFont, AnotherFont } from 'next/font/google';
```

### Adjust Animations

**Files:** Individual component files

Framer Motion animations can be customized:
- **Duration**: Change `duration: 0.5` values
- **Delay**: Adjust `delay: 0.2` values
- **Easing**: Modify `ease` properties

---

## 📦 Project Structure Overview

```
portfolio/
│
├── app/                         # Next.js App Router
│   ├── layout.tsx              # Root layout, fonts, SEO
│   ├── page.tsx                # Main page (imports all sections)
│   └── globals.css             # Global styles
│
├── components/                  # React Components
│   ├── Header.tsx              # Navigation + theme toggle
│   ├── Hero.tsx                # Hero section
│   ├── About.tsx               # About + skills
│   ├── Projects.tsx            # Project showcase
│   ├── Contact.tsx             # Social links
│   └── Footer.tsx              # Footer + scroll-to-top
│
├── contexts/
│   └── ThemeContext.tsx        # Dark/light mode logic
│
├── data/
│   └── projects.ts             # Project data (EDIT THIS!)
│
├── public/
│   └── images/                 # Your project images go here
│
└── Configuration Files
    ├── package.json            # Dependencies
    ├── tailwind.config.ts      # Tailwind configuration
    ├── tsconfig.json           # TypeScript config
    └── next.config.js          # Next.js config
```

---

## 🛠️ Available Scripts

```bash
# Development (with hot reload)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

---

## 📱 Testing Responsiveness

### Desktop
- Open [http://localhost:3000](http://localhost:3000)

### Mobile/Tablet
1. Open Chrome DevTools (F12)
2. Click "Toggle Device Toolbar" (Ctrl+Shift+M)
3. Select device (iPhone, iPad, etc.)
4. Test mobile menu and interactions

---

## 🎯 Key Features You Have

### Theme System
- **Toggle**: Click sun/moon icon in header
- **Persistence**: Theme saved in localStorage
- **Auto-detect**: Respects system preference on first visit

### Responsive Design
- **Desktop**: Full navigation bar
- **Mobile**: Hamburger menu
- **Tablet**: Optimized layouts

### Animations
- **Hero**: Animated background with floating orbs
- **Scroll**: Elements animate when scrolling
- **Hover**: All buttons and cards have hover effects
- **Theme Toggle**: Icon rotates when switching

### Navigation
- **Smooth Scroll**: All links scroll smoothly
- **Scroll to Top**: Button appears when scrolling down
- **Section Links**: Jump to any section instantly

---

## 🌐 Deployment Options

### Vercel (Recommended - Free)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically
5. Get a free `.vercel.app` domain

### Netlify
```bash
npm run build
# Upload .next folder to Netlify
```

### Other Hosting
Any host that supports Node.js and Next.js will work!

---

## 🐛 Troubleshooting

### Theme not working?
- Clear browser cache
- Check browser console for errors
- Ensure JavaScript is enabled

### Images not loading?
- Verify images are in `public/images/`
- Check file paths in `data/projects.ts`
- Use full URLs for external images

### Animations not smooth?
- Check browser compatibility (modern browsers work best)
- Disable browser extensions that might interfere
- Ensure hardware acceleration is enabled

### Build errors?
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

---

## 📚 Learn More

### Technologies Used
- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Framer Motion**: [framer.com/motion](https://www.framer.com/motion/)
- **TypeScript**: [typescriptlang.org](https://www.typescriptlang.org/)

### Customization Resources
- [Tailwind Color Palette](https://tailwindcss.com/docs/customizing-colors)
- [Google Fonts](https://fonts.google.com/)
- [Framer Motion Examples](https://www.framer.com/motion/examples/)
- [Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples)

---

## ✨ Pro Tips

1. **Use WebP images** for better performance
2. **Optimize images** before uploading (compress them)
3. **Test on real devices** not just DevTools
4. **Add Google Analytics** to track visitors
5. **Update meta tags** for better SEO
6. **Add a custom domain** for professional look
7. **Enable HTTPS** (automatic on Vercel/Netlify)

---

## 🎊 You're All Set!

Your portfolio is production-ready! Just personalize the content and deploy.

**Need help?** Check:
- `README.md` - Project overview
- `SETUP.md` - Detailed setup guide
- `FEATURES.md` - Complete feature list

---

Built with ❤️ using Next.js, Tailwind CSS & Framer Motion

**Happy coding!** 🚀

