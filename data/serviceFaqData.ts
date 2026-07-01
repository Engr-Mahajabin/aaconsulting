export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  service:
    | "enterprise"
    | "saas"
    | "website"
    | "app"
    | "cybersecurity"
    | "ai-ml"
    | "staff"
    | "training"
    | "cloud"
    | "consulting";
}

export const serviceFaqData: FaqItem[] = [
  // ==========================================
  // 1. DEVELOPMENT PAGE QUESTIONS (Total: 8)
  // ==========================================
  {
    id: "dev-01",
    service: "enterprise",
    question:
      "How do you ensure scalability and uptime in enterprise solutions?",
    answer:
      "We build enterprise architectures using microservices, load balancers, and strict domain-driven design (DDD). By decoupling services and setting up auto-scaling groups on cloud platforms like AWS, your system can handle massive traffic spikes with zero downtime.",
  },
  {
    id: "dev-02",
    service: "enterprise",
    question:
      "Can you integrate our existing legacy systems with new custom software?",
    answer:
      "Yes, legacy modernization is one of our core expertise. We design custom middleware and secure RESTful or GraphQL APIs to seamlessly bridge data pipelines between your current systems and modern cloud infrastructures without disrupting day-to-day business operations.",
  },
  {
    id: "dev-03",
    service: "saas",
    question:
      "How do you handle multi-tenancy and robust data isolation in SaaS platforms?",
    answer:
      "Depending on your industry compliance, we implement either a pooled database approach with strict PostgreSQL Row-Level Security (RLS) or separate database schemas per client. This ensures absolute data privacy, preventing any cross-tenant data leakage.",
  },
  {
    id: "dev-04",
    service: "saas",
    question:
      "Which global and local payment solutions can you integrate into SaaS products?",
    answer:
      "We seamlessly set up global payment gateways like Stripe, PayPal, and Paddle with automated subscription handling, grace periods, and webhooks. For regional markets, we also integrate local merchant APIs like bKash, Nagad, and SSLCommerz.",
  },
  {
    id: "dev-05",
    service: "website",
    question:
      "What tech stack do you use to ensure blazing-fast website performance?",
    answer:
      "We build modern frontend interfaces using Next.js, React, TypeScript, and Tailwind CSS. Combined with Server-Side Rendering (SSR), Incremental Static Regeneration (ISR), and headless CMS platforms, we achieve near-perfect Core Web Vitals and Google Lighthouse scores.",
  },
  {
    id: "dev-06",
    service: "website",
    question:
      "How do you handle SEO optimization during the web development process?",
    answer:
      "SEO is embedded into our workflow from day one. We ensure clean semantic HTML structures, dynamic Meta and Open Graph tags generation, optimized image delivery (Next/Image), automated XML sitemaps, and structured JSON-LD schema markup for enhanced search visibility.",
  },
  {
    id: "dev-07",
    service: "app",
    question:
      "Do you develop native mobile applications or cross-platform apps?",
    answer:
      "We primarily specialize in cross-platform development using React Native and Flutter. This allows us to write a single codebase that delivers beautiful, native 60fps performance on both iOS and Android, saving up to 40% of the traditional development budget.",
  },
  {
    id: "dev-08",
    service: "app",
    question: "How do your mobile applications handle offline functionality?",
    answer:
      "We integrate local on-device storage systems like SQLite, Hive, or Realm. When a user loses internet connectivity, the application queues all actions locally. As soon as the connection is restored, background workers sync the data smoothly with the central server.",
  },

  // ==========================================
  // 2. CYBER SECURITY PAGE QUESTIONS (Total: 6)
  // ==========================================
  {
    id: "cyber-01",
    service: "cybersecurity",
    question:
      "What compliance standards and frameworks do your security services align with?",
    answer:
      "Our security engineering and code auditing processes strictly adhere to global standard frameworks including OWASP Top 10, ISO 27001, and NIST standards. We ensure your platforms are comprehensively guarded against standard digital threats.",
  },
  {
    id: "cyber-02",
    service: "cybersecurity",
    question:
      "What is your approach to Vulnerability Assessment and Penetration Testing (VAPT)?",
    answer:
      "We perform a two-step auditing process: automated continuous scanning to catch common surface-level flaws, followed by deep manual penetration testing. Our team simulates real-world threat actors to find logic flaws, broken access controls, and injection bugs.",
  },
  {
    id: "cyber-03",
    service: "cybersecurity",
    question:
      "How do you protect sensitive user data both in transit and at rest?",
    answer:
      "All network traffic is forced through secure HTTPS protocols utilizing modern TLS 1.3 encryption. For data stored in databases, we apply industry-standard AES-256 bit encryption along with highly secure infrastructure secret management tools like AWS Secrets Manager or HashiCorp Vault.",
  },
  {
    id: "cyber-04",
    service: "cybersecurity",
    question:
      "How do you secure API endpoints against automated bot attacks and DDoS?",
    answer:
      "We implement advanced API security measures including strict JSON Web Token (JWT) verification, rigid CORS configuration, request rate-limiting, IP throttling, and layer-7 web application firewalls (WAF) to block malicious traffic patterns instantly.",
  },
  {
    id: "cyber-05",
    service: "cybersecurity",
    question:
      "Do you provide source code security reviews for software development?",
    answer:
      "Yes, we offer both Static (SAST) and Dynamic (DAST) Application Security Testing. We audit your codebase line-by-line to identify insecure dependencies, hardcoded credentials, buffer overflows, and privilege escalation vectors before the product goes live.",
  },
  {
    id: "cyber-06",
    service: "cybersecurity",
    question:
      "What is your protocol if an active security incident or breach occurs?",
    answer:
      "We establish an Incident Response Plan that isolates affected nodes immediately to contain the breach. We then perform digital forensics to find the root cause, patch the vulnerability, securely restore verified clean backups, and generate a post-incident mitigation report.",
  },

  // ==========================================
  // 3. AI / MACHINE LEARNING PAGE QUESTIONS (Total: 6)
  // ==========================================
  {
    id: "ai-01",
    service: "ai-ml",
    question:
      "What kind of custom AI/ML models can you integrate into existing platforms?",
    answer:
      "We build and integrate various intelligence layers including Natural Language Processing (NLP) models for smart customer service assistants, Predictive Analytics engines for forecasting sales, Recommendation Systems, and Computer Vision models for object detection.",
  },
  {
    id: "ai-02",
    service: "ai-ml",
    question:
      "How do you guarantee the accuracy and minimize bias in your ML models?",
    answer:
      "We implement strict data preprocessing pipelines using Python's data science ecosystem (NumPy, Pandas, Scikit-Learn). By cleaning datasets, handling missing variables gracefully, and using cross-validation techniques, we prevent model overfitting and keep accuracy high.",
  },
  {
    id: "ai-03",
    service: "ai-ml",
    question:
      "Can you fine-tune or integrate Large Language Models (LLMs) like GPT-4?",
    answer:
      "Yes, we specialize in building custom AI features powered by LLMs. We implement Retrieval-Augmented Generation (RAG) to connect AI models safely to your company's private internal documentation, giving your workflows incredibly accurate, context-aware answers via API.",
  },
  {
    id: "ai-04",
    service: "ai-ml",
    question:
      "How do you optimize ML models for real-time inference without slowing down apps?",
    answer:
      "We compile and optimize models using tools like ONNX or TensorRT, converting heavy weights through quantization. We deploy these lightweight pipelines on GPU-optimized server instances or serverless edge functions to keep API response times minimal.",
  },
  {
    id: "ai-05",
    service: "ai-ml",
    question:
      "What technology stack do your engineers use for data science and AI workflows?",
    answer:
      "Our core AI development is driven by Python, leveraging frameworks like TensorFlow, PyTorch, and Keras for deep learning. For deployment and ML pipeline automation (MLOps), we utilize Docker, Kubernetes, and specialized cloud services from AWS or Google Cloud.",
  },
  {
    id: "ai-06",
    service: "ai-ml",
    question:
      "How do you handle data privacy and security when training AI models?",
    answer:
      "We prioritize enterprise data governance. All datasets are strictly anonymized, stripped of Personally Identifiable Information (PII) before training loops begin, and stored within access-controlled environments. We ensure your corporate data is never exposed to public models.",
  },

  // ==========================================
  // 4. STAFF AUGMENTATION PAGE QUESTIONS (Total: 4)
  // ==========================================
  {
    id: "staff-01",
    service: "staff",
    question: "How quickly can we onboard a developer to our team?",
    answer:
      "We usually provide curated resumes within 48 hours. After your final technical interview and approval, the selected developer can be onboarded into your Slack, Jira, and development environment within 3 to 5 business days.",
  },
  {
    id: "staff-02",
    service: "staff",
    question:
      "What happens if an onboarded developer does not meet our expectations?",
    answer:
      "We have a strict talent-replacement guarantee. If a developer's performance or cultural fit isn't matching your velocity within the first month, we will provide a replacement engineer immediately without any extra onboarding costs.",
  },
  {
    id: "staff-03",
    service: "staff",
    question: "How do you handle time zone differences for remote developers?",
    answer:
      "Our engineers are trained to maintain at least a 3 to 4-hour overlap with your core working hours for daily standups, sprint planning, and active communication, handling the rest of the tasks asynchronously via GitHub and Jira.",
  },
  {
    id: "staff-04",
    service: "staff",
    question:
      "Who manages the payroll, benefits, and legal compliance of the augmented staff?",
    answer:
      "We handle 100% of the HR operational management, including monthly payroll, local taxes, software licensing overheads, and health benefits. You only receive a single, straightforward monthly invoice for the hours worked.",
  },

  // ==========================================
  // 5. IT TRAINING SERVICES QUESTIONS (Total: 4)
  // ==========================================
  {
    id: "train-01",
    service: "training",
    question:
      "Can you customize the training curriculum for our specific tech stack?",
    answer:
      "Absolutely. We design bespoke corporate bootcamps tailored to your current production architecture, legacy codebases, and engineering requirements. We skip generic tutorials and focus on your business goals.",
  },
  {
    id: "train-02",
    service: "training",
    question:
      "Are the training sessions recorded for internal future onboarding?",
    answer:
      "Yes, all live sessions, interactive sandbox lab architectures, custom source codes, and reference materials are securely archived and shared with your management for future team onboarding.",
  },
  {
    id: "train-03",
    service: "training",
    question:
      "Do you provide hands-on practical labs or is it just theoretical?",
    answer:
      "Our training is 90% hands-on. We set up isolated sandbox environments that mimic real-world cloud architectures and production workflows, ensuring your engineers learn by actively building and debugging.",
  },
  {
    id: "train-04",
    service: "training",
    question:
      "How do you evaluate the technical progress of our team during the program?",
    answer:
      "We track progress through continuous code reviews, weekly milestone tasks, and a final production-grade capstone project. Management receives a comprehensive evaluation report for each developer.",
  },

  // ==========================================
  // 6. CLOUD SERVICES QUESTIONS (Total: 4)
  // ==========================================
  {
    id: "cloud-01",
    service: "cloud",
    question: "How do you ensure zero downtime during cloud migration?",
    answer:
      "We use a phased migration strategy instead of a direct lift-and-shift. By setting up parallel cloud environments, using real-time database replication tools, and doing data synchronization in the background, we route user traffic smoothly using DNS failovers (like AWS Route 53) with zero business disruption.",
  },
  {
    id: "cloud-02",
    service: "cloud",
    question:
      "How can you help us optimize our monthly cloud infrastructure bills?",
    answer:
      "We conduct deep cloud cost auditing. By implementing auto-scaling groups, transitioning underutilized assets to serverless architectures, setting up automated cron jobs to stop development environments after work hours, and configuring tiered storage strategies (like AWS S3 Glacier), we typically cut monthly server costs by 30% to 50%.",
  },
  {
    id: "cloud-03",
    service: "cloud",
    question:
      "What is your approach to Cloud Security and Infrastructure Compliance?",
    answer:
      "We deploy strict multi-tenant network isolation using Virtual Private Clouds (VPCs). We enforce the Principle of Least Privilege via Identity & Access Management (IAM), enable end-to-end encryption for data at rest and in transit, and set up continuous security log analysis to meet SOC 2, ISO 27001, or HIPAA guidelines.",
  },
  {
    id: "cloud-04",
    service: "cloud",
    question:
      "Do you build infrastructure manually or use Infrastructure as Code (IaC)?",
    answer:
      "We build 100% of our cloud environments using Infrastructure as Code (IaC) tools like Terraform or AWS CloudFormation. This guarantees that your server infrastructure is fully documented, version-controlled via Git, and can be instantly replicated or rebuilt in a different region in case of disaster recovery.",
  },

  // ==========================================
  // 7. IT CONSULTING QUESTIONS (Total: 4)
  // ==========================================
  {
    id: "con-01",
    service: "consulting",
    question: "What exactly does your IT consulting process involve?",
    answer:
      "Our consulting workflow follows a strict 4-step process: Deep Discovery & Audit of your current technology stack, Strategic Roadmap Design to eliminate technical debt, unbiased Vendor & Tech Framework Evaluation, and Governance Management to help your internal team adopt new systems smoothly.",
  },
  {
    id: "con-02",
    service: "consulting",
    question:
      "How do you help our business identify and reduce technical debt?",
    answer:
      "We perform a thorough code and architectural review of your legacy software ecosystem. By mapping out outdated dependencies, unscalable monolithic setups, and performance bottlenecks, we provide a priority-based modernization roadmap to upgrade your systems without breaking running operations.",
  },
  {
    id: "con-03",
    service: "consulting",
    question:
      "Can you assist us in choosing the right tech stack for a new product?",
    answer:
      "Yes. We analyze your long-term business scale, budget, security guidelines, and current engineering team skills. Based on this, we deliver an unbiased technical specification document and build mini Proof of Concepts (POCs) to de-risk your investment before development starts.",
  },
  {
    id: "con-04",
    service: "consulting",
    question:
      "Do you provide post-consulting implementation support or development services?",
    answer:
      "Absolutely. We don't just hand over a PDF roadmap; we actively bridge the strategy-to-execution gap. We can either provide senior tech talents via our Staff Augmentation model or assign dedicated project managers to govern your internal engineers throughout the implementation cycle.",
  },
];
