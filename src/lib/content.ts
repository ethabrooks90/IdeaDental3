// Idea Dental content — copied from the verified dataset in ../../web/src/data/content.ts
// (checked against the live-site mirror www.ideadentistry.com on 2026-09-17).
// Rules from PROJECT_BRIEF.md + "Idea Dental Website Build Prompt.pdf":
//  - don't add facts that aren't on the live site or confirmed by the client;
//  - never include the free / $0 / "Current Specials" promotions.

export const business = {
  name: "Idea Dental",
  phone: "(832) 664-8640",
  phoneHref: "tel:+18326648640",
  smsHref: "sms:+18326648640",
  address: { line1: "216 W Little York Road, Suite B", line2: "Houston, TX 77076" },
  mapsUrl: "https://goo.gl/maps/PBzLzgfFhGXrSZxf9",
  social: [
    { label: "Facebook", href: "https://www.facebook.com/Idea-Dental-at-West-Little-York-PLLC-137635463309853" },
    { label: "Yelp", href: "https://www.yelp.com/biz/idea-dental-houston" },
  ],
};

export const hours = [
  // Client update, 2026-10-01 (Ihna → Jun). Sunday wasn't in the update; kept as Closed.
  { day: "Monday", time: "8:30 AM – 2:00 PM", note: "Surgeries only" },
  { day: "Tuesday", time: "10:00 AM – 6:00 PM", note: "General dentistry & walk-ins" },
  { day: "Wednesday", time: "10:00 AM – 6:00 PM", note: "General dentistry & walk-ins" },
  { day: "Thursday", time: "8:30 AM – 2:00 PM", note: "Surgeries only" },
  { day: "Friday", time: "Closed", note: "" },
  { day: "Saturday", time: "2nd & 4th Saturdays only", note: "" },
  { day: "Sunday", time: "Closed", note: "" },
];

export const nav = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Doctors", href: "#doctors" },
  { label: "Technology", href: "#technology" },
  { label: "Before & After", href: "#before-after" },
  { label: "Contact", href: "#contact" },
];

// Client-approved hero copy (web/ git history: "Update Hero copy to client-approved version").
export const hero = {
  headline: ["General dentistry", "in Houston, TX"],
  body: "Comprehensive dental care for you and your family, from routine checkups to restorative and cosmetic treatments.",
};

export const about = {
  intro:
    "Idea Dental is a leading provider of general, cosmetic, restorative, and orthodontic services with a clinic conveniently located in Houston, Texas, treating patients of all ages.",
  philosophy:
    "The team at Idea Dental approaches dentistry with a patient-first philosophy. The friendly staff creates a warm and welcoming environment that puts patients at ease from the moment they call to book their appointment until they leave the practice’s offices.",
  underOneRoof:
    "We offer a full range of dental services, so all of your family’s needs are met under one roof.",
};

export type ServiceCategory = {
  key: string;
  label: string;
  description: string;
  treatments: string[];
  image: string;
  alt: string;
};

export const services: ServiceCategory[] = [
  {
    key: "general",
    label: "General Dentistry",
    description:
      "Helping our patients maintain a healthy mouth and smile is the main goal of general dentistry. We prefer to provide more minor, preventive care than to see patients suffer with more intensive treatments from a problem that was not managed in time.",
    treatments: ["Teeth Whitening", "Root Canals"],
    image: "/images/services/general-dentistry.jpg",
    alt: "Patient receiving a general dental checkup",
  },
  {
    key: "orthodontic",
    label: "Orthodontic Services",
    description:
      "Our ultimate goal is to craft you a perfect smile that you are proud to show off. We are proud to offer several different treatment options for straighter teeth and a beautiful smile.",
    treatments: [
      "Traditional Braces",
      "Clear Braces",
      "Invisalign",
      "Invisalign for Teens",
      "Retention",
      "iTero Intraoral Scanner",
      "Early Treatment",
      "Adult Treatment",
      "Braces for Teens",
    ],
    image: "/images/services/orthodontics.jpg",
    alt: "Smiling orthodontic patient",
  },
  {
    key: "cosmetic",
    label: "Cosmetic Dentistry",
    description:
      "A beautiful smile is one of the most sought after cosmetic features in the world. Whether through minor adjustments or major treatment plans, our cosmetic dentistry practice aims to improve your smile and help you build confidence.",
    treatments: ["Veneers", "Dentures", "Invisalign"],
    image: "/images/services/cosmetic-dentistry.jpg",
    alt: "Close-up of a bright, even smile",
  },
  {
    key: "restorative",
    label: "Restorative Dentistry",
    description:
      "Idea Dental is committed to offering a full range of dentistry services. Whether you’ve had repairs or need a complete replacement, we recommend continual check-ups to assess your gums and bone density.",
    treatments: ["Dental Implants"],
    image: "/images/services/dental-implants.jpg",
    alt: "Dental implant model",
  },
];

