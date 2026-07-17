export interface ServiceProcessStep {
  step: string;
  t: string;
  d: string;
}

export interface Service {
  id: string;
  icon: string;
  name: string;
  desc: string;
  long: string;
  intro: string;
  scope: string[];
  process: ServiceProcessStep[];
  num: string;
  items: string[];
}

const rawServices: (Omit<Service, "num" | "items" | "process"> & {
  process: { t: string; d: string }[];
})[] = [
  {
    id: "pre-construction-planning",
    icon: "📐",
    name: "Pre-Construction & Planning",
    desc: "Drawings, estimates and approvals sorted before a single brick is laid.",
    long: "We help you start right — concept drawings, structural design, BOQ estimates, budgeting and municipality approvals so your build is clear, costed and compliant from day one.",
    intro:
      "A strong build begins long before construction. Our pre-construction and planning service turns your idea into a clear, costed, buildable plan — covering design, budgeting, permits and scheduling so there are no expensive surprises later.",
    scope: [
      "Concept & architectural drawings",
      "Structural & MEP design coordination",
      "Detailed BOQ & cost estimation",
      "Municipality drawing approval & permits",
      "Project timeline & phasing plan",
      "Material specification & budgeting",
    ],
    process: [
      { t: "Brief & Requirement", d: "We sit with you to understand your vision, plot, family needs and budget." },
      { t: "Drawings & Design", d: "Architectural, structural and MEP drawings prepared by qualified engineers." },
      { t: "Estimate & Approval", d: "Itemised BOQ, costing, and municipality approval paperwork handled for you." },
      { t: "Build-Ready Plan", d: "A locked scope, timeline and budget so construction starts with confidence." },
    ],
  },
  {
    id: "site-survey",
    icon: "🧭",
    name: "Site Survey",
    desc: "Accurate land measurement, levelling and mapping of your plot.",
    long: "Professional site surveying — boundary measurement, levelling, contour and layout marking — giving your project an accurate foundation and avoiding boundary or setback disputes.",
    intro:
      "Every reliable build rests on accurate site data. Our survey team measures, levels and maps your plot precisely, marking boundaries, setbacks and levels so design and construction sit exactly where they should.",
    scope: [
      "Boundary & area measurement",
      "Topographic & contour survey",
      "Level & elevation marking",
      "Setback & building-line layout",
      "Plot demarcation & pegging",
      "Survey report & drawings",
    ],
    process: [
      { t: "Site Visit", d: "Our surveyors visit your plot with calibrated instruments." },
      { t: "Measure & Map", d: "Boundaries, levels and contours recorded accurately." },
      { t: "Layout Marking", d: "Setbacks and building lines pegged on the ground." },
      { t: "Report", d: "A clear survey report and drawing handed to you and your designer." },
    ],
  },
  {
    id: "soil-testing",
    icon: "🔬",
    name: "Soil Testing",
    desc: "Know your ground before you build — bearing capacity and safe foundation advice.",
    long: "Geotechnical soil testing to determine bearing capacity, soil type and water table, so your foundation is designed safely and economically for the actual ground conditions.",
    intro:
      "The ground decides your foundation. We carry out soil investigation and testing to establish bearing capacity, soil composition and water table, giving your structural engineer the data to design a safe, cost-effective foundation.",
    scope: [
      "Soil sample collection & boring",
      "Bearing capacity testing",
      "Soil classification & analysis",
      "Water-table assessment",
      "Foundation recommendation",
      "Detailed geotechnical report",
    ],
    process: [
      { t: "Boring", d: "Samples collected at required depths across the plot." },
      { t: "Lab Testing", d: "Samples analysed for strength, type and moisture." },
      { t: "Analysis", d: "Bearing capacity and risks evaluated by engineers." },
      { t: "Report & Advice", d: "Clear foundation recommendations for safe, economical design." },
    ],
  },
  {
    id: "full-house-construction",
    icon: "🏗️",
    name: "Full House Construction",
    desc: "End-to-end construction — from foundation to handover of a finished home.",
    long: "Turnkey house construction managed start to finish: foundation, structure, masonry, finishing, MEP and handover — built to engineering standards with genuine materials and a clear timeline.",
    intro:
      "Hand us the plot and the plan — we deliver a finished home. Our turnkey construction service manages every stage from foundation to final finishing, with our own skilled teams, genuine materials and transparent milestone billing.",
    scope: [
      "Foundation & structural work (RCC)",
      "Brickwork & masonry",
      "Plumbing & electrical rough-in",
      "Plastering, flooring & finishing",
      "Doors, windows & fixtures",
      "Final handover & cleanup",
    ],
    process: [
      { t: "Plan & Contract", d: "Agreed drawings, BOQ, milestones and timeline." },
      { t: "Structure", d: "Foundation, columns, slabs and masonry built to spec." },
      { t: "MEP & Finishing", d: "Plumbing, wiring, plaster, flooring and paint." },
      { t: "Handover", d: "Final checks, cleaning and keys handed over." },
    ],
  },
  {
    id: "personal-home-construction",
    icon: "🏠",
    name: "Personal Home Construction",
    desc: "Your dream home, built around your family, lifestyle and budget.",
    long: "Custom residential construction tailored to how you live — personalised layouts, quality finishes and close communication throughout, so the home truly reflects your family and budget.",
    intro:
      "Your home should fit your life, not the other way around. We build personal residences with custom layouts, finishes and details chosen with you — combining craftsmanship with honest budgeting and regular updates at every stage.",
    scope: [
      "Personalised layout & design input",
      "Quality structural construction",
      "Custom finishes & material choices",
      "Plumbing, electrical & ventilation",
      "Kitchen, bath & interior fit-out",
      "Regular progress updates",
    ],
    process: [
      { t: "Understand You", d: "We learn your family, lifestyle and must-haves." },
      { t: "Design & Cost", d: "Tailored layout, finishes and a clear budget." },
      { t: "Build", d: "Construction with regular site updates to you." },
      { t: "Move In", d: "A finished, personalised home ready to live in." },
    ],
  },
  {
    id: "commercial-building-construction",
    icon: "🏢",
    name: "Commercial Building Construction",
    desc: "Shops, offices and commercial complexes built to code and to schedule.",
    long: "Commercial construction for retail, office and mixed-use buildings — robust structures, compliant MEP, and on-schedule delivery suited to business needs and footfall.",
    intro:
      "Commercial buildings demand durability, compliance and timing. We construct shops, offices and complexes with strong structures, code-compliant systems and schedules built around opening dates and budgets.",
    scope: [
      "RCC framed structure",
      "Commercial-grade MEP systems",
      "Fire & safety compliance",
      "Facade & glazing works",
      "Parking & common areas",
      "Fit-out coordination",
    ],
    process: [
      { t: "Feasibility", d: "Requirements, code review and costing." },
      { t: "Structure", d: "Framed construction built for commercial loads." },
      { t: "Systems & Facade", d: "MEP, fire safety and exterior works." },
      { t: "Handover", d: "Compliant, fit-out-ready building delivered." },
    ],
  },
  {
    id: "room-addition",
    icon: "➕",
    name: "Room Addition",
    desc: "Extra rooms and floors added cleanly to your existing home.",
    long: "Need more space? We add rooms, floors and extensions to existing homes — with structural checks, matched finishes and minimal disruption to the rest of your house.",
    intro:
      "Growing family or new need? We add rooms, floors and extensions to your existing home — starting with a structural assessment, then building and finishing the new space to blend seamlessly with what you already have.",
    scope: [
      "Structural feasibility check",
      "Vertical & horizontal extensions",
      "Matching existing finishes",
      "New plumbing & electrical points",
      "Minimal-disruption phasing",
      "Clean integration & handover",
    ],
    process: [
      { t: "Assess", d: "We check if your structure can carry the addition." },
      { t: "Design", d: "New space designed to match your home." },
      { t: "Build", d: "Construction with care to keep you living comfortably." },
      { t: "Blend & Finish", d: "Finishes matched so the addition feels original." },
    ],
  },
  {
    id: "renovation",
    icon: "🔄",
    name: "Renovation",
    desc: "Modernise and refresh old homes — layout, finishes and systems.",
    long: "Full and partial renovation — reworking layouts, upgrading kitchens and baths, refreshing finishes and modernising plumbing and wiring to bring old homes back to life.",
    intro:
      "Give your home a second life. Our renovation service reworks tired layouts, upgrades kitchens, baths and finishes, and modernises plumbing and wiring — transforming old spaces into comfortable, contemporary homes.",
    scope: [
      "Layout & space rework",
      "Kitchen & bathroom upgrades",
      "New flooring, paint & finishes",
      "Plumbing & electrical modernisation",
      "Structural repairs as needed",
      "Old-to-new transformation",
    ],
    process: [
      { t: "Survey", d: "We assess the existing condition and your goals." },
      { t: "Plan", d: "Renovation scope, finishes and budget agreed." },
      { t: "Execute", d: "Demolition, rebuild and upgrade works." },
      { t: "Reveal", d: "A refreshed, modern home handed back to you." },
    ],
  },
  {
    id: "repairing",
    icon: "🛠️",
    name: "Repairing",
    desc: "Quick, reliable fixes for plumbing, electrical, walls and more.",
    long: "Dependable repair service for everyday home problems — leaks, cracks, electrical faults, broken fixtures and damp — handled quickly by skilled hands with genuine parts.",
    intro:
      "When something breaks, you need it fixed properly and fast. Our repair teams handle plumbing leaks, electrical faults, wall cracks, damp, broken fixtures and more — quick response, genuine parts, lasting fixes.",
    scope: [
      "Plumbing leak & tap repairs",
      "Electrical fault fixing",
      "Wall crack & plaster repair",
      "Damp & seepage treatment",
      "Fixture & fitting replacement",
      "General home maintenance",
    ],
    process: [
      { t: "Report", d: "Tell us the problem; we assess over call or visit." },
      { t: "Diagnose", d: "On-site inspection to find the real cause." },
      { t: "Repair", d: "Fixed with genuine parts by skilled technicians." },
      { t: "Check", d: "We verify the fix and clean up." },
    ],
  },
  {
    id: "waterproofing",
    icon: "💧",
    name: "Waterproofing",
    desc: "Stop leaks and damp for good — roofs, baths, basements and walls.",
    long: "Professional waterproofing for roofs, terraces, bathrooms, basements and external walls using proven membranes and coatings to protect your home from Nepal's monsoon.",
    intro:
      "Water is a building's biggest enemy. We waterproof roofs, terraces, bathrooms, basements and walls with proven membranes and coatings — protecting your structure and finishes through every monsoon.",
    scope: [
      "Roof & terrace waterproofing",
      "Bathroom & wet-area sealing",
      "Basement & foundation protection",
      "External wall coatings",
      "Crack & joint treatment",
      "Leak diagnosis & repair",
    ],
    process: [
      { t: "Inspect", d: "We locate the source of water entry." },
      { t: "Prepare", d: "Surfaces cleaned, cracks and joints treated." },
      { t: "Apply", d: "Membranes and coatings applied to spec." },
      { t: "Test", d: "Water-tested to confirm a lasting seal." },
    ],
  },
  {
    id: "plumbing-solutions",
    icon: "🔧",
    name: "Plumbing Solutions",
    desc: "Pipe fitting, taps, drainage and water-supply systems done right.",
    long: "Complete plumbing installation and repair across the Kathmandu Valley — water-supply lines, drainage, leak repairs and bathroom fittings, with genuine pipes and fittings.",
    intro:
      "From a new water-supply system to a dripping tap, we handle it all. Our plumbing teams install and repair pipes, drainage, tanks and bathroom fittings using genuine materials and clean, reliable workmanship.",
    scope: [
      "Water-supply line installation",
      "Drainage & sewerage systems",
      "Bathroom & kitchen fittings",
      "Water tank & pump setup",
      "Pipe fitting & leak repair",
      "Maintenance & servicing",
    ],
    process: [
      { t: "Assess", d: "We plan layout or diagnose the issue." },
      { t: "Material", d: "Genuine pipes and fittings selected." },
      { t: "Install", d: "Clean fitting and connection by experts." },
      { t: "Test", d: "Pressure-tested for leak-free performance." },
    ],
  },
  {
    id: "electrical-work",
    icon: "⚡",
    name: "Electrical Work",
    desc: "Safe wiring, fittings, panels and lighting for home and commercial.",
    long: "Certified electrical work — concealed wiring, distribution boards, switches, lighting and load planning — done safely to code for homes and commercial spaces.",
    intro:
      "Electrical work is no place for shortcuts. Our electricians handle concealed wiring, distribution boards, switches, lighting and load planning — installed safely to code so your home or business runs reliably.",
    scope: [
      "Concealed & surface wiring",
      "Distribution boards & MCBs",
      "Switch, socket & lighting setup",
      "Load calculation & planning",
      "Earthing & safety systems",
      "Fault finding & repair",
    ],
    process: [
      { t: "Plan", d: "Load and layout planned for your needs." },
      { t: "Wiring", d: "Quality cable and conduit installed neatly." },
      { t: "Fittings", d: "Boards, switches and lights fitted." },
      { t: "Test & Certify", d: "Safety-checked and ready to power on." },
    ],
  },
  {
    id: "ventilation",
    icon: "🌬️",
    name: "Ventilation",
    desc: "Fresh-air, exhaust and ducting systems for healthy interiors.",
    long: "Ventilation design and installation — exhaust systems, ducting, fresh-air and kitchen/bath ventilation — to keep your interiors healthy, dry and comfortable.",
    intro:
      "Good air makes a healthy home. We design and install ventilation, exhaust and ducting systems for kitchens, bathrooms and whole buildings — controlling moisture, odours and stale air for comfortable, healthy interiors.",
    scope: [
      "Kitchen & bathroom exhaust",
      "Fresh-air & ducting systems",
      "Mechanical ventilation design",
      "Smoke & odour extraction",
      "Damp & moisture control",
      "Vent installation & servicing",
    ],
    process: [
      { t: "Assess", d: "Airflow needs and problem areas evaluated." },
      { t: "Design", d: "Ducting and vent layout planned." },
      { t: "Install", d: "Fans, ducts and vents fitted cleanly." },
      { t: "Balance", d: "Airflow checked for effective performance." },
    ],
  },
  {
    id: "carpentry",
    icon: "🪚",
    name: "Carpentry",
    desc: "Custom woodwork — doors, windows, wardrobes and furniture.",
    long: "Skilled carpentry for doors, windows, wardrobes, cabinets and custom furniture — precise joinery and quality wood, finished to last in homes and offices.",
    intro:
      "Quality woodwork shapes a home. Our carpenters craft doors, windows, wardrobes, cabinets and custom furniture with precise joinery and quality timber — built and finished to last.",
    scope: [
      "Doors & window frames",
      "Wardrobes & cabinets",
      "Custom furniture",
      "Wooden flooring & panelling",
      "Repairs & refinishing",
      "On-site & workshop joinery",
    ],
    process: [
      { t: "Design", d: "Sizes, style and wood chosen with you." },
      { t: "Craft", d: "Precise cutting and joinery by skilled carpenters." },
      { t: "Install", d: "Fitted neatly on site." },
      { t: "Finish", d: "Sanded, sealed and polished." },
    ],
  },
  {
    id: "marble-tile-works",
    icon: "🧱",
    name: "Marble & Tile Works",
    desc: "Precise floor, wall and countertop tiling and marble flooring.",
    long: "Premium marble and tile installation for floors, walls, kitchens and bathrooms — expert levelling, cutting and finishing with imported and local materials.",
    intro:
      "The right surfaces transform a space. We install marble and tiles on floors, walls, kitchens and bathrooms with expert levelling, clean cutting and crisp finishing — from a wide selection of imported and local materials.",
    scope: [
      "Floor & wall tiling",
      "Marble & granite flooring",
      "Bathroom & kitchen tiling",
      "Countertop installation",
      "Grouting & finishing",
      "Repair & re-laying",
    ],
    process: [
      { t: "Select", d: "Material and layout chosen with you." },
      { t: "Prepare", d: "Surface levelled and prepped." },
      { t: "Lay", d: "Tiles and marble set precisely." },
      { t: "Finish", d: "Grouted, cleaned and sealed." },
    ],
  },
  {
    id: "professional-painting",
    icon: "🎨",
    name: "Professional Painting",
    desc: "Interior & exterior painting with premium paints and clean finishes.",
    long: "Durable, beautiful finishes — surface prep, putty, primer and topcoat with premium brands, plus texture finishes and waterproof coatings.",
    intro:
      "Paint is the finishing touch that defines a home. We deliver clean interior and exterior painting — proper surface prep, putty, primer and premium topcoats — plus textures and weather coats that look great and last.",
    scope: [
      "Interior & exterior painting",
      "Surface prep, putty & primer",
      "Wall textures & special finishes",
      "Weatherproof exterior coats",
      "Colour consultation",
      "Clean, masked, tidy work",
    ],
    process: [
      { t: "Consult", d: "Colours and finishes chosen with you." },
      { t: "Prepare", d: "Surfaces cleaned, puttied and primed." },
      { t: "Paint", d: "Even topcoats applied by skilled painters." },
      { t: "Finish", d: "Touch-ups, cleanup and inspection." },
    ],
  },
  {
    id: "false-ceiling",
    icon: "🏛️",
    name: "False Ceiling",
    desc: "Modern POP, gypsum and PVC ceilings with integrated lighting.",
    long: "Modern false-ceiling solutions using POP, gypsum board and PVC — clean, decorative designs with integrated lighting that elevate any room.",
    intro:
      "A well-designed ceiling lifts a whole room. We create POP, gypsum and PVC false ceilings with clean lines, decorative detail and integrated lighting — enhancing both the look and comfort of your space.",
    scope: [
      "POP ceiling work",
      "Gypsum board ceilings",
      "PVC & decorative ceilings",
      "Integrated cove & spot lighting",
      "Designs for living, bed & commercial",
      "Repair & modification",
    ],
    process: [
      { t: "Design", d: "Ceiling style and lighting planned." },
      { t: "Frame", d: "Framework fixed level and secure." },
      { t: "Board & Finish", d: "Boards fitted, jointed and finished." },
      { t: "Light", d: "Lighting integrated and tested." },
    ],
  },
  {
    id: "modular-kitchen",
    icon: "🍳",
    name: "Modular Kitchen",
    desc: "Custom modular kitchens designed for space and modern living.",
    long: "End-to-end modular kitchens — design, cabinetry, countertops and installation — functional, durable and tailored to your space and budget.",
    intro:
      "The kitchen is the heart of the home. We design and build custom modular kitchens — smart cabinetry, durable countertops and efficient layouts — installed end-to-end and tailored to your space, style and budget.",
    scope: [
      "Layout & cabinet design",
      "Custom cabinetry & shutters",
      "Countertop installation",
      "Storage & accessory fit-out",
      "Sink, hob & chimney provision",
      "Complete kitchen setup",
    ],
    process: [
      { t: "Design", d: "Layout, materials and finish planned with you." },
      { t: "Manufacture", d: "Cabinets built to precise measurements." },
      { t: "Install", d: "Modules and countertops fitted." },
      { t: "Handover", d: "A ready-to-use, organised kitchen." },
    ],
  },
  {
    id: "interior-designing",
    icon: "🛋️",
    name: "Interior Designing",
    desc: "Cohesive, beautiful interiors planned around how you live.",
    long: "Complete interior design — space planning, finishes, furniture, lighting and decor — turning bare rooms into cohesive, comfortable and stylish living spaces.",
    intro:
      "Great interiors balance beauty and function. Our designers plan layouts, finishes, furniture, lighting and decor into one cohesive scheme — turning bare rooms into warm, stylish spaces that suit how you actually live.",
    scope: [
      "Space planning & concepts",
      "Material, colour & finish schemes",
      "Furniture & decor selection",
      "Lighting design",
      "Custom built-ins",
      "3D visualisation & execution",
    ],
    process: [
      { t: "Brief", d: "We learn your taste, needs and budget." },
      { t: "Concept", d: "Mood boards, layouts and 3D visuals." },
      { t: "Source & Build", d: "Materials, furniture and works arranged." },
      { t: "Style", d: "Final styling and handover." },
    ],
  },
  {
    id: "home-furnishing",
    icon: "🪑",
    name: "Home Furnishing",
    desc: "Curtains, upholstery and furnishings that complete your interiors.",
    long: "Complete home-furnishing solutions — window treatments, upholstery and space optimisation — with quality materials that add comfort and style to every room.",
    intro:
      "Furnishings bring a home to life. We supply and fit curtains, blinds, upholstery and soft furnishings — chosen to complement your interiors and add comfort, warmth and a finished feel to every room.",
    scope: [
      "Curtains & window treatments",
      "Furniture upholstery",
      "Soft furnishings & cushions",
      "Carpets & rugs",
      "Space optimisation",
      "Coordinated styling",
    ],
    process: [
      { t: "Consult", d: "Fabrics and styles chosen with you." },
      { t: "Measure", d: "Accurate measurements taken on site." },
      { t: "Make", d: "Furnishings tailored and prepared." },
      { t: "Fit", d: "Installed and styled in your space." },
    ],
  },
  {
    id: "water-fountain",
    icon: "⛲",
    name: "Water Fountain",
    desc: "Decorative indoor & outdoor fountains and water features.",
    long: "Design and installation of decorative water fountains and features — indoor and outdoor — with reliable pumps, plumbing and lighting for a calming focal point.",
    intro:
      "A water feature adds calm and character to any space. We design and install indoor and outdoor fountains — from courtyards to lobbies — with reliable pumps, concealed plumbing and lighting for a beautiful, low-maintenance focal point.",
    scope: [
      "Indoor & outdoor fountains",
      "Custom water-feature design",
      "Pump & plumbing setup",
      "Lighting integration",
      "Stone, marble & tile finishes",
      "Maintenance & servicing",
    ],
    process: [
      { t: "Design", d: "Style, size and location planned." },
      { t: "Build", d: "Structure, plumbing and pump installed." },
      { t: "Finish", d: "Stone, tile and lighting added." },
      { t: "Commission", d: "Tested and balanced for smooth flow." },
    ],
  },
  {
    id: "deep-cleaning",
    icon: "🧽",
    name: "Deep Cleaning",
    desc: "Thorough post-construction and home deep-cleaning services.",
    long: "Professional deep cleaning for new builds, renovations and homes — removing dust, debris, stains and grime so your finished space is spotless and move-in ready.",
    intro:
      "A spotless finish completes the job. Our deep-cleaning teams clear post-construction dust, debris and stains, and refresh homes top to bottom — so your space is hygienic, sparkling and ready to enjoy.",
    scope: [
      "Post-construction cleanup",
      "Floor, tile & marble cleaning",
      "Window & glass cleaning",
      "Bathroom & kitchen deep clean",
      "Dust & debris removal",
      "Move-in / move-out cleaning",
    ],
    process: [
      { t: "Assess", d: "We scope the area and cleaning needs." },
      { t: "Clear", d: "Debris and heavy dust removed." },
      { t: "Deep Clean", d: "Surfaces scrubbed, polished and sanitised." },
      { t: "Inspect", d: "Final walk-through for a spotless result." },
    ],
  },
];

