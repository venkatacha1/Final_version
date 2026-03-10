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

const ITR7 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Registration Certificate (12A/80G/CSR)", icon: "fa-certificate" },
        { title: "Audit Report (Form 10B/10BB)", icon: "fa-stamp" },
        { title: "Financial Statements", icon: "fa-file-invoice-dollar" },
        { title: "Details of Donations Received", icon: "fa-hand-holding-heart" },
        { title: "Bank Statements", icon: "fa-building-columns" }
    ];

    const cards = [
        {
            title: "Charitable Trusts",
            icon: "fa-heart",
            desc: "Income tax return for persons including companies required to furnish return under sections 139(4A) or 139(4B)."
        },
        {
            title: "Political Parties",
            icon: "fa-landmark",
            desc: "Specialized filing for political parties to ensure complete transparency and compliance with ECI and Tax rules."
        },
        {
            title: "Educational Institutes",
            icon: "fa-graduation-cap",
            desc: "Designed for schools, colleges, and research associations claiming exemptions under specific clauses."
        },
        {
            title: "Religious Institutions",
            icon: "fa-synagogue",
            desc: "Accurate reporting of income and application of funds for religious trusts to maintain their tax-exempt status."
        },
        {
            title: "NGOs & Non-Profits",
            icon: "fa-users",
            desc: "Ensuring all social impact organizations stay compliant with the latest trust and tax regulations."
        },
        {
            title: "Exemption Protection",
            icon: "fa-shield-halved",
            desc: "Expert guidance to ensure your organization's activities align with its objects to protect tax exemptions."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "Who should file ITR-7?",
            description: "ITR-7 is for persons including companies who are required to furnish return under sections 139(4A), 139(4B), 139(4C), or 139(4D).",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "What is the importance of 12A/12AB?",
            description: "Registration under section 12A/12AB is mandatory for trusts to claim income tax exemptions on their income.",
            icon: <i className="fa-solid fa-shield"></i>
        },
        {
            id: 3,
            title: "Can a trust file ITR-5?",
            description: "No, a trust or society claiming exemptions under sections 11 and 12 must file ITR-7.",
            icon: <i className="fa-solid fa-circle-xmark"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/resource/news-details.jpg')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Form ITR 7 (NGO / Non Profit) filing</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Charitable Trusts | Societies | Educational | Political Parties
                        </p>
                        <div className="mb-4 sm:mb-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-1.5 bg-theme-primary text-[#1a2b1f] px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                <i className="fa-solid fa-video"></i> Connect with us
                            </button>
                        </div>
                        <h2 className="text-xl lg:text-3xl font-bold leading-relaxed">Tax Compliance for Social Impact Organizations</h2>
                    </div>
                    <ServiceForm title="ITR-7 Filing" />
                </div>
            </div>

            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Understanding ITR-7</h2>
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
                title="ITR 7 Filing Consultation"
            />
        </div>
    );
};

export default ITR7;
