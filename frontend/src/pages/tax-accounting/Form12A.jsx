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

const Form12A = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Trust Deed/Bye-laws", icon: "fa-file-contract" },
        { title: "PAN Card of Entity", icon: "fa-address-card" },
        { title: "Aadhaar of Trustees", icon: "fa-id-card" },
        { title: "Registration Certificate", icon: "fa-certificate" },
        { title: "3 Years Audit Reports", icon: "fa-file-invoice-dollar" },
        { title: "Activity Report", icon: "fa-clipboard-list" }
    ];

    const cards = [
        {
            title: "Tax Exemption",
            icon: "fa-hand-holding-dollar",
            desc: "Form 12A registration allows NGOs and Trusts to be exempt from paying income tax on their surplus income."
        },
        {
            title: "Legal Recognition",
            icon: "fa-scale-balanced",
            desc: "Provides legal status as a charitable entity, enhancing credibility for receiving grants and donations."
        },
        {
            title: "Government Grants",
            icon: "fa-building-columns",
            desc: "A prerequisite for applying for various government schemes, projects, and international funding."
        },
        {
            title: "Lifetime Validity",
            icon: "fa-infinity",
            desc: "Registration under 12A is a one-time process and remains valid for the lifetime of the entity unless cancelled."
        },
        {
            title: "Resource Utilization",
            icon: "fa-seedling",
            desc: "Enables the organization to utilize more resources for its charitable objectives rather than paying tax."
        },
        {
            title: "NGO Compliance",
            icon: "fa-check-double",
            desc: "Ensures your NGO remains compliant with Income Tax regulations, avoiding scrutiny and penalties."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "What is Form 12A registration?",
            description: "Form 12A registration is a one-time exemption granted by the Income Tax Department to trusts and other non-profit entities.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "Who is eligible for 12A registration?",
            description: "Charitable Trusts, Religious Trusts, Societies, and Section 8 Companies are eligible for 12A registration.",
            icon: <i className="fa-solid fa-users"></i>
        },
        {
            id: 3,
            title: "Is 12A registration mandatory?",
            description: "While not mandatory for operation, it is essential if the NGO wants to claim income tax exemptions.",
            icon: <i className="fa-solid fa-circle-exclamation"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/logo/Gemini_Generated_Image_x5599mx5599mx559.png')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Form 12A Registration</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Income Tax Exemption | NGOs | Trusts | Societies | Section 8 Companies
                        </p>
                        <div className="mb-4 sm:mb-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-1.5 bg-theme-primary text-[#1a2b1f] px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                <i className="fa-solid fa-video"></i> Connect with us
                            </button>
                        </div>
                        <h2 className="text-xl lg:text-3xl font-bold leading-relaxed">Secure Tax Exemption for Your NGO</h2>
                    </div>
                    <ServiceForm title="Form 12A Registration" />
                </div>
            </div>

            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Benefits of Form 12A Registration</h2>
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
                title="12A Registration Consultation"
            />
        </div>
    );
};

export default Form12A;
