import { Trophy, Medal, Gem, Rocket, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialProof = () => {
    const stats = [
        {
            icon: <Trophy className="w-10 h-10 text-[#FF5500]" />, // Reduzido para h-10
            color: "rgba(255, 85, 0, 0.15)", // Suavizado
            tag: "RANK_A"
        },
        {
            icon: <Medal className="w-10 h-10 text-white/90" />,
            color: "rgba(255, 255, 255, 0.1)",
            tag: "LEVEL_UP"
        },
        {
            icon: <Gem className="w-10 h-10 text-[#A5F3FC]" />,
            color: "rgba(165, 243, 252, 0.1)",
            tag: "RESERVE"
        },
        {
            icon: <Rocket className="w-10 h-10 text-[#FF5500]" />,
            color: "rgba(255, 85, 0, 0.15)",
            tag: "SCALE_X"
        }
    ];

    const testimonials = [
        {
            text: 'A Digital BW mudou completamente minha operação. Escalo 5x mais rápido agora!',
            author: 'João Silva',
            role: 'Gestor de Tráfego',
            initials: 'JS'
        },
        {
            text: 'Os ativos ADS são incríveis! Qualidade premium e suporte excepcional.',
            author: 'Maria Costa',
            role: 'E-commerce Owner',
            initials: 'MC'
        },
        {
            text: 'Melhor investimento que fiz! ROI de 400% no primeiro mês.',
            author: 'Pedro Santos',
            role: 'Afiliado Top',
            initials: 'PS'
        },
        {
            text: 'Suporte técnico de outro nível. Resolveram meu problema de escala em minutos!',
            author: 'Ana Oliveira',
            role: 'Infoprodutora',
            initials: 'AO'
        }
    ];

    // Card Glass Style synced with AtivosAds.tsx
    const cardBaseStyle = "relative p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-2xl border border-white/[0.08] transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-[#FF5500]/40 group-hover:-translate-y-2 overflow-hidden flex flex-col hover:shadow-[0_20px_50px_rgba(255,85,0,0.15)] transform-gpu";

    return (
        <section id="social" className="relative bg-[#050505] py-24 md:py-48 px-6 md:px-12 overflow-hidden border-t border-white/[0.03]">

            {/* Background Atmosphere synced with project style */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#FF5500]/5 blur-[120px] rounded-full opacity-20" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* 1. CABEÇALHO - Consistent Header System */}
                <div className="text-center mb-20 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 uppercase"
                    >
                        PROVAS <span className="text-[#FF5500] drop-shadow-[0_0_15px_rgba(255,85,0,0.3)] font-display">SOCIAIS</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-medium antialiased leading-relaxed"
                    >
                        Resultados operacionais e feedback de quem já utiliza a infraestrutura BW Digital.
                    </motion.p>
                </div>

                {/* 2. GRID SUPERIOR (Holo-Glass Infrastructure) - Synchronized with AtivosAds small cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-7 mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="aspect-[3/4] relative flex items-center justify-center rounded-3xl bg-white/[0.03] border border-white/10 group transition-all duration-500 hover:border-[#FF5500]/30 hover:shadow-[0_0_30px_rgba(255,85,0,0.15)]"
                        >
                            {/* Reflection line synced with AtivosAds */}
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Hologram Glow suave */}
                            <div
                                className="absolute inset-0 m-auto w-24 h-24 rounded-full blur-[40px] opacity-0 group-hover:opacity-60 transition-all duration-700"
                                style={{ backgroundColor: stat.color }}
                            />

                            <div className="relative z-10 flex flex-col items-center gap-4">
                                <div className="p-2 transition-all duration-700 group-hover:scale-110">
                                    {stat.icon}
                                </div>
                                <span className="font-mono text-[8px] text-white/30 tracking-[0.4em] uppercase group-hover:text-[#FF5500]/60 transition-colors">
                                    {stat.tag}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 3. GRID INFERIOR (Technical Testimonials) - Synchronized with AtivosAds Main Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
                    {testimonials.map((test, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + index * 0.05 }}
                            className={cardBaseStyle}
                        >
                            {/* Glassy Top Reflection */}
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Stars synced color */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3 h-3 fill-[#FF5500] text-[#FF5500] drop-shadow-[0_0_5px_rgba(255,85,0,0.4)]" />
                                ))}
                            </div>

                            {/* Content Section - Synced with AtivosAds content rhythm */}
                            <div className="mb-8 flex-grow">
                                <p className="text-gray-400 text-[13px] leading-relaxed font-medium group-hover:text-white transition-colors duration-300 font-sans">
                                    "{test.text}"
                                </p>
                            </div>

                            {/* Author Footer - Digital System Style */}
                            <div className="flex items-center gap-4 pt-6 border-t border-white/[0.05] relative z-10 mt-auto">
                                <div className="w-10 h-10 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-[#FF5500]/30 transition-colors">
                                    <span className="text-[10px] font-mono text-white/30 font-bold group-hover:text-[#FF5500]">
                                        {test.initials}
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-white font-display font-bold text-xs uppercase tracking-wider">
                                        {test.author}
                                    </h4>
                                    <span className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest mt-0.5">
                                        {test.role}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Subtle Grid System from project style */}
            <div className="background-container !opacity-[0.05] pointer-events-none" />
        </section>
    );
};

export default SocialProof;
