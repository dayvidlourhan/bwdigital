import { useState } from 'react';
import {
    Crosshair, PenTool, Code, FileText, Video, Smartphone, Mic, Layout,
    Bot, Users, Search, Palette, Mail, Rocket, Box, ShoppingBag,
    ShieldAlert, MapPin, Layers, Briefcase, Globe, Film, Headphones,
    BarChart, Server, FileInput, Cpu, Zap, Shield, CheckCircle, Clock, Lock,
    RefreshCw, Target, type LucideIcon
} from 'lucide-react';
import SectionHeader from './components/ui/SectionHeader';
import MasterButton from './components/ui/MasterButton';

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
        title: 'Serviço pedido até 72h resposta',
        icon: FileInput
    },
    {
        id: 'ANÁLISE',
        title: 'BW vai encontrar um profissional',
        icon: Cpu
    },
    {
        id: 'MATCH',
        title: 'Alinhamento do pedido',
        icon: Users
    },
    {
        id: 'ENTREGA',
        title: 'Realização da entrega data estimada',
        icon: Zap
    },
];

interface ServiceTicketProps {
    title: string;
    icon: LucideIcon;
}

const ServiceTicket = ({ title, icon: Icon }: ServiceTicketProps) => (
    <div className="group flex flex-col items-center gap-1.5 flex-shrink-0 w-[72px] md:w-24 cursor-pointer transition-all duration-500">
        <div className="relative">
            <div className="absolute inset-0 rounded-full border border-[#FF5500]/40 scale-100 opacity-0 group-hover:scale-[1.6] group-hover:opacity-0 transition-all duration-700 pointer-events-none" />
            <div className="absolute inset-0 rounded-full border border-[#FF5500]/20 scale-100 opacity-0 group-hover:scale-[1.3] group-hover:opacity-0 transition-all duration-500 delay-75 pointer-events-none" />
            <div className="absolute -inset-1 rounded-full bg-[#FF5500]/5 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#0a0a0a] border border-white/5 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110 group-hover:border-[#FF5500] group-hover:bg-[#0d0d0d] group-hover:shadow-[0_0_15px_rgba(255,85,0,0.2)] z-10 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05)_0%,transparent_70%)] group-hover:bg-[radial-gradient(circle_at_50%_0%,rgba(255,85,0,0.1)_0%,transparent_70%)] transition-all duration-500" />
                <Icon
                    size={20}
                    strokeWidth={1}
                    className="relative z-10 text-white/30 group-hover:text-[#FF5500] transition-all duration-500 scale-100 group-hover:scale-110 md:[&]:!w-6 md:[&]:!h-6"
                />
            </div>
        </div>
        <div className="text-center">
            <span className="text-[10px] md:text-[11px] font-mono text-white/70 uppercase tracking-[0.1em] md:tracking-[0.15em] leading-tight group-hover:text-white transition-colors duration-500">
                {title.split(' ').map((word, i) => (
                    <span key={i} className="block">
                        {word}
                    </span>
                ))}
            </span>
        </div>
    </div>
);

interface PipelineNodeProps {
    step: {
        id: string;
        title: string;
        icon: LucideIcon;
    };
    isLast: boolean;
    index: number;
    activeIndex: number;
    onHover: (index: number) => void;
}

