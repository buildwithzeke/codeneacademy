function DecorativeGrid({ className = "" }) {
    return (
        <div
            className={`pointer-events-none absolute hidden h-28 w-28 bg-[radial-gradient(circle,currentColor_1.5px,transparent_1.5px)] [background-size:16px_16px] lg:block ${className}`}
        />
    );
}


export default DecorativeGrid;