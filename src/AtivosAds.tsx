import { useState } from 'react';
import { Cpu, Shield, Crosshair, Lightbulb, Server, Lock as LockIcon, Activity } from 'lucide-react';
import { MetaIcon, GoogleIcon, TikTokIcon, ShopifyIcon, DatabaseIcon, ArrowUpRight, FeatureCheck } from './AdsIcons';

const adsCards = [
    {
        id: 'meta',
        icon: <MetaIcon />,
        title: 'Meta Ads',
        desc: 'Ambientes e ativos para operações no Facebook e Instagram Ads.',
        features: ['Business Managers', 'Ativos comerciais', 'Páginas para anúncios']
    },
    {
        id: 'google',
        icon: <GoogleIcon />,
        title: 'Google Ads',
        desc: 'Contas e estruturas para campanhas na rede Google.',
        features: ['Estruturas comerciais validadas', 'Configurações personalizadas', 'Ativos para operação publicitária']
    },
    {
        id: 'tiktok',
        icon: <TikTokIcon />,
        title: 'TikTok Ads',
        desc: 'Ativos comerciais para operações na plataforma que mais cresce.',
        features: ['Ativos comerciais', 'Estruturas com histórico operacional', 'Configurações avançadas']
    },
    {
        id: 'shopify',
        icon: <ShopifyIcon />,
        title: 'Shopify',
        desc: 'Lojas e estruturas completas para e-commerces.',
        features: ['Lojas prontas', 'Temas premium', 'Apps inclusos']
    },
    {
        id: 'structures',
        icon: <DatabaseIcon />,
        title: 'Estrutura Técnica',
        desc: 'Infraestrutura profissional para segurança, estabilidade e performance.',
        features: ['Camada de rede com foco em segurança e estabilidade', 'Gestão organizada de perfis e acessos', 'Ambientes isolados para operação contínua']
    },
];

const nodesData = [
    {
        id: 1,
        icon: Shield,
        label: "CONTINGÊNCIA",
        gridPos: { left: '13%', top: '35%' },
        orbitPos: { left: '25%', top: '65%' },
        animClass: 'animate-float-orb-1',
        delay: 400,
        pathLength: 420,
        lineDuration: 2500
    },
    {
        id: 2,
        icon: Crosshair,
        label: "TRAFEGO PAGO",
        gridPos: { left: '32%', top: '30%' },
        orbitPos: { left: '28%', top: '20%' },
        animClass: 'animate-float-orb-2',
        delay: 200,
        pathLength: 320,
        lineDuration: 2200
    },
    {
        id: 3,
        icon: Activity,
        label: "MERCADO EM ALTA",
        gridPos: { left: '51%', top: '20%' },
        orbitPos: { left: '60%', top: '15%' },
        animClass: 'animate-float-orb-3',
        delay: 0,
        pathLength: 260,
        lineDuration: 2000
    },
    {
        id: 4,
        icon: Server,
        label: "SOLICITAÇÕES DE SERVIÇOS",
        gridPos: { left: '70%', top: '30%' },
        orbitPos: { left: '55%', top: '75%' },
        animClass: 'animate-float-orb-2',
        delay: 200,
        pathLength: 320,
        lineDuration: 2200
    },
    {
        id: 5,
        icon: Lightbulb,
        label: "MENTORIAS",
        gridPos: { left: '89%', top: '35%' },
        orbitPos: { left: '80%', top: '60%' },
        animClass: 'animate-float-orb-1',
        delay: 400,
        pathLength: 420,
        lineDuration: 2500
    },
];

