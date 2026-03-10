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

const ProfessionalConsultationTax = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Previous Year ITRs", icon: "fa-file-invoice" },
        { title: "Financial Statements", icon: "fa-calculator" },
        { title: "PAN & Aadhaar", icon: "fa-id-card" },
        { title: "Bank Statements", icon: "fa-building-columns" },
        { title: "Investment Records", icon: "fa-chart-pie" }
    ];

    const cards = [
        {
            title: "Tax Planning",
            icon: "fa-money-bill-trend-up",
            desc: "Expert strategies to minimize your tax liability while remaining fully compliant with the latest tax laws and regulations."
        },
        {
            title: "Audit Support",
            icon: "fa-magnifying-glass-dollar",
            desc: "Professional guidance and representation during tax audits, ensuring all your financial records are in order and interests protected."
        },
        {
            title: "Corporate Taxation",
            icon: "fa-building-shield",
            desc: "Comprehensive tax advisory services for businesses, including GST compliance, corporate tax filing, and structural optimization."
        },
        {
            title: "Wealth Management",
            icon: "fa-coins",
            desc: "Integrated financial planning and tax-efficient investment strategies to help you grow and preserve your wealth."
        },
        {
            title: "International Tax",
            icon: "fa-earth-americas",
            desc: "Specialized advice on cross-border tax issues, double taxation relief, and NRI tax compliance for global citizens."
        },
        {
            title: "Regulatory Advisory",
            icon: "fa-scale-balanced",
            desc: "Stay ahead of regulatory changes with our ongoing advisory services on Income Tax, GST, and other local tax laws."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "What is the benefit of a tax consultation?",
            description: "A professional tax consultation helps identify legal ways to save on taxes, ensures compliance, and prepares you for future financial goals.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "How often should I have an IP audit?",
            description: "An annual tax review is recommended to adapt to changing financial situations and tax law updates.",
            icon: <i className="fa-solid fa-calendar-check"></i>
        },
        {
            id: 3,
            title: "Can you help with tax notice responses?",
            description: "Yes, our experts specialize in analyzing tax notices and drafting precise, legally sound responses to the tax authorities.",
            icon: <i className="fa-solid fa-envelope-open-text"></i>
        },
        {
            id: 4,
            title: "Is consultation available for NRIs?",
            description: "Definitely. We provide specialized tax planning and compliance services specifically tailored for Non-Resident Indians.",
            icon: <i className="fa-solid fa-passport"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            {/* Hero Section */}
            <div
                className="relative min-h-[600px] h-auto lg:h-[750px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/logo/Gemini_Generated_Image_c6ml21c6ml21c6ml.png')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Professional Consultation</h1>
                        <h2 className="text-xl lg:text-3xl font-bold mb-6 text-theme-black/80">
                            Tax & Accounting experts at your service
                        </h2>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Tax Planning | Audit Support | Compliance | Expert Advisory
                        </p>
                        <div className="mb-4 sm:mb-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-1.5 bg-theme-primary text-[#1a2b1f] px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                <i className="fa-solid fa-video"></i> Connect with us
                            </button>
                        </div>
                    </div>
                    <ServiceForm title="Professional Consultation (Tax)" />
                </div>
            </div>

            {/* Why Consultation Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Tax Consultation?</h2>
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

            {/* FAQ Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Tax & Accounting FAQs</h2>
                        <div className="w-24 h-1 bg-theme-primary mx-auto mt-6"></div>
                    </div>
                    <Carousel items={faqs} autoplay={true} />
                </div>
            </section>

            {/* WhatsApp Floating Button */}
            

            <ConsultModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Tax & Accounting Consultation"
            />
        </div>
    );
};

export default ProfessionalConsultationTax;
