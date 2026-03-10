import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Folder from './Folder';

const DocumentsRequired = ({ documents, title = "Documents Required" }) => {
    const [isRevealed, setIsRevealed] = useState(false);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    // Track window resize for responsive calculations
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth < 768;
    const isTablet = windowWidth >= 768 && windowWidth < 1024;

    // Responsive configuration
    const config = {
        radius: isMobile ? 220 : isTablet ? 280 : 360,
        spread: isMobile ? 100 : isTablet ? 110 : 120,
        cardWidth: isMobile ? 140 : isTablet ? 200 : 280,
        cardHeight: isMobile ? 90 : isTablet ? 130 : 180,
        folderSize: isMobile ? (isRevealed ? 1.5 : 2.2) : (isRevealed ? 2.5 : 3.5),
        titleSize: isMobile ? 'text-3xl' : 'text-4xl lg:text-6xl',
        yOffset: isMobile ? 120 : 150
    };

    // Spread calculation for the fan-out effect
    const getCardPosition = (index, total) => {
        const startAngle = -config.spread / 2;
        const step = total > 1 ? config.spread / (total - 1) : 0;
        const angle = startAngle + (index * step);

        // Convert polar to cartesian
        const rad = (angle - 90) * (Math.PI / 180);
        const x = Math.cos(rad) * config.radius;
        const y = Math.sin(rad) * config.radius + config.yOffset;

        return { x, y, rotate: angle };
    };

    return (
        <section className={`py-32 bg-white overflow-visible ${isMobile ? 'min-h-[800px]' : 'min-h-[900px]'} flex items-center justify-center`}>
            <div className="container mx-auto px-4 relative flex flex-col items-center">

                {/* Title */}
                <motion.div
                    layout
                    className="text-center mb-24 z-20"
                >
                    <h2 className={`${config.titleSize} font-bold mb-4 relative inline-block text-black`}>
                        {title}
                        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-1.5 lg:h-2 bg-theme-primary rounded-full"></span>
                    </h2>
                </motion.div>

                {/* The Folder & Fan-Out Container */}
                <div className={`relative flex items-center justify-center w-full ${isMobile ? 'min-h-[500px]' : 'min-h-[500px]'}`}>

                    {/* Animated Glow Background */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isMobile ? 'w-[300px] h-[300px]' : 'w-[600px] h-[600px]'} bg-theme-primary/10 rounded-full blur-[100px] pointer-events-none`}></div>

                    {/* Document Cards - Fanning out */}
                    <AnimatePresence>
                        {isRevealed && (
                            <div className="absolute inset-0 pointer-events-none">
                                {documents.map((doc, index) => {
                                    const { x, y, rotate } = getCardPosition(index, documents.length);
                                    const isYellow = index % 2 !== 0;

                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 0, y: 0, rotate: 0, scale: 0.5 }}
                                            animate={{
                                                opacity: 1,
                                                x,
                                                y,
                                                rotate,
                                                scale: 1,
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 100,
                                                    damping: 15,
                                                    delay: index * 0.1
                                                }
                                            }}
                                            exit={{
                                                opacity: 0,
                                                x: 0,
                                                y: 0,
                                                rotate: 0,
                                                scale: 0.5,
                                                transition: { duration: 0.2 }
                                            }}
                                            style={{
                                                width: config.cardWidth,
                                                height: config.cardHeight,
                                                marginLeft: -(config.cardWidth / 2),
                                                marginTop: -(config.cardHeight / 2)
                                            }}
                                            className={`absolute left-1/2 top-1/2 rounded-[1.5rem] lg:rounded-[2.5rem] shadow-2xl p-3 lg:p-6 flex flex-col items-center justify-center text-center pointer-events-auto border-2 lg:border-4 ${isYellow
                                                ? 'bg-theme-primary text-theme-black border-theme-primary shadow-theme-primary/20'
                                                : 'bg-theme-black text-white border-theme-black shadow-black/20'
                                                }`}
                                            whileHover={{ scale: 1.1, zIndex: 50, transition: { duration: 0.2 } }}
                                        >
                                            <div className={`${isMobile ? 'w-10 h-10 mb-2' : 'w-14 h-14 mb-4'} rounded-xl lg:rounded-3xl flex items-center justify-center ${isYellow ? 'bg-theme-black/10' : 'bg-theme-primary'
                                                }`}>
                                                <i className={`fa-solid ${doc.icon} ${isMobile ? 'text-lg' : 'text-2xl'} ${isYellow ? 'text-theme-black' : 'text-black'
                                                    }`}></i>
                                            </div>
                                            <span className={`${isMobile ? 'text-sm' : 'text-xl'} font-bold leading-tight`}>
                                                {doc.title}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        )}
                    </AnimatePresence>

                    {/* Folder Component */}
                    <motion.div
                        layout
                        className="relative z-30 flex flex-col items-center mt-40"
                    >
                        <div
                            className="relative group cursor-pointer"
                            onClick={() => setIsRevealed(!isRevealed)}
                        >
                            <Folder
                                color="#f9d74f"
                                size={config.folderSize}
                                items={[]}
                                className="relative z-10 transition-transform duration-500"
                            />

                            <AnimatePresence>
                                {!isRevealed && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className={`absolute ${isMobile ? '-bottom-10' : '-bottom-16'} left-1/2 -translate-x-1/2 flex flex-col items-center gap-2`}
                                    >
                                        <div className="flex gap-1">
                                            {[1, 2, 3].map(i => (
                                                <motion.div
                                                    key={i}
                                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                                    transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
                                                    className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-theme-primary"
                                                />
                                            ))}
                                        </div>
                                        <span className={`text-gray-400 font-bold tracking-widest uppercase ${isMobile ? 'text-[8px]' : 'text-xs'}`}>Click to View Documents</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>

                {/* Footer Hide Button */}
                <AnimatePresence>
                    {isRevealed && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className={`${isMobile ? 'mt-20' : 'mt-32'} z-40`}
                        >
                            <button
                                onClick={() => setIsRevealed(false)}
                                className={`${isMobile ? 'px-6 py-3 text-sm' : 'px-10 py-4 text-lg'} bg-theme-black text-theme-primary rounded-full font-bold hover:scale-105 transition-all shadow-xl active:scale-95 flex items-center gap-3 border-2 border-theme-black hover:bg-theme-primary hover:text-theme-black`}
                            >
                                <i className="fa-solid fa-circle-xmark"></i>
                                Close Folder
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default DocumentsRequired;
