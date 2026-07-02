//icons
import { Send, MessageCircle, Mail, MapPin, Linkedin } from "lucide-react";

//components
import ContactItem from "../ContactItem";
import SectionKicker from "../SectionKicker";

function Contact() {
    return (
        <section id="contact" className="bg-slate-50 py-20 dark:bg-[#0b0f2c]">
            <div className="mx-auto grid max-w-7xl items-center justify-center gap-8 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
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
                        <ContactItem icon={Linkedin} label="LinkedIn" value="linkedin.com/company/codeneacademy" />
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


export default Contact;