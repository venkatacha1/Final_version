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

const ProfessionalConsultationBusiness = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "ID & Address Proof", icon: "fa-id-card" },
        { title: "Proposed Business Name", icon: "fa-font-awesome" },
        { title: "Premises Proof", icon: "fa-building" },
        { title: "Educational/Experience Proofs", icon: "fa-graduation-cap" },
        { title: "Initial Capital Proof", icon: "fa-money-check-dollar" }
    ];

    const cards = [
        {
            title: "Business Structuring",
            icon: "fa-sitemap",
            desc: "Expert advice on choosing the right legal entity for your business—be it a Private Limited Company, LLP, or Partnership."
        },
        {
            title: "Legal Compliance",
            icon: "fa-scale-balanced",
            desc: "Ensure your new venture is fully compliant from day one with all necessary licenses, permits, and regulatory registrations."
        },
        {
            title: "Market Entry Strategy",
            icon: "fa-chess-board",
            desc: "Helping startups and international companies develop effective strategies for entering and scaling in the Indian market."
        },
        {
            title: "Funding Advisory",
            icon: "fa-hand-holding-dollar",
            desc: "Guidance on fundraising, capital structure, and preparing your business for investors with solid financial projections."
        },
        {
            title: "IP Strategy",
            icon: "fa-copyright",
            desc: "Initial consultation on protecting your brand, inventions, and creative works as you launch your new business."
        },
        {
            title: "Operational Setup",
            icon: "fa-gears",
            desc: "Practical advice on establishing your physical or digital presence, including bank account opening and operational workflows."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "Which business structure is best for me?",
            description: "The best structure depends on your goals, capital, and risk appetite. We analyze your specific situation to recommend the most suitable entity.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "What licenses do I need to start?",
            description: "Required licenses vary by industry and location. We provide a customized checklist of all mandatory registrations for your business.",
            icon: <i className="fa-solid fa-list-check"></i>
        },
        {
            id: 3,
            title: "How long does registration take?",
            description: "Depending on the entity type, it can range from 3 to 15 days. We ensure the fastest possible processing by preparing perfect documentation.",
            icon: <i className="fa-solid fa-clock"></i>
        },
        {
            id: 4,
            title: "Do you help with Startup India?",
            description: "Yes, we provide specialized consultation on getting recognized under the Startup India initiative to avail tax benefits and other incentives.",
            icon: <i className="fa-solid fa-rocket"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            {/* Hero Section */}
            <div
                className="relative min-h-[600px] h-auto lg:h-[750px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/logo/Gemini_Generated_Image_c6ml21c6ml21c6ml.png')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Professional Consultation</h1>
                        <h2 className="text-xl lg:text-3xl font-bold mb-6 text-theme-black/80">
                            Strategic guidance for your new venture
                        </h2>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Business Structuring | Registrations | Strategy | Expert Advisory
                        </p>
                        <div className="mb-4 sm:mb-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-1.5 bg-theme-primary text-[#1a2b1f] px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                <i className="fa-solid fa-video"></i> Connect with us
                            </button>
                        </div>
                    </div>
                    <ServiceForm title="Professional Consultation (Business)" />
                </div>
            </div>

            {/* Why Consultation Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Business Consultation?</h2>
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

            {/* FAQ Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">New Business FAQs</h2>
                        <div className="w-24 h-1 bg-theme-primary mx-auto mt-6"></div>
                    </div>
                    <Carousel items={faqs} autoplay={true} />
                </div>
            </section>

            {/* WhatsApp Floating Button */}
            

            <ConsultModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="New Business Consultation"
            />
        </div>
    );
};

export default ProfessionalConsultationBusiness;
