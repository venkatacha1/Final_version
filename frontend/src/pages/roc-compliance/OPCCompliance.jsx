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

const OPCCompliance = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Bank Statements", icon: "fa-building-columns" },
        { title: "Financial Statements", icon: "fa-file-invoice-dollar" },
        { title: "Director's DSC & DIN", icon: "fa-signature" },
        { title: "Registered Office Address", icon: "fa-location-dot" },
        { title: "GST/ITR Returns (if any)", icon: "fa-receipt" }
    ];

    const cards = [
        {
            title: "Annual Filing (MGT-7A)",
            icon: "fa-file-contract",
            desc: "Filing an abridged annual return for One Person Company with the Registrar of Companies."
        },
        {
            title: "Financials Filing (AOC-4)",
            icon: "fa-chart-pie",
            desc: "Filing the audited financial statements, balance sheet, and profit & loss account."
        },
        {
            title: "Income Tax Returns",
            icon: "fa-file-invoice-dollar",
            desc: "Compulsory filing of Income Tax Return (ITR-6) for the company irrespective of profit or loss."
        },
        {
            title: "Director E-KYC",
            icon: "fa-user-check",
            desc: "Annual KYC verification for the director of the OPC to maintain DIN status active."
        },
        {
            title: "Board Meetings",
            icon: "fa-handshake-angle",
            desc: "Maintaining records of at least two board meetings in a calendar year (half-yearly)."
        },
        {
            title: "Statutory Registers",
            icon: "fa-book-open",
            desc: "Consistent maintenance of registers and minute books of the company as per Companies Act."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "What is OPC Annual Compliance?",
            description: "OPC annual compliance involves filing annual returns and financial statements with the ROC and filing income tax returns every year.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "Is audit mandatory for OPC?",
            description: "Yes, every OPC must get its accounts audited by a Chartered Accountant at the end of each financial year.",
            icon: <i className="fa-solid fa-magnifying-glass-chart"></i>
        },
        {
            id: 3,
            title: "What are the due dates for OPC filing?",
            description: "AOC-4 is filed within 180 days from the end of financial year, and MGT-7A within 60 days of the presumed AGM date.",
            icon: <i className="fa-solid fa-calendar-days"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/logo/opc_compliance_hero.jpg')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">OPC Annual Compliance Services</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            AOC-4 | MGT-7A | ITR-6 | Director KYC | Auditor Appointment
                        </p>
                        <div className="mb-4 sm:mb-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-1.5 bg-theme-primary text-[#1a2b1f] px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                <i className="fa-solid fa-video"></i> Connect with us
                            </button>
                        </div>
                        <h2 className="text-xl lg:text-3xl font-bold leading-relaxed">Hassle-Free Annual Filing & Compliance for Your One Person Company</h2>
                    </div>
                    <ServiceForm title="OPC Annual Compliance" />
                </div>
            </div>

            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">OPC Compliance Requirements</h2>
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
                title="OPC Compliance Consultation"
            />
        </div>
    );
};

export default OPCCompliance;
