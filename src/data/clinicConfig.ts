import clinicExteriorImg from '../assets/images/clinic_front_facade_1789287673782.jpg';
import clinicChairImg from '../assets/images/clinic_chair_1789285842667.jpg';
import doctorConsultationDeskImg from '../assets/images/doctor_consultation_desk_1789287644463.jpg';
import doctorProcedureImg from '../assets/images/doctor_procedure_1789287658701.jpg';
import clinicReceptionViewImg from '../assets/images/clinic_reception_view_1789287687351.jpg';
import doctorMaleImg from '../assets/images/doctor_portrait_1789285804167.jpg';
import doctorFemaleImg from '../assets/images/doctor_female_1789285823453.jpg';
import { ClinicService, DoctorProfile, GalleryItem, TestimonialItem, FaqItem } from '../types/clinic';

/**
 * =========================================================================
 * VERIFIED CLINIC IMAGES (MATCHING ALL 5 CLINIC PERSPECTIVES PROVIDED)
 * =========================================================================
 */
export const CLINIC_IMAGES = {
  exteriorSignboard: clinicExteriorImg,
  treatmentChair: clinicChairImg,
  consultationDesk: doctorConsultationDeskImg,
  treatmentProcedure: doctorProcedureImg,
  entranceAmbiance: clinicReceptionViewImg,
  doctorMalePortrait: doctorMaleImg,
  doctorFemalePortrait: doctorFemaleImg,
};

/**
 * =========================================================================
 * CLIENT INFORMATION — EDIT HERE
 * =========================================================================
 * Modify this central configuration file to update the clinic's identity,
 * contact details, address, timings, services, and doctor profiles.
 * Any change made here will automatically reflect across the entire website.
 */

export const CLINIC_CONFIG = {
  // --- REAL CLIENT INFORMATION ---
  clinicName: "FAMILY DENTAL AND MEDICAL CENTRE",
  tagline: "Complete Dental Care for a Healthier, Confident Smile",
  shortDescription: "A modern dental care destination in Kirari, Delhi focused on comfortable, convenient and patient-friendly dental services.",
  
  // Real Contact Numbers
  phone: "8586992673",
  secondaryPhone: "8700456811", // Shown on the clinic signboard
  whatsapp: "8586992673",
  
  // Real Clinic Address
  address: "B-405, INDER ENCLAVE-2, NEAR SHANI BAZAAR ROAD, KIRARI, DELHI-110086 KIRARI, Delhi",
  landmark: "Near Shani Bazaar Road, Kirari",
  city: "Delhi",
  pincode: "110086",
  
  // Real Clinic Timings (From verified clinic entrance board)
  openingHours: {
    morning: "9:00 AM – 2:00 PM",
    evening: "5:00 PM – 10:00 PM",
    days: "Monday to Saturday",
    sunday: "By Appointment Only (Clinic to confirm specific slots)",
  },
  
  // Contact & Communication Placeholders
  email: "[EMAIL TO BE ADDED]", // Explicitly instructed placeholder
  websiteDomain: "familydentalcentre.demo",
  
  // Google Maps Direct Search URL using the real address
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=B-405,+INDER+ENCLAVE-2,+NEAR+SHANI+BAZAAR+ROAD,+KIRARI,+DELHI-110086",
  googleMapsEmbedQuery: "B-405, INDER ENCLAVE-2, NEAR SHANI BAZAAR ROAD, KIRARI, DELHI-110086",

  // Demo Rules & Notices
  demoNotice: "PRIVATE DEMO WEBSITE — This website concept has been created for demonstration purposes and is not the official website of the clinic.",
  demoDisclaimerSubtitle: "Sample content is for design demonstration only. Treatments, doctor profiles, and specifics should be verified with the clinic management.",

  // WhatsApp Pre-filled message generator
  getWhatsAppUrl: (message?: string) => {
    const text = message || "Hello, I would like to enquire about a dental appointment at FAMILY DENTAL AND MEDICAL CENTRE.";
    return `https://wa.me/918586992673?text=${encodeURIComponent(text)}`;
  },

  // Tel call link
  telUrl: "tel:+918586992673",
  secondaryTelUrl: "tel:+918700456811",

  // Social Links Placeholders
  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    googleBusiness: "https://google.com/maps",
  },
};

