function Social({ icon: Icon, label, target }) {
    return (
        <a
            href={target}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-brand-orange"
        >
            <Icon size={20} />
        </a>
    );
}


export default Social;