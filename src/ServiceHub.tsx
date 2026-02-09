import { useState } from 'react';
import {
    Crosshair, PenTool, Code, FileText, Video, Smartphone, Mic, Layout,
    Bot, Users, Search, Palette, Mail, Rocket, Box, ShoppingBag,
    ShieldAlert, MapPin, Layers, Briefcase, Globe, Film, Headphones,
    BarChart, Server, FileInput, Cpu, Zap, Shield, CheckCircle, Clock, Lock,
    RefreshCw, Target
} from 'lucide-react';

const RocketIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
    </svg>
);

const services = [
    { title: 'Consultoria', icon: Briefcase },
    { title: 'Google Business', icon: Globe },
    { title: 'Motion Graphics', icon: Film },
    { title: 'Suporte Técnico', icon: Headphones },
    { title: 'B.I. & Dados', icon: BarChart },
    { title: 'Infraestrutura Cloud', icon: Server },
    { title: 'Tráfego Pago', icon: Crosshair },
    { title: 'Design Gráfico', icon: PenTool },
    { title: 'Desenvolvimento Web', icon: Code },
    { title: 'Copywriting', icon: FileText },
    { title: 'Edição de Vídeo', icon: Video },
    { title: 'Social Media', icon: Smartphone },
    { title: 'VSL & Narração', icon: Mic },
    { title: 'Landing Pages', icon: Layout },
    { title: 'Automação & Bots', icon: Bot },
    { title: 'CRM & Vendas', icon: Users },
    { title: 'SEO Técnico', icon: Search },
    { title: 'Branding', icon: Palette },
    { title: 'E-mail Marketing', icon: Mail },
    { title: 'Lançamentos', icon: Rocket },
    { title: 'Estruturação PLR', icon: Box },
    { title: 'Dropshipping', icon: ShoppingBag },
    { title: 'Contingência', icon: ShieldAlert },
    { title: 'Tráfego Local', icon: MapPin },
    { title: 'UI/UX Design', icon: Layers },
];

const steps = [
    {
        id: 'SOLICITAÇÃO',
        title: 'Envio rápido de demanda via Hub principal.',
        icon: FileInput
    },
    {
        id: 'ANÁLISE',
        title: 'Validação de escopo e compatibilidade técnica.',
        icon: Cpu
    },
    {
        id: 'MATCH',
        title: 'Alocação de especialista sênior BW dedicado.',
        icon: Users
    },
    {
        id: 'ENTREGA',
        title: 'Ativos funcionais entregues em tempo recorde.',
        icon: Zap
    },
];

const ServiceTicket = ({ title, icon: Icon }: any) => (
    <div className="group flex flex-col items-center gap-2 flex-shrink-0 w-24 cursor-pointer transition-all duration-500">
        <div className="relative">
            {/* Tech Radar Pulse - Outer Ring */}
            <div className="absolute inset-0 rounded-full border border-[#FF5500]/40 scale-100 opacity-0 group-hover:scale-[1.6] group-hover:opacity-0 transition-all duration-700 pointer-events-none" />

            {/* Tech Radar Pulse - Inner Ring */}
            <div className="absolute inset-0 rounded-full border border-[#FF5500]/20 scale-100 opacity-0 group-hover:scale-[1.3] group-hover:opacity-0 transition-all duration-500 delay-75 pointer-events-none" />

            {/* Digital Glow */}
            <div className="absolute -inset-1 rounded-full bg-[#FF5500]/5 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Main Circle - Tech Core with Internal "Spice" Volume */}
            <div className="relative w-16 h-16 rounded-full bg-[#0a0a0a] border border-white/5 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110 group-hover:border-[#FF5500] group-hover:bg-[#0d0d0d] group-hover:shadow-[0_0_15px_rgba(255,85,0,0.2)] z-10 overflow-hidden">
                {/* Internal Spotlight effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05)_0%,transparent_70%)] group-hover:bg-[radial-gradient(circle_at_50%_0%,rgba(255,85,0,0.1)_0%,transparent_70%)] transition-all duration-500" />

                <Icon
                    size={24}
                    strokeWidth={1}
                    className="relative z-10 text-white/30 group-hover:text-[#FF5500] transition-all duration-500 scale-100 group-hover:scale-110"
                />
            </div>
        </div>

        {/* Title */}
        <div className="text-center">
            <span className="text-[10px] font-mono text-white/50 uppercase tracking-[0.2em] leading-tight group-hover:text-white transition-colors duration-500">
                {title.split(' ').map((word: string, i: number) => (
                    <span key={i} className="block">
                        {word}
                    </span>
                ))}
            </span>
        </div>
    </div>
);

