import { useEffect, useState } from "react";
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Code2,
  FolderKanban,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Rocket,
  Send,
  ShieldCheck,
  Star,
  Sun,
  Users,
  X,
  Youtube,
} from "lucide-react";

const navItems = ["Home", "About", "Mentorship", "Success Stories", "Contact"];

const stats = [
  { value: "100+", label: "Students Mentored", icon: Users },
  { value: "50+", label: "Projects Built", icon: FolderKanban },
  { value: "20+", label: "Career Transitions", icon: Rocket },
  { value: "100%", label: "Practical Learning", icon: Award },
];

const services = [
  {
    title: "Coding Training",
    text: "Learn modern development skills through practical, interactive sessions.",
    icon: Code2,
  },
  {
    title: "One-on-One Mentorship",
    text: "Get personalized guidance, code reviews, and support to grow faster.",
    icon: Users,
  },
  {
    title: "Career Development",
    text: "Build strong portfolios, improve your CV, and prepare for opportunities.",
    icon: BriefcaseBusiness,
  },
];

const stories = [
  {
    name: "Daniel A.",
    role: "Frontend Developer",
    quote:
      "Before Codeneacademy I had no coding experience. Today I build websites confidently and I just got my first job.",
  },
  {
    name: "Blessing O.",
    role: "Web Developer",
    quote:
      "The mentorship and project feedback helped me grow faster than I expected. Highly recommended.",
  },
  {
    name: "Samuel I.",
    role: "Backend Developer",
    quote:
      "I moved from a non-tech background into a fulfilling tech career with clear guidance.",
  },
];

const mentorship = [
  "Learning roadmap",
  "Project reviews",
  "Career guidance",
  "Coding support",
  "Industry insights",
];

const communityPhotos = [
  "Code review session",
  "Student project showcase",
  "Mentorship classroom",
  "Certificate day",
];

const communityIcons = [Code2, Users, GraduationCap, Award];

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <main className="min-h-screen bg-white text-slate-950 antialiased transition-colors duration-300 dark:bg-brand-ink dark:text-white">
      <Header
        darkMode={darkMode}
        menuOpen={menuOpen}
        onMenu={() => setMenuOpen((open) => !open)}
        onTheme={() => setDarkMode((mode) => !mode)}
      />
      <Hero />
      <About />
      <Services />
      <Impact />
      <Stories />
      <Founder />
      <Mentorship />
      <Community />
      <Contact />
      <Footer />
    </main>
  );
}

