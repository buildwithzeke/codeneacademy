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


export default Social;