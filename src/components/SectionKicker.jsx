function SectionKicker({ children, dark = true }) {
    return (
        <div
            className={`flex items-center gap-3 text-xs font-black uppercase tracking-normal ${dark ? "text-brand-amber" : "text-brand-orange"
                }`}
        >
            <span className="h-0.5 w-9 rounded-full bg-current" />
            {children}
        </div>
    );
}

export default SectionKicker;