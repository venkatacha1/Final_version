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

const DigitalSignature = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Aadhaar Card", icon: "fa-id-card" },
        { title: "PAN Card", icon: "fa-address-card" },
        { title: "Passport Size Photo", icon: "fa-image" },
        { title: "Mobile Number (Aadhaar Linked)", icon: "fa-mobile-screen" },
        { title: "Email Address", icon: "fa-envelope" }
    ];

    const cards = [
        {
            title: "Safe & Secure",
            icon: "fa-shield-halved",
            desc: "Highly encrypted digital signatures ensure your identity is protected during online transactions and filings."
        },
        {
            title: "Legal Validity",
            icon: "fa-gavel",
            desc: "Class 3 DSCs are legally recognized under the IT Act and are mandatory for various government portals."
        },
        {
            title: "Paperless Filings",
            icon: "fa-file-signature",
            desc: "Sign documents electronically for Income Tax, GST, MCA, and E-Tendering without physical interaction."
        },
        {
            title: "Time Efficient",
            icon: "fa-clock",
            desc: "Quick processing and issuance of DSC within hours, allowing you to meet urgent filing deadlines."
        },
        {
            title: "Multi-purpose",
            icon: "fa-layer-group",
            desc: "One DSC can be used across multiple government departments and for various statutory compliances."
        },
        {
            title: "Expert Assistance",
            icon: "fa-user-check",
            desc: "End-to-end support for video verification and token configuration to ensure a smooth experience."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "What is a Digital Signature Certificate (DSC)?",
            description: "A DSC is a secure digital key that certifies the identity of the holder, similar to a physical handwritten signature but for electronic documents.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "Which class of DSC do I need?",
            description: "Class 3 DSC is currently the most secure and is required for MCA filings, GST, Income Tax, and E-Tendering.",
            icon: <i className="fa-solid fa-certificate"></i>
        },
        {
            id: 3,
            title: "How long is a DSC valid?",
            description: "Typically, DSCs are issued with a validity of 1, 2, or 3 years. You will need to renew it before it expires.",
            icon: <i className="fa-solid fa-calendar-check"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/logo/Gemini_Generated_Image_6g7h2p6g7h2p6g7h.png ')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Digital Signature Certificate (DSC)</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Class 3 DSC | Video Verification | Paperless Process | 24-Hour Issuance
                        </p>
                        <div className="mb-4 sm:mb-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-1.5 bg-theme-primary text-[#1a2b1f] px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                <i className="fa-solid fa-video"></i> Connect with us
                            </button>
                        </div>
                        <h2 className="text-xl lg:text-3xl font-bold leading-relaxed">Secure Your Online Identity Today</h2>
                    </div>
                    <ServiceForm title="Digital Signature Certificate (DSC)" />
                </div>
            </div>

            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Digital Signature?</h2>
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
                title="DSC Consultation"
            />
        </div>
    );
};

export default DigitalSignature;
