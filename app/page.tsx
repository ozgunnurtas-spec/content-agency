"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="mx-auto w-full max-w-6xl px-5 sm:px-8 py-16 sm:py-24"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-20% 0px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="space-y-6"
      >
        {(eyebrow || title) && (
          <header className="space-y-3">
            {eyebrow ? (
              <p className="text-xs tracking-[0.24em] uppercase text-gray-500">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] text-white">
                {title}
              </h2>
            ) : null}
          </header>
        )}
        <div>{children}</div>
      </motion.div>
    </section>
  );
}

function Nav() {
  const items = [
    { label: "Leistungen", href: "#leistungen" },
    { label: "Warum wir?", href: "#warum" },
    { label: "Referenzen", href: "#referenzen" },
    { label: "Für wen?", href: "#zielgruppe" },
  ];

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="pointer-events-auto mt-4 rounded-2xl border border-blue-900/70 bg-blue-950/70 backdrop-blur-xl shadow-[0_10px_30px_-20px_rgba(0,0,0,0.35)]">
          <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3">
            <a
              href="#top"
              className="text-sm tracking-[-0.01em] text-white font-semibold"
            >
              Content Agency Bremen
            </a>

            <nav className="hidden md:flex items-center gap-5 text-sm text-blue-300">
              {items.map((it) => (
                <a
                  key={it.href}
                  href={it.href}
                  className="hover:text-white transition-colors"
                >
                  {it.label}
                </a>
              ))}
            </nav>

            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm text-white hover:opacity-80 transition-all"
              style={{ backgroundColor: 'var(--beige-btn)' }}
            >
              Anfragen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (agreed && formData.name && formData.email && formData.message) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setAgreed(false);
        setSubmitted(false);
      }, 2000);
    }
  };

  return (
    <section id="kontakt" className="border-t border-gray-700">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 py-16 sm:py-24">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16">Kontakt</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Formular */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name*</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Dein Name"
                  className="w-full px-4 py-3 border border-blue-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 bg-blue-950 text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">E-Mail*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="deine@email.de"
                  className="w-full px-4 py-3 border border-blue-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 bg-blue-950 text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Betreff</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Worum geht es?"
                  className="w-full px-4 py-3 border border-blue-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 bg-blue-950 text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Nachricht*</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Deine Nachricht..."
                  rows={5}
                  className="w-full px-4 py-3 border border-blue-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 resize-none bg-blue-950 text-white"
                  required
                />
                <p className="text-xs text-gray-400 mt-2">0 / 4000 characters</p>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agreed"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 w-4 h-4 cursor-pointer"
                  required
                />
                <label htmlFor="agreed" className="text-sm text-gray-300 cursor-pointer">
                  Ich willige ein, dass diese Website meine Informationen speichert, sodass meine Anfrage beantwortet werden kann.
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 text-sm font-medium text-white rounded-lg hover:opacity-80 transition-all"
                style={{ backgroundColor: 'var(--beige-btn)' }}
              >
                {submitted ? "✓ Gesendet!" : "Senden"}
              </button>
            </form>
          </motion.div>

          {/* Kontaktinfos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-xl font-bold mb-4">Geschäftszeiten</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Mo – Fr</p>
                  <p className="text-blue-300">09:00 – 18:00 Uhr</p>
                </div>
                <div>
                  <p className="font-medium">Sa – So</p>
                  <p className="text-blue-300">Nur nach Absprache</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Direktkontakt</h3>
              <div className="space-y-3 text-sm text-blue-300">
                <p>
                  <a href="mailto:kontakt@contentbremem.de" className="font-medium hover:text-white">
                    kontakt@contentbremem.de
                  </a>
                </p>
                <p>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="font-medium hover:text-white">
                    Instagram: @contentbremem
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-blue-950 p-6 rounded-lg border border-blue-900">
              <p className="text-sm text-blue-200">
                <span className="font-medium">Hinweis:</span> Angebote und Konsultationen sind kostenlos. Wir kontaktieren dich innerhalb von 24 Stunden.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main id="top" className="min-h-screen bg-[var(--offwhite)] text-white">
      <Nav />

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pb-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Logo Seite */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <img
                src="https://drive.google.com/file/d/1Oi_k1GHxhPlUwOPGjcBbddBnPI8Tx4Hz/view?usp=sharing"
                alt="Content Agency Logo"
                className="w-full h-auto object-contain"
                style={{ filter: 'invert(1)' }}
              />
            </motion.div>

            {/* Text Seite */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                Wir machen Bremer Marken sichtbar.
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10">
                Content Creation & Social Media Management für lokale Unternehmen in Bremen.
              </p>

              <a
                href="#kontakt"
                className="inline-flex items-center justify-center lg:justify-start rounded-lg px-8 py-4 text-sm font-medium text-white hover:opacity-80 transition-all"
                style={{ backgroundColor: 'var(--beige-btn)' }}
              >
                Kostenloses Erstgespräch
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <Section id="leistungen" title="Unsere Leistungen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Content Produktion", desc: "Professionelle Foto- und Videoproduktion für deine Social Media Kanäle." },
            { title: "Social Media Betreuung", desc: "Tägliche Verwaltung, Community Management und Engagement für deine Profile." },
            { title: "Strategie & Wachstum", desc: "Datengestützte Strategien für organisches Wachstum und bessere Reichweite." },
            { title: "Branding", desc: "Konsistente visuelle Identität und Positioning für deine Marke." },
          ].map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-lg border border-blue-900 bg-blue-950 p-6"
            >
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-blue-300 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* WARUM WIR */}
      <Section id="warum" title="Warum wir?">
        <div className="max-w-3xl">
          <div className="space-y-6 text-lg text-blue-300 leading-relaxed">
            <p>
              Wir verstehen die Herausforderungen lokaler Unternehmen. Mit gezieltem Content und durchdachter Social-Media-Strategie helfen wir dir, deine Zielgruppe zu erreichen und echte Kundenbindung aufzubauen.
            </p>
            <p>
              Clarity, creativity, results – das ist unserer Ansatz. Keine verspielten Trends, sondern authentische Inhalte, die funktionieren.
            </p>
          </div>
        </div>
      </Section>

      {/* REFERENZEN */}
      <Section id="referenzen" title="Unsere Arbeiten">
        <div className="space-y-8">
          <p className="text-lg text-blue-300 leading-relaxed max-w-3xl">
            Schau dir unsere bisherigen Projekte an. Videos von Instagram-Content bis zu professionellen Productions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                url: "https://www.youtube.com/shorts/Y-yH5LqUUjw",
                title: "Golden Buns – Instagram Content"
              },
              {
                url: "https://www.youtube.com/shorts/pTmu39tVOhY",
                title: "Churros Bremen by Bellissima – Instagram Content"
              },
              {
                url: "https://www.youtube.com/shorts/GtwSPCRcU7U",
                title: "Hundetrainingszentrum Bremen – Professionelle Instagram Produktion"
              }
            ].map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-lg overflow-hidden border border-zinc-200 bg-black"
              >
                <video 
                  width="100%" 
                  height="300"
                  controls 
                  className="w-full"
                >
                  <source src={video.url} type="video/mp4" />
                  Dein Browser unterstützt Video nicht.
                </video>
                <div className="p-4">
                  <p className="text-sm font-medium text-white">{video.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CLIENTS / LOGOS */}
      <section className="bg-gradient-to-b from-zinc-900 to-zinc-800 py-16 sm:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Vertraut auf uns
            </h2>
            <p className="text-zinc-300 text-lg">
              Namhafte Unternehmen arbeiten mit uns zusammen
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-center">
            {[
              {
                url: "https://hundetrainingszentrum-bremen.de/wp-content/uploads/2024/09/hundetrainingszentrum-bremen.de-logo.png",
                alt: "Hundetrainingszentrum Bremen"
              },
              {
                url: "https://cdn.prod.website-files.com/66ee82817d06ad2a411df232/67f4290dad1d23f5dbbf42bb_Digitallagune-Filmlagune-white-blue-p-500.webp",
                alt: "Digitallagune Filmlagune"
              },
              {
                url: "https://goldenbuns.de/media/940ec0a3-206d-11f0-91e2-5254004415b5/911f62fe-8f2e-41e2-9334-3d25087be203.png/0x480.webp",
                alt: "Golden Buns"
              }
            ].map((client, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center justify-center p-6 bg-zinc-700/30 rounded-lg hover:bg-zinc-700/50 transition-colors"
              >
                <img
                  src={client.url}
                  alt={client.alt}
                  className="max-h-32 w-auto object-contain filter brightness-90 hover:brightness-100 transition-all"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FÜR WEN */}
      <Section id="zielgruppe" title="Für wen?">
        <div className="space-y-8">
          <p className="text-lg text-blue-300 leading-relaxed max-w-3xl">
            Wir arbeiten mit lokalen Unternehmen in Bremen, die ihre Online-Präsenz professionalisieren möchten:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {["Restaurants & Cafés", "Barbershops & Salons", "Fitness Studios", "Retail & Shops", "Beauty Services", "Lokale Brands"].map((target) => (
              <div key={target} className="rounded-lg border border-blue-900 bg-blue-950 p-4">
                <p className="text-sm font-medium text-blue-200">{target}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* KONTAKT FORMULAR */}
      <ContactForm />

      {/* FOOTER */}
      <footer className="border-t border-zinc-200">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 py-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="space-y-2">
              <p className="text-zinc-950 font-semibold">
                Content Agency Bremen
              </p>
              <p className="text-sm text-zinc-600">
                Content Creation • Social Media • Strategie
              </p>
            </div>

            <div className="text-sm text-zinc-600 space-y-2">
              <p>
                Kontakt:{" "}
                <a
                  className="underline underline-offset-4 hover:text-zinc-950"
                  href="mailto:kontakt@contentbremem.de"
                >
                  kontakt@contentbremem.de
                </a>
              </p>
              <p>
                Instagram:{" "}
                <a
                  className="underline underline-offset-4 hover:text-zinc-950"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  @contentbremem
                </a>
              </p>
            </div>
          </div>

          <p className="mt-10 text-xs text-zinc-500">
            © {new Date().getFullYear()} Content Agency Bremen
          </p>
        </div>
      </footer>
    </main>
  );
}