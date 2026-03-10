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

const TrademarkOpposition = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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

    const documents = [
        { title: "Trademark Journal Copy", icon: "fa-book-open" },
        { title: "Power of Attorney", icon: "fa-file-signature" },
        { title: "Notice of Opposition", icon: "fa-shield-halved" },
        { title: "Evidence in Support", icon: "fa-folder-open" },
        { title: "Counter Statement", icon: "fa-reply" }
    ];

    const cards = [
        {
            title: "What is Opposition?",
            icon: "fa-circle-exclamation",
            desc: "Opposition is filed by a third party when they believe your trademark (advertised in the journal) is similar to theirs or infringes on their rights."
        },
        {
            title: "Crucial Timelines",
            icon: "fa-clock",
            desc: "Opposition must be filed within 4 months of the trademark being advertised in the Trademark Journal. Timely action is essential to protect or defend."
        },
        {
            title: "Counter Statement",
            icon: "fa-file-pen",
            desc: "If someone opposes your mark, you must file a counter-statement within 2 months. Failure to do so leads to abandonment of your application."
        },
        {
            title: "Evidence Phase",
            icon: "fa-box-archive",
            desc: "Both parties present evidence to support their claims. We help you compile robust proof of usage and distinctiveness to win the opposition."
        },
        {
            title: "Legal Proceedings",
            icon: "fa-gavel",
            desc: "Trademark opposition is a quasi-judicial process. Our experts represent you throughout the proceedings, including the final hearing."
        },
        {
            title: "Success in Defense",
            icon: "fa-shield-check",
            desc: "We have a strong track record of successfully defending trademarks against frivolous oppositions, ensuring your brand stays protected."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "Who can file an opposition?",
            description: "Any person can file an opposition to a trademark application, even if they don't have a registered trademark themselves.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "What are the common grounds?",
            description: "Common grounds include similarity to an earlier mark, likelihood of confusion, or the mark being descriptive or deceptive.",
            icon: <i className="fa-solid fa-scale-balanced"></i>
        },
        {
            id: 3,
            title: "How long does opposition take?",
            description: "Trademark opposition is a long-drawn process that can take 1-3 years to reach a final decision by the registrar.",
            icon: <i className="fa-solid fa-hourglass-half"></i>
        },
        {
            id: 4,
            title: "Can we settle out of court?",
            description: "Yes, many oppositions are settled through mutual agreements, such as co-existence agreements or withdrawal of the mark.",
            icon: <i className="fa-solid fa-handshake-angle"></i>
        },
        {
            id: 5,
            title: "What happens if I win?",
            description: "If you successfully defend the opposition, the mark proceeds to registration, and you receive the trademark certificate.",
            icon: <i className="fa-solid fa-award"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            {/* Hero Section */}
            <div
                className="relative min-h-[600px] h-auto lg:h-[750px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/logo/still-life-world-intellectual-property-day.jpg')" }}
            >
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-white/70"></div>

                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    {/* Left Content */}
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Trademark Opposition Services</h1>
                        <h2 className="text-xl lg:text-3xl font-bold mb-6 text-theme-black/80">
                            Protecting your brand from secondary claims
                        </h2>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8 text-gray-700">
                            Defend Your Brand | Expert Legal Counter | Timely Filing
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
                    <ServiceForm title="Trademark Opposition" />
                </div>
            </div>

            {/* Carousel Content Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Managing Trademark Opposition</h2>
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
                            Got questions? We've got answers. Explore our common queries about Trademark Opposition.
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
                title="Trademark Opposition Consultation"
            />
        </div>
    );
};

export default TrademarkOpposition;
