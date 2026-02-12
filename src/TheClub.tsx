import { Smartphone, Check, ArrowUpRight } from 'lucide-react';

const IPhoneMockup = ({ className = "" }) => {
    return (
        <div className={`relative ${className} w-full`}>
            {/* Sombras e brilho atmosférico */}
            <div className="absolute h-[85%] w-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF5500] opacity-20 blur-[90px] rounded-[3rem] pointer-events-none" />

            {/* Uso direto do arquivo SVG para fidelidade total */}
            <img
                src="/iPhone17.svg"
                alt="iPhone 17 Pro Cosmic Orange"
                className="w-full h-auto relative z-10 drop-shadow-[0_45px_100px_rgba(0,0,0,0.9)]"
            />
        </div>
    );
};

const TheClub = () => {
    return (
        <section className="relative min-h-screen bg-[#050505] py-24 md:py-32 overflow-hidden flex items-center">
            {/* Global Vignette */}
            <div className="absolute inset-0 pointer-events-none z-0"
                style={{ background: 'radial-gradient(circle at center, transparent 0%, #050505 90%)' }}
            />

            <div className="container relative z-10 px-6 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

                    {/* Visual: iPhones (Esquerda) */}
                    <div className="relative h-[450px] sm:h-[550px] md:h-[700px] flex items-center justify-center order-2 lg:order-1">
                        {/* Floor Glow (Stage Light) */}
                        <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[120%] h-[150px] bg-[#FF5500] opacity-10 blur-[100px] rounded-[100%] pointer-events-none transform scale-y-50" />

                        {/* Celular de trás (Faded) - Adjusted for mobile */}
                        <div className="absolute left-[10%] sm:left-[15%] top-[50%] -translate-y-[45%] w-[180px] sm:w-[240px] md:w-[300px] opacity-20 filter grayscale blur-[1px]">
                            <IPhoneMockup className="" />
                        </div>

                        {/* Celular da frente (Principal) - Adjusted for mobile */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[260px] md:w-[320px] z-20">
                            <IPhoneMockup className="" />
                        </div>
                    </div>

                    {/* Conteúdo (Direita) */}
                    <div className="space-y-12 order-1 lg:order-2">
                        <div className="space-y-8 text-center lg:text-left">
                            {/* Tag Uppercase */}
                            <div className="inline-flex items-center gap-2 text-[#FF5500]">
                                <Smartphone size={16} />
                                <span className="font-sans text-[11px] font-black uppercase tracking-[0.4em]">APP EXCLUSIVO</span>
                            </div>

                            {/* Headline conforme print */}
                            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[1.1] md:leading-[1.0] tracking-tight uppercase">
                                Instale o <br />
                                <span className="text-[#FF5500]">App Digital BW</span>
                            </h2>

                            <p className="font-sans text-base md:text-lg text-gray-400 max-w-xl leading-relaxed mx-auto lg:mx-0 px-4 sm:px-0">
                                Acesse todos os recursos da plataforma direto do seu celular.
                                Compre ativos, solicite serviços e acompanhe métricas em tempo real.
                            </p>

                            {/* Checklist Refinado */}
                            <div className="space-y-6 pt-4 flex flex-col items-center lg:items-start font-sans">
                                <div className="flex items-center gap-4">
                                    <div className="w-5 h-5 rounded-sm border-2 border-[#FF5500] flex items-center justify-center text-[#FF5500]">
                                        <Check size={12} strokeWidth={4} />
                                    </div>
                                    <span className="text-gray-300 font-medium text-lg tracking-tight">Notificações em tempo real</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-5 h-5 rounded-sm border-2 border-[#FF5500] flex items-center justify-center text-[#FF5500]">
                                        <Check size={12} strokeWidth={4} />
                                    </div>
                                    <span className="text-gray-300 font-medium text-lg tracking-tight">Compras com um toque</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-5 h-5 rounded-sm border-2 border-[#FF5500] flex items-center justify-center text-[#FF5500]">
                                        <Check size={12} strokeWidth={4} />
                                    </div>
                                    <span className="text-gray-300 font-medium text-lg tracking-tight">Suporte 24 horas</span>
                                </div>
                            </div>
                        </div>

                        {/* Botão Tactile Industrial */}
                        <div className="pt-4 flex justify-center lg:justify-start">
                            <button className="relative h-16 px-10 rounded-md bg-gradient-to-b from-[#FF6600] to-[#FF4400] text-sm font-sans font-extrabold text-white uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-4 active:scale-[0.97] outline-none group shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_10px_20px_-5px_rgba(255,85,0,0.4)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_15px_30px_-5px_rgba(255,85,0,0.5)] hover:-translate-y-1">
                                <span className="text-base">INSTALAR APP BW</span>
                                <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom fade gradient — seamless transition into FAQ */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[#000] pointer-events-none z-[5]" />
        </section>
    );
};

export default TheClub;
