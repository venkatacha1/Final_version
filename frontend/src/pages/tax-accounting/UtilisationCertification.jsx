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

const UtilisationCertificate = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Grant Sanction Letter", icon: "fa-file-signature" },
        { title: "Expenditure Vouchers", icon: "fa-receipt" },
        { title: "Bank Statements", icon: "fa-building-columns" },
        { title: "Project Progress Report", icon: "fa-chart-line" },
        { title: "Invoices & Payment Proofs", icon: "fa-file-invoice" }
    ];

    const cards = [
        {
            title: "Fund Verification",
            icon: "fa-magnifying-glass-dollar",
            desc: "Thorough verification of how the granted funds were allocated and spent according to the sanction terms."
        },
        {
            title: "Expenditure Audit",
            icon: "fa-calculator",
            desc: "Auditing all expense vouchers and invoices to ensure they match the project's objectives."
        },
        {
            title: "Statutory Reporting",
            icon: "fa-file-shield",
            desc: "Preparing the Utilisation Certificate (UC) in the prescribed format required by the granting authority."
        },
        {
            title: "CA Certification",
            icon: "fa-user-check",
            desc: "Formal certification by a practicing Chartered Accountant, verifying the accuracy of the fund usage."
        },
        {
            title: "Compliance Check",
            icon: "fa-clipboard-list",
            desc: "Ensuring all conditions mention in the grant agreement have been fulfilled by the organization."
        },
        {
            title: "Timely Submission",
            icon: "fa-clock",
            desc: "Helping you meet the deadlines for UC submission to avoid withholding of future grant installments."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "What is a Utilisation Certificate (UC)?",
            description: "A UC is a document issued to ensure that the grant -in-aid was utilized for the purpose for which it was sanctioned.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "Who can issue a Utilisation Certificate?",
            description: "For most government and private grants, a UC must be certified and signed by a practicing Chartered Accountant.",
            icon: <i className="fa-solid fa-user-tie"></i>
        },
        {
            id: 3,
            title: "What is the standard format for UC?",
            description: "The format varies by authority (e.g., GFR 12-A for central govt grants), but generally includes details of funds received and spent.",
            icon: <i className="fa-solid fa-file-lines"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/logo/makerspace-new-2-selected.jpeg')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Utilisation Certification (UC) Services</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Grant Compliance | CA Certification | Expenditure Audit | GFR 12-A
                        </p>
                        <div className="mb-4 sm:mb-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-1.5 bg-theme-primary text-[#1a2b1f] px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                <i className="fa-solid fa-video"></i> Connect with us
                            </button>
                        </div>
                        <h2 className="text-xl lg:text-3xl font-bold leading-relaxed">Expert Certification for Transparent and Compliant Fund Utilisation</h2>
                    </div>
                    <ServiceForm title="Utilisation Certification" />
                </div>
            </div>

            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Utilisation Certification Process</h2>
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
                title="Utilisation Certificate Consultation"
            />
        </div>
    );
};

export default UtilisationCertificate;
