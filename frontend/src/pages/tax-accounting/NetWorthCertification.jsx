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

const NetWorthCertification = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Bank Statements", icon: "fa-building-columns" },
        { title: "Property Documents", icon: "fa-house-lock" },
        { title: "Investment Statements", icon: "fa-chart-pie" },
        { title: "Liability Statements (Loans)", icon: "fa-file-invoice-dollar" },
        { title: "Latest Income Tax Returns", icon: "fa-receipt" }
    ];

    const cards = [
        {
            title: "Asset Valuation",
            icon: "fa-gem",
            desc: "Comprehensive evaluation of all liquid and non-liquid assets including property, cash, and investments."
        },
        {
            title: "Liability Assessment",
            icon: "fa-file-signature",
            desc: "Calculating all outstanding loans, mortgages, and other financial obligations to determine net value."
        },
        {
            title: "Supporting Evidence",
            icon: "fa-folder-open",
            desc: "Collecting and verifying all documentary proof for assets and liabilities mentioned in the certificate."
        },
        {
            title: "Net Worth Calculation",
            icon: "fa-calculator",
            desc: "Precise mathematical calculation (Total Assets - Total Liabilities) following standard accounting principles."
        },
        {
            title: "CA Certification (UDIN)",
            icon: "fa-user-check",
            desc: "Issuance of the certificate by a Chartered Accountant with a unique UDIN for authenticity verification."
        },
        {
            title: "Purpose Specific",
            icon: "fa-bullseye",
            desc: "Tailoring the certificate for specific needs like Visa applications, Tenders, Bank Loans, or Franchises."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "What is a Net Worth Certificate?",
            description: "It is a document certified by a CA that lists the total assets and liabilities of an individual or business at a specific point in time.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "Why is it needed for Visas?",
            description: "Embassies require it to ensure that the applicant has sufficient financial support and assets in their home country.",
            icon: <i className="fa-solid fa-passport"></i>
        },
        {
            id: 3,
            title: "How long is the certificate valid?",
            description: "Generally, it is considered valid for 6 months, though some authorities may specify their own validity period.",
            icon: <i className="fa-solid fa-calendar-check"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/logo/Documents-required-for-Net-Worth-Certificate.jpg')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Net Worth Certification (CA Certified)</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Visa Requirements | Tenders | Bank Loans | UDIN Verified CA Certificate
                        </p>
                        <div className="mb-4 sm:mb-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-1.5 bg-theme-primary text-[#1a2b1f] px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                <i className="fa-solid fa-video"></i> Connect with us
                            </button>
                        </div>
                        <h2 className="text-xl lg:text-3xl font-bold leading-relaxed">Accurate Asset & Liability Certification for Your Global and Financial Growth</h2>
                    </div>
                    <ServiceForm title="Net Worth Certification" />
                </div>
            </div>

            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Net Worth Certification Process</h2>
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
                title="Net Worth Certification Consultation"
            />
        </div>
    );
};

export default NetWorthCertification;
