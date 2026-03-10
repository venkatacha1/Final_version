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

const IncomeTaxNotice = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Income Tax Notice Copy", icon: "fa-file-circle-exclamation" },
        { title: "Previous ITR Acknowledgement", icon: "fa-check-double" },
        { title: "Financial Statements", icon: "fa-building-columns" },
        { title: "Invoices / Proofs questioned", icon: "fa-magnifying-glass-dollar" },
        { title: "Bank Statements", icon: "fa-receipt" }
    ];

    const cards = [
        {
            title: "Quick Response",
            icon: "fa-bolt-lightning",
            desc: "Time is critical. We help you prepare and file professional responses within the statutory deadlines mentioned in the notice."
        },
        {
            title: "Expert Analysis",
            icon: "fa-microscope",
            desc: "In-depth review of the notice by our tax experts to understand the exact grounds and prepare a robust legal defence."
        },
        {
            title: "Data Reconciliation",
            icon: "fa-arrows-rotate",
            desc: "Fixing mismatches between your reported data and the information available with the Income Tax department (AIS/26AS)."
        },
        {
            title: "Assessment Handling",
            icon: "fa-gavel",
            desc: "Representing your case before tax authorities and handling all correspondence to ensure a fair assessment."
        },
        {
            title: "Rectification Filing",
            icon: "fa-file-pen",
            desc: "Filing rectification requests under section 154 for apparent mistakes in processing your income tax return."
        },
        {
            title: "Stress Minimization",
            icon: "fa-face-smile-beam",
            desc: "Take the stress out of tax notices with our end-to-end handling, ensuring you stay compliant without the headache."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "What should I do if I get a Tax Notice?",
            description: "First, stay calm and read the notice carefully for the section and reason. Contact a tax professional immediately to prepare a response.",
            icon: <i className="fa-solid fa-circle-info"></i>
        },
        {
            id: 2,
            title: "Is every notice a serious problem?",
            description: "Not necessarily. Many notices are for simple clarifications or mismatches (like 143(1)) that can be resolved easily.",
            icon: <i className="fa-solid fa-scale-balanced"></i>
        },
        {
            id: 3,
            title: "What happens if I ignore a notice?",
            description: "Ignoring a notice can lead to heavy penalties, higher tax liability, and potentially more serious tax investigations.",
            icon: <i className="fa-solid fa-triangle-exclamation"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/about/about-four-image1.jpg')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Income Tax Notice Compliance</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            143(1) Intimation | 139(9) Defective | 148 Reassessment Response
                        </p>
                        <div className="mb-4 sm:mb-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-1.5 bg-theme-primary text-[#1a2b1f] px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                <i className="fa-solid fa-video"></i> Connect with us
                            </button>
                        </div>
                        <h2 className="text-xl lg:text-3xl font-bold leading-relaxed">Expert Guidance to Resolve Your Tax Notices Correctly</h2>
                    </div>
                    <ServiceForm title="Income Tax Notice" />
                </div>
            </div>

            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Handling Tax Notices</h2>
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
                title="Income Tax Notice Compliance Consultation"
            />
        </div>
    );
};

export default IncomeTaxNotice;
