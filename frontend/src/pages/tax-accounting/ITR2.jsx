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

const ITR2 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Form 16 / Form 16A", icon: "fa-file-invoice" },
        { title: "Capital Gains Statements", icon: "fa-chart-pie" },
        { title: "Foreign Income Proofs", icon: "fa-earth-americas" },
        { title: "Agriculture Income Proofs", icon: "fa-wheat-awn" },
        { title: "Bank Statements", icon: "fa-building-columns" }
    ];

    const cards = [
        {
            title: "Capital Gains",
            icon: "fa-arrow-up-right-dots",
            desc: "For individuals having income from sale of shares, mutual funds, or immovable property."
        },
        {
            title: "Foreign Assets",
            icon: "fa-globe",
            desc: "Mandatory for residents having foreign assets or earning income from sources outside India."
        },
        {
            title: "Multiple Properties",
            icon: "fa-house",
            desc: "If you own more than one house property, ITR-2 is the correct form to report your income."
        },
        {
            title: "HUF Filing",
            icon: "fa-users",
            desc: "Suitable for Hindu Undivided Families (HUF) not having income from business or profession."
        },
        {
            title: "Director Status",
            icon: "fa-user-tie",
            desc: "Individuals serving as Directors in any company must file their returns using ITR-2."
        },
        {
            title: "High Value Income",
            icon: "fa-money-bill-wave",
            desc: "For individuals with total income exceeding ₹50 Lakhs who don't have business income."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "Who needs to file ITR-2?",
            description: "ITR-2 is for individuals and HUFs who do not have income from business or profession but have income from capital gains, foreign assets, or total income > ₹50 Lakhs.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "Is ITR-2 mandatory for NRIs?",
            description: "NRIs generally file ITR-2 if they have income in India from capital gains, house property, or sources other than business.",
            icon: <i className="fa-solid fa-passport"></i>
        },
        {
            id: 3,
            title: "What about unlisted shares?",
            description: "If you hold investment in unlisted equity shares at any time during the financial year, you must file ITR-2.",
            icon: <i className="fa-solid fa-list-check"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/case/case-image1.jpg')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">ITR 2 Filing (Directors / HUF)</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Capital Gains | Foreign Assets | Multiple Properties | HUFs
                        </p>
                        <div className="mb-4 sm:mb-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-1.5 bg-theme-primary text-[#1a2b1f] px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                <i className="fa-solid fa-video"></i> Connect with us
                            </button>
                        </div>
                        <h2 className="text-xl lg:text-3xl font-bold leading-relaxed">Expert Assistance for Complex Tax Filings</h2>
                    </div>
                    <ServiceForm title="ITR-2 Filing" />
                </div>
            </div>

            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Understanding ITR-2</h2>
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
                title="ITR 2 Filing Consultation"
            />
        </div>
    );
};

export default ITR2;
