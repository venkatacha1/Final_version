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

const PublicLimitedCompliance = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Financial Statements (AOC-4)", icon: "fa-file-invoice-dollar" },
        { title: "Annual Return (MGT-7)", icon: "fa-calendar-check" },
        { title: "Secretarial Audit Report (MR-3)", icon: "fa-user-tie" },
        { title: "Director's Report with Disclosures", icon: "fa-file-contract" },
        { title: "Notice of AGM & Minutes", icon: "fa-users" }
    ];

    const cards = [
        {
            title: "Annual Filings",
            icon: "fa-calendar-days",
            desc: "Mandatory filing of AOC-4 (Financials) and MGT-7 (Annual Return) within prescribed timelines to avoid heavy penalties."
        },
        {
            title: "Secretarial Audit",
            icon: "fa-shield-halved",
            desc: "Compulsory for public companies with turnover exceeding ₹250 crore or paid-up capital exceeding ₹50 crore."
        },
        {
            title: "Board Composition",
            icon: "fa-users",
            desc: "Ensuring at least 3 directors and the appointment of independent directors as per Section 149 of the Companies Act."
        },
        {
            title: "Internal Audit",
            icon: "fa-chart-line",
            desc: "Mandatory internal audit for all listed companies and unlisted public companies meeting specific threshold criteria."
        },
        {
            title: "Key Managerial Personnel",
            icon: "fa-user-gear",
            desc: "Appointment of MD, CEO, CS, and CFO is mandatory for public companies having paid-up capital of ₹10 crore or more."
        },
        {
            title: "Compliance Meetings",
            icon: "fa-handshake",
            desc: "Strict adherence to board meetings and AGM protocols, including proper notice and minutes documentation."
        }
    ];

    const publicCompliances = [
        { title: "Form INC 20A", icon: "fa-file-signature", desc: "Commencement of Business Filings which needs to be filed with 180 days from the date of incorporation." },
        { title: "Form ADT 1", icon: "fa-user-check", desc: "Auditor appointment filings which needs to be filed with 30 days from the date of incorporation. Failure of filing which leads to penalty payable Rs. 400/- per month." },
        { title: "Book keeping", icon: "fa-book-open-reader", desc: "Book Keeping is maintaining book of records which every company does and it will provide a clear picture of company's strategy and also easy to prepare financial report." },
        { title: "Accounts Finalisation", icon: "fa-calculator", desc: "Accounts finalisation is done at the year end by computing the records of company's records before admitting to income tax filings." },
        { title: "Form AOC 4", icon: "fa-file-invoice-dollar", desc: "Form AOC 4 filing is done at the financial year by submitting the consolidated reports by conducting AGM and needs to be filed within 30 days due before 30th October." },
        { title: "Form MGT 7", icon: "fa-users-gear", desc: "Form MGT 7 filings contains shareholder and board holders details by confirming the details or by modifying the transfer of shares if any then the form shall be submitted before 30th November." },
        { title: "Form MBP 1", icon: "fa-user-tie", desc: "Form MBP 1 filed every year to acknowledge/ disclosure of the interest on shares and which the board resolution at the beginning of post company formation." },
        { title: "Form DPT 3", icon: "fa-piggy-bank", desc: "Form DPT 3 is a one-time return form of loans that has to be filed by a company that has outstanding loans not treated as deposits." }
    ];

    const listedCompliances = [
        { title: "Form MGT 8", icon: "fa-certificate", desc: "Form MGT 8 is an certification from the practicing company secretary and it is applicable only for those companies whose share capital is more than 10 crores and also for those companies turnover more than 50 crores." },
        { title: "Form MR 3", icon: "fa-magnifying-glass-chart", desc: "Form MR 3 filings is an audit report, that prepared and audited by the practicing company secretary and it is applicable for those companies whose turnover more than 250 crore and more." }
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
            title: "How many board meetings are required?",
            description: "A public company must hold at least 4 board meetings every year, with a maximum interval of 120 days between two meetings.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "Is a Secretarial Audit mandatory for all public companies?",
            description: "No, it is mandatory only for listed companies and unlisted public companies meeting the capital or turnover thresholds.",
            icon: <i className="fa-solid fa-list-check"></i>
        },
        {
            id: 3,
            title: "What is the minimum number of directors?",
            description: "A public limited company must have at least 3 directors at all times.",
            icon: <i className="fa-solid fa-users"></i>
        },
        {
            id: 4,
            title: "When is a Cost Audit required?",
            description: "Certain public companies engaged in specific sectors must maintain cost records and conduct a cost audit if they meet turnover limits.",
            icon: <i className="fa-solid fa-calculator"></i>
        },
        {
            id: 5,
            title: "Can public companies accept deposits?",
            description: "Yes, but they must comply with strict ROC rules and maintain a certain level of net worth and turnover.",
            icon: <i className="fa-solid fa-building-columns"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            {/* Hero Section */}
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-center flex items-center"
                style={{ backgroundImage: "url('/images/logo/Gemini_Generated_Image_6r1zbk6r1zbk6r1z.png')" }}
            >
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-white/70"></div>

                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    {/* Left Content */}
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Public Limited Company Compliance</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Comprehensive Secretarial Services | High-Level Regulatory adherence | Corporate Governance
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
                            Mastering complex compliance for large-scale corporate entities
                        </h2>
                    </div>

                    {/* Right Content - Reusable Form Component */}
                    <ServiceForm title="Public Limited Company Compliance" />
                </div>
            </div>

            {/* Carousel Content Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Core Public Company Compliances</h2>
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
                        <div className="max-w-2xl text-left">
                            <h6 className="text-theme-primary uppercase tracking-[0.3em] font-bold text-sm mb-4">Statutory Corporate Ledger</h6>
                            <h2 className="text-4xl md:text-6xl font-black text-[#0a0a0a] tracking-tight leading-none">
                                ROC Compliance <br />
                                <span className="text-theme-primary italic font-serif">Calendar</span>
                            </h2>
                            <p className="mt-4 text-gray-400 font-bold uppercase tracking-widest text-xs">For Listed & Unlisted Public Entities</p>
                        </div>
                        <div className="hidden md:block w-32 h-px bg-theme-primary/30 mb-4"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {publicCompliances.map((item, idx) => (
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

                    {/* Listed Company Special Filings */}
                    <div className="mt-40 mb-16 relative text-left">
                        <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-32 h-[200%] bg-theme-primary/5 -skew-x-12 -z-10"></div>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div className="max-w-2xl">
                                <h6 className="text-theme-primary uppercase tracking-[0.3em] font-bold text-sm mb-4">Stock Exchange & CS Standards</h6>
                                <h2 className="text-4xl md:text-6xl font-black text-[#0a0a0a] tracking-tight leading-none">
                                    Listed Company <br />
                                    <span className="text-theme-primary italic font-serif">Special Filings</span>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
                        {listedCompliances.map((item, idx) => (
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

                    {/* Other Compliances Section */}
                    <div className="mt-40 mb-16 relative text-left">
                        <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-32 h-[200%] bg-theme-primary/5 skew-x-12 -z-10"></div>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div className="max-w-2xl">
                                <h6 className="text-theme-primary uppercase tracking-[0.3em] font-bold text-sm mb-4">Corporate Adherence</h6>
                                <h2 className="text-4xl md:text-6xl font-black text-[#0a0a0a] tracking-tight leading-none">
                                    Additional <br />
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
                            Got questions? We've got answers. Explore our common queries about Public Limited Compliance.
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
                title="Public Limited Company Compliance Consultation"
            />
        </div>
    );
};

export default PublicLimitedCompliance;