export const services: Service[] = rawServices.map((s, i) => ({
  ...s,
  num: String(i + 1).padStart(2, "0"),
  items: s.scope.slice(0, 3),
  process: s.process.map((p, j) => ({ ...p, step: String(j + 1).padStart(2, "0") })),
}));

export function getService(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}

export const categories = [
  { icon: "🚰", name: "Plumbing & Fittings", count: "1,200+" },
  { icon: "🎨", name: "Paints & Finishes", count: "900+" },
  { icon: "🛠️", name: "Hand & Power Tools", count: "1,500+" },
  { icon: "💡", name: "Electrical Items", count: "1,100+" },
  { icon: "🧱", name: "Tiles & Marble", count: "800+" },
  { icon: "🚿", name: "Sanitary & Bath", count: "650+" },
  { icon: "🏗️", name: "Cement & Building", count: "400+" },
  { icon: "🔩", name: "Hardware & Fasteners", count: "2,000+" },
];

export const brands = ["Asian Paints", "Berger", "Supreme", "Hindware", "Bosch", "Finolex"];

export const stats = [
  { value: "28+", label: "YEARS OF SERVICE" },
  { value: "12k+", label: "PRODUCTS IN STOCK" },
  { value: "5,000+", label: "HOMES SERVED" },
  { value: "6", label: "SKILLED TEAMS" },
];

