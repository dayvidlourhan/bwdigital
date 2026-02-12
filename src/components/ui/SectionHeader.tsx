interface SectionHeaderProps {
    title: string;
    highlight: string;
    subtitle: string;
    className?: string;
}

const SectionHeader = ({ title, highlight, subtitle, className = '' }: SectionHeaderProps) => {
    return (
        <div className={`text-center mb-16 animate-fade-in-up ${className}`}>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase tracking-tighter">
                {title} <span className="text-[#FF5500]">{highlight}</span>
            </h2>
            <p className="text-gray-400 font-sans text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
                {subtitle}
            </p>
        </div>
    );
};

export default SectionHeader;