const PipelineNode = ({ step, isLast, index, activeIndex, onHover }: PipelineNodeProps) => {
    const isEngaged = activeIndex >= index;
    const isLineEngaged = activeIndex > index;
    const totalSteps = 4;
    const speed = 300;

    const expansionDelay = index * speed;
    const retractionDelay = (totalSteps - 1 - index) * speed;
    const activeDelay = isEngaged ? expansionDelay : retractionDelay;
    const lineActiveDelay = isLineEngaged ? expansionDelay : retractionDelay;

    return (
        <div
            className="flex-1 flex flex-col items-center group relative"
            onMouseEnter={() => onHover(index)}
        >
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

                <div className="mt-12 text-center max-w-[220px]">
                    <span
                        className={`block text-[15px] font-mono tracking-[0.5em] uppercase mb-4 transition-colors duration-500 ${isEngaged ? 'text-white' : 'text-white/30 group-hover:text-white/60'}`}
                        style={{
                            transitionDelay: `${activeDelay}ms`
                        }}
                    >
                        {step.id}
                    </span>
                    <p
                        className={`font-sans text-[14px] font-medium leading-relaxed transition-colors duration-500 ${isEngaged ? 'text-white/90' : 'text-white/30 group-hover:text-white/50'}`}
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
        <section id="servicos" className="relative bg-[#050505] py-16 md:py-24">
            <div className="background-container !opacity-[0.08]" />

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



            <div className="max-w-7xl mx-auto px-6 relative z-10 pt-12">
                <SectionHeader
                    title="Solicite um"
                    highlight="Serviço Especializado"
                    subtitle="Faça sua solicitação abaixo e a BW Digital conecta você a um profissional / especialista validado em até 72 horas."
                    className="mb-16 md:mb-20"
                />

                <div className="relative pt-6 pb-16 -mx-6">
                    <div className="absolute inset-x-0 -top-2 h-48 bg-white/[0.01] backdrop-blur-[2px] border-y border-white/[0.03] z-0" />
                    <div className="relative flex overflow-hidden z-10 will-change-transform">
                        <div className="flex gap-5 md:gap-10 animate-marquee py-4">
                            {[...services, ...services].map((service, idx) => (
                                <ServiceTicket key={idx} title={service.title} icon={service.icon} />
                            ))}
                        </div>
                    </div>
                    <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />
                </div>

                <div className="mt-24 mb-24">
                    <div className="text-center mb-16">
                        <h3 className="text-[13px] font-mono text-[#FF5500] tracking-[0.5em] uppercase">COMO FUNCIONA</h3>
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

                <div className="max-w-4xl mx-auto mb-24 md:mb-40 px-4">
                    <div className="rounded-xl bg-[#080808] border border-white/5 p-6 md:p-8 relative overflow-hidden backdrop-blur-sm">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 md:mb-12 pb-6 border-b border-white/5 font-mono">
                            <span className="text-xs text-gray-500 uppercase tracking-[0.3em]">STATUS EM TEMPO REAL</span>
                            <span className="text-[11px] text-[#00FF66]/40 uppercase tracking-widest">SOCKET: CONNECTED_V4</span>
                        </div>

                        <div className="relative flex flex-col gap-10">
                            <div className="absolute left-[13.5px] top-4 bottom-4 w-[1px] bg-white/5 z-0" />

                            <div className="relative z-10 flex items-center gap-6 group">
                                <div className="w-7 h-7 rounded-full bg-[#0a0a0a] border border-[#FF5500]/40 flex items-center justify-center shadow-[0_0_10px_rgba(255,85,0,0.1)]">
                                    <RefreshCw size={13} className="text-[#FF5500] animate-spin" />
                                </div>
                                <div className="flex flex-wrap items-center gap-2 md:gap-5 font-mono">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-[#FF5500] font-bold uppercase tracking-widest">PENDENTE</span>
                                        <span className="text-[9px] text-[#FF5500]/30 -mt-0.5 tracking-tighter">REQ_ID: 9812-BW</span>
                                    </div>
                                    <span className="text-white/10 hidden sm:inline">—</span>
                                    <span className="text-xs md:text-sm text-white/80 tracking-tight font-sans">Solicitação recebida no sistema</span>
                                </div>
                            </div>

                            <div className="relative z-10 flex items-center gap-6 group">
                                <div className="w-7 h-7 rounded-full bg-[#0a0a0a] border border-[#00A3FF]/40 flex items-center justify-center">
                                    <Target size={13} className="text-[#00A3FF]" />
                                </div>
                                <div className="flex flex-wrap items-center gap-2 md:gap-5 font-mono">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-[#00A3FF] font-bold uppercase tracking-widest">EM ANÁLISE</span>
                                        <span className="text-[9px] text-[#00A3FF]/30 -mt-0.5 tracking-tighter">ALGO_PROC: ACTIVE</span>
                                    </div>
                                    <span className="text-white/10 hidden sm:inline">—</span>
                                    <span className="text-xs md:text-sm text-white/50 tracking-tight font-sans">Triagem técnica e de viabilidade</span>
                                </div>
                            </div>

                            <div className="relative z-10 flex items-center gap-6 group">
                                <div className="w-7 h-7 rounded-full bg-[#0a0a0a] border border-[#00FF66]/40 flex items-center justify-center">
                                    <CheckCircle size={13} className="text-[#00FF66]" />
                                </div>
                                <div className="flex flex-wrap items-center gap-2 md:gap-5 font-mono">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-[#00FF66] font-bold uppercase tracking-widest">ACEITO</span>
                                        <span className="text-[9px] text-[#00FF66]/30 -mt-0.5 tracking-tighter">NODE: PRODUCTION_01</span>
                                    </div>
                                    <span className="text-white/10 hidden sm:inline">—</span>
                                    <span className="text-xs md:text-sm text-white font-medium tracking-tight font-sans">Especialista dedicado alocado</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto mb-24 px-4 font-sans">
                    {[
                        { icon: Shield, title: 'Sem Custo Inicial', sub: 'Análise de viabilidade gratuita' },
                        { icon: CheckCircle, title: 'Experts Validados', sub: 'Profissionais com track record' },
                        { icon: Clock, title: 'Análise de 72h', sub: 'Resposta rápida e ágil' },
                        { icon: Lock, title: 'Dados Criptografados', sub: 'Segurança total das informações' },
                    ].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left group">
                            <div className="relative mb-6">
                                <div className="absolute inset-0 rounded-full border border-[#FF5500]/40 scale-100 opacity-0 group-hover:scale-[1.6] group-hover:opacity-0 transition-all duration-700 pointer-events-none" />
                                <div className="absolute inset-0 rounded-full border border-[#FF5500]/20 scale-100 opacity-0 group-hover:scale-[1.3] group-hover:opacity-0 transition-all duration-500 delay-75 pointer-events-none" />
                                <div className="absolute -inset-1 rounded-full bg-[#FF5500]/5 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative w-9 h-9 rounded-full bg-[#0a0a0a] border border-white/5 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-[#FF5500] group-hover:bg-[#0d0d0d] group-hover:shadow-[0_0_15px_rgba(255,85,0,0.2)] z-10 overflow-hidden">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05)_0%,transparent_70%)] group-hover:bg-[radial-gradient(circle_at_50%_0%,rgba(255,85,0,0.1)_0%,transparent_70%)] transition-all duration-500" />
                                    <item.icon size={16} strokeWidth={1} className="relative z-10 text-white/30 group-hover:text-[#FF5500] transition-all duration-500" />
                                </div>
                            </div>
                            <h4 className="text-white font-bold text-sm uppercase tracking-tight mb-1">{item.title}</h4>
                            <p className="text-gray-500 text-xs font-medium leading-tight tracking-tight">{item.sub}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center animate-fade-in-up">
                    <MasterButton className="h-20 px-12 !rounded-[10px] text-[18px]">
                        INICIAR ANÁLISE DE PROJETO
                        <RocketIcon className="w-6 h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </MasterButton>

                </div>
            </div>
        </section>
    );
};

export default ServiceHub;