/**
 * =========================================================================
 * CLINIC DOCTORS & SPECIALISTS
 * =========================================================================
 * Credentials updated from the verified clinic entrance signboard & desk:
 * - Dr. Govind Jha, B.D.S (RUHS), DDC Reg. No. A-18801
 * - Ex-Resident: Sri Balaji Action Medical Institute, Govt. Dental College Jaipur
 */
export const DEMO_DOCTORS: DoctorProfile[] = [
  {
    id: "doc-1",
    name: "Dr. Govind Jha",
    title: "B.D.S. (RUHS) | DDC Reg. No. A-18801",
    designation: "Dental & Oral Surgeon (Approved by NCT of Delhi Govt.)",
    qualifications: "B.D.S. (RUHS) • Ex-Resident: Sri Balaji Action Medical Institute & Govt. Dental College, Jaipur",
    experienceBadge: "Verified From Clinic Signboard & Consultation Desk",
    specialization: "Root Canal Treatment (RCT), Laser Dental Fillings, Crown & Bridges, Pyorrhea & Oral Surgery",
    bio: "Chief Dental Surgeon at Family Dental and Medical Centre, Kirari, Delhi. Committed to gentle, pain-minimized dentistry with modern equipment, comprehensive diagnostics, and transparent patient care.",
    imageUrl: doctorMaleImg,
    isDemoDoctor: false,
  },
  {
    id: "doc-2",
    name: "Orthodontic & Aligners Specialist",
    title: "B.D.S., M.D.S. (Orthodontics & Dentofacial Orthopedics)",
    designation: "Consultant Orthodontist & Smile Specialist",
    qualifications: "M.D.S. (Orthodontics) [Visiting Specialist / On-Call]",
    experienceBadge: "Sample Specialist Profile • Available by Appointment",
    specialization: "Dental Braces (Metal & Ceramic), Clear Aligners & Kids Dentistry",
    bio: "Specialist consultation for tooth straightening, irregular teeth alignment, clear invisible aligners, and preventive pediatric dental care.",
    imageUrl: doctorFemaleImg,
    isDemoDoctor: true,
  },
];

/**
 * =========================================================================
 * COMPREHENSIVE DENTAL SERVICES (12 SERVICES AS DEMO CONTENT)
 * =========================================================================
 * Labeled: "Sample Services — Confirm with Clinic"
 */
