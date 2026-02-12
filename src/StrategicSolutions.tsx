import { useState } from 'react';
import {
    ChevronRight, Play, Check, Shield, TrendingUp,
    Bookmark, Server, Medal, Headphones, Zap,
    GraduationCap, ChevronLast
} from 'lucide-react';

const StrategicSolutions = () => {
    // Definimos o ID 2 (Gestão de Tráfego) como aba inicial para bater com a nova ordem da navbar
    const [activeTab, setActiveTab] = useState(2);

    const tabs = [
        { id: 2, label: 'GESTÃO DE TRÁFEGO PAGO' },
        { id: 0, label: 'ESTRUTURAÇÃO DE EMPRESAS' },
        { id: 1, label: 'CURSO DE CONTINGÊNCIA' }
    ];

    // MASTER CTA STYLE: Efeito Tátil Industrial (Bevel, Innershadow, Gradiente Sutil)
    const masterButtonStyle = "relative h-16 px-10 rounded-md bg-gradient-to-b from-[#FF6A1A] to-[#E54800] border-t border-white/20 text-sm font-sans font-extrabold text-white uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-4 active:scale-[0.97] outline-none group shadow-[0_10px_40px_-10px_rgba(255,85,0,0.4),inset_0_1px_0_rgba(255,255,255,0.4)] hover:shadow-[0_15px_50px_-5px_rgba(255,85,0,0.5)] hover:-translate-y-1";

    return (
        <section id="solucoes" className="relative bg-[#050505] py-40 overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Título e Subtítulo da Seção */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase tracking-tighter">
                        Três Módulos <span className="text-[#FF5500]">Poderosos</span>
                    </h2>
                    <p className="text-gray-400 font-sans text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Escolha o caminho perfeito para transformar seu negócio
                    </p>
                </div>

                {/* 1. REFINAMENTO DA NAVEGAÇÃO (Tabs como "Switch" Físico) */}
                <div className="flex justify-center mb-20 md:mb-32">
                    <div className="inline-flex p-1 bg-white/[0.02] border border-white/[0.05] rounded-full backdrop-blur-3xl shadow-2xl relative max-w-full overflow-x-auto no-scrollbar scroll-smooth px-4 sm:px-1">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 md:px-10 py-3 md:py-3.5 rounded-full text-[9px] md:text-[10px] font-display font-bold uppercase tracking-[0.2em] transition-all duration-500 relative whitespace-nowrap ${activeTab === tab.id
                                    ? 'bg-white/10 text-white shadow-[0_8px_20px_rgba(0,0,0,0.4)]'
                                    : 'text-gray-500 hover:text-gray-300'
                                    }`}
                            >
                                {tab.label}
                                {activeTab === tab.id && (
                                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#FF5500] blur-[1px] rounded-full animate-pulse" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 2. CONTEÚDO DINÂMICO */}
                <div className="relative">
                    {/* ABA 3: GESTÃO */}
                    {activeTab === 2 && (
                        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-center animate-fade-in-up">
                            <div className="order-1 lg:order-none">
                                <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-8 leading-[1.1] tracking-tighter text-white uppercase">
                                    Deixe seu tráfego <br />
                                    <span className="text-[#FF5500]">com especialistas</span>
                                </h2>
                                <p className="text-gray-400 font-sans text-base md:text-lg mb-12 lg:mb-14 max-w-xl leading-relaxed text-center lg:text-left">
                                    Nossa equipe cuida de todas as suas campanhas enquanto você foca no que realmente importa: seu negócio.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 md:gap-y-12 gap-x-10 mb-16">
                                    {[
                                        { icon: TrendingUp, title: 'Meta & Google Ads', sub: 'Gestão completa de campanhas' },
                                        { icon: Server, title: 'Relatórios Semanais', sub: 'Acompanhamento detalhado' },
                                        { icon: Zap, title: 'Otimização Contínua', sub: 'Melhorias constantes' },
                                        { icon: Headphones, title: 'Suporte Dedicado', sub: 'WhatsApp exclusivo' },
                                        { icon: Shield, title: 'Ativos Próprios', sub: 'BMs e contas da BW' },
                                        { icon: Medal, title: 'ROI 5x+', sub: 'Retorno comprovado' },
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-5 group">
                                            <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center shrink-0 group-hover:border-[#FF5500]/30 transition-all duration-500">
                                                <item.icon size={22} className="text-[#FF5500]" strokeWidth={1.5} />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-display font-bold text-xs uppercase tracking-widest mb-1">{item.title}</h4>
                                                <p className="text-gray-500 font-sans text-[11px] leading-relaxed italic">{item.sub}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="hidden lg:block">
                                    <button className={masterButtonStyle}>
                                        Conhecer os Planos
                                        <ChevronRight size={18} />
                                    </button>
                                </div>
                            </div>

                            <div className="relative group order-2 lg:order-none w-full">
                                <div className="absolute -inset-24 bg-white/5 blur-[140px] rounded-full opacity-20" />
                                <div className="relative bg-white/[0.03] backdrop-blur-3xl border border-white/10 border-t-white/25 rounded-2xl p-6 md:p-10 shadow-2xl">
                                    <h3 className="text-xl md:text-2xl font-display font-bold mb-2 text-white uppercase tracking-tight">Nossos Planos de Gestão</h3>
                                    <p className="text-gray-500 font-mono text-[9px] uppercase tracking-[0.2em] mb-10 block font-bold">Escolha o ideal para seu momento</p>

                                    <div className="space-y-4">
                                        {[
                                            {
                                                name: 'START',
                                                sub: 'Tráfego Local',
                                                price: 'Sob consulta',
                                                items: ['Até R$10.000/mês em ads', 'Facebook e Google Ads', 'Relatórios quinzenais', 'Contingência inclusa']
                                            },
                                            {
                                                name: 'PRO',
                                                sub: 'Tráfego Nacional',
                                                price: 'Sob consulta',
                                                popular: true,
                                                items: ['Até R$20.000/mês em ads', 'Meta, Google e Instagram Ads', 'Relatórios semanais', 'Criativos com testes A/B']
                                            },
                                            {
                                                name: 'SCALE',
                                                sub: 'Tráfego Internacional',
                                                price: 'Sob consulta',
                                                items: ['Investimento ilimitado', 'Meta, Google e TikTok Ads', 'Suporte 24/7', 'Criativos premium e UGC']
                                            }
                                        ].map((plan, idx) => (
                                            <div key={idx} className={`relative p-8 rounded-xl border transition-all duration-500 overflow-hidden group/plan ${plan.popular
                                                ? 'bg-[#FF5500]/5 border-[#FF5500]/20 shadow-[0_0_40px_rgba(255,85,0,0.05)]'
                                                : 'bg-white/[0.02] border-white/5 hover:border-white/10'
                                                }`}>
                                                {plan.popular && (
                                                    <span className="absolute top-0 right-0 bg-[#FF5500] text-white text-[9px] font-mono font-black px-4 py-1.5 rounded-bl-lg tracking-[0.2em] shadow-lg">
                                                        MAIS POPULAR
                                                    </span>
                                                )}

                                                <div className="flex justify-between items-start mb-5">
                                                    <div>
                                                        <h4 className="text-white font-display font-bold text-lg tracking-widest leading-none">PLANO {plan.name}</h4>
                                                        <p className="text-gray-600 text-[10px] mt-2 uppercase font-bold tracking-tighter">{plan.sub}</p>
                                                    </div>
                                                    <span className="text-gray-400 font-sans font-bold text-[10px] uppercase tracking-widest">{plan.price}</span>
                                                </div>

                                                <div className="space-y-2 mt-4">
                                                    {plan.items.map((item, iidx) => (
                                                        <div key={iidx} className="flex items-center gap-2">
                                                            <Check size={12} className="text-[#FF5500]" strokeWidth={4} />
                                                            <span className="text-gray-400 text-[11px] font-medium opacity-80">{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="order-3 lg:hidden w-full">
                                <button className={masterButtonStyle + " w-full"}>
                                    Conhecer os Planos
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* ABA 1: ESTRUTURAÇÃO */}
                    {activeTab === 0 && (
                        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-center animate-fade-in-up">
                            <div className="order-1 lg:order-none">
                                <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-8 leading-[1.1] tracking-tighter text-white uppercase">
                                    Estruture seu negócio para <br />
                                    <span className="text-[#FF5500]">escalar</span>
                                </h2>
                                <p className="text-gray-400 font-sans text-base md:text-lg mb-12 lg:mb-14 max-w-xl leading-relaxed text-center lg:text-left">
                                    Nossa mentoria vai além do básico. Ajudamos você a estruturar seu negócio do zero, definir processos, organizar finanças e criar um plano de crescimento sustentável.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 md:gap-y-12 gap-x-10 mb-16">
                                    {[
                                        { icon: Shield, title: 'Diagnóstico Completo', sub: 'Análise profunda do seu negócio' },
                                        { icon: TrendingUp, title: 'Estratégia Personalizada', sub: 'Plano sob medida para você' },
                                        { icon: Bookmark, title: 'Acompanhamento Semanal', sub: 'Calls com especialistas' },
                                        { icon: Server, title: 'Templates Exclusivos', sub: 'Documentos prontos para usar' },
                                        { icon: Medal, title: 'Certificação', sub: 'Reconhecimento de conclusão' },
                                        { icon: Headphones, title: 'Suporte Prioritário', sub: 'Atendimento VIP dedicado' },
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-5 group">
                                            <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center shrink-0 group-hover:border-[#FF5500]/30 transition-all duration-500">
                                                <item.icon size={22} className="text-[#FF5500]" strokeWidth={1.5} />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-display font-bold text-xs uppercase tracking-widest mb-1">{item.title}</h4>
                                                <p className="text-gray-500 font-sans text-[11px] leading-relaxed italic">{item.sub}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="hidden lg:block">
                                    <button className={masterButtonStyle}>
                                        Agende uma reunião gratuita
                                        <ChevronRight size={18} />
                                    </button>
                                </div>
                            </div>

                            <div className="relative group order-2 lg:order-none w-full">
                                <div className="absolute -inset-24 bg-[#FF5500]/5 blur-[140px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-1000" />
                                <div className="relative bg-white/[0.03] backdrop-blur-3xl border border-white/10 border-t-white/25 rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden group-hover:border-white/20 transition-all duration-500">
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-6 mb-12">
                                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[#FF6A1A] to-[#E54800] flex items-center justify-center shadow-[0_15px_35px_-10px_rgba(255,85,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)]">
                                                <Play size={32} className="text-white fill-white ml-1" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl md:text-2xl font-display font-bold text-white uppercase tracking-tight">Mentoria Completa</h3>
                                                <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">3 meses de transformação</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 mb-12 py-10 border-y border-white/[0.05]">
                                            <div className="text-center">
                                                <p className="text-3xl md:text-4xl font-display font-bold text-white mb-2">50+</p>
                                                <span className="text-[9px] text-gray-500 font-mono font-bold uppercase tracking-[0.2em] leading-tight block">Empresas <br /> Estruturadas</span>
                                            </div>
                                            <div className="text-center border-l border-white/[0.05]">
                                                <p className="text-3xl md:text-4xl font-display font-bold text-white mb-2">R$2M+</p>
                                                <span className="text-[9px] text-gray-500 font-mono font-bold uppercase tracking-[0.2em] leading-tight block">Faturamento <br /> Gerado</span>
                                            </div>
                                        </div>

                                        <div className="bg-[#FF5500]/5 border border-[#FF5500]/10 rounded-xl p-8 relative overflow-hidden group/bonus">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5500]/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                                            <p className="text-[#FF5500] font-sans font-black text-[10px] uppercase tracking-[0.3em] mb-3 flex items-center gap-2 relative z-10">
                                                <Medal size={14} /> BÔNUS EXCLUSIVO
                                            </p>
                                            <p className="text-gray-300 font-sans text-sm leading-relaxed relative z-10 opacity-80">
                                                Acesso vitalício à comunidade de empreendedores BW + networking exclusivo
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="order-3 lg:hidden w-full">
                                <button className={masterButtonStyle + " w-full"}>
                                    Agende uma reunião gratuita
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* ABA 2: CURSO */}
                    {activeTab === 1 && (
                        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-center animate-fade-in-up">
                            <div className="order-1 lg:order-none">
                                <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-8 leading-[1.1] tracking-tighter text-white uppercase">
                                    Domine a <span className="text-[#FF5500]">Contingência</span> no <br /> Facebook Ads
                                </h2>
                                <p className="text-gray-400 font-sans text-base md:text-lg mb-12 lg:mb-14 max-w-xl leading-relaxed text-center lg:text-left">
                                    Aprenda as estratégias que profissionais usam para manter suas contas ativas, escalar campanhas e nunca mais perder dinheiro com bloqueios.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 md:gap-y-12 gap-x-10 mb-16">
                                    {[
                                        { icon: Shield, title: 'Contingência Avançada', sub: 'Proteja seus ativos' },
                                        { icon: TrendingUp, title: 'Métricas de Escala', sub: 'Saiba quando escalar' },
                                        { icon: Zap, title: 'Gatilhos de Vendas', sub: 'Aumente conversões' },
                                        { icon: Check, title: '+20 Aulas Práticas', sub: 'Do zero ao avançado' },
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-5 group">
                                            <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center shrink-0 group-hover:border-[#FF5500]/30 transition-all duration-500">
                                                <item.icon size={22} className="text-[#FF5500]" strokeWidth={1.5} />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-display font-bold text-xs uppercase tracking-widest mb-1">{item.title}</h4>
                                                <p className="text-gray-500 font-sans text-[11px] leading-relaxed italic">{item.sub}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="hidden lg:block">
                                    <button className={masterButtonStyle}>
                                        Conhecer o Curso
                                        <ChevronRight size={18} />
                                    </button>
                                </div>
                            </div>

                            <div className="relative group order-2 lg:order-none w-full">
                                <div className="absolute -inset-24 bg-[#FF5500]/5 blur-[140px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-1000" />
                                <div className="relative bg-white/[0.03] backdrop-blur-3xl border border-white/10 border-t-white/25 rounded-2xl p-8 md:p-12 shadow-2xl">
                                    <div className="absolute top-8 right-8 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#FF5500] flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(255,85,0,0.4)]">
                                        <GraduationCap size={28} className="text-white" />
                                    </div>

                                    <div className="mb-14">
                                        <p className="text-gray-600 font-mono text-[10px] uppercase tracking-[0.2em] line-through mb-1">De R$297</p>
                                        <div className="flex items-baseline gap-3">
                                            <span className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter">R$97</span>
                                            <span className="text-gray-500 font-sans text-xs uppercase tracking-widest font-bold">/ pagamento único</span>
                                        </div>
                                    </div>

                                    <div className="space-y-6 mb-14">
                                        {[
                                            '+20 aulas práticas',
                                            'Acesso vitalício',
                                            'Grupo exclusivo no WhatsApp',
                                            'Certificado de conclusão',
                                            'Bônus: Templates de campanhas'
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-4 group/list">
                                                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/20 flex items-center justify-center shrink-0 group-hover/list:border-[#FF5500]/50 transition-all">
                                                    <Check size={14} className="text-[#FF5500]" strokeWidth={3} />
                                                </div>
                                                <span className="text-gray-300 font-sans text-sm md:text-base font-medium opacity-80">{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="hidden lg:block">
                                        <button className={masterButtonStyle + " w-full h-20 !rounded-xl"}>
                                            Quero Garantir Minha Vaga
                                            <ChevronRight size={22} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="order-3 lg:hidden w-full">
                                <button className={masterButtonStyle + " w-full h-20 !rounded-xl"}>
                                    Quero Garantir Minha Vaga
                                    <ChevronRight size={22} />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Industrial Bottom Decorative Element */}
            <div className="relative mt-40 w-full flex items-center justify-center opacity-10 pointer-events-none">
                <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                <div className="relative px-8 bg-[#050505] flex items-center gap-3">
                    <ChevronLast size={14} className="text-[#FF5500]" />
                    <span className="text-[9px] font-mono text-white/40 tracking-[0.2em] md:tracking-[0.8em] uppercase text-center w-full">Structural Integrity Protocol</span>
                </div>
            </div>
        </section>
    );
};

export default StrategicSolutions;
