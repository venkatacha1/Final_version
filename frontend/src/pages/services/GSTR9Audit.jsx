import React, { useEffect, useState } from 'react';
import ServiceForm from '../../components/ServiceForm';
import Carousel from '../../components/Carousel';
import ProcessFlow from '../../components/ProcessFlow';
import DocumentsRequired from '../../components/DocumentsRequired';
import ConsultModal from '../../components/ConsultModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const GSTR9Audit = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Financial Statements (Balance Sheet & P&L)", icon: "fa-file-invoice-dollar" },
        { title: "GSTR-1 & GSTR-3B Annual Summary", icon: "fa-clipboard-list" },
        { title: "Input Tax Credit (ITC) Register", icon: "fa-list-check" },
        { title: "Sales & Purchase Invoices", icon: "fa-receipt" },
        { title: "E-Way Bill Reports", icon: "fa-truck-fast" }
    ];

    const cards = [
        {
            title: "GSTR-9 Overview",
            icon: "fa-file-signature",
            desc: "GSTR-9 is an annual return to be filed by all regular taxpayers registered under GST. It consolidates the details of outward and inward supplies made during the financial year."
        },
        {
            title: "GSTR-9C (Reconciliation)",
            icon: "fa-scale-balanced",
            desc: "GSTR-9C is a reconciliation statement between the GSTR-9 and the audited financial statements, required for taxpayers with turnover exceeding the prescribed threshold."
        },
        {
            title: "ITC Reconciliation",
            icon: "fa-check-double",
            desc: "Crucial for identifying mismatches between claimed Input Tax Credit and GSTR-2A/2B data, ensuring you don't lose out on eligible credits or pay excess tax."
        },
        {
            title: "Strict Deadlines",
            icon: "fa-calendar-days",
            desc: "The due date for filing GSTR-9 & 9C is typically 31st December of the following financial year. Late filing attracts penalties."
        },
        {
            title: "Penalty Protection",
            icon: "fa-shield-halved",
            desc: "Correct filing minimizes the risk of demand notices and penalties for incorrect ITC claims or undeclared liability."
        },
        {
            title: "Professional Review",
            icon: "fa-user-tie",
            desc: "Our experts review your entire year's data to ensure 100% compliance and accuracy before submission to the GST portal."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "What is GSTR-9?",
            description: "GSTR-9 is the annual return that compiles all GST data (Sales, Purchases, ITC, Tax Paid) for the entire financial year.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "Who needs to file GSTR-9?",
            description: "All GST registered taxpayers under the regular scheme must file GSTR-9. Composition dealers file GSTR-9A/4.",
            icon: <i className="fa-solid fa-users"></i>
        },
        {
            id: 3,
            title: "What is GSTR-9C audit?",
            description: "It is a reconciliation statement certified by a CA/CMA, applicable if your annual turnover exceeds the specified limit (e.g., ₹5 Cr).",
            icon: <i className="fa-solid fa-calculator"></i>
        },
        {
            id: 4,
            title: "Can I revise GSTR-9 after filing?",
            description: "No, once GSTR-9 is filed, it cannot be revised. Hence, it is critical to ensure accuracy before submission.",
            icon: <i className="fa-solid fa-lock"></i>
        },
        {
            id: 5,
            title: "What is the late fee for delay?",
            description: "Late fees can vary but are generally levied per day of delay, subject to a maximum cap calculated on turnover.",
            icon: <i className="fa-solid fa-money-bill-wave"></i>
        }
    ];

    const auditSteps = [
        {
            title: "Submit annual data",
            description: "Provide your GSTR-1, 3B summaries and financial statements for the entire year.",
            image: "/images/resource/mailbox_3d_new.png",
            alt: "Submit data"
        },
        {
            title: "Reconciliation review",
            description: "Our experts reconcile your GST filings with books of accounts and identify mismatches.",
            image: "/images/resource/expert_3d_new.png",
            alt: "Reconciliation"
        },
        {
            title: "Draft GSTR-9 report",
            description: "We prepare the consolidated annual return and reconciliation statement (GSTR-9C) for your review.",
            image: "/images/resource/solutions_3d_new.png",
            alt: "Portal preparation"
        },
        {
            title: "Final submission",
            description: "Upon approval, we file the returns on the GST portal and share the filing confirmation.",
            image: "/images/resource/completion_3d_new.png",
            alt: "Submission successful"
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            {/* Hero Section */}
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/logo/gst-audit.png')" }}
            >
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-white/70"></div>

                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    {/* Left Content */}
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">GSTR-9 & Audit Filing</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Expert assisted Filing | Audit Support | 100% Compliance
                        </p>

                        <div className="mb-4 sm:mb-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-1.5 bg-theme-primary text-[#1a2b1f] px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                <i className="fa-solid fa-video"></i>
                                Connect with us
                            </button>
                        </div>

                        <h2 className="text-xl lg:text-3xl font-bold leading-relaxed">
                            Complete your Annual GST Compliance with Ease
                        </h2>
                    </div>

                    {/* Right Content - Reusable Form Component */}
                    <ServiceForm title="GSTR-9 & Audit" />
                </div>
            </div>

            {/* Carousel Content Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why GSTR-9 Filing?</h2>
                        <div className="w-24 h-1 bg-theme-primary mx-auto"></div>
                    </div>

                    <Swiper
                        modules={[Pagination, Autoplay, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-16 proprietorship-swiper"
                    >
                        {cards.map((card, index) => (
                            <SwiperSlide key={index}>
                                <div className="p-10 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center">
                                    <div className="w-20 h-20 bg-theme-primary/10 rounded-full flex items-center justify-center mb-4 sm:mb-8">
                                        <i className={`fa-solid ${card.icon} text-4xl text-theme-black`}></i>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-5">{card.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        {card.desc}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* Documents Required Section */}
            <DocumentsRequired documents={documents} />

            {/* Process Flow Section */}
            <ProcessFlow steps={auditSteps} title="GSTR-9 & Audit Filing Process" />

            {/* FAQ Carousel Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Got questions? We've got answers. Explore common queries about GSTR-9 Audit.
                        </p>
                        <div className="w-24 h-1 bg-theme-primary mx-auto mt-6"></div>
                    </div>

                    <Carousel items={faqs} autoplay={true} />
                </div>
            </section>

            {/* WhatsApp Floating Button */}
            

            <ConsultModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="GSTR-9 & Audit Consultation"
            />
        </div>
    );
};

export default GSTR9Audit;
