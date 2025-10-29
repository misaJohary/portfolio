export interface Project {
  name: string;
  description: string;
  detailedDescription: string;
  category: string;
  tech: string[];
  features: string[];
  screenshotsLight: string[];
  screenshotsDark: string[];
  gradient: string;
  layout: 'stacked' | 'floating' | 'grid' | 'spotlight' | 'cascade' | 'hero';
}

export const projects: Project[] = [
  {
    name: "Naveco Client",
    description: "Ride-hailing client app for booking and managing trips easily.",
    detailedDescription: "A comprehensive ride-hailing application that allows users to book rides, track drivers in real-time, and manage their trip history seamlessly. Built with Flutter for a native experience and FastAPI for robust backend operations.",
    category: "Transportation",
    tech: ["Flutter", "FastAPI", "Google Maps", "Firebase"],
    features: [
      "Real-time ride tracking",
      "Multiple payment options",
      "Trip history & receipts",
      "Driver ratings & reviews"
    ],
    screenshotsLight: [
      "https://images.unsplash.com/photo-1519003300449-424ad0405076?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=800&fit=crop"
    ],
    screenshotsDark: [
      "https://images.unsplash.com/photo-1485395644833-0a1b1309a5d3?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400&h=800&fit=crop"
    ],
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    layout: "floating"
  },
  {
    name: "Naveco Driver",
    description: "Driver companion app for managing rides and earnings.",
    detailedDescription: "Professional driver application with earnings tracking, navigation assistance, and ride management. Designed to maximize driver efficiency with intuitive controls and real-time updates.",
    category: "Transportation",
    tech: ["Flutter", "FastAPI", "SQLModel", "GraphQL"],
    features: [
      "Earnings dashboard",
      "Navigation integration",
      "Ride acceptance system",
      "Performance analytics"
    ],
    screenshotsLight: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=800&fit=crop"
    ],
    screenshotsDark: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=800&fit=crop"
    ],
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    layout: "cascade"
  },
  {
    name: "HelloBible",
    description: "Inspirational Christian content and daily verses.",
    detailedDescription: "A spiritual companion app delivering daily Bible verses, devotionals, and inspirational content. Features include reading plans, bookmarks, and a beautiful, distraction-free reading experience.",
    category: "Lifestyle",
    tech: ["Flutter", "FastAPI", "Firebase", "REST API"],
    features: [
      "Daily verses & devotionals",
      "Reading plans",
      "Bookmark & notes",
      "Audio Bible readings"
    ],
    screenshotsLight: [
      "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=800&fit=crop"
    ],
    screenshotsDark: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=800&fit=crop"
    ],
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    layout: "spotlight"
  },
  {
    name: "TrustWork",
    description: "Professional networking and collaboration platform.",
    detailedDescription: "A modern professional networking platform connecting freelancers with clients. Features secure messaging, project management tools, and integrated payment systems.",
    category: "Business",
    tech: ["Flutter", "FastAPI", "GraphQL", "PostgreSQL"],
    features: [
      "Professional profiles",
      "Project management",
      "Secure messaging",
      "Payment integration"
    ],
    screenshotsLight: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=800&fit=crop"
    ],
    screenshotsDark: [
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=800&fit=crop"
    ],
    gradient: "from-teal-500 via-emerald-500 to-green-500",
    layout: "stacked"
  },
  {
    name: "Farano",
    description: "Marketplace for local handmade products.",
    detailedDescription: "An artisan marketplace celebrating local craftsmanship. Connect makers with buyers, featuring secure transactions, product showcases, and community-driven discovery.",
    category: "E-Commerce",
    tech: ["Flutter", "FastAPI", "Stripe", "Firebase"],
    features: [
      "Artisan profiles",
      "Product listings",
      "Secure payments",
      "Order tracking"
    ],
    screenshotsLight: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=800&fit=crop"
    ],
    screenshotsDark: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=800&fit=crop"
    ],
    gradient: "from-pink-500 via-rose-500 to-red-500",
    layout: "grid"
  },
  {
    name: "Click Menu Zen",
    description: "Restaurant tablet menu for digital ordering.",
    detailedDescription: "A sophisticated digital menu system for restaurants, enabling customers to browse dishes, customize orders, and request service directly from their table via tablet.",
    category: "Hospitality",
    tech: ["Flutter", "FastAPI", "SQLModel", "Real-time"],
    features: [
      "Digital menu browsing",
      "Order customization",
      "Kitchen integration",
      "Multi-language support"
    ],
    screenshotsLight: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=800&fit=crop"
    ],
    screenshotsDark: [
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=800&fit=crop"
    ],
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    layout: "hero"
  }
];

