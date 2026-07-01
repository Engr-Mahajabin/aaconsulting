export interface BentoItem {
  number?: string;
  title: string;
  description: string;
  imageSrc?: string;
}

export const fullDevelopmentBentoData: BentoItem[] = [
  {
    number: "01",
    title: "Enterprise Software Development",
    description:
      "Designing tailored ERPs, HIMS, RMG, and smart business management systems (like Bonik Book) to streamline large-scale workflows.",
    imageSrc: "/images/services/custom-software.png",
  },
  {
    number: "02",
    title: "SaaS Product Development",
    description:
      "Engineering scalable, multi-tenant cloud architectures and AI-based subscription products built for performance and growth.",
    imageSrc: "/images/services/fullstack.jpg",
  },
  {
    number: "03",
    title: "Web Application Development",
    description:
      "Building robust, visually stunning, and conversion-optimized websites, secure e-commerce platforms, and custom portals.",
    imageSrc: "/images/services/api.png",
  },
  {
    number: "04",
    title: "Mobile App Development",
    description:
      "Crafting high-performance native and cross-platform mobile applications for iOS and Android tailored to user needs.",
    imageSrc: "/images/services/mobile-app.jpeg",
  },
  {
    number: "05",
    title: "Cloud Infrastructure & DevOps",
    description:
      "Deploying secure architectures on AWS or GCP with CI/CD automation, domain hosting management, and zero downtime.",
    imageSrc: "/images/services/devops.png",
  },
  {
    number: "06",
    title: "Database Design & Optimization",
    description:
      "Structuring high-availability relational and NoSQL databases optimized for speed, security, and complex business data.",
    imageSrc: "/images/services/database.jpg",
  },
];
