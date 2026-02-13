import { useState } from 'react';
import { Box, Activity, Calendar, Users, Instagram, Monitor, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import MasterButton from './components/ui/MasterButton';



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'ATIVOS ADS', href: '#ativos' },
        { name: 'SOLICITE SERVIÇOS', href: '#servicos' },
        { name: 'GESTÃO DE TRÁFEGO', href: '#solucoes' },
        { name: 'MERCADO EM ALTA', href: '#mercado' },
        { name: 'PREMIAÇÕES', href: '#rewards' },
        { name: 'FAQ', href: '#faq' }
    ];

    // Lock body scroll when menu is open
    if (typeof document !== 'undefined') {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    }

    return (
        <>
            {/* ═══ NAVBAR ═══ */}
            <nav className="fixed top-0 left-0 w-full z-[100] h-20 border-b border-white/[0.05] bg-background/60 backdrop-blur-xl px-4 md:px-12 flex items-center">
                {/* Left: Logo */}
                <div className="flex-1 flex items-center">
                    <div className="cursor-pointer group">
                        <img
                            src="/logo.png"
                            alt="BW DIGITAL"
                            className="h-9 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                </div>

                {/* Mobile: Instagram Icon (shifted right) */}
                <div className="flex lg:hidden items-center ml-auto -mr-1">
                    <a href="https://www.instagram.com/bw_contingencia/" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-[#E4405F] transition-colors" title="Instagram BW Digital">
                        <Instagram size={32} strokeWidth={2} />
                    </a>
                </div>

                {/* Desktop: Nav Links */}
                <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold text-gray-400">
                    {navLinks.map(item => (
                        <a key={item.name} href={item.href} className="hover:text-white transition-colors relative group tracking-wider whitespace-nowrap">
                            {item.name}
                            <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-brand transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* Right side */}
                <div className="flex-1 flex items-center justify-end gap-3 md:gap-6">
                    {/* Desktop Only: Instagram + Login */}
                    <div className="hidden lg:flex items-center gap-6">
                        <a href="https://www.instagram.com/bw_contingencia/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E4405F] transition-colors" title="Instagram BW Digital">
                            <Instagram size={28} strokeWidth={2.5} />
                        </a>
                        <a href="https://digitalbw.com.br/central" className="text-[15px] font-medium text-gray-400 hover:text-white transition-colors">
                            Entrar
                        </a>
                    </div>

                    {/* Mobile: Hamburger Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-white transition-colors relative z-[101]"
                        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                    >
                        {isMenuOpen ? (
                            <div className="relative w-7 h-7 flex items-center justify-center">
                                <span className="absolute w-7 h-[2px] bg-white rotate-45 transition-transform"></span>
                                <span className="absolute w-7 h-[2px] bg-white -rotate-45 transition-transform"></span>
                            </div>
                        ) : (
                            <div className="space-y-[6px]">
                                <div className="w-7 h-[2px] bg-white"></div>
                                <div className="w-5 h-[2px] bg-white ml-auto"></div>
                                <div className="w-7 h-[2px] bg-white"></div>
                            </div>
                        )}
                    </button>

                    {/* CTA */}
                    <a
                        href="https://digitalbw.com.br/central"
                        className="h-12 lg:h-11 px-5 lg:px-6 rounded-xl lg:rounded-md bg-[#FF5500] lg:bg-transparent border-0 lg:border lg:border-brand/50 text-white lg:text-brand text-[13px] font-bold lg:hover:bg-brand/5 transition-all flex items-center justify-center shadow-[0_0_20px_rgba(255,85,0,0.3)] lg:shadow-none active:scale-95"
                    >
                        Criar Conta
                    </a>
                </div>
            </nav>

            {/* ═══ MOBILE FULLSCREEN DRAWER ═══ */}
            <div
                className={`fixed inset-0 z-[99] lg:hidden transition-all duration-400 ${isMenuOpen ? 'visible' : 'invisible'}`}
            >
                {/* Background: box-shadow trick covers ANY gap from zoom */}
                <div
                    className={`absolute inset-0 bg-[#050505] transition-opacity duration-400 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                    style={{ boxShadow: '0 0 0 9999px #050505' }}
                />

                {/* Menu content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6 px-8 pt-24 pb-16">
                    {navLinks.map((item, idx) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`text-[22px] font-display font-black tracking-tight text-white/90 hover:text-brand transition-all duration-400 min-h-[48px] flex items-center ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
                            style={{ transitionDelay: isMenuOpen ? `${idx * 60 + 100}ms` : '0ms' }}
                        >
                            {item.name}
                        </a>
                    ))}

                    {/* Bottom CTA */}
                    <div className={`mt-8 flex flex-col gap-4 w-full max-w-[280px] transition-all duration-500 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        style={{ transitionDelay: isMenuOpen ? '500ms' : '0ms' }}
                    >
                        <a href="https://digitalbw.com.br/central" className="h-[52px] rounded-xl bg-brand text-white font-bold uppercase tracking-widest text-[13px] shadow-[0_0_25px_rgba(255,85,0,0.25)] flex items-center justify-center active:scale-95 transition-transform">
                            Acessar plataforma
                        </a>
                        <a href="https://digitalbw.com.br/central" className="text-gray-500 font-bold uppercase tracking-widest text-[11px] text-center py-2">
                            LOGIN NA PLATAFORMA
                        </a>
                    </div>
                </div>
            </div>
        </>
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
                <div className="bg-black/40 px-4 md:px-10 py-1.5 rounded-md text-[9px] md:text-[10px] text-gray-500 font-mono border border-white/[0.03] truncate max-w-[150px] md:max-w-none">digitalbw.com.br/central</div>
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

const heroStats = [
    {
        id: 'clientes',
        value: '+5.000',
        label: 'Clientes Atendidos',
        sub: 'Empresas que confiaram na BW Digital',
        icon: Users
    },
    {
        id: 'ativos',
        value: '+10.000',
        label: 'Ativos Digitais Entregues',
        sub: 'Campanhas e soluções executadas',
        icon: Box
    },
    {
        id: 'entrega',
        value: '24/7',
        label: 'Entrega Monitorada',
        sub: 'Processos contínuos sem interrupção',
        icon: Activity
    },
    {
        id: 'mercado',
        value: 'Desde 2022',
        label: 'Atuação no Mercado',
        sub: 'Experiência em cenários reais',
        icon: Calendar
    }
];

const StatCard = ({ item, isMobile = false }: { item: typeof heroStats[0], isMobile?: boolean }) => {
    const Icon = item.icon;

    if (isMobile) {
        return (
            <div className="flex items-center gap-4 px-10 whitespace-nowrap relative">
                <div className="font-display text-2xl font-bold text-[#FF5500] tracking-tighter">
                    {item.value}
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                        <Icon size={10} fill="#666" className="text-gray-500" />
                        <span className="text-[10px] font-extrabold text-white uppercase tracking-wider font-sans">
                            {item.label}
                        </span>
                    </div>
                </div>
                {/* Vertical Separator */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-white/20" />
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center py-0 px-8 relative group h-full">
            <div className="flex flex-col items-center text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-[#FF5500] tracking-tighter mb-3">
                    {item.value}
                </div>
                <div className="flex flex-col items-center gap-1.5">
                    <div className="flex items-center gap-2">
                        <Icon size={14} fill="#666" className="text-gray-500" />
                        <span className="text-[13px] font-bold text-white uppercase tracking-wider font-sans">
                            {item.label}
                        </span>
                    </div>
                    <span className="text-[11px] font-medium text-gray-500 font-sans max-w-[200px]">
                        {item.sub}
                    </span>
                </div>
            </div>
        </div>
    );
};

const HeroSection = () => {
    return (
        <section className="relative min-h-screen w-full bg-[#000000] flex flex-col pt-20 overflow-hidden">
            {/* Pure Technical Grid System (Exact Code provided) */}
            <div className="background-container"></div>

            <Navbar />

            <div className="flex-grow flex flex-col items-center justify-center px-6 md:px-12 z-10 pt-12 md:pt-20">
                <div className="max-w-[1200px] w-full text-center mb-12 animate-fade-in-up">

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
                        <MasterButton href="https://digitalbw.com.br/central" className="w-full sm:w-auto">
                            <span className="tracking-tight uppercase">Acessar plataforma</span>
                            <Monitor className="w-[18px] h-[18px] group-hover:scale-110 transition-transform" />
                        </MasterButton>

                        <a href="https://api.whatsapp.com/send/?phone=553184780515&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="h-14 md:h-16 px-6 md:px-12 rounded-[8px] border border-white/10 bg-white/[0.03] text-[14px] md:text-base font-bold text-white hover:bg-white/5 hover:border-white/30 transition-all flex items-center justify-center gap-4 group active:scale-[0.98]">
                            <span className="tracking-tight uppercase">Falar no WhatsApp</span>
                            <MessageCircle className="w-[18px] h-[18px] text-white/60 group-hover:text-white transition-colors" />
                        </a>
                    </div>
                </div>

                {/* The "Golden" Visual - macOS Console */}
                <div className="w-full max-w-[1000px] mx-auto animate-fade-in-up delay-200 mb-12 lg:mb-16">
                    <MacOSChrome>
                        <DashboardContent />
                    </MacOSChrome>
                </div>
            </div>


            {/* System Status Strip (Bloomberg/Data-First Style) */}
            <div id="stats" className="w-full border-y border-white/10 bg-[#000000] z-20 relative overflow-hidden">
                {/* Desktop Version: Grid */}
                <div className="max-w-7xl mx-auto hidden md:grid md:grid-cols-4 md:divide-x divide-white/10 h-44">
                    {heroStats.map(stat => (
                        <StatCard key={stat.id} item={stat} />
                    ))}
                </div>

                {/* Mobile Version: Marquee */}
                <div className="md:hidden py-6 relative flex overflow-hidden">
                    <motion.div
                        className="flex shrink-0"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        {/* Duplicate content for seamless loop */}
                        {[...heroStats, ...heroStats].map((stat, idx) => (
                            <StatCard key={`${stat.id}-${idx}`} item={stat} isMobile={true} />
                        ))}
                    </motion.div>

                    {/* Fades for smooth entry/exit */}
                    <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black to-transparent z-10" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
