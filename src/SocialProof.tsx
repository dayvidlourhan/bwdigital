import { Trophy, Medal, Gem, Rocket, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from './components/ui/SectionHeader';

const SocialProof = () => {
    const stats = [
        {
            icon: <Trophy className="w-10 h-10 text-[#FF5500]" />,
            color: "rgba(255, 85, 0, 0.15)",
            tag: "RANK_A",
            image: '/1P_11zon.webp'
        },
        {
            icon: <Medal className="w-10 h-10 text-white/90" />,
            color: "rgba(255, 255, 255, 0.1)",
            tag: "LEVEL_UP",
            image: '/2P_11zon.webp'
        },
        {
            icon: <Gem className="w-10 h-10 text-[#A5F3FC]" />,
            color: "rgba(165, 243, 252, 0.1)",
            tag: "RESERVE",
            image: '/3_11zon.webp'
        },
        {
            icon: <Rocket className="w-10 h-10 text-[#FF5500]" />,
            color: "rgba(255, 85, 0, 0.15)",
            tag: "SCALE_X",
            image: '/3P_11zon.webp'
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
        },
        {
            text: 'A infraestrutura mais robusta que já utilizei. Estabilidade total em momentos de pico.',
            author: 'Lucas Mendes',
            role: 'Dropshipping expert',
            initials: 'LM'
        },
        {
            text: 'Finalmente uma empresa que entende a dor do produtor digital no Brasil.',
            author: 'Beatriz Ferraz',
            role: 'Estratégista Digital',
            initials: 'BF'
        },
        {
            text: 'O design dos ativos elevou o nível do meu funil instantaneamente.',
            author: 'Ricardo Alves',
            role: 'Copywriter Pro',
            initials: 'RA'
        },
        {
            text: 'Implementação rápida e resultados sólidos. Recomendo para quem quer profissionalismo.',
            author: 'Felipe Rocha',
            role: 'Agência Scale',
            initials: 'FR'
        },
        {
            text: 'O retorno sobre o investimento foi muito acima do esperado. Fiquei impressionada.',
            author: 'Juliana Lima',
            role: 'Social Media',
            initials: 'JL'
        },
        {
            text: 'Suporte humanizado e ágil. Sinto que realmente tenho uma parceria com a BW.',
            author: 'Gustavo Paiva',
            role: 'Empreendedor',
            initials: 'GP'
        }
    ];

    // Duplicate testimonials for seamless looping
    const scrollingTestimonials = [...testimonials, ...testimonials];

    // Card Glass Style synced with AtivosAds.tsx
    const cardBaseStyle = "relative p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-2xl border border-white/[0.08] transition-all duration-500 hover:bg-white/[0.08] hover:border-[#FF5500]/40 overflow-hidden flex flex-col hover:shadow-[0_20px_50px_rgba(255,85,0,0.15)] transform-gpu w-[300px] md:w-[350px] flex-shrink-0";

    return (
        <section id="social" className="relative bg-[#050505] pt-24 md:pt-48 pb-12 md:pb-20 px-6 md:px-12 overflow-hidden border-t border-white/[0.03]">

            {/* Background Atmosphere synced with project style */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#FF5500]/5 blur-[120px] rounded-full opacity-20" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                <SectionHeader
                    title="NOSSOS"
                    highlight="CLIENTES"
                    subtitle="Conquistas, resultados operacionais e feedback de quem já utiliza os serviços da BW Digital."
                    className="mb-16 md:mb-24"
                />

                {/* 2. GRID SUPERIOR (Holo-Glass Infrastructure) - Synchronized with AtivosAds small cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-7 mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="aspect-[3/4] relative flex items-center justify-center rounded-3xl bg-white/[0.03] border border-white/10 group transition-all duration-500 hover:border-[#FF5500]/30 hover:shadow-[0_0_30px_rgba(255,85,0,0.15)] overflow-hidden"
                        >
                            {/* Image or Icon Fallback */}
                            {stat.image ? (
                                <img
                                    src={stat.image}
                                    alt={stat.tag}
                                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                />
                            ) : (
                                <>
                                    {/* Hologram Glow suave */}
                                    <div
                                        className="absolute inset-0 m-auto w-24 h-24 rounded-full blur-[40px] opacity-0 group-hover:opacity-60 transition-all duration-700"
                                        style={{ backgroundColor: stat.color }}
                                    />
                                    <div className="relative z-10 flex flex-col items-center gap-4">
                                        <div className="p-2 transition-all duration-700 group-hover:scale-110">
                                            {stat.icon}
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* Reflection line */}
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                        </motion.div>
                    ))}
                </div>

                {/* 3. CARROSSEL INFINITO (Marquee Depoimentos) */}
                <div className="relative -mx-6 md:-mx-12">
                    {/* Shadow Fades for Premium Look */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-20 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent z-20 pointer-events-none" />

                    <div className="flex overflow-hidden px-4 md:px-0">
                        <motion.div
                            className="flex gap-6 md:gap-7 py-8 will-change-transform flex-nowrap"
                            animate={{
                                x: ["0%", "-50%"]
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 40,
                                    ease: "linear",
                                },
                            }}
                        >
                            {scrollingTestimonials.map((test, index) => (
                                <div
                                    key={index}
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

                                    {/* Content Section */}
                                    <div className="mb-8 flex-grow">
                                        <p className="text-gray-400 text-[13px] leading-relaxed font-medium group-hover:text-white transition-colors duration-300 font-sans">
                                            "{test.text}"
                                        </p>
                                    </div>

                                    {/* Author Footer */}
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
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
