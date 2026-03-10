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

const CompanyClosure = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Board Resolution for Closure", icon: "fa-certificate" },
        { title: "Indemnity Bond (Form STK-3)", icon: "fa-shield-halved" },
        { title: "Affidavit (Form STK-4)", icon: "fa-gavel" },
        { title: "Statement of Assets & Liabilities", icon: "fa-file-invoice-dollar" },
        { title: "Latest ITR & CTC Proofs", icon: "fa-receipt" }
    ];

    const cards = [
        {
            title: "Board Approval",
            icon: "fa-users-gear",
            desc: "Convening a board meeting to approve the proposal for striking off the company name from ROC registers."
        },
        {
            title: "Liability Settlement",
            icon: "fa-file-signature",
            desc: "Ensuring all outstanding debts and statutory liabilities of the company are completely settled before filing."
        },
        {
            title: "NOC from Authorities",
            icon: "fa-stamp",
            desc: "Obtaining No Objection Certificates from various tax and regulatory authorities if applicable."
        },
        {
            title: "Form STK-2 Filing",
            icon: "fa-file-arrow-up",
            desc: "Filing the application for removal of company name (Fast Track Exit) with the Registrar of Companies."
        },
        {
            title: "Public Notice",
            icon: "fa-bullhorn",
            desc: "The ROC issues a public notice regarding the proposed closure to invite objections if any."
        },
        {
            title: "Dissolution Order",
            icon: "fa-file-circle-check",
            desc: "Final striking off the name by ROC and publication of dissolution notice in the Official Gazette."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "What is Company Closure (STK-2)?",
            description: "It is a process where a company that is not carrying out any business can apply to the ROC to remove its name from the Register of Companies.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "When can a company apply for closure?",
            description: "A company can apply if it has failed to commence business within one year of incorporation or hasn't carried out business for two preceding financial years.",
            icon: <i className="fa-solid fa-business-time"></i>
        },
        {
            id: 3,
            title: "How long does it take for the company to be officially closed?",
            description: "The process usually takes 3-6 months from the date of filing Form STK-2, depending on ROC processing and public notice periods.",
            icon: <i className="fa-solid fa-calendar-check"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/logo/images (6).jpg')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Company Closure Services (STK-2)</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Fast Track Exit | ROC Striking Off | Liability Settlement | STK-2 Filing
                        </p>
                        <div className="mb-4 sm:mb-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-1.5 bg-theme-primary text-[#1a2b1f] px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                <i className="fa-solid fa-video"></i> Connect with us
                            </button>
                        </div>
                        <h2 className="text-xl lg:text-3xl font-bold leading-relaxed">Systematic and Legal Winding Up of Your Company with Zero Compliance Lag</h2>
                    </div>
                    <ServiceForm title="Company Closure (STK-2)" showCompanyTypeField={true} />
                </div>
            </div>

            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Company Closure Process</h2>
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
                title="Company Closure Consultation"
            />
        </div>
    );
};

export default CompanyClosure;