const PipelineNode = ({ step, isLast, index, activeIndex, onHover }: any) => {
    const isEngaged = activeIndex >= index;
    const isLineEngaged = activeIndex > index;
    const totalSteps = 4; // steps.length
    const speed = 300;

    // Delay dinâmico: Ida (index * speed) | Volta ((total - 1 - index) * speed)
    const expansionDelay = index * speed;
    const retractionDelay = (totalSteps - 1 - index) * speed;
    const activeDelay = isEngaged ? expansionDelay : retractionDelay;
    const lineActiveDelay = isLineEngaged ? expansionDelay : retractionDelay;

    return (
        <div
            className="flex-1 flex flex-col items-center group relative"
            onMouseEnter={() => onHover(index)}
        >
            {/* Connector Line - Realistic Sequential Flow (In & Out) */}
            {!isLast && (
                <div className="absolute top-8 left-1/2 w-full h-[4px] bg-white/5 z-0 hidden md:block overflow-hidden">
                    <div
                        className={`h-full bg-gradient-to-r from-[#FF5500]/40 via-[#FF5500] to-[#FF5500]/40 transition-all duration-300 ease-in-out ${isLineEngaged ? 'w-full' : 'w-0'
                            }`}
                        style={{
                            transitionDelay: `${lineActiveDelay}ms`
                        }}
                    />
                </div>
            )}

            <div className="relative z-10 flex flex-col items-center">
                {/* Technical Diamond Frame */}
                <div
                    className={`relative w-16 h-16 flex items-center justify-center transition-all duration-500 ${isEngaged ? 'scale-110' : 'group-hover:scale-110'}`}
                    style={{
                        transitionDelay: `${activeDelay}ms`
                    }}
                >
                    <div className={`absolute inset-0 border rotate-45 transition-all duration-500 bg-[#080808]/80 ${isEngaged ? 'border-[#FF5500]/50 shadow-[0_0_15px_rgba(255,85,0,0.2)]' : 'border-white/10 group-hover:border-[#FF5500]/30'}`} />
                    <step.icon
                        size={20}
                        strokeWidth={1}
                        className={`relative z-10 transition-colors duration-500 ${isEngaged ? 'text-[#FF5500]' : 'text-white/40 group-hover:text-[#FF5500]'}`}
                    />
                </div>

                {/* Labels */}
                <div className="mt-12 text-center max-w-[160px]">
                    <span
                        className={`block text-[10px] font-mono tracking-[0.5em] uppercase mb-4 transition-colors duration-500 ${isEngaged ? 'text-white' : 'text-gray-600 group-hover:text-gray-300'}`}
                        style={{
                            transitionDelay: `${activeDelay}ms`
                        }}
                    >
                        {step.id}
                    </span>
                    <p
                        className={`font-sans text-[10px] font-medium leading-relaxed transition-colors duration-500 ${isEngaged ? 'text-gray-400' : 'text-gray-600 group-hover:text-gray-400'}`}
                        style={{
                            transitionDelay: `${activeDelay}ms`
                        }}
                    >
                        {step.title}
                    </p>
                </div>
            </div>
        </div>
    );
};

