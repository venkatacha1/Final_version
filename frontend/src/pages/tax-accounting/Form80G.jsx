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

const Form80G = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Form 12A Registration", icon: "fa-certificate" },
        { title: "Trust Deed/Bye-laws", icon: "fa-file-contract" },
        { title: "PAN Card of Entity", icon: "fa-address-card" },
        { title: "3 Years Audit Reports", icon: "fa-file-invoice-dollar" },
        { title: "Activity Report", icon: "fa-clipboard-list" },
        { title: "NOC from Landlord", icon: "fa-house-circle-check" }
    ];

    const cards = [
        {
            title: "Donation Benefits",
            icon: "fa-gift",
            desc: "Donors can claim 50% or 100% deduction from their taxable income for contributions made to the 80G registered NGO."
        },
        {
            title: "Enhanced Funding",
            icon: "fa-money-bill-trend-up",
            desc: "Encourages corporate and individual donors to contribute more, knowing they will receive tax benefits."
        },
        {
            title: "CSR Eligibility",
            icon: "fa-handshake",
            desc: "A valid 80G registration is often a prerequisite for receiving Corporate Social Responsibility (CSR) funds."
        },
        {
            title: "Global Recognition",
            icon: "fa-earth-americas",
            desc: "Increases the NGO's transparency and trustworthiness in the eyes of international funding agencies."
        },
        {
            title: "Tax Exemption",
            icon: "fa-shield-heart",
            desc: "Further strengthens the организация's status as a charitable body dedicated to social welfare."
        },
        {
            title: "Growth Potential",
            icon: "fa-chart-line",
            desc: "Provides the necessary financial stability and growth opportunities by attracting larger donation pools."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "What is Form 80G registration?",
            description: "Form 80G registration allows donors to claim deductions on the amount donated to the registered NGO or trust.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "Is 12A mandatory for 80G?",
            description: "Yes, an NGO must first obtain a 12A registration before applying for 80G registration.",
            icon: <i className="fa-solid fa-check-to-slot"></i>
        },
        {
            id: 3,
            title: "Does 80G registration expire?",
            description: "Under the new rules, provisional registration is valid for 3 years, and final registration is valid for 5 years.",
            icon: <i className="fa-solid fa-hourglass-half"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/logo/1715359346-923.jpg.jpeg')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Form 80G Registration</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Tax-Deductible Donations | CSR Funding | NGOs | Charitable Trusts
                        </p>
                        <div className="mb-4 sm:mb-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-1.5 bg-theme-primary text-[#1a2b1f] px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                <i className="fa-solid fa-video"></i> Connect with us
                            </button>
                        </div>
                        <h2 className="text-xl lg:text-3xl font-bold leading-relaxed">Attract More Donations with 80G Status</h2>
                    </div>
                    <ServiceForm title="Form 80G Registration" />
                </div>
            </div>

            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Benefits of Form 80G Registration</h2>
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
                title="80G Registration Consultation"
            />
        </div>
    );
};

export default Form80G;
