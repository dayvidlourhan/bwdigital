import type { LucideIcon } from 'lucide-react';

interface FeatureItemProps {
    icon: LucideIcon;
    title: string;
    sub: string;
    className?: string;
}

const FeatureItem = ({ icon: Icon, title, sub, className = '' }: FeatureItemProps) => {
    return (
        <div className={`flex gap-5 group ${className}`}>
            <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center shrink-0 group-hover:border-[#FF5500]/30 transition-all duration-500">
                <Icon size={22} className="text-[#FF5500]" strokeWidth={1.5} />
            </div>
            <div>
                <h4 className="text-white font-display font-bold text-xs uppercase tracking-widest mb-1">{title}</h4>
                <p className="text-gray-500 font-sans text-[11px] leading-relaxed italic">{sub}</p>
            </div>
        </div>
    );
};

export default FeatureItem;
