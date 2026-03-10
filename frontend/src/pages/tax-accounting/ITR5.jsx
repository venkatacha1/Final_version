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

const ITR5 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Financial Statements", icon: "fa-file-invoice-dollar" },
        { title: "Partnership Deed", icon: "fa-handshake-angle" },
        { title: "Bank Statements", icon: "fa-building-columns" },
        { title: "PAN/Address Proof of Partners", icon: "fa-address-card" },
        { title: "GST Audit Report (if any)", icon: "fa-chart-pie" }
    ];

    const cards = [
        {
            title: "Partnership Firms",
            icon: "fa-handshake",
            desc: "The mandatory income tax return form for companies registered as partnership firms in India."
        },
        {
            title: "LLP Filing",
            icon: "fa-building",
            desc: "Designed for Limited Liability Partnerships (LLPs) to report their annual income and pay taxes."
        },
        {
            title: "Association of Persons",
            icon: "fa-users-rectangle",
            desc: "Suitable for AOPs and BOIs (Body of Individuals) to fulfill their legal tax obligations."
        },
        {
            title: "Business Trust",
            icon: "fa-vault",
            desc: "Used by business trusts and investment funds for reporting their financials to the tax department."
        },
        {
            title: "Compliance Expert",
            icon: "fa-shield-check",
            desc: "Expert guidance ensures your firm stays compliant with complex tax laws and avoids high penalties."
        },
        {
            title: "Strategic Tax Planning",
            icon: "fa-money-bill-trend-up",
            desc: "We help identify the best tax-saving opportunities for your firm to improve overall profitability."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "Who should file ITR-5?",
            description: "ITR-5 is for Firms, LLPs, AOPs, BOIs, Estate of deceased, Estate of insolvent, Business trust and Investment funds.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "Is audit mandatory for ITR-5?",
            description: "Firms with turnover exceeding ₹1 Crore (or ₹50 Lakhs for professionals) must get their accounts audited under section 44AB.",
            icon: <i className="fa-solid fa-file-signature"></i>
        },
        {
            id: 3,
            title: "What is the deadline for ITR-5?",
            description: "For non-audit cases, the deadline is July 31. For audit cases, it's typically October 31 of the assessment year.",
            icon: <i className="fa-solid fa-calendar-days"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/case/case-three-image4.jpg')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Form ITR 5 (Partnership / LLP)</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Partnership Firms | LLPs | AOPs | BOIs | Business Trusts
                        </p>
                        <div className="mb-4 sm:mb-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-1.5 bg-theme-primary text-[#1a2b1f] px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                <i className="fa-solid fa-video"></i> Connect with us
                            </button>
                        </div>
                        <h2 className="text-xl lg:text-3xl font-bold leading-relaxed">Professional Tax Solutions for Firms & Consultancies</h2>
                    </div>
                    <ServiceForm title="ITR-5 Filing" />
                </div>
            </div>

            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Understanding ITR-5</h2>
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
                title="ITR 5 Filing Consultation"
            />
        </div>
    );
};

export default ITR5;
