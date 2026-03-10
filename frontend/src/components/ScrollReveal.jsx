import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, width = "fit-content", animation = "fadeInUp", delay = 0, duration = 0.5 }) => {
    const variants = {
        fadeInUp: {
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 }
        },
        fadeInLeft: {
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 }
        },
        fadeInRight: {
            hidden: { opacity: 0, x: 75 },
            visible: { opacity: 1, x: 0 }
        },
        zoomIn: {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
        }
    };

    return (
        <motion.div
            variants={variants[animation]}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration, delay, ease: "easeOut" }}
            style={{ width }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
