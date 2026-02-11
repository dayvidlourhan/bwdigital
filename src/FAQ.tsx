import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle, ShieldCheck } from 'lucide-react';

const faqData = [
    {
        question: "Como funciona a gestão de Tráfego Pago?",
        answer: "Nossa equipe especializada cuida de todas as suas campanhas em Meta Ads, Google Ads e TikTok Ads. Fazemos desde a configuração inicial, criação de segmentações, testes de criativos, até otimização contínua para maximizar seu ROI. Você recebe relatórios semanais com todas as métricas e insights."
    },
    {
        question: "Qual é o investimento mínimo em anúncios?",
        answer: "Nossos planos começam a partir de R$10.000/mês para o plano START. O investimento varia conforme seu objetivo e nicho. Quanto maior o investimento, maiores as oportunidades de teste e otimização. Consultamos você para definir o melhor investimento inicial para seu negócio."
    },
    {
        question: "Quanto tempo leva para ver resultados?",
        answer: "Normalmente vemos resultados positivos nos primeiros 7 a 14 dias. Fazemos testes rápidos para identificar qual estratégia funciona melhor para seu negócio. Após identificar o melhor desempenho, escalamos a campanha para maximizar lucros."
    },
    {
        question: "Como vocês garantem o ROI de 5x?",
        answer: "O ROI de 5x+ é baseado em nossa experiência e histórico com clientes. Não é uma garantia contratual, mas sim uma meta que buscamos atingir. Dependendo do nicho, produto e mercado, os resultados variam. Fazemos tudo ao nosso alcance para potencializar seus ganhos."
    },
    {
        question: "O que é Contingência em Tráfego Pago?",
        answer: "Contingência é o conjunto de estratégias e estruturas para proteger suas contas de anúncios contra bloqueios e limitações das plataformas. Usamos BMs (Business Managers) e contas próprias da Digital BW para garantir continuidade de campanhas e evitar perda de investimento."
    },
    {
        question: "Como funciona a Estruturação de Empresas?",
        answer: "Fazemos um diagnóstico completo de seu negócio, definimos processos, organizamos finanças, criamos fluxos de trabalho e desenvolvemos um plano de crescimento sustentável. Você recebe templates, documentos prontos e acompanhamento semanal com especialistas para implementar tudo corretamente."
    },
    {
        question: "Quanto tempo dura o programa de Estruturação?",
        answer: "Nosso programa completo de estruturação dura 3 meses com acompanhamento intenso. Neste período, você recebe calls semanais, templates exclusivos, acesso à comunidade e suporte prioritário. Após os 3 meses, você tem acesso vitalício à comunidade e bônus."
    },
    {
        question: "Preciso ter experiência anterior para começar?",
        answer: "Não! Nossos programas são desenvolvidos desde o básico até o avançado. Mesmo que você seja iniciante, conseguirá acompanhar e implementar todas as estratégias. Oferecemos suporte personalizado para tirar suas dúvidas a qualquer momento."
    },
    {
        question: "Como acessar os Ativos Publicitários (ADS)?",
        answer: "Você acessa nosso catálogo de Ativos ADS diretamente na plataforma Digital BW. Lá você encontra desde Meta Ads, Google Ads, estruturas prontas, templates de campanhas, criativos e mais. Pode comprar individual ou por pacotes. A entrega é imediata após confirmação do pagamento."
    },
    {
        question: "Os Ativos ADS estão prontos para usar?",
        answer: "Sim! Todos os nossos Ativos ADS são testados e aprovados. Você recebe documentações completas explicando como usar, parametrizações recomendadas e boas práticas. Para planos de tráfego gerenciado, nós mesmos implementamos e otimizamos."
    },
    {
        question: "Quais são os canais de comunicação com meu gestor?",
        answer: "Você tem acesso via WhatsApp exclusivo, Email, calls agendadas e grupo de comunidade. Os clientes dos planos PRO e SCALE têm suporte 24/7. Planos START têm suporte em horário comercial com resposta rápida."
    },
    {
        question: "Como funciona o Curso de Contingência e Tráfego?",
        answer: "O curso contém +20 aulas práticas desde o básico até estratégias avançadas. Você aprende a montar contingência, escalar campanhas, usar gatilhos de vendas e evitar bloqueios. Tem acesso vitalício, grupo exclusivo no WhatsApp e templates de campanhas como bônus."
    },
    {
        question: "O acesso ao curso é realmente vitalício?",
        answer: "Sim! Você compra uma única vez e tem acesso vitalício ao conteúdo. Além disso, recebe todas as futuras atualizações e novas aulas sem custo adicional. Também mantém acesso ao grupo exclusivo de alunos para tirar dúvidas."
    },
    {
        question: "Como funciona a Mercado Intelligence?",
        answer: "Analisamos dados em tempo real com IA para identificar tendências, nichos promissores, anúncios concorrentes, produtos em alta, e oportunidades de mercado. Você recebe insights acionáveis para tomar melhores decisões em seus investimentos."
    },
    {
        question: "As ferramentas BW são realmente gratuitas?",
        answer: "Sim! Extensões Chrome, Validador de Nicho, Calculadora ROI e Gerador de Copy são ferramentas 100% gratuitas para todos os usuários. Você só paga se quiser acessar versões premium com recursos avançados."
    },
    {
        question: "Posso usar o app em iOS e Android?",
        answer: "Sim! O App Digital BW está disponível para iOS e Android. Você pode acessar toda a plataforma, comprar ativos, solicitar serviços, acompanhar métricas e receber notificações em tempo real direto do seu celular."
    },
    {
        question: "Como funciona o Ranking de Premiações?",
        answer: "Rastreamos as compras e engajamento dos clientes. Os tops 1, 2 e 3 compradores do mês recebem reconhecimento, benefícios exclusivos e menção na hall da fama. Quanto mais você compra e se engaja, maiores suas chances de premiação."
    },
    {
        question: "Existe contrato de longo prazo obrigatório?",
        answer: "Não! Para ativos e cursos, não há contrato. Para serviços gerenciados de tráfego, recomendamos mínimo de 3 meses para ver resultados sólidos, mas você pode cancelar a qualquer momento. Somos transparentes em nossas políticas."
    },
    {
        question: "Como recebo suporte se tiver dúvidas?",
        answer: "Temos suporte 24/7 via WhatsApp, Email e dentro da plataforma. Além disso, você tem acesso a comunidade exclusiva, calls agendadas com especialistas e documentações completas. A resposta média é de 2-4 horas."
    },
    {
        question: "Como começo meu primeiro serviço?",
        answer: "É simples! Clique em \"Solicitar um serviço\" ou \"Falar com especialista\". Preencha um formulário rápido com suas informações. Um especialista entrará em contato para entender suas necessidades e recomendar a solução perfeita para seu negócio."
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
                        <div className="px-16 pb-8">
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
        <section id="faq" className="relative bg-[#000] py-24 overflow-hidden">
            {/* BACKGROUND SYSTEM: Grid + Atmospheric Lighting */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="background-container !opacity-[0.03]" />
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#FF5500]/5 blur-[120px] rounded-full opacity-30" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#FF5500]/5 blur-[150px] rounded-full opacity-20" />
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10">

                {/* 1. CABEÇALHO (Industrial & Technical) */}
                <div className="text-center mb-20 relative">

                    <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter uppercase leading-none">
                        Dúvidas <span className="text-[#FF5500] drop-shadow-[0_0_20px_rgba(255,85,0,0.3)]">Frequentes</span>
                    </h2>

                    <p className="text-gray-500 text-sm md:text-lg font-sans max-w-2xl mx-auto leading-relaxed antialiased">
                        Sua jornada para a escala global começa com clareza técnica. <br className="hidden md:block" />
                        Explore os parâmetros do nosso ecossistema de alta performance.
                    </p>

                    {/* Decorative side lines */}
                    <div className="absolute top-1/2 -left-20 w-40 h-[1px] bg-gradient-to-r from-transparent to-white/5 hidden xl:block" />
                    <div className="absolute top-1/2 -right-20 w-40 h-[1px] bg-gradient-to-l from-transparent to-white/5 hidden xl:block" />
                </div>

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
                    <button className="relative h-20 px-12 rounded-2xl bg-gradient-to-b from-[#FF6A1A] to-[#E54800] border-t border-white/20 text-sm font-sans font-extrabold text-white uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-4 active:scale-[0.97] outline-none group/btn shadow-[0_20px_50px_-10px_rgba(255,85,0,0.4),inset_0_1px_0_rgba(255,255,255,0.4)] hover:shadow-[0_30px_60px_-5px_rgba(255,85,0,0.5)] hover:-translate-y-2">
                        <MessageCircle size={22} className="transition-transform group-hover/btn:scale-110" strokeWidth={2.5} />
                        Falar com Especialista
                    </button>

                    {/* Subtle Glow beneath the button */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-20 bg-[#FF5500]/20 blur-[60px] pointer-events-none" />
                </div>

                {/* Industrial Divider Section */}
                <div className="mt-20 flex flex-col items-center gap-8 opacity-20 group">
                    <div className="flex items-center gap-4">
                        <div className="h-px w-24 bg-gradient-to-r from-transparent to-white/20" />
                        <ShieldCheck size={20} className="text-[#FF5500]" />
                        <div className="h-px w-24 bg-gradient-to-l from-transparent to-white/20" />
                    </div>
                    <span className="text-[9px] font-mono text-white/40 tracking-[0.8em] uppercase group-hover:text-[#FF5500]/60 transition-colors duration-700">BW Digital Global Infrastructure</span>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
