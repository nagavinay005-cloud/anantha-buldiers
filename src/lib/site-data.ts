// Real authentic content constants sourced directly from ananthabuilders.com
export const SITE = {
  name: "Anantha Builders",
  tagline: "Redefining Luxury Living in Bhimavaram",
  phone: "+91 93483 88888",
  phoneAlt: "+91 91532 34567",
  phoneHref: "tel:+919348388888",
  whatsappHref: "https://wa.me/919348388888?text=Hello%20Anantha%20Builders%2C%20I%20am%20interested%20in%20your%20projects.",
  email: "ananthabuildersbvrm@gmail.com",
  address: "ANANTHA BUILDERS, Park Street, Market Yard Back Side, Kodavali Road, Narasagraharam, Bhimavaram.",
  logo: "/assets/images/home/logo/logo.png",
  whiteLogo: "/assets/images/home/logo/White logo.png",
  aboutLogo: "/assets/images/home/about/logo2.png",
  lakshmiLogo: "/assets/images/home/logo/lakshmi.png",
  chairman: "Koppuravuri Shanmukh Kumar",
  chairmanRole: "Chairman & Founder, Anantha Builders",
  chairmanQuote: "Every structure we build is a promise of quality, trust, and lasting value for generations.",
  chairmanImg: "/assets/images/about/team/main.png",
  signatureImg: "/assets/images/about/team/signatures-download-clipart-29-e1743574209464.png",
  heroImg: "/assets/images/home/hero/main.png",
  heroImgAlt: "/assets/images/home/gallery/im.jpeg",
};

// EXACT MATCH TO ORIGINAL WEBSITE NAVIGATION (PAGE NAMES AND ORDER)
export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Our Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/upcoming", label: "Upcoming Projects" },
  { to: "/contact", label: "Contact Us" },
] as const;

export const STATS = [
  { value: "20+", label: "Years Experience" },
  { value: "50+", label: "Completed Landmarks" },
  { value: "1000+", label: "Happy Families" },
  { value: "100%", label: "Quality Commitment" },
];

export const GALLERY_PAGE_DATA = {
  heroEyebrow: "Visual Craftsmanship",
  heroTitle: "Architectural Showcase & On-Site Gallery",
  heroSubtitle:
    "Explore our latest projects, interiors, architecture and design highlights.",
  
  categories: [
    "All Assets",
    "Architectural Renders",
    "Villas",
    "On-Site Progress",
    "Interiors & Landscapes",
  ],

  items: [
    {
      id: 1,
      title: "Tadepalligudem Apartment Elevation",
      category: "Architectural Renders",
      tag: "Apartment Exterior",
      src: "/assets/images/gallery/hero/project1.png",
      desc: "RERA approved 3D architectural elevation render of Tadepalligudem residential apartments.",
    },
    {
      id: 2,
      title: "Tadepalligudem Side View",
      category: "Architectural Renders",
      tag: "RERA Project",
      src: "/assets/images/gallery/completed/project1.png",
      desc: "Side elevation render showing ground floor parking deck and VDF heavy stone finish.",
    },
    {
      id: 3,
      title: "Residential Tower Render",
      category: "Architectural Renders",
      tag: "3D Render",
      src: "/assets/images/gallery/projects/002.png",
      desc: "Multi-unit apartment elevation with glass balcony railings and exterior weather paint.",
    },
    {
      id: 4,
      title: "Villa Architectural Render",
      category: "Villas",
      tag: "Villa Elevation",
      src: "/assets/images/gallery/projects/003.png",
      desc: "Bespoke 4BHK luxury villa render showcasing private car porch and teakwood portal.",
    },
    {
      id: 5,
      title: "Modern Building Facade",
      category: "Architectural Renders",
      tag: "Facade Scene",
      src: "/assets/images/gallery/projects/Scene 10.png",
      desc: "Contemporary residential block facade render incorporating UPVC window systems.",
    },
    {
      id: 6,
      title: "Architectural Scene",
      category: "Architectural Renders",
      tag: "Architectural Scene",
      src: "/assets/images/gallery/projects/Scene 2_a.png",
      desc: "High-angle architectural perspective render of multi-story urban residential tower.",
    },
    {
      id: 7,
      title: "Landscape Master Plan",
      category: "Interiors & Landscapes",
      tag: "Landscape & Garden",
      src: "/assets/images/gallery/projects/Scene 4.png",
      desc: "Private villa courtyard landscape with paved stone pathways and outdoor lighting.",
    },
    {
      id: 8,
      title: "Site Planning Draft",
      category: "Architectural Renders",
      tag: "Site Planning",
      src: "/assets/images/gallery/projects/Scene 3.png",
      desc: "Master layout plan resolving vehicular circulation, utility lines, and Vaastu orientation.",
    },
    {
      id: 9,
      title: "Night View Elevation",
      category: "Architectural Renders",
      tag: "Lighting Elevation",
      src: "/assets/images/gallery/projects/Scene 7.png",
      desc: "Night-time architectural illumination render showing exterior accent lighting.",
    },
    {
      id: 10,
      title: "Luxury Living Room Interior",
      category: "Interiors & Landscapes",
      tag: "Interior Fit-Out",
      src: "/assets/images/gallery/projects/Scene 8.png",
      desc: "Interior living room visualization with gypsum false ceiling and teakwood cabinetry.",
    },
    {
      id: 11,
      title: "Independent Villa Completed",
      category: "Villas",
      tag: "Completed Villa",
      src: "/assets/images/gallery/completed/im.jpeg",
      desc: "Actual completed 4BHK gated villa residence delivered in Bhimavaram.",
    },
    {
      id: 12,
      title: "On-Site Progress 1",
      category: "On-Site Progress",
      tag: "Site Progress",
      src: "/assets/images/gallery/construction/WhatsApp Image 2026-06-12 at 6.41.57 PM.jpeg",
      desc: "On-site civil construction progress showing RCC frame column binding and red brick masonry.",
    },
    {
      id: 13,
      title: "On-Site Progress 2",
      category: "On-Site Progress",
      tag: "Site Progress",
      src: "/assets/images/gallery/construction/WhatsApp Image 2026-06-12 at 6.41.58 PM.jpeg",
      desc: "On-site photo of RCC slab casting and ISI-certified TMT steel rebar inspection.",
    },
    {
      id: 14,
      title: "On-Site Progress 3",
      category: "On-Site Progress",
      tag: "Site Progress",
      src: "/assets/images/gallery/construction/WhatsApp Image 2026-06-12 at 6.45.31 PM.jpeg",
      desc: "Foundation excavation and footing concrete pouring audited by civil engineers.",
    },
  ],
};

