import {
  RefreshCw,
  Compass,
  Lock,
  Headset,
  Network,
  Sparkles,
} from 'lucide-react'

export const SOLUTIONS = [
  {
    slug: 'application-modernization',
    icon: RefreshCw,
    title: 'Application Modernization',
    description:
      'Application modernization transforms legacy software into scalable, cloud-ready systems that keep pace with your business.',
    features: ['Legacy system upgrades', 'Cloud-native re-architecture'],
    longDescription:
      'We help you move beyond outdated, hard-to-maintain systems by re-platforming and re-architecting applications for the cloud. From incremental refactors to full rebuilds, we modernize your stack without disrupting the business that depends on it.',
    highlights: [
      'Legacy system assessment',
      'Re-platforming and re-architecture',
      'Microservices migration',
      'Continuous integration and delivery',
    ],
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop',
  },
  {
    slug: 'cloud-advisory',
    icon: Compass,
    title: 'Cloud Advisory',
    description:
      'Cloud advisory guides your organization through cloud strategy, governance, and adoption decisions with confidence.',
    features: ['Cloud strategy roadmaps', 'Governance and cost control'],
    longDescription:
      'We work alongside your leadership team to define a cloud strategy that fits your goals, budget, and risk tolerance. From vendor selection to governance frameworks, our advisory services help you make informed decisions before you build.',
    highlights: [
      'Cloud readiness assessments',
      'Vendor and platform selection',
      'Governance and compliance frameworks',
      'Cost modeling and optimization',
    ],
    image:
      'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1400&auto=format&fit=crop',
  },
  {
    slug: 'cybersecurity-services',
    icon: Lock,
    title: 'Cybersecurity Services',
    description:
      'Cybersecurity services deliver end-to-end protection for your systems, data, and people against evolving threats.',
    features: ['Managed security operations', 'Compliance and risk management'],
    longDescription:
      'Our cybersecurity services cover the full lifecycle of protection — from risk assessment and hardening to managed detection and response. We tailor coverage to your industry and compliance requirements so you stay protected and audit-ready.',
    highlights: [
      'Managed detection and response',
      'Risk and compliance assessments',
      'Security awareness training',
      'Penetration testing',
    ],
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1400&auto=format&fit=crop',
  },
  {
    slug: 'remote-managed-services',
    icon: Headset,
    title: 'Remote Managed Services',
    description:
      'Remote managed services keep your IT infrastructure running smoothly with proactive monitoring and support.',
    features: ['24/7 infrastructure monitoring', 'Remote helpdesk support'],
    longDescription:
      'We take day-to-day IT operations off your plate with remote monitoring, maintenance, and support delivered around the clock. Our managed services team resolves issues before they become outages, so your team can focus on the work that matters.',
    highlights: [
      '24/7 monitoring and alerting',
      'Proactive maintenance and patching',
      'Remote helpdesk and support',
      'SLA-backed response times',
    ],
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1400&auto=format&fit=crop',
  },
  {
    slug: 'unified-system-integrations',
    icon: Network,
    title: 'Unified System Integrations',
    description:
      'Unified system integrations connect your applications, data, and workflows into a single, cohesive ecosystem.',
    features: ['API and middleware integration', 'Cross-platform data sync'],
    longDescription:
      'We connect disparate systems, applications, and data sources into a unified workflow, eliminating silos and manual handoffs. Whether it is ERP, CRM, or custom platforms, we design integrations that keep your business running as one system.',
    highlights: [
      'API design and integration',
      'Middleware and workflow automation',
      'Cross-platform data synchronization',
      'Legacy-to-modern system bridging',
    ],
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1400&auto=format&fit=crop',
  },
  {
    slug: 'ai-solutions',
    icon: Sparkles,
    title: 'AI Solutions',
    description:
      'AI solutions bring machine learning and automation into your business to drive smarter, faster decision-making.',
    features: ['Custom AI model development', 'Process automation'],
    longDescription:
      'We design and deploy AI-driven solutions tailored to your business, from intelligent automation to custom machine learning models. Our team helps you identify high-impact use cases and turn them into production-ready systems.',
    highlights: [
      'Custom AI and ML model development',
      'Intelligent process automation',
      'Natural language and vision applications',
      'Model deployment and monitoring',
    ],
    image:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1400&auto=format&fit=crop',
  },
]

export function getSolutionBySlug(slug) {
  return SOLUTIONS.find((solution) => solution.slug === slug)
}