const ServiceHub = () => {
    const [activeIndex, setActiveIndex] = useState(-1);

    return (
        <section id="servicos" className="relative bg-[#050505] pb-32 pt-0">

            {/* Background grid effect */}
            <div className="background-container !opacity-[0.08]" />

            {/* PREMIUM FUSION GRADIENT - Ultra-smooth Session Transition */}
            <div
                className="absolute top-0 left-0 w-full pointer-events-none z-10"
                style={{
                    height: '500px',
                    background: `linear-gradient(to bottom, 
                        #050505 0%, 
                        #050505 15%, 
                        rgba(5,5,5,0.95) 25%, 
                        rgba(5,5,5,0.85) 35%, 
                        rgba(5,5,5,0.65) 50%, 
                        rgba(5,5,5,0.35) 65%, 
                        rgba(5,5,5,0.15) 80%, 
                        transparent 100%
                    )`
                }}
            />

            {/* Technical Divider (ENGINE CORE TRANSMISSION) */}
            <div className="relative w-full py-24 flex items-center justify-center z-20">
                <div className="absolute w-full h-px bg-white/10" />
                <div className="relative px-6 bg-[#050505] flex items-center gap-4">
                    <div className="w-2.5 h-2.5 border border-[#FF5500] rotate-45 flex items-center justify-center">
                        <div className="w-1 h-1 bg-[#FF5500]" />
                    </div>
                    <span className="text-[10px] font-mono text-white/40 tracking-[0.6em] uppercase">Engine Core Transmission</span>
                    <div className="w-2.5 h-2.5 border border-[#FF5500] rotate-45 flex items-center justify-center">
                        <div className="w-1 h-1 bg-[#FF5500]" />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 pt-12">
                {/* Layer 1: Header & Service Marquee */}
                <div className="text-center mb-20 animate-fade-in-up">
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 uppercase tracking-tighter">
                        <span className="text-white">Solicite um </span>
                        <span className="text-[#FF5500]">Serviço Especializado</span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base font-sans max-w-2xl mx-auto leading-relaxed">
                        Faça sua solicitação abaixo e a BW Digital conecta você a um profissional / especialista validado em até 72 horas.
                    </p>
                </div>

                {/* Carousel Container with Balanced Layout */}
                <div className="relative pt-6 pb-16 -mx-6">
                    {/* Glassmorphism Rectangle - Shifted up */}
                    <div className="absolute inset-x-0 -top-2 h-48 bg-white/[0.01] backdrop-blur-[2px] border-y border-white/[0.03] z-0" />

                    {/* Marquee Container */}
                    <div className="relative flex overflow-hidden z-10">
                        <div className="flex gap-10 animate-marquee py-4">
                            {[...services, ...services].map((service, idx) => (
                                <ServiceTicket key={idx} title={service.title} icon={service.icon} />
                            ))}
                        </div>
                    </div>

                    {/* Edge Fades for the Marquee */}
                    <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />
                </div>

                {/* Layer 2: Pipeline de Processo - UI-REFINED */}
                <div className="mt-60 mb-60">
                    <div className="text-center mb-32">
                        <h3 className="text-[11px] font-mono text-[#FF5500] tracking-[0.5em] uppercase">COMO FUNCIONA</h3>
                    </div>
                    <div
                        className="flex flex-col md:flex-row items-center md:items-start justify-between gap-16 md:gap-4 max-w-6xl mx-auto px-4"
                        onMouseLeave={() => setActiveIndex(-1)}
                    >
                        {steps.map((step, idx) => (
                            <PipelineNode
                                key={step.id}
                                step={step}
                                index={idx}
                                activeIndex={activeIndex}
                                onHover={setActiveIndex}
                                isLast={idx === steps.length - 1}
                            />
                        ))}
                    </div>
                </div>

                {/* Layer 3: Real-time Status Panel */}
                <div className="max-w-4xl mx-auto mb-40 px-4">
                    <div className="rounded-xl bg-[#080808] border border-white/5 p-8 relative overflow-hidden backdrop-blur-sm">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-12 pb-6 border-b border-white/5 font-mono">
                            <span className="text-[10px] text-gray-500 uppercase tracking-[0.3em]">STATUS EM TEMPO REAL</span>
                            <span className="text-[9px] text-[#00FF66]/40 uppercase tracking-widest">SOCKET: CONNECTED_V4</span>
                        </div>

                        <div className="relative flex flex-col gap-10">
                            {/* Vertical Connector Line - Precise alignment */}
                            <div className="absolute left-[13.5px] top-4 bottom-4 w-[1px] bg-white/5 z-0" />

                            {/* Status Items - With Engineering Details */}
                            <div className="relative z-10 flex items-center gap-6 group">
                                <div className="w-7 h-7 rounded-full bg-[#0a0a0a] border border-[#FF5500]/40 flex items-center justify-center shadow-[0_0_10px_rgba(255,85,0,0.1)]">
                                    <RefreshCw size={13} className="text-[#FF5500] animate-spin" />
                                </div>
                                <div className="flex items-center gap-5 font-mono">
                                    <div className="flex flex-col">
                                        <span className="text-[11px] text-[#FF5500] font-bold uppercase tracking-widest">PENDENTE</span>
                                        <span className="text-[7px] text-[#FF5500]/30 -mt-0.5 tracking-tighter">REQ_ID: 9812-BW</span>
                                    </div>
                                    <span className="text-white/10">—</span>
                                    <span className="text-[11px] text-white/80 tracking-tight font-sans">Solicitação recebida no sistema</span>
                                </div>
                            </div>

                            <div className="relative z-10 flex items-center gap-6 group">
                                <div className="w-7 h-7 rounded-full bg-[#0a0a0a] border border-[#00A3FF]/40 flex items-center justify-center">
                                    <Target size={13} className="text-[#00A3FF]" />
                                </div>
                                <div className="flex items-center gap-5 font-mono">
                                    <div className="flex flex-col">
                                        <span className="text-[11px] text-[#00A3FF] font-bold uppercase tracking-widest">EM ANÁLISE</span>
                                        <span className="text-[7px] text-[#00A3FF]/30 -mt-0.5 tracking-tighter">ALGO_PROC: ACTIVE</span>
                                    </div>
                                    <span className="text-white/10">—</span>
                                    <span className="text-[11px] text-white/50 tracking-tight font-sans">Triagem técnica e de viabilidade</span>
                                </div>
                            </div>

                            <div className="relative z-10 flex items-center gap-6 group">
                                <div className="w-7 h-7 rounded-full bg-[#0a0a0a] border border-[#00FF66]/40 flex items-center justify-center">
                                    <CheckCircle size={13} className="text-[#00FF66]" />
                                </div>
                                <div className="flex items-center gap-5 font-mono">
                                    <div className="flex flex-col">
                                        <span className="text-[11px] text-[#00FF66] font-bold uppercase tracking-widest">ACEITO</span>
                                        <span className="text-[7px] text-[#00FF66]/30 -mt-0.5 tracking-tighter">NODE: PRODUCTION_01</span>
                                    </div>
                                    <span className="text-white/10">—</span>
                                    <span className="text-[11px] text-white font-medium tracking-tight font-sans">Especialista dedicado alocado</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Layer 4: Grid de Garantias - Unified Icon Aesthetic */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto mb-24 px-4 font-sans">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left group">
                        <div className="relative mb-6">
                            <div className="absolute inset-0 rounded-full border border-[#FF5500]/40 scale-100 opacity-0 group-hover:scale-[1.6] group-hover:opacity-0 transition-all duration-700 pointer-events-none" />
                            <div className="absolute inset-0 rounded-full border border-[#FF5500]/20 scale-100 opacity-0 group-hover:scale-[1.3] group-hover:opacity-0 transition-all duration-500 delay-75 pointer-events-none" />
                            <div className="absolute -inset-1 rounded-full bg-[#FF5500]/5 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative w-9 h-9 rounded-full bg-[#0a0a0a] border border-white/5 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-[#FF5500] group-hover:bg-[#0d0d0d] group-hover:shadow-[0_0_15px_rgba(255,85,0,0.2)] z-10 overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05)_0%,transparent_70%)] group-hover:bg-[radial-gradient(circle_at_50%_0%,rgba(255,85,0,0.1)_0%,transparent_70%)] transition-all duration-500" />
                                <Shield size={16} strokeWidth={1} className="relative z-10 text-white/30 group-hover:text-[#FF5500] transition-all duration-500" />
                            </div>
                        </div>
                        <h4 className="text-white font-bold text-xs uppercase tracking-tight mb-1">Sem Custo Inicial</h4>
                        <p className="text-gray-500 text-[10px] font-medium leading-tight tracking-tight">Análise de viabilidade gratuita</p>
                    </div>

                    <div className="flex flex-col items-center md:items-start text-center md:text-left group">
                        <div className="relative mb-6">
                            <div className="absolute inset-0 rounded-full border border-[#FF5500]/40 scale-100 opacity-0 group-hover:scale-[1.6] group-hover:opacity-0 transition-all duration-700 pointer-events-none" />
                            <div className="absolute inset-0 rounded-full border border-[#FF5500]/20 scale-100 opacity-0 group-hover:scale-[1.3] group-hover:opacity-0 transition-all duration-500 delay-75 pointer-events-none" />
                            <div className="absolute -inset-1 rounded-full bg-[#FF5500]/5 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative w-9 h-9 rounded-full bg-[#0a0a0a] border border-white/5 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-[#FF5500] group-hover:bg-[#0d0d0d] group-hover:shadow-[0_0_15px_rgba(255,85,0,0.2)] z-10 overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05)_0%,transparent_70%)] group-hover:bg-[radial-gradient(circle_at_50%_0%,rgba(255,85,0,0.1)_0%,transparent_70%)] transition-all duration-500" />
                                <CheckCircle size={16} strokeWidth={1} className="relative z-10 text-white/30 group-hover:text-[#FF5500] transition-all duration-500" />
                            </div>
                        </div>
                        <h4 className="text-white font-bold text-xs uppercase tracking-tight mb-1">Experts Validados</h4>
                        <p className="text-gray-500 text-[10px] font-medium leading-tight tracking-tight">Profissionais com track record</p>
                    </div>

                    <div className="flex flex-col items-center md:items-start text-center md:text-left group">
                        <div className="relative mb-6">
                            <div className="absolute inset-0 rounded-full border border-[#FF5500]/40 scale-100 opacity-0 group-hover:scale-[1.6] group-hover:opacity-0 transition-all duration-700 pointer-events-none" />
                            <div className="absolute inset-0 rounded-full border border-[#FF5500]/20 scale-100 opacity-0 group-hover:scale-[1.3] group-hover:opacity-0 transition-all duration-500 delay-75 pointer-events-none" />
                            <div className="absolute -inset-1 rounded-full bg-[#FF5500]/5 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative w-9 h-9 rounded-full bg-[#0a0a0a] border border-white/5 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-[#FF5500] group-hover:bg-[#0d0d0d] group-hover:shadow-[0_0_15px_rgba(255,85,0,0.2)] z-10 overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05)_0%,transparent_70%)] group-hover:bg-[radial-gradient(circle_at_50%_0%,rgba(255,85,0,0.1)_0%,transparent_70%)] transition-all duration-500" />
                                <Clock size={16} strokeWidth={1} className="relative z-10 text-white/30 group-hover:text-[#FF5500] transition-all duration-500" />
                            </div>
                        </div>
                        <h4 className="text-white font-bold text-xs uppercase tracking-tight mb-1">SLA de 72h</h4>
                        <p className="text-gray-500 text-[10px] font-medium leading-tight tracking-tight">Resposta rápida e ágil</p>
                    </div>

                    <div className="flex flex-col items-center md:items-start text-center md:text-left group">
                        <div className="relative mb-6">
                            <div className="absolute inset-0 rounded-full border border-[#FF5500]/40 scale-100 opacity-0 group-hover:scale-[1.6] group-hover:opacity-0 transition-all duration-700 pointer-events-none" />
                            <div className="absolute inset-0 rounded-full border border-[#FF5500]/20 scale-100 opacity-0 group-hover:scale-[1.3] group-hover:opacity-0 transition-all duration-500 delay-75 pointer-events-none" />
                            <div className="absolute -inset-1 rounded-full bg-[#FF5500]/5 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative w-9 h-9 rounded-full bg-[#0a0a0a] border border-white/5 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-[#FF5500] group-hover:bg-[#0d0d0d] group-hover:shadow-[0_0_15px_rgba(255,85,0,0.2)] z-10 overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05)_0%,transparent_70%)] group-hover:bg-[radial-gradient(circle_at_50%_0%,rgba(255,85,0,0.1)_0%,transparent_70%)] transition-all duration-500" />
                                <Lock size={16} strokeWidth={1} className="relative z-10 text-white/30 group-hover:text-[#FF5500] transition-all duration-500" />
                            </div>
                        </div>
                        <h4 className="text-white font-bold text-xs uppercase tracking-tight mb-1">Dados Criptografados</h4>
                        <p className="text-gray-500 text-[10px] font-medium leading-tight tracking-tight">Segurança total das informações</p>
                    </div>
                </div>

                <div className="flex flex-col items-center animate-fade-in-up">
                    <button className="h-20 px-12 rounded-[10px] bg-gradient-to-b from-[#FF6010] to-[#E04800] border border-white/5 text-[18px] font-sans font-bold text-white uppercase tracking-[0.1em] transition-all flex items-center gap-6 active:scale-[0.98] outline-none group shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_20px_50px_-10px_rgba(255,85,0,0.3)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_0_60px_-5px_rgba(255,85,0,0.4)] hover:-translate-y-px">
                        INICIAR ANÁLISE DE PROJETO
                        <RocketIcon className="w-6 h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                    <span className="mt-10 text-[11px] font-mono text-gray-700 uppercase tracking-[0.5em]">Scalability Infrastructure Protocol</span>
                </div>
            </div>
        </section>
    );
};

export default ServiceHub;
