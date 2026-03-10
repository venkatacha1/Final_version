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

const ITR6 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Audited Financials", icon: "fa-file-invoice-dollar" },
        { title: "Audit Report (3CA/3CB-3CD)", icon: "fa-stamp" },
        { title: "MAT Credit Details", icon: "fa-calculator" },
        { title: "TCS / TDS Certificates", icon: "fa-certificate" },
        { title: "Bank Statements", icon: "fa-building-columns" }
    ];

    const cards = [
        {
            title: "Corporate Entities",
            icon: "fa-building-shield",
            desc: "Mandatory income tax return form for all companies registered under the Companies Act, except those claiming exemption under section 11."
        },
        {
            title: "MAT Compliance",
            icon: "fa-percent",
            desc: "Proper calculation and reporting of Minimum Alternate Tax (MAT) and MAT credit to optimize tax outflow."
        },
        {
            title: "Tax Audit Integration",
            icon: "fa-clipboard-check",
            desc: "Seamlessly integrate your tax audit findings into the ITR-6 form for accurate and compliant reporting."
        },
        {
            title: "Loss Carry Forward",
            icon: "fa-arrow-right-long",
            desc: "Strategically report business losses for carry-forward to future years, helping in long-term tax saving."
        },
        {
            title: "Internal Controls",
            icon: "fa-gears",
            desc: "Expert review of your company's financials to ensure internal controls and compliance meet regulatory standards."
        },
        {
            title: "Digital Filing",
            icon: "fa-laptop-code",
            desc: "Secure and timely e-filing of corporate returns with digital signatures to meet the October 31 deadline."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "Which companies file ITR-6?",
            description: "All companies other than those claiming exemption under section 11 (charitable/religious trusts) must file ITR-6.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "When is the due date for ITR-6?",
            description: "The due date is October 31 of the assessment year for companies required to get their accounts audited.",
            icon: <i className="fa-solid fa-calendar-check"></i>
        },
        {
            id: 3,
            title: "Is paper filing allowed for ITR-6?",
            description: "No, ITR-6 must be filed electronically with a Digital Signature Certificate (DSC).",
            icon: <i className="fa-solid fa-pen-nib"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/logo/new-indian-itr-income-tax-form-isolated-background-140207218.webp')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Form ITR 6 (Companies) filing</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Private Limited | Public Limited | MAT Compliance | Corporate Tax
                        </p>
                        <div className="mb-4 sm:mb-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-1.5 bg-theme-primary text-[#1a2b1f] px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                <i className="fa-solid fa-video"></i> Connect with us
                            </button>
                        </div>
                        <h2 className="text-xl lg:text-3xl font-bold leading-relaxed">Advanced Corporate Tax Services for Growing Businesses</h2>
                    </div>
                    <ServiceForm title="ITR-6 Filing" />
                </div>
            </div>

            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Understanding ITR-6</h2>
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
                title="ITR 6 Filing Consultation"
            />
        </div>
    );
};

export default ITR6;