const ConnectionPath = ({ d, isEnergized, delay = 0, length = 1000, duration = 1500 }: any) => {
    return (
        <g style={{
            opacity: isEnergized ? 1 : 0,
            transition: `opacity ${isEnergized ? '1s' : '0.3s'} ease-in-out ${isEnergized ? '0s' : '0s'}`
        }}>
            {/* Linha de fundo escura */}
            <path
                d={d}
                fill="none"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="6"
                strokeLinecap="round"
                style={{ filter: 'blur(0px)', transform: 'translateZ(0)' }}
            />

            {/* Linha principal Laranja Neon */}
            <path
                d={d} fill="none" stroke="#FF5500" strokeWidth="6" strokeLinecap="round"
                strokeDasharray={length}
                strokeDashoffset={isEnergized ? "0" : length}
                className="transition-all"
                style={{
                    transitionDuration: isEnergized ? `${duration}ms` : '300ms',
                    transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    transitionDelay: isEnergized ? `${delay}ms` : '0ms',
                    filter: 'drop-shadow(0 0 6px #FF5500) drop-shadow(0 0 15px #CC4400)',
                    transform: 'translateZ(0)',
                    willChange: 'stroke-dashoffset'
                }}
            />

            {/* Linha Branca Interna */}
            <path
                d={d} fill="none" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="2" strokeLinecap="round"
                strokeDasharray={length}
                strokeDashoffset={isEnergized ? "0" : length}
                className="transition-all"
                style={{
                    transitionDuration: isEnergized ? `${duration}ms` : '300ms',
                    transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    transitionDelay: isEnergized ? `${delay}ms` : '0ms',
                    transform: 'translateY(-1px) translateZ(0)'
                }}
            />

            {/* Partículas de Energia */}
            <circle
                r="3" fill="#fff" className="particle-energy"
                style={{
                    offsetPath: `path('${d}')`,
                    animationName: isEnergized ? 'moveParticleEnergy' : 'none',
                    animationDuration: '3s',
                    animationIterationCount: 'infinite',
                    animationTimingFunction: 'linear',
                    animationDelay: isEnergized ? `${delay + duration * 0.8}ms` : '0ms',
                    opacity: 0,
                    willChange: 'offset-distance, transform',
                    transform: 'translateZ(0)'
                }}
            />
            <circle
                r="2" fill="#FFCCAA" className="particle-energy"
                style={{
                    offsetPath: `path('${d}')`,
                    animationName: isEnergized ? 'moveParticleEnergy' : 'none',
                    animationDuration: '4s',
                    animationIterationCount: 'infinite',
                    animationTimingFunction: 'linear',
                    animationDelay: isEnergized ? `${delay + duration}ms` : '0ms',
                    opacity: 0,
                    willChange: 'offset-distance, transform',
                    transform: 'translateZ(0)'
                }}
            />
        </g>
    );
};

