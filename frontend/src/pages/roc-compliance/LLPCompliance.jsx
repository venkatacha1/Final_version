import React, { useEffect, useState } from 'react';
import ServiceForm from '../../components/ServiceForm';
import Carousel from '../../components/Carousel';
import ProcessFlow from '../../components/ProcessFlow';
import DocumentsRequired from '../../components/DocumentsRequired';
import ConsultModal from '../../components/ConsultModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const LlpCompliance = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Financial Statements (Form 8)", icon: "fa-file-invoice" },
        { title: "Annual Return (Form 11)", icon: "fa-calendar-days" },
        { title: "Pan Card of Partners", icon: "fa-id-card" },
        { title: "DSC of Designated Partners", icon: "fa-key" },
        { title: "LLP Agreement", icon: "fa-file-contract" }
    ];

    const cards = [
        {
            title: "Annual Return (Form 11)",
            icon: "fa-file-signature",
            desc: "Every LLP is required to file Form 11 within 60 days of the end of the financial year (i.e., by May 30th)."
        },
        {
            title: "Statement of Accounts (Form 8)",
            icon: "fa-book-bookmark",
            desc: "LLPs must file Form 8 within 30 days of the end of 6 months of the financial year (i.e., by October 30th)."
        },
        {
            title: "Tax Audit",
            icon: "fa-clipboard-check",
            desc: "LLPs with turnover exceeding ₹40 lakhs or contribution exceeding ₹25 lakhs are required to get their accounts audited by a CA."
        },
        {
            title: "Income Tax Return",
            icon: "fa-money-check-dollar",
            desc: "Mandatory ITR-5 filing every year by July 31st (or September 30th if an audit is required)."
        },
        {
            title: "Designated Partner KYC",
            icon: "fa-user-check",
            desc: "Annual DIR-3 KYC for all designated partners holding a DPIN is mandatory to maintain active status."
        },
        {
            title: "Partner Meetings",
            icon: "fa-handshake-angle",
            desc: "While less rigid than a company, document regularly held meetings among partners to discuss LLP operations."
        }
    ];

    const llpCompliances = [
        { title: "LLP Form 3", icon: "fa-file-signature", desc: "Form 3 must be filed by newly incorporated Limited Liability Partnership (LLP) within 20 days from the date of incorporation. Failure of which leads to late fee per day Rs.100/-." },
        { title: "Form DIR 3", icon: "fa-user-check", desc: "All the directors of the company must be filed for the DIN eKYC or DIR-3 eKYC. In DIR-3 eKYC, the Director must provide a unique personal mobile number and a personal email address. There's a penalty of Rs. 5000 in case of failure to file DIN eKYC." },
        { title: "Book keeping", icon: "fa-book-open-reader", desc: "Book Keeping is maintaining book of records which every company does and it will provide a clear picture of company's strategy and also easy to prepare financial report." },
        { title: "Accounts Finalisation", icon: "fa-calculator", desc: "Accounts finalisation is done at the year end by computing the records of company's records before admitting to income tax filings." }
    ];

    const otherCompliances = [
        { title: "Income Tax/ Audit", icon: "fa-magnifying-glass-dollar", desc: "Income tax should be filed by all business even if there is no business to avoid notices or late fee. Assessment year of 2018-19 Financial Year is 1st April 2017 to 31st March 2018. The companies required to do Audit is for those who cross turnover more than 50L for service industry and 1Cr others." },
        { title: "GST Filings", icon: "fa-receipt", desc: "GST is an indirect tax which comes under CBIC and it is mandatory to be filed and tax amount to be paid as per the filings frequency selected by the tax payer." },
        { title: "TDS/ TCS Filings", icon: "fa-percent", desc: "TDS - Tax Deduction at Source TCS - Tax Collection at Source. It is a deduction on salary/ service/ rent/ Profession fee payable for those who exceed the transaction limits." },
        { title: "Payroll", icon: "fa-money-check-dollar", desc: "Every company with employees must register and file ESIC/ EPFO/ Professional Tax/ Labor tax by paying the tax before the due dates of every department." }
    ];

    const faqs = [
        {
            id: 1,
            title: "What are the key annual forms for LLP?",
            description: "Form 11 (Annual Return) and Form 8 (Statement of Accounts and Solvency) are the mandatory ROC forms for LLPs.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "When is the deadline for Form 11?",
            description: "The deadline for filing LLPs Form 11 is May 30th every year.",
            icon: <i className="fa-solid fa-clock"></i>
        },
        {
            id: 3,
            title: "Is audit mandatory for all LLPs?",
            description: "No, audit is mandatory only if the turnover exceeds ₹40 Lakhs or the partner's contribution exceeds ₹25 Lakhs.",
            icon: <i className="fa-solid fa-scale-balanced"></i>
        },
        {
            id: 4,
            title: "What is the penalty for late LLP filings?",
            description: "Late filing of Form 8 or Form 11 attracts a penalty of ₹100 per day for each day the filing remains outstanding.",
            icon: <i className="fa-solid fa-triangle-exclamation"></i>
        },
        {
            id: 5,
            title: "Are ITR and ROC filings different?",
            description: "Yes, ITR is filed with the Income Tax Department, while Form 8 and Form 11 are filed with the Registrar of Companies.",
            icon: <i className="fa-solid fa-building-columns"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            {/* Hero Section */}
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-center flex items-center"
                style={{ backgroundImage: "url('/images/logo/Gemini_Generated_Image_lvdfcqlvdfcqlvdf (1).png')" }}
            >
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-white/70"></div>

                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    {/* Left Content */}
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">LLP Annual Compliance Filing</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Low-Cost Compliance | Expert Filing Services | Stay Regulatory Proof
                        </p>

                        <div className="mb-4 sm:mb-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-1.5 bg-theme-primary text-[#1a2b1f] px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                <i className="fa-solid fa-video"></i>
                                Connect with us
                            </button>
                        </div>

                        <h2 className="text-xl lg:text-3xl font-bold leading-relaxed">
                            Complete regulatory support for your Limited Liability Partnership
                        </h2>
                    </div>

                    {/* Right Content - Reusable Form Component */}
                    <ServiceForm title="LLP Annual Compliance" />
                </div>
            </div>

            {/* Carousel Content Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Mandatory LLP Compliances</h2>
                        <div className="w-24 h-1 bg-theme-primary mx-auto"></div>
                    </div>

                    <Swiper
                        modules={[Pagination, Autoplay, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-16 proprietorship-swiper"
                    >
                        {cards.map((card, index) => (
                            <SwiperSlide key={index}>
                                <div className="p-10 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center">
                                    <div className="w-20 h-20 bg-theme-primary/10 rounded-full flex items-center justify-center mb-4 sm:mb-8">
                                        <i className={`fa-solid ${card.icon} text-4xl text-theme-black`}></i>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-5">{card.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        {card.desc}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <DocumentsRequired documents={documents} />

            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-theme-primary/5 -skew-x-12 translate-x-1/2"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10">
                    {/* ROC Compliance Section */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h6 className="text-theme-primary uppercase tracking-[0.3em] font-bold text-sm mb-4">Statutory LLP Ledger</h6>
                            <h2 className="text-4xl md:text-6xl font-black text-[#0a0a0a] tracking-tight leading-none">
                                ROC Compliance <br />
                                <span className="text-theme-primary italic font-serif">Calendar</span>
                            </h2>
                        </div>
                        <div className="hidden md:block w-32 h-px bg-theme-primary/30 mb-4"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {llpCompliances.map((item, idx) => (
                            <div key={idx} className="group relative p-10 rounded-[2.5rem] bg-white border border-gray-100 hover:bg-[#0a0a0a] hover:border-[#0a0a0a] hover:shadow-2xl transition-all duration-700 flex flex-col md:flex-row items-center gap-10 text-left">
                                {/* Number Index */}
                                <div className="absolute -top-4 -right-4 w-16 h-16 bg-theme-primary/10 rounded-full flex items-center justify-center text-theme-primary font-black text-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0">
                                    {(idx + 1).toString().padStart(2, '0')}
                                </div>

                                <div className="w-24 h-24 rounded-3xl bg-theme-primary/5 flex items-center justify-center shrink-0 group-hover:bg-theme-primary/20 transition-colors duration-500">
                                    <i className={`fa-solid ${item.icon} text-4xl text-theme-primary`}></i>
                                </div>

                                <div className="flex-grow">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="h-px w-8 bg-theme-primary"></div>
                                        <h4 className="text-2xl font-bold text-black group-hover:text-white transition-colors duration-500 uppercase tracking-wide">
                                            {item.title}
                                        </h4>
                                    </div>
                                    <p className="text-gray-500 group-hover:text-white/60 transition-colors duration-500 text-lg leading-relaxed font-medium italic">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Other Compliances Section */}
                    <div className="mt-40 mb-16 relative text-left">
                        <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-32 h-[200%] bg-theme-primary/5 -skew-x-12 -z-10"></div>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div className="max-w-2xl">
                                <h6 className="text-theme-primary uppercase tracking-[0.3em] font-bold text-sm mb-4">Operational Standards</h6>
                                <h2 className="text-4xl md:text-6xl font-black text-[#0a0a0a] tracking-tight leading-none">
                                    Operational <br />
                                    <span className="text-theme-primary italic font-serif">Compliances</span>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
                        {otherCompliances.map((item, idx) => (
                            <div key={idx} className="group relative p-12 rounded-[3.5rem] bg-gray-50 border border-transparent hover:bg-white hover:border-theme-primary/20 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 overflow-hidden">
                                {/* Decorative Glow */}
                                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-theme-primary/5 rounded-full blur-3xl group-hover:bg-theme-primary/10 transition-colors"></div>

                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-4 sm:mb-8 shadow-sm group-hover:bg-theme-primary group-hover:scale-110 transition-all duration-500">
                                        <i className={`fa-solid ${item.icon} text-2xl text-theme-primary group-hover:text-white transition-colors`}></i>
                                    </div>

                                    <h4 className="text-3xl font-black text-black mb-6 flex items-center gap-4 tracking-tight">
                                        <span className="w-2 h-2 rounded-full bg-theme-primary animate-pulse"></span>
                                        {item.title}
                                    </h4>

                                    <div className="relative pl-6 border-l-2 border-theme-primary/10 group-hover:border-theme-primary transition-colors duration-700">
                                        <p className="text-gray-500 group-hover:text-black transition-colors duration-500 text-lg leading-relaxed font-medium italic">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Flow Section */}
            <ProcessFlow />

            {/* FAQ Carousel Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Got questions? We've got answers. Explore our common queries about LLP Compliance.
                        </p>
                        <div className="w-24 h-1 bg-theme-primary mx-auto mt-6"></div>
                    </div>

                    <Carousel items={faqs} autoplay={true} />
                </div>
            </section>

            {/* WhatsApp Floating Button */}
            

            <ConsultModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="LLP Annual Compliance Consultation"
            />
        </div>
    );
};

export default LlpCompliance;
