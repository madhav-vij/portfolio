"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { img } from "@/lib/image-path"

type Highlight = { value: string; label: string }
type ExpType = {
  company: string
  role: string
  period: string
  type?: string
  logo: string
  promoted?: boolean
  description: string
  bullets: string[]
  highlights: Highlight[]
  accent: string
}

const experiences: ExpType[] = [
  {
    company: "BOP Realty",
    role: "Assistant Marketing Manager",
    period: "Nov 2025 – Present",
    type: "Full-time",
    logo: img("/images/boplog.jpg"),
    promoted: true,
    description: "Promoted from within after building BOP's content and performance marketing system from scratch. Now leading a 15-member team across design, content, performance, and development — owning strategy, execution, and everything in between.",
    bullets: [
      "Took the brand's organic presence from hundreds of views to millions, building a content system that consistently produces high-reach, platform-native content.",
      "Managing campaigns for Godrej, DLF, M3M, Gaurs, Sobha, Bhutani, Danube, Migsun, and Prestige — alongside offline event marketing and driving broker registrations at scale.",
      "Handling the personal branding of bop.in and the founder, and creator of United Network — a broker and channel partner community across Delhi NCR.",
    ],
    highlights: [
      { value: "₹1.12Cr", label: "Ad Spend" },
      { value: "12,000+", label: "Leads" },
      { value: "3M+", label: "Organic Views" },
      { value: "15–20", label: "Team Size" },
    ],
    accent: "#3b82f6",
  },
  {
    company: "BOP Realty",
    role: "Senior Digital Marketing Executive",
    period: "Oct 2024 – Oct 2025",
    type: "Full-time",
    logo: img("/images/boplog.jpg"),
    description: "Handled end-to-end social media, Meta campaigns, creatives, and performance tracking for BOP's real estate projects. Laid the foundation for the brand's content identity and organic growth across platforms.",
    bullets: [
      "Campaign execution, ad optimisation, organic content, reel scripting, and lead-generation campaigns.",
      "Played a major role in improving the brand's visibility, engagement, and consistency across digital platforms.",
    ],
    highlights: [],
    accent: "#6366f1",
  },
  {
    company: "Counsel India",
    role: "Digital Marketing Executive",
    period: "June 2024 – Oct 2024",
    type: "Full-time",
    logo: img("/images/counselindia-new.png"),
    promoted: true,
    description: "Promoted within four months. Grew Instagram from 70K to 100K+ followers while building a content engine that generated consistent organic revenue every month.",
    bullets: [
      "Ran large-scale Meta campaigns for student lead generation and opened multiple organic lead channels — lead magnets, toolkits, quizzes, and e-books.",
      "Managed the full social media presence and CRM on LeadSquared and Meritto, bridging content, performance, and sales in one function.",
    ],
    highlights: [
      { value: "₹60L", label: "Ad Spend" },
      { value: "51,000+", label: "Leads" },
      { value: "34M+", label: "Organic Views" },
      { value: "₹5L/mo", label: "Organic Revenue" },
    ],
    accent: "#8b5cf6",
  },
  {
    company: "Counsel India",
    role: "Digital Marketing Intern",
    period: "Feb 2024 – May 2024",
    type: "Internship",
    logo: img("/images/counselindia-new.png"),
    description: "Started with creatives, thumbnails, reel covers, copywriting, and SEO research. Grew fast enough to get promoted within four months.",
    bullets: [
      "Worked on ad creatives, thumbnails, reel covers, brochures, e-books, copywriting, and SEO research.",
      "Built the foundation for understanding how content, branding, and performance marketing connect.",
    ],
    highlights: [],
    accent: "#a855f7",
  },
]

