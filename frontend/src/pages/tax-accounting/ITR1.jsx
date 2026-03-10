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

const ITR1 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Form 16", icon: "fa-file-invoice" },
        { title: "Aadhaar Card", icon: "fa-id-card" },
        { title: "PAN Card", icon: "fa-address-card" },
        { title: "Bank Statements", icon: "fa-building-columns" },
        { title: "Investment Proofs (80C, 80D)", icon: "fa-shield-heart" }
    ];

    const cards = [
        {
            title: "Salaried Individuals",
            icon: "fa-user-tie",
            desc: "Ideal for individuals having income from salary or pension, ensuring accurate reporting and timely tax filing."
        },
        {
            title: "Single House Property",
            icon: "fa-house",
            desc: "Supports income from a single house property, helping you claim relevant deductions and interest benefits."
        },
        {
            title: "Interest Income",
            icon: "fa-chart-line",
            desc: "Easily report income from other sources like bank interest, fixed deposits, and other savings instruments."
        },
        {
            title: "Up to 50 Lakhs",
            icon: "fa-sack-dollar",
            desc: "Designed for individuals with total income up to ₹50 Lakhs, providing a simplified filing process."
        },
        {
            title: "Tax Refunds",
            icon: "fa-hand-holding-dollar",
            desc: "Accurate filing helps in claiming rightful tax refunds and ensuring no excess tax is paid to the government."
        },
        {
            title: "Compliance Peace",
            icon: "fa-check-double",
            desc: "Stay compliant with income tax laws and avoid penalties by filing your Sahaj ITR-1 form with expert help."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "Who should file ITR-1?",
            description: "ITR-1 (Sahaj) is for individuals having income from salary, one house property, and other sources (interest etc.) with total income up to ₹50 Lakhs.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "What is Form 16?",
            description: "Form 16 is a certificate issued by your employer detailing the salary paid and the tax deducted (TDS) during the financial year.",
            icon: <i className="fa-solid fa-file-invoice"></i>
        },
        {
            id: 3,
            title: "Can I file ITR-1 if I have capital gains?",
            description: "No, if you have income from capital gains (sale of shares, property etc.), you must file ITR-2 or ITR-3 instead.",
            icon: <i className="fa-solid fa-circle-xmark"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/case/case-image4.jpg')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Form ITR 1 (Sahaj) Filing</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Salary Income | Pensioners | Interest Income | Up to 50 Lakhs
                        </p>
                        <div className="mb-4 sm:mb-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-1.5 bg-theme-primary text-[#1a2b1f] px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                <i className="fa-solid fa-video"></i> Connect with us
                            </button>
                        </div>
                        <h2 className="text-xl lg:text-3xl font-bold leading-relaxed">Fast & Secure Income Tax Filing</h2>
                    </div>
                    <ServiceForm title="ITR-1 Filing" />
                </div>
            </div>

            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Understanding ITR-1</h2>
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
                title="ITR 1 (Sahaj) Filing Consultation"
            />
        </div>
    );
};

export default ITR1;