// Real photos from the live "Before & After Gallery" page. Each image already carries its own
// before/after caption, so these labels are only used for the card text and alt text.
export type Result = { key: string; treatment: string; timing?: string; category: string };

export const results: Result[] = [
  { key: "traditional-braces-1", treatment: "Traditional Braces", timing: "9 months later", category: "Orthodontics" },
  { key: "teeth-whitening", treatment: "Teeth Whitening", timing: "1 week later", category: "General Dentistry" },
  { key: "traditional-braces-2", treatment: "Traditional Braces", timing: "1 week later", category: "Orthodontics" },
  { key: "teeth-cleaning", treatment: "Teeth Cleaning", category: "General Dentistry" },
  { key: "cosmetic-bonding", treatment: "Cosmetic Bonding", category: "Cosmetic Dentistry" },
  { key: "dentures", treatment: "Dentures", category: "Cosmetic Dentistry" },
  { key: "traditional-braces-3", treatment: "Traditional Braces", timing: "4 months later", category: "Orthodontics" },
  { key: "fillings", treatment: "Fillings", category: "General Dentistry" },
  { key: "implants", treatment: "Implants", category: "Restorative Dentistry" },
];

export const doctors = [
  {
    key: "vu",
    name: "Dr. Stephanie Vu",
    credentials: "DDS",
    photo: "/images/stephanie-vu.jpg",
    bio: [
      "Stephanie Vu, DDS, is a dedicated and caring dentist who provides exceptional care to her patients at Idea Dental, conveniently located in Houston, Texas.",
      "Dr. Vu graduated with a bachelor’s degree in biology from the University of Texas at Austin. She discovered her passion for dentistry during her undergraduate years while volunteering at the San Jose Clinic in Houston, and decided to pursue her dental degree.",
      "Dr. Vu earned her Doctor of Dental Surgery from the University of Texas School of Dentistry at Houston. She graduated from her dental program with honors and won the prestigious Student Achievement Award of Endodontics.",
    ],
  },
  {
    key: "rathi",
    name: "Dr. Nakul Rathi",
    credentials: "Implants & Full Mouth Rehabilitation",
    photo: "/images/nukul-rathi.jpg",
    bio: [
      "Idea Dental is proud to have Dr. Nakul Rathi visiting as a provider. Dr. Rathi has specialized in implants and full mouth rehabilitation, pursuing his interest in dental implants at New York University, College of Dentistry.",
      "He completed his Masters of Science and Advanced Prosthodontics Clinical Residency Program at The Ohio State University, working within a clinic that has completed over 25,000 implants.",
      "Dr. Rathi was selected as the ‘New and Emerging Speaker’ by the American Dental Association in Washington DC in 2015, and lectures internationally on implant dentistry and CAD-CAM in dentistry.",
    ],
  },
];

export const technology = [
  {
    title: "iTero Element Scanner",
    description:
      "Precise 3D imaging of your smile in place of traditional impressions — used across our orthodontic treatment planning.",
  },
  {
    title: "Piezotome Cube Extraction",
    description: "Modern equipment used to support gentler, more controlled extraction procedures.",
  },
];

