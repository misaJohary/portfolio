# Quick Reference Card

## 🚀 Essential Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 File Structure

```
portfolio/
├── app/
│   ├── layout.tsx          ← SEO, fonts, root layout
│   ├── page.tsx            ← Main page (all sections)
│   └── globals.css         ← Global styles
│
├── components/
│   ├── Header.tsx          ← Nav + theme toggle
│   ├── Hero.tsx            ← Hero section
│   ├── About.tsx           ← Bio + skills
│   ├── Projects.tsx        ← Project showcase
│   ├── Contact.tsx         ← Social links
│   └── Footer.tsx          ← Footer + scroll-to-top
│
├── contexts/
│   └── ThemeContext.tsx    ← Theme state management
│
├── data/
│   └── projects.ts         ← 📝 EDIT: Project data
│
└── public/
    └── images/             ← 📁 ADD: Your screenshots
```

## ✏️ What to Edit (Priority Order)

### 1. Projects (REQUIRED)
**File:** `data/projects.ts`
- Update project names
- Add descriptions
- Replace image URLs

### 2. Contact Links (REQUIRED)
**File:** `components/Contact.tsx`
- Email: Line 10
- LinkedIn: Line 16
- GitHub: Line 22

### 3. Bio (RECOMMENDED)
**File:** `components/About.tsx`
- Update bio paragraph: ~Line 35
- Edit skills array: ~Line 7

### 4. SEO Metadata (RECOMMENDED)
**File:** `app/layout.tsx`
- Update title, description, keywords: Lines 17-35

## 🎨 Theme Customization

### Color Patterns to Find & Replace

| Current | Description | Change To |
|---------|-------------|-----------|
| `from-indigo-600 to-cyan-500` | Main gradient | Your colors |
| `from-blue-600 to-violet-600` | Projects section | Your colors |
| `from-indigo-400 to-purple-400` | Dark mode accents | Your colors |

**Tip:** Search for these patterns across all component files.

## 🖼️ Adding Project Images

### Option 1: Local Images
1. Create folder: `public/images/`
2. Add your screenshots
3. Reference: `imageLight: "/images/project-light.png"`

### Option 2: External URLs
Use direct links: `imageLight: "https://yourcdn.com/image.png"`

### Image Requirements
- **Format:** PNG, JPG, or WebP
- **Size:** 600x400px minimum
- **Versions:** Create both light & dark theme versions

## 🎯 Key Features

| Feature | How to Use |
|---------|------------|
| **Theme Toggle** | Click sun/moon icon in header |
| **Smooth Scroll** | Click navigation links |
| **Mobile Menu** | Tap hamburger icon on mobile |
| **Scroll to Top** | Click arrow button (appears on scroll) |
| **Responsive** | Automatic on all devices |

## 🌐 Browser Support

✅ Chrome (latest)  
✅ Firefox (latest)  
✅ Safari (latest)  
✅ Edge (latest)  
✅ Mobile browsers  

## 📱 Testing Checklist

- [ ] Desktop view (1920px)
- [ ] Tablet view (768px)
- [ ] Mobile view (375px)
- [ ] Theme toggle works
- [ ] All links work
- [ ] Images load correctly
- [ ] Smooth scrolling works
- [ ] Mobile menu opens/closes
- [ ] Animations are smooth

## 🐛 Common Issues & Fixes

### Issue: Theme doesn't save
**Fix:** Clear localStorage
```javascript
localStorage.clear()
```

### Issue: Images don't show
**Fix:** Check paths in `data/projects.ts`
- Local: `/images/file.png`
- External: Full URL with `https://`

### Issue: Build fails
**Fix:** Clear cache and rebuild
```bash
rm -rf .next node_modules
npm install
npm run build
```

## 🚀 Deployment Checklist

- [ ] All personal info updated
- [ ] Project images added
- [ ] Social links work
- [ ] SEO metadata updated
- [ ] Test on mobile
- [ ] Build succeeds (`npm run build`)
- [ ] No console errors

### Deploy to Vercel (Free)
1. Push to GitHub
2. Connect at [vercel.com](https://vercel.com)
3. Deploy automatically
4. Get free domain: `yourname.vercel.app`

## 📞 Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Poppins + Inter

## 📚 Documentation Files

- `README.md` - Project overview
- `SETUP.md` - Detailed setup
- `FEATURES.md` - Feature list
- `GET_STARTED.md` - Getting started guide
- `QUICK_REFERENCE.md` - This file!

## 💡 Pro Tips

1. **Test dark mode** - Toggle theme and check all sections
2. **Use WebP** - Better image compression
3. **Optimize images** - Compress before uploading
4. **Mobile first** - Test on real devices
5. **SEO matters** - Fill all meta tags

## ⚡ Performance

Built-in optimizations:
- ✅ Code splitting
- ✅ Font optimization
- ✅ Image lazy loading (when using next/image)
- ✅ CSS purging
- ✅ Static generation

## 🎨 Animation Details

All animations use **Framer Motion**:
- **Fade in:** Elements appear on scroll
- **Stagger:** Sequential animations
- **Hover:** Scale, lift, glow effects
- **Theme toggle:** Icon rotation
- **Mobile menu:** Slide & fade

## 📊 Sections Breakdown

| Section | Purpose | Editable Data |
|---------|---------|---------------|
| Header | Navigation | Links |
| Hero | Introduction | Text in Hero.tsx |
| About | Bio + Skills | Text + skills array |
| Projects | Showcase | projects.ts file |
| Contact | Social links | URLs in Contact.tsx |
| Footer | Copyright | Text in Footer.tsx |

---

## 🎉 Ready to Go!

1. **Edit** → Update projects & contact info
2. **Test** → `npm run dev`
3. **Build** → `npm run build`
4. **Deploy** → Push to Vercel

**Your portfolio is production-ready! 🚀**

---

*Need more help? Check the other documentation files!*

