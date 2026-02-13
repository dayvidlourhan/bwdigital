import { useState, useEffect, useRef } from 'react';
import SectionHeader from './components/ui/SectionHeader';
import MacbookMockup from './components/MacbookMockup';

const MarketTrends = () => {
    const [isOpen, setIsOpen] = useState(false);
    const macRef = useRef<HTMLDivElement>(null);

    const baseSlides = [
        '/1m_1_11zon.webp',
        '/2m_11zon.webp',
        '/3m_11zon.webp',
        '/4m_11zon.webp',
        '/5m_11zon.webp',
        '/6m_11zon.webp',
        '/7m_11zon.webp'
    ];

    const subtitles = [
        "Descubra as principais tendências do mercado digital em tempo real.",
        "Analise dados de crescimento, concorrência e potencial de escala.",
        "Identifique criativos e anúncios que realmente convertem.",
        "Compare plataformas, taxas e estruturas antes de decidir.",
        "Encontre produtos validados com alto potencial de venda.",
        "Entenda a demanda real e o comportamento do mercado.",
        "Centralize insights estratégicos para decidir com vantagem."
    ];

    // Robust Infinite Loop Strategy: [Last-1, Last, ...All, First, Second]
    // This ensures we have 2 buffers on each side to prevent empty spaces during transitions.
    const slides = [
        baseSlides[baseSlides.length - 2],
        baseSlides[baseSlides.length - 1],
        ...baseSlides,
        baseSlides[0],
        baseSlides[1]
    ];

    // Real Slides start at index 2 (0 and 1 are clones)
    const START_INDEX = 2;
    const [currentIdx, setCurrentIdx] = useState(START_INDEX);
    const [isTransitioning, setIsTransitioning] = useState(true);

    const SLIDE_WIDTH = 820;
    const GAP = 24;
    const TOTAL_SLIDE_WIDTH = SLIDE_WIDTH + GAP;

    // Handle Scroll for Opening the MacBook
    useEffect(() => {
        const handleScroll = () => {
            if (!macRef.current) return;
            const rect = macRef.current.getBoundingClientRect();
            const trigger = window.innerHeight * 0.8;
            setIsOpen(rect.top <= trigger);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Auto-Play Logic (5s Pause)
    useEffect(() => {
        if (!isOpen) return;

        const timer = setTimeout(() => {
            setIsTransitioning(true);
            setCurrentIdx((prev) => prev + 1);
        }, 5000);

        return () => clearTimeout(timer);
    }, [isOpen, currentIdx]);

    // Boundary Reset (The Infinite Jump)
    useEffect(() => {
        if (!isTransitioning) return; // Avoid loops

        // If we reached the first clone at the end (Index = Length - 2)
        // We need to jump back to the Real First (Index = START_INDEX)
        if (currentIdx === slides.length - 2) {
            const timeout = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIdx(START_INDEX);
            }, 1000); // 1000ms matches CSS duration
            return () => clearTimeout(timeout);
        }

        // Safety for reverse direction (if we allowed it)
        // If index 1 (Clone Last), jump to Real Last
        if (currentIdx === 1) {
            const timeout = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIdx(slides.length - 3);
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [currentIdx, slides.length, isTransitioning]);

    // Derived subtitle based on current real index
    // Mapping currentIdx to baseSlides index (0-6)
    // currentIdx starts at 2 (Image 1 -> baseSlides[0])
    // Index 2 -> 0, Index 3 -> 1, ...
    const activeDataIndex = (currentIdx - START_INDEX + baseSlides.length) % baseSlides.length;

    return (
        <section id="mercado" className="relative bg-[#050505] py-16 md:py-24 overflow-hidden selection:bg-[#FF5500]/30">
            {/* Seamless Transition Overlays */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-transparent pointer-events-none z-[11]" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent pointer-events-none z-[11]" />
            <style>{`
                html, body {
                    max-width: 100% !important;
                    overflow-x: hidden !important;
                }
            `}</style>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <SectionHeader
                    title="Mercado em"
                    highlight="Alta"
                    subtitle={subtitles[activeDataIndex]}
                    className="mb-0 min-h-[140px] md:min-h-[120px]"
                />

                <div ref={macRef} className="relative w-full h-[450px] sm:h-[550px] md:h-[700px] lg:h-[850px] flex items-center justify-center -mt-12 md:-mt-24">

                    <MacbookMockup isOpen={isOpen}>
                        {/* Overlay Fades - High Contrast Focus */}
                        <div className="absolute inset-y-[-5%] inset-x-[-20%] z-[2] pointer-events-none"
                            style={{
                                background: 'linear-gradient(90deg, #050505 30%, transparent 45%, transparent 55%, #050505 70%)'
                            }}
                        />

                        {/* Slider Track */}
                        {/* We use absolute positioning + translateX to center the active slide perfectly */}
                        <div
                            className="flex gap-6 absolute top-0 left-1/2"
                            style={{
                                // Math: Shift left by (CurrentIndex * Stride) + (Half Slide Width to center it)
                                transform: `translateX(calc(-${currentIdx * TOTAL_SLIDE_WIDTH}px - ${SLIDE_WIDTH / 2}px))`,
                                transition: isTransitioning ? 'transform 1000ms cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
                                width: 'max-content'
                            }}
                        >
                            {slides.map((src, i) => {
                                const isCenter = i === currentIdx;
                                return (
                                    <div
                                        key={i}
                                        className={`w-[820px] h-[512px] flex-shrink-0 rounded-[4px] overflow-hidden border border-white/5 bg-black transition-all duration-1000 ${isCenter ? 'opacity-100 scale-100 shadow-2xl' : 'opacity-10 scale-[0.98]'
                                            }`}
                                    >
                                        <img src={src} alt="" className="w-full h-full object-cover" />
                                    </div>
                                );
                            })}
                        </div>
                    </MacbookMockup>
                </div>
            </div>

            <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-[#FF5500]/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
};

export default MarketTrends;
