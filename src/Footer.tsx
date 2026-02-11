import { Rocket, MessageCircle, ShieldCheck, Zap, Headphones, Instagram, Mail, Send } from 'lucide-react';

const Footer = () => {
    return (
        <section className="relative bg-[#000] overflow-hidden">
            {/* Gradient Transition from FAQ (#000) — seamless blend */}
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#000] to-transparent pointer-events-none z-[1]"></div>

            {/* Spotlight Central — visible radial glow behind title */}
            <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse at center, rgba(255,85,0,0.22) 0%, rgba(255,85,0,0.08) 40%, transparent 70%)' }}></div>

            {/* 1. CTA FINAL (Bloco Principal) */}
            <div className="relative z-10 pt-20 pb-8 px-6 max-w-7xl mx-auto text-center">
                <div className="inline-flex items-center gap-2.5 h-7 px-4 rounded-full border border-white/10 bg-white/[0.01] backdrop-blur-sm mb-10 shadow-inner group cursor-default">
                    <div className="relative flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF5500] animate-ping absolute opacity-60"></div>
                        <div className="relative w-1.5 h-1.5 rounded-full bg-[#FF5500] shadow-[0_0_10px_#FF5500]"></div>
                    </div>
                    <span className="text-[10px] font-bold text-white/90 tracking-[0.22em] uppercase font-sans">
                        EXPANSÃO GLOBAL BW
                    </span>
                </div>

                <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-white mb-10 tracking-tight leading-[1.05] drop-shadow-2xl">
                    Pronto para <span className="text-[#FF5500]">escalar <br className="hidden md:block" /> sua operação?</span>
                </h2>

                <p className="text-gray-400 font-sans text-lg md:text-2xl max-w-3xl mx-auto mb-14 leading-relaxed font-medium opacity-80">
                    Junte-se a milhares de profissionais que já transformaram seus resultados com a Digital BW.
                </p>

                {/* 2. AÇÃO DUPLA (Botões - Premium Sizing) */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                    {/* Botão 1 (Primário) */}
                    <button className="group relative h-14 sm:h-16 px-9 rounded-xl bg-[#FF5500] flex items-center gap-4 text-white font-black text-base transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_-5px_rgba(255,85,0,0.45)] hover:shadow-[0_0_60px_-5px_rgba(255,85,0,0.65)] overflow-hidden">
                        {/* Internal Bevel Effect */}
                        <div className="absolute inset-x-0 top-0 h-[2px] bg-white/30 rounded-t-2xl z-20"></div>

                        <Rocket size={20} className="group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-500 ease-out relative z-10" />
                        <span className="relative z-10 tracking-tight">SOLICITAR SERVIÇO AGORA</span>

                        {/* Reflection Sheen */}
                        <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                    </button>

                    {/* Botão 2 (Secundário) */}
                    <button className="h-14 sm:h-16 px-9 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center gap-4 text-white font-bold text-base transition-all hover:bg-white/5 hover:border-white/20 active:scale-[0.98] group">
                        <MessageCircle size={20} className="text-gray-400 group-hover:text-[#FF5500] transition-colors" />
                        <span className="tracking-tight">FALAR COM ESPECIALISTA</span>
                    </button>
                </div>

                {/* 3. TRUST BADGES (Premium Restore & Slim Band) */}
                <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-10 border-t border-white/5 pt-10">
                    <div className="flex items-center gap-5 group cursor-default">
                        <div className="w-13 h-13 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-[#FF5500]/40 group-hover:bg-[#FF5500]/5 transition-all duration-500 shadow-xl">
                            <ShieldCheck size={26} className="text-[#FF5500] opacity-80" />
                        </div>
                        <div className="text-left">
                            <div className="text-white text-[15px] font-bold tracking-tight">100% SEGURO</div>
                            <div className="text-gray-500 text-[11px] font-bold tracking-wide uppercase">Criptografia BW</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 group cursor-default">
                        <div className="w-13 h-13 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-[#FF5500]/40 group-hover:bg-[#FF5500]/5 transition-all duration-500 shadow-xl">
                            <Zap size={26} className="text-[#FF5500] opacity-80" />
                        </div>
                        <div className="text-left">
                            <div className="text-white text-[15px] font-bold tracking-tight">ENTREGA IMEDIATA</div>
                            <div className="text-gray-500 text-[11px] font-bold tracking-wide uppercase">Setup Instantâneo</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 group cursor-default">
                        <div className="w-13 h-13 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-[#FF5500]/40 group-hover:bg-[#FF5500]/5 transition-all duration-500 shadow-xl">
                            <Headphones size={26} className="text-[#FF5500] opacity-80" />
                        </div>
                        <div className="text-left">
                            <div className="text-white text-[15px] font-bold tracking-tight">SUPORTE 24/7</div>
                            <div className="text-gray-500 text-[11px] font-bold tracking-wide uppercase">Time Técnico</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. O RODAPÉ (Footer Bar - Balanced Styling) */}
            <footer className="relative z-10 border-t border-white/5 mt-2 bg-black/20">
                <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Esquerda: Logo */}
                    <div className="flex items-center gap-5">
                        <img
                            src="/logo.png"
                            alt="BW DIGITAL"
                            className="h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    {/* Centro: Copyright */}
                    <div className="text-center flex flex-col items-center gap-2.5">
                        <div className="flex items-center gap-4 text-[14px] font-black text-gray-300 tracking-tight">
                            <span>digitalbw.com.br</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]/60"></span>
                            <span>© 2024 DIGITAL BW</span>
                        </div>
                        <p className="text-gray-600 text-[10px] uppercase tracking-[0.35em] font-bold">
                            High Performance Operation Systems
                        </p>
                    </div>

                    {/* Direita: Social Icons (Perfectly Sized) */}
                    <div className="flex items-center gap-5">
                        <a href="#" className="w-13 h-13 rounded-full bg-white/[0.02] backdrop-blur-md flex items-center justify-center text-gray-400 border border-white/5 hover:bg-[#FF5500] hover:text-white hover:border-[#FF5500] transition-all duration-500 transform hover:-translate-y-2 shadow-xl group">
                            <Instagram size={22} className="group-hover:scale-110 transition-transform duration-500" />
                        </a>
                        <a href="#" className="w-13 h-13 rounded-full bg-white/[0.02] backdrop-blur-md flex items-center justify-center text-gray-400 border border-white/5 hover:bg-[#FF5500] hover:text-white hover:border-[#FF5500] transition-all duration-500 transform hover:-translate-y-2 shadow-xl group">
                            <Send size={22} className="group-hover:scale-110 transition-transform duration-500" />
                        </a>
                        <a href="#" className="w-13 h-13 rounded-full bg-white/[0.02] backdrop-blur-md flex items-center justify-center text-gray-400 border border-white/5 hover:bg-[#FF5500] hover:text-white hover:border-[#FF5500] transition-all duration-500 transform hover:-translate-y-2 shadow-xl group">
                            <Mail size={22} className="group-hover:scale-110 transition-transform duration-500" />
                        </a>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;
