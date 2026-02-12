import { Box, Activity, Calendar, Users, Instagram, Monitor, MessageCircle } from 'lucide-react';



const Navbar = () => (
    <nav className="fixed top-0 left-0 w-full z-50 h-16 border-b border-white/[0.05] bg-background/60 backdrop-blur-xl px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group">
            <img
                src="/logo.png"
                alt="BW DIGITAL"
                className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
        </div>

        <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-gray-400">
            {['Ativos', 'Serviços', 'Ferramentas', 'Sobre'].map(item => (
                <a key={item} href="#" className="hover:text-white transition-colors relative group">
                    {item}
                    <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-brand transition-all duration-300 group-hover:w-full"></span>
                </a>
            ))}
        </div>

        <div className="flex items-center gap-6">
            <a href="https://instagram.com/bwdigital" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E4405F] transition-colors" title="Instagram BW Digital">
                <Instagram size={21} strokeWidth={2.5} />
            </a>
            <a href="#" className="text-[13px] font-medium text-gray-400 hover:text-white transition-colors">
                Entrar
            </a>
            <button className="h-9 px-5 rounded-md border border-brand/50 text-brand text-[12px] font-bold hover:bg-brand/5 transition-all">
                Criar Conta
            </button>
        </div>
    </nav>
);

const MacOSChrome = ({ children }: { children: React.ReactNode }) => (
    <div className="w-full max-w-5xl mx-auto rounded-xl border border-[#333333] bg-[#0A0A0A] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7),0_0_40px_-10px_rgba(255,85,0,0.15)] overflow-hidden">
        {/* macOS Title Bar */}
        <div className="h-11 bg-[#161616] border-b border-white/[0.05] flex items-center px-4 gap-4">
            <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56] opacity-80"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] opacity-80"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F] opacity-80"></div>
            </div>
            <div className="flex-grow flex justify-center mr-16">
                <div className="bg-black/40 px-10 py-1.5 rounded-md text-[10px] text-gray-500 font-mono border border-white/[0.03]">digitalbw.com/workspace</div>
            </div>
        </div>
        {children}
    </div>
);

const DashboardContent = () => (
    <div className="w-full h-full bg-[#070707] overflow-hidden flex items-center justify-center">
        <img
            src="/central-operacional.png"
            alt="Central Operacional BW"
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
        />
    </div>
);

