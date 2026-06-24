"use client"

import { motion } from "framer-motion"
import { img } from "@/lib/image-path"

const stats = [
  { value: "₹2Cr+",   label: "Ad Spend Managed" },
  { value: "81,400+", label: "Leads Generated" },
  { value: "45M+",    label: "Organic Views" },
]

export function Hero() {
  return (
    <>
      <section id="home" className="w-full" style={{ background: "#080808" }}>
        <img
          src={img("/images/hero-section.jpeg")}
          alt="Madhav Vij"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </section>

      {/* ─── STATS SECTION ─── */}
      <section className="py-14 sm:py-20" style={{ background: "#080808" }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl p-5 sm:p-6 group cursor-default"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: "linear-gradient(135deg,rgba(99,102,241,0.07),rgba(236,72,153,0.05))" }} />
                <div className="relative">
                  <div className="text-3xl sm:text-4xl font-black mb-1.5 leading-none"
                    style={{
                      background: "linear-gradient(135deg,#3b82f6,#6366f1,#8b5cf6,#a855f7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}>
                    {stat.value}
                  </div>
                  <div className="text-white font-semibold text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
