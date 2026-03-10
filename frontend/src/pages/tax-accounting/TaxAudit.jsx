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

const TaxAudit = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Books of Accounts", icon: "fa-book" },
        { title: "Bank Statements", icon: "fa-building-columns" },
        { title: "GST Returns (GSTR 1 & 3B)", icon: "fa-file-circle-check" },
        { title: "Fixed Asset Register", icon: "fa-list-ol" },
        { title: "Stock Register", icon: "fa-boxes-stacked" }
    ];

    const cards = [
        {
            title: "Mandatory Audit",
            icon: "fa-gavel",
            desc: "Requirement for businesses with turnover > ₹1 Crore and professionals with receipts > ₹50 Lakhs to get accounts audited."
        },
        {
            title: "Expert Verification",
            icon: "fa-user-check",
            desc: "Thorough verification of your financial statements by qualified Chartered Accountants to ensure accuracy."
        },
        {
            title: "Penalty Avoidance",
            icon: "fa-shield",
            desc: "Timely completion of tax audit helps in avoiding heavy penalties imposed for non-compliance with section 44AB."
        },
        {
            title: "Form 3CD Filing",
            icon: "fa-file-signature",
            desc: "Preparation and filing of detailed audit report in Form 3CD along with the main audit report."
        },
        {
            title: "Financial Accuracy",
            icon: "fa-chart-pie",
            desc: "Audits provide a true and fair view of your financial state, helping in better business decision making."
        },
        {
            title: "Legal Credibility",
            icon: "fa-award",
            desc: "An audited financial statement carries more weight with banks, investors, and the income tax department."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "What is a Tax Audit?",
            description: "A tax audit is an examination of an organization's or individual's tax returns to verify the information is correct and the taxpayer is paying the correct amount of tax.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "What is the turnover limit for Tax Audit?",
            description: "Generally ₹1 Crore for businesses. However, if cash receipts/payments are < 5%, the limit is increased to ₹10 Crores.",
            icon: <i className="fa-solid fa-coins"></i>
        },
        {
            id: 3,
            title: "What is the penalty for not filing Tax Audit?",
            description: "The penalty is 0.5% of turnover or ₹1,50,000, whichever is lower.",
            icon: <i className="fa-solid fa-triangle-exclamation"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/about/about-image1.jpg')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Tax Audit (Section 44AB)</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Statutory Audit | 44AB Compliance | Financial Verification
                        </p>
                        <div className="mb-4 sm:mb-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-1.5 bg-theme-primary text-[#1a2b1f] px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                <i className="fa-solid fa-video"></i> Connect with us
                            </button>
                        </div>
                        <h2 className="text-xl lg:text-3xl font-bold leading-relaxed">Ensure Your Business Compliance with Professional Auditing</h2>
                    </div>
                    <ServiceForm title="Tax Audit Registration" />
                </div>
            </div>

            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Understanding Tax Audit</h2>
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
                title="Tax Audit Compliance Consultation"
            />
        </div>
    );
};

export default TaxAudit;
