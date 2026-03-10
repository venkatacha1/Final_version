import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { newsItems } from '../data/newsData';

const NewsSection = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;
    const totalPages = Math.ceil(newsItems.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = newsItems.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        // Scroll to top of section
        const section = document.getElementById('news-section');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Dynamic pagination logic to show numbers like 1 2 3 4 ... max
    const getPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages;
    };

    return (
        <section id="news-section" className="py-24 bg-[#fcfcfc]">
            <div className="container mx-auto px-4">
                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mb-20">
                        <AnimatePresence mode="wait">
                            {currentItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -30 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="group"
                                >
                                    <Link to={`/news-details/${item.id}`} className="block">
                                        <div className="relative aspect-[16/10] mb-8 overflow-hidden rounded-2xl bg-gray-100 shadow-sm transition-transform duration-500 group-hover:shadow-xl">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            {/* Category Overlay */}
                                            <div className="absolute top-6 left-6">
                                                <div className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest text-black shadow-sm">
                                                    {item.category}
                                                </div>
                                            </div>
                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-theme-primary/80">
                                                <span>{item.category}</span>
                                            </div>
                                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight group-hover:text-theme-primary transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-500">
                                                        {item.author.charAt(0)}
                                                    </div>
                                                    <span className="font-medium">{item.author}</span>
                                                </div>
                                                <span className="opacity-30">•</span>
                                                <div className="flex items-center gap-3">
                                                    <span className="flex items-center gap-1.5">
                                                        <Clock size={14} className="opacity-60" />
                                                        {item.date}
                                                    </span>
                                                    <span className="opacity-30">•</span>
                                                    <span>{item.readTime}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-center gap-6">
                        <button
                            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className={`p-3 rounded-full transition-all duration-300 ${currentPage === 1
                                ? 'text-gray-200 cursor-not-allowed'
                                : 'text-gray-900 hover:bg-gray-100 active:scale-95'
                                }`}
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <div className="flex items-center gap-1">
                            {getPageNumbers().map((page) => (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className={`relative w-10 h-10 flex items-center justify-center text-sm font-bold transition-all duration-300 rounded-lg ${currentPage === page
                                        ? 'text-purple-600'
                                        : 'text-gray-400 hover:text-gray-900 hover:bg-gray-50'
                                        }`}
                                >
                                    {page}
                                    {currentPage === page && (
                                        <motion.div
                                            layoutId="pageHighlight"
                                            className="absolute -bottom-1 w-1 h-1 bg-purple-600 rounded-full"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className={`p-3 rounded-full transition-all duration-300 ${currentPage === totalPages
                                ? 'text-gray-200 cursor-not-allowed'
                                : 'text-gray-900 hover:bg-gray-100 active:scale-95'
                                }`}
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
