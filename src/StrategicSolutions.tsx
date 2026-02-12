import { useState } from 'react';
import {
    ChevronRight, Play, Check, Medal, GraduationCap
} from 'lucide-react';
import { SOLUTIONS_DATA } from './data/solutions';
import MasterButton from './components/ui/MasterButton';
import FeatureItem from './components/ui/FeatureItem';
import SectionHeader from './components/ui/SectionHeader';

const StrategicSolutions = () => {
    const [activeTab, setActiveTab] = useState(2);

    const activeData = SOLUTIONS_DATA.find(s => s.id === activeTab) || SOLUTIONS_DATA[0];

    return (
        <section id="solucoes" className="relative bg-[#050505] py-16 md:py-24 overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <SectionHeader
                    title="Três Módulos"
                    highlight="Poderosos"
                    subtitle="Escolha o caminho perfeito para transformar seu negócio"
                />

                {/* Navigation Tabs */}
                <div className="flex justify-center mb-20 md:mb-32">
                    {/* Mobile: Vertical stacked tabs */}
                    <div className="flex flex-col gap-2 w-full max-w-sm md:hidden">
                        {SOLUTIONS_DATA.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative px-5 py-3.5 rounded-xl text-[11px] font-display font-bold uppercase tracking-[0.15em] transition-all duration-400 text-left min-h-[48px] flex items-center ${activeTab === tab.id
                                    ? 'bg-white/10 text-white border border-white/10'
                                    : 'bg-white/[0.02] text-gray-500 border border-transparent hover:bg-white/[0.04] hover:text-gray-300'
                                    }`}
                            >
                                {activeTab === tab.id && (
                                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-[#FF5500] rounded-r-full" />
                                )}
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Desktop: Horizontal pill tabs */}
                    <div className="hidden md:inline-flex p-1 bg-white/[0.02] border border-white/[0.05] rounded-full backdrop-blur-3xl shadow-2xl relative">
                        {SOLUTIONS_DATA.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-10 py-3.5 rounded-full text-[10px] font-display font-bold uppercase tracking-[0.2em] transition-all duration-500 relative whitespace-nowrap ${activeTab === tab.id
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

                {/* Dynamic Content */}
                <div className="relative">
                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-center animate-fade-in-up">
                        <div className="order-1 lg:order-none">
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-8 leading-[1.1] tracking-tighter text-white uppercase">
                                {activeData.title} <br />
                                <span className="text-[#FF5500]">{activeData.highlight}</span>
                            </h2>
                            <p className="text-gray-400 font-sans text-base md:text-lg mb-12 lg:mb-14 max-w-xl leading-relaxed text-center lg:text-left">
                                {activeData.description}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 md:gap-y-12 gap-x-10 mb-16">
                                {activeData.features.map((item, idx) => (
                                    <FeatureItem key={idx} {...item} />
                                ))}
                            </div>

                            <div className="hidden lg:block">
                                <MasterButton>
                                    {activeData.ctaText}
                                    <ChevronRight size={18} />
                                </MasterButton>
                            </div>
                        </div>

                        <div className="relative group order-2 lg:order-none w-full">
                            <div className="absolute -inset-24 bg-white/5 blur-[140px] rounded-full opacity-20" />
                            <div className="relative bg-white/[0.03] backdrop-blur-3xl border border-white/10 border-t-white/25 rounded-2xl p-6 md:p-10 shadow-2xl overflow-hidden">
                                {activeData.rightContent.type === 'pricing' && (
                                    <>
                                        <h3 className="text-xl md:text-2xl font-display font-bold mb-2 text-white uppercase tracking-tight">{activeData.rightContent.title}</h3>
                                        <p className="text-gray-500 font-mono text-[9px] uppercase tracking-[0.2em] mb-10 block font-bold">{activeData.rightContent.subtitle}</p>

                                        <div className="space-y-4">
                                            {activeData.rightContent.plans?.map((plan, idx) => (
                                                <div key={idx} className={`relative p-6 rounded-xl border transition-all duration-500 group/plan ${plan.popular
                                                    ? 'bg-[#FF5500]/5 border-[#FF5500]/20 shadow-[0_0_40px_rgba(255,85,0,0.05)]'
                                                    : 'bg-white/[0.02] border-white/5 hover:border-white/10'
                                                    }`}>
                                                    {plan.popular && (
                                                        <span className="absolute top-0 right-0 bg-[#FF5500] text-white text-[9px] font-mono font-black px-4 py-1.5 rounded-bl-lg tracking-[0.2em] shadow-lg">
                                                            MAIS POPULAR
                                                        </span>
                                                    )}
                                                    <div className="flex justify-between items-start mb-4">
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
                                    </>
                                )}

                                {activeData.rightContent.type === 'mentorship' && (
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-6 mb-12">
                                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[#FF6A1A] to-[#E54800] flex items-center justify-center shadow-[0_15px_35px_-10px_rgba(255,85,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)]">
                                                <Play size={32} className="text-white fill-white ml-1" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl md:text-2xl font-display font-bold text-white uppercase tracking-tight">{activeData.rightContent.title}</h3>
                                                <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">{activeData.rightContent.subtitle}</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 mb-12 py-10 border-y border-white/[0.05]">
                                            {activeData.rightContent.stats?.map((stat, idx) => (
                                                <div key={idx} className={`text-center ${idx > 0 ? 'border-l border-white/[0.05]' : ''}`}>
                                                    <p className="text-3xl md:text-4xl font-display font-bold text-white mb-2">{stat.value}</p>
                                                    <span className="text-[9px] text-gray-500 font-mono font-bold uppercase tracking-[0.2em] leading-tight block whitespace-pre-line">{stat.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="bg-[#FF5500]/5 border border-[#FF5500]/10 rounded-xl p-8 relative overflow-hidden group/bonus">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5500]/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                                            <p className="text-[#FF5500] font-sans font-black text-[10px] uppercase tracking-[0.3em] mb-3 flex items-center gap-2 relative z-10">
                                                <Medal size={14} /> BÔNUS EXCLUSIVO
                                            </p>
                                            <p className="text-gray-300 font-sans text-sm leading-relaxed relative z-10 opacity-80">
                                                {activeData.rightContent.bonus}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {activeData.rightContent.type === 'course' && (
                                    <div className="p-4">
                                        <div className="absolute top-8 right-8 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#FF5500] flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(255,85,0,0.4)]">
                                            <GraduationCap size={28} className="text-white" />
                                        </div>
                                        <div className="mb-14">
                                            <p className="text-gray-600 font-mono text-[10px] uppercase tracking-[0.2em] line-through mb-1">{activeData.rightContent.oldPrice}</p>
                                            <div className="flex items-baseline gap-3">
                                                <span className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter">{activeData.rightContent.price}</span>
                                                <span className="text-gray-500 font-sans text-xs uppercase tracking-widest font-bold">/ pagamento único</span>
                                            </div>
                                        </div>
                                        <div className="space-y-6 mb-14">
                                            {activeData.rightContent.items?.map((item, idx) => (
                                                <div key={idx} className="flex items-center gap-4 group/list">
                                                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/20 flex items-center justify-center shrink-0 group-hover/list:border-[#FF5500]/50 transition-all">
                                                        <Check size={14} className="text-[#FF5500]" strokeWidth={3} />
                                                    </div>
                                                    <span className="text-gray-300 font-sans text-sm md:text-base font-medium opacity-80">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <MasterButton className="w-full h-20 !rounded-xl hidden lg:flex">
                                            Quero Garantir Minha Vaga
                                            <ChevronRight size={22} />
                                        </MasterButton>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="order-3 lg:hidden w-full">
                            <MasterButton className="w-full">
                                {activeTab === 1 ? 'Quero Garantir Minha Vaga' : activeData.ctaText}
                                <ChevronRight size={18} />
                            </MasterButton>
                        </div>
                    </div>
                </div>
            </div>

            {/* Industrial Bottom Decorative Element */}

        </section>
    );
};

export default StrategicSolutions;
