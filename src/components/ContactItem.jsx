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


export default ContactItem;