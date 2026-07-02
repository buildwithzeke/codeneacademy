//components
import SectionKicker from "../SectionKicker";
import DecorativeGrid from "../DecorativeGrid";

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
                            {/* <FounderAvatar large /> */}
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

export default About;