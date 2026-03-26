export const site = {
  name: "Sweepsless in Seattle",
  tagline: "Cleaning made charming.",
  phoneDisplay: "(210) 954-2545",
  phoneTel: "+12109542545",
  email: "Sweepslessinseattle@gmail.com",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
  addresses: [
    { line1: "13110 NE 177th Pl #1049", line2: "Woodinville, WA 98072" },
  ],
  hours: "Mon\u2013Fri 8 AM\u20136 PM \u00b7 Sat 9 AM\u20131 PM",
} as const;

export const serviceAreas = [
  "Kirkland",
  "Mill Creek",
  "Redmond",
  "Bellevue",
  "Sammamish",
  "Edmonds",
  "Lynnwood",
  "Kenmore",
  "Bothell",
  "Woodinville",
  "Medina",
  "Mercer Island",
] as const;

export const hero = {
  titleLine1: "Cleaning Made",
  titleAccent: "Charming",
  subtitle: "We Promise To Sweep You Off Your Feet",
  cta: "Get Pricing",
  videoPoster:
    "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1600&q=80",
  testimonials: [
    {
      quote:
        "They\u2019re consistent, kind, and the floors actually look maintained\u2014not just \u201cwiped.\u201d Pricing was clear before the first visit.",
      author: "Jordan M., Kirkland",
    },
    {
      quote:
        "We needed a one-time reset before family flew in. The crew was on time, thorough, and worked around our dog without drama.",
      author: "Priya K., Bellevue",
    },
    {
      quote:
        "Biweekly cleans keep our busy house sane. Communication is easy and they remember the little notes we leave.",
      author: "Sam T., Woodinville",
    },
  ],
} as const;

export const trustBullets = [
  { id: "contracts", label: "No contracts", short: "Book on your terms" },
  { id: "schedule", label: "Flexible scheduling", short: "We adapt when life shifts" },
  { id: "custom", label: "Non-toxic products", short: "Plant-based & pet-safe care" },
  { id: "team", label: "Vetted employees", short: "Trained, insured teams" },
  { id: "happy", label: "Satisfaction promise", short: "We make it right" },
] as const;

export const differenceCards = [
  {
    id: "contracts",
    title: "No contracts",
    body: "We earn visits by doing great work\u2014not paperwork. Whether you want a single deep clean or an ongoing rhythm, you stay in control.",
  },
  {
    id: "schedule",
    title: "Flexible scheduling",
    body: "Need to move a day or squeeze in a last-minute reset? We accommodate when capacity allows, with clear windows and updates.",
  },
  {
    id: "nontoxic",
    title: "Non-toxic, plant-based & pet-safe",
    body: "No weepy toxic fumes. Our cleaning products are plant-based, EPA-approved, and safe for your furry family members\u2014because your home should feel like magic, not a chemistry lab.",
  },
  {
    id: "team",
    title: "Vetted, in-house teams",
    body: "You\u2019ll know who\u2019s in your home: background-checked professionals, insured operations, and consistent quality standards.",
  },
  {
    id: "happy",
    title: "Satisfaction promise",
    body: "If something misses the mark, tell us. We\u2019ll return to address it. Your peace of mind matters as much as the shine.",
  },
] as const;

export const servicesIntro = {
  eyebrow: "What we do",
  title: "Services that sweep you off your feet",
  heading: "Our services",
  description:
    "From steady upkeep to romantic reset, every service is designed around the details that make a home feel like magic.",
} as const;

export const services = [
  {
    id: "destiny",
    slug: "/services/destiny",
    name: "Restorative Clean",
    navLabel: "Restorative Clean",
    detailName: "The \u201cDestiny\u201d Routine",
    subtitle: "Restorative Clean",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
    quote: "Destiny is something that we\u2019ve invented because we can\u2019t stand the fact that everything that happens is accidental.",
    quoteAttr: "Annie, Sleepless in Seattle",
    blurb: "Destiny shouldn\u2019t be accidental\u2014and neither should a clean home. We don\u2019t just \u201cstandard clean\u201d\u2014we restore.",
    longDescription:
      "Destiny shouldn\u2019t be accidental\u2014and neither should a clean home. We don\u2019t just \u201cstandard clean\u201d\u2014we restore. Why bring low expectations into your living room? Our routine removes the day-to-day chaos with non-toxic, plant-based care, making sure your home feels like magic every single week\u2014no weepy toxic fumes required.",
    includes: [
      "Kitchen countertops, stovetop, sink, and appliance exteriors",
      "Bathroom sanitization\u2014toilets, showers, mirrors, floors",
      "Dusting all reachable surfaces and ceiling fans",
      "Vacuuming and mopping hard floors throughout",
      "Bed making and general tidying of living spaces",
      "Trash and recycling taken to bins",
    ],
  },
  {
    id: "million-things",
    slug: "/services/million-things",
    name: "Deep Clean",
    navLabel: "Deep Clean",
    detailName: "The Million Tiny Little Things",
    subtitle: "Deep Clean",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&q=80",
    quote: "It was a million tiny things that, when you added them all up, they just meant we were supposed to be together.",
    quoteAttr: "Sam Baldwin, Sleepless in Seattle",
    blurb: "Every tiny detail added up until your home feels like magic. This is the full restoration you\u2019ve been putting off.",
    longDescription:
      "This clean is exactly like that\u2014every tiny detail added up until your home feels like magic. We do the things that are \u201ctoo much work\u201d for a Tuesday night. It\u2019s not just a cleaning; it\u2019s a full restoration. You\u2019re not paying for soap; you\u2019re paying for the feeling of walking into your house and realizing you finally belong there again.",
    includes: [
      "Hand-wiping every single blind slat",
      "Steaming the grime out of window tracks",
      "Vacuuming behind the heavy furniture that hasn\u2019t moved since 1993",
      "Baseboards, door frames, and light switch plates",
      "Inside oven and microwave",
      "Inside refrigerator (shelves and drawers)",
      "Detailed bathroom grout and tile scrub",
    ],
  },
  {
    id: "observation-deck",
    slug: "/services/observation-deck",
    name: "Date Night In",
    navLabel: "Date Night In",
    detailName: "The \u201cObservation Deck\u201d Candlelight & Cabernet",
    subtitle: "Candlelight & Cabernet",
    baseNote: "Includes a full Restorative Clean as the base",
    image: "/date-1.jpg",
    galleryImages: ["/date-1.jpg", "/date-2.jpg"],
    quote: "You don\u2019t want to be in love. You want to be in love in a movie.",
    quoteAttr: "Becky, Sleepless in Seattle",
    blurb: "For a \u201ctop of the world\u201d feeling in your own living room. We handle the atmosphere so you can be present.",
    longDescription:
      "If you\u2019re trying to create magic but your living room currently has the aesthetic of a naval base, your date is going to feel more like a therapy session with Dr. Marcia Fieldstone than a trip to the top of the Empire State Building. You have a million decisions that mean nothing to make\u2014like which tie to wear or if you have enough verbal ability to keep the conversation going. Let us handle the one decision that actually matters: the atmosphere.",
    includes: [
      "Full restorative clean of your main living spaces",
      "Kitchen and bathroom deep pass",
      "Floor care throughout",
      "All surfaces dusted and polished",
    ],
    addOns: [
      {
        name: "The \u201c102nd Floor\u201d Candle & Matches",
        description: "A premium scented candle with a box of matches left on the coffee table. No one wants to realize they\u2019re falling in love while staring at a cobweb\u2014good lighting is everything.",
      },
      {
        name: "The \u201cArchitecture of Love\u201d Snack Spread",
        description: "A curated selection of artisanal snacks\u2014think sophisticated meats and cheeses, not just a slice of pizza\u2014set out for grazing.",
      },
      {
        name: "Sweepsless & Smitten Stems",
        description: "Annie Reed went all the way to a rainy rooftop looking for a sign. Your date only has to walk into your living room. A fresh bouquet says, \u201cI was expecting you, and I wanted today to be different.\u201d",
      },
      {
        name: "The \u201cSubconscious Attraction\u201d Pairing",
        description: "We position the bottle right next to your Sweepsless & Smitten Stems, creating a visual centerpiece that says, \u201cI\u2019ve been expecting you, and I\u2019ve thought of everything.\u201d",
      },
    ],
  },
  {
    id: "midnight-radio",
    slug: "/services/midnight-radio",
    name: "Puppy Package",
    navLabel: "Puppy Package",
    detailName: "The \u201cMidnight Radio\u201d Mid-Day Break",
    subtitle: "Mid-Day Break for Your Best Friend",
    baseNote: "Includes a full Restorative Clean as the base",
    image: "/puppy-1.jpg",
    galleryImages: ["/puppy-1.jpg", "/puppy-2.jpg", "/puppy-3.jpg"],
    quote: "For the pup who needs a \u2018Heart-to-Heart\u2019 session while you are holding down the fort on \u2018The Rainy Side Of Town.\u2019",
    quoteAttr: "Sweepsless in Seattle",
    blurb: "For the pup who needs a \u2018heart-to-heart\u2019 session while you are holding down the fort on the rainy side of town.",
    longDescription:
      "We get it\u2014being a business professional means your schedule is often as packed as the observation deck at sunset. We know that heavy feeling when meetings run long and you are stuck in the office while your best friend is waiting by the door for a sign. You\u2019re working hard to provide the \u2018magic,\u2019 but that doesn\u2019t mean you don\u2019t feel the tug on your heartstrings when you can\u2019t be there.",
    includes: [
      "Full restorative clean of your main living spaces",
      "Kitchen and bathroom deep pass",
      "Floor care throughout",
      "All surfaces dusted and polished",
    ],
    addOns: [
      {
        name: "The \u201cSeattle Drizzle\u201d (20 min Walk)",
        description: "A walk through the neighborhood, rain or shine (mostly rain).",
      },
      {
        name: "The \u201cEmpire State\u201d Playtime (10 min Play)",
        description: "\u201cTop of the World\u201d belly rubs: premium scratches that feel like a meeting at sunset.",
      },
      {
        name: "The \u201cAffair to Remem-Bark\u201d Tug (10 min Play)",
        description: "A high-energy tug-of-war session with a rope toy.",
      },
      {
        name: "The \u201cVictoria\u201d Yard Cleanup",
        description: "We\u2019ll clear the front and back yard of any \u201cunsolicited\u201d packages left behind.",
      },
      {
        name: "The \u201cScent-less in Seattle\u201d Spa",
        description: "A full bath and brush-out for your four-legged friend.",
      },
      {
        name: "The \u201cPup Box\u201d Sampler",
        description: "A small toy, pup bandana, and assorted premium treats.",
      },
    ],
  },
] as const;

