



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
                        const Icon = [Code2, Users, GraduationCap, Award][index];

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





function IconBadge({ icon: Icon, warm = false, compact = false }) {
    return (
        <span
            className={`grid place-items-center rounded-2xl text-white shadow-glow ${compact ? "h-14 w-14 min-h-14 min-w-14" : "h-16 w-16"
                } ${warm
                    ? "bg-gradient-to-br from-brand-orange to-brand-purple"
                    : "bg-gradient-to-br from-brand-purple to-brand-ink"
                }`}
        >
            <Icon size={compact ? 24 : 30} />
        </span>
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
            className={`relative grid place-items-center overflow-hidden rounded-full bg-gradient-to-br ${tones[tone] || tones[0]
                } ${large ? "h-56 w-56" : "h-20 w-20"}`}
        >
            <div className="absolute inset-2 rounded-full bg-brand-ink/90" />
            <div
                className={`relative grid place-items-center rounded-full bg-white text-brand-ink ${large ? "h-40 w-40 text-5xl" : "h-14 w-14 text-lg"
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




{/* <Hero /> */ }
{/* <About />
      <Services />
      <Impact />
      <Stories />
      <Founder />
      <Mentorship />
      <Community /> */}
{/* <Contact /> */ }