const OrbNode = ({ data, isEnergized }: any) => {
    const { icon: Icon, gridPos, orbitPos, animClass, delay } = data;
    const currentPos = isEnergized ? gridPos : orbitPos;

    return (
        <div
            className="absolute z-20 w-16 h-16 flex flex-col items-center justify-center"
            style={{
                left: currentPos.left,
                top: currentPos.top,
                transform: 'translate3d(-50%, -50%, 0)',
                transitionProperty: 'left, top',
                transitionDuration: '1500ms',
                transitionDelay: isEnergized ? `${delay}ms` : '0ms',
                transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                willChange: 'left, top',
                backfaceVisibility: 'hidden',
                perspective: '1000px'
            }}
        >
            {/* Label - Locked to node center axis */}
            <div className={`
                absolute top-[110%] left-1/2 -translate-x-1/2
                whitespace-nowrap z-30
                transition-all duration-500
                ${isEnergized ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-90 pointer-events-none'}
            `}
                style={{
                    transitionDelay: isEnergized ? `${delay + 300}ms` : '0ms'
                }}
            >
                <div className="text-orange-200 text-[8px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-[#FF5500]/30 shadow-[0_0_20px_rgba(255,85,0,0.2)] font-display">
                    {data.label}
                </div>
            </div>

            {/* Icon Container with Float Animation */}
            <div
                className={`${!isEnergized ? animClass : ''} transition-transform duration-500 w-full h-full flex items-center justify-center`}
                style={{
                    transform: 'translateZ(0)',
                    willChange: 'transform'
                }}
            >
                <div
                    className={`
            relative flex items-center justify-center w-full h-full rounded-full 
            border overflow-hidden transition-all duration-700
            ${isEnergized
                            ? 'bg-slate-900/90 border-orange-500 scale-100 rotate-0 backdrop-blur-md'
                            : 'bg-black/40 border-white/20 shadow-lg scale-90 hover:scale-95 hover:bg-white/10 rotate-12 backdrop-blur-sm'
                        }
          `}
                    style={{
                        boxShadow: isEnergized ? '0 0 40px rgba(255, 85, 0, 0.6)' : undefined,
                        transitionDelay: isEnergized ? `${delay}ms` : '0ms'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/60 rounded-full" />
                    <div className={`absolute inset-0 bg-orange-500/20 blur-xl transition-opacity duration-500 ${isEnergized ? 'opacity-100' : 'opacity-0'}`} />
                    <Icon
                        size={24}
                        strokeWidth={1.5}
                        className={`relative z-10 transition-all duration-500 ${isEnergized ? 'text-white drop-shadow-[0_0_8px_rgba(255,85,0,0.8)]' : 'text-gray-400'}`}
                    />
                </div>
            </div>
        </div>
    );
};

const EnergyFlowOrb = () => {
    const [isEnergized, setIsEnergized] = useState(false);

    const handleMouseEnter = () => {
        if (window.matchMedia('(hover: hover)').matches) setIsEnergized(true);
    };

    const handleMouseLeave = () => {
        if (window.matchMedia('(hover: hover)').matches) setIsEnergized(false);
    };

    const handleClick = () => {
        setIsEnergized(!isEnergized);
    };

    const pathCenter = "M 209 320 C 209 250, 209 170, 209 76";
    const pathMidLeft = "M 209 320 C 209 250, 131 225, 131 114";
    const pathMidRight = "M 209 320 C 209 250, 287 225, 287 114";
    const pathFarLeft = "M 209 320 C 189 280, 53 250, 53 133";
    const pathFarRight = "M 209 320 C 229 280, 365 250, 365 133";

    return (
        <div className="relative w-full h-full min-h-[500px] bg-transparent flex items-center justify-center overflow-visible" style={{ perspective: '1000px' }}>
            <div className="relative w-full max-w-lg h-[380px] flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>

                <div
                    className={`
            absolute top-1/2 left-[51%] -translate-y-1/2 
            w-[80%] text-center z-0 pointer-events-none
            transition-all duration-1000 ease-in-out
            ${!isEnergized ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-95 blur-md translate-y-10'}
          `}
                    style={{ willChange: 'opacity, transform', transform: 'translate3d(-50%, -50%, 0)' }}
                >
                    <h3 className="text-sm md:text-base font-light text-slate-500 leading-relaxed">
                        Ideias em <span className="text-slate-300 font-medium border-b border-slate-700">desordem</span>
                    </h3>
                </div>

                <div
                    className={`
            absolute top-[5%] left-[51%] 
            w-full text-center z-30 pointer-events-none
            transition-all ease-out
            ${isEnergized
                            ? 'opacity-100 translate-y-0 duration-1000 delay-500'
                            : 'opacity-0 -translate-y-8 duration-300 delay-0'
                        }
          `}
                    style={{ willChange: 'opacity, transform', transform: 'translate3d(-50%, 0, 0)' }}
                >
                    <h3 className="text-xs md:text-sm font-medium text-orange-100 tracking-wide">
                        <span className="text-orange-500 font-bold">Conectado</span> com direção
                    </h3>
                </div>

                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none z-10"
                    viewBox="0 0 410 380"
                    preserveAspectRatio="none"
                    style={{ filter: 'blur(0.5px) contrast(1.2)', transform: 'translateZ(0)' }}
                >
                    <ConnectionPath d={pathFarLeft} isEnergized={isEnergized} delay={400} length={420} duration={nodesData[0].lineDuration} />
                    <ConnectionPath d={pathMidLeft} isEnergized={isEnergized} delay={200} length={320} duration={nodesData[1].lineDuration} />
                    <ConnectionPath d={pathCenter} isEnergized={isEnergized} delay={0} length={260} duration={nodesData[2].lineDuration} />
                    <ConnectionPath d={pathMidRight} isEnergized={isEnergized} delay={200} length={320} duration={nodesData[3].lineDuration} />
                    <ConnectionPath d={pathFarRight} isEnergized={isEnergized} delay={400} length={420} duration={nodesData[4].lineDuration} />
                </svg>

                {nodesData.map((node) => (
                    <OrbNode key={node.id} data={node} isEnergized={isEnergized} />
                ))}

                {/* NÓ CENTRAL / BASE (TRIGGER) */}
                <div
                    className="absolute left-[51%] bottom-3 cursor-pointer group z-30"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClick}
                    style={{ transform: 'translate3d(-50%, 0, 0)' }}
                >
                    {isEnergized && (
                        <div
                            className="absolute inset-0 rounded-full border border-orange-500 animate-ping opacity-20"
                            style={{ animationDuration: '1.5s' }}
                        />
                    )}
                    <div className={`absolute inset-0 rounded-full transition-all duration-700 ${isEnergized ? 'bg-orange-500/20 blur-2xl scale-150' : 'bg-transparent scale-100'}`} style={{ transform: 'translateZ(0)' }} />

                    {/* Ícone Central */}
                    <div className={`
            relative flex items-center justify-center w-24 h-24
            transition-all duration-500 transform rounded-full border
            ${isEnergized
                            ? 'bg-black border-orange-200 scale-110'
                            : 'bg-black/60 border-white/20 hover:bg-white/10 hover:border-white/30 hover:scale-105 backdrop-blur-md'
                        }
          `}
                        style={{
                            boxShadow: isEnergized ? '0 0 60px rgba(255, 85, 0, 0.5)' : undefined,
                            transform: 'translateZ(0)'
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/40 rounded-full" />

                        <Cpu
                            size={40}
                            strokeWidth={1.5}
                            className={`relative z-10 transition-all duration-500 ${isEnergized ? 'text-white drop-shadow-[0_0_8px_rgba(255,85,0,0.8)]' : 'text-gray-400'}`}
                        />

                        {/* Label Central */}
                        <div className={`
                absolute -bottom-10 left-1/2 -translate-x-1/2 
                whitespace-nowrap
                text-orange-400 text-xs font-bold tracking-widest uppercase 
                px-3 py-1 rounded-full bg-black/80 border border-white/10
                transition-all duration-500 shadow-xl
                ${isEnergized ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
              `}>
                            PLATAFORMA BW
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

const AtivosAds = () => {
    return (
        <section id="ativos" className="relative bg-[#050505] py-24 md:pt-48 md:pb-72 px-6 md:px-12 overflow-visible border-t border-white/[0.03]">
            <div className="max-w-7xl mx-auto overflow-visible relative z-10">
                <div className="mb-20 md:mb-24 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 uppercase flex items-center gap-4 justify-center">
                        ATIVOS ADS <span className="text-[#FF5500] drop-shadow-[0_0_15px_rgba(255,85,0,0.3)] font-display">DE ALTA PERFORMANCE</span>
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-medium antialiased leading-relaxed">
                        Soluções para operações comerciais digitais, estruturadas para escalar com segurança, estabilidade e eficiência.
                    </p>
                </div>

                <div className="overflow-visible p-12 -m-12">
                    <div className="flex overflow-x-auto md:overflow-x-visible pb-24 md:pb-0 md:grid md:grid-cols-5 gap-6 md:gap-7 snap-x snap-mandatory overflow-visible px-4">
                        {adsCards.map((card) => (
                            <div
                                key={card.id}
                                className="group relative min-w-[320px] md:min-w-0"
                            >
                                {/* Professional Card Body */}
                                <div className="relative h-[550px] p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-2xl border border-white/[0.08] transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-[#FF5500]/40 group-hover:-translate-y-2 overflow-hidden flex flex-col hover:shadow-[0_20px_50px_rgba(255,85,0,0.15)] transform-gpu">

                                    {/* Glassy Top Reflection */}
                                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Icon with interactive glow */}
                                    <div className="relative mb-8 flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 text-white transition-all duration-500 group-hover:scale-110 group-hover:bg-[#FF5500]/15 group-hover:border-[#FF5500]/30 group-hover:text-[#FF5500]">
                                        <div className="absolute inset-0 bg-[#FF5500]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="relative z-10 scale-[0.8]">
                                            {card.icon}
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="mb-6 flex-shrink-0">
                                        <h3 className="text-lg md:text-xl font-bold text-white mb-4 tracking-tight group-hover:text-[#FF5500] transition-colors duration-300 font-display uppercase h-12 flex items-start leading-tight pt-0">
                                            {card.title}
                                        </h3>
                                        <div className="h-[90px] overflow-hidden">
                                            <p className="text-gray-400 text-[13px] leading-relaxed font-medium group-hover:text-white transition-colors duration-300 font-sans">
                                                {card.desc}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Micro-Features List */}
                                    <div className="space-y-4 pt-8 border-t border-white/[0.05]">
                                        {card.features.map((feat, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <div className="mt-1 flex-shrink-0">
                                                    <FeatureCheck />
                                                </div>
                                                <span className="text-[11px] font-bold text-white/40 tracking-wider uppercase group-hover:text-white/60 transition-colors leading-tight">
                                                    {feat}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Call-to-action Corner */}
                                    <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1">
                                        <ArrowUpRight />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Aviso de Compliance (High-End System Alert Style) */}
                <div className="max-w-4xl mx-auto my-24 px-4 overflow-visible">
                    <div className="relative p-6 md:p-8 rounded-r-2xl bg-black/40 backdrop-blur-md border border-white/[0.05] border-l-4 border-l-[#FF5500] shadow-[-10px_0_30px_-5px_rgba(255,85,0,0.2)] transition-all duration-500 hover:bg-black/50 group">
                        {/* Animated Neon Pulse Effect on Left Border */}
                        <div className="absolute inset-y-0 left-[-4px] w-[4px] bg-[#FF5500] shadow-[0_0_15px_rgba(255,85,0,0.5)] animate-pulse-glow" />

                        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
                            <div className="flex-shrink-0 text-[#FF5500] mt-1">
                                <LockIcon
                                    size={20}
                                    strokeWidth={2.5}
                                    className="drop-shadow-[0_0_5px_rgba(255,85,0,0.5)]"
                                />

                            </div>

                            <div className="text-center md:text-left">
                                <h4 className="text-white font-bold text-sm tracking-[0.2em] uppercase mb-2 font-display">
                                    AVISO IMPORTANTE
                                </h4>
                                <p className="text-gray-400 text-[14px] leading-relaxed font-sans font-normal antialiased">
                                    Os serviços oferecidos não garantem aprovação, desbloqueio ou permanência de contas em plataformas de anúncios, respeitando os Termos de Uso de cada sistema.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Integrated Energy Flow Visual Effect */}
                <EnergyFlowOrb />

            </div>

        </section>
    );
};

export default AtivosAds;
