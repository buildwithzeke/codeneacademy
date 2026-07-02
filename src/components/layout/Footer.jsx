//icons
import { MessageCircle, Linkedin, Github, Youtube } from "lucide-react";

//data
import { navItems } from "../../CONSTANT";

//components
import Social from "../Social";


export default function Footer() {
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