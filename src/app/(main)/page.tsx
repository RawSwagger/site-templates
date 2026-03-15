"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* ─── Data ─── */

const tiers = [
  {
    name: "The Card",
    business: "Cole Cuts",
    type: "Barbershop",
    price: "$300 – $500",
    pages: "1 page",
    color: "#D4A843",
    href: "/demos/card",
    image: "https://images.unsplash.com/photo-1517869129960-b9b74bfcdecb?w=800&fit=crop&q=80",
  },
  {
    name: "The Portfolio",
    business: "Maya Rivera",
    type: "Photographer",
    price: "$800 – $1,500",
    pages: "3 pages",
    color: "#2563eb",
    href: "/demos/portfolio",
    image: "https://images.unsplash.com/photo-1572028412480-0a75271c6bb9?w=800&fit=crop&q=80",
  },
  {
    name: "The Business",
    business: "Iron Temple Fitness",
    type: "Gym",
    price: "$1,500 – $3,000",
    pages: "4 pages",
    color: "#ea580c",
    href: "/demos/business",
    image: "https://images.unsplash.com/photo-1545612036-2872840642dc?w=800&fit=crop&q=80",
  },
  {
    name: "The Store",
    business: "Street Crown Apparel",
    type: "Clothing",
    price: "$3,000 – $5,000",
    pages: "4+ pages",
    color: "#8b5cf6",
    href: "/demos/store",
    image: "https://images.unsplash.com/photo-1756641964889-5a04b6e0f4f6?w=800&fit=crop&q=80",
  },
];

const stats = [
  { number: "4", label: "Template Tiers" },
  { number: "20+", label: "Pages Built" },
  { number: "1-2", label: "Weeks to Deliver" },
  { number: "100%", label: "Responsive" },
];

const marqueeItems = [
  "Barbershops", "Photographers", "Gyms", "Clothing Brands", "Restaurants",
  "Real Estate", "Salons", "Musicians", "Coaches", "Dentists",
  "Lawyers", "Tattoo Artists", "DJs", "Personal Trainers", "Nail Techs",
];

const process = [
  {
    step: "01",
    title: "Pick Your Tier",
    description: "Browse the demos. Find the one that matches your business type and budget. Click through it — it's a real working website.",
  },
  {
    step: "02",
    title: "Tell Us About You",
    description: "Your business name, colors, photos, text, and anything else that makes you YOU. We take it from there.",
  },
  {
    step: "03",
    title: "We Build It",
    description: "Your custom site gets built on the same fast, modern tech the big companies use. Mobile-perfect. Lightning fast.",
  },
  {
    step: "04",
    title: "You Go Live",
    description: "Your site launches on your own domain. You own it. We can host it, maintain it, or hand you the keys.",
  },
];

const testimonials = [
  {
    name: "Darnell Washington",
    title: "Owner, Fresh Fade Studio",
    text: "I went from no website to getting 3-4 new clients a week from Google. Best money I ever spent on my business.",
  },
  {
    name: "Keisha Monroe",
    title: "Photographer, KM Visuals",
    text: "My portfolio site looks better than photographers charging twice what I charge. Clients take me seriously now.",
  },
  {
    name: "Carlos Reyes",
    title: "Founder, CR Fitness",
    text: "The site basically sells memberships for me. People see it and they're ready to sign up before they even walk in.",
  },
];

/* ─── Animation Variants ─── */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

/* ─── Page ─── */

