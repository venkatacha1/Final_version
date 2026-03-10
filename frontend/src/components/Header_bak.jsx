import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import SearchModal from './SearchModal';
import SearchOverlay from './SearchOverlay';

const Header = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const [isHovered, setIsHovered] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);

    // Detect scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${isScrolled ? 'px-0 pt-0' : 'px-4 lg:px-8 pt-4'
                }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Main Header */}
            <div className={`bg-theme-primary/100 relative z-20 transition-all duration-500 ${isScrolled
                ? 'rounded-none shadow-md'
                : 'rounded-2xl lg:rounded-3xl shadow-2xl'
                }`}>
                <div className="w-full px-4 lg:px-10 flex items-center justify-between h-20 gap-4">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="block">
                            <img
                                src="/images/Logo-animation/MakeEasy-AnimatedLogo.gif"
                                alt="MakeEasyFilings Logo"
                                className="h-16 w-auto object-contain"
                            />
                        </Link>
                    </div>

                    {/* Navigation Menu */}
                    <div className="hidden lg:flex items-center flex-1 justify-center">
                        {!isSearchOpen ? (
                            <nav className="nav main-menu">
                                <ul className="flex items-center space-x-1 xl:space-x-3 font-medium text-[#4a4a4a] uppercase text-[13px] xl:text-[14px] tracking-tight">
                                    {/* New Business */}
                                    <li className="relative group py-3 px-1.5 xl:px-2">
                                        <a href="#" className="flex items-center gap-1 group-hover:text-[#a68921] transition-colors relative">
                                            New Business <i className="fa-solid fa-caret-down text-[10px]"></i>
                                            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#a68921] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                        </a>
                                        <ul className="absolute top-full left-0 w-80 bg-white shadow-xl rounded-b-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 py-4 border-t-4 border-theme-black z-[100]">
                                            <li><Link to="/registration/proprietorship" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Proprietorship</Link></li>
                                            <li><Link to="/registration/opc" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">One Person Company</Link></li>
                                            <li><Link to="/registration/partnership" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Partnership Firm</Link></li>
                                            <li><Link to="/registration/private-limited" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Private Limited Company</Link></li>
                                            <li><Link to="/registration/llp" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Limited Liability Partnership (LLP)</Link></li>
                                            <li><Link to="/registration/public-limited" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Public Limited Company</Link></li>
                                            <li><Link to="/registration/nidhi" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Nidhi Limited Company</Link></li>
                                            <li><Link to="/registration/section-8" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Section 8 Company</Link></li>
                                            <li><Link to="/registration/ngo" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">NGO Registration</Link></li>
                                            <li><Link to="/registration/indian-subsidiary" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Indian Subsidiary (International)</Link></li>
                                        </ul>
                                    </li>

                                    {/* Intellectual Property */}
                                    <li className="relative group py-3 px-1.5 xl:px-2">
                                        <a href="#" className="flex items-center gap-1 group-hover:text-[#a68921] transition-colors relative">
                                            Intellectual Property <i className="fa-solid fa-caret-down text-[10px]"></i>
                                            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#a68921] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                        </a>
                                        <ul className="absolute top-full left-0 w-80 bg-white shadow-xl rounded-b-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 py-4 border-t-4 border-theme-black z-[100]">
                                            <li><Link to="/services/trademark-registration" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Trademark Registration</Link></li>
                                            <li><Link to="/services/trademark-objection" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Trademark Objection</Link></li>
                                            <li><Link to="/services/trademark-hearing" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Trademark Hearing</Link></li>
                                            <li><Link to="/services/trademark-opposition" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Trademark Opposition</Link></li>
                                            <li><Link to="/services/trademark-legal-certificate" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Trademark Legal Certificate</Link></li>
                                            <li><Link to="/services/copyright-services" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Copyright Services</Link></li>
                                            <li><Link to="/services/design-service" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Design Service</Link></li>
                                            <li><Link to="/services/patent-services" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Patent Services</Link></li>
                                        </ul>
                                    </li>

                                    {/* Tax & Accounting */}
                                    <li className="relative group py-3 px-1.5 xl:px-2">
                                        <a href="#" className="flex items-center gap-1 group-hover:text-[#a68921] transition-colors relative">
                                            Tax & Accounting <i className="fa-solid fa-caret-down text-[10px]"></i>
                                            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#a68921] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                        </a>
                                        <ul className="absolute top-full left-0 w-[400px] bg-white shadow-xl rounded-b-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 py-4 border-t-4 border-theme-black z-[100]">
                                            <li><Link to="/tax-accounting/income-tax-returns" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Income Tax Returns</Link></li>
                                            <li><Link to="/tax-accounting/itr1" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Form ITR 1 (form 16)</Link></li>
                                            <li><Link to="/tax-accounting/itr2" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Form ITR 2 (Directors/ HUF)</Link></li>
                                            <li><Link to="/tax-accounting/itr3" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Form ITR 3 (Proprietor/ Other)</Link></li>
                                            <li><Link to="/tax-accounting/itr4" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Form ITR 4 (Professional/ Commission/ Other)</Link></li>
                                            <li><Link to="/tax-accounting/itr5" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Form ITR 5 (Partnership/ LLP)</Link></li>
                                            <li><Link to="/tax-accounting/itr6" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Form ITR 6 (Company)</Link></li>
                                            <li><Link to="/tax-accounting/itr7" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Form ITR 7 (NGO/ Non Profit)</Link></li>
                                            <li><Link to="/tax-accounting/tax-audit" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Tax Audit</Link></li>
                                            <li><Link to="/tax-accounting/financial-preparation" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Financial Preparation</Link></li>
                                            <li><Link to="/tax-accounting/bookkeeping" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Book-Keeping Services</Link></li>
                                            <li><Link to="/tax-accounting/income-tax-notice" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Income Tax Notice</Link></li>
                                            <li><Link to="/tax-accounting/income-tax-scrutiny" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Income Tax Scrutiny</Link></li>
                                        </ul>
                                    </li>

                                    {/* GST Service */}
                                    <li className="relative group py-3 px-1.5 xl:px-2">
                                        <a href="#" className="flex items-center gap-1 group-hover:text-[#a68921] transition-colors relative">
                                            GST Services <i className="fa-solid fa-caret-down text-[10px]"></i>
                                            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#a68921] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                        </a>
                                        <ul className="absolute top-full left-0 w-72 bg-white shadow-xl rounded-b-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 py-4 border-t-4 border-theme-black z-[100]">
                                            <li><Link to="/services/gst-registration" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">GST Registration</Link></li>
                                            <li><Link to="/services/gst-filings" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">GST Filings</Link></li>
                                            <li><Link to="/services/gst-eway-billing" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">GST E-Way Billing</Link></li>
                                            <li><Link to="/services/gst-modification" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">GST Modification</Link></li>
                                            <li><Link to="/services/gst-form-lut" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">GST Form LUT</Link></li>
                                            <li><Link to="/services/gstr-9-audit" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">GSTR 9 Audit</Link></li>
                                        </ul>
                                    </li>

                                    {/* Registration & Licenses */}
                                    <li className="relative group py-3 px-1.5 xl:px-2">
                                        <a href="#" className="flex items-center gap-1 group-hover:text-[#a68921] transition-colors relative">
                                            Registration & Licenses <i className="fa-solid fa-caret-down text-[10px]"></i>
                                            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#a68921] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                        </a>
                                        <ul className="absolute top-full left-0 w-80 bg-white shadow-xl rounded-b-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 py-4 border-t-4 border-theme-black z-[100]">
                                            <li><Link to="/services/import-export-license" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Import & Export License</Link></li>
                                            <li><Link to="/services/iec-ekyc" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">IEC E-KYC</Link></li>
                                            <li><Link to="/services/iec-modification" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">IEC Modification</Link></li>
                                            <li><Link to="/services/fssai-registration" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">FSSAI Registration (FoSCoS)</Link></li>
                                            <li><Link to="/services/fssai-state-license" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">FSSAI State License (FoSCoS)</Link></li>
                                            <li><Link to="/services/fssai-central-license" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">FSSAI Central License (FoSCoS)</Link></li>
                                            <li><Link to="/services/fssai-modification" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">FSSAI Modification (FoSCoS)</Link></li>
                                            <li><Link to="/services/fssai-renewal" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">FSSAI Renewal (FoSCoS)</Link></li>
                                            <li><Link to="/services/epf-registration" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">EPF Registration/ Compliance</Link></li>
                                            <li><Link to="/services/esi-registration" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">ESI Registration/ Compliance</Link></li>
                                        </ul>
                                    </li>

                                    {/* ROC Compliance */}
                                    <li className="relative group py-3 px-1.5 xl:px-2">
                                        <a href="#" className="flex items-center gap-1 group-hover:text-[#a68921] transition-colors relative">
                                            ROC Compliance <i className="fa-solid fa-caret-down text-[10px]"></i>
                                            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#a68921] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                        </a>
                                        <ul className="absolute top-full left-0 w-80 bg-white shadow-xl rounded-b-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 py-4 border-t-4 border-theme-black z-[100]">
                                            <li><Link to="/services/private-limited-compliance" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Private Limited Compliance</Link></li>
                                            <li><Link to="/services/llp-compliance" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">LLP Compliance</Link></li>
                                            <li><Link to="/services/public-limited-compliance" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Public Limited Compliance</Link></li>
                                            <li><Link to="/services/nidhi-limited-compliance" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Nidhi Limited Compliance</Link></li>
                                            <li><Link to="/services/section-8-compliance" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Section 8 Compliance</Link></li>
                                            <li><Link to="/services/director-ekyc" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Director E-KYC (DIR3)</Link></li>
                                            <li><Link to="/services/roc-amendment" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">ROC Amendment</Link></li>
                                            <li><Link to="/services/share-transfer" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Share Transfer</Link></li>
                                        </ul>
                                    </li>

                                    {/* Others */}
                                    <li className="relative group py-3 px-1.5 xl:px-2">
                                        <a href="#" className="flex items-center gap-1 group-hover:text-[#a68921] transition-colors relative">
                                            Others <i className="fa-solid fa-caret-down text-[10px]"></i>
                                            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#a68921] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                        </a>
                                        <ul className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 py-4 border-t-4 border-theme-black z-[100]">
                                            <li><Link to="/others/legal" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Legal</Link></li>
                                            <li><Link to="/others/iso-certification" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">ISO Certification</Link></li>
                                            <li><Link to="/others/startup-india" className="block px-8 py-2 hover:bg-theme-primary hover:text-black text-black text-[14px] font-medium transition-colors">Start-up India</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        ) : (
                            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                        {!isSearchOpen && (
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="text-black hover:text-[#a68921] transition-colors p-2 hover:scale-110 transform duration-200"
                                aria-label="Search"
                            >
                                <Search className="w-5 h-5" />
                            </button>
                        )}
                        <Link
                            className="hidden sm:flex items-center justify-center p-2 hover:scale-110 transition-all transform duration-200"
                            to="/contact"
                            title="Contact Now"
                        >
                            <i className="fa-solid fa-phone text-black hover:text-[#a68921] text-xl transition-colors"></i>
                        </Link>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden text-xl cursor-pointer text-black p-2 hover:text-[#a68921] transition-colors"
                            aria-label="Toggle menu"
                        >
                            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed top-20 right-0 bottom-0 w-full sm:w-80 bg-white shadow-2xl z-[999] overflow-y-auto lg:hidden"
                    >
                        <nav className="p-6">
                            {/* New Business */}
                            <div className="mb-4">
                                <button
                                    onClick={() => setActiveSubmenu(activeSubmenu === 'business' ? null : 'business')}
                                    className="w-full flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg hover:bg-theme-primary/10 transition-colors"
                                >
                                    <span className="font-semibold text-black">New Business</span>
                                    <i className={`fa-solid fa-chevron-${activeSubmenu === 'business' ? 'up' : 'down'} text-sm`}></i>
                                </button>
                                <AnimatePresence>
                                    {activeSubmenu === 'business' && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pl-4 pt-2 space-y-1">
                                                <Link to="/registration/proprietorship" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Proprietorship</Link>
                                                <Link to="/registration/opc" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">One Person Company</Link>
                                                <Link to="/registration/partnership" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Partnership Firm</Link>
                                                <Link to="/registration/private-limited" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Private Limited Company</Link>
                                                <Link to="/registration/llp" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Limited Liability Partnership (LLP)</Link>
                                                <Link to="/registration/public-limited" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Public Limited Company</Link>
                                                <Link to="/registration/nidhi" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Nidhi Limited Company</Link>
                                                <Link to="/registration/section-8" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Section 8 Company</Link>
                                                <Link to="/registration/ngo" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">NGO Registration</Link>
                                                <Link to="/registration/indian-subsidiary" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Indian Subsidiary</Link>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Intellectual Property */}
                            <div className="mb-4">
                                <button
                                    onClick={() => setActiveSubmenu(activeSubmenu === 'ip' ? null : 'ip')}
                                    className="w-full flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg hover:bg-theme-primary/10 transition-colors"
                                >
                                    <span className="font-semibold text-black">Intellectual Property</span>
                                    <i className={`fa-solid fa-chevron-${activeSubmenu === 'ip' ? 'up' : 'down'} text-sm`}></i>
                                </button>
                                <AnimatePresence>
                                    {activeSubmenu === 'ip' && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pl-4 pt-2 space-y-1">
                                                <Link to="/services/trademark-registration" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Trademark Registration</Link>
                                                <Link to="/services/trademark-objection" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Trademark Objection</Link>
                                                <Link to="/services/trademark-hearing" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Trademark Hearing</Link>
                                                <Link to="/services/trademark-opposition" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Trademark Opposition</Link>
                                                <Link to="/services/trademark-legal-certificate" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Trademark Legal Certificate</Link>
                                                <Link to="/services/copyright-services" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Copyright Services</Link>
                                                <Link to="/services/design-service" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Design Service</Link>
                                                <Link to="/services/patent-services" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Patent Services</Link>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Tax & Accounting */}
                            <div className="mb-4">
                                <button
                                    onClick={() => setActiveSubmenu(activeSubmenu === 'tax' ? null : 'tax')}
                                    className="w-full flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg hover:bg-theme-primary/10 transition-colors"
                                >
                                    <span className="font-semibold text-black">Tax & Accounting</span>
                                    <i className={`fa-solid fa-chevron-${activeSubmenu === 'tax' ? 'up' : 'down'} text-sm`}></i>
                                </button>
                                <AnimatePresence>
                                    {activeSubmenu === 'tax' && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pl-4 pt-2 space-y-1">
                                                <Link to="/tax-accounting/income-tax-returns" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Income Tax Returns</Link>
                                                <Link to="/tax-accounting/itr1" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Form ITR 1</Link>
                                                <Link to="/tax-accounting/itr2" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Form ITR 2</Link>
                                                <Link to="/tax-accounting/itr3" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Form ITR 3</Link>
                                                <Link to="/tax-accounting/itr4" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Form ITR 4</Link>
                                                <Link to="/tax-accounting/itr5" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Form ITR 5</Link>
                                                <Link to="/tax-accounting/itr6" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Form ITR 6</Link>
                                                <Link to="/tax-accounting/itr7" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Form ITR 7</Link>
                                                <Link to="/tax-accounting/tax-audit" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Tax Audit</Link>
                                                <Link to="/tax-accounting/financial-preparation" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Financial Preparation</Link>
                                                <Link to="/tax-accounting/bookkeeping" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Book-Keeping Services</Link>
                                                <Link to="/tax-accounting/income-tax-notice" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Income Tax Notice</Link>
                                                <Link to="/tax-accounting/income-tax-scrutiny" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Income Tax Scrutiny</Link>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* GST Services */}
                            <div className="mb-4">
                                <button
                                    onClick={() => setActiveSubmenu(activeSubmenu === 'gst' ? null : 'gst')}
                                    className="w-full flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg hover:bg-theme-primary/10 transition-colors"
                                >
                                    <span className="font-semibold text-black">GST Services</span>
                                    <i className={`fa-solid fa-chevron-${activeSubmenu === 'gst' ? 'up' : 'down'} text-sm`}></i>
                                </button>
                                <AnimatePresence>
                                    {activeSubmenu === 'gst' && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pl-4 pt-2 space-y-1">
                                                <Link to="/services/gst-registration" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">GST Registration</Link>
                                                <Link to="/services/gst-filings" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">GST Filings</Link>
                                                <Link to="/services/gst-eway-billing" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">GST E-Way Billing</Link>
                                                <Link to="/services/gst-modification" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">GST Modification</Link>
                                                <Link to="/services/gst-form-lut" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">GST Form LUT</Link>
                                                <Link to="/services/gstr-9-audit" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">GSTR 9 Audit</Link>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Registration & Licenses */}
                            <div className="mb-4">
                                <button
                                    onClick={() => setActiveSubmenu(activeSubmenu === 'license' ? null : 'license')}
                                    className="w-full flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg hover:bg-theme-primary/10 transition-colors"
                                >
                                    <span className="font-semibold text-black">Registration & Licenses</span>
                                    <i className={`fa-solid fa-chevron-${activeSubmenu === 'license' ? 'up' : 'down'} text-sm`}></i>
                                </button>
                                <AnimatePresence>
                                    {activeSubmenu === 'license' && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pl-4 pt-2 space-y-1">
                                                <Link to="/services/import-export-license" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Import & Export License</Link>
                                                <Link to="/services/iec-ekyc" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">IEC E-KYC</Link>
                                                <Link to="/services/iec-modification" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">IEC Modification</Link>
                                                <Link to="/services/fssai-registration" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">FSSAI Registration</Link>
                                                <Link to="/services/fssai-state-license" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">FSSAI State License</Link>
                                                <Link to="/services/fssai-central-license" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">FSSAI Central License</Link>
                                                <Link to="/services/fssai-modification" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">FSSAI Modification</Link>
                                                <Link to="/services/fssai-renewal" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">FSSAI Renewal</Link>
                                                <Link to="/services/epf-registration" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">EPF Registration</Link>
                                                <Link to="/services/esi-registration" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">ESI Registration</Link>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* ROC Compliance */}
                            <div className="mb-4">
                                <button
                                    onClick={() => setActiveSubmenu(activeSubmenu === 'roc' ? null : 'roc')}
                                    className="w-full flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg hover:bg-theme-primary/10 transition-colors"
                                >
                                    <span className="font-semibold text-black">ROC Compliance</span>
                                    <i className={`fa-solid fa-chevron-${activeSubmenu === 'roc' ? 'up' : 'down'} text-sm`}></i>
                                </button>
                                <AnimatePresence>
                                    {activeSubmenu === 'roc' && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pl-4 pt-2 space-y-1">
                                                <Link to="/services/private-limited-compliance" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Private Limited Compliance</Link>
                                                <Link to="/services/llp-compliance" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">LLP Compliance</Link>
                                                <Link to="/services/public-limited-compliance" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Public Limited Compliance</Link>
                                                <Link to="/services/nidhi-limited-compliance" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Nidhi Limited Compliance</Link>
                                                <Link to="/services/section-8-compliance" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Section 8 Compliance</Link>
                                                <Link to="/services/director-ekyc" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Director E-KYC (DIR3)</Link>
                                                <Link to="/services/roc-amendment" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">ROC Amendment</Link>
                                                <Link to="/services/share-transfer" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Share Transfer</Link>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Others */}
                            <div className="mb-4">
                                <button
                                    onClick={() => setActiveSubmenu(activeSubmenu === 'others' ? null : 'others')}
                                    className="w-full flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg hover:bg-theme-primary/10 transition-colors"
                                >
                                    <span className="font-semibold text-black flex items-center gap-2">
                                        Others
                                    </span>
                                    <i className={`fa-solid fa-chevron-${activeSubmenu === 'others' ? 'up' : 'down'} text-sm`}></i>
                                </button>
                                <AnimatePresence>
                                    {activeSubmenu === 'others' && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pl-4 pt-2 space-y-1">
                                                <Link to="/others/legal" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Legal</Link>
                                                <Link to="/others/iso-certification" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">ISO Certification</Link>
                                                <Link to="/others/startup-india" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm hover:bg-theme-primary/10 rounded">Start-up India</Link>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Contact Button */}
                            <div className="flex justify-center mt-6">
                                <Link
                                    to="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="inline-flex p-4 bg-theme-primary text-black rounded-full hover:bg-theme-black hover:text-white transition-all"
                                    title="Contact Now"
                                >
                                    <i className="fa-solid fa-phone-volume text-2xl transform -rotate-45"></i>
                                </Link>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Breadcrumb Bar - Shows on internal pages with hover animation */}
            <AnimatePresence>
                {!isHome && isHovered && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="bg-white/80 backdrop-blur-md border-b border-gray-100 overflow-hidden shadow-sm"
                    >
                        <div className="w-full px-4 lg:px-10 py-3">
                            <Breadcrumbs />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Search Modal - Only on Mobile */}
            <div className="lg:hidden">
                <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
            </div>
        </header >
    );
};

export default Header;
