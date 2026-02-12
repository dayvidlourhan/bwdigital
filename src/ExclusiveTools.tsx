import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Database, LayoutDashboard, Share2, Palette, Code2, ArrowRight } from 'lucide-react';
import SectionHeader from './components/ui/SectionHeader';
import MasterButton from './components/ui/MasterButton';

const ExclusiveTools = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState(0);

    const segments = [
        {
            title: "SEGURANÇA & CONTAS",
            icon: Shield,
            items: ["Gerador de Código 2FA", "Gerador de Senhas Seguras", "Testador de Proxy"],
        },
        {
            title: "DADOS & TRACKING",
            icon: Database,
            items: ["Conversor de Cookies (JSON)", "Gerador de UTM", "Calculadora ROI / ROAS"],
        },
        {
            title: "GESTÃO & LUCRO",
            icon: LayoutDashboard,
            items: ["Calculadora de Margem", "Markup e Lucratividade"],
        },
        {
            title: "SOCIAL & CONVERSÃO",
            icon: Share2,
            items: ["Gerador de Bio Instagram", "Gerador de Hashtags", "Gerador de Link WhatsApp"],
        },
        {
            title: "IMAGEM & DESIGN",
            icon: Palette,
            items: ["Conversor de Imagens", "Compactador de Imagens", "Remoção de Fundo", "Extrator de Cores"],
        },
        {
            title: "CÓDIGO & AUTOMAÇÃO",
            icon: Code2,
            items: ["Editor HTML com preview", "Gerador de QR Code", "Contador de Caracteres"],
        },
    ];

    const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
        const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
        return {
            x: centerX + radius * Math.cos(angleInRadians),
            y: centerY + radius * Math.sin(angleInRadians),
        };
    };

    const createSegmentPath = (x: number, y: number, innerRadius: number, outerRadius: number, startAngle: number, endAngle: number) => {
        const startOuter = polarToCartesian(x, y, outerRadius, endAngle);
        const endOuter = polarToCartesian(x, y, outerRadius, startAngle);
        const startInner = polarToCartesian(x, y, innerRadius, endAngle);
        const endInner = polarToCartesian(x, y, innerRadius, startAngle);

        const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

        return [
            "M", startOuter.x, startOuter.y,
            "A", outerRadius, outerRadius, 0, largeArcFlag, 0, endOuter.x, endOuter.y,
            "L", endInner.x, endInner.y,
            "A", innerRadius, innerRadius, 0, largeArcFlag, 1, startInner.x, startInner.y,
            "Z"
        ].join(" ");
    };

    return (
        <section className="relative min-h-screen bg-[#050505] py-16 md:py-24 px-4 overflow-hidden flex flex-col items-center">
            {/* Design System Anchor: Discrete Utility Grid with Radial Mask */}
            <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.015]"
                style={{
                    backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)'
                }}
            />

            <div className="relative z-10 w-full mb-16 md:mb-24">
                <SectionHeader
                    title="Ferramentas"
                    highlight="BW"
                    subtitle="Mais de 20 Ferramentas gratuitas e extensões inteligentes para acelerar seus resultados no digital."
                    className="max-w-3xl mx-auto"
                />
            </div>

            {/* RADIAL PIZZA SELECTOR - Desktop Only */}
            <div className="hidden lg:flex relative w-full max-w-[700px] aspect-square items-center justify-center">

                <svg viewBox="0 0 1000 1000" className="w-full h-full relative z-[5] overflow-visible">
                    {segments.map((segment, index) => {
                        const startAngle = index * 60;
                        const endAngle = (index + 1) * 60;
                        const midAngle = (startAngle + endAngle) / 2;
                        const isHovered = hoveredIndex === index;

                        // Expansion logic - Slightly increased gap for physical separation
                        const gap = 1;
                        const innerR = isHovered ? 135 : 140;
                        const outerR = isHovered ? 490 : 460;

                        const path = createSegmentPath(500, 500, innerR, outerR, startAngle + gap, endAngle - gap);

                        // Text positioning
                        const textPos = polarToCartesian(500, 500, isHovered ? 335 : 320, midAngle);

                        return (
                            <g
                                key={index}
                                className="cursor-pointer transition-all duration-500"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Segment Block - Heavy Glass Industrial */}
                                <path
                                    d={path}
                                    fill={isHovered ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.02)"}
                                    stroke={isHovered ? "#FF5500" : "rgba(255, 255, 255, 0.05)"}
                                    strokeWidth={isHovered ? "2" : "1"}
                                    style={{
                                        transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
                                        filter: isHovered ? 'drop-shadow(0 0 15px rgba(255, 85, 0, 0.3))' : 'none'
                                    }}
                                />

                                {/* Content Overlay */}
                                <foreignObject
                                    x={textPos.x - 140}
                                    y={textPos.y - 100}
                                    width="280"
                                    height="200"
                                    className="overflow-visible pointer-events-none"
                                >
                                    <div className="w-full h-full flex flex-col items-center justify-center text-center p-2">
                                        <div className="flex items-center justify-center gap-3 mb-4 w-full px-2">
                                            {/* Standardized Header: Mathematically centered and spaced */}
                                            <segment.icon
                                                size={18}
                                                className={`flex-shrink-0 w-5 h-5 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-gray-400'}`}
                                            />
                                            <h3 className={`font-display font-bold text-[18px] tracking-[0.25em] uppercase transition-colors duration-300 ${isHovered ? 'text-white' : 'text-gray-400'} max-w-[180px] leading-tight`}>
                                                {segment.title}
                                            </h3>
                                        </div>
                                        <div className={`space-y-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-40 -translate-y-1'}`}>
                                            {segment.items.map((item, i) => (
                                                <div key={i} className="text-gray-400 text-[14px] font-semibold leading-normal font-body uppercase tracking-widest px-4">
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        );
                    })}
                </svg>

                {/* CENTRAL COMMAND CORE - Power Core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] z-20">
                    {/* Pulsing Glow Background */}
                    <div className="absolute inset-0 bg-orange-500/10 rounded-full blur-2xl animate-pulse pointer-events-none z-0"></div>

                    <div className="absolute inset-0 bg-[#050505] rounded-full border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl z-10 group cursor-pointer">
                        {/* Static Branding with Logo */}
                        <div className="flex flex-col items-center justify-center z-20 transition-transform duration-500 ease-out group-hover:scale-125">
                            <img
                                src="/logo.png"
                                alt="BW Digital Logo"
                                className="w-24 h-auto object-contain opacity-100 drop-shadow-[0_0_15px_rgba(255,85,0,0.3)]"
                            />
                        </div>

                        {/* Aesthetic HUD scan */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF5500]/5 to-transparent h-[200%] w-full animate-[scanline_10s_linear_infinite] pointer-events-none z-10"></div>
                    </div>

                    {/* Concentric borders */}
                    <div className="absolute inset-[-10px] border border-white/5 rounded-full pointer-events-none z-20"></div>
                    <div className="absolute inset-[-20px] border border-white/[0.03] rounded-full pointer-events-none z-20"></div>
                </div>
            </div>

            {/* INTERACTIVE MOBILE HUB - Replaces long stacked list */}
            <div className="lg:hidden w-full max-w-lg mt-8">
                {/* 1. Module Selector Strip */}
                <div className="flex overflow-x-auto pb-6 gap-3 no-scrollbar snap-x px-4 -mx-4">
                    {segments.map((segment, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`flex flex-col items-center gap-2 shrink-0 snap-center p-3 rounded-xl border transition-all duration-300 ${activeTab === index
                                ? 'bg-[#FF5500]/10 border-[#FF5500] shadow-[0_0_15px_rgba(255,85,0,0.2)]'
                                : 'bg-white/[0.03] border-white/10'
                                }`}
                        >
                            <div className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${activeTab === index ? 'text-[#FF5500]' : 'text-gray-500'
                                }`}>
                                <segment.icon size={20} />
                            </div>
                            <span className={`text-[9px] font-bold tracking-widest uppercase ${activeTab === index ? 'text-white' : 'text-gray-600'
                                }`}>
                                MOD-0{index + 1}
                            </span>
                        </button>
                    ))}
                </div>

                {/* 2. Active Module Interface */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-3xl border border-white/10 rounded-2xl p-7 md:p-8 overflow-hidden min-h-[340px] flex flex-col"
                >
                    {/* Industrial Accents */}

                    <div className="absolute top-0 left-0 w-12 h-px bg-gradient-to-r from-[#FF5500] to-transparent" />
                    <div className="absolute top-0 left-0 h-12 w-px bg-gradient-to-b from-[#FF5500] to-transparent" />

                    {/* Module Header */}
                    <div className="mb-8">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse" />
                            <span className="text-[10px] font-extrabold text-[#FF5500] tracking-[0.2em] uppercase font-sans">MÓDULO ATIVO</span>
                        </div>
                        <h3 className="font-display font-black text-2xl tracking-tight text-white uppercase leading-none">
                            {segments[activeTab].title}
                        </h3>
                    </div>

                    {/* Features List */}
                    <div className="space-y-4 flex-grow">
                        {segments[activeTab].items.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-4 bg-white/[0.02] border border-white/[0.05] p-4 rounded-xl group"
                            >
                                <div className="w-1.5 h-1.5 rounded-sm bg-[#FF5500]/30 group-hover:bg-[#FF5500] transition-colors" />
                                <p className="text-gray-300 font-sans font-bold text-xs uppercase tracking-[0.15em]">
                                    {item}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Decorative Scanner Bar */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF5500]/20 to-transparent">
                        <motion.div
                            className="h-full w-1/3 bg-[#FF5500]/40 blur-sm"
                            animate={{ x: ["-100%", "300%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                    </div>
                </motion.div>

                {/* Mobile CTA Button - Centered */}
                <div className="mt-10 flex justify-center w-full">
                    <MasterButton href="https://digitalbw.com.br/central" className="w-full max-w-[320px] mx-auto">
                        ACESSAR FERRAMENTAS
                        <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </MasterButton>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes scanline { from { transform: translateY(-50%); } to { transform: translateY(50%); } }
      `}} />
        </section>
    );
};

export default ExclusiveTools;
