export const projectsData = [
  {
    id: "hr-lounge",
    tag: "HRTech & SaaS",
    title: "MyHR Lounge",
    subtitle:
      "A cloud-based comprehensive HRM ecosystem built to optimize workforce productivity and automate core HR workflows.",
    description:
      "A powerful and intuitive HRM solution designed to streamline the entire employee lifecycle. From recruitment and onboarding to attendance tracking, payroll management, and performance evaluation, MHRL simplifies complex HR processes with user-friendly automation.",
    duration: "12 Weeks",
    client: "Internal SaaS Product",
    metrics: [
      { value: "LIFECYCLE", label: "END-TO-END AUTOMATION" },
      { value: "COMPLY", label: "PAYROLL & ATTENDANCE" },
      { value: "EASY", label: "EVALUATION TOOLS" },
    ],
    imageUrl: "/images/projects/hr_lounge.png",
    challenge:
      "The primary challenge was managing complex multi-shift attendance logic and automated payroll calculations accurately while keeping the user interface clean and accessible for non-technical users. We resolved this by building a highly visual modular dashboard and optimizing state management.",
    liveUrl: "https://myhrlounge.com/",
  },
  {
    id: "ivisit",
    tag: "Security & Operations",
    title: "iVisit (iVMS)",
    subtitle:
      "An enterprise-grade digital visitor management framework engineered to maximize perimeter security and log automation.",
    description:
      "A State-of-the-Art Visitor Management System designed to replace traditional manual logbooks. It automates tasks to track visitors, temporary employees, and contractors, significantly improving perimeter security, operational efficiency, and the overall guest experience.",
    duration: "8 Weeks",
    client: "Bizi Corporate Team",
    metrics: [
      { value: "SECURE", label: "PERIMETER CONTROL" },
      { value: "100%", label: "DIGITAL SIGN-IN/OUT" },
      { value: "SMOOTH", label: "GUEST EXPERIENCE" },
    ],
    imageUrl: "/images/projects/ivisit.png",
    challenge:
      "Replacing analog paper-based logbooks required a zero-friction user journey for guests check-in. We engineered a rapid QR-code check-in system and custom UI components that minimized check-in times to under 10 seconds.",
    liveUrl: "https://bizivisit.com/",
  },
  {
    id: "bonik-book",
    tag: "Mini-ERP & Accounting",
    title: "Bonik Book",
    subtitle:
      "A lightweight cloud-accessible ERP platform designed to modernize inventory tracking and daily retail accounting.",
    description:
      "An affordable, robust business management and mini-ERP software for small and medium businesses. It eliminates complexities by managing day-to-day accounting, profit & loss, multilevel work orders, and real-time inventory tracking across multiple locations simultaneously.",
    duration: "14 Weeks",
    client: "Bonik Ecosystem",
    metrics: [
      { value: "ANYWHERE", label: "CLOUD ACCESSIBILITY" },
      { value: "MULTI", label: "LOCATION OVERSEEN" },
      { value: "MINI-ERP", label: "INVENTORY & ACCOUNTING" },
    ],
    imageUrl: "/images/projects/bonik_book.png",
    challenge:
      "Syncing inventory updates and profit/loss columns in real-time across multiple offline/online store branches simultaneously without running into database deadlocks. We solved it through highly granular caching layer strategies and structured API queries.",
    liveUrl: "https://bonikbook.com/",
  },
  {
    id: "grc",
    tag: "Cybersecurity & GRC",
    title: "eESM Framework",
    subtitle:
      "A state-of-the-art cybersecurity compliance product for corporate data protection and infrastructure pre-assessment.",
    description:
      "An Advanced Cybersecurity Pre-assessment GRC Product designed to protect corporate infrastructure. It identifies the current environment status based on business process controls and aligns them with top global standards like ISO, PCI-DSS, and NIST to prevent threats.",
    duration: "10 Weeks",
    client: "AAEESM Security Tech",
    metrics: [
      { value: "GRC", label: "PRE-ASSESSMENT PRODUCT" },
      { value: "COMPLIANT", label: "ISO, PCI, NIST STANDARDS" },
      { value: "PROTECT", label: "CYBER THREAT MITIGATION" },
    ],
    imageUrl: "/images/projects/eesm.png",
    challenge:
      "Mapping dynamic business security controls systematically across three major frameworks (ISO, PCI-DSS, NIST) concurrently without overwhelming the audit interface. Developed an interactive dashboard with smooth progress mapping animations to simplify deep technical scores.",
    liveUrl: "https://aaeesm.com/",
  },
  {
    id: "sprezzatura-bd",
    tag: "E-Commerce & Premium Fashion",
    title: "Sprezzatura BD",
    subtitle:
      "A premium, bespoke digital retail ecosystem crafted to bridge luxury fashion tailoring with flawless online shopping.",
    description:
      "A premium lifestyle and luxury clothing e-commerce ecosystem. Engineered with seamless user journeys, dynamic order tracking systems, and secure automated payment frameworks to scale digital retail operations flawlessly.",
    duration: "6 Weeks",
    client: "Sprezzatura BD Executive",
    metrics: [
      { value: "PREMIUM", label: "UX ARCHITECTURE" },
      { value: "AUTOMATED", label: "ORDER ECOSYSTEM" },
      { value: "SECURE", label: "PAYMENT GATEWAYS" },
    ],
    imageUrl: "/images/projects/sprezzatura.png",
    challenge:
      "Translating a physical bespoke tailoring/measurement experience into an intuitive digital setup while maintaining a high-end luxury brand aesthetic. We implemented ultra-smooth Framer Motion transitions and custom dropdown parameters tailored to custom fit orders.",
    liveUrl: "https://sprezzaturabd.com/",
  },
  {
    id: "audit-com-bd",
    tag: "Corporate & Web Showcase",
    title: "Audit Bangladesh Official",
    subtitle:
      "A high-performance, pixel-perfect digital hub built for corporate identity and elite business credibility.",
    description:
      "A highly responsive, pixel-perfect static web architecture built for corporate identity. Focused heavily on premium UI/UX, optimized performance, and lightweight client-side interactions to deliver the business's core message seamlessly without complex backend dependencies.",
    duration: "4 Weeks",
    client: "Audit Bangladesh Corporation",
    metrics: [
      { value: "STATIC", label: "LIGHTWEIGHT ARCHITECTURE" },
      { value: "100%", label: "PIXEL-PERFECT RESPONSIVE" },
      { value: "FAST", label: "OPTIMIZED SPEED & UX" },
    ],
    imageUrl: "/images/projects/audit.png",
    challenge:
      "Organizing extensive corporate compliance parameters, documentation lists, and service guidelines without turning the interface into a boring data wall. We integrated a sleek layout hierarchy, optimized tracking systems, and rich typography to make browsing enjoyable.",
    liveUrl: "https://www.audit.com.bd/",
  },
];
