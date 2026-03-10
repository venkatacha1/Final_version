import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const defaultSteps = [
    {
        title: "Drop your Request",
        description: "Fill out our simple form to initiate your proprietorship registration process.",
        image: "/images/resource/mailbox_3d_new.png",
        alt: "Drop Request"
    },
    {
        title: "Expert will contact you",
        description: "Our legal specialists will reach out to understand your business needs and collect details.",
        image: "/images/resource/expert_3d_new.png",
        alt: "Expert Contact"
    },
    {
        title: "Get your solutions",
        description: "We handle all the paperwork, government filings, and legal complexities for you.",
        image: "/images/resource/solutions_3d_new.png",
        alt: "Solutions"
    },
    {
        title: "Get your work done",
        description: "Receive your final registration certificate and start your business journey immediately!",
        image: "/images/resource/completion_3d_new.png",
        alt: "Work Done"
    }
];

const ProcessFlow = ({ steps: customSteps = [], title = "Our Process Flow" }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const stepDuration = 2500; // 2.5 seconds per step for a snappy feel

    const fallbackSteps = useMemo(() => defaultSteps, []);
    const steps = customSteps.length ? customSteps : fallbackSteps;

    useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(() => {
            setCurrentStep((prev) => (prev + 1) % steps.length);
        }, stepDuration);

        return () => clearInterval(timer);
    }, [isPaused, steps.length]);

    const handleStepClick = (index) => {
        setCurrentStep(index);
        // Briefly pause auto-play when user manually selects a step
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 3000);
    };

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extrabold text-[#1a2b1f] mb-6 tracking-tight"
                    >
                        {title}
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        className="h-1.5 bg-theme-primary mx-auto rounded-full"
                    ></motion.div>
                </div>

                <div
                    className="max-w-5xl mx-auto"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Professional Stepper Navigation */}
                    <div className="flex items-center justify-between mb-20 relative px-4 md:px-12">
                        {/* Background Progress Line */}
                        <div className="absolute top-1/2 left-12 right-12 h-0.5 bg-gray-100 -translate-y-1/2 z-0 hidden md:block">
                            <motion.div
                                className="h-full bg-theme-primary"
                                initial={{ width: "0%" }}
                                animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                                transition={{ duration: 0.8, ease: "circOut" }}
                            />
                        </div>

                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="relative z-10 flex flex-col items-center cursor-pointer group"
                                onClick={() => handleStepClick(index)}
                            >
                                <motion.div
                                    animate={{
                                        backgroundColor: index <= currentStep ? "#f9d74f" : "#fff",
                                        borderColor: index <= currentStep ? "#f9d74f" : "#f3f4f6",
                                        scale: index === currentStep ? 1.15 : 1,
                                        boxShadow: index === currentStep ? "0 10px 25px -5px rgba(249, 215, 79, 0.4)" : "0 4px 6px -1px rgba(0, 0, 0, 0.05)"
                                    }}
                                    className="w-10 h-10 md:w-14 md:h-14 rounded-2xl flex items-center justify-center border-2 transition-all duration-500"
                                >
                                    {index < currentStep ? (
                                        <i className="fa-solid fa-check text-[#1a2b1f] text-sm md:text-base"></i>
                                    ) : (
                                        <span className={`text-sm md:text-lg font-bold ${index === currentStep ? "text-[#1a2b1f]" : "text-gray-300"}`}>
                                            {index + 1}
                                        </span>
                                    )}
                                </motion.div>

                                <motion.span
                                    animate={{
                                        opacity: index === currentStep ? 1 : 0.4,
                                        y: index === currentStep ? 0 : 5
                                    }}
                                    className={`absolute top-16 md:top-20 whitespace-nowrap text-xs md:text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${index === currentStep ? "text-[#1a2b1f]" : "text-gray-400 group-hover:text-gray-600"
                                        }`}
                                >
                                    Step {index + 1}
                                </motion.span>
                            </div>
                        ))}
                    </div>

                    {/* Content Display Area */}
                    <div className="bg-gray-50/50 rounded-[3rem] p-8 md:p-16 border border-gray-100 backdrop-blur-sm relative overflow-hidden">
                        {/* Moving Progress Bar (Background Decor) */}
                        {!isPaused && (
                            <motion.div
                                key={`progress-${currentStep}`}
                                className="absolute bottom-0 left-0 h-1.5 bg-theme-primary/30"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: stepDuration / 1000, ease: "linear" }}
                            />
                        )}

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
                            >
                                {/* Left Side: Image with 3D Float Effect */}
                                <div className="w-full md:w-1/2 flex justify-center">
                                    <div className="relative">
                                        <motion.div
                                            className="absolute -inset-4 bg-theme-primary/10 rounded-full blur-3xl"
                                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                        <div className="relative w-48 h-48 md:w-72 md:h-72 bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 flex items-center justify-center p-4 border border-white/50 overflow-hidden">
                                            <motion.img
                                                src={steps[currentStep].image}
                                                alt={steps[currentStep].alt}
                                                className="w-full h-full object-contain scale-125"
                                                animate={{
                                                    y: [0, -15, 0],
                                                    rotate: [0, 2, 0, -2, 0]
                                                }}
                                                transition={{
                                                    duration: 5,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side: Text Content */}
                                <div className="w-full md:w-1/2 text-left">
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <span className="inline-block px-4 py-1.5 rounded-full bg-theme-primary text-[#1a2b1f] text-xs font-black uppercase tracking-widest mb-6">
                                            Process Step {currentStep + 1}
                                        </span>
                                        <h3 className="text-3xl md:text-4xl font-black text-[#1a2b1f] mb-6 leading-tight">
                                            {steps[currentStep].title}
                                        </h3>
                                        <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-10 font-medium">
                                            {steps[currentStep].description}
                                        </p>

                                        <div className="flex gap-4">
                                            {steps.map((_, i) => (
                                                <div
                                                    key={i}
                                                    className={`h-1.5 rounded-full transition-all duration-500 ${i === currentStep ? "w-12 bg-theme-primary" : "w-3 bg-gray-200"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessFlow;