# Briefing de Criação: BW Digital Platform

Este documento consolida as decisões, marcos e especificações técnicas estabelecidas para a criação do site **BW Digital**. Serve como fonte de referência exclusiva para este projeto.

---

## 1. Visão Geral do Projeto
- **Marca:** BW Digital (Plataforma BW).
- **Missão:** Centro operacional de alta performance para escala de operações digitais.
- **Foco Principal:** Oferta de ativos publicitários (Meta, Google, TikTok, Shopify) e infraestrutura de contingência.

---

## 2. Identidade Visual (Design System)

### Diretrizes Estéticas
- **Estilo:** "Void Theme" com estética Industrial Moderna.
- **Atmosfera:** Técnica, limpa, focada em dados e autoridade operacional.
- **Destaque:** Uso de simulação de interface macOS (MacOSChrome) para exibição de painéis operacionais.

### Paleta de Cores (Configurada em Tailwind)
- **Background:** `#050505` (Preto Profundo).
- **Brand Principal:** `#FF5500` (Laranja Neon / BW Orange).
- **Acentos:** Sucesso em Acid Green e detalhes técnicos em Gray-300/400.
- **Bordas:** Tons de Cinza Escuro (`#222222` e `#333333`).

### Tipografia
- **Títulos/Display:** `Space Grotesk` (Autoridade e precisão).
- **UI/Corpo:** `Inter` (Legibilidade SaaS).
- **Global:** Suavização de fonte (`antialiased`) ativa para leitura em fundos escuros.

### Sistema de Background (Custom CSS)
- **Grid Técnico:** Implementação manual via `background-image` (linear-gradients) com espaçamento de 50px e máscara radial para foco central.

---

## 3. Implementações Realizadas (Sessões 1 e 2)

### Sessão 01: Hero Section
- **Navbar:** Fixa, com efeito glassmorphism (`backdrop-blur-xl`) e borda inferior sutil.
- **Header:** Headline focada em "Escalar Operações Digitais".
- **Visual Principal:** Dashboard flutuante dentro de um container que simula o Chrome em macOS.
- **Stats Strip:** Faixa horizontal com dados operacionais (+5.000 Ativos Vendidos, +1.200 Clientes Ativos, Desde 2022).

### Sessão 02: Ativos Ads
- **Grid de Ativos:** Cards para Meta Ads, Google Ads, TikTok Ads, Shopify e Estruturas de Contingência.
- **Design de Card:** Gradientes lineares sutis, bordas interativas que brilham no hover e micro-checklists de features.
- **Energy Flow System:** Visual de "Níveis de Energia" interativos (ícones que se conectam ao centro via caminhos energizados por SVG).

### Sessão 03: Service Hub (Sessão Especializada)
- **Service Marquee:** Carrossel infinito com 25+ ícones de serviços especializados (Design, B.I., Tráfego, Dev, etc.).
- **Process Pipeline:** Fluxograma interativo de 4 estágios (Solicitação -> Análise -> Match -> Entrega) com lógica de animação sequencial.
- **Status Panel:** Painel de monitoramento em tempo real simulado com detalhes de engenharia e IDs de requisição.
- **Guarantees Grid:** Destaque para SLA de 72h, segurança de dados e experts validados.

### Sessão 04: Strategic Solutions (Hub de Alavancagem)
- **Interface de Tabs:** Sistema de alternância estilo "Switch Físico" para navegar entre Estruturação, Curso e Gestão.
- **Mentoria de Escala:** Foco em processos e faturamento gerado (R$2M+).
- **Curso de Contingência:** Oferta direta com visual de "VIP Access" e checkout facilitado.
- **Planos de Gestão:** Tabela comparativa (Start, Pro, Scale) com selos de popularidade e foco em tráfego internacional.

---

## 4. Stack Tecnológica
- **Framework:** Vite + React 19 + TypeScript.
- **Estilização:** Tailwind CSS v4.
- **Base de Estilos:** `index.css` com sistema de camadas (`base`, `utilities`) e animações customizadas (`fade-in-up`, `float-orb`).

---

## 5. Próximos Passos (Sessão 5 e Além)
- Implementação de Seção de Depoimentos / Prova Social com estética industrial.
- Criação do Rodapé (Footer) com log de sistema operacional.
- Otimização final de performance e SEO.

---
*Documento atualizado de acordo com o diretório atual do projeto (bw_digital).*
