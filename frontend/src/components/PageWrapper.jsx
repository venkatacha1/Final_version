import React from 'react';
import { motion } from 'framer-motion';
import Breadcrumbs from './Breadcrumbs';
import { useLocation } from 'react-router-dom';

const PageWrapper = ({ children }) => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {!isHome && (
                <div className="pt-28 lg:pt-32 bg-white">
                    <div className="container mx-auto px-4 lg:px-10 py-2">
                        <Breadcrumbs />
                    </div>
                </div>
            )}
            {children}
        </motion.div>
    );
};

export default PageWrapper;
