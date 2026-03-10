import React, { useEffect, useState } from 'react';
import ServiceForm from '../../components/ServiceForm';
import Carousel from '../../components/Carousel';
import ProcessFlow from '../../components/ProcessFlow';
import DocumentsRequired from '../../components/DocumentsRequired';
import ConsultModal from '../../components/ConsultModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const LegalConsultationIP = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "IP Creation Documents", icon: "fa-file-lines" },
        { title: "Proof of Ownership", icon: "fa-certificate" },
        { title: "Infringement Proof (if any)", icon: "fa-gavel" },
        { title: "Previous IP Filings", icon: "fa-folder-open" },
        { title: "Identity Proof", icon: "fa-id-card" }
    ];

    const cards = [
        {
            title: "Expert IP Assessment",
            icon: "fa-magnifying-glass-dollar",
            desc: "Gain deep insights into your intellectual property portfolio with our expert assessment. We help identify potential risks and opportunities."
        },
        {
            title: "Strategic Advisory",
            icon: "fa-chess",
            desc: "Develop a robust IP strategy tailored to your business goals. We provide guidance on protection, commercialization, and enforcement."
        },
        {
            title: "Conflict Resolution",
            icon: "fa-handshake-simple",
            desc: "Expert legal advice on resolving IP disputes through negotiation, mediation, or litigation strategies to protect your interests."
        },
        {
            title: "Licensing Support",
            icon: "fa-file-signature",
            desc: "Professional guidance on drafting and negotiating IP licensing agreements to maximize the value of your intellectual assets."
        },
        {
            title: "Enforcement Guidance",
            icon: "fa-shield-halved",
            desc: "Learn how to effectively enforce your IP rights against infringers and maintain the competitive advantage of your brand."
        },
        {
            title: "Compliance Audit",
            icon: "fa-clipboard-check",
            desc: "Regular audits to ensure your IP management practices comply with current laws and regulations, minimizing legal exposure."
        }
    ];


    const faqs = [
        {
            id: 1,
            title: "Why is IP consultation important?",
            description: "IP consultation helps you understand the legal landscape, identify your protectable assets, and avoid infringing on others' rights.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "When should I seek IP legal advice?",
            description: "Ideally, at the start of any creative process, before launching a brand, or when you suspect someone is using your IP without permission.",
            icon: <i className="fa-solid fa-clock"></i>
        },
        {
            id: 3,
            title: "What does an IP audit involve?",
            description: "An IP audit is a systematic review of the IP owned, used, or acquired by a business to assess risks and ensure legal compliance.",
            icon: <i className="fa-solid fa-clipboard-check"></i>
        },
        {
            id: 4,
            title: "Can you help with IP disputes?",
            description: "Yes, we provide legal strategies for handling IP infringement notices, oppositions, and other conflict-related matters.",
            icon: <i className="fa-solid fa-gavel"></i>
        },
        {
            id: 5,
            title: "Do you offer international IP advice?",
            description: "Yes, we provide guidance on protecting and managing your intellectual property across global jurisdictions.",
            icon: <i className="fa-solid fa-earth-americas"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            {/* Hero Section */}
            <div
                className="relative min-h-[600px] h-auto lg:h-[750px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/logo/Gemini_Generated_Image_yrzp9nyrzp9nyrzp.png')" }}
            >
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-white/70"></div>

                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    {/* Left Content */}
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Legal Consultation</h1>
                        <h2 className="text-xl lg:text-3xl font-bold mb-6 text-theme-black/80">
                            Expert guidance to shield and grow your innovations
                        </h2>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8 text-gray-700">
                            Strategy | Compliance | Enforcement | Expert Assistance
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
                    </div>

                    {/* Right Content - Reusable Form Component */}
                    <ServiceForm title="Legal Consultation (IP)" showConsultationForField={true} />
                </div>
            </div>

            {/* Carousel Content Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Legal Consultation in IP?</h2>
                        <div className="w-24 h-1 bg-theme-primary mx-auto"></div>
                    </div>

                    <Swiper
                        modules={[Pagination, Autoplay, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-16 proprietorship-swiper"
                    >
                        {cards.map((card, index) => (
                            <SwiperSlide key={index}>
                                <div className="p-10 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center">
                                    <div className="w-20 h-20 bg-theme-primary/10 rounded-full flex items-center justify-center mb-4 sm:mb-8">
                                        <i className={`fa-solid ${card.icon} text-4xl text-theme-black`}></i>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-5">{card.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        {card.desc}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <DocumentsRequired documents={documents} />

            {/* Process Flow Section */}
            <ProcessFlow />


            {/* FAQ Carousel Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Got questions? We've got answers. Explore our common queries about IP Legal Consultation.
                        </p>
                        <div className="w-24 h-1 bg-theme-primary mx-auto mt-6"></div>
                    </div>

                    <Carousel items={faqs} autoplay={true} />
                </div>
            </section>

            {/* WhatsApp Floating Button */}

            <ConsultModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="IP Legal Consultation"
            />
        </div>
    );
};

export default LegalConsultationIP;
