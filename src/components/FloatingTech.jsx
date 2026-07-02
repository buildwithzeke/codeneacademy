function FloatingTech({ icon: Icon, label, tone = "purple" }) {
    return (
        <div
            className={`flex items-center gap-3 rounded-2xl border border-white/10 p-4 shadow-glow ${tone === "orange"
                ? "bg-gradient-to-br from-brand-orange/90 to-brand-amber/90"
                : "bg-gradient-to-br from-brand-purple/90 to-brand-navy/90"
                }`}
        >
            <Icon size={28} />
            <span className="font-black">{label}</span>
        </div>
    );
}


export default FloatingTech;