export const CLINIC_SERVICES: ClinicService[] = [
  {
    id: "dental-cleaning",
    name: "Dental Cleaning & Scaling",
    shortDescription: "Professional ultrasonic scaling to remove stubborn plaque, tartar, and surface stains for fresh breath and healthy gums.",
    iconName: "Sparkles",
    category: "General",
    isPopular: true,
    overview: "Professional dental scaling and polishing clears bacterial plaque, tartar, and stubborn coffee/tea stains that regular brushing cannot remove. It prevents bleeding gums and periodontal complications.",
    benefits: [
      "Removes hardened calculus and tartar buildup",
      "Prevents gingivitis and early gum disease",
      "Freshens breath and brightens tooth enamel",
      "Pain-free ultrasonic cleaning technique"
    ],
    processSteps: [
      { step: 1, title: "Diagnostic Examination", description: "Comprehensive oral inspection of gum pockets and enamel health." },
      { step: 2, title: "Ultrasonic Scaling", description: "Gentle acoustic vibrations gently loosen tartar without damaging enamel." },
      { step: 3, title: "Polishing & Fluoride", description: "Smooths tooth surfaces to resist future bacterial adhesion." }
    ],
    faqs: [
      { question: "Does dental scaling cause tooth thinning?", answer: "No, dental scaling only removes extrinsic tartar and calculus deposits without scraping away the natural tooth enamel." },
      { question: "How often should I get my teeth cleaned?", answer: "Dental professionals generally recommend professional cleaning every 6 months for optimal oral hygiene." }
    ]
  },
  {
    id: "root-canal",
    name: "Root Canal Treatment (RCT)",
    shortDescription: "Comfort-focused single-sitting or multi-sitting therapy to relieve dental pain and salvage your natural tooth.",
    iconName: "ShieldAlert",
    category: "Restorative",
    isPopular: true,
    overview: "When deep decay reaches the inner nerve canal, root canal treatment gently clears infected pulp tissue, cleans the root canals, and seals them with biocompatible filling to preserve your natural tooth.",
    benefits: [
      "Immediate relief from severe toothache and throbbing pain",
      "Avoids unnecessary tooth extraction",
      "Restores normal biting and chewing comfort",
      "Protected by custom ceramic or metal-ceramic crown"
    ],
    processSteps: [
      { step: 1, title: "Digital X-Ray Assessment", description: "Evaluating root anatomy, infection depth, and canal curvature." },
      { step: 2, title: "Painless Cleaning & Shaping", description: "Thorough biomechanical cleaning and disinfection of canals under local anesthesia." },
      { step: 3, title: "Canal Sealing (Obturation)", description: "Filling canals with gutta-percha and preparing tooth for permanent crown." }
    ],
    faqs: [
      { question: "Is a root canal painful?", answer: "Modern local anesthesia ensures the procedure is virtually painless and provides instant relief from existing toothache." },
      { question: "Is a crown mandatory after RCT?", answer: "A dental crown is strongly recommended after RCT to protect the treated tooth from brittle fractures during chewing." }
    ]
  },
  {
    id: "dental-fillings",
    name: "Tooth Coloured & Laser Fillings",
    shortDescription: "Aesthetic composite resin fillings that blend seamlessly with your natural tooth color to stop decay.",
    iconName: "ShieldCheck",
    category: "General",
    overview: "Modern tooth-colored composites match your tooth shade precisely. They restore dental cavities caused by decay or minor chipping while maintaining natural aesthetic translucency.",
    benefits: [
      "Natural tooth shade matching for invisible repairs",
      "Durable bond directly to tooth structure",
      "Stops further spread of decay into the nerve",
      "Quick single-visit restoration"
    ],
    processSteps: [
      { step: 1, title: "Cavity Isolation", description: "Careful removal of decayed tooth matter with minimal enamel loss." },
      { step: 2, title: "Composite Layering", description: "Applying shade-matched resin material in delicate increments." },
      { step: 3, title: "Light Curing & Bite Check", description: "High-intensity LED curing and high-precision bite adjustment." }
    ],
    faqs: [
      { question: "How long do composite fillings last?", answer: "With good oral hygiene and regular checkups, composite fillings typically last 7 to 10 years or longer." }
    ]
  },
  {
    id: "dental-implants",
    name: "Dental Implants",
    shortDescription: "Permanent, bio-integrated titanium replacement roots providing the most lifelike tooth restoration.",
    iconName: "Anchor",
    category: "Restorative",
    isPopular: true,
    overview: "Dental implants are the gold standard for missing teeth. A surgical titanium post acts as an artificial root, capped with a lifelike zirconia or ceramic crown that looks and feels like a natural tooth.",
    benefits: [
      "Prevents bone loss in the jaw following tooth extraction",
      "Does not require grinding down adjacent healthy teeth",
      "Unmatched stability for confident chewing and speaking",
      "Lifetime solution when maintained with good oral care"
    ],
    processSteps: [
      { step: 1, title: "Bone & 3D Imaging Assessment", description: "Evaluating bone volume and nerve positions for safe fixture placement." },
      { step: 2, title: "Fixture Placement", description: "Precision surgical insertion of titanium implant post into the jawbone." },
      { step: 3, title: "Crown Prosthesis", description: "Attaching custom ceramic crown following natural osseointegration." }
    ],
    faqs: [
      { question: "Am I a good candidate for dental implants?", answer: "Most adults with adequate jawbone density and controlled general health are suitable candidates." }
    ]
  },
  {
    id: "teeth-whitening",
    name: "Professional Teeth Whitening",
    shortDescription: "Safe in-clinic and custom tray whitening systems to lift deep yellowing and revitalize your bright smile.",
    iconName: "Sun",
    category: "Cosmetic",
    overview: "In-office dental whitening uses professional-grade hydrogen/carbamide peroxide gels safely activated under barrier protection, lifting stubborn stains from tea, coffee, smoking, and aging.",
    benefits: [
      "Visible shade lightening in a single 45-minute appointment",
      "Dentist-supervised safety protecting gum tissues",
      "Significantly safer and more effective than over-the-counter strips",
      "Boosts confidence for weddings, interviews, and public events"
    ],
    processSteps: [
      { step: 1, title: "Shade Matching & Preparation", description: "Recording starting tooth shade and applying gingival barrier gel." },
      { step: 2, title: "Whitening Gel Application", description: "Careful application of professional whitening formula." },
      { step: 3, title: "Desensitizing Rinse", description: "Polishing and desensitizing mineral application for lasting comfort." }
    ],
    faqs: [
      { question: "Does whitening cause permanent tooth sensitivity?", answer: "Any mild sensitivity is temporary and typically subsides within 24 to 48 hours following treatment." }
    ]
  },
  {
    id: "dental-braces",
    name: "Dental Braces (Metal & Ceramic)",
    shortDescription: "Time-tested orthodontic brackets to correct crooked teeth, open bites, crossbites, and spacing.",
    iconName: "Smile",
    category: "Orthodontic",
    overview: "Traditional orthodontic brackets exert gentle, calibrated forces over time to align malpositioned teeth, improving facial aesthetics, bite efficiency, and long-term periodontal health.",
    benefits: [
      "Corrects complex crowding, rotations, and deep bites",
      "Available in discreet ceramic or durable metallic designs",
      "Optimizes chewing mechanics and speech clarity",
      "Helps prevent uneven tooth wear and jaw joint strain"
    ],
    processSteps: [
      { step: 1, title: "Orthodontic Records", description: "Photos, study models, and cephalometric x-rays." },
      { step: 2, title: "Bracket Bonding", description: "Direct bonding of precision brackets and initial archwire placement." },
      { step: 3, title: "Periodic Alignments", description: "Monthly wire adjustments to guide progressive tooth movement." }
    ],
    faqs: [
      { question: "What is the best age to start braces?", answer: "Orthodontic evaluation is recommended from age 7, but adults of any age can achieve excellent results." }
    ]
  },
  {
    id: "clear-aligners",
    name: "Clear Invisible Aligners",
    shortDescription: "Virtually invisible, removable plastic aligners designed for discreet and convenient smile correction.",
    iconName: "Layers",
    category: "Orthodontic",
    isPopular: true,
    overview: "Clear aligners are custom-molded transparent trays that incrementally guide your teeth into optimal position without metal wires or brackets. Easily removed for eating and brushing.",
    benefits: [
      "Nearly invisible on your teeth during social and professional interactions",
      "Removable at will for meals and hassle-free flossing",
      "No sharp metal wires or bracket poking",
      "Predictable digital simulation of tooth movements"
    ],
    processSteps: [
      { step: 1, title: "Digital 3D Smile Scan", description: "High-precision digital optical impression of your dental arches." },
      { step: 2, title: "Custom Treatment Plan", description: "Reviewing computer-guided step-by-step tooth alignment." },
      { step: 3, title: "Aligner Tray Series", description: "Wearing consecutive custom aligner sets for 1–2 weeks each." }
    ],
    faqs: [
      { question: "How many hours a day must I wear aligners?", answer: "Aligners must be worn for 20 to 22 hours per day, removing them only for meals and cleaning." }
    ]
  },
  {
    id: "dental-crowns",
    name: "Dental Crowns & Bridges",
    shortDescription: "High-strength zirconia and porcelain crowns to restore fractured, weakened, or missing teeth.",
    iconName: "Crown",
    category: "Restorative",
    overview: "A dental crown acts as a protective custom helmet over a damaged or root-canal-treated tooth. Fixed dental bridges replace one or more missing teeth by anchoring to neighboring sturdy teeth.",
    benefits: [
      "Protects brittle teeth from fracture during heavy chewing",
      "Natural translucency mimicking real tooth enamel",
      "Biocompatible zirconia and metal-free options available",
      "Custom shade and anatomy tailored to your smile"
    ],
    processSteps: [
      { step: 1, title: "Tooth Preparation", description: "Gentle circumferential reduction to create space for the crown." },
      { step: 2, title: "Precision Impression", description: "Capturing exact margin details for dental laboratory fabrication." },
      { step: 3, title: "Permanent Cementation", description: "Bonding the finalized prosthesis with dental-grade cement." }
    ],
    faqs: [
      { question: "What is the difference between PFM and Zirconia crowns?", answer: "Zirconia is completely metal-free, exceptionally strong, and eliminates the dark gray gum-line margin seen in traditional metal-ceramic crowns." }
    ]
  },
  {
    id: "dental-veneers",
    name: "Cosmetic Dental Veneers",
    shortDescription: "Ultra-thin porcelain or composite shells that transform chipped, discolored, or uneven front teeth.",
    iconName: "Palette",
    category: "Cosmetic",
    overview: "Veneers are wafer-thin custom facings bonded to the front surface of teeth. They create a harmonious, symmetrical Hollywood-style smile line while requiring minimal enamel trimming.",
    benefits: [
      "Closes visible gaps and masks deep internal tetracycline stains",
      "Reshapes irregular, worn, or chipped tooth edges",
      "Stain-resistant porcelain surface keeps its luster",
      "Conservative preparation preserving maximum natural tooth"
    ],
    processSteps: [
      { step: 1, title: "Aesthetic Smile Design", description: "Diagnostic analysis of lip line, facial symmetry, and expectations." },
      { step: 2, title: "Micro-Enamel Shaping", description: "Minimal surface preparation of 0.3mm to 0.5mm." },
      { step: 3, title: "Adhesive Bonding", description: "Permanent light-activated resin bonding to enamel." }
    ],
    faqs: [
      { question: "Are dental veneers permanent?", answer: "Yes, because a minute layer of enamel is prepared, veneers are considered a permanent, long-lasting cosmetic restoration." }
    ]
  },
  {
    id: "wisdom-tooth",
    name: "Wisdom Tooth Treatment & Extractions",
    shortDescription: "Gentle surgical management of impacted or painful third molars causing swelling and jaw discomfort.",
    iconName: "Activity",
    category: "Specialized",
    overview: "Impacted wisdom teeth often lack sufficient eruption room, causing recurrent pericoronitis, swelling, cheek biting, and damage to adjacent molars. Our gentle extraction approach minimizes trauma.",
    benefits: [
      "Relieves recurrent jaw pain, swelling, and difficulty opening mouth",
      "Prevents root resorption of adjacent second molars",
      "Painless local anesthesia with comfortable post-op protocols",
      "Rapid recovery with clear post-surgical instructions"
    ],
    processSteps: [
      { step: 1, title: "OPG X-Ray Assessment", description: "Mapping wisdom tooth roots in relation to the inferior alveolar nerve." },
      { step: 2, title: "Gentle Removal", description: "Careful, minimally invasive extraction under profound anesthesia." },
      { step: 3, title: "Healing Support", description: "Hemostatic dressing and prescription for smooth recovery." }
    ],
    faqs: [
      { question: "Do all wisdom teeth require removal?", answer: "No, if a wisdom tooth is fully erupted, functional, pain-free, and easy to clean, extraction may not be necessary." }
    ]
  },
  {
    id: "pediatric-dentistry",
    name: "Pediatric Dentistry (Kids Care)",
    shortDescription: "Friendly, gentle dental checkups, pit & fissure sealants, and fluoride therapies for children.",
    iconName: "HeartHandshake",
    category: "Specialized",
    overview: "Creating positive dental experiences from early childhood. We provide cavity prevention, habit-breaking appliances, space maintainers, and gentle fillings in a fun, anxiety-free atmosphere.",
    benefits: [
      "Early cavity detection prevents severe toothaches and school absence",
      "Protective pit and fissure sealants prevent deep groove decay",
      "Fluoride varnish strengthens developing milk and permanent teeth",
      "Positive foundation that eliminates dental fear for life"
    ],
    processSteps: [
      { step: 1, title: "Friendly Welcome Tour", description: "Helping your child feel calm, safe, and excited to visit the dentist." },
      { step: 2, title: "Gentle Examination", description: "Checking milk tooth exfoliation, jaw alignment, and plaque levels." },
      { step: 3, title: "Preventive Fluoride & Advice", description: "Applying delicious-flavored protective fluoride varnish." }
    ],
    faqs: [
      { question: "Why do milk teeth matter if they will fall out anyway?", answer: "Milk teeth guide the eruption of permanent teeth, preserve jaw space, and are essential for speech clarity and nutrition." }
    ]
  },
  {
    id: "emergency-dental",
    name: "Emergency Dental Care",
    shortDescription: "Prompt care for severe toothaches, broken teeth, knocked-out teeth, or sudden facial swelling.",
    iconName: "AlertTriangle",
    category: "Specialized",
    isPopular: true,
    overview: "Sudden dental trauma or severe infections require fast attention. We provide immediate pain control, temporary crown repairs, pulp extirpation, and emergency stabilizing care.",
    benefits: [
      "Rapid pain relief for acute throbbing toothache",
      "Emergency preservation for knocked-out or fractured teeth",
      "Drainage and antibiotic management of dental abscesses",
      "Direct WhatsApp and phone access for prompt guidance"
    ],
    processSteps: [
      { step: 1, title: "Immediate Triage", description: "Fast identification of bleeding, infection source, or trauma." },
      { step: 2, title: "Pain Alleviation", description: "Administering targeted anesthesia or soothing pulp dressing." },
      { step: 3, title: "Definitive Plan", description: "Scheduling follow-up restorative or root canal stabilization." }
    ],
    faqs: [
      { question: "What should I do if a tooth gets knocked out?", answer: "Keep the tooth moist in cold milk or saliva (do not scrub the root) and reach our clinic immediately within 60 minutes." }
    ]
  }
];

/**
 * =========================================================================
 * CLINIC GALLERY ITEMS
 * =========================================================================
 * Separates client-provided clinic photos from sample clinical demonstration imagery
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Clinic Signboard & Main Entrance",
    category: "Clinic Facility",
    imageUrl: clinicExteriorImg,
    sourceType: "CLIENT_PROVIDED",
    caption: "Family Dental and Medical Centre illuminated lightbox signboard showing Dr. Govind Jha B.D.S (RUHS), DDC Reg. No. A-18801, specialities, timings, and frosted glass entrance doors at B-405, Inder Enclave-2, Kirari, Delhi."
  },
  {
    id: "gal-2",
    title: "Doctor Consultation Chamber & Desk",
    category: "Reception",
    imageUrl: doctorConsultationDeskImg,
    sourceType: "CLIENT_PROVIDED",
    caption: "Doctor's marble consultation desk featuring Dr. Govind Jha's acrylic nameplate, anatomical tooth educational models, prescription counter, and digital payment setup."
  },
  {
    id: "gal-3",
    title: "Modern Dental Operatory Patient Chair",
    category: "Operatory",
    imageUrl: clinicChairImg,
    sourceType: "CLIENT_PROVIDED",
    caption: "Ergonomic teal dental operatory chair equipped with ultrasonic scaler delivery unit, spittoon, clean instrument tray, air compressor, and high-intensity overhead light."
  },
  {
    id: "gal-4",
    title: "Active Dental Procedure & Patient Care",
    category: "Clinical Care",
    imageUrl: doctorProcedureImg,
    sourceType: "CLIENT_PROVIDED",
    caption: "Dr. Govind Jha and trained dental assistant in sterile clinical masks, surgical cap, and gloves providing gentle, attentive dental treatment."
  },
  {
    id: "gal-5",
    title: "Welcoming Glass Entrance & Clinic Ambiance",
    category: "Clinic Facility",
    imageUrl: clinicReceptionViewImg,
    sourceType: "CLIENT_PROVIDED",
    caption: "Interior view of the clinic entrance featuring traditional festive marigold garland (toran), frosted dental graphic, natural daylight, and clean reception ambiance."
  },
  {
    id: "gal-6",
    title: "Sterilized Instrument & Operatory Setup",
    category: "Operatory",
    imageUrl: clinicChairImg,
    sourceType: "SAMPLE_DEMO",
    caption: "Hygienic operatory environment adhering to standard dental sterilization and infection control protocols for patient safety."
  }
];

/**
 * =========================================================================
 * WHY CHOOSE US CARDS (SAMPLE DEMO CONTENT)
 * =========================================================================
 */
export const WHY_CHOOSE_US_ITEMS = [
  {
    id: "feat-1",
    title: "Patient-Focused Care",
    description: "Every treatment starts with attentive listening, clear diagnosis, and respectful explanations so you feel confident.",
    icon: "Heart"
  },
  {
    id: "feat-2",
    title: "Modern Dental Environment",
    description: "Clean, hygienic operatory setup equipped with ultrasonic scalers, light curing, and digital dental diagnostic tools.",
    icon: "ShieldCheck"
  },
  {
    id: "feat-3",
    title: "Convenient Appointments",
    description: "Morning and evening shifts tailored for busy office-goers, school students, and families in Kirari, Delhi.",
    icon: "Clock"
  },
  {
    id: "feat-4",
    title: "Comprehensive Dental Services",
    description: "From routine checkups and scaling to root canals, crowns, and orthodontic teeth alignment under one roof.",
    icon: "Grid"
  },
  {
    id: "feat-5",
    title: "Comfortable Experience",
    description: "Gentle injection techniques, comforting operatory seating, and reassuring care to ease anxiety.",
    icon: "Smile"
  },
  {
    id: "feat-6",
    title: "Professional Approach",
    description: "Strict autoclave instrument sterilization and hygienic protocols prioritizing your overall wellness.",
    icon: "Award"
  }
];

/**
 * =========================================================================
 * SAMPLE DEMO TESTIMONIALS
 * =========================================================================
 * As instructed: DO NOT create fake real patient reviews.
 * Purely UI demonstration cards labeled "SAMPLE DEMO TESTIMONIAL".
 */
export const DEMO_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    patientName: "Sample Patient Profile A",
    treatmentName: "Dental Scaling & Polishing",
    feedback: "This sample review card demonstrates how future approved patient reviews and star ratings will look on the live website.",
    rating: 5,
    badge: "SAMPLE DEMO TESTIMONIAL"
  },
  {
    id: "test-2",
    patientName: "Sample Patient Profile B",
    treatmentName: "Root Canal Treatment",
    feedback: "A clean, modern layout showcasing patient satisfaction, treatment badges, and verified testimonial cards for the clinic.",
    rating: 5,
    badge: "SAMPLE DEMO TESTIMONIAL"
  },
  {
    id: "test-3",
    patientName: "Sample Patient Profile C",
    treatmentName: "Tooth Colored Filling",
    feedback: "Demonstrating how patient stories and community trust will be displayed once the clinic approves real reviews.",
    rating: 5,
    badge: "SAMPLE DEMO TESTIMONIAL"
  }
];

/**
 * =========================================================================
 * FREQUENTLY ASKED QUESTIONS
 * =========================================================================
 * Unprovided items use honest [CLINIC TO CONFIRM] labels.
 */
export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: "How can I book an appointment?",
    answer: "You can easily request an appointment using our online booking form on this website, call us directly at 8586992673, or message us on WhatsApp. For this private demo, appointment submissions show simulated confirmations.",
    category: "Appointments"
  },
  {
    id: "faq-2",
    question: "How can I contact the clinic directly?",
    answer: "You can reach Family Dental and Medical Centre directly by calling 8586992673 or 8700456811. You can also chat with us on WhatsApp at 8586992673.",
    category: "General"
  },
  {
    id: "faq-3",
    question: "Where is the clinic located?",
    answer: "The clinic is located at B-405, Inder Enclave-2, Near Shani Bazaar Road, Kirari, Delhi-110086. You can click 'Get Directions' on the website to open Google Maps for turn-by-turn navigation.",
    category: "Location & Timings"
  },
  {
    id: "faq-4",
    question: "What are the clinic timings?",
    answer: "Regular timings are Morning: 9:00 AM to 2:00 PM, and Evening: 5:00 PM to 10:00 PM (Monday to Saturday). Sunday consultations are [CLINIC TO CONFIRM — By Appointment Only].",
    category: "Location & Timings"
  },
  {
    id: "faq-5",
    question: "Can I request an appointment through WhatsApp?",
    answer: "Yes! Click the green WhatsApp button located across the website to open a pre-composed message directly with 8586992673.",
    category: "Appointments"
  },
  {
    id: "faq-6",
    question: "What dental treatments are available at the clinic?",
    answer: "Sample services include Dental Cleaning, Root Canal Treatment, Tooth Colored Fillings, Crowns & Bridges, Braces, Teeth Whitening, and Wisdom Tooth Care. Please confirm the clinic's specific service availability during your visit.",
    category: "Treatments"
  }
];