export const SERVICES_PAGE_DATA = {
  heroEyebrow: "End-To-End Capabilities",
  heroTitle: "Comprehensive Architectural & Civil Engineering Services",
  heroSubtitle:
    "From master layout drafting and foundation masonry to high-performance UPVC fitting and turnkey project handovers across Andhra Pradesh.",
  
  processTimeline: [
    {
      phase: "01",
      title: "Architectural Design & Vaastu Planning",
      desc: "Conceptualizing 2D floor plans, 3D elevations, structural calculations, and authentic Vaastu alignment.",
    },
    {
      phase: "02",
      title: "Earthquake-Resistant RCC & Red Brick Masonry",
      desc: "Foundation excavation, certified TMT steel rebar binding, RCC column casting, and 9\" red brick masonry.",
    },
    {
      phase: "03",
      title: "Teakwood Joinery & UPVC Systems",
      desc: "Fitting solid teakwood main portals, concealed Finolex copper wiring, and Lakshmi Ganapathi Enterprises UPVC windows.",
    },
    {
      phase: "04",
      title: "Finishes, Inspection & Turnkey Handover",
      desc: "Altech smooth wall plastering, RAK vitrified tiling, V3F lift commissioning, rigorous quality audit, and timely handover.",
    },
  ],

  detailedServices: [
    {
      id: "apartments",
      n: "01",
      tag: "APARTMENTS",
      title: "Apartments Construction",
      desc: "Multi-unit residential blocks built from foundation to finishing with earthquake-resistant RCC framework and modern automatic elevators.",
      img: "/assets/images/services/services/002.png",
      features: ["Earthquake-resistant RCC frame", "9\" kiln red brick exterior walls", "V3F automatic elevators", "100% generator power backup"],
    },
    {
      id: "villas",
      n: "02",
      tag: "VILLAS",
      title: "Villas Construction",
      desc: "Independent luxury villas delivered as complete turnkey contracts with custom architectural layouts and private garden landscaping.",
      img: "/assets/images/services/services/im.jpeg",
      features: ["Turnkey single contract", "Private garden landscaping", "Solid teakwood portals", "Custom floor plan options"],
    },
    {
      id: "interior",
      n: "03",
      tag: "INTERIOR",
      title: "Interior Fit-Outs",
      desc: "Bespoke interiors planned around spatial ergonomics, gypsum false ceilings, polished teak wood joinery, and ambient lighting.",
      img: "/assets/images/services/services/7.png",
      features: ["Gypsum false ceiling design", "Custom teak cabinetry", "Ergonomic lighting placement", "Luppam smooth plastering"],
    },
    {
      id: "upvc",
      n: "04",
      tag: "UPVC",
      title: "UPVC Windows & Doors",
      desc: "High-performance, weatherproof UPVC window systems manufactured locally by partner firm Lakshmi Ganapathi Enterprises.",
      img: "/assets/images/services/icons/lakshmi.png",
      isLogo: true,
      features: ["Acoustic sound insulation", "UV-resistant weatherproof frames", "Precision steel reinforcement", "Low maintenance durability"],
    },
    {
      id: "landscape",
      n: "05",
      tag: "LANDSCAPE",
      title: "Landscapes & Greenery",
      desc: "Outdoor residential landscapes graded, planted, and paved for maximum durability, drainage efficiency, and aesthetic elegance.",
      img: "/assets/images/services/services/Scene 4.png",
      features: ["Rainwater drainage grading", "Paved stone walkways", "Sustainable plant selection", "Ambient outdoor lighting"],
    },
    {
      id: "layout",
      n: "06",
      tag: "LAYOUT",
      title: "Master Site Planning",
      desc: "Comprehensive site development layouts resolving vehicular circulation, utility pipelines, rainwater harvesting, and solar orientation.",
      img: "/assets/images/services/services/Scene 3.png",
      features: ["Vaastu compliant blueprints", "Circulation optimization", "Rainwater percolation pits", "Solar energy orientation"],
    },
    {
      id: "civil",
      n: "07",
      tag: "CIVIL",
      title: "Civil Execution & Site Management",
      desc: "On-site structural masonry execution, foundation pouring, steel binding, and quality assurance auditing by veteran engineers.",
      img: "/assets/images/services/services/Scene 10.png",
      features: ["Rigorous civil auditing", "Certified red brick masonry", "ISI steel rebar binding", "On-site safety protocols"],
    },
    {
      id: "material",
      n: "08",
      tag: "MATERIAL",
      title: "Material Contracts & Finishing",
      desc: "Direct sourcing of red bricks, certified steel, Finolex wiring, RAK vitrified tiles, and high-grade sand contracts.",
      img: "/assets/images/services/services/Scene 8.png",
      features: ["Finolex ISI copper wiring", "RAK vitrified 800x800 tiles", "High-grade cement contracts", "Transparent bill of quantities"],
    },
    {
      id: "management",
      n: "09",
      tag: "MANAGEMENT",
      title: "Turnkey Project Management",
      desc: "Complete project supervision, cost scheduling, contractor coordination, and timely key handover.",
      img: "/assets/images/services/services/003.png",
      features: ["On-time handover guarantee", "Transparent milestone billing", "Dedicated project manager", "100% Quality warranty"],
    },
  ],
};

