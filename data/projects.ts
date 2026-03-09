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
  storeLinks?: {
    android?: string;
    ios?: string;
  };
  requestSourceCode?: boolean;
}

export const projects: Project[] = [
  {
    name: "TrustWork",
    description: "Professional networking and collaboration platform.",
    detailedDescription: "A modern professional networking platform connecting freelancers with clients. Features secure messaging, project management tools, and integrated payment systems.",
    category: "Business",
    tech: ["Flutter", "Firebase"],
    features: [
      "Professional profiles",
      "Project management",
      "Secure messaging",
      "Payment integration"
    ],
    screenshotsLight: [
      "/screenshots/trustwork/light-1.png",
      "/screenshots/trustwork/light-2.png",
      "/screenshots/trustwork/light-3.png"
    ],
    screenshotsDark: [
      "/screenshots/trustwork/dark-1.png",
      "/screenshots/trustwork/dark-2.png",
      "/screenshots/trustwork/dark-3.png"
    ],
    gradient: "from-blue-400 via-blue-500 to-blue-600",
    layout: "stacked",
    requestSourceCode: true
  },
  {
    name: "Farano",
    description: "Game",
    detailedDescription: "Mini two player games",
    category: "Game",
    tech: ["Flutter", "Firebase"],
    features: [
      "Mutliplayer game",
      "Real-time game",
      "Synchronisation features"
    ],
    screenshotsLight: [
      "/screenshots/farano/light-1.png",
      "/screenshots/farano/light-2.png"
    ],
    screenshotsDark: [
      "/screenshots/farano/dark-1.png",
      "/screenshots/farano/dark-2.png"
    ],
    gradient: "from-green-400 via-green-500 to-green-600",
    layout: "grid",
    requestSourceCode: true
  },
  {
    name: "Naveco Client",
    description: "Ride-hailing client app for booking and managing trips easily.",
    detailedDescription: "A comprehensive ride-hailing application that allows users to book rides, track drivers in real-time, and manage their trip history seamlessly. Built with Flutter for a native experience and Ruby for robust backend operations.",
    category: "Transportation",
    tech: ["Flutter", "Ruby", "Google Maps", "Firebase"],
    features: [
      "Real-time ride tracking",
      "Multiple payment options",
      "Trip history & receipts",
      "Driver ratings & reviews"
    ],
    screenshotsLight: [
      "/screenshots/naveco-client/light-1.png",
      "/screenshots/naveco-client/light-2.png"
    ],
    screenshotsDark: [
      "/screenshots/naveco-client/dark-1.png",
      "/screenshots/naveco-client/dark-2.png"
    ],
    gradient: "from-green-300 via-emerald-400 to-teal-400",
    layout: "floating",
    storeLinks: {
      android: "https://play.google.com/store/apps/details?id=com.naveco.client.v2&pcampaignid=web_share",
      ios: "https://apps.apple.com/fr/app/naveco-vtc-chauffeur-priv%C3%A9/id968439652"
    }
  },
  {
    name: "Naveco Driver",
    description: "Driver companion app for managing rides and earnings.",
    detailedDescription: "Professional driver application with earnings tracking, navigation assistance, and ride management. Designed to maximize driver efficiency with intuitive controls and real-time updates.",
    category: "Transportation",
    tech: ["Flutter", "Ruby", "SQLModel", "GraphQL"],
    features: [
      "Earnings dashboard",
      "Navigation integration",
      "Ride acceptance system",
      "Performance analytics"
    ],
    screenshotsLight: [
      "/screenshots/naveco-driver/light-1.png",
      "/screenshots/naveco-driver/light-2.png",
      "/screenshots/naveco-driver/light-3.png"
    ],
    screenshotsDark: [
      "/screenshots/naveco-driver/dark-1.png",
      "/screenshots/naveco-driver/dark-2.png",
      "/screenshots/naveco-driver/dark-3.png"
    ],
    gradient: "from-emerald-700 via-green-800 to-teal-900",
    layout: "cascade",
    storeLinks: {
      android: "https://play.google.com/store/apps/details?id=com.naveco.driver&hl=fr",
      ios: "https://apps.apple.com/fr/app/naveco-driver/id1387842624"
    }
  },
  {
    name: "HelloBible",
    description: "Inspirational Christian content and daily verses.",
    detailedDescription: "A spiritual companion app delivering daily Bible verses, devotionals, and inspirational content. Features include reading plans, bookmarks, and a beautiful, distraction-free reading experience.",
    category: "Lifestyle",
    tech: ["Flutter", "NodeJs", "Firebase", "REST API", "OpenAI API", "Python", "LLM", "Prompt"],
    features: [
      "Daily verses & devotionals",
      "Reading plans",
      "Bookmark & notes",
      "Audio Bible readings",
      "AI Chat",
      "Prompt Engineering"
    ],
    screenshotsLight: [
      "/screenshots/hellobible/light-1.png",
      "/screenshots/hellobible/light-2.png"
    ],
    screenshotsDark: [
      "/screenshots/hellobible/dark-1.png",
      "/screenshots/hellobible/dark-2.png"
    ],
    gradient: "from-orange-400 via-orange-500 to-amber-500",
    layout: "spotlight",
    storeLinks: {
      android: "https://play.google.com/store/search?q=hellobible&c=apps",
      ios: "https://apps.apple.com/us/app/hellobible-bible-chat/id6502768944"
    }
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
      "/screenshots/click-menu-zen/light-1.png"
    ],
    screenshotsDark: [
      "/screenshots/click-menu-zen/dark-1.png"
    ],
    gradient: "from-lime-300 via-green-400 to-emerald-400",
    layout: "hero",
    requestSourceCode: true
  }
];

