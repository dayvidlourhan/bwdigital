import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle, ShieldCheck } from 'lucide-react';
import SectionHeader from './components/ui/SectionHeader';
import MasterButton from './components/ui/MasterButton';

const faqData = [
    {
        question: "O que é a BW Digital?",
        answer: "A BW Digital é uma empresa de marketing digital que atua com estruturação de empresas, mentorias, gestão de tráfego pago e soluções de infraestrutura publicitária, ajudando negócios a crescerem e escalarem de forma organizada e sustentável."
    },
    {
        question: "A BW Digital é vinculada ao Meta, Google ou TikTok?",
        answer: "Não. A BW Digital não possui vínculo com Meta Platforms, Google ou TikTok. As marcas citadas pertencem a seus respectivos proprietários. Apenas temos contato com especialistas sobre atualizações e suporte."
    },
    {
        question: "Os serviços e ativos são legais e seguros?",
        answer: "Sim. Trabalhamos apenas com serviços e ativos lícitos, obtidos e utilizados conforme a legislação vigente e as políticas das plataformas de anúncios."
    },
    {
        question: "O que são os ativos de anúncios oferecidos pela BW Digital?",
        answer: "Os ativos de anúncios são recursos e ambientes publicitários utilizados para a operação de campanhas em plataformas como Meta Ads e Google Ads. A BW Digital fornece ativos, infraestrutura e suporte técnico, podendo ou não operar as campanhas, de acordo com o serviço contratado."
    },
    {
        question: "Os ativos já vêm prontos para anunciar?",
        answer: "Os ativos são fornecidos estruturados para uso, porém a estratégia, criação de anúncios e operação variam conforme o serviço contratado. Em mentorias e estruturação, o cliente opera. Em gestão de tráfego, a operação é feita pela BW Digital."
    },
    {
        question: "A BW Digital atua como gestora de tráfego?",
        answer: "Sim. Em projetos específicos, a BW Digital atua como gestora de tráfego pago, sendo responsável pela criação, configuração, otimização e acompanhamento das campanhas, conforme o modelo contratado."
    },
    {
        question: "Existe garantia de resultados em anúncios?",
        answer: "Não. A BW Digital não garante resultados, faturamento, aprovação ou desempenho, pois os resultados dependem de fatores como mercado, produto, orçamento, estratégia e execução."
    },
    {
        question: "Quanto tempo leva a entrega dos ativos?",
        answer: "Os ativos são entregues em até 24h úteis após confirmação do pagamento."
    },
    {
        question: "Como acompanho os resultados das minhas campanhas?",
        answer: "Na gestão de tráfego, fornecemos relatórios periódicos com métricas de desempenho. Você também pode acompanhar em tempo real através do painel da plataforma de anúncios."
    },
    {
        question: "Como entro em contato com o suporte?",
        answer: "Clique no botão \"Pedido Personalizado\" na página de suporte para ser redirecionado ao WhatsApp da nossa equipe."
    }
];

const AccordionItem = ({ question, answer, isOpen, onClick, index }: { question: string, answer: string, isOpen: boolean, onClick: () => void, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className={`group mb-3 overflow-hidden rounded-lg border transition-all duration-500 ${isOpen
                ? 'border-[#FF5500]/50 bg-gradient-to-r from-[#FF5500]/10 via-white/[0.03] to-transparent shadow-[0_10px_30px_-15px_rgba(255,85,0,0.15)]'
                : 'border-white/5 bg-[#080808]/40 hover:border-white/15 hover:bg-[#0a0a0a]'
                }`}
        >
            <button
                onClick={onClick}
                className="flex w-full items-center justify-between p-6 text-left transition-all duration-300"
                aria-expanded={isOpen}
            >
                <div className="flex items-center gap-5">
                    <span className={`font-mono text-[10px] tracking-widest transition-colors duration-500 ${isOpen ? 'text-[#FF5500]' : 'text-white/20'}`}>
                        {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className={`text-[15px] md:text-[16px] font-display font-medium tracking-tight transition-all duration-500 ${isOpen ? 'text-white translate-x-1' : 'text-gray-400 group-hover:text-gray-200'
                        }`}>
                        {question}
                    </span>
                </div>

                <div className={`relative flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-500 transform ${isOpen
                    ? 'border-[#FF5500] text-[#FF5500] rotate-180 scale-110 shadow-[0_0_15px_rgba(255,85,0,0.3)]'
                    : 'border-white/10 text-white/30 group-hover:border-white/30 group-hover:text-white/60'
                    }`}>
                    {isOpen ? <Minus size={14} strokeWidth={2.5} /> : <Plus size={14} strokeWidth={2.5} />}
                </div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <div className="px-6 md:px-16 pb-8">
                            <div className="h-px w-full bg-gradient-to-r from-[#FF5500]/30 to-transparent mb-6" />
                            <p className="font-sans text-[14px] md:text-[15px] leading-relaxed text-gray-400 max-w-3xl antialiased">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="relative bg-[#000] py-16 md:py-24 overflow-hidden">
            {/* BACKGROUND SYSTEM: Grid + Atmospheric Lighting */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="background-container !opacity-[0.03]" />
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#FF5500]/5 blur-[120px] rounded-full opacity-30" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#FF5500]/5 blur-[150px] rounded-full opacity-20" />
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-20">

                <SectionHeader
                    title="Dúvidas"
                    highlight="Frequentes"
                    subtitle="Sua jornada para a escala global começa com clareza técnica. Explore os parâmetros do nosso ecossistema de alta performance."
                    className="mb-20"
                />

                {/* 2. A LISTA (High-End Accordions) */}
                <div className="mb-24 grid gap-1">
                    {faqData.map((item, index) => (
                        <AccordionItem
                            key={index}
                            index={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>

                {/* 4. RODAPÉ (CTA Button Only) */}
                <div className="flex justify-center mb-6 pb-6 relative z-10">
                    <MasterButton href="https://api.whatsapp.com/send/?phone=553184780515&text&type=phone_number&app_absent=0" className="h-20 px-12 !rounded-2xl text-sm">
                        <MessageCircle size={22} className="transition-transform group-hover/btn:scale-110" strokeWidth={2.5} />
                        Falar no WhatsApp
                    </MasterButton>

                    {/* Subtle Glow beneath the button */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-20 bg-[#FF5500]/20 blur-[60px] pointer-events-none" />
                </div>

                {/* Industrial Divider Section */}
                <div className="mt-20 flex flex-col items-center gap-8 opacity-30 md:opacity-20 group">
                    <div className="flex items-center gap-4">
                        <div className="h-px w-24 bg-gradient-to-r from-transparent to-white/20 hidden md:block" />
                        <ShieldCheck size={20} className="text-[#FF5500] hidden md:block" />
                        <div className="h-px w-24 bg-gradient-to-l from-transparent to-white/20 hidden md:block" />
                    </div>
                    <span className="text-[9px] font-mono text-white/40 md:text-white/40 tracking-[0.2em] md:tracking-[0.8em] uppercase group-hover:text-[#FF5500]/60 transition-colors duration-700 text-center">BW Digital Global Infrastructure</span>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
