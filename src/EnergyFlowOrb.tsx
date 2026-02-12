import { useState } from 'react';
import { Cpu, Shield, Crosshair, Lightbulb, Server, Activity, type LucideIcon } from 'lucide-react';

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

interface ConnectionPathProps {
    d: string;
    isEnergized: boolean;
    delay?: number;
    length?: number;
    duration?: number;
}

const ConnectionPath = ({ d, isEnergized, delay = 0, length = 1000, duration = 1500 }: ConnectionPathProps) => {
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

interface OrbNodeProps {
    data: {
        id: number;
        icon: LucideIcon;
        label: string;
        gridPos: { left: string; top: string };
        orbitPos: { left: string; top: string };
        animClass: string;
        delay: number;
        pathLength: number;
        lineDuration: number;
    };
    isEnergized: boolean;
}

const OrbNode = ({ data, isEnergized }: OrbNodeProps) => {
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

export const EnergyFlowOrb = () => {
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
