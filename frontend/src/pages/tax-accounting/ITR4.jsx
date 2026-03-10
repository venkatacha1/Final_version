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

const ITR4 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Bank Statements", icon: "fa-building-columns" },
        { title: "Gross Receipts Detail", icon: "fa-receipt" },
        { title: "Aadhaar / PAN", icon: "fa-id-card" },
        { title: "Investment Proofs", icon: "fa-shield-heart" },
        { title: "Other Income Proofs", icon: "fa-wallet" }
    ];

    const cards = [
        {
            title: "Presumptive Income",
            icon: "fa-percentage",
            desc: "Declaration of income on a presumptive basis under sections 44AD, 44ADA, and 44AE without detailed books."
        },
        {
            title: "Professionals / Skills",
            icon: "fa-user-pen",
            desc: "Ideal for doctors, engineers, and freelancers opting for easy tax filing with 50% profit declaration."
        },
        {
            title: "Retailers / Small Biz",
            icon: "fa-shop",
            desc: "Perfect for small retailers and traders who want to avoid the headache of maintaining complex accounts."
        },
        {
            title: "Simpler Compliance",
            icon: "fa-feather",
            desc: "Reduced compliance burden as you don't need to maintain elaborate books of accounts or financial statements."
        },
        {
            title: "Up to 50 Lakhs",
            icon: "fa-money-bill-wave",
            desc: "Available for individuals, HUFs, and partnership firms having total income up to ₹50 Lakhs."
        },
        {
            title: "Fixed Profit Margin",
            icon: "fa-chart-simple",
            desc: "Pay tax based on a predefined percentage of your turnover, making tax planning predictable and easy."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "Who can file ITR-4 (Sugam)?",
            description: "Individuals, HUFs, and Partnership firms (excluding LLPs) having business or professional income under presumptive taxation and total income up to ₹50 Lakhs.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "What is Presumptive Taxation?",
            description: "A scheme that allows small taxpayers to declare a fixed percentage of their turnover as profit without maintaining books of accounts.",
            icon: <i className="fa-solid fa-calculator"></i>
        },
        {
            id: 3,
            title: "Can I file ITR-4 if I have loss?",
            description: "No, if you want to declare lower profits than the presumptive rate or show a loss, you must file ITR-3.",
            icon: <i className="fa-solid fa-circle-exclamation"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/case/case-image2.jpg')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Form ITR 4 (Sugam) Filing</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Presumptive Taxation | Small Business | Professional Freelancers
                        </p>
                        <div className="mb-4 sm:mb-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-1.5 bg-theme-primary text-[#1a2b1f] px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                <i className="fa-solid fa-video"></i> Connect with us
                            </button>
                        </div>
                        <h2 className="text-xl lg:text-3xl font-bold leading-relaxed">Easy & Hassle-Free Tax Filing for Small Taxpayers</h2>
                    </div>
                    <ServiceForm title="ITR-4 Filing" />
                </div>
            </div>

            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Understanding ITR-4</h2>
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
                title="ITR 4 (Sugam) Filing Consultation"
            />
        </div>
    );
};

export default ITR4;