const HeroSection = () => {
    return (
        <section className="relative min-h-screen w-full bg-[#000000] flex flex-col pt-16 overflow-hidden">
            {/* Pure Technical Grid System (Exact Code provided) */}
            <div className="background-container"></div>

            <Navbar />

            <div className="flex-grow flex flex-col items-center justify-center px-4 md:px-12 z-10 pt-10">
                <div className="max-w-[1200px] w-full text-center mb-16 animate-fade-in-up">

                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-2.5 h-7 px-4 rounded-full border border-white/10 bg-white/[0.01] backdrop-blur-sm mb-10 shadow-inner group cursor-default">
                        <div className="relative flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#FF5500] animate-ping absolute opacity-60"></div>
                            <div className="relative w-1.5 h-1.5 rounded-full bg-[#FF5500] shadow-[0_0_10px_#FF5500]"></div>
                        </div>
                        <span className="text-[11px] font-semibold text-white/90 tracking-widest uppercase font-sans">
                            PLATAFORMA 100% OPERACIONAL
                        </span>
                    </div>

                    {/* Headline - Refined Typography */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.98] text-white mb-10 max-w-5xl mx-auto drop-shadow-sm">
                        Tudo que você precisa para <span className="text-brand inline-block relative px-1">
                            escalar
                            <div className="absolute -bottom-1 left-0 w-full h-[3px] bg-brand/30 rounded-full blur-[0.5px]"></div>
                        </span> suas operações digitais.
                    </h1>

                    {/* Subheadline */}
                    <p className="text-base md:text-[19px] text-gray-300 max-w-2xl mx-auto leading-relaxed font-semibold mb-12 opacity-90">
                        Ativos publicitários, serviços estratégicos, dados de mercado e ferramentas exclusivas para quem leva performance a sério.
                    </p>

                    {/* Finalized Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                        <button className="h-12 px-8 rounded-[8px] bg-gradient-to-b from-[#FF6010] to-[#E04800] border border-white/5 text-sm font-semibold text-white transition-all flex items-center gap-3 active:scale-[0.98] outline-none group shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_0_20px_-5px_rgba(255,85,0,0.5)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_0_30px_-5px_rgba(255,85,0,0.6)] hover:-translate-y-px">
                            <span>Acessar plataforma</span>
                            <Monitor className="w-[14px] h-[14px] group-hover:scale-110 transition-transform" />
                        </button>

                        <button className="h-12 px-8 rounded-[8px] border border-white/10 bg-white/[0.03] text-sm font-semibold text-white hover:bg-white/5 hover:border-white/30 transition-all flex items-center gap-3 group active:scale-[0.98]">
                            <span>Falar no WhatsApp</span>
                            <MessageCircle className="w-[14px] h-[14px] text-white/60 group-hover:text-white transition-colors" />
                        </button>
                    </div>
                </div>

                {/* The "Golden" Visual - macOS Console */}
                <div className="w-full max-w-[1000px] mx-auto animate-fade-in-up delay-200 perspective-1000 mb-20">
                    <MacOSChrome>
                        <DashboardContent />
                    </MacOSChrome>
                </div>
            </div>

            {/* System Status Strip (Bloomberg/Data-First Style) */}
            <div className="w-full border-y border-white/10 bg-[#000000] z-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-4 md:divide-x divide-white/10 h-auto md:h-44">
                    {/* Item 01: Clientes */}
                    <div className="flex flex-col items-center justify-center py-12 md:py-0 px-8 relative group">
                        <div className="flex flex-col items-center text-center">
                            <div className="font-display text-4xl md:text-5xl font-bold text-[#FF5500] tracking-tighter mb-3">
                                +5.000
                            </div>
                            <div className="flex flex-col items-center gap-1.5">
                                <div className="flex items-center gap-2">
                                    <Users size={14} fill="#666" className="text-gray-500" />
                                    <span className="text-[13px] font-bold text-white uppercase tracking-wider font-sans">
                                        Clientes Atendidos
                                    </span>
                                </div>
                                <span className="text-[11px] font-medium text-gray-500 font-sans max-w-[200px]">
                                    Empresas que confiaram na BW Digital
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Item 02: Ativos */}
                    <div className="flex flex-col items-center justify-center py-12 md:py-0 px-8 border-y border-white/10 md:border-y-0 relative group">
                        <div className="flex flex-col items-center text-center">
                            <div className="font-display text-4xl md:text-5xl font-bold text-[#FF5500] tracking-tighter mb-3">
                                +10.000
                            </div>
                            <div className="flex flex-col items-center gap-1.5">
                                <div className="flex items-center gap-2">
                                    <Box size={14} fill="#666" className="text-gray-500" />
                                    <span className="text-[13px] font-bold text-white uppercase tracking-wider font-sans">
                                        Ativos Digitais Entregues
                                    </span>
                                </div>
                                <span className="text-[11px] font-medium text-gray-500 font-sans max-w-[200px]">
                                    Campanhas, estruturas e soluções executadas
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Item 03: Entrega */}
                    <div className="flex flex-col items-center justify-center py-12 md:py-0 px-8 border-b border-white/10 md:border-b-0 relative group">
                        <div className="flex flex-col items-center text-center">
                            <div className="font-display text-4xl md:text-5xl font-bold text-[#FF5500] tracking-tighter mb-3 flex items-center">
                                24<span className="ml-[9px] mr-[15px] opacity-90">/</span>7
                            </div>
                            <div className="flex flex-col items-center gap-1.5">
                                <div className="relative">
                                    {/* Icone em posição absoluta para não 'empurrar' o texto centralizado */}
                                    <div className="absolute left-[6px] top-0 mt-[3px]">
                                        <Activity size={14} fill="#666" className="text-gray-500" />
                                    </div>
                                    <span className="text-[13px] font-bold text-white uppercase tracking-wider font-sans block text-center">
                                        Entrega Automatizada e Monitorada
                                    </span>
                                </div>
                                <span className="text-[11px] font-medium text-gray-500 font-sans max-w-[200px]">
                                    Processos contínuos sem interrupção
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Item 04: Experiência */}
                    <div className="flex flex-col items-center justify-center py-12 md:py-0 px-8 relative group">
                        <div className="flex flex-col items-center text-center">
                            <div className="font-display text-4xl md:text-5xl font-bold text-[#FF5500] tracking-tighter mb-3">
                                Desde 2022
                            </div>
                            <div className="flex flex-col items-center gap-1.5">
                                <div className="flex items-center gap-2">
                                    <Calendar size={14} fill="#666" className="text-gray-500" />
                                    <span className="text-[13px] font-bold text-white uppercase tracking-wider font-sans">
                                        Atuação no Mercado Digital
                                    </span>
                                </div>
                                <span className="text-[11px] font-medium text-gray-500 font-sans max-w-[200px]">
                                    Experiência aplicada em cenários reais
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
