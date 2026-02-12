import { Shield, TrendingUp, Bookmark, Server, Medal, Headphones, Zap, Check } from 'lucide-react';

export const SOLUTIONS_DATA = [
    {
        id: 2,
        label: 'GESTÃO DE TRÁFEGO PAGO',
        title: 'Deixe seu tráfego',
        highlight: 'com especialistas',
        description: 'Nossa equipe cuida de todas as suas campanhas enquanto você foca no que realmente importa: seu negócio.',
        features: [
            { icon: TrendingUp, title: 'Meta & Google Ads', sub: 'Gestão completa de campanhas' },
            { icon: Server, title: 'Relatórios Semanais', sub: 'Acompanhamento detalhado' },
            { icon: Zap, title: 'Otimização Contínua', sub: 'Melhorias constantes' },
            { icon: Headphones, title: 'Suporte Dedicado', sub: 'WhatsApp exclusivo' },
            { icon: Shield, title: 'Ativos Próprios', sub: 'BMs e contas da BW' },
            { icon: Medal, title: 'ROI 5x+', sub: 'Retorno comprovado' },
        ],
        ctaText: 'Conhecer os Planos',
        rightContent: {
            type: 'pricing',
            title: 'Nossos Planos de Gestão',
            subtitle: 'Escolha o ideal para seu momento',
            plans: [
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
            ]
        }
    },
    {
        id: 0,
        label: 'ESTRUTURAÇÃO DE EMPRESAS',
        title: 'Estruture seu negócio para',
        highlight: 'escalar',
        description: 'Nossa mentoria vai além do básico. Ajudamos você a estruturar seu negócio do zero, definir processos, organizar finanças e criar um plano de crescimento sustentável.',
        features: [
            { icon: Shield, title: 'Diagnóstico Completo', sub: 'Análise profunda do seu negócio' },
            { icon: TrendingUp, title: 'Estratégia Personalizada', sub: 'Plano sob medida para você' },
            { icon: Bookmark, title: 'Acompanhamento Semanal', sub: 'Calls com especialistas' },
            { icon: Server, title: 'Templates Exclusivos', sub: 'Documentos prontos para usar' },
            { icon: Medal, title: 'Certificação', sub: 'Reconhecimento de conclusão' },
            { icon: Headphones, title: 'Suporte Prioritário', sub: 'Atendimento VIP dedicado' },
        ],
        ctaText: 'Agende uma reunião gratuita',
        rightContent: {
            type: 'mentorship',
            title: 'Mentoria Completa',
            subtitle: '3 meses de transformação',
            stats: [
                { value: '50+', label: 'Empresas \n Estruturadas' },
                { value: 'R$2M+', label: 'Faturamento \n Gerado' }
            ],
            bonus: 'Acesso vitalício à comunidade de empreendedores BW + networking exclusivo'
        }
    },
    {
        id: 1,
        label: 'CURSO DE CONTINGÊNCIA',
        title: 'Domine a Contingência no',
        highlight: 'Facebook Ads',
        description: 'Aprenda as estratégias que profissionais usam para manter suas contas ativas, escalar campanhas e nunca mais perder dinheiro com bloqueios.',
        features: [
            { icon: Shield, title: 'Contingência Avançada', sub: 'Proteja seus ativos' },
            { icon: TrendingUp, title: 'Métricas de Escala', sub: 'Saiba quando escalar' },
            { icon: Zap, title: 'Gatilhos de Vendas', sub: 'Aumente conversões' },
            { icon: Check, title: '+20 Aulas Práticas', sub: 'Do zero ao avançado' },
        ],
        ctaText: 'Conhecer o Curso',
        rightContent: {
            type: 'course',
            price: 'R$97',
            oldPrice: 'De R$297',
            items: [
                '+20 aulas práticas',
                'Acesso vitalício',
                'Grupo exclusivo no WhatsApp',
                'Certificado de conclusão',
                'Bônus: Templates de campanhas'
            ]
        }
    }
];
