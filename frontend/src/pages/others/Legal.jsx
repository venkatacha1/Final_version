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

const Legal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "ID & Address Proof", icon: "fa-address-card" },
        { title: "Contract/Agreement Details", icon: "fa-file-signature" },
        { title: "Proof of Business (if any)", icon: "fa-building" },
        { title: "Relevant Legal Notices", icon: "fa-gavel" },
        { title: "Bank Statements", icon: "fa-building-columns" }
    ];

    const cards = [
        {
            title: "Expert Consulting",
            icon: "fa-scale-balanced",
            desc: "Get professional legal advice for your business and personal legal requirements from experienced experts."
        },
        {
            title: "Drafting Services",
            icon: "fa-pen-clip",
            desc: "Precision drafting of contracts, agreements, and legal documents tailored to protect your interests."
        },
        {
            title: "Dispute Resolution",
            icon: "fa-handshake",
            desc: "Effective mediation and legal representation to resolve disputes with minimum friction and maximum efficiency."
        },
        {
            title: "Compliance Audit",
            icon: "fa-clipboard-check",
            desc: "Thorough legal audit of your business operations to ensure complete compliance with latest laws and regulations."
        },
        {
            title: "Notice Management",
            icon: "fa-envelope-open-text",
            desc: "Timely and professional responses to legal notices to safeguard your legal position and reputation."
        },
        {
            title: "Litigation Support",
            icon: "fa-shield-halved",
            desc: "Comprehensive support for all stages of litigation, from filing cases to representing you in relevant forums."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "What legal services do you provide?",
            description: "We provide comprehensive services including document drafting, legal consulting, and compliance management.",
            icon: <i className="fa-solid fa-briefcase"></i>
        },
        {
            id: 2,
            title: "How long does drafting take?",
            description: "Most legal drafts are completed within 3-5 working days depending on the complexity of the agreement.",
            icon: <i className="fa-solid fa-clock"></i>
        },
        {
            id: 3,
            title: "Is legal consulting confidential?",
            description: "Yes, all legal consulting and document management are handled with strict 100% confidentiality.",
            icon: <i className="fa-solid fa-lock"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-center flex items-center"
                style={{ backgroundImage: "url('/images/logo/Legal-services-blog.jpg')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Expert Legal Solutions & Support</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Protecting your rights | Drafting experts | Legal compliance
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
                        <h2 className="text-xl lg:text-3xl font-bold leading-relaxed">Navigating Complex Legal Landscapes with Precision and Integrity</h2>
                    </div>
                    <ServiceForm title="Legal Solutions" />
                </div>
            </div>

            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Legal Expertise</h2>
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
                title="Legal Solutions Consultation"
            />
        </div>
    );
};

export default Legal;