export const PROJECTS_PAGE = {
  heroEyebrow: "Landmark Portfolio",
  heroTitle: "Signature Real Estate & Architectural Projects",
  heroSubtitle:
    "Explore our individual developments built with uncompromised engineering quality, RERA approvals, and modern architectural elegance across Andhra Pradesh.",
};

export const PROJECTS_LIST = [
  {
    id: "tadepalligudem",
    title: "Tadepalligudem Luxury Apartments",
    category: "Apartments",
    status: "RERA Approved",
    location: "Tadepalligudem, Andhra Pradesh",
    desc: "Earthquake-resistant RCC structure with teakwood joinery, V3F elevator technology, and full power generator backup.",
    img: "/assets/images/projects/tadepalligudem/project1.png",
    link: "/contact",
    config: "2 BHK & 3 BHK Luxury Apartments",
    brochure: "https://www.ananthabuilders.com/brochure/TADEPALLIGUDEM_BROCHURE.pdf",
    features: ["Earthquake Resistant RCC", "Teakwood Joinery", "UPVC Weatherproof Windows", "V3F Elevator", "100% Power Generator"],
  },
  {
    id: "villas",
    title: "Gated Villa Residences",
    category: "Villas",
    status: "Exclusive Villas",
    location: "Bhimavaram Prime",
    desc: "Bespoke luxury 4BHK villas designed around private courtyards, landscapes, and high-performance UPVC window systems.",
    img: "/assets/images/projects/villas/003.png",
    link: "/contact",
    config: "Luxury 4 BHK Gated Villas",
    brochure: "https://www.ananthabuilders.com/brochure/TADEPALLIGUDEM_BROCHURE.pdf",
    features: ["Private Courtyards", "Landscaped Gardens", "UPVC Window Systems", "Granite Steps", "Solar Heating"],
  },
  {
    id: "commercial",
    title: "Park Street Commercial Hub",
    category: "Commercial",
    status: "Commercial Hub",
    location: "Park Street, Bhimavaram",
    desc: "Multi-story commercial complex engineered for high footfall retail, corporate offices, and financial institutions.",
    img: "/assets/images/projects/commercial/7.png",
    link: "/contact",
    config: "Commercial Retail & Corporate Suites",
    brochure: "https://www.ananthabuilders.com/brochure/TADEPALLIGUDEM_BROCHURE.pdf",
    features: ["High Footfall Frontage", "Central Elevators", "Heavy Duty Load Capacity", "Glass Facade Architecture"],
  },
  {
    id: "residency",
    title: "Anantha Residency",
    category: "Upcoming",
    status: "Upcoming Project",
    location: "Kodavali Road, Bhimavaram",
    desc: "Upcoming 3BHK eco-friendly residential tower with solar common area lighting, EV vehicle charging, and modern amenities.",
    img: "/assets/images/projects/residency/Scene 10.png",
    link: "/contact",
    config: "Premium 3 BHK Eco-Flats",
    brochure: "https://www.ananthabuilders.com/brochure/TADEPALLIGUDEM_BROCHURE.pdf",
    features: ["Solar Common Illumination", "EV Vehicle Charging Bays", "Rainwater Harvesting", "Grid Ceiling Utility"],
  },
];

