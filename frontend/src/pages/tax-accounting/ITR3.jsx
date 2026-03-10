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

const ITR3 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Balance Sheet & P&L", icon: "fa-file-invoice-dollar" },
        { title: "Bank Statements", icon: "fa-building-columns" },
        { title: "GST Returns (if any)", icon: "fa-file-invoice" },
        { title: "Investment Proofs", icon: "fa-shield-halved" },
        { title: "Income Source Proofs", icon: "fa-wallet" }
    ];

    const cards = [
        {
            title: "Proprietorship Income",
            icon: "fa-user-gear",
            desc: "For individuals running a business or profession as a sole proprietor, ensuring all expenses are claimed correctly."
        },
        {
            title: "Professional Earnings",
            icon: "fa-briefcase",
            desc: "Ideal for freelancers, doctors, lawyers, and other professionals earning through their specific skills."
        },
        {
            title: "Partner in Firm",
            icon: "fa-handshake",
            desc: "If you are a partner in a partnership firm or LLP, ITR-3 is used to report your share of profit and remuneration."
        },
        {
            title: "Audit Cases",
            icon: "fa-clipboard-check",
            desc: "Suitable for businesses that require a tax audit under section 44AB due to high turnover."
        },
        {
            title: "Comprehensive Reporting",
            icon: "fa-list-check",
            desc: "Allows detailed reporting of all business assets, liabilities, and various sources of income in one form."
        },
        {
            title: "Maximize Deductions",
            icon: "fa-calculator",
            desc: "Expert filing helps identify all eligible business deductions to minimize your overall tax liability."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "Who should file ITR-3?",
            description: "ITR-3 is for individuals and HUFs having income from profits and gains of business or profession, including partners in firms.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "Difference between ITR-3 and ITR-4?",
            description: "ITR-4 is for presumptive taxation (limitations apply), while ITR-3 is used when you want to report actual business profits and losses.",
            icon: <i className="fa-solid fa-arrows-left-right"></i>
        },
        {
            id: 3,
            title: "Is book-keeping mandatory for ITR-3?",
            description: "Yes, maintaining systematic books of accounts is generally required for filing ITR-3 efficiently.",
            icon: <i className="fa-solid fa-book"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/case/case-three-image2.jpg')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Form ITR 3 (Proprietor / Other)</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Business Income | Professionals | Partners in Firm | High Turnover
                        </p>
                        <div className="mb-4 sm:mb-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-1.5 bg-theme-primary text-[#1a2b1f] px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                <i className="fa-solid fa-video"></i> Connect with us
                            </button>
                        </div>
                        <h2 className="text-xl lg:text-3xl font-bold leading-relaxed">Comprehensive Tax Solutions for Business Owners</h2>
                    </div>
                    <ServiceForm title="ITR-3 Filing" />
                </div>
            </div>

            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Understanding ITR-3</h2>
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
                title="ITR 3 Filing Consultation"
            />
        </div>
    );
};

export default ITR3;
