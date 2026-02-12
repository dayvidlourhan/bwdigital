import { useState } from 'react';
import { Box, Activity, Calendar, Users, Instagram, UserPlus, Rocket } from 'lucide-react';



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'ATIVOS ADS', href: '#ativos' },
        { name: 'SOLICITE SERVIÇOS', href: '#solicitacao' },
        { name: 'GESTÃO DE TRÁFEGO', href: '#gestao' },
        { name: 'MERCADO EM ALTA', href: '#mercado' },
        { name: 'PREMIAÇÕES', href: '#rewards' },
        { name: 'FAQ', href: '#faq' }
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-[100] h-16 border-b border-white/[0.05] bg-background/60 backdrop-blur-xl px-6 md:px-12 flex items-center">
            {/* Lado Esquerdo: Logo */}
            <div className="flex-1 flex items-center">
                <div className="cursor-pointer group">
                    <img
                        src="/logo.png"
                        alt="BW DIGITAL"
                        className="h-8 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
            </div>

            {/* Centro: Navegação Centralizada (Desktop) */}
            <div className="hidden lg:flex items-center gap-6 text-[11px] font-bold text-gray-400">
                {navLinks.map(item => (
                    <a key={item.name} href={item.href} className="hover:text-white transition-colors relative group tracking-wider whitespace-nowrap">
                        {item.name}
                        <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-brand transition-all duration-300 group-hover:w-full"></span>
                    </a>
                ))}
            </div>

            {/* Lado Direito: Ações (Desktop) */}
            <div className="flex-1 flex items-center justify-end gap-3 md:gap-6">
                <div className="hidden sm:flex items-center gap-4">
                    <a href="https://instagram.com/bwdigital" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E4405F] transition-colors" title="Instagram BW Digital">
                        <Instagram size={20} strokeWidth={2.5} />
                    </a>
                    <a href="#" className="text-[13px] font-medium text-gray-400 hover:text-white transition-colors">
                        Entrar
                    </a>
                </div>

                <button className="h-9 px-4 md:px-5 rounded-md border border-brand/50 text-brand text-[11px] md:text-[12px] font-bold hover:bg-brand/5 transition-all">
                    Criar Conta
                </button>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden p-2 text-white transition-colors"
                >
                    {isMenuOpen ? (
                        <div className="relative w-6 h-6 flex items-center justify-center">
                            <span className="absolute w-6 h-[2px] bg-white rotate-45"></span>
                            <span className="absolute w-6 h-[2px] bg-white -rotate-45"></span>
                        </div>
                    ) : (
                        <div className="space-y-1.5">
                            <div className="w-6 h-[2px] bg-white"></div>
                            <div className="w-4 h-[2px] bg-white ml-auto"></div>
                            <div className="w-6 h-[2px] bg-white"></div>
                        </div>
                    )}
                </button>
            </div>

            {/* THE GLASS HATCH: Mobile Menu Drawer */}
            <div className={`fixed inset-0 z-[90] bg-black/98 backdrop-blur-2xl transition-all duration-500 lg:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8 px-6 text-center">
                    {navLinks.map((item, idx) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`text-2xl font-display font-black tracking-tighter text-white hover:text-brand transition-all transform duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                            style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                            {item.name}
                        </a>
                    ))}
                    <div className={`mt-8 flex flex-col gap-6 w-full max-w-xs transition-all duration-700 delay-500 ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                        <button className="h-14 rounded-lg bg-brand text-white font-bold uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(255,85,0,0.3)]">
                            Criar Conta
                        </button>
                        <a href="#" className="text-gray-400 font-bold uppercase tracking-widest text-xs">
                            Entrar na plataforma
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const MacOSChrome = ({ children }: { children: React.ReactNode }) => (
    <div className="w-full max-w-5xl mx-auto rounded-xl border border-[#333333] bg-[#0A0A0A] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7),0_0_40px_-10px_rgba(255,85,0,0.15)] overflow-hidden">
        {/* macOS Title Bar */}
        <div className="h-11 bg-[#161616] border-b border-white/[0.05] flex items-center px-4 gap-4">
            <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56] opacity-80"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] opacity-80"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F] opacity-80"></div>
            </div>
            <div className="flex-grow flex justify-center lg:mr-16">
                <div className="bg-black/40 px-4 md:px-10 py-1.5 rounded-md text-[9px] md:text-[10px] text-gray-500 font-mono border border-white/[0.03] truncate max-w-[150px] md:max-w-none">digitalbw.com/workspace</div>
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

            <div className="flex-grow flex flex-col items-center justify-center px-6 md:px-12 z-10 pt-10 md:pt-20">
                <div className="max-w-[1200px] w-full text-center mb-16 animate-fade-in-up">

                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-2.5 h-7 px-4 rounded-full border border-white/10 bg-white/[0.01] backdrop-blur-sm mb-8 md:mb-10 shadow-inner group cursor-default">
                        <div className="relative flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#FF5500] animate-ping absolute opacity-60"></div>
                            <div className="relative w-1.5 h-1.5 rounded-full bg-[#FF5500] shadow-[0_0_10px_#FF5500]"></div>
                        </div>
                        <span className="text-[9px] md:text-[11px] font-semibold text-white/90 tracking-widest uppercase font-sans">
                            PLATAFORMA 100% OPERACIONAL
                        </span>
                    </div>

                    {/* Headline - Refined Typography */}
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] md:leading-[0.98] text-white mb-8 md:mb-10 max-w-5xl mx-auto drop-shadow-sm">
                        Tudo que você precisa para <span className="text-brand inline-block relative px-1">
                            escalar
                            <div className="absolute -bottom-1 left-0 w-full h-[3px] bg-brand/30 rounded-full blur-[0.5px]"></div>
                        </span> suas operações digitais.
                    </h1>

                    {/* Subheadline */}
                    <p className="text-[15px] md:text-[19px] text-gray-400 md:text-gray-300 max-w-2xl mx-auto leading-relaxed font-semibold mb-10 md:mb-12 opacity-90">
                        Ativos publicitários, serviços estratégicos, dados de mercado e ferramentas exclusivas para quem leva performance a sério.
                    </p>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 md:gap-6 px-4 sm:px-0">
                        <button className="h-14 md:h-16 px-6 md:px-12 rounded-[8px] bg-gradient-to-b from-[#FF6010] to-[#E04800] border border-white/5 text-[14px] md:text-base font-bold text-white transition-all flex items-center justify-center gap-4 active:scale-[0.98] outline-none group shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_0_20px_-5px_rgba(255,85,0,0.5)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_0_30px_-5px_rgba(255,85,0,0.6)] hover:-translate-y-px">
                            <span className="tracking-tight uppercase">Criar Conta na Plataforma</span>
                            <UserPlus className="w-[18px] h-[18px] group-hover:scale-110 transition-transform" />
                        </button>

                        <button className="h-14 md:h-16 px-6 md:px-12 rounded-[8px] border border-white/10 bg-white/[0.03] text-[14px] md:text-base font-bold text-white hover:bg-white/5 hover:border-white/30 transition-all flex items-center justify-center gap-4 group active:scale-[0.98]">
                            <span className="tracking-tight uppercase">Solicitar um Serviço</span>
                            <Rocket className="w-[18px] h-[18px] text-white/60 group-hover:text-white transition-colors" />
                        </button>
                    </div>
                </div>

                {/* The "Golden" Visual - macOS Console */}
                <div className="w-full max-w-[1000px] mx-auto animate-fade-in-up delay-200 mb-20 lg:mb-20">
                    <MacOSChrome>
                        <DashboardContent />
                    </MacOSChrome>
                </div>
            </div>


            {/* System Status Strip (Bloomberg/Data-First Style) */}
            <div id="stats" className="w-full border-y border-white/10 bg-[#000000] z-20 relative overflow-hidden">
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
