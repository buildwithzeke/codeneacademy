

//Icons
import { Code2, Users, GraduationCap, Award } from "lucide-react";

//components
import SectionKicker from "../SectionKicker";

//data
import { communityPhotos } from "../../CONSTANT";

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

export default Community;