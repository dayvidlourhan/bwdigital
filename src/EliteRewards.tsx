import { motion } from 'framer-motion';
import {
    Package,
    Briefcase,
    Coffee,
    Crown,
    Check,
    Star,
    Camera,
    ArrowRight,
    Target,
    Award
} from 'lucide-react';

const EliteRewards = () => {
    // Master CTA Style synced with StrategicSolutions.tsx
    const masterButtonStyle = "relative h-18 px-12 rounded-xl bg-gradient-to-b from-[#FF6A1A] to-[#E54800] border-t border-white/20 text-md font-sans font-black text-white uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-4 active:scale-[0.97] outline-none group shadow-[0_20px_50px_-10px_rgba(255,85,0,0.4),inset_0_1px_0_rgba(255,255,255,0.4)] hover:shadow-[0_25px_60px_-5px_rgba(255,85,0,0.5)] hover:-translate-y-1 w-full max-w-2xl mx-auto";

    return (
        <section id="rewards" className="relative bg-[#050505] py-32 md:py-48 overflow-hidden border-t border-white/[0.03]">
            {/* Background Atmosphere synced with AtivosAds.tsx */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#FF5500]/5 blur-[120px] rounded-full opacity-30" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* HEADER - Consistent with other sections */}
                <div className="mb-20 md:mb-24 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 uppercase flex items-center gap-4 justify-center flex-wrap"
                    >
                        Programa de Recompensas <span className="text-[#FF5500] drop-shadow-[0_0_15px_rgba(255,85,0,0.3)] font-display">BW</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto font-medium antialiased leading-relaxed"
                    >
                        Quanto mais você investe, maiores as recompensas exclusivas que você ganha
                    </motion.p>
                </div>

                <div className="space-y-32">

                    {/* BLOCO A: PRODUTOS EXCLUSIVOS */}
                    <div className="space-y-12">
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <h3 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tighter">
                                Produtos <span className="text-[#FF5500]">BW Exclusivos</span>
                            </h3>
                            <p className="text-zinc-500 font-sans text-sm md:text-base max-w-2xl">
                                Receba produtos premium a cada milestone
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {[
                                { title: 'Caneca BW Limitada', desc: 'Edição especial', value: 'Partir de R$ 5k', icon: Coffee, tag: 'OPERATIONAL_START' },
                                { title: 'Mochila BW Premium', desc: 'Tecido resistente', value: 'Partir de R$ 10k', icon: Package, tag: 'OPERATIONAL_START' },
                                { title: 'Bolsa BW Executiva', desc: 'Couro premium', value: 'Partir de R$ 25k', icon: Briefcase, tag: 'OPERATIONAL_START' },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className={`group relative p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-2xl border border-white/[0.08] transition-all duration-500 hover:bg-white/[0.08] hover:border-[#FF5500]/40 hover:-translate-y-2 flex flex-col`}
                                >
                                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/[0.03] border border-white/10 text-white transition-all duration-500 group-hover:scale-110 group-hover:bg-[#FF5500]/15 group-hover:border-[#FF5500]/30 group-hover:text-[#FF5500]">
                                            <item.icon size={24} strokeWidth={1.5} />
                                        </div>
                                    </div>

                                    <h4 className="text-white font-display font-bold text-xl uppercase tracking-tight mb-1 group-hover:text-[#FF5500] transition-colors">{item.title}</h4>
                                    <p className="text-zinc-600 font-sans text-[10px] uppercase font-bold tracking-widest mb-6">{item.desc}</p>

                                    <div className="flex items-end justify-between mt-auto pt-6 border-t border-white/[0.05]">
                                        <span className="text-[#FF5500] font-display font-black text-2xl md:text-3xl tracking-tighter">
                                            {item.value}
                                        </span>
                                        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#FF5500]/50 transition-colors">
                                            <Check size={14} className="text-zinc-600 group-hover:text-[#FF5500]" strokeWidth={3} />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* BLOCO A.2: NÍVEIS DE OPERADOR (PROTOCOLOS) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[
                            {
                                title: 'BRONZE',
                                icon: Target,
                                value: 'R$ 5K+',
                                sub: 'Faturamento mínimo',
                                perks: ['Caneca BW Limitada', 'Desconto 5% ativos', 'Suporte prioritário']
                            },
                            {
                                title: 'PRATA',
                                icon: Award,
                                value: 'R$ 50K+',
                                sub: 'Faturamento mínimo',
                                perks: ['Mochila BW Premium', 'Desconto 10% ativos', 'Suporte 24/7', 'Eventos exclusivos']
                            },
                            {
                                title: 'OURO',
                                icon: Crown,
                                value: 'R$ 100K+',
                                sub: 'Faturamento mínimo',
                                perks: ['Bolsa BW Executiva', 'Desconto 20% ativos', 'Consultoria VIP', 'Reconhecimento hall']
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-2xl border border-white/[0.08] transition-all duration-500 hover:bg-white/[0.08] hover:border-[#FF5500]/30 hover:-translate-y-2 flex flex-col"
                            >
                                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/[0.03] border border-white/10 text-[#FF5500] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#FF5500]/10 group-hover:border-[#FF5500]/20">
                                        <item.icon size={24} strokeWidth={1.5} />
                                    </div>
                                </div>

                                <h4 className="text-zinc-500 font-mono text-[10px] uppercase font-bold tracking-[0.2em] mb-1 group-hover:text-[#FF5500] transition-colors">{item.title}</h4>

                                <div className="text-[#FF5500] font-display font-black text-4xl md:text-5xl tracking-tighter drop-shadow-[0_0_15px_rgba(255,85,0,0.15)]">
                                    {item.value}
                                </div>
                                <div className="text-zinc-600 font-mono text-[9px] uppercase font-bold tracking-widest mb-6">{item.sub}</div>

                                <div className="space-y-2.5 pt-6 border-t border-white/[0.05]">
                                    {item.perks.map((perk, idx) => (
                                        <div key={idx} className="flex items-center gap-3 group/perk">
                                            <Check size={12} className="text-[#FF5500]/60 group-hover/perk:text-[#FF5500] transition-colors" strokeWidth={3} />
                                            <span className="text-zinc-400 font-sans text-xs md:text-sm font-medium">{perk}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto pt-6 flex justify-end">
                                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#FF5500]/30 transition-all">
                                        <Check size={14} className="text-zinc-600 group-hover:text-[#FF5500]" strokeWidth={3} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* BLOCO B: Galeria de Placas */}
                    <div className="space-y-16">
                        <div className="flex flex-col items-center text-center">
                            <h3 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tighter">Marcos Físicos de <span className="text-[#FF5500]">Faturamento</span></h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
                            {[
                                { title: 'Placa 10K BW', border: 'border-zinc-500/30', glow: '', image: '/10k-placa.webp' },
                                { title: 'Placa 50K BW', border: 'border-[#FF5500]/40', glow: '', image: '/50k-placa.webp' },
                                { title: 'Placa 100K BW', border: 'border-[#FF5500]', glow: 'shadow-[0_0_50px_rgba(255,85,0,0.2)]' },
                            ].map((plaque, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col items-center group"
                                >
                                    <div className={`w-full aspect-[4/5] bg-zinc-950 border-2 ${plaque.border} ${plaque.glow} rounded-3xl relative overflow-hidden flex items-center justify-center transition-all duration-700 group-hover:-translate-y-3`}>
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.04] to-transparent pointer-events-none z-10" />

                                        {/* Physical Corner Detail */}
                                        <div className="absolute top-5 left-5 w-2 h-2 rounded-full bg-zinc-800 border border-white/10 shadow-inner z-10" />
                                        <div className="absolute top-5 right-5 w-2 h-2 rounded-full bg-zinc-800 border border-white/10 shadow-inner z-10" />
                                        <div className="absolute bottom-5 left-5 w-2 h-2 rounded-full bg-zinc-800 border border-white/10 shadow-inner z-10" />
                                        <div className="absolute bottom-5 right-5 w-2 h-2 rounded-full bg-zinc-800 border border-white/10 shadow-inner z-10" />

                                        {plaque.image ? (
                                            <img
                                                src={plaque.image}
                                                alt={plaque.title}
                                                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                            />
                                        ) : (
                                            <div className="flex flex-col items-center gap-6 text-zinc-900 group-hover:text-[#FF5500] transition-colors duration-500">
                                                <Camera size={64} strokeWidth={1} />
                                                <span className="font-mono text-[11px] uppercase tracking-[0.4em] font-bold text-center px-8 leading-relaxed opacity-60">
                                                    STORAGE_UNIT_0{i + 1} <br />
                                                    STAGING_PHOTOGRAPHY
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-8 text-center bg-white/[0.02] border border-white/5 py-6 px-10 rounded-2xl backdrop-blur-md w-full group/label shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                                        <h4 className="text-white font-display font-bold text-xl md:text-2xl uppercase tracking-tighter mb-2 group-hover/label:text-[#FF5500] transition-colors">{plaque.title}</h4>
                                        <div className="flex items-center justify-center gap-3">
                                            <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse shadow-[0_0_10px_#FF5500]" />
                                            <span className="font-mono text-[10px] text-[#FF5500] font-black uppercase tracking-[0.2em]">Ativo de Legado</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* BLOCO C: RANKING - Pódio Unificado */}
                    <div className="relative pt-10">
                        <div className="text-center mb-20 md:mb-24">
                            <h3 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tighter">Top <span className="text-[#FF5500]">Recompensados</span> do Mês</h3>
                        </div>

                        <div className="flex flex-col md:flex-row items-end justify-center gap-4 max-w-5xl mx-auto">

                            {/* #2 Rank */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="w-full md:w-1/3 bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-t-[40px] p-10 flex flex-col items-center h-[360px] relative overflow-hidden group hover:bg-zinc-900/60 transition-all duration-500"
                            >
                                <div className="w-20 h-20 rounded-3xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-8">
                                    <Package size={32} className="text-zinc-600" />
                                </div>
                                <span className="text-zinc-400 font-display font-bold text-xl mb-2">@vagner_silver</span>
                                <span className="text-white font-display font-black text-3xl tracking-tighter">R$ 108.750</span>
                                <div className="mt-auto bg-zinc-800/80 text-zinc-500 font-mono text-2xl font-black w-20 h-10 rounded-t-xl flex items-center justify-center border-x border-t border-zinc-700">
                                    2
                                </div>
                            </motion.div>

                            {/* #1 Rank - Champion */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="w-full md:w-1/3 bg-gradient-to-b from-[#FF5500]/20 to-zinc-950 border-x-2 border-t-2 border-[#FF5500]/50 rounded-t-[50px] p-12 flex flex-col items-center h-[460px] relative z-20 shadow-[0_-30px_80px_rgba(255,85,0,0.15)] overflow-hidden md:scale-110 group border-b border-white/5"
                            >
                                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF5500]/40 to-transparent" />

                                <div className="w-28 h-28 rounded-[40px] bg-black border-2 border-[#FF5500] flex items-center justify-center mb-10 relative z-10 shadow-[0_0_50px_rgba(255,85,0,0.4)] group-hover:scale-110 transition-transform duration-700">
                                    <Star size={44} className="text-[#FF5500]" fill="currentColor" />
                                </div>
                                <span className="text-[#FF5500] font-display font-bold text-2xl mb-2 tracking-tight">@operador_alpha</span>
                                <span className="text-white font-display font-black text-5xl tracking-tighter uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
                                    R$ 152.340
                                </span>
                                <div className="mt-auto bg-[#FF5500] text-black font-display font-black text-4xl w-24 h-14 rounded-t-2xl flex items-center justify-center shadow-[0_10px_40px_rgba(255,85,0,0.4)]">
                                    1
                                </div>
                                <Crown className="absolute -top-2 -right-2 text-[#FF5500]/10 rotate-12" size={120} />
                            </motion.div>

                            {/* #3 Rank */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="w-full md:w-1/3 bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-t-[40px] p-10 flex flex-col items-center h-[300px] relative overflow-hidden group hover:bg-zinc-900/60 transition-all duration-500"
                            >
                                <div className="w-16 h-16 rounded-3xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6">
                                    <Package size={26} className="text-zinc-700" />
                                </div>
                                <span className="text-zinc-500 font-display font-bold text-lg mb-2">@trader_pro</span>
                                <span className="text-white font-display font-black text-2xl tracking-tighter">R$ 78.920</span>
                                <div className="mt-auto bg-zinc-800/80 text-zinc-600 font-mono text-xl font-black w-16 h-8 rounded-t-xl flex items-center justify-center border-x border-t border-zinc-700">
                                    3
                                </div>
                            </motion.div>
                        </div>

                        {/* MASTER CTA INTEGRATED */}
                        <div className="mt-32">
                            <button className={masterButtonStyle}>
                                COMEÇAR A ACUMULAR AGORA
                                <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EliteRewards;
