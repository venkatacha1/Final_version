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

const IcegateRegistration = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Import-Export Code (IEC)", icon: "fa-barcode" },
        { title: "Digital Signature (Class 3)", icon: "fa-file-signature" },
        { title: "PAN Card", icon: "fa-address-card" },
        { title: "Aadhaar of Authorized Signatory", icon: "fa-id-card" },
        { title: "Authorization Letter", icon: "fa-file-shield" }
    ];

    const cards = [
        {
            title: "Electronic Filing",
            icon: "fa-laptop-code",
            desc: "Submit Bill of Entry, Shipping Bills, and other customs documents electronically through the ICEGATE portal."
        },
        {
            title: "Faster Clearance",
            icon: "fa-truck-fast",
            desc: "Reduces the turnaround time for cargo clearance at ports by automating the verification and payment processes."
        },
        {
            title: "Online Payments",
            icon: "fa-credit-card",
            desc: "Easily pay customs duties, taxes, and other charges online using various integrated payment modes."
        },
        {
            title: "Tracking & Status",
            icon: "fa-magnifying-glass-location",
            desc: "Provides real-time tracking of document status and cargo movement, ensuring transparent logistics."
        },
        {
            title: "Trade Facilitation",
            icon: "fa-handshake",
            desc: "Enables seamless data exchange between customs, port authorities, and other regulatory agencies."
        },
        {
            title: "Direct Port Delivery",
            icon: "fa-anchor",
            desc: "A prerequisite for claiming DPD/DPE benefits, improving the overall efficiency of your supply chain."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "What is ICEGATE?",
            description: "ICEGATE is the e-commerce portal of the Central Board of Indirect Taxes and Customs (CBIC) for customs-related services.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "Who needs to register on ICEGATE?",
            description: "Exporters, Importers, Customs House Agents, and Carriers need to register to file documents and pay duties.",
            icon: <i className="fa-solid fa-user-gear"></i>
        },
        {
            id: 3,
            title: "Is DSC mandatory for ICEGATE?",
            description: "Yes, a Class 3 Digital Signature Certificate is mandatory for registering and signing documents on the ICEGATE portal.",
            icon: <i className="fa-solid fa-file-signature"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/logo/Gemini_Generated_Image_n2nvgxn2nvgxn2nv.png')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">ICEGATE Registration</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            E-Filing | Online Duty Payment | Cargo Tracking | Trade Facilitation
                        </p>
                        <div className="mb-4 sm:mb-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-1.5 bg-theme-primary text-[#1a2b1f] px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                <i className="fa-solid fa-video"></i> Connect with us
                            </button>
                        </div>
                        <h2 className="text-xl lg:text-3xl font-bold leading-relaxed">Streamline Your Customs Compliance</h2>
                    </div>
                    <ServiceForm title="ICEGATE Registration" />
                </div>
            </div>

            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Benefits of ICEGATE Registration</h2>
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
                title="ICEGATE Registration Consultation"
            />
        </div>
    );
};

export default IcegateRegistration;