export const ABOUT_PAGE = {
  heroEyebrow: "About Anantha Builders",
  heroTitle: "Two Decades of Crafting Iconic Landmarks",
  heroSubtitle:
    "Established with a vision to revolutionize urban living in Bhimavaram, Anantha Builders stands as a symbol of architectural excellence, structural integrity, and trust.",
  heroBg: "/assets/images/about/background/director.svg",
  
  leadershipTitle: "A Philosophy Grounded in Excellence",
  storyParagraphs: [
    "Anantha Builders was established to set new benchmarks in construction quality and design elegance. Under the visionary leadership of Chairman Koppuravuri Shanmukh Kumar, our firm has transformed from a pioneer builder into Bhimavaram's most trusted luxury developer.",
    "We believe a home is not merely a physical structure, but an enduring sanctuary for families. By fusing traditional craftsmanship with cutting-edge civil engineering, we deliver spaces that stand the test of time.",
    "Our commitment extends beyond bricks and mortar—we prioritize structural safety, environmental sustainability, RERA compliance, and timely project handovers across Andhra Pradesh.",
  ],

  mission:
    "To design and construct world-class residential and commercial spaces that blend aesthetic sophistication, uncompromised structural quality, and environmental sustainability.",
  vision:
    "To be recognized as Andhra Pradesh's premier luxury builder, celebrated for setting international benchmarks in real estate architecture and customer trust.",
  
  coreValues: [
    {
      title: "Unyielding Quality",
      desc: "Certified red bricks, Finolex wiring, RAK vitrified tiles, and earthquake-resistant RCC frames in every construction.",
    },
    {
      title: "Complete Transparency",
      desc: "Clear documentation, RERA-approved layouts, honest pricing, and zero hidden charges.",
    },
    {
      title: "On-Time Delivery",
      desc: "Proven track record of handing over residential and commercial projects strictly within scheduled timelines.",
    },
    {
      title: "Technological Innovation",
      desc: "In-house manufacturing of high-performance UPVC window systems and doors via sister firm Lakshmi Ganapathi Enterprises.",
    },
  ],

  enterpriseSynergies: [
    {
      name: "Anantha Builders",
      logo: "/assets/images/about/company/logo.png",
      tag: "Core Construction Enterprise",
      desc: "Specializing in high-end residential apartments, gated villas, commercial complexes, and master-planned layouts. Known for premium RCC structures, teak wood joinery, and RERA-approved developments across Andhra Pradesh.",
      features: ["Multi-unit Apartments", "Gated Villa Communities", "Commercial Complexes", "RERA Approved Projects"],
    },
    {
      name: "Lakshmi Ganapathi Enterprises",
      logo: "/assets/images/about/company/lakshmi.png",
      tag: "UPVC Window & Door Division",
      desc: "Our dedicated division producing high-performance UPVC window systems and doors. Leveraging precision engineering to deliver superior acoustic insulation, weatherproofing, and energy efficiency.",
      features: ["Weatherproof Windows", "Acoustic Insulation", "Energy-Efficient Frames", "Custom Engineering"],
    },
  ],

  timeline: [
    {
      year: "2006",
      title: "Inception & Early Foundations",
      desc: "Established by Koppuravuri Shanmukh Kumar with a commitment to quality residential construction and transparent customer practices in Bhimavaram.",
    },
    {
      year: "2014",
      title: "UPVC Innovation Division",
      desc: "Founded sister firm Lakshmi Ganapathi Enterprises to manufacture high-performance, weatherproof UPVC window and door systems locally.",
    },
    {
      year: "2020",
      title: "Commercial & Villa Expansion",
      desc: "Diversified into large-scale commercial fit-outs and luxury gated villa communities across prime locations in Andhra Pradesh.",
    },
    {
      year: "2026",
      title: "1,000+ Families Milestone",
      desc: "Completed over 50+ landmark developments, serving 1,000+ satisfied families with ongoing projects in Tadepalligudem.",
    },
  ],

  constructionPillars: [
    {
      num: "01",
      title: "Earthquake-Resistant RCC Frame",
      desc: "Built with ISI-certified TMT steel bars and high-grade cement to withstand seismic forces.",
    },
    {
      num: "02",
      title: "Teakwood & UPVC Joinery",
      desc: "Polished natural teakwood main doors and weatherproof UPVC sliding windows for maximum longevity.",
    },
    {
      num: "03",
      title: "Certified Electrical & Plumbing",
      desc: "Concealed copper wiring with Finolex/Havells ISI standards and CPVC sanitary piping.",
    },
    {
      num: "04",
      title: "V3F Elevator & Generator Backup",
      desc: "Automatic six-passenger lifts with V3F technology and full power backup generators for common utilities.",
    },
  ],
};

