import { useState, useEffect } from 'react';
import {
    Trophy, Gift, ShoppingBag, Crown, Target, Award,
    ArrowRight, Camera, Check, ChevronLast, Gem
} from 'lucide-react';
import MasterButton from './components/ui/MasterButton';
import SectionHeader from './components/ui/SectionHeader';

const EliteRewards = () => {
    const [activePlaque, setActivePlaque] = useState(0);
    const [activeTier, setActiveTier] = useState(0);
    const [rankPeriod, setRankPeriod] = useState<'mensal' | 'anual'>('mensal');

    const plaques = [
        { title: 'Placa 10K BW', value: '10.000 acumulado', image: '/10k-placa.webp' },
        { title: 'Placa 50K BW', value: '50.000 acumulado', image: '/50k-placa.webp' },
        { title: 'Placa 100K Elite', value: '100.000 acumulado', image: '/100k-placa.webp' },
    ];

    const tiers = [
        {
            title: 'MEMBRO',
            icon: Check,
            value: '0 - 2.999',
            perks: ['1% cashback', 'Acesso ao ranking', 'Mercado em Alta básico', 'Ferramentas BW básicas']
        },
        {
            title: 'BRONZE',
            icon: Target,
            value: '3.000 - 9.999',
            perks: ['2% cashback', 'Borda Bronze no avatar', 'Mercado em Alta avançado', 'Destaque no ranking']
        },
        {
            title: 'PRATA',
            icon: Award,
            value: '10.000+',
            perks: ['4% cashback', 'Placa Oficial 10K', 'Programa Parceiro CPA', 'Ferramentas completas']
        },
        {
            title: 'OURO',
            icon: Crown,
            value: '50.000+',
            perks: ['6% cashback', 'Placa Oficial 50K', 'Pesquisas ilimitadas', 'Grupo VIP + Suporte']
        },
        {
            title: 'ELITE',
            icon: Gem,
            value: '100.000+',
            perks: ['10% cashback', 'Placa 100K personalizada', 'Parceiro BW Premium', 'Atendimento VIP direto']
        },
    ];

    const rankingMensal = [
        { pos: 1, name: '@operador_alpha', value: 'R$ 152.340', highlight: true },
        { pos: 2, name: '@vagner_silver', value: 'R$ 108.750', highlight: false },
        { pos: 3, name: '@trader_pro', value: 'R$ 78.920', highlight: false },
        { pos: 4, name: '@lucas_digital', value: 'R$ 65.200', highlight: false },
        { pos: 5, name: '@maria_bw', value: 'R$ 58.100', highlight: false },
        { pos: 6, name: '@pedro_invest', value: 'R$ 45.890', highlight: false },
        { pos: 7, name: '@ana_growth', value: 'R$ 38.770', highlight: false },
        { pos: 8, name: '@carlos_ops', value: 'R$ 32.450', highlight: false },
        { pos: 9, name: '@julia_scale', value: 'R$ 28.200', highlight: false },
        { pos: 10, name: '@rafael_bw', value: 'R$ 21.890', highlight: false },
    ];

    const rankingAnual = [
        { pos: 1, name: '@vagner_silver', value: 'R$ 1.245.800', highlight: true },
        { pos: 2, name: '@operador_alpha', value: 'R$ 1.102.500', highlight: false },
        { pos: 3, name: '@maria_bw', value: 'R$ 892.340', highlight: false },
        { pos: 4, name: '@trader_pro', value: 'R$ 756.100', highlight: false },
        { pos: 5, name: '@lucas_digital', value: 'R$ 645.900', highlight: false },
        { pos: 6, name: '@ana_growth', value: 'R$ 534.200', highlight: false },
        { pos: 7, name: '@pedro_invest', value: 'R$ 478.600', highlight: false },
        { pos: 8, name: '@carlos_ops', value: 'R$ 392.100', highlight: false },
        { pos: 9, name: '@rafael_bw', value: 'R$ 312.450', highlight: false },
        { pos: 10, name: '@julia_scale', value: 'R$ 285.700', highlight: false },
    ];

    const ranking = rankPeriod === 'mensal' ? rankingMensal : rankingAnual;

    useEffect(() => {
        const interval = setInterval(() => {
            setActivePlaque(prev => (prev + 1) % plaques.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [plaques.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTier(prev => (prev + 1) % tiers.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [tiers.length]);

    return (
        <section id="rewards" className="relative bg-[#050505] pt-32 pb-16 overflow-hidden selection:bg-[#FF5500]/30">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <SectionHeader
                    title="Recompensas"
                    highlight="BW"
                    subtitle="Quanto mais você investe em serviços digitais, maiores as recompensas exclusivas que você ganha."
                    className="mb-24"
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
                    {/* TOP 10 RANKING */}
                    <div className="lg:col-span-8 group">
                        <div className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-2xl p-8 relative overflow-hidden transition-all duration-500 shadow-2xl hover:border-white/20 hover:bg-white/[0.04] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 relative z-10 gap-4">
                                <div>
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-xl font-display font-bold text-white tracking-tight uppercase">Top 10 Compradores {rankPeriod === 'mensal' ? 'do Mês' : 'do Ano'}</h3>
                                        <div className="flex items-center gap-2 px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                            <span className="text-[9px] font-mono font-bold text-blue-500 uppercase tracking-widest">Demo</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center bg-white/[0.03] border border-white/10 rounded-lg p-0.5 self-end sm:self-auto">
                                    {(['mensal', 'anual'] as const).map((period) => (
                                        <button
                                            key={period}
                                            onClick={() => setRankPeriod(period)}
                                            className={`px-4 py-1.5 rounded-md text-[10px] font-display font-black uppercase tracking-widest transition-all duration-300 ${rankPeriod === period
                                                ? 'bg-[#FF5500] text-white shadow-[0_5px_15px_rgba(255,85,0,0.3)]'
                                                : 'text-white/40 hover:text-white/60'
                                                }`}
                                        >
                                            {period.charAt(0).toUpperCase() + period.slice(1)}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="relative z-10 overflow-x-auto no-scrollbar">
                                <div className="grid grid-cols-12 gap-2 sm:gap-4 pb-4 mb-2 border-b border-white/[0.05] min-w-[320px] sm:min-w-0">
                                    <div className="col-span-2 text-[9px] font-sans font-bold text-white/30 uppercase tracking-widest px-1 pl-2">#</div>
                                    <div className="col-span-6 text-[9px] font-sans font-bold text-white/30 uppercase tracking-widest px-1">Operador</div>
                                    <div className="col-span-4 text-[9px] font-sans font-bold text-white/30 uppercase tracking-widest text-right px-1">Fat.</div>
                                </div>

                                <div className="space-y-0">
                                    {ranking.map((r) => (
                                        <div
                                            key={r.pos}
                                            className={`grid grid-cols-12 gap-2 items-center py-3.5 border-b border-white/[0.03] transition-all duration-300 hover:bg-white/[0.02] rounded-lg px-2 -mx-2 group/row ${r.highlight ? 'bg-[#FF5500]/[0.04]' : ''}`}
                                        >
                                            <div className="col-span-2 pl-2">
                                                {r.pos <= 3 ? (
                                                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-display font-black text-xs ${r.pos === 1 ? 'bg-[#FF5500] text-white shadow-[0_0_20px_rgba(255,85,0,0.4)]' :
                                                        r.pos === 2 ? 'bg-white/10 text-white border border-white/20' :
                                                            'bg-white/5 text-white/60 border border-white/10'
                                                        }`}>
                                                        {r.pos}
                                                    </div>
                                                ) : (
                                                    <div className="w-7 h-7 flex items-center justify-center">
                                                        <span className="text-white/30 font-mono text-xs font-bold [font-variant-numeric:tabular-nums]">{r.pos}</span>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="col-span-6 flex items-center gap-3 overflow-hidden">
                                                <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-[10px] font-bold ${r.pos === 1 ? 'bg-[#FF5500]/20 border border-[#FF5500]/40 text-[#FF5500]' :
                                                    'bg-white/5 border border-white/10 text-white/40'
                                                    }`}>
                                                    {r.name.charAt(1).toUpperCase()}
                                                </div>
                                                <span className={`font-display font-bold text-xs sm:text-sm tracking-tight truncate ${r.highlight ? 'text-[#FF5500]' : 'text-white/80 group-hover/row:text-white'} transition-colors`}>
                                                    {r.name}
                                                </span>
                                            </div>
                                            <div className="col-span-4 text-right">
                                                <span className={`font-display font-black text-xs sm:text-sm tracking-tight [font-variant-numeric:tabular-nums] ${r.highlight ? 'text-white' : 'text-white/60 group-hover/row:text-white/80'} transition-colors`}>
                                                    {r.value}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative z-10 mt-8 p-6 rounded-xl bg-[#FF5500]/[0.06] border border-[#FF5500]/15 flex flex-col md:flex-row items-center gap-6">
                                <div className="flex items-center gap-4 shrink-0 w-full md:w-auto">
                                    <div className="w-12 h-12 rounded-full bg-white/[0.06] border border-[#FF5500]/20 border-dashed flex items-center justify-center shrink-0">
                                        <span className="text-[#FF5500]/60 font-display font-bold text-lg">?</span>
                                    </div>
                                    <div>
                                        <p className="text-white font-display font-bold text-sm">Seu nome aqui</p>
                                        <p className="text-white/40 font-sans text-xs">A 1ª posição está esperando por você</p>
                                    </div>
                                </div>
                                <div className="flex-1 w-full md:mx-4">
                                    <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
                                        <div className="h-full rounded-full bg-gradient-to-r from-[#FF5500]/40 to-[#FF5500] w-[100%] animate-pulse shadow-[0_0_12px_rgba(255,85,0,0.4)]" />
                                    </div>
                                    <p className="text-white/30 font-mono text-[9px] mt-1.5 text-right">Próxima vaga disponível</p>
                                </div>
                                <MasterButton href="https://digitalbw.com.br/central" className="shrink-0 w-full md:w-auto !h-12 !px-8 !text-xs">
                                    Acessar plataforma
                                </MasterButton>
                            </div>
                        </div>
                    </div>

                    {/* SIDECARS */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        {/* Placas de Faturamento */}
                        <div className="flex-[2] bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-2xl p-8 transition-all duration-500 group/card shadow-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] relative overflow-hidden hover:border-white/20 hover:bg-white/[0.04]">
                            <div className="flex items-center gap-4 mb-4 relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/20 flex items-center justify-center group-hover/card:scale-110 group-hover/card:border-[#FF5500]/40 transition-all duration-500">
                                    <Trophy size={24} className="text-[#FF5500]" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-display font-bold text-white uppercase tracking-wider">Placas de Faturamento</h4>
                                    <p className="text-white/40 text-xs uppercase tracking-wider font-sans">Marcos de legado</p>
                                </div>
                            </div>

                            <div className="relative z-10 overflow-hidden rounded-xl mb-4 aspect-[4/5] flex items-center justify-center">
                                {plaques.map((plaque, i) => (
                                    <div
                                        key={i}
                                        className={`transition-all duration-700 absolute inset-0 ${i === activePlaque ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                                    >
                                        {plaque.image ? (
                                            <img src={plaque.image} alt={plaque.title} className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="flex flex-col items-center gap-4 text-zinc-800">
                                                <Camera size={48} strokeWidth={1} />
                                                <span className="font-mono text-[9px] uppercase tracking-[0.3em] font-bold opacity-60">Aguardando foto</span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="relative z-10 flex items-center justify-between">
                                <div>
                                    <p className="text-white font-display font-black text-2xl uppercase tracking-tight">{plaques[activePlaque].title}</p>
                                    <p className="text-[#FF5500] font-display font-black text-lg [font-variant-numeric:tabular-nums] drop-shadow-[0_0_8px_rgba(255,85,0,0.4)]">{plaques[activePlaque].value}</p>
                                </div>
                                <div className="flex gap-2">
                                    {plaques.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setActivePlaque(i)}
                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activePlaque ? 'bg-[#FF5500] shadow-[0_0_8px_#FF5500] w-6' : 'bg-white/20 hover:bg-white/40'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Patentes de Operador */}
                        <div className="flex-[1] bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-2xl p-6 transition-all duration-500 shadow-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] relative overflow-hidden hover:border-white/20 hover:bg-white/[0.04]">
                            <h4 className="text-xl font-display font-bold text-white uppercase tracking-wider mb-5 relative z-10">Patentes de Operador</h4>

                            <div className="relative z-10 h-[220px]">
                                {tiers.map((tier, i) => (
                                    <div
                                        key={i}
                                        className={`absolute inset-0 transition-all duration-500 ${i === activeTier ? 'opacity-100 translate-x-0' : i < activeTier ? 'opacity-0 -translate-x-8' : 'opacity-0 translate-x-8'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-12 h-12 rounded-lg bg-[#FF5500]/10 border border-[#FF5500]/20 flex items-center justify-center">
                                                <tier.icon size={24} className="text-[#FF5500]" />
                                            </div>
                                            <div>
                                                <p className="text-white/40 font-mono text-sm uppercase tracking-[0.2em] font-bold">{tier.title}</p>
                                                <p className="text-[#FF5500] font-display font-black text-3xl tracking-tighter">{tier.value}</p>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            {tier.perks.map((perk, idx) => (
                                                <div key={idx} className="flex items-center gap-2.5">
                                                    <Check size={14} className="text-[#FF5500]/60" strokeWidth={3} />
                                                    <span className="text-white/60 font-sans text-base font-medium">{perk}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Dots Indicator - Bottom Right */}
                            <div className="relative z-10 flex gap-2 mt-4 justify-end">
                                {tiers.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveTier(i)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeTier ? 'bg-[#FF5500] shadow-[0_0_8px_#FF5500] w-6' : 'bg-white/20 hover:bg-white/40'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Base Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { icon: Trophy, title: 'Top Compradores', sub: 'Maiores investidores do mês' },
                        { icon: Gift, title: 'Premiações Mensais', sub: 'Sorteios e bônus exclusivos' },
                        { icon: ShoppingBag, title: 'Produtos Exclusivos', sub: 'Merchandise premium BW' },
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

                <div className="mt-20 flex justify-center">
                    <MasterButton href="https://digitalbw.com.br/central" className="mx-auto">
                        Acessar plataforma
                        <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </MasterButton>
                </div>
            </div>

            <div className="relative mt-16 w-full flex items-center justify-center opacity-10 pointer-events-none">
                <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                <div className="relative px-8 bg-[#050505] flex items-center gap-3">
                    <ChevronLast size={14} className="text-[#FF5500]" />
                    <span className="text-[9px] font-mono text-white/40 tracking-[0.2em] md:tracking-[0.8em] uppercase text-center w-full">ELITE LOYALTY PROTOCOL</span>
                </div>
            </div>

            <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-[#FF5500]/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
};

export default EliteRewards;
