// Tech Stack Skills Configuration
// Add or remove skills here - changes will automatically reflect in the About section

export interface Skill {
  name: string; // For accessibility and SEO
  Icon: () => JSX.Element;
  color: string; // Tailwind gradient classes
}

// Individual Tech Icons as SVG Components
const FlutterIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <path fill="#42A5F5" d="M14.9 46.5L27.4 34l7.5 7.5-12.5 12.5H14.9z"/>
    <path fill="#0277BD" d="M34.9 41.5L27.4 34l7.5-7.5L47.4 39 34.9 51.5l-7.5-7.5z"/>
    <path fill="#42A5F5" d="M47.4 26.5L34.9 14 14.9 34l12.5 12.5z"/>
  </svg>
);

const DartIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <path fill="#00D2B8" d="M13 13l25-11 24 24-11 25-25-11z"/>
    <path fill="#55DDCA" d="M38 2L13 13l25 25z"/>
    <path fill="#0075C9" d="M38 38l11-25 13 13-11 25z"/>
    <path fill="#00A4C4" d="M51 26l11 11-24 24-11-11z"/>
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <path fill="#3776AB" d="M32 2C20 2 21 7 21 7v10h11v2H15s-8-1-8 13 7 13 7 13h4v-6s0-7 7-7h21s7 0 7-7V9s1-7-11-7h-8zm-6 4a3 3 0 110 6 3 3 0 010-6z"/>
    <path fill="#FFD43B" d="M32 62c12 0 11-5 11-5V47H32v-2h17s8 1 8-13-7-13-7-13h-4v6s0 7-7 7H18s-7 0-7 7v16s-1 7 11 7h8zm6-4a3 3 0 110-6 3 3 0 010 6z"/>
  </svg>
);

const FastAPIIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <circle cx="32" cy="32" r="30" fill="#009688"/>
    <path fill="#fff" d="M32 12l8 20H24l8-20zM32 52l-8-20h16l-8 20z"/>
    <circle cx="32" cy="32" r="4" fill="#fff"/>
  </svg>
);

const GraphQLIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <path fill="#E10098" d="M32 4l24 14v28L32 60 8 46V18L32 4z"/>
    <path fill="#fff" d="M32 14l16 9v18l-16 9-16-9V23l16-9z"/>
    <circle cx="32" cy="32" r="6" fill="#E10098"/>
  </svg>
);

const RestAPIIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <rect x="8" y="16" width="48" height="8" rx="2" fill="#6366F1"/>
    <rect x="8" y="28" width="48" height="8" rx="2" fill="#8B5CF6"/>
    <rect x="8" y="40" width="48" height="8" rx="2" fill="#A855F7"/>
    <circle cx="14" cy="20" r="2" fill="#fff"/>
    <circle cx="14" cy="32" r="2" fill="#fff"/>
    <circle cx="14" cy="44" r="2" fill="#fff"/>
  </svg>
);

const FirebaseIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <path fill="#FFA000" d="M12 52l8-50 12 22z"/>
    <path fill="#F57C00" d="M32 24L20 2l4-2 12 24z"/>
    <path fill="#FFCA28" d="M52 52L32 24 12 52l20 10z"/>
  </svg>
);

const SQLModelIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <ellipse cx="32" cy="16" rx="24" ry="8" fill="#5B21B6"/>
    <path fill="#7C3AED" d="M8 16v16c0 4.4 10.7 8 24 8s24-3.6 24-8V16c0 4.4-10.7 8-24 8S8 20.4 8 16z"/>
    <path fill="#8B5CF6" d="M8 32v16c0 4.4 10.7 8 24 8s24-3.6 24-8V32c0 4.4-10.7 8-24 8S8 36.4 8 32z"/>
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <path fill="#F05032" d="M31.3 2.1L2.1 31.3c-1.4 1.4-1.4 3.7 0 5.1l29.2 29.2c1.4 1.4 3.7 1.4 5.1 0l29.2-29.2c1.4-1.4 1.4-3.7 0-5.1L36.4 2.1c-1.4-1.4-3.7-1.4-5.1 0z"/>
    <path fill="#fff" d="M32 18l8 8-8 8-8-8 8-8z"/>
    <circle cx="32" cy="38" r="4" fill="#fff"/>
  </svg>
);

const DockerIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <path fill="#2496ED" d="M32 4C16.6 4 4 16.6 4 32s12.6 28 28 28 28-12.6 28-28S47.4 4 32 4z"/>
    <rect x="18" y="22" width="6" height="6" fill="#fff"/>
    <rect x="26" y="22" width="6" height="6" fill="#fff"/>
    <rect x="34" y="22" width="6" height="6" fill="#fff"/>
    <rect x="18" y="30" width="6" height="6" fill="#fff"/>
    <rect x="26" y="30" width="6" height="6" fill="#fff"/>
    <rect x="34" y="30" width="6" height="6" fill="#fff"/>
    <rect x="26" y="14" width="6" height="6" fill="#fff"/>
  </svg>
);

const TypeScriptIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <rect width="64" height="64" rx="8" fill="#3178C6"/>
    <path fill="#fff" d="M28 38h-6v-8h-6v-4h18v4h-6v8zm10-12h8c3 0 5 2 5 5v5c0 3-2 5-5 5h-8v-15zm4 11h3c1 0 2-1 2-2v-3c0-1-1-2-2-2h-3v7z"/>
  </svg>
);

const NodeJSIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <path fill="#68A063" d="M32 4L8 18v28l24 14 24-14V18L32 4z"/>
    <path fill="#fff" d="M32 18v28l-16-9V23l16-5z"/>
    <path fill="#539E43" d="M32 18v28l16-9V23l-16-5z"/>
  </svg>
);

const PostgreSQLIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <ellipse cx="32" cy="24" rx="22" ry="12" fill="#336791"/>
    <path fill="#336791" d="M10 24v16c0 6.6 9.8 12 22 12s22-5.4 22-12V24c0 6.6-9.8 12-22 12S10 30.6 10 24z"/>
    <circle cx="26" cy="24" r="3" fill="#fff"/>
    <circle cx="38" cy="24" r="3" fill="#fff"/>
  </svg>
);

const MongoDBIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <path fill="#47A248" d="M32 4L16 12v24l16 20 16-20V12L32 4z"/>
    <path fill="#3FA037" d="M32 4v56l16-20V12L32 4z"/>
    <path fill="#4FAA41" d="M32 4L16 12v24l16 20V4z"/>
    <ellipse cx="32" cy="54" rx="4" ry="6" fill="#8CC84B"/>
  </svg>
);

const RedisIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <ellipse cx="32" cy="20" rx="28" ry="10" fill="#DC382D"/>
    <ellipse cx="32" cy="32" rx="28" ry="10" fill="#C6302B"/>
    <ellipse cx="32" cy="44" rx="28" ry="10" fill="#A41E11"/>
    <path fill="#fff" d="M20 18l12 6-12 6V18z"/>
    <circle cx="42" cy="20" r="3" fill="#fff"/>
  </svg>
);

// ========================================
// MAIN SKILLS ARRAY - Edit this to add/remove skills
// ========================================
export const skills: Skill[] = [
  { name: 'Flutter', Icon: FlutterIcon, color: 'from-blue-500 to-cyan-500' },
  { name: 'Dart', Icon: DartIcon, color: 'from-cyan-500 to-teal-500' },
  { name: 'Python', Icon: PythonIcon, color: 'from-yellow-500 to-blue-500' },
  { name: 'FastAPI', Icon: FastAPIIcon, color: 'from-green-500 to-emerald-500' },
  { name: 'GraphQL', Icon: GraphQLIcon, color: 'from-pink-500 to-rose-500' },
  { name: 'REST API', Icon: RestAPIIcon, color: 'from-purple-500 to-indigo-500' },
  { name: 'Firebase', Icon: FirebaseIcon, color: 'from-orange-500 to-red-500' },
  { name: 'SQLModel', Icon: SQLModelIcon, color: 'from-indigo-500 to-purple-500' },
  
  // ========================================
  // Additional skills (uncomment to add):
  // ========================================
  // { name: 'Git', Icon: GitIcon, color: 'from-red-500 to-orange-500' },
  // { name: 'Docker', Icon: DockerIcon, color: 'from-blue-500 to-blue-600' },
  // { name: 'TypeScript', Icon: TypeScriptIcon, color: 'from-blue-600 to-blue-700' },
  // { name: 'Node.js', Icon: NodeJSIcon, color: 'from-green-600 to-green-700' },
  // { name: 'PostgreSQL', Icon: PostgreSQLIcon, color: 'from-blue-700 to-indigo-700' },
  // { name: 'MongoDB', Icon: MongoDBIcon, color: 'from-green-500 to-green-600' },
  // { name: 'Redis', Icon: RedisIcon, color: 'from-red-600 to-red-700' },
];

// ========================================
// HOW TO ADD A NEW SKILL:
// ========================================
// 1. Create a new Icon component following the pattern above
// 2. Add it to the skills array with a name, Icon, and color
// 3. Save this file - changes will automatically appear on your site!
//
// Example:
// const MyNewIcon = () => (
//   <svg viewBox="0 0 64 64" className="w-full h-full">
//     <circle cx="32" cy="32" r="30" fill="#YOUR_COLOR"/>
//   </svg>
// );
//
// Then add to skills array:
// { name: 'My New Tech', Icon: MyNewIcon, color: 'from-blue-500 to-purple-500' },


