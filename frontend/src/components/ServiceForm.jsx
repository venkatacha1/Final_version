import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { API_BASE_URL } from '../config/api';

const ServiceForm = ({ title = "Our Experts will contact you!", showDisputeField = false, showCountryField = false, showCompanyTypeField = false, showConsultationForField = false }) => {
    const countries = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
        "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
        "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
        "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
        "Fiji", "Finland", "France",
        "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
        "Haiti", "Honduras", "Hungary",
        "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
        "Jamaica", "Japan", "Jordan",
        "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan",
        "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
        "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway",
        "Oman",
        "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
        "Qatar",
        "Romania", "Russia", "Rwanda",
        "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenades", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Sllovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
        "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
        "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
        "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
        "Yemen",
        "Zambia", "Zimbabwe"
    ].sort();

    const disputeOptions = ["Trademark", "Copyright", "Design", "Patent", "General"];
    const consultationOptions = ["Patent", "Trademark", "Copyright", "Design", "Others"];
    const companyTypeOptions = [
        "Proprietorship",
        "One Person Company",
        "Partnership Firm",
        "Private Limited Company",
        "LLP",
        "Public Limited Company",
        "Nidhi Limited Company",
        "Section 8 Company",
        "NGO",
        "Indian Subsidiary"
    ];

    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        disputeFor: '',
        country: '',
        companyType: '',
        consultationFor: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    // Dropdown states
    const [isCountryOpen, setIsCountryOpen] = useState(false);
    const [isDisputeOpen, setIsDisputeOpen] = useState(false);
    const [isCompanyTypeOpen, setIsCompanyTypeOpen] = useState(false);
    const [isConsultationOpen, setIsConsultationOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const countryRef = useRef(null);
    const disputeRef = useRef(null);
    const companyTypeRef = useRef(null);
    const consultationRef = useRef(null);

    // Click outside handler
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (countryRef.current && !countryRef.current.contains(event.target)) {
                setIsCountryOpen(false);
            }
            if (disputeRef.current && !disputeRef.current.contains(event.target)) {
                setIsDisputeOpen(false);
            }
            if (companyTypeRef.current && !companyTypeRef.current.contains(event.target)) {
                setIsCompanyTypeOpen(false);
            }
            if (consultationRef.current && !consultationRef.current.contains(event.target)) {
                setIsConsultationOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSelect = (name, value) => {
        setFormData({ ...formData, [name]: value });
        setIsCountryOpen(false);
        setIsDisputeOpen(false);
        setIsCompanyTypeOpen(false);
        setIsConsultationOpen(false);
        setSearchTerm('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const mobileDigits = (formData.mobile || '').replace(/\D/g, '');
        // Phone number validation (10-15 digits for CRM)
        if (mobileDigits.length < 10) {
            setStatus({ type: 'error', message: 'Please enter a valid mobile number.' });
            return;
        }

        if (showCountryField && !formData.country) {
            setStatus({ type: 'error', message: 'Please select a country.' });
            return;
        }
        if (showDisputeField && !formData.disputeFor) {
            setStatus({ type: 'error', message: 'Please select a dispute option.' });
            return;
        }
        if (showCompanyTypeField && !formData.companyType) {
            setStatus({ type: 'error', message: 'Please select a company type.' });
            return;
        }
        if (showConsultationForField && !formData.consultationFor) {
            setStatus({ type: 'error', message: 'Please select a consultation option.' });
            return;
        }

        setLoading(true);
        setStatus({ type: 'info', message: 'Submitting...' });

        try {
            // Fallback for serviceName if title is default or generic
            let finalServiceName = title;
            if (!title || title === "Our Experts will contact you!" || title === "Our Experts will contact you") {
                const path = window.location.pathname;
                const pathParts = path.split('/').filter(p => p);
                if (pathParts.length > 0) {
                    const lastPart = pathParts[pathParts.length - 1];
                    // Convert kebab-case or camelCase to Title Case
                    finalServiceName = lastPart
                        .replace(/[-_]/g, ' ')
                        .replace(/([A-Z])/g, ' $1')
                        .replace(/^./, str => str.toUpperCase())
                        .trim();
                }
            }

            await axios.post(`${API_BASE_URL}/v1/fillings`, {
                ...formData,
                mobile: mobileDigits,
                serviceName: finalServiceName
            });
            setStatus({ type: 'success', message: 'Thank you! Our experts will contact you soon.' });
            setFormData({ name: '', mobile: '', email: '', disputeFor: '', country: '', companyType: '', consultationFor: '' });
        } catch (error) {
            setStatus({ type: 'error', message: 'Failed to submit. Please try again or call us.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-[380px] sm:max-w-[400px] bg-white rounded-2xl shadow-2xl border border-gray-100 relative mx-auto lg:mx-0">
            {/* Top Accent Line */}
            <div className="h-1.5 w-full bg-theme-primary rounded-t-2xl"></div>

            <div className="bg-white py-3 sm:py-5 px-6 text-center border-b border-gray-50">
                <h3 className="text-[#1a2b1f] font-extrabold uppercase tracking-tight text-[15px] sm:text-[16px] lg:text-[17px]">
                    {title}
                </h3>
            </div>
            <form onSubmit={handleSubmit} className="p-5 sm:p-7 space-y-3 sm:space-y-4">
                <div>
                    <label className="block text-[#1a2b1f] font-bold mb-1.5 text-[12px] sm:text-[13px] uppercase tracking-wider">Name*</label>
                    <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        className="w-full px-5 py-2.5 sm:py-3 bg-[#f8f9fa] text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-primary/30 border border-gray-200 transition-all placeholder:text-gray-400 text-[14px] sm:text-[15px]"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="block text-[#1a2b1f] font-bold mb-1.5 text-[12px] sm:text-[13px] uppercase tracking-wider">Mobile Number*</label>
                    <div className="relative service-phone-input">
                        <PhoneInput
                            country={'in'}
                            value={formData.mobile}
                            onChange={(value) => setFormData({ ...formData, mobile: value })}
                            enableSearch={true}
                            containerClass="!w-full"
                            inputClass="!w-full !h-[44px] sm:!h-[48px] !pl-[55px] !pr-5 !py-2.5 sm:!py-3 !bg-[#f8f9fa] !text-black !rounded-lg !focus:outline-none !focus:ring-2 !focus:ring-theme-primary/30 !border !border-gray-200 !transition-all !placeholder:text-gray-400 !text-[14px] sm:!text-[15px]"
                            buttonClass="!bg-transparent !border-none !rounded-lg !h-[44px] sm:!h-[48px] !w-[45px] hover:!bg-black/5"
                            dropdownClass="!bg-white !shadow-2xl !rounded-xl !mt-2 !text-black !border !border-gray-100"
                            searchClass="!bg-gray-50 !mb-2"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-[#1a2b1f] font-bold mb-1.5 text-[12px] sm:text-[13px] uppercase tracking-wider">Your email*</label>
                    <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        className="w-full px-5 py-2.5 sm:py-3 bg-[#f8f9fa] text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-primary/30 border border-gray-200 transition-all placeholder:text-gray-400 text-[14px] sm:text-[15px]"
                        onChange={handleChange}
                    />
                </div>
                {showConsultationForField && (
                    <div className="relative" ref={consultationRef}>
                        <label className="block text-[#1a2b1f] font-bold mb-1.5 text-[12px] sm:text-[13px] uppercase tracking-wider">Consultation for*</label>
                        <div
                            onClick={() => setIsConsultationOpen(!isConsultationOpen)}
                            className="w-full px-5 py-2.5 sm:py-3 bg-[#f8f9fa] text-black rounded-lg border border-gray-200 cursor-pointer flex justify-between items-center text-[14px] sm:text-[15px]"
                        >
                            <span className={formData.consultationFor ? 'text-black' : 'text-gray-400'}>
                                {formData.consultationFor || "Select"}
                            </span>
                            <i className={`fa-solid fa-chevron-down text-gray-500 transition-transform ${isConsultationOpen ? 'rotate-180' : ''}`}></i>
                        </div>
                        {isConsultationOpen && (
                            <div className="absolute z-[100] top-full left-0 w-full mt-2 bg-white border border-gray-100 rounded-lg shadow-2xl overflow-hidden">
                                {consultationOptions.map((option, index) => (
                                    <div
                                        key={index}
                                        onClick={() => handleSelect('consultationFor', option)}
                                        className="px-5 py-3 cursor-pointer hover:bg-theme-primary transition-colors text-[15px]"
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
                {showDisputeField && (
                    <div className="relative" ref={disputeRef}>
                        <label className="block text-[#1a2b1f] font-bold mb-1.5 text-[12px] sm:text-[13px] uppercase tracking-wider">Dispute for*</label>
                        <div
                            onClick={() => setIsDisputeOpen(!isDisputeOpen)}
                            className="w-full px-5 py-2.5 sm:py-3 bg-[#f8f9fa] text-black rounded-lg border border-gray-200 cursor-pointer flex justify-between items-center text-[14px] sm:text-[15px]"
                        >
                            <span className={formData.disputeFor ? 'text-black' : 'text-gray-400'}>
                                {formData.disputeFor || "Select"}
                            </span>
                            <i className={`fa-solid fa-chevron-down text-gray-500 transition-transform ${isDisputeOpen ? 'rotate-180' : ''}`}></i>
                        </div>
                        {isDisputeOpen && (
                            <div className="absolute z-[100] top-full left-0 w-full mt-2 bg-white border border-gray-100 rounded-lg shadow-2xl">
                                {disputeOptions.map((option, index) => (
                                    <div
                                        key={index}
                                        onClick={() => handleSelect('disputeFor', option)}
                                        className="px-5 py-3 cursor-pointer hover:bg-theme-primary transition-colors text-[15px]"
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
                {showCompanyTypeField && (
                    <div className="relative" ref={companyTypeRef}>
                        <label className="block text-[#1a2b1f] font-bold mb-1.5 text-[12px] sm:text-[13px] uppercase tracking-wider">Company Type*</label>
                        <div
                            onClick={() => {
                                setIsCompanyTypeOpen(!isCompanyTypeOpen);
                                setSearchTerm('');
                            }}
                            className="w-full px-5 py-2.5 sm:py-3 bg-[#f8f9fa] text-black rounded-lg border border-gray-200 cursor-pointer flex justify-between items-center text-[14px] sm:text-[15px]"
                        >
                            <span className={formData.companyType ? 'text-black' : 'text-gray-400'}>
                                {formData.companyType || "Select"}
                            </span>
                            <i className={`fa-solid fa-chevron-down text-gray-500 transition-transform ${isCompanyTypeOpen ? 'rotate-180' : ''}`}></i>
                        </div>
                        {isCompanyTypeOpen && (
                            <div className="absolute z-[100] top-full left-0 w-full mt-2 bg-white border border-gray-100 rounded-lg shadow-2xl max-h-64 overflow-y-auto custom-scrollbar">
                                <div className="sticky top-0 bg-white p-3 border-b border-gray-100 z-10">
                                    <div className="relative">
                                        <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[13px]"></i>
                                        <input
                                            type="text"
                                            placeholder="Search company type..."
                                            className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-theme-primary/30 focus:border-theme-primary transition-all"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            onClick={(e) => e.stopPropagation()}
                                            autoFocus
                                        />
                                    </div>
                                </div>
                                {companyTypeOptions
                                    .filter(option => option.toLowerCase().includes(searchTerm.toLowerCase()))
                                    .map((option, index) => (
                                        <div
                                            key={index}
                                            onClick={() => handleSelect('companyType', option)}
                                            className="px-5 py-3 cursor-pointer hover:bg-theme-primary transition-colors text-[15px]"
                                        >
                                            {option}
                                        </div>
                                    ))}
                                {companyTypeOptions.filter(option => option.toLowerCase().includes(searchTerm.toLowerCase())).length === 0 && (
                                    <div className="px-5 py-4 text-center text-gray-500 text-[14px]">
                                        No option found
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}
                {showCountryField && (
                    <div className="relative" ref={countryRef}>
                        <label className="block text-[#1a2b1f] font-bold mb-1.5 text-[12px] sm:text-[13px] uppercase tracking-wider">Country*</label>
                        <div
                            onClick={() => {
                                setIsCountryOpen(!isCountryOpen);
                                setSearchTerm('');
                            }}
                            className="w-full px-5 py-2.5 sm:py-3 bg-[#f8f9fa] text-black rounded-lg border border-gray-200 cursor-pointer flex justify-between items-center text-[14px] sm:text-[15px]"
                        >
                            <span className={formData.country ? 'text-black' : 'text-gray-400'}>
                                {formData.country || "Select"}
                            </span>
                            <i className={`fa-solid fa-chevron-down text-gray-500 transition-transform ${isCountryOpen ? 'rotate-180' : ''}`}></i>
                        </div>
                        {isCountryOpen && (
                            <div className="absolute z-[100] top-full left-0 w-full mt-2 bg-white border border-gray-100 rounded-lg shadow-2xl max-h-64 overflow-y-auto custom-scrollbar">
                                <div className="sticky top-0 bg-white p-3 border-b border-gray-100 z-10">
                                    <div className="relative">
                                        <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[13px]"></i>
                                        <input
                                            type="text"
                                            placeholder="Search country..."
                                            className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-theme-primary/30 focus:border-theme-primary transition-all"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            onClick={(e) => e.stopPropagation()}
                                            autoFocus
                                        />
                                    </div>
                                </div>
                                {countries
                                    .filter(country => country.toLowerCase().includes(searchTerm.toLowerCase()))
                                    .map((country, index) => (
                                        <div
                                            key={index}
                                            onClick={() => handleSelect('country', country)}
                                            className="px-5 py-3 cursor-pointer hover:bg-theme-primary transition-colors text-[15px]"
                                        >
                                            {country}
                                        </div>
                                    ))}
                                {countries.filter(country => country.toLowerCase().includes(searchTerm.toLowerCase())).length === 0 && (
                                    <div className="px-5 py-4 text-center text-gray-500 text-[14px]">
                                        No country found
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}
                <div className="pt-1">
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-theme-primary text-black font-[900] py-3 sm:py-4 px-6 rounded-xl hover:bg-black hover:text-white transition-all duration-300 shadow-lg shadow-theme-primary/20 hover:shadow-black/20 text-[15px] sm:text-[16px] uppercase tracking-widest disabled:opacity-50 active:scale-[0.98]"
                    >
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                    {status.message && (
                        <p className={`mt-1.5 text-center font-bold text-[10px] sm:text-sm ${status.type === 'error' ? 'text-red-600' : 'text-green-800'}`}>
                            {status.message}
                        </p>
                    )}
                </div>
            </form>
            <style jsx global>{`
                .service-phone-input .selected-flag {
                    background: transparent !important;
                    padding-left: 12px !important;
                }
                .service-phone-input .selected-flag:hover {
                    background: rgba(0,0,0,0.05) !important;
                }
                .service-phone-input .country-list {
                    margin-top: 5px !important;
                    border-radius: 8px !important;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.1) !important;
                    border: 1px solid rgba(0,0,0,0.1) !important;
                }
            `}</style>
        </div>
    );
};

export default ServiceForm;






