import { UserPlus, Rocket, Instagram, Mail, Send } from 'lucide-react';
import { EnergyFlowOrb } from './EnergyFlowOrb';

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

                <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-display text-white mb-8 md:mb-10 tracking-tight leading-[1.1] md:leading-[1.05] drop-shadow-2xl uppercase">
                    Pronto para <span className="text-[#FF5500]">escalar <br className="hidden md:block" /> sua operação?</span>
                </h2>

                <p className="text-gray-400 font-sans text-base md:text-2xl max-w-3xl mx-auto mb-4 leading-relaxed font-medium opacity-80 px-4">
                    Junte-se a milhares de profissionais que já transformaram seus resultados com a Digital BW.
                </p>

                {/* Integrated Energy Flow Visual Effect */}
                <div className="scale-75 md:scale-90 lg:scale-100 -my-10 md:-my-18 opacity-90">
                    <EnergyFlowOrb />
                </div>

                {/* 2. AÇÃO DUPLA (Botões - Hero Style Big) */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-5 mt-16 md:mt-20 mb-20 relative z-20 px-4 sm:px-0">
                    {/* Botão 1 (Primário) */}
                    <button className="h-14 md:h-16 px-6 md:px-12 rounded-[8px] bg-gradient-to-b from-[#FF6010] to-[#E04800] border border-white/5 text-[14px] md:text-base font-bold text-white transition-all flex items-center justify-center gap-4 active:scale-[0.98] outline-none group shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_0_20px_-5px_rgba(255,85,0,0.5)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_0_30px_-5px_rgba(255,85,0,0.6)] hover:-translate-y-px">
                        <span className="tracking-tight uppercase">Criar Conta na Plataforma</span>
                        <UserPlus className="w-[18px] h-[18px] group-hover:scale-110 transition-transform" />
                    </button>

                    {/* Botão 2 (Secundário) */}
                    <button className="h-14 md:h-16 px-6 md:px-12 rounded-[8px] border border-white/10 bg-white/[0.03] text-[14px] md:text-base font-bold text-white hover:bg-white/5 hover:border-white/30 transition-all flex items-center justify-center gap-4 group active:scale-[0.98]">
                        <span className="tracking-tight uppercase">Solicitar um Serviço</span>
                        <Rocket className="w-[18px] h-[18px] text-white/60 group-hover:text-white transition-colors" />
                    </button>
                </div>

            </div>

            {/* 4. O RODAPÉ (Footer Bar - Professional Refined Styling) */}
            <footer className="relative z-10 border-t border-white/5 mt-2 bg-black/40 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                        {/* Esquerda: Logo & Desc */}
                        <div className="flex flex-col items-center md:items-start gap-4 flex-1">
                            <img
                                src="/logo.png"
                                alt="BW DIGITAL"
                                className="h-9 w-auto object-contain brightness-110 hover:scale-105 transition-transform duration-500"
                            />
                            <p className="text-gray-500 text-[10px] uppercase tracking-[0.4em] font-black text-center md:text-left leading-tight">
                                High Performance <br /> Operations
                            </p>
                        </div>

                        {/* Centro: Institutional Info (Professional Layout) */}
                        <div className="flex flex-col items-center gap-6 flex-[2]">
                            {/* Line 1: Main Brand & Link */}
                            <div className="flex items-center gap-4">
                                <a
                                    href="https://digitalbw.com.br"
                                    className="text-[13px] font-black text-white hover:text-[#FF5500] transition-colors tracking-tight"
                                >
                                    digitalbw.com.br
                                </a>
                                <span className="w-1 h-1 rounded-full bg-[#FF5500]"></span>
                                <span className="text-[13px] font-bold text-gray-300">© 2026 BW Digital</span>
                            </div>

                            {/* Line 2: Rights & Origin */}
                            <p className="text-gray-500 text-[11px] font-medium tracking-wide uppercase">
                                Todos os direitos reservados. Desde 2023
                            </p>

                            {/* Line 3: CNPJ (Industrial Precision) */}
                            <div className="px-4 py-1.5 rounded-md bg-white/[0.02] border border-white/5">
                                <span className="text-gray-600 text-[9px] font-black tracking-[0.3em] uppercase">
                                    CNPJ: 50.183.592/0001-00
                                </span>
                            </div>
                        </div>

                        {/* Direita: Social Interaction */}
                        <div className="flex items-center justify-center md:justify-end gap-4 flex-1">
                            <a href="#" className="w-11 h-11 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center text-gray-400 hover:bg-[#FF5500] hover:text-white hover:border-[#FF5500] transition-all duration-300 hover:-translate-y-1 group">
                                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" className="w-11 h-11 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center text-gray-400 hover:bg-[#FF5500] hover:text-white hover:border-[#FF5500] transition-all duration-300 hover:-translate-y-1 group">
                                <Send size={20} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" className="w-11 h-11 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center text-gray-400 hover:bg-[#FF5500] hover:text-white hover:border-[#FF5500] transition-all duration-300 hover:-translate-y-1 group">
                                <Mail size={20} className="group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;
