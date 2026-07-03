//icons
import { CalendarDays, MessageCircle } from "lucide-react";

//components
import Button from "../ui/Button";
import HeroVisual from "../HeroVisual"
import SectionKicker from "../SectionKicker";
import DecorativeGrid from "../DecorativeGrid";


// bg-brand-ink
export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-28 text-white"
    >
      <DecorativeGrid className="right-0 top-16 text-brand-orange/35" />
      <div className="absolute inset-0 -z-10 bg-brand-radial" />
      <div className="absolute bottom-0 left-0 right-0 -z-10 h-40 bg-gradient-to-t from-brand-ink to-transparent" />

      <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-5 pb-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="max-w-2xl">
          <SectionKicker dark>From Beginner To Developer</SectionKicker>
          <h1 className="mt-5 text-4xl font-black leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl text-black dark:text-white">
            Learn Coding. Build Real Projects. Launch Your{" "}
            <span className="text-brand-orange">Tech Career.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-black dark:text-white/80">
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