const freelance: ExpType[] = [
  {
    company: "Ampify Marketing Agency",
    role: "Freelance Marketing Consultant",
    period: "Jun 2025 – Dec 2025",
    type: "Freelance",
    logo: img("/images/ampify.jpeg"),
    description: "Managed multiple brand accounts simultaneously across EdTech, FMCG, FinTech, Fashion, Food, and Real Estate — handling social media management, content calendars, paid campaigns, and performance tracking all at once.",
    bullets: [
      "Used tools like Buffer and Hootsuite to manage scheduling and reporting across accounts.",
      "Brands: Dhirubhai Ambani University, Medhavi Skill University, Cheesecake & Co., Apara, and Stockify. Fast-paced, multi-client environment that demanded sharp prioritisation and consistent output across very different industries.",
    ],
    highlights: [
      { value: "₹24L", label: "Ad Spend" },
      { value: "13,200+", label: "Leads" },
      { value: "5+", label: "Industries" },
    ],
    accent: "#6366f1",
  },
  {
    company: "Upskill Lab",
    role: "Freelance Growth Consultant",
    period: "2023 – Present",
    type: "Freelance",
    logo: img("/images/upskilllogo.jpg"),
    description: "Built the brand from scratch — starting with brand guidelines and logo design, establishing the entire marketing foundation before a single campaign went live.",
    bullets: [
      "Took ownership of overall social media management, ad campaign strategy, and organic lead generation, building systems that drove consistent revenue month on month.",
      "Every element of Upskill Lab's digital presence — from how the brand looks to how it acquires customers — was built and managed here.",
    ],
    highlights: [
      { value: "₹6L+", label: "Ad Spend" },
      { value: "₹5L+", label: "Organic Revenue" },
    ],
    accent: "#3b82f6",
  },
]

function ExperienceCard({ exp, index }: { exp: ExpType; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="flex flex-col md:grid md:grid-cols-[140px_1fr] gap-0 mb-5 last:mb-0"
    >
      <div className="md:pt-5 pb-2 md:pb-0 md:pr-6 flex md:flex-col md:items-end items-center gap-3 md:gap-1.5">
        <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">{exp.period}</span>
        {exp.type && (
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap"
            style={{ background: `${exp.accent}18`, color: exp.accent, border: `1px solid ${exp.accent}30` }}>
            {exp.type}
          </span>
        )}
      </div>

      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        className="group relative overflow-hidden rounded-2xl"
        style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl"
          style={{ background: `linear-gradient(to bottom, ${exp.accent}, ${exp.accent}30)` }} />
        <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg,transparent,${exp.accent}70,transparent)` }} />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
          style={{ background: `radial-gradient(ellipse at top left, ${exp.accent}08, transparent 60%)` }} />

        <div className="relative pl-6 pr-5 py-5">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden mt-0.5"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <Image src={exp.logo} alt={exp.company} width={32} height={32} className="object-contain" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-0.5">
                <h3 className="text-white font-bold text-[15px] leading-tight">{exp.role}</h3>
                {exp.promoted && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={{ background: `${exp.accent}20`, color: exp.accent, border: `1px solid ${exp.accent}40` }}>
                    ↑ Promoted
                  </span>
                )}
              </div>
              <span className="text-slate-400 text-sm font-medium">{exp.company}</span>
            </div>
          </div>

          <p className="text-slate-500 text-sm leading-relaxed mb-4">{exp.description}</p>

          <ul className="space-y-2 mb-4">
            {exp.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2.5 text-slate-300 text-sm leading-relaxed">
                <div className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ background: exp.accent }} />
                {b}
              </li>
            ))}
          </ul>

          {exp.highlights.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              {exp.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
                  style={{ background: `${exp.accent}12`, border: `1px solid ${exp.accent}25` }}>
                  <span className="text-sm font-black leading-none" style={{ color: exp.accent }}>{h.value}</span>
                  <span className="text-[10px] text-slate-500 font-medium">{h.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

function SectionHeader({ label, title, subtitle, delay = 0 }: { label: string; title: string; subtitle: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="mb-10"
    >
      <div className="section-label"><span className="w-6 h-px" style={{ background: "#8b5cf6" }} />{label}</div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3">{title}</h2>
      <div className="w-16 h-0.5 rounded-full mb-4" style={{ background: "linear-gradient(90deg,#3b82f6,#8b5cf6)" }} />
      <p className="text-slate-500 text-base max-w-xl">{subtitle}</p>
    </motion.div>
  )
}

export function Experience() {
  return (
    <section id="experience" className="relative py-16 sm:py-28 overflow-hidden" style={{ background: "#050b18" }}>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle,#7c3aed,transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: "radial-gradient(circle,#3b82f6,transparent 70%)" }} />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeader label="Career" title="Experience"
          subtitle="The roles, brands, campaigns, and systems that shaped how I think about marketing." />

        <div className="mb-20">
          {experiences.map((exp, i) => <ExperienceCard key={i} exp={exp} index={i} />)}
        </div>

        <SectionHeader label="Consulting" title="Freelance & Consulting"
          subtitle="Alongside full-time roles, I've worked with growing brands across multiple industries — helping them scale through performance marketing, content systems, and digital growth strategies."
          delay={0.1} />

        <div>
          {freelance.map((exp, i) => <ExperienceCard key={i} exp={exp} index={i} />)}
        </div>
      </div>
    </section>
  )
}