function Header({ darkMode, menuOpen, onMenu, onTheme }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-brand-ink/[0.88] backdrop-blur-xl dark:bg-brand-ink/[0.86]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="Codene Academy">
          <img
            src="/brand/logo.jpg"
            alt="Codene Academy logo"
            className="h-11 w-11 rounded-2xl object-cover object-left"
          />
          <span className="leading-none text-white">
            <span className="block text-lg font-black">Codene</span>
            <span className="block text-lg font-black">Academy</span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 text-sm font-semibold text-white lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
              className="transition hover:text-brand-amber"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onTheme}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition hover:border-brand-amber hover:text-brand-amber"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <a
            href="#contact"
            className="hidden rounded-lg bg-gradient-to-r from-brand-orange to-brand-purple px-5 py-3 text-sm font-extrabold text-white shadow-glow transition hover:scale-[1.02] lg:inline-flex"
          >
            Book a Session
          </a>
          <button
            type="button"
            onClick={onMenu}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-brand-ink px-5 py-5 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-4 text-sm font-bold text-white">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                onClick={onMenu}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-brand-ink pt-28 text-white"
    >
      <DecorativeGrid className="right-0 top-16 text-brand-orange/35" />
      <div className="absolute inset-0 -z-10 bg-brand-radial" />
      <div className="absolute bottom-0 left-0 right-0 -z-10 h-40 bg-gradient-to-t from-brand-ink to-transparent" />

      <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-5 pb-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="max-w-2xl">
          <SectionKicker dark>From Beginner To Developer</SectionKicker>
          <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">
            Learn Coding. Build Real Projects. Launch Your{" "}
            <span className="text-brand-orange">Tech Career.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
            At Codeneacademy, aspiring developers gain practical skills through
            mentorship, project-based learning, and career guidance.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="#contact" icon={CalendarDays}>
              Book a Mentorship Call
            </Button>
            <Button href="https://wa.me/2348100196214" icon={MessageCircle} variant="ghost">
              Chat on WhatsApp
            </Button>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-tr from-brand-purple/20 via-transparent to-brand-orange/20 blur-2xl" />
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-glow">
        <div className="grid gap-5 lg:grid-cols-[0.7fr_1fr]">
          <div className="space-y-5">
            <FloatingTech icon={Code2} label="HTML" />
            <FloatingTech icon={ShieldCheck} label="Mentor" tone="orange" />
            <FloatingTech icon={GraduationCap} label="JS" />
          </div>
          <div className="rounded-2xl border border-white/15 bg-slate-950 p-4 shadow-2xl">
            <div className="mb-4 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <pre className="overflow-hidden text-[11px] leading-6 text-slate-300 sm:text-xs">
              <code>{`const journey = {
  student: "beginner",
  roadmap: ["HTML", "CSS", "JavaScript"],
  mentor: "Codene Academy",
  build(project) {
    return project.launchCareer();
  }
};`}</code>
            </pre>
          </div>
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-[1fr_0.7fr]">
          <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
            <div className="h-28 rounded-xl bg-gradient-to-br from-brand-purple via-brand-navy to-brand-orange p-4">
              <div className="h-full rounded-lg border border-white/15 bg-brand-ink/70 p-3">
                <div className="mb-3 h-2 w-2/3 rounded bg-brand-orange" />
                <div className="mb-2 h-2 w-4/5 rounded bg-white/60" />
                <div className="mb-2 h-2 w-3/5 rounded bg-brand-purple" />
                <div className="h-2 w-5/6 rounded bg-white/50" />
              </div>
            </div>
          </div>
          <div className="grid place-items-center rounded-2xl border border-white/10 bg-white/[0.05] p-5">
            <img
              src="/brand/logo.jpg"
              alt="Codene Academy symbol"
              className="h-28 w-28 rounded-3xl object-cover object-left shadow-glow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative bg-white py-20 dark:bg-brand-ink">
      <DecorativeGrid className="left-0 top-10 text-brand-purple/30" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionKicker>Who We Are</SectionKicker>
          <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            About <span className="text-brand-orange">Codeneacademy</span>
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-slate-700 dark:text-white/[0.76]">
            <p>
              Codeneacademy is a practical coding mentorship platform dedicated
              to helping students, graduates, and professionals transition into tech.
            </p>
            <p>
              We focus on real-world skills, hands-on projects, and personalized
              guidance that prepares learners for today&apos;s technology industry.
            </p>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
          <div className="overflow-hidden rounded-2xl bg-slate-100 shadow-soft dark:bg-white/[0.08]">
            <div className="grid min-h-80 place-items-center bg-gradient-to-br from-slate-200 via-white to-orange-100 p-8 dark:from-brand-navy dark:via-brand-ink dark:to-brand-purple/40">
              <FounderAvatar large />
            </div>
          </div>
          <blockquote className="rounded-2xl bg-slate-50 p-8 shadow-soft dark:bg-white/[0.08]">
            <span className="text-6xl font-black leading-none text-brand-orange">&ldquo;</span>
            <p className="mt-2 leading-7 text-slate-700 dark:text-white/[0.78]">
              Our mission is simple: empower people with skills, confidence, and
              support to build a successful career in tech.
            </p>
            <cite className="mt-6 block not-italic">
              <span className="font-black">Ezekiel Ayebidun</span>
              <span className="block text-sm text-slate-500 dark:text-white/[0.55]">
                Founder, Codeneacademy
              </span>
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="mentorship" className="bg-slate-50 py-16 dark:bg-[#0b0f2c]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionKicker>What We Do</SectionKicker>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {services.map(({ title, text, icon: Icon }, index) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-white/[0.07]"
            >
              <IconBadge icon={Icon} warm={index === 1} />
              <h3 className="mt-5 text-xl font-black">{title}</h3>
              <p className="mt-2 leading-7 text-slate-600 dark:text-white/70">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section className="bg-brand-ink py-12 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionKicker dark>Our Impact</SectionKicker>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, label, icon: Icon }, index) => (
            <div
              key={label}
              className="flex items-center gap-4 border-white/10 bg-white/[0.04] p-5 sm:rounded-2xl sm:border"
            >
              <IconBadge icon={Icon} warm={index % 2 === 0} compact />
              <div>
                <div className="text-3xl font-black">{value}</div>
                <div className="text-sm text-white/[0.72]">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stories() {
  return (
    <section id="success-stories" className="bg-white py-20 dark:bg-brand-ink">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionKicker>Success Stories</SectionKicker>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {stories.map((story, index) => (
            <article
              key={story.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-white/[0.07]"
            >
              <div className="flex items-center gap-4">
                <FounderAvatar initials={story.name.slice(0, 1)} tone={index} />
                <div>
                  <h3 className="font-black">{story.role}</h3>
                  <div className="mt-1 flex text-brand-orange">
                    {Array.from({ length: 5 }).map((_, star) => (
                      <Star key={star} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-5 leading-7 text-slate-700 dark:text-white/[0.76]">
                &ldquo;{story.quote}&rdquo;
              </p>
              <p className="mt-4 font-black">- {story.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-[#0b0f2c]">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-[1.25fr_0.95fr] lg:px-8">
        <article className="overflow-hidden rounded-3xl bg-brand-ink text-white shadow-glow">
          <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[0.75fr_1fr]">
            <div className="grid min-h-72 place-items-center rounded-2xl bg-gradient-to-br from-brand-purple/40 to-brand-orange/30">
              <FounderAvatar large />
            </div>
            <div className="self-center">
              <SectionKicker dark>Meet The Founder</SectionKicker>
              <h2 className="mt-4 text-4xl font-black">Ezekiel Ayebidun</h2>
              <p className="mt-2 text-lg font-bold text-brand-violet">
                Software Engineer & Programming Mentor
              </p>
              <p className="mt-5 leading-8 text-white/[0.76]">
                My mission is to help aspiring developers gain practical skills,
                build confidence, and create opportunities through technology.
                I believe anyone can learn to code with the right guidance and support.
              </p>
            </div>
          </div>
        </article>
        <article className="rounded-3xl bg-white p-8 shadow-soft dark:bg-white/[0.07]">
          <SectionKicker>Ready To Start?</SectionKicker>
          <p className="mt-4 leading-7 text-slate-700 dark:text-white/[0.76]">
            Book a mentorship session and receive personalized guidance on your
            learning journey.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {mentorship.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-bold">
                <CheckCircle2 size={18} className="text-brand-purple" />
                {item}
              </div>
            ))}
          </div>
          <Button href="#contact" icon={ArrowRight} className="mt-7">
            Book Mentorship
          </Button>
        </article>
      </div>
    </section>
  );
}

function Mentorship() {
  return (
    <section className="bg-brand-ink py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1fr] lg:px-8">
        <div>
          <SectionKicker dark>Mentorship Program</SectionKicker>
          <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            Personalized Guidance. Real Results.
          </h2>
          <p className="mt-5 leading-8 text-white/[0.76]">
            A focused program designed to help you learn, build, and grow with
            confidence at every stage.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:flex-col">
            <Button href="#contact" icon={CalendarDays}>
              Book a Mentorship Call
            </Button>
            <Button href="https://wa.me/2348100196214" icon={MessageCircle} variant="ghost">
              Chat on WhatsApp
            </Button>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {mentorship.map((item, index) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.05] p-6"
            >
              <IconBadge icon={[FolderKanban, Award, BriefcaseBusiness, ShieldCheck, Code2][index]} compact />
              <h3 className="mt-5 font-black">{item}</h3>
              <p className="mt-2 text-sm leading-6 text-white/[0.68]">
                {programText(item)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section className="bg-white py-16 dark:bg-brand-ink">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionKicker>Our Community & Activities</SectionKicker>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {communityPhotos.map((label, index) => {
            const Icon = communityIcons[index];

            return (
            <div
              key={label}
              className="min-h-44 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-soft dark:border-white/10 dark:bg-white/[0.07]"
            >
              <div className="flex h-full min-h-44 flex-col justify-end bg-gradient-to-br from-brand-ink via-brand-purple to-brand-orange p-5 text-white">
                <div className="mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-white/[0.14]">
                  <Icon size={30} />
                </div>
                <p className="font-black">{label}</p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-slate-50 py-20 dark:bg-[#0b0f2c]">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-soft dark:bg-white/[0.07]">
          <SectionKicker>Get In Touch</SectionKicker>
          <h2 className="mt-4 text-4xl font-black leading-tight">
            Let&apos;s Connect and Build Your{" "}
            <span className="text-brand-orange">Tech Future</span>
          </h2>
          <div className="mt-8 grid gap-5">
            <ContactItem icon={MessageCircle} label="WhatsApp" value="08100196214" />
            <ContactItem icon={Mail} label="Email" value="codeneacademy@gmail.com" />
            <ContactItem icon={MapPin} label="Location" value="Lagos, Nigeria" />
            <ContactItem icon={Linkedin} label="LinkedIn" value="linkedin.com/in/ezekiel-ayebidun" />
          </div>
        </div>
        <form className="rounded-3xl bg-white p-6 shadow-soft dark:bg-white/[0.07] sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="field" placeholder="Your Name" />
            <input className="field" placeholder="Email Address" type="email" />
          </div>
          <input className="field mt-4" placeholder="Phone Number" />
          <textarea className="field mt-4 min-h-40 resize-y" placeholder="Your Message" />
          <button
            type="button"
            className="mt-4 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-brand-orange to-brand-purple px-6 py-4 font-black text-white shadow-glow transition hover:scale-[1.01]"
          >
            Send Message <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-ink py-10 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/brand/logo.jpg"
              alt="Codene Academy logo"
              className="h-12 w-12 rounded-2xl object-cover object-left"
            />
            <div className="text-lg font-black leading-none">
              <span className="block">Codene</span>
              <span className="block">Academy</span>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/[0.62]">Code. Learn. Build. Succeed.</p>
        </div>
        <div>
          <h3 className="font-black uppercase text-brand-orange">Quick Links</h3>
          <div className="mt-4 grid gap-2 text-sm text-white/[0.68]">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`}>
                {item}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-black uppercase text-brand-orange">Follow Us</h3>
          <div className="mt-4 flex gap-3">
            <Social icon={MessageCircle} label="WhatsApp" />
            <Social icon={Linkedin} label="LinkedIn" />
            <Social icon={Github} label="GitHub" />
            <Social icon={Youtube} label="YouTube" />
          </div>
          <p className="mt-6 text-sm text-white/[0.55]">
            Designed with care for future developers.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SectionKicker({ children, dark = false }) {
  return (
    <div
      className={`flex items-center gap-3 text-xs font-black uppercase tracking-normal ${
        dark ? "text-brand-amber" : "text-brand-orange"
      }`}
    >
      <span className="h-0.5 w-9 rounded-full bg-current" />
      {children}
    </div>
  );
}

function Button({ href, icon: Icon, children, variant = "solid", className = "" }) {
  const classes =
    variant === "ghost"
      ? "border border-brand-violet bg-transparent text-white hover:bg-white/10"
      : "bg-gradient-to-r from-brand-orange to-brand-purple text-white shadow-glow";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-3 rounded-lg px-6 py-4 text-sm font-black transition hover:scale-[1.02] ${classes} ${className}`}
    >
      <Icon size={19} />
      {children}
    </a>
  );
}

function IconBadge({ icon: Icon, warm = false, compact = false }) {
  return (
    <span
      className={`grid place-items-center rounded-2xl text-white shadow-glow ${
        compact ? "h-14 w-14 min-h-14 min-w-14" : "h-16 w-16"
      } ${
        warm
          ? "bg-gradient-to-br from-brand-orange to-brand-purple"
          : "bg-gradient-to-br from-brand-purple to-brand-ink"
      }`}
    >
      <Icon size={compact ? 24 : 30} />
    </span>
  );
}

function FloatingTech({ icon: Icon, label, tone = "purple" }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border border-white/10 p-4 shadow-glow ${
        tone === "orange"
          ? "bg-gradient-to-br from-brand-orange/90 to-brand-amber/90"
          : "bg-gradient-to-br from-brand-purple/90 to-brand-navy/90"
      }`}
    >
      <Icon size={28} />
      <span className="font-black">{label}</span>
    </div>
  );
}

function FounderAvatar({ large = false, initials = "EA", tone = 0 }) {
  const tones = [
    "from-brand-orange to-brand-purple",
    "from-emerald-500 to-brand-purple",
    "from-sky-500 to-brand-orange",
  ];

  return (
    <div
      className={`relative grid place-items-center overflow-hidden rounded-full bg-gradient-to-br ${
        tones[tone] || tones[0]
      } ${large ? "h-56 w-56" : "h-20 w-20"}`}
    >
      <div className="absolute inset-2 rounded-full bg-brand-ink/90" />
      <div
        className={`relative grid place-items-center rounded-full bg-white text-brand-ink ${
          large ? "h-40 w-40 text-5xl" : "h-14 w-14 text-lg"
        } font-black`}
      >
        {initials}
      </div>
    </div>
  );
}

function ContactItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-4">
      <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-orange to-brand-purple text-white">
        <Icon size={20} />
      </span>
      <div>
        <div className="text-sm text-slate-500 dark:text-white/[0.55]">{label}</div>
        <div className="font-black">{value}</div>
      </div>
    </div>
  );
}

function Social({ icon: Icon, label }) {
  return (
    <a
      href="#contact"
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-brand-orange"
    >
      <Icon size={20} />
    </a>
  );
}

function DecorativeGrid({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute hidden h-28 w-28 bg-[radial-gradient(circle,currentColor_1.5px,transparent_1.5px)] [background-size:16px_16px] lg:block ${className}`}
    />
  );
}

function programText(item) {
  const copy = {
    "Learning roadmap": "Create a clear path based on your current skill level and goals.",
    "Project reviews": "Get detailed feedback on your projects and improve faster.",
    "Career guidance": "Receive advice on jobs, freelancing, interviews, and portfolio positioning.",
    "Coding support": "Get help when you are stuck and move forward with confidence.",
    "Industry insights": "Learn the best practices teams expect from modern developers.",
  };

  return copy[item];
}

export default App;