export type Service = (typeof services)[number];

export const reviewsHeading = {
  eyebrow: "Word on the street",
  title: "What neighbors say",
} as const;

export const curatedReviews = [
  {
    name: "Morgan L.",
    neighborhood: "Kirkland",
    excerpt: "Clear communication, on-time arrivals, and they actually listen to the \u201cplease focus here\u201d list. Our townhome has never stayed this tidy between visits.",
  },
  {
    name: "Chris P.",
    neighborhood: "Bellevue",
    excerpt: "We tried a few services\u2014this crew is the first that felt consistent. Same attention to the kitchen every time, which is where we care most.",
  },
  {
    name: "Ana V.",
    neighborhood: "Woodinville",
    excerpt: "The deep clean was incredible. They hit cabinets, tracks, and corners I would have rushed past. It felt like a whole new house.",
  },
  {
    name: "Taylor S.",
    neighborhood: "Redmond",
    excerpt: "Deep clean before the holidays made the whole house feel lighter. Friendly team, no weird surprises on the invoice.",
  },
  {
    name: "Riley D.",
    neighborhood: "Bothell",
    excerpt: "We\u2019ve been using Sweepsless biweekly for over a year. The same team comes every time and they remember our preferences. It\u2019s like clockwork.",
  },
  {
    name: "Jamie H.",
    neighborhood: "Sammamish",
    excerpt: "As-needed bookings work for our irregular schedule. Easy to reschedule when work trips pop up. Truly flexible.",
  },
  {
    name: "Sam T.",
    neighborhood: "Kenmore",
    excerpt: "Booked the Observation Deck package for our anniversary. Walking in to candles, fresh flowers, and a spotless house\u2014it was genuinely romantic.",
  },
  {
    name: "Priya K.",
    neighborhood: "Mercer Island",
    excerpt: "The plant-based products were a huge selling point for us. No chemical smell, just a fresh, clean home. Our kids and dog approve.",
  },
] as const;

export const processSection = {
  eyebrow: "How it works",
  title: "Simple from first message to spotless",
  intro: "You\u2019ll always know what to expect: a quick scope, a plan that matches your home, and steady updates as visits approach.",
  learnMoreHref: "/get-pricing",
  steps: [
    {
      title: "Tell us what you need",
      body: "Share home size, priorities, and timing. We\u2019ll recommend a service that fits.",
    },
    {
      title: "Get your estimate",
      body: "We clarify access, pets, supplies, and any sensitivities. You get transparent pricing\u2014no mystery add-ons.",
    },
    {
      title: "Your cleaning plan",
      body: "We document room-by-room notes so teams arrive aligned. Adjust anytime as seasons or routines change.",
    },
    {
      title: "Service day",
      body: "Trained cleaners arrive with plant-based supplies, follow your plan, and respect your space.",
    },
    {
      title: "Quality check & feedback",
      body: "Walk through if you like; we want the details right. Tell us fast\u2014we\u2019ll make it right.",
    },
  ],
} as const;

