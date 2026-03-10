import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search as SearchIcon, X } from 'lucide-react';

const searchablePages = [
    // New Business
    { title: "Proprietorship Registration", path: "/registration/proprietorship", category: "New Business" },
    { title: "One Person Company (OPC)", path: "/registration/opc", category: "New Business" },
    { title: "Partnership Firm", path: "/registration/partnership", category: "New Business" },
    { title: "Private Limited Company", path: "/registration/private-limited", category: "New Business" },
    { title: "Limited Liability Partnership (LLP)", path: "/registration/llp", category: "New Business" },
    { title: "Public Limited Company", path: "/registration/public-limited", category: "New Business" },
    { title: "Nidhi Limited Company", path: "/registration/nidhi", category: "New Business" },
    { title: "Section 8 Company", path: "/registration/section-8", category: "New Business" },
    { title: "NGO Registration", path: "/registration/ngo", category: "New Business" },
    { title: "Indian Subsidiary Registration", path: "/registration/indian-subsidiary", category: "New Business" },
    // Intellectual Property
    { title: "Trademark Registration", path: "/services/trademark-registration", category: "IP" },
    { title: "Trademark Objection", path: "/services/trademark-objection", category: "IP" },
    { title: "Trademark Hearing", path: "/services/trademark-hearing", category: "IP" },
    { title: "Trademark Opposition", path: "/services/trademark-opposition", category: "IP" },
    { title: "Trademark Legal Certificate", path: "/services/trademark-legal-certificate", category: "IP" },
    { title: "Copyright Services", path: "/services/copyright-services", category: "IP" },
    { title: "Design Service", path: "/services/design-service", category: "IP" },
    { title: "Patent Services", path: "/services/patent-services", category: "IP" },
    // Tax & Accounting
    { title: "Income Tax Returns (ITR)", path: "/tax-accounting/income-tax-returns", category: "Tax" },
    { title: "Form ITR 1", path: "/tax-accounting/itr1", category: "Tax" },
    { title: "Form ITR 2", path: "/tax-accounting/itr2", category: "Tax" },
    { title: "Form ITR 3", path: "/tax-accounting/itr3", category: "Tax" },
    { title: "Form ITR 4", path: "/tax-accounting/itr4", category: "Tax" },
    { title: "Form ITR 5", path: "/tax-accounting/itr5", category: "Tax" },
    { title: "Form ITR 6", path: "/tax-accounting/itr6", category: "Tax" },
    { title: "Form ITR 7", path: "/tax-accounting/itr7", category: "Tax" },
    { title: "Tax Audit", path: "/tax-accounting/tax-audit", category: "Tax" },
    { title: "Financial Preparation", path: "/tax-accounting/financial-preparation", category: "Tax" },
    { title: "Book-Keeping Services", path: "/tax-accounting/bookkeeping", category: "Tax" },
    { title: "Income Tax Notice Response", path: "/tax-accounting/income-tax-notice", category: "Tax" },
    { title: "Income Tax Scrutiny", path: "/tax-accounting/income-tax-scrutiny", category: "Tax" },
    // GST Services
    { title: "GST Registration", path: "/services/gst-registration", category: "GST" },
    { title: "GST Filings", path: "/services/gst-filings", category: "GST" },
    { title: "GST E-Way Billing", path: "/services/gst-eway-billing", category: "GST" },
    { title: "GST Modification", path: "/services/gst-modification", category: "GST" },
    { title: "GST Form LUT", path: "/services/gst-form-lut", category: "GST" },
    { title: "GSTR 9 Audit", path: "/services/gstr-9-audit", category: "GST" },
    // Registration & Licenses
    { title: "Import & Export License (IEC)", path: "/services/import-export-license", category: "License" },
    { title: "IEC E-KYC", path: "/services/iec-ekyc", category: "License" },
    { title: "IEC Modification", path: "/services/iec-modification", category: "License" },
    { title: "FSSAI Registration", path: "/services/fssai-registration", category: "License" },
    { title: "FSSAI State License", path: "/services/fssai-state-license", category: "License" },
    { title: "FSSAI Central License", path: "/services/fssai-central-license", category: "License" },
    { title: "FSSAI Modification", path: "/services/fssai-modification", category: "License" },
    { title: "FSSAI Renewal", path: "/services/fssai-renewal", category: "License" },
    { title: "EPF Registration", path: "/services/epf-registration", category: "License" },
    { title: "ESI Registration", path: "/services/esi-registration", category: "License" },
    // ROC Compliance
    { title: "Private Limited Compliance", path: "/services/private-limited-compliance", category: "ROC" },
    { title: "LLP Compliance", path: "/services/llp-compliance", category: "ROC" },
    { title: "Public Limited Compliance", path: "/services/public-limited-compliance", category: "ROC" },
    { title: "Nidhi Limited Compliance", path: "/services/nidhi-limited-compliance", category: "ROC" },
    { title: "Section 8 Compliance", path: "/services/section-8-compliance", category: "ROC" },
    { title: "Director E-KYC (DIR3)", path: "/services/director-ekyc", category: "ROC" },
    { title: "ROC Amendment", path: "/services/roc-amendment", category: "ROC" },
    { title: "Share Transfer", path: "/services/share-transfer", category: "ROC" },
    // Others
    { title: "Legal Documentation", path: "/others/legal", category: "Other" },
    { title: "ISO Certification", path: "/others/iso-certification", category: "Other" },
    { title: "Start-up India Registration", path: "/others/startup-india", category: "Other" },
];

