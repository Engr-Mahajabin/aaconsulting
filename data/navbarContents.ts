// // @/data/navbarContents.js
// import {
//   Globe,
//   Code2,
//   ShieldAlert,
//   Activity,
//   KeyRound,
//   FileText,
//   Cpu,
//   DraftingCompass,
//   Zap,
//   LayoutTemplate,
//   Shield,
//   Monitor,
//   PlayCircle,
//   AlignRight,
//   BarChart3,
//   MessageSquareCode,
//   Eye,
//   Compass,
//   Layers,
//   ClipboardCheck,
//   GraduationCap,
// } from "lucide-react";

// export const navbarContents = {
//   Services: [
//     {
//       title: "Development",
//       bgColor: "bg-blue-100",
//       items: [
//         {
//           icon: <Globe size={18} />,
//           title: "SaaS Product Development",
//           href: "/services/saas",
//         },
//         {
//           icon: <Globe size={18} />,
//           title: "Enterprise Software Development",
//           href: "/services/enterprise-software",
//         },
//         {
//           icon: <Globe size={18} />,
//           title: "Website Design & Development",
//           href: "/services/website",
//         },
//         {
//           icon: <Code2 size={18} />,
//           title: "Mobile App Development",
//           href: "/services/mobile-app",
//         },
//       ],
//     },
//     {
//       title: "Cyber Security",
//       bgColor: "bg-blue-100",
//       items: [
//         {
//           icon: <ShieldAlert size={18} />,
//           title: "Offensive Security & VAPT",
//           href: "/services/offensive-security",
//         },
//         {
//           icon: <Activity size={18} />,
//           title: "Defensive Security (EDR/SIEM)",
//           href: "/services/defensive-security",
//         },
//         {
//           icon: <KeyRound size={18} />,
//           title: "Identity & Access Control (IAM)",
//           href: "/services/identity-management",
//         },
//         {
//           icon: <FileText size={18} />,
//           title: "Governance, Risk & Compliance(GRC)",
//           href: "/services/grc-compliance",
//         },
//       ],
//     },
//     {
//       title: "AI & ML Solutions",
//       bgColor: "bg-blue-100",
//       items: [
//         {
//           icon: <BarChart3 size={18} />,
//           title: "Predictive Analytics & Data Intelligence",
//           desc: "Data forecasting, demand planning & business insights",
//           href: "/services/predictive-analytics",
//         },
//         {
//           icon: <MessageSquareCode size={18} />,
//           title: "Natural Language Processing (NLP)",
//           desc: "Custom LLMs, intelligent chatbots & text analytics",
//           href: "/services/nlp-solutions",
//         },
//         {
//           icon: <Eye size={18} />,
//           title: "Computer Vision & Image Intelligence",
//           desc: "Object detection, facial recognition & image processing",
//           href: "/services/computer-vision",
//         },
//         {
//           icon: <Cpu size={18} />,
//           title: "Recommendation & Automation Systems",
//           desc: "Personalized user engines & intelligent process automation",
//           href: "/services/intelligent-automation",
//         },
//       ],
//     },
//     {
//       title: "Consultancy & Trainings",
//       bgColor: "bg-blue-100",
//       items: [
//         {
//           icon: <Compass size={18} />,
//           title: "Cybersecurity Strategy & Advisory",
//           desc: "vCISO services, risk management & defense roadmaps",
//           href: "/services/cybersecurity-strategy",
//         },
//         {
//           icon: <Layers size={18} />,
//           title: "IT Infrastructure & Architecture",
//           desc: "Enterprise network design, assessment & cloud advisory",
//           href: "/services/network-assessment",
//         },
//         {
//           icon: <ClipboardCheck size={18} />,
//           title: "Compliance & GRC Auditing",
//           desc: "ISO 27001, NIST alignment & legal framework audits",
//           href: "/services/grc-compliance",
//         },
//         {
//           icon: <GraduationCap size={18} />,
//           title: "Security Awareness & Technical Trainings",
//           desc: "Corporate phishing defense & specialized tech workshops",
//           href: "/services/trainings",
//         },
//       ],
//     },
//   ],
//   products: [
//     {
//       title: "Business Management",
//       bgColor: "bg-blue-100",
//       items: [
//         {
//           icon: <Zap size={20} />,
//           title: "Bonik Book",
//           href: "/products/bonik-book",
//         },
//         {
//           icon: <LayoutTemplate size={20} />,
//           title: "HR Lounge",
//           href: "/products/hr-lounge",
//         },
//       ],
//     },
//     {
//       title: "Security & Access",
//       bgColor: "bg-blue-100",
//       items: [
//         {
//           icon: <Shield size={20} />,
//           title: "iVisit",
//           href: "/products/ivisit",
//         },
//         {
//           icon: <Monitor size={20} />,
//           title: "GRC Portal",
//           href: "/products/grc",
//         },
//       ],
//     },
//   ],
//   Resources: [
//     {
//       title: "Publications & Research",
//       bgColor: "bg-blue-100",
//       items: [
//         {
//           icon: <Monitor size={20} />,
//           title: "Research Papers",
//           href: "/research",
//         },
//         {
//           icon: <LayoutTemplate size={20} />,
//           title: "Publications",
//           href: "/publications",
//         },
//         {
//           icon: <PlayCircle size={20} />,
//           title: "Press Interviews",
//           href: "/interviews",
//         },
//       ],
//     },
//     {
//       title: "Marketing Assets",
//       bgColor: "bg-blue-100",
//       items: [
//         {
//           icon: <Zap size={20} />,
//           title: "Company Brochure",
//           href: "/brochure",
//         },
//         {
//           icon: <Shield size={20} />,
//           title: "Security Flyers",
//           href: "/flyers",
//         },
//       ],
//     },
//     {
//       title: "Events & Media",
//       bgColor: "bg-blue-100",
//       items: [
//         {
//           icon: <AlignRight size={20} />,
//           title: "Trade Shows",
//           href: "/events",
//         },
//         {
//           icon: <PlayCircle size={20} />,
//           title: "Gallery",
//           href: "/gallery",
//         },
//       ],
//     },
//   ],
// };

// @/data/navbarContents.js

export const navbarContents = {
  Services: [
    { title: "Development Services", href: "/services/development" },
    { title: "IT Staff Augmentation", href: "/services/staff-augmentation" },
    { title: "AI & ML", href: "/services/ai-ml" },
    { title: "Cybersecurity Services", href: "/services/cybersecurity" },
    { title: "IT Training Services", href: "/services/training" },
    { title: "Cloud Services", href: "/services/cloud" },
    { title: "Consulting", href: "/services/consulting" },
  ],
  Products: [
    { title: "Bonik Book", href: "/products/bonik-book" },
    { title: "HR Lounge", href: "/products/hr-lounge" },
    { title: "iVisit", href: "/products/ivisit" },
    { title: "GRC Portal", href: "/products/grc" },
  ],
  Resources: [
    { title: "Company Brochures", href: "/resources/brochures" },
    { title: "Company Flyers", href: "/resources/flyers" },
    { title: "Media Interviews", href: "/resources/interviews" },
    { title: "Seminars", href: "/resources/seminars" },
    { title: "Gallery", href: "/resources/gallery" },
    { title: "Partners", href: "/resources/partners" },
    { title: "Previous Experience", href: "/resources/previous-experience" },
    { title: "Certifications", href: "/resources/certifications" },
  ],
};
