import { createFileRoute } from "@tanstack/react-router";
import { Mail, Linkedin, Download, Calendar, ArrowDown, FileText, ClipboardList, BarChart3 } from "lucide-react";
import heroPhoto from "@/assets/yash-hero.png";
import aboutPhoto from "@/assets/yash-about.png";
import kkLogo from "@/assets/kk-create.png";
import wapLogo from "@/assets/what-a-playerr.png";
import { WorkSection } from "@/components/portfolio/WorkSection";
import { FadeIn } from "@/components/portfolio/FadeIn";
import {
  kkInstagram, kkYoutube, kkCategories,
  wapInstagram, wapYoutube, wapCategories,
  skills, testimonials, milestones,
} from "@/components/portfolio/data";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Yash — Short-Form Content Producer" },
      { name: "description", content: "Short-form content producer with 3 years of building audiences, breaking down complex topics, and leading end-to-end production." },
      { property: "og:title", content: "Yash — Short-Form Content Producer" },
      { property: "og:description", content: "1.6M+ followers grown. 1.5M+ avg. views per reel. 750K+ YouTube subscribers built." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 glass border-b border-hairline">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="text-lg font-bold tracking-tight">Yash</a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#" aria-label="Email" className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors">
            <Mail size={18} />
          </a>
          <a href="#" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="#" className="ml-2 hidden sm:inline-flex items-center gap-2 text-xs font-medium bg-accent-blue text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
            <Download size={14} /> Resume
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="flex justify-center">
          <div className="p-[6px] rounded-full ring-2 ring-accent-blue">
            <img src={heroPhoto} alt="Yash" className="h-[120px] w-[120px] rounded-full object-cover" />
          </div>
        </div>
        <h1 className="mt-8 text-5xl sm:text-7xl font-bold tracking-tight">Yash</h1>
        <p className="mt-6 text-2xl sm:text-4xl font-semibold tracking-tight text-foreground/90">
          Short-Form Content Producer
        </p>
        <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          3 years of building audiences, breaking down complex topics, and leading end-to-end production.
        </p>

        <div className="mt-12 grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { num: "1.6M+", label: "Followers Grown" },
            { num: "1.5M+", label: "Avg. Views Per Reel" },
            { num: "750K+", label: "YouTube Subscribers Built" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl sm:text-4xl font-semibold tracking-tight">{s.num}</div>
              <div className="mt-2 text-xs sm:text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <span className="inline-flex items-center text-xs px-4 py-1.5 rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/30">
            Open to: Freelance · Full-Time · Collaborations
          </span>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="#work" className="inline-flex items-center gap-2 bg-accent-blue text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
            See My Work <ArrowDown size={16} />
          </a>
          <a href="#" className="inline-flex items-center gap-2 border border-hairline px-6 py-3 rounded-full text-sm font-medium text-foreground hover:bg-white/5 transition-colors">
            <Calendar size={16} /> Book a 10-min Call
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="h-px bg-hairline" />
        <FadeIn className="py-16 sm:py-24">
          <div className="grid md:grid-cols-5 gap-10 md:gap-14 items-center">
            <div className="md:col-span-2">
              <img
                src={aboutPhoto}
                alt="Yash"
                className="w-full md:w-[280px] md:h-[320px] object-cover rounded-2xl"
              />
            </div>
            <div className="md:col-span-3">
              <p className="text-[11px] uppercase tracking-[0.2em] text-accent-blue">About Me</p>
              <p className="mt-6 text-[22px] sm:text-[24px] font-light leading-[1.8] text-foreground/90">
                I&apos;m Yash, a short-form content producer with 3 years of experience. I started as a Researcher and Writer and grew into leading full Instagram pages end-to-end — from ideation and scripting to editor coordination and performance tracking. I specialise in breaking down complex topics — historical, geopolitical, geographical, myth-busting — into simple, engaging scripts that move fast and hit hard.{" "}
                <em className="not-italic text-accent-blue text-[24px] sm:text-[26px]">Trends are basically my thing.</em>
              </p>
            </div>
          </div>
        </FadeIn>
        <div className="h-px bg-hairline" />
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-[11px] uppercase tracking-[0.2em] text-accent-blue">The Journey</p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">Growth, in milestones.</h2>

        <div className="mt-14 relative">
          <div className="hidden md:block absolute left-0 right-0 top-3 h-px bg-accent-blue/30" />
          <div className="grid md:grid-cols-6 gap-10 md:gap-4">
            {milestones.map((m, i) => (
              <div key={i} className="relative md:pt-10">
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1 h-5 w-5 rounded-full bg-accent-blue ring-4 ring-background" />
                <div className="md:text-center">
                  <div className="text-lg sm:text-xl font-semibold tracking-tight">{m.stat}</div>
                  <div className="mt-2 text-xs text-muted-foreground leading-relaxed">{m.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkSamples() {
  const samples = [
    { icon: FileText, title: "Sample Script", desc: "A short-form script breaking down a complex topic." },
    { icon: ClipboardList, title: "SOP Document", desc: "Operating playbook for running a content page." },
    { icon: BarChart3, title: "Performance Report", desc: "Weekly reel performance analysis & insights." },
  ];
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-2xl font-semibold tracking-tight">Work Samples</h3>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {samples.map((s) => (
            <div key={s.title} className="rounded-2xl border border-hairline p-6 bg-white/[0.02]">
              <s.icon className="text-accent-blue" size={22} />
              <div className="mt-4 text-lg font-medium">{s.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <a href="#" className="mt-5 inline-flex items-center gap-2 text-sm text-accent-blue hover:opacity-80">
                View / Download →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-[11px] uppercase tracking-[0.2em] text-accent-blue">Skills</p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">What I Bring</h2>
        <div className="mt-12 grid sm:grid-cols-2 gap-10">
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat}>
              <div className="text-sm text-muted-foreground">{cat}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="text-xs px-3 py-1.5 rounded-full border border-hairline bg-white/[0.02]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-[11px] uppercase tracking-[0.2em] text-accent-blue">Testimonials</p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">What People Say</h2>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl border border-hairline p-8 bg-white/[0.02]">
              <p className="text-lg leading-relaxed text-foreground/90">“{t.quote}”</p>
              <div className="mt-6">
                <div className="text-sm font-medium">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-[11px] uppercase tracking-[0.2em] text-accent-blue">Contact</p>
        <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">Let&apos;s Talk</h2>
        <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
          Open to collaborations, freelance projects, and full-time opportunities.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="#" className="inline-flex items-center gap-2 bg-accent-blue text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
            <Mail size={16} /> Email Me
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-hairline px-6 py-3 rounded-full text-sm font-medium hover:bg-white/5 transition-colors">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href="#" className="inline-flex items-center gap-2 border border-hairline px-6 py-3 rounded-full text-sm font-medium hover:bg-white/5 transition-colors">
            <Calendar size={16} /> Book a Call
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">© 2025 Yash. All rights reserved.</p>
        <div className="flex items-center gap-2">
          <a href="#" aria-label="Email" className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"><Mail size={16} /></a>
          <a href="#" aria-label="LinkedIn" className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"><Linkedin size={16} /></a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Timeline />
        <section id="work" className="pt-10">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-[11px] uppercase tracking-[0.2em] text-accent-blue">Work</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">Pages I&apos;ve led.</h2>

            <WorkSection
              logo={kkLogo}
              title="KK Create"
              subtitle="Instagram Lead & Content Strategist"
              description="Led the page end-to-end: ideation, scripting, editor coordination, performance tracking. Scaled from 350K to 1.6M followers and built the YouTube channel to 750K subscribers."
              categories={kkCategories}
              instagram={kkInstagram}
              youtube={kkYoutube}
              youtubeSubs="750K"
            />

            <div className="h-px bg-hairline" />

            <WorkSection
              logo={wapLogo}
              title="What A Playerr"
              subtitle="Sports Page Lead — Built from Zero"
              description="Built a sports content page from scratch — strategy, scripting, and on-ground direction across Instagram and YouTube."
              categories={wapCategories}
              instagram={wapInstagram}
              youtube={wapYoutube}
              youtubeSubs="16.5K"
              stats={[
                { label: "Instagram", value: "30.5K" },
                { label: "YouTube", value: "16.5K" },
                { label: "Built in", value: "3 months" },
              ]}
            />
          </div>

          <WorkSamples />
        </section>
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