const SearchOverlay = ({ isOpen, onClose }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const inputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        } else {
            setSearchQuery('');
            setSuggestions([]);
        }
    }, [isOpen]);

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.trim().length > 1) {
            const filtered = searchablePages.filter(page =>
                page.title.toLowerCase().includes(query.toLowerCase()) ||
                page.category.toLowerCase().includes(query.toLowerCase())
            ).slice(0, 8);
            setSuggestions(filtered);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (path) => {
        setSearchQuery('');
        setSuggestions([]);
        onClose();
        navigate(path);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-grow max-w-4xl mx-auto px-4 relative flex items-center h-full"
                >
                    <div className="relative w-full flex items-center gap-3">
                         <div className="relative flex-grow">
                            <input
                                ref={inputRef}
                                type="text"
                                className="w-full bg-white/10 backdrop-blur-sm border-2 border-theme-black/20 rounded-xl py-2 pl-10 pr-4 text-black placeholder-gray-500 focus:outline-none focus:border-theme-primary transition-all duration-300 text-base"
                                placeholder="Search for services..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                                onKeyDown={handleKeyDown}
                            />
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                <SearchIcon className="w-4 h-4" />
                            </div>
                        </div>
                        
                        <button
                            onClick={onClose}
                            className="bg-transparent text-gray-500 hover:text-black transition-colors p-2"
                            aria-label="Close search"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Suggestions Dropdown */}
                        <AnimatePresence>
                            {suggestions.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md shadow-2xl rounded-xl border border-gray-100 overflow-hidden z-[1100] max-h-[70vh] overflow-y-auto"
                                >
                                    <div className="p-2">
                                        {suggestions.map((suggestion, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleSuggestionClick(suggestion.path)}
                                                className="w-full text-left px-4 py-3 rounded-lg hover:bg-theme-primary/10 transition-all duration-200 group flex items-start flex-col border-b border-gray-50 last:border-0"
                                            >
                                                <span className="text-sm font-semibold text-black group-hover:text-theme-primary transition-colors">
                                                    {suggestion.title}
                                                </span>
                                                <span className="text-[10px] uppercase tracking-wider text-black/40 font-bold">
                                                    {suggestion.category}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SearchOverlay;
