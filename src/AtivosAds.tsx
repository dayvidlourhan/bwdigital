import { Lock as LockIcon } from 'lucide-react';
import { MetaIcon, GoogleIcon, TikTokIcon, ShopifyIcon, DatabaseIcon, ArrowUpRight, FeatureCheck } from './AdsIcons';

const adsCards = [
    {
        id: 'meta',
        icon: <MetaIcon />,
        title: 'Meta Ads',
        desc: 'Ambientes e ativos para operações no Facebook e Instagram Ads.',
        features: ['Business Managers', 'Ativos comerciais', 'Páginas para anúncios']
    },
    {
        id: 'google',
        icon: <GoogleIcon />,
        title: 'Google Ads',
        desc: 'Contas e estruturas para campanhas na rede Google.',
        features: ['Estruturas comerciais validadas', 'Configurações personalizadas', 'Ativos para operação publicitária']
    },
    {
        id: 'tiktok',
        icon: <TikTokIcon />,
        title: 'TikTok Ads',
        desc: 'Ativos comerciais para operações na plataforma que mais cresce.',
        features: ['Ativos comerciais', 'Estruturas com histórico operacional', 'Configurações avançadas']
    },
    {
        id: 'shopify',
        icon: <ShopifyIcon />,
        title: 'Shopify',
        desc: 'Lojas e estruturas completas para e-commerces.',
        features: ['Lojas prontas', 'Temas premium', 'Apps inclusos']
    },
    {
        id: 'structures',
        icon: <DatabaseIcon />,
        title: 'Estrutura Técnica',
        desc: 'Infraestrutura profissional para segurança, estabilidade e performance.',
        features: ['Camada de rede com foco em segurança e estabilidade', 'Gestão organizada de perfis e acessos', 'Ambientes isolados para operação contínua']
    },
];

const AtivosAds = () => {
    return (
        <section id="ativos" className="relative bg-[#050505] py-24 md:pt-48 md:pb-24 px-6 md:px-12 overflow-visible border-t border-white/[0.03]">
            <div className="max-w-7xl mx-auto overflow-visible relative z-10">
                <div className="mb-20 md:mb-24 text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 uppercase flex flex-col md:flex-row items-center gap-2 md:gap-4 justify-center">
                        ATIVOS ADS <span className="text-[#FF5500] drop-shadow-[0_0_15px_rgba(255,85,0,0.3)] font-display">DE ALTA PERFORMANCE</span>
                    </h2>
                    <p className="text-gray-300 text-base md:text-xl max-w-3xl mx-auto font-medium antialiased leading-relaxed">
                        Soluções para operações comerciais digitais, estruturadas para escalar com segurança, estabilidade e eficiência.
                    </p>
                </div>

                <div className="overflow-visible p-4 md:p-12 -m-4 md:-m-12">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-7 overflow-visible">
                        {adsCards.map((card) => (
                            <div
                                key={card.id}
                                className="group relative w-full"
                            >
                                <div className="relative h-[550px] p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-2xl border border-white/[0.08] transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-[#FF5500]/40 group-hover:-translate-y-2 overflow-hidden flex flex-col hover:shadow-[0_20px_50px_rgba(255,85,0,0.15)] transform-gpu">
                                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative mb-8 flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 text-white transition-all duration-500 group-hover:scale-110 group-hover:bg-[#FF5500]/15 group-hover:border-[#FF5500]/30 group-hover:text-[#FF5500]">
                                        <div className="absolute inset-0 bg-[#FF5500]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="relative z-10 scale-[0.8]">
                                            {card.icon}
                                        </div>
                                    </div>
                                    <div className="mb-6 flex-shrink-0">
                                        <h3 className="text-lg md:text-xl font-bold text-white mb-4 tracking-tight group-hover:text-[#FF5500] transition-colors duration-300 font-display uppercase h-12 flex items-start leading-tight pt-0">
                                            {card.title}
                                        </h3>
                                        <div className="h-[90px] overflow-hidden">
                                            <p className="text-gray-400 text-[13px] leading-relaxed font-medium group-hover:text-white transition-colors duration-300 font-sans">
                                                {card.desc}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-4 pt-8 border-t border-white/[0.05]">
                                        {card.features.map((feat, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <div className="mt-1 flex-shrink-0">
                                                    <FeatureCheck />
                                                </div>
                                                <span className="text-[11px] font-bold text-white/40 tracking-wider uppercase group-hover:text-white/60 transition-colors leading-tight">
                                                    {feat}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1">
                                        <ArrowUpRight />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Aviso de Compliance */}
                <div className="max-w-4xl mx-auto mt-24 mb-0 px-4 overflow-visible">
                    <div className="relative p-6 md:p-8 rounded-r-2xl bg-black/40 backdrop-blur-md border border-white/[0.05] border-l-4 border-l-[#FF5500] shadow-[-10px_0_30px_-5px_rgba(255,85,0,0.2)] transition-all duration-500 hover:bg-black/50 group">
                        <div className="absolute inset-y-0 left-[-4px] w-[4px] bg-[#FF5500] shadow-[0_0_15px_rgba(255,85,0,0.5)] animate-pulse-glow" />
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
                            <div className="flex-shrink-0 text-[#FF5500] mt-1">
                                <LockIcon size={20} strokeWidth={2.5} className="drop-shadow-[0_0_5px_rgba(255,85,0,0.5)]" />
                            </div>
                            <div className="text-center md:text-left">
                                <h4 className="text-white font-bold text-sm tracking-[0.2em] uppercase mb-2 font-display">AVISO IMPORTANTE</h4>
                                <p className="text-gray-400 text-[14px] leading-relaxed font-sans font-normal antialiased">
                                    Os serviços oferecidos não garantem aprovação, desbloqueio ou permanência de contas em plataformas de anúncios, respeitando os Termos de Uso de cada sistema.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AtivosAds;