export const FEATURED_PROJECTS = PROJECTS_LIST.slice(0, 3);

export const WHY_CHOOSE_US = [
  {
    num: "01",
    title: "Architectural Precision",
    desc: "Meticulously planned layouts prioritizing air flow, natural light, and optimal space utilization.",
  },
  {
    num: "02",
    title: "Superior Quality Assurance",
    desc: "Certified red bricks, Finolex wiring, RAK vitrified tiles, and earthquake-resistant RCC frames.",
  },
  {
    num: "03",
    title: "On-Time Handover Guarantee",
    desc: "Proven track record of delivering residential and commercial landmarks strictly within timelines.",
  },
  {
    num: "04",
    title: "UPVC Innovation",
    desc: "In-house manufacturing via sister firm Lakshmi Ganapathi Enterprises for weatherproof windows and doors.",
  },
  {
    num: "05",
    title: "Full Structural Warranty",
    desc: "Uncompromising integrity backed by rigorous quality testing at every construction phase.",
  },
  {
    num: "06",
    title: "Transparent Governance",
    desc: "Clear documentation, RERA approvals, and transparent pricing with no hidden charges.",
  },
];

export const GALLERY = GALLERY_PAGE_DATA.items.map((i) => i.src);

export const SERVICES = SERVICES_PAGE_DATA.detailedServices;

export const TESTIMONIALS = [
  {
    name: "Surya Narayana Raju",
    role: "Tadepalligudem Project",
    img: "/assets/images/about/team/1.jpeg",
    quote: "Anantha Builders delivered our apartment ahead of schedule with flawless construction quality. Their commitment to teakwood joinery and premium fittings is unmatched.",
  },
  {
    name: "Venkatrama Varma",
    role: "Gated Villa Homeowner",
    img: "/assets/images/about/team/2.jpeg",
    quote: "The UPVC windows from Lakshmi Ganapathi Enterprises made a tremendous difference in noise reduction and heat insulation for our villa. Highly recommended!",
  },
  {
    name: "K. Satyanarayana",
    role: "Commercial Complex Owner",
    img: "/assets/images/about/team/3.jpeg",
    quote: "From structural engineering to final painting, Chairman Shanmukh Kumar and his team maintained complete transparency throughout the project build.",
  },
  {
    name: "Sujatha",
    role: "Kurnool, Andhra Pradesh",
    img: "/assets/images/about/team/4.jpeg",
    quote: "Exceptional construction quality and timely delivery. The IGBC Gold rating and Vaastu compliance made our decision easy.",
  },
  {
    name: "Vijay Kishore",
    role: "Branch Head, IDBI Bank",
    img: "/assets/images/about/team/5.jpeg",
    quote: "Shanmukh Kumar and team delivered beyond our expectations. The modern amenities are worth every penny.",
  },
  {
    name: "Satish Maddala",
    role: "Bhimavaram",
    img: "/assets/images/about/team/6.jpeg",
    quote: "Best construction company in Bhimavaram. The attention to detail and Vaastu compliance gave us complete peace of mind.",
  },
];

export const HERO_IMG = "/assets/images/home/hero/main.png";
