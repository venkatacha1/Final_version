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

const GstRegistration = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "PAN of applicant/business", icon: "fa-id-card" },
        { title: "Aadhaar of promoter/authorised signatory", icon: "fa-fingerprint" },
        { title: "Passport size photograph", icon: "fa-camera" },
        { title: "Business address proof (electricity bill/lease)", icon: "fa-location-dot" },
        { title: "Bank proof (cancelled cheque/statement)", icon: "fa-building-columns" },
        { title: "Authorization letter / Board resolution", icon: "fa-file-signature" },
        { title: "Digital Signature Certificate (for company/LLP)", icon: "fa-key" }
    ];

    const cards = [
        {
            title: "Who must register",
            icon: "fa-user-check",
            desc: "Businesses crossing the turnover threshold, interstate suppliers, e-commerce vendors, and those requiring mandatory registration must obtain a GSTIN."
        },
        {
            title: "Composition Scheme",
            icon: "fa-scale-balanced",
            desc: "Small taxpayers with eligible turnover can pay tax at a lower rate and file simplified quarterly returns to reduce compliance burden."
        },
        {
            title: "Voluntary Registration",
            icon: "fa-handshake",
            desc: "Even below the threshold, voluntary registration enables input tax credit claims and boosts credibility with vendors and customers."
        },
        {
            title: "Faster Turnaround",
            icon: "fa-clock-rotate-left",
            desc: "With accurate documents, GST registration is typically completed within 3-7 working days after ARN generation."
        },
        {
            title: "Post-Approval Access",
            icon: "fa-file-invoice",
            desc: "You receive a GSTIN and login credentials to file periodic returns, manage invoices, and stay compliant."
        },
        {
            title: "Avoid Penalties",
            icon: "fa-triangle-exclamation",
            desc: "Operating without a GST number when liable can attract penalties and demand notices. Timely registration prevents legal exposure."
        }
    ];

    const gstSteps = [
        {
            title: "Share your business details",
            description: "Submit basic business info and turnover so we can identify the right GST category for you.",
            image: "/images/resource/mailbox_3d_new.png",
            alt: "Submit details"
        },
        {
            title: "Document review & DSC setup",
            description: "We verify KYC, prepare authorisations, and arrange e-sign/DSC where required for companies and LLPs.",
            image: "/images/resource/expert_3d_new.png",
            alt: "Document review"
        },
        {
            title: "File GST application & get ARN",
            description: "Our experts file your REG-01 application, respond to queries, and share the generated ARN for tracking.",
            image: "/images/resource/solutions_3d_new.png",
            alt: "Application filing"
        },
        {
            title: "Receive GSTIN & certificate",
            description: "We obtain the approval order, download the GST certificate, and guide you on portal login and return due dates.",
            image: "/images/resource/completion_3d_new.png",
            alt: "GSTIN issued"
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "Who needs GST registration?",
            description: "Any business crossing the prescribed turnover limit, doing interstate supply, e‑commerce sales, or operating under reverse charge notifications must register.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "How long does it take to get a GSTIN?",
            description: "Usually 3-7 working days after ARN generation, provided all documents are correct and no clarifications are raised.",
            icon: <i className="fa-solid fa-clock"></i>
        },
        {
            id: 3,
            title: "Can I register voluntarily below the threshold?",
            description: "Yes. Voluntary registrants can claim input tax credit and show customers a valid GSTIN, improving credibility.",
            icon: <i className="fa-solid fa-handshake"></i>
        },
        {
            id: 4,
            title: "What is the Composition Scheme?",
            description: "A concessional tax scheme for small taxpayers with restricted turnover, offering lower tax rates and quarterly filings but without input credit.",
            icon: <i className="fa-solid fa-scale-balanced"></i>
        },
        {
            id: 5,
            title: "Do I need a Digital Signature?",
            description: "Companies and LLPs must use a Class 3 DSC. Proprietors and partnerships can e-sign using Aadhaar OTP.",
            icon: <i className="fa-solid fa-key"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            {/* Hero Section */}
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/logo/gst-registration.png')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>

                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Get GST Registration</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Free expert consultation | ARN in days | 12,000+ GSTINs issued
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
                            Register across India with zero hassle
                        </h2>
                    </div>

                    <ServiceForm title="GST Registration" />
                </div>
            </div>

            {/* Carousel Content Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Understanding GST Registration</h2>
                        <div className="w-24 h-1 bg-theme-primary mx-auto"></div>
                    </div>

                    <Swiper
                        modules={[Pagination, Autoplay, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{ delay: 3200, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-16 gst-swiper"
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
            <ProcessFlow steps={gstSteps} title="Our Process Flow" />

            {/* FAQ Carousel Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Got questions? We've got answers. Explore our common queries about GST registration.
                        </p>
                        <div className="w-24 h-1 bg-theme-primary mx-auto mt-6"></div>
                    </div>

                    <Carousel items={faqs} autoplay={true} />
                </div>
            </section>

            

            <ConsultModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="GST Registration Consultation"
            />
        </div>
    );
};

export default GstRegistration;