export const values = [
  { icon: "✅", title: "Genuine Quality", desc: "Only branded, durable products — we never compromise on what goes into your home." },
  { icon: "💬", title: "Honest Advice", desc: "Knowledgeable staff who recommend what you actually need, not what costs the most." },
  { icon: "🏷️", title: "Fair Pricing", desc: "Transparent, competitive prices on materials, tools and services — no surprises." },
  { icon: "🚚", title: "On-Time Delivery", desc: "Reliable delivery across the valley so your project never waits on materials." },
];

export const whyFeatures = [
  { title: "Wide Selection", desc: "Over 12,000 products from trusted brands, all under one roof." },
  { title: "Expert Guidance", desc: "Decades of know-how to help you pick the right material every time." },
  { title: "Service + Supply", desc: "We don't just sell — our own teams install, fit and finish." },
  { title: "Easy to Reach", desc: "Conveniently located with quick access across the Kathmandu Valley." },
];

export const steps = [
  { num: "01", title: "Consult", desc: "Tell us your project. We listen, measure and understand your needs and budget." },
  { num: "02", title: "Quote", desc: "A clear, itemised quote for materials and labour — usually the same day." },
  { num: "03", title: "Supply & Build", desc: "Genuine materials delivered and our skilled team gets to work on schedule." },
  { num: "04", title: "Support", desc: "We stand behind every job with follow-up support and honest after-care." },
];

export const contactCards = [
  { icon: "📍", title: "Our Store", body: "Maa Kali Hardware, Main Road\nBhaktapur · Kathmandu Valley, Nepal" },
  { icon: "📞", title: "Call Us", body: "9851081637" },
  { icon: "✉️", title: "Email Us", body: "hello@maakalihardware.com.np" },
  { icon: "🕖", title: "Opening Hours", body: "Sun–Fri: 7:00 AM – 7:00 PM\nSat: 7:00 AM – 3:00 PM" },
];
