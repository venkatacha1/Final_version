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

const ApedaRegistration = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Import-Export Code (IEC)", icon: "fa-barcode" },
        { title: "PAN Card of Entity", icon: "fa-address-card" },
        { title: "Bank Certificate", icon: "fa-building-columns" },
        { title: "Company Incorporation Certificate", icon: "fa-certificate" },
        { title: "List of Directors/Partners", icon: "fa-users" }
    ];

    const cards = [
        {
            title: "Export Subsidies",
            icon: "fa-money-bill-trend-up",
            desc: "Registering with APEDA makes you eligible for various financial assistance and subsidies provided by the government."
        },
        {
            title: "Global Reach",
            icon: "fa-earth-americas",
            desc: "APEDA registration helps in listing your products in international markets and participate in global food exhibitions."
        },
        {
            title: "Quality Standards",
            icon: "fa-check-double",
            desc: "Get guidance on international quality standards and packaging requirements for processed food products."
        },
        {
            title: "Market Intelligence",
            icon: "fa-magnifying-glass-chart",
            desc: "Access valuable data and research reports on global demand and trends for agricultural products."
        },
        {
            title: "Legal Compliance",
            icon: "fa-scale-balanced",
            desc: "Mandatory for exporters of scheduled products to ensure compliance with the APEDA Act."
        },
        {
            title: "Brand Building",
            icon: "fa-award",
            desc: "Enhances the credibility of your export business and builds trust with international buyers."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "Who needs APEDA registration?",
            description: "Any individual or entity exporting scheduled products listed under the APEDA Act must register.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "What is the validity of APEDA registration?",
            description: "The RCMC issued by APEDA is valid for 5 years, after which it needs to be renewed.",
            icon: <i className="fa-solid fa-calendar-days"></i>
        },
        {
            id: 3,
            title: "Can I register online?",
            description: "Yes, the entire application process for APEDA registration is now digital and can be completed online through their portal.",
            icon: <i className="fa-solid fa-laptop"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/logo/Gemini_Generated_Image_8kmubp8kmubp8kmu.png')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">APEDA Registration (RCMC)</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Agricultural Exports | Financial Assistance | Market Research | Global Quality Standards
                        </p>
                        <div className="mb-4 sm:mb-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-1.5 bg-theme-primary text-[#1a2b1f] px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                <i className="fa-solid fa-video"></i> Connect with us
                            </button>
                        </div>
                        <h2 className="text-xl lg:text-3xl font-bold leading-relaxed">Expand Your Agri-Business Globally</h2>
                    </div>
                    <ServiceForm title="APEDA Registration (RCMC)" />
                </div>
            </div>

            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Benefits of APEDA Registration</h2>
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
                title="APEDA Registration Consultation"
            />
        </div>
    );
};

export default ApedaRegistration;
