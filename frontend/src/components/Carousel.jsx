import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = ({ items, baseWidth = 300, autoplay = true, autoplayDelay = 3000, pauseOnHover = true }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const timeoutRef = useRef(null);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    useEffect(() => {
        if (autoplay && !isHovered) {
            timeoutRef.current = setTimeout(nextSlide, autoplayDelay);
        }
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [currentIndex, autoplay, isHovered]);

    return (
        <div
            className="relative w-full max-w-5xl mx-auto h-[450px] flex items-center justify-center overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative w-full h-full flex items-center justify-center perspective-1000">
                <AnimatePresence initial={false}>
                    {items.map((item, index) => {
                        const offset = (index - currentIndex + items.length) % items.length;
                        const isCenter = offset === 0;
                        const isLeft = offset === items.length - 1;
                        const isRight = offset === 1;

                        if (!isCenter && !isLeft && !isRight) return null;

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.8, x: isRight ? 300 : -300 }}
                                animate={{
                                    opacity: isCenter ? 1 : 0.6,
                                    scale: isCenter ? 1 : 0.8,
                                    x: isCenter ? 0 : isRight ? 300 : -300,
                                    zIndex: isCenter ? 30 : 10,
                                    rotateY: isCenter ? 0 : isRight ? -45 : 45,
                                }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="absolute w-[300px] md:w-[400px] h-[350px] bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 flex flex-col items-center text-center justify-center pointer-events-auto"
                            >
                                <div className="w-16 h-16 bg-theme-primary/20 rounded-2xl flex items-center justify-center mb-6 text-3xl text-theme-black">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-[#1a2b1f]">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 z-40 p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg hover:bg-theme-primary transition-colors border border-gray-100"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 z-40 p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg hover:bg-theme-primary transition-colors border border-gray-100"
            >
                <ChevronRight size={24} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 flex gap-2 z-40">
                {items.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${currentIndex === index ? "bg-theme-primary w-8" : "bg-gray-300"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