export default function ShowroomPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">

      {/* ── NAV ── */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
          <Link href="/" className="text-lg font-bold tracking-tight">
            Raw<span className="text-[#6366f1]">Swagger</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#work" className="text-white/60 hover:text-white transition-colors">Work</a>
            <a href="#process" className="text-white/60 hover:text-white transition-colors">Process</a>
            <a href="#pricing" className="text-white/60 hover:text-white transition-colors">Pricing</a>
            <a href="mailto:terrence@rawswagger.com" className="bg-[#6366f1] hover:bg-[#818cf8] text-white px-5 py-2 rounded-full text-sm font-medium transition-colors">
              Start a Project
            </a>
          </nav>
          <a href="mailto:terrence@rawswagger.com" className="md:hidden bg-[#6366f1] text-white px-4 py-2 rounded-full text-sm font-medium">
            Let&apos;s Talk
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 grain-overlay">
        {/* Glow effects */}
        <div className="hero-glow bg-[#6366f1] top-1/4 left-1/4 -translate-x-1/2" />
        <div className="hero-glow bg-[#ec4899] bottom-1/4 right-1/4 translate-x-1/2" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.3em] text-white/40 mb-6"
          >
            Web Design Studio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8"
          >
            We build websites<br />
            that make people<br />
            <span className="gradient-text">want to buy.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-white/50 max-w-xl mx-auto mb-10"
          >
            Pick your tier. See exactly what you get. Your site goes live in 1-2 weeks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-4"
          >
            <a href="#work" className="bg-white text-black px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-white/90 transition-colors">
              See Our Work
            </a>
            <a href="#pricing" className="border border-white/20 text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:border-white/40 transition-colors">
              View Pricing
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 border-2 border-white/20 rounded-full flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 bg-white/40 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── MARQUEE ── */}
      <section className="py-8 border-y border-white/5 overflow-hidden">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="text-sm text-white/20 uppercase tracking-[0.2em] whitespace-nowrap px-8 font-medium">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ── FEATURED WORK ── */}
      <section id="work" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-16"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-[#6366f1] mb-3">Selected Work</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Real demos. Real designs.<br className="hidden md:block" />
              Click one and see for yourself.
            </h2>
          </motion.div>

          {/* Broken grid portfolio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-12 gap-5"
          >
            {/* Card — large */}
            <motion.div variants={fadeUp} className="md:col-span-7">
              <Link href={tiers[0].href}>
                <div className="portfolio-card aspect-[4/3]">
                  <img src={tiers[0].image} alt={tiers[0].business} loading="lazy" />
                  <div className="card-overlay">
                    <span className="text-xs uppercase tracking-[0.2em] mb-1" style={{ color: tiers[0].color }}>
                      {tiers[0].name} &middot; {tiers[0].pages}
                    </span>
                    <span className="text-xl font-bold text-white">{tiers[0].business}</span>
                    <span className="text-sm text-white/60 mt-1">{tiers[0].type} &middot; {tiers[0].price}</span>
                    <span className="text-sm font-medium mt-3" style={{ color: tiers[0].color }}>
                      View Demo &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Portfolio — smaller, offset */}
            <motion.div variants={fadeUp} className="md:col-span-5 md:mt-16">
              <Link href={tiers[1].href}>
                <div className="portfolio-card aspect-[3/4]">
                  <img src={tiers[1].image} alt={tiers[1].business} loading="lazy" />
                  <div className="card-overlay">
                    <span className="text-xs uppercase tracking-[0.2em] mb-1" style={{ color: tiers[1].color }}>
                      {tiers[1].name} &middot; {tiers[1].pages}
                    </span>
                    <span className="text-xl font-bold text-white">{tiers[1].business}</span>
                    <span className="text-sm text-white/60 mt-1">{tiers[1].type} &middot; {tiers[1].price}</span>
                    <span className="text-sm font-medium mt-3" style={{ color: tiers[1].color }}>
                      View Demo &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Business — smaller */}
            <motion.div variants={fadeUp} className="md:col-span-5 md:-mt-12">
              <Link href={tiers[2].href}>
                <div className="portfolio-card aspect-[3/4]">
                  <img src={tiers[2].image} alt={tiers[2].business} loading="lazy" />
                  <div className="card-overlay">
                    <span className="text-xs uppercase tracking-[0.2em] mb-1" style={{ color: tiers[2].color }}>
                      {tiers[2].name} &middot; {tiers[2].pages}
                    </span>
                    <span className="text-xl font-bold text-white">{tiers[2].business}</span>
                    <span className="text-sm text-white/60 mt-1">{tiers[2].type} &middot; {tiers[2].price}</span>
                    <span className="text-sm font-medium mt-3" style={{ color: tiers[2].color }}>
                      View Demo &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Store — large */}
            <motion.div variants={fadeUp} className="md:col-span-7">
              <Link href={tiers[3].href}>
                <div className="portfolio-card aspect-[4/3]">
                  <img src={tiers[3].image} alt={tiers[3].business} loading="lazy" />
                  <div className="card-overlay">
                    <span className="text-xs uppercase tracking-[0.2em] mb-1" style={{ color: tiers[3].color }}>
                      {tiers[3].name} &middot; {tiers[3].pages}
                    </span>
                    <span className="text-xl font-bold text-white">{tiers[3].business}</span>
                    <span className="text-sm text-white/60 mt-1">{tiers[3].type} &middot; {tiers[3].price}</span>
                    <span className="text-sm font-medium mt-3" style={{ color: tiers[3].color }}>
                      View Demo &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20 border-y border-white/5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="text-center">
              <p className="stat-number gradient-text">{stat.number}</p>
              <p className="text-sm text-white/40 mt-2 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-16"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-[#6366f1] mb-3">How It Works</p>
            <h2 className="text-3xl md:text-5xl font-bold">
              Four steps. That&apos;s it.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12"
          >
            {process.map((step) => (
              <motion.div key={step.step} variants={fadeUp} className="process-step" data-step={step.step}>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-white/50 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 md:py-32 px-6 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-16"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-[#6366f1] mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-5xl font-bold">
              Don&apos;t take our word for it.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                className="bg-white/5 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#f59e0b]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/70 leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-white/40">{t.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PRICING OVERVIEW ── */}
      <section id="pricing" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-[#6366f1] mb-3">Pricing</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              A site for every budget.
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              Every tier includes responsive design, fast hosting setup, and a site you own forever. No monthly fees unless you want maintenance.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {tiers.map((tier) => (
              <motion.div
                key={tier.name}
                variants={fadeUp}
                className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:border-white/10 transition-all group"
              >
                <div className="w-3 h-3 rounded-full mb-4" style={{ backgroundColor: tier.color }} />
                <h3 className="text-lg font-bold mb-1">{tier.name}</h3>
                <p className="text-sm text-white/40 mb-4">{tier.type} &middot; {tier.pages}</p>
                <p className="text-2xl font-bold mb-6" style={{ color: tier.color }}>{tier.price}</p>
                <Link
                  href={tier.href}
                  className="block text-center py-2.5 rounded-lg text-sm font-medium border transition-all"
                  style={{ borderColor: tier.color + '40', color: tier.color }}
                >
                  View Demo
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 px-6 relative grain-overlay">
        <div className="hero-glow bg-[#6366f1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to look like<br />
            <span className="gradient-text">you mean business?</span>
          </h2>
          <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
            Tell us about your business. We&apos;ll match you with the right tier, build your site, and get you live. Most projects done in under two weeks.
          </p>
          <a
            href="mailto:terrence@rawswagger.com"
            className="inline-block bg-white text-black px-10 py-4 rounded-full font-semibold text-base hover:bg-white/90 transition-colors"
          >
            Start Your Project &rarr;
          </a>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-bold">Raw<span className="text-[#6366f1]">Swagger</span></p>
            <p className="text-xs text-white/30 mt-1">Web Design Studio</p>
          </div>
          <div className="flex items-center gap-8 text-sm text-white/40">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#process" className="hover:text-white transition-colors">Process</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="mailto:terrence@rawswagger.com" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} RawSwagger. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
