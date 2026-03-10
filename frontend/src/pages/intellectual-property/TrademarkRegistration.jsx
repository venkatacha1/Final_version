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

const TrademarkRegistration = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Identity proof", icon: "fa-id-card" },
        { title: "Address proof", icon: "fa-location-dot" },
        { title: "Photograph", icon: "fa-camera" },
        { title: "Brand name & Logo", icon: "fa-copyright" },
        { title: "Power of Attorney", icon: "fa-file-signature" }
    ];

    const cards = [
        {
            title: "Brand Protection",
            icon: "fa-shield-halved",
            desc: "A trademark registration provides legal protection for your brand name, logo, or slogan. It ensures that no one else can use a similar mark in your industry."
        },
        {
            title: "Exclusive Rights",
            icon: "fa-crown",
            desc: "Registering your trademark gives you exclusive rights to use the mark nationwide. It becomes a valuable intangible asset for your business."
        },
        {
            title: "Builds Trust",
            icon: "fa-handshake-simple",
            desc: "A registered trademark (indicated by the ® symbol) enhances your brand's credibility and builds trust among customers and investors."
        },
        {
            title: "Legal Remedy",
            icon: "fa-gavel",
            desc: "Registration allows you to take legal action against infringers. It is much easier to protect your brand in court with a registered trademark."
        },
        {
            title: "Global Expansion",
            icon: "fa-earth-americas",
            desc: "A domestic trademark registration can serve as a basis for international trademark applications, helping you expand your brand globally."
        },
        {
            title: "Asset Value",
            icon: "fa-chart-line",
            desc: "A trademark is an asset that can be sold, licensed, or used as security for loans. Its value grows as your brand gains popularity."
        }
    ];

    const clientList = [
        "Haja Bawa", "D-Tech Medical", "Kodhi Hot Chips", "Legs Go", "Salala Gold & Diamonds",
        "Bengaluru Talks", "Jr Souls", "Ofigen", "Tharavaatamma", "Owtlander", "Mummy Days",
        "Weavers Home", "Hippie Williams", "IR Concepts and Constructions", "Eduance International",
        "Gear Four", "Shaheen Scientific School", "Juvecure", "Easy West", "Pulse Spice Acromart",
        "Greenvibe Restaurant and Bakers", "Sri Saravana Cements", "Ec Find", "Hajar Natural Laterite Tiles",
        "Firecream Sizzlers", "Tanvo", "ABDebt Receivables", "Thamizh.com"
    ];

    const colorThemes = [
        { bg: "#f3e8ff", text: "#9333ea", border: "#e9d5ff" }, // Purple
        { bg: "#eff6ff", text: "#3b82f6", border: "#dbeafe" }, // Blue
        { bg: "#fef2f2", text: "#dc2626", border: "#fee2e2" }, // Red
        { bg: "#f0fdfa", text: "#0d9488", border: "#ccfbf1" }, // Teal
        { bg: "#f0fdf4", text: "#16a34a", border: "#dcfce7" }, // Green
        { bg: "#ecfeff", text: "#0891b2", border: "#cffafe" }, // Cyan
    ];

    const faqs = [
        {
            id: 1,
            title: "What is a Trademark?",
            description: "A trademark is a unique symbol, word, or words legally registered or established by use as representing a company or product.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "How long does it take?",
            description: "While the application is filed within 24 hours (allowing you to use the TM symbol), the entire registration process can take 6-12 months.",
            icon: <i className="fa-solid fa-clock"></i>
        },
        {
            id: 3,
            title: "What is the TM and ® symbol?",
            description: "TM is used while the application is pending. ® is used only after the trademark is successfully registered.",
            icon: <i className="fa-solid fa-registered"></i>
        },
        {
            id: 4,
            title: "Can I register a logo?",
            description: "Yes, you can register a brand name, a logo, or a combination of both (wordmark and devicemark).",
            icon: <i className="fa-solid fa-icons"></i>
        },
        {
            id: 5,
            title: "Is it valid forever?",
            description: "A trademark registration is valid for 10 years and can be renewed indefinitely every 10 years.",
            icon: <i className="fa-solid fa-calendar-check"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            {/* Hero Section */}
            <div
                className="relative min-h-[600px] h-auto lg:h-[750px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/logo/block49.jpg')" }}
            >
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-white/70"></div>

                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    {/* Left Content */}
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Trademark Registration Online</h1>
                        <h2 className="text-xl lg:text-3xl font-bold mb-6 text-theme-black/80">
                            Securing your brand identity across India
                        </h2>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8 text-gray-700">
                            Protect your brand today | Online Process | Expert Assistance
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
                    <ServiceForm title="Trademark Registration" />
                </div>
            </div>

            {/* Carousel Content Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Trademark Registration?</h2>
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

            {/* Our Clients Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-normal text-gray-400 tracking-tight">
                            Our <span className="text-gray-900 font-medium">Clients</span>
                        </h2>
                    </div>

                    {/* Logo Scroll Container */}
                    <div className="relative">
                        <div className="flex overflow-hidden">
                            <div className="flex animate-scroll-seamless gap-8 items-center py-4">
                                {/* First set of clients */}
                                {clientList.map((client, index) => {
                                    const theme = colorThemes[index % colorThemes.length];
                                    return (
                                        <div
                                            key={index}
                                            className="flex-shrink-0 flex items-center gap-4 px-6 py-3 rounded-xl border border-gray-100 bg-gray-50/50 transition-all duration-300 hover:scale-105 hover:border-theme-primary group whitespace-nowrap shadow-sm hover:shadow-md"
                                        >
                                            <img
                                                src={`/images/clients/client-${(index % 8) + 1}.png`}
                                                alt=""
                                                className="w-8 h-8 object-contain transition-all duration-300"
                                            />
                                            <span
                                                className="text-lg font-semibold transition-colors"
                                                style={{ color: theme.text }}
                                            >
                                                {client}
                                            </span>
                                        </div>
                                    );
                                })}
                                {/* Duplicate for seamless loop */}
                                {clientList.map((client, index) => {
                                    const theme = colorThemes[index % colorThemes.length];
                                    return (
                                        <div
                                            key={`dup-${index}`}
                                            className="flex-shrink-0 flex items-center gap-4 px-6 py-3 rounded-xl border border-gray-100 bg-gray-50/50 transition-all duration-300 hover:scale-105 hover:border-theme-primary group whitespace-nowrap shadow-sm hover:shadow-md"
                                        >
                                            <img
                                                src={`/images/clients/client-${(index % 8) + 1}.png`}
                                                alt=""
                                                className="w-8 h-8 object-contain transition-all duration-300"
                                            />
                                            <span
                                                className="text-lg font-semibold transition-colors"
                                                style={{ color: theme.text }}
                                            >
                                                {client}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    @keyframes scroll-seamless {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                    .animate-scroll-seamless {
                        animation: scroll-seamless 80s linear infinite;
                        display: flex;
                        width: max-content;
                    }
                    .animate-scroll-seamless:hover {
                        animation-play-state: paused;
                    }
                `}</style>
            </section>

            {/* FAQ Carousel Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Got questions? We've got answers. Explore our common queries about Trademark Registration.
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
                title="Trademark Registration Consultation"
            />
        </div>
    );
};

export default TrademarkRegistration;
