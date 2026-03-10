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

const CopyrightServices = () => {
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
        { title: "Soft copy of work", icon: "fa-file-pdf" },
        { title: "Power of Attorney", icon: "fa-file-signature" },
        { title: "No Objection Certificate (NOC)", icon: "fa-file-circle-check" },
        { title: "Identity Proof", icon: "fa-id-card" },
        { title: "Address Proof", icon: "fa-location-dot" }
    ];

    const cards = [
        {
            title: "Creative Protection",
            icon: "fa-pen-fancy",
            desc: "Copyright protects original works of authorship, including literary, dramatic, musical, and artistic works, such as poetry, novels, movies, songs, and computer software."
        },
        {
            title: "Lifetime Protection",
            icon: "fa-infinity",
            desc: "Generally, copyright protection lasts for the entire lifetime of the author plus 60 years after their death, providing long-term security for creative assets."
        },
        {
            title: "Economic Rights",
            icon: "fa-money-bill-trend-up",
            desc: "Registration gives you the exclusive right to reproduce your work, distribute copies, perform or display it publicly, and create derivative works."
        },
        {
            title: "Moral Rights",
            icon: "fa-heart",
            desc: "It protects the integrity of your work and your right to be attributed as the author, preventing others from distorting or mutilating your creative output."
        },
        {
            title: "Infringement Remedy",
            icon: "fa-gavel",
            desc: "A copyright registration is essential to sue for infringement and seek damages and injunctions against unauthorized use of your creative work."
        },
        {
            title: "Global Recognition",
            icon: "fa-earth-africa",
            desc: "India is a member of the Berne Convention. A copyright registered in India is recognized and protected in most countries worldwide."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "Do I need to register for protection?",
            description: "Copyright protection is automatic upon creation, but registration is necessary to take legal action against infringement.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "What can be copyrighted?",
            description: "Books, software, music, films, paintings, photos, and even architectural designs can be copyrighted.",
            icon: <i className="fa-solid fa-palette"></i>
        },
        {
            id: 3,
            title: "How long does registration take?",
            description: "Typically, the copyright process takes 6 to 12 months, including a mandatory 30-day waiting period for objections.",
            icon: <i className="fa-solid fa-clock"></i>
        },
        {
            id: 4,
            title: "Is software copyrightable?",
            description: "Yes, computer software and source code are protected as 'literary works' under the Copyright Act.",
            icon: <i className="fa-solid fa-code"></i>
        },
        {
            id: 5,
            title: "Can I copyright a name?",
            description: "Names, titles, and short phrases are generally protected under trademarks, not copyright.",
            icon: <i className="fa-solid fa-tag"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            {/* Hero Section */}
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/logo/1645178016_Copyright-Registration.jpg')" }}
            >
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-white/70"></div>

                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    {/* Left Content */}
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Copyright Registration</h1>
                        <h2 className="text-xl lg:text-3xl font-bold mb-6 text-theme-black/80">
                            Securing your creative identity for a lifetime
                        </h2>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8 text-gray-700">
                            Protect your creative work | Nationwide Protection | Expert Assistance
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
                    <ServiceForm title="Copyright Registration" />
                </div>
            </div>

            {/* Carousel Content Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Benefits of Copyright</h2>
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
                            Got questions? We've got answers. Explore our common queries about Copyright Services.
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
                title="Copyright Registration Consultation"
            />
        </div>
    );
};

export default CopyrightServices;
