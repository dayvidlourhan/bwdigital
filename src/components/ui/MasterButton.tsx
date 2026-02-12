import React from 'react';

interface MasterButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    href?: string;
}

const MasterButton = ({ children, className = '', href, ...props }: MasterButtonProps) => {
    const baseStyle = "relative h-16 px-10 rounded-lg bg-gradient-to-b from-[#FF6A1A] to-[#E54800] border-t border-white/20 text-sm font-sans font-extrabold text-white uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-4 active:scale-[0.97] outline-none group shadow-[0_10px_40px_-10px_rgba(255,85,0,0.4),inset_0_1px_0_rgba(255,255,255,0.4)] hover:shadow-[0_15px_50px_-5px_rgba(255,85,0,0.5)] hover:-translate-y-1";

    const combinedClassName = `${baseStyle} ${className}`;

    if (href) {
        return (
            <a href={href} className={combinedClassName}>
                {children}
            </a>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
};

export default MasterButton;