// Short feature names for the marquee — each is a fact from the verified `features` list.
export const features = [
  "iTero digital scanning",
  "Piezotome technology",
  "Hablamos Español",
  "75″ TV in every patient room",
  "All insurance plans accepted",
  "Flexible payment plans",
];

// Client price list, 2026-10-01 (Ihna → Jun) — replaces the live site's old comparison table.
// The update has no "other dentist" figures, so the comparison column is gone.
export const pricing = [
  { item: "Adult Cleaning", price: "$75" },
  { item: "Full Mouth Debridement", price: "$200" },
  { item: "Deep Cleaning", price: "$500" },
  { item: "Filling", price: "$250 and up" },
  { item: "Simple Extraction", price: "$350" },
  { item: "Surgical Extraction", price: "$450" },
  { item: "Bone Graft and Membrane", price: "$600" },
  { item: "Crown", price: "$1,200" },
  { item: "Root Canal", price: "$800" },
  { item: "Denture or Partial Denture", price: "$1,200 per arch" },
  { item: "Implant", price: "$3,500" },
  { item: "Implant Crown and Abutment", price: "$1,800" },
  { item: "Braces", price: "$2,500 – $5,500" },
];

export const insurance =
  "We accept all insurance plans and offer flexible payment options, including payment plans for orthodontic treatment, to keep care affordable.";

// Real reviews, unedited. `headline` + `body` split the same review into a pull-quote and the
// remaining sentences — no words added or changed.
export const testimonials = [
  {
    name: "Dawn W.",
    headline: "Exceptional customer service!",
    body: "Had a problem come up in between appointments, and they said come on in and took care of it.",
  },
  {
    name: "Tommy H.",
    headline: "I recommend this dental office!!!",
    body: "I got my braces and implant done here. The doctors and staff were really very nice and the price was half of what other dentists quoted me.",
  },
  {
    name: "Thuy B.",
    headline: "Great experience!!!!",
    body: "Staffs are extremely friendly and professional. I would highly recommend this dental office.",
  },
  {
    name: "Jahoward H.",
    headline: "The absolute best.",
    body: "The staff was warm and caring, the facility was perfect and the accommodations were nice.",
  },
];

// Subset of the verified FAQ list (answers condensed from live-site pages, facts unchanged).
export const faqs = [
  {
    q: "What are your office hours?",
    a: "Tuesday and Wednesday, 10am–6pm, for general dentistry and walk-ins. Monday and Thursday, 8:30am–2pm, for surgeries only. We’re open on the 2nd and 4th Saturday of each month, and closed Friday and Sunday.",
  },
  {
    q: "Can I walk in without an appointment?",
    a: "Yes — Tuesday and Wednesday are open to walk-ins for general dentistry. Monday and Thursday are reserved for surgeries.",
  },
  {
    q: "Do you accept my insurance?",
    a: "We accept all insurance plans and offer flexible payment options, including payment plans for orthodontic treatment, to keep care affordable.",
  },
  {
    q: "How do I request an appointment?",
    a: "Fill out our appointment request form with general information only — please don’t include personal health details there. A member of our staff will call to confirm your appointment.",
  },
  {
    q: "What should I expect at my first visit?",
    a: "We’ll assess your oral health and build a dental plan based on your individual needs. We see your first visit as the start of a long-term relationship, not a one-off appointment.",
  },
  {
    q: "Do you treat dental emergencies?",
    a: "Yes — alongside general, cosmetic, and orthodontic care, our Houston clinic provides emergency dental care for patients of all ages.",
  },
  {
    q: "¿Hablan español?",
    a: "Sí — hablamos español. Our team is glad to assist Spanish-speaking patients throughout their visit.",
  },
];

// Service choices from the existing appointment form (web/src/components/Contact.tsx).
export const appointmentServices = ["Consultation", "Whitening", "Implants", "Aligners"];
