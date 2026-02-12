import { TrendingUp, Bot, Search, Swords, Trophy, Monitor, ArrowRight } from 'lucide-react';
import SectionHeader from './components/ui/SectionHeader';
import MasterButton from './components/ui/MasterButton';

const MarketTrends = () => {
    return (
        <section id="mercado" className="relative bg-[#050505] py-16 md:py-24 overflow-hidden selection:bg-[#FF5500]/30">
            {/* Seamless Transition Overlays */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-transparent pointer-events-none z-[11]" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent pointer-events-none z-[11]" />

            {/* Background Decorative Element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <SectionHeader
                    title="Mercado em"
                    highlight="Alta"
                    subtitle="Análises avançadas com base em dados reais e Inteligência Artificial."
                    className="mb-24"
                />

                {/* Bento Grid Structure */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">

                    {/* Card Principal (Esquerda - 8/12) */}
                    <div className="lg:col-span-8 group">
                        <div className="h-full bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-2xl p-8 relative overflow-hidden transition-all duration-500 shadow-2xl hover:border-white/20 hover:bg-white/[0.04] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
                            <div className="flex justify-between items-start mb-12 relative z-10">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-xl font-display font-bold text-white tracking-tight uppercase">Tendências em Tempo Real</h3>
                                        <div className="flex items-center gap-2 px-2 py-0.5 rounded-md bg-green-500/10 border border-green-500/20">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                            <span className="text-[9px] font-mono font-bold text-green-500 uppercase tracking-widest">Live</span>
                                        </div>
                                    </div>
                                    <p className="text-white/40 font-sans text-[10px] uppercase tracking-wider">Monitoramento global de fluxos de capital</p>
                                </div>

                                <div className="bg-[#FF5500] text-white text-[10px] font-display font-black px-3 py-1 rounded-md shadow-[0_5px_15px_rgba(255,85,0,0.3)]">
                                    +23.5%
                                </div>
                            </div>

                            {/* Technical Chart Representation */}
                            <div className="relative h-72 mb-12 w-full z-10">
                                {/* Chart Grid Lines (Nível Técnico) */}
                                <div className="absolute inset-0 flex flex-col justify-between">
                                    {[...Array(6)].map((_, i) => (
                                        <div key={i} className="w-full h-px bg-white/[0.03]" />
                                    ))}
                                </div>
                                <div className="absolute inset-0 flex justify-between px-2">
                                    {[...Array(12)].map((_, i) => (
                                        <div key={i} className="h-full w-px bg-white/[0.03]" />
                                    ))}
                                </div>

                                {/* Vertical Tooltip Marker / Cursor Line */}
                                <div className="absolute left-[93.75%] top-0 h-full w-px border-l border-dashed border-white/20 pointer-events-none">
                                    <div className="absolute -top-1 -left-1 w-2 h-2 rounded-full border border-white/20" />
                                </div>

                                {/* SVG Chart */}
                                <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 800 200">
                                    <defs>
                                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#FF5500" stopOpacity="0.25" />
                                            <stop offset="100%" stopColor="#FF5500" stopOpacity="0" />
                                        </linearGradient>
                                        <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                                            <feGaussianBlur stdDeviation="4" result="blur" />
                                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                        </filter>
                                    </defs>

                                    {/* Area Fill */}
                                    <path
                                        d="M0 160 L50 145 L100 155 L150 120 L200 130 L250 95 L300 105 L350 65 L400 75 L450 35 L500 50 L550 15 L600 25 L650 10 L700 15 L750 0 L800 5 V200 H0 Z"
                                        fill="url(#chartGradient)"
                                    />

                                    {/* Line Path */}
                                    <path
                                        d="M0 160 L50 145 L100 155 L150 120 L200 130 L250 95 L300 105 L350 65 L400 75 L450 35 L500 50 L550 15 L600 25 L650 10 L700 15 L750 0 L800 5"
                                        fill="none"
                                        stroke="#FF5500"
                                        strokeWidth="2.5"
                                        filter="url(#neonGlow)"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                                {/* Analysis Point (Interactive simulation) */}
                                <div className="absolute top-[0%] left-[93.75%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 z-20">
                                    <div className="absolute inset-0 rounded-full bg-[#FF5500] animate-ping opacity-40" />
                                    <div className="absolute inset-1 rounded-full bg-[#FF5500] shadow-[0_0_15px_#FF5500]" />
                                </div>
                            </div>

                            {/* Stats Footer (Responsive) */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 pt-10 border-t border-white/[0.05] relative z-10">
                                <div className="[font-variant-numeric:tabular-nums] flex flex-col items-center sm:items-start text-center sm:text-left">
                                    <p className="text-[10px] font-sans text-white/40 uppercase tracking-[0.2em] mb-2">Volume 24h</p>
                                    <p className="text-2xl font-display font-bold text-white tracking-tight">R$ 2.4M</p>
                                </div>
                                <div className="border-t sm:border-t-0 sm:border-l border-white/[0.05] pt-8 sm:pt-0 sm:pl-6 [font-variant-numeric:tabular-nums] flex flex-col items-center sm:items-start text-center sm:text-left">
                                    <p className="text-[10px] font-sans text-white/40 uppercase tracking-[0.2em] mb-2">Transações</p>
                                    <p className="text-2xl font-display font-bold text-white tracking-tight">12.847</p>
                                </div>
                                <div className="border-t sm:border-t-0 sm:border-l border-white/[0.05] pt-8 sm:pt-0 sm:pl-6 [font-variant-numeric:tabular-nums] flex flex-col items-center sm:items-start text-center sm:text-left">
                                    <p className="text-[10px] font-sans text-white/40 uppercase tracking-[0.2em] mb-2">Crescimento</p>
                                    <p className="text-2xl font-display font-bold text-green-500 tracking-tight">+156%</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coluna da Direita (4/12) */}
                    <div className="lg:col-span-4 flex flex-col gap-6">

                        {/* Card Superior (IA Insights) */}
                        <div className="flex-1 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-2xl p-8 transition-all duration-500 group/card shadow-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] relative overflow-hidden hover:border-white/20 hover:bg-white/[0.04]">
                            <div className="flex items-center gap-4 mb-10 relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/20 flex items-center justify-center group-hover/card:scale-110 group-hover/card:border-[#FF5500]/40 transition-all duration-500">
                                    <Bot size={24} className="text-[#FF5500]" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider">IA Insights</h4>
                                    <p className="text-white/40 text-[10px] uppercase tracking-wider font-sans">Análise preditiva</p>
                                </div>
                            </div>

                            <div className="space-y-5 relative z-10">
                                <div className="flex justify-between items-center py-3 border-b border-white/[0.05] [font-variant-numeric:tabular-nums]">
                                    <span className="text-[10px] text-white/40 uppercase tracking-wider font-sans">Nicho promissor</span>
                                    <span className="text-xs text-white font-display font-black uppercase tracking-widest">Saúde</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-white/[0.05] [font-variant-numeric:tabular-nums]">
                                    <span className="text-[10px] text-white/40 uppercase tracking-wider font-sans">Tendência</span>
                                    <div className="flex items-center gap-2">
                                        <TrendingUp size={12} className="text-green-500" />
                                        <span className="text-xs text-green-500 font-display font-black uppercase tracking-widest">↑ Alta</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center py-3 [font-variant-numeric:tabular-nums]">
                                    <span className="text-[10px] text-white/40 uppercase tracking-wider font-sans">Confiança</span>
                                    <span className="text-xs text-white font-display font-black">94%</span>
                                </div>
                            </div>
                        </div>

                        {/* Card Inferior (Plataformas) - Visual Cyberpunk */}
                        <div className="flex-1 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-2xl p-8 transition-all duration-500 shadow-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] relative overflow-hidden hover:border-white/20 hover:bg-white/[0.04]">
                            <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider mb-8 relative z-10">Plataformas Monitoradas</h4>

                            <div className="space-y-8 relative z-10">
                                {/* Tip: Progress Segmented Visual */}
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/40">
                                        <span>Tik Tok</span>
                                        <span className="text-white font-mono [font-variant-numeric:tabular-nums]">80%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden flex gap-[2px]">
                                        <div className="h-full bg-[#FF5500] rounded-sm w-[80%] shadow-[4px_0_10px_rgba(255,85,0,0.8)] relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/40">
                                        <span>Meta</span>
                                        <span className="text-white font-mono [font-variant-numeric:tabular-nums]">64%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden flex gap-[2px]">
                                        <div className="h-full bg-white/40 rounded-sm w-[64%] relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/40">
                                        <span>Google</span>
                                        <span className="text-white font-mono [font-variant-numeric:tabular-nums]">42%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden flex gap-[2px]">
                                        <div className="h-full bg-gray-600 rounded-sm w-[42%] relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Base Grid - 4 Cards Pequenos (Grid Tático) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: Search, title: 'Análise de Domínio', sub: 'Tráfego, SEO e redes' },
                        { icon: Swords, title: 'Comparação', sub: 'Análise de concorrentes' },
                        { icon: Trophy, title: 'Top Produtos', sub: 'Maiores performers' },
                        { icon: Monitor, title: 'Anúncios Ativos', sub: 'Em tempo real' },
                    ].map((card, idx) => (
                        <div key={idx} className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04] group/mini relative overflow-hidden shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
                            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center mb-6 group-hover/mini:border-[#FF5500]/30 transition-all duration-500 relative z-10">
                                <card.icon size={20} className="text-white/60 group-hover/mini:text-[#FF5500] transition-colors" />
                            </div>

                            <h5 className="text-[11px] font-display font-black text-white/80 group-hover/mini:text-white uppercase tracking-widest mb-2 transition-colors relative z-10 leading-none">{card.title}</h5>
                            <p className="text-[10px] text-white/40 font-sans leading-relaxed group-hover/mini:text-white/60 transition-colors relative z-10">{card.sub}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex justify-center md:hidden">
                    <MasterButton href="https://digitalbw.com.br/central" className="w-full">
                        Explorar Ferramentas
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </MasterButton>
                </div>

            </div>

            {/* Decorative Gradient Blob */}
            <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-[#FF5500]/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
};

export default MarketTrends;
