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

const PatentServices = () => {
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
        { title: "Invention Disclosure", icon: "fa-lightbulb" },
        { title: "Provisional Specification", icon: "fa-file-lines" },
        { title: "Drawings/Diagrams", icon: "fa-compass-drafting" },
        { title: "Power of Attorney", icon: "fa-file-signature" },
        { title: "Identity & Address Proof", icon: "fa-id-card" }
    ];

    const cards = [
        {
            title: "Invention Protection",
            icon: "fa-microchip",
            desc: "A patent gives you exclusive rights to an invention, providing a legal shield against others making, using, or selling your unique technical solution."
        },
        {
            title: "20-Year Monopoly",
            icon: "fa-stopwatch-20",
            desc: "Patents offer a fixed-term monopoly for 20 years from the date of filing, allowing you to recoup research and development costs through market exclusivity."
        },
        {
            title: "Market Valuation",
            icon: "fa-arrow-up-right-dots",
            desc: "Patents are highly regarded by investors and venture capitalists, significantly increasing your startup's valuation and attractiveness for funding."
        },
        {
            title: "Licensing Income",
            icon: "fa-money-bill-transfer",
            desc: "You can monetize your patent by licensing the technology to other companies in exchange for royalties, creating a passive stream of income."
        },
        {
            title: "Right to Sue",
            icon: "fa-gavel",
            desc: "A patent registration provides the legal standing to sue for infringement and seek injunctions or damages against competitors who copy your technology."
        },
        {
            title: "Global Recognition",
            icon: "fa-globe-asia",
            desc: "Through the Patent Cooperation Treaty (PCT), an Indian patent application can serve as a doorway to securing protection in over 150 countries."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "What can be patented?",
            description: "An invention must be new, involve an inventive step (non-obvious), and be capable of industrial application to be patentable.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "What is a Provisional Patent?",
            description: "It is a temporary application filed to secure a priority date while the invention is still being developed or refined.",
            icon: <i className="fa-solid fa-hourglass-start"></i>
        },
        {
            id: 3,
            title: "How long does it take?",
            description: "The complete patent process, from filing to grant, can take 2-4 years, although expedited examination is available for some categories.",
            icon: <i className="fa-solid fa-clock"></i>
        },
        {
            id: 4,
            title: "Can software be patented in India?",
            description: "Software per se is not patentable, but computer-related inventions with a technical effect or technical contribution can be patented.",
            icon: <i className="fa-solid fa-laptop-code"></i>
        },
        {
            id: 5,
            title: "Is it valid worldwide?",
            description: "No, patents are territorial. A patent granted in India is valid only in India. Separate applications are needed for other countries.",
            icon: <i className="fa-solid fa-map-location-dot"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            {/* Hero Section */}
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/logo/Gemini_Generated_Image_2yytvw2yytvw2yyt.png')" }}
            >
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-white/70"></div>

                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    {/* Left Content */}
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Patent Services & Filing</h1>
                        <h2 className="text-xl lg:text-3xl font-bold mb-6 text-theme-black/80">
                            Transforming your innovations into legal assets
                        </h2>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8 text-gray-700">
                            Secure Your Inventions | Global Priority | Technical Legal Experts
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
                    <ServiceForm title="Patent Registration" />
                </div>
            </div>

            {/* Carousel Content Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Advantages of Patenting</h2>
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
                            Got questions? We've got answers. Explore our common queries about Patent Services.
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
                title="Patent Registration Consultation"
            />
        </div>
    );
};

export default PatentServices;
