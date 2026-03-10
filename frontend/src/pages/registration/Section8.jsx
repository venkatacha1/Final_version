import React, { useEffect, useState } from 'react';
import ServiceForm from '../../components/ServiceForm';
import Carousel from '../../components/Carousel';
import ProcessFlow from '../../components/ProcessFlow';
import DocumentsRequired from '../../components/DocumentsRequired';
import ConsultModal from '../../components/ConsultModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Section8 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "PAN & Aadhaar of Directors", icon: "fa-address-card" },
        { title: "Passport Size Photograph", icon: "fa-image" },
        { title: "Address Proof of Office", icon: "fa-house" },
        { title: "Rental Agreement/NOC", icon: "fa-file-shield" },
        { title: "Financial Estimates (3 Years)", icon: "fa-chart-pie" }
    ];

    const cards = [
        {
            title: "Non-Profit Status",
            icon: "fa-heart",
            desc: "The primary objective is to promote social welfare, education, charity, or protecting the environment."
        },
        {
            title: "Tax Benefits",
            icon: "fa-file-invoice-dollar",
            desc: "Section 8 companies are eligible for various tax exemptions under Section 12A and 80G of the Income Tax Act."
        },
        {
            title: "Legal Identity",
            icon: "fa-id-card",
            desc: "It enjoys the status of a limited company with a separate legal existence, providing trust to donors."
        },
        {
            title: "CSR Eligibility",
            icon: "fa-hand-holding-heart",
            desc: "Large corporations prefer donating to Section 8 companies to fulfill their CSR (Corporate Social Responsibility) obligations."
        },
        {
            title: "No Dividend",
            icon: "fa-ban",
            desc: "Profits cannot be distributed to members; they must be reused solely for promoting the company's social objectives."
        },
        {
            title: "High Credibility",
            icon: "fa-medal",
            desc: "Registration under Section 8 of the Companies Act, 2013, provides high credibility and global recognition."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "Can a Section 8 company be converted?",
            description: "Yes, it can be converted into any other form of company under certain conditions and approvals.",
            icon: <i className="fa-solid fa-arrows-rotate"></i>
        },
        {
            id: 2,
            title: "Is 'Limited' word mandatory?",
            description: "No, Section 8 companies are exempted from using the suffix 'Limited' or 'Private Limited' in their name.",
            icon: <i className="fa-solid fa-font"></i>
        },
        {
            id: 3,
            title: "How many directors are needed?",
            description: "A minimum of 2 directors are required for a Section 8 company registration.",
            icon: <i className="fa-solid fa-users"></i>
        }
    ];

    const comparisonData = [
        { feature: "Governing Law", icons: "fa-gavel", trust: "Indian Trust Act, 1882", society: "Societies Registration Act", section8: "Companies Act, 2013" },
        { feature: "Registration", icons: "fa-file-signature", trust: "Sub-Registrar", society: "Registrar of Societies", section8: "Central Gov (ROC)" },
        { feature: "Min Members", icons: "fa-users-line", trust: "2 Trustees", society: "7 Members", section8: "2 Directors/Members" },
        { feature: "Compliance", icons: "fa-list-check", trust: "Low", society: "Moderate", section8: "High (Corporate Style)" },
        { feature: "Credibility", icons: "fa-award", trust: "Moderate", society: "High", section8: "Premium (Best for CSR)" }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-center flex items-center"
                style={{ backgroundImage: "url('/images/logo/section_8_hero.png')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Section 8 Company Registration</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Non-profit Social Welfare | Tax Benefits | CSR Funding
                        </p>
                        <div className="mb-4 sm:mb-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-1.5 bg-theme-primary text-[#1a2b1f] px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                <i className="fa-solid fa-video"></i> Connect with us
                            </button>
                        </div>
                        <h2 className="text-xl lg:text-3xl font-bold leading-relaxed">Dedicated to Social Impact and Welfare through Legal Excellence</h2>
                    </div>
                    <ServiceForm title="Section 8 Company Registration" />
                </div>
            </div>

            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Welfare Objectives</h2>
                        <div className="w-24 h-1 bg-theme-primary mx-auto"></div>
                    </div>
                    <Swiper
                        modules={[Pagination, Autoplay, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
                        className="pb-16"
                    >
                        {cards.map((card, index) => (
                            <SwiperSlide key={index}>
                                <div className="p-10 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center">
                                    <div className="w-20 h-20 bg-theme-primary/10 rounded-full flex items-center justify-center mb-4 sm:mb-8">
                                        <i className={`fa-solid ${card.icon} text-4xl text-theme-black`}></i>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-5">{card.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-lg">{card.desc}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <DocumentsRequired documents={documents} />

            {/* NGO Comparison Matrix Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-theme-primary/5 -skew-x-12 translate-x-1/2"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10">
                    <div className="text-center mb-16">
                        <h6 className="text-theme-primary uppercase tracking-[0.3em] font-bold text-sm mb-4">Charity Selection Guide</h6>
                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-[#0a0a0a] tracking-tight leading-none mb-6">
                            NGO Selection <br />
                            <span className="text-theme-primary italic font-serif text-5xl lg:text-6xl">Matrix</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-theme-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="max-w-5xl mx-auto overflow-hidden rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all hover:shadow-2xl">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[800px]">
                                <thead>
                                    <tr className="bg-[#0a0a0a]">
                                        <th className="px-6 py-10 text-white font-bold text-lg uppercase tracking-wider border-r border-white/10 sticky left-0 bg-[#0a0a0a] z-20">Key Features</th>
                                        <th className="px-6 py-10 text-white font-bold text-lg uppercase tracking-wider text-center border-r border-white/10">Trust</th>
                                        <th className="px-6 py-10 text-white font-bold text-lg uppercase tracking-wider text-center border-r border-white/10">Society</th>
                                        <th className="px-6 py-10 text-[#FFD700] font-black text-lg uppercase tracking-wider text-center bg-white/5 backdrop-blur-sm">Section 8 Company</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {comparisonData.map((row, idx) => (
                                        <tr key={idx} className="group hover:bg-gray-50/80 transition-all duration-500">
                                            <td className="px-6 py-8 border-r border-gray-50 sticky left-0 bg-white group-hover:bg-gray-50/80 z-10">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-xl bg-theme-primary/10 flex items-center justify-center shrink-0 group-hover:bg-theme-primary transition-all duration-500 shadow-sm">
                                                        <i className={`fa-solid ${row.icons} text-lg text-theme-primary group-hover:text-white transition-colors`}></i>
                                                    </div>
                                                    <span className="text-lg font-bold text-[#0a0a0a] tracking-tight">{row.feature}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-8 text-center text-lg font-medium text-gray-600 border-r border-gray-50">{row.trust}</td>
                                            <td className="px-6 py-8 text-center text-lg font-medium text-gray-600 border-r border-gray-50">{row.society}</td>
                                            <td className="px-6 py-8 text-center text-lg font-bold text-theme-primary bg-theme-primary/5">{row.section8}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-theme-primary/5 py-6 px-10 border-t border-gray-100 italic text-theme-primary text-center font-bold tracking-wide">
                            Section 8 Companies offer the highest level of transparency and are preferred for CSR funding.
                        </div>
                    </div>
                </div>
            </section>

            <ProcessFlow />

            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                        <div className="w-24 h-1 bg-theme-primary mx-auto mt-6"></div>
                    </div>
                    <Carousel items={faqs} autoplay={true} />
                </div>
            </section>

            

            <ConsultModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Section 8 Company Consultation"
            />
        </div>
    );
};

export default Section8;
