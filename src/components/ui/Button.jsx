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

export default Button;