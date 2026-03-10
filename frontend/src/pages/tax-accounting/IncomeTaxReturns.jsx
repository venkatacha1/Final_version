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

const IncomeTaxReturns = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "PAN & Aadhaar Card", icon: "fa-id-card" },
        { title: "Form 16 / Form 26AS", icon: "fa-file-invoice" },
        { title: "Bank Statements", icon: "fa-building-columns" },
        { title: "Investment Records (80C, 80D)", icon: "fa-shield-halved" },
        { title: "Rent / Interest Certificates", icon: "fa-file-invoice" }
    ];

    const cards = [
        {
            title: "Expert Consultation",
            icon: "fa-user-tie",
            desc: "Personalized advice from tax experts to help you choose the correct ITR form and maximize your deductions."
        },
        {
            title: "Accurate Tax Calc",
            icon: "fa-calculator",
            desc: "Precise calculation of your total income and tax liability to ensure zero errors and avoid future notices."
        },
        {
            title: "Timely E-Filing",
            icon: "fa-laptop",
            desc: "Secure and prompt electronic filing of your returns well before the due dates to avoid late filing fees."
        },
        {
            title: "Refund Management",
            icon: "fa-hand-holding-dollar",
            desc: "Helping you claim the maximum possible tax refunds and tracking the status until it's credited to your bank."
        },
        {
            title: "Year-Round Support",
            icon: "fa-headset",
            desc: "Continuous support throughout the year for any tax-related queries or processing status updates."
        },
        {
            title: "Data Security",
            icon: "fa-vault",
            desc: "Your financial data is handled with the highest level of confidentiality and stored in encrypted environments."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "Why should I file an Income Tax Return?",
            description: "ITR is mandatory for specified income levels and essential for loans, visa processing, and carrying forward losses.",
            icon: <i className="fa-solid fa-file-circle-check"></i>
        },
        {
            id: 2,
            title: "What is the penalty for late filing?",
            description: "A fee of up to ₹5,000 can be levied for late filing beyond the due date. Reduced fee of ₹1,000 for income < ₹5 Lakhs.",
            icon: <i className="fa-solid fa-triangle-exclamation"></i>
        },
        {
            id: 3,
            title: "How many years can I file ITR for?",
            description: "Generally, you can only file for the current assessment year. However, updated returns (u/s 139(8A)) allow filing for past 2 years.",
            icon: <i className="fa-solid fa-clock-rotate-left"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/bg/page-title-bg.jpg')" }}
            >
                <div className="absolute inset-0 bg-white/80"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Professional Income Tax Filing</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Salaried | Business | Professional | NRI | Trust Returns
                        </p>
                        <div className="mb-4 sm:mb-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-1.5 bg-theme-primary text-[#1a2b1f] px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                <i className="fa-solid fa-video"></i> Connect with us
                            </button>
                        </div>
                        <h2 className="text-xl lg:text-3xl font-bold leading-relaxed">Smart Tax Filing Solutions for Individuals & Entities</h2>
                    </div>
                    <ServiceForm title="Income Tax Returns" />
                </div>
            </div>

            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Tax Return Solutions</h2>
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
                title="Income Tax Return Filing Consultation"
            />
        </div>
    );
};

export default IncomeTaxReturns;
