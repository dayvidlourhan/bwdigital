# BW Digital - Hero Section

Este projeto contém a implementação da "Sessão Hero" (Primeira Dobra) para a plataforma **BW Digital**, seguindo rigorosamente as especificações de design "Void" e "High-Converting SaaS".

## 🚀 Como Visualizar

O projeto foi configurado com Vite + React + Tailwind CSS.

1.  Abra o terminal neste diretório: `bw-platform`
2.  Instale as dependências (se ainda não fez):
    ```bash
    npm install
    ```
3.  Execute o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
4.  Acesse `http://localhost:5173` no seu navegador.

## 🎨 Design System Implementado

### Tema "Void"
- **Background**: `#050505` (Preto Absoluto) com textura de grid sutil.
- **Brand Colors**: Laranja Neon (`#FF5500`).
- **Accent**: Verde Neon para dados de sucesso.

### UI/UX Decisions
- **Glassmorphism**: Painéis translúcidos (`backdrop-blur-xl`) para Navbar e Cards, criando profundidade moderna.
- **Tipografia**: `Inter` (UI) e `Space Grotesk` (Display) para autoridade tecnológica.
- **Layout Assimetrico**: Foco visual no Dashboard flutuante à direita, equilibrando o copy de alta conversão à esquerda.
- **Animações**:
    - `float`: Efeito de flutuação suave no Dashboard para dar vida ("Tech Vibe").
    - `fade-in-up`: Entrada sequencial dos elementos para guiar o olhar.
    - `glow`: Sombras coloridas pulsantes para destacar ações principais.

## 📁 Estrutura de Arquivos

- `src/components/Hero.tsx`: Componente principal contendo toda a lógica e markup da Hero Section.
- `src/index.css`: Definições globais de estilos, animações personalizadas (`float`, `gradient-x`) e utilitários de vidro (`.glass-panel`).
- `tailwind.config.js`: Configuração completa do Design System (Cores, Fontes, Sombras).