export const familyBand = {
  title: "Local, accountable, people-first",
  body: "Sweepsless in Seattle is built for neighbors who want dependable cleaning without the runaround. We invest in training, fair scheduling, and communication\u2014because trust is part of the service. Being Sleepless is only romantic in the movies\u2014let us handle the scrubbing so you can get a full night\u2019s sleep.",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
  cta: "Get Pricing",
} as const;

export const aboutPage = {
  heroTitle: "Our story",
  heroSubtitle: "We promise to sweep you off your feet.",
  story: [
    "Sweepsless in Seattle started with a simple observation: finding a cleaning service that\u2019s both dependable and pleasant to work with shouldn\u2019t be this hard.",
    "We built our company around the things that frustrated us as customers\u2014rigid contracts, inconsistent teams, surprise charges, toxic products, and poor communication. Every policy we have exists because we experienced the opposite elsewhere and decided to fix it.",
    "Today we serve homes across Woodinville, Kirkland, Bellevue, and the greater Eastside with trained, vetted teams who use non-toxic, plant-based products and treat your space with genuine care. We\u2019re not trying to be the biggest cleaning company in the area. We\u2019re trying to be the one you actually recommend to friends.",
  ],
  values: [
    { title: "Consistency over flash", body: "The same high standard, every visit. We track notes, preferences, and feedback so nothing slips." },
    { title: "Honest communication", body: "Clear pricing, real arrival windows, and fast responses. If something changes, you\u2019ll know." },
    { title: "People matter", body: "Our cleaners earn fair wages, work reasonable hours, and receive ongoing training. Happy teams do better work." },
    { title: "Local roots", body: "We live here too. We care about the neighborhoods we serve and the reputation we\u2019re building in them." },
  ],
} as const;

export const contactPage = {
  heroTitle: "Get in touch",
  heroSubtitle: "Questions, quotes, or just saying hello\u2014we\u2019re here.",
  intro: "Call, text, or email us. We aim to respond within a few hours during business days. For scheduling or service questions, reach out anytime.",
} as const;

export const faqItems = [
  {
    question: "How much does house cleaning cost?",
    answer: "Pricing depends on home size, service type, and frequency. We provide a clear estimate before your first appointment with no hidden fees. Fill out our Get Pricing form for a personalized quote.",
  },
  {
    question: "Do I need to sign a contract?",
    answer: "No. Sweepsless in Seattle operates without contracts. You can book a single visit or set up a recurring schedule and cancel or pause anytime\u2014no penalties, no commitments.",
  },
  {
    question: "What cleaning products do you use?",
    answer: "We use non-toxic, plant-based cleaning products\u2014no weepy toxic fumes required. If you have sensitivities or prefer specific products, let us know and we\u2019ll accommodate.",
  },
  {
    question: "Are your cleaners background-checked?",
    answer: "Yes. Every member of our team is background-checked, insured, and receives ongoing training. We only use in-house employees\u2014never subcontractors.",
  },
  {
    question: "What areas do you serve?",
    answer: "We serve Kirkland, Mill Creek, Redmond, Bellevue, Sammamish, Edmonds, Lynnwood, Kenmore, Bothell, Woodinville, Medina, and Mercer Island.",
  },
  {
    question: "What\u2019s the Date Night In package?",
    answer: "It\u2019s our signature date-night-in service. Beyond a full restorative clean, we set the atmosphere with a premium scented candle, artisanal snack spread, fresh bouquet, and a bottle of wine\u2014so you can be fully present for the evening.",
  },
  {
    question: "What\u2019s the Puppy Package?",
    answer: "Our mid-day break for busy pet parents. It includes a full restorative clean plus add-ons like walks, playtime, yard cleanup, a spa bath, and treat samplers\u2014so your best friend is cared for while you\u2019re at work.",
  },
  {
    question: "Can I reschedule or skip a cleaning?",
    answer: "Absolutely. We understand life is unpredictable. You can reschedule or skip a visit with reasonable notice\u2014just call, text, or email and we\u2019ll adjust your schedule.",
  },
] as const;

export const nav = {
  primary: [
    {
      label: "Services",
      href: "/services/destiny",
      children: services.map((s) => ({ label: s.navLabel, href: s.slug })),
    },
    { label: "About", href: "/about" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
