import React from 'react';

interface MacbookMockupProps {
    isOpen: boolean;
    children: React.ReactNode;
}

const MacbookMockup: React.FC<MacbookMockupProps> = ({ isOpen, children }) => {
    return (
        <div className="relative w-full flex items-center justify-center">
            {/* 1. CARROSSEL CONTENT (Z-INDEX 1) */}
            <div
                className={`absolute left-1/2 z-[1] transition-all duration-700 ease-in-out ${isOpen ? 'opacity-100 blur-0' : 'opacity-0 blur-[10px]'
                    }`}
                style={{
                    width: '1920px',
                    maxWidth: '1920px',
                    marginLeft: '-960px',
                }}
            >
                <div className="relative w-full flex justify-center items-center">
                    {/* Responsive Scaler - Calibrated Scale and Position */}
                    <div className="transition-transform duration-1000 ease-in-out transform
            scale-[0.27] sm:scale-[0.41] md:scale-[0.70] lg:scale-[0.84]
            translate-y-[-75px] sm:translate-y-[-112px] md:translate-y-[-175px] lg:translate-y-[-212px]
          ">
                        {children}
                    </div>
                </div>
            </div>

            {/* 2. MACBOOK TELA (Z-INDEX 2) */}
            <div className="tela absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] w-[300px] sm:w-[450px] md:w-[750px] lg:w-[950px] pointer-events-none"
                style={{ perspective: '2800px' }}
            >
                <img
                    src="/superior-macbook.webp"
                    alt="Macbook Screen"
                    className={`w-full transition-all duration-700 ease-in-out origin-bottom ${isOpen ? 'telaaberta' : ''}`}
                    style={{
                        transformStyle: 'preserve-3d',
                        transform: isOpen
                            ? 'translateY(0%) rotateX(0deg) translateZ(0)'
                            : 'translateY(-5%) rotateX(-90deg) translateZ(0)'
                    }}
                />
            </div>

            {/* 3. MACBOOK BASE (Z-INDEX 3) */}
            <div className="base absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[3] w-[300px] sm:w-[450px] md:w-[750px] lg:w-[950px] pointer-events-none">
                <img src="/inferior-macbook.webp" alt="Macbook Base" className="w-full" />
            </div>
        </div>
    );
};

export default MacbookMockup;
