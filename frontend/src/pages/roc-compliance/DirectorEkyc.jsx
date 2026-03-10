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

const DirectorEkyc = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "PAN Card of Director", icon: "fa-id-card" },
        { title: "Aadhaar Card", icon: "fa-address-card" },
        { title: "Personal Mobile Number", icon: "fa-mobile-screen" },
        { title: "Personal Email ID", icon: "fa-envelope-open-text" },
        { title: "Director Identification Number (DIN)", icon: "fa-hashtag" }
    ];

    const cards = [
        {
            title: "What is DIR-3 KYC?",
            icon: "fa-fingerprint",
            desc: "It is an annual verification process for every individual who holds a Director Identification Number (DIN), ensuring the registry has updated contact details."
        },
        {
            title: "Mandatory for All",
            icon: "fa-circle-check",
            desc: "Every person allotted a DIN must file DIR-3 KYC every year, even if they are NOT a director in any company at the moment."
        },
        {
            title: "Verification Method",
            icon: "fa-shield-halved",
            desc: "Verification is done via mobile and email OTP. For the first-time filing or if details change, a video verification may also be required."
        },
        {
            title: "Maintain Active DIN",
            icon: "fa-user-check",
            desc: "Filing KYC ensures your DIN remains 'Approved'. A deactivated DIN prevents you from being appointed or resigning from any company."
        },
        {
            title: "Strict Deadlines",
            icon: "fa-calendar-days",
            desc: "The annual filing deadline is typically September 30th. Missing this deadline leads to immediate deactivation of DIN."
        },
        {
            title: "Avoid Heavy Penalties",
            icon: "fa-money-bill-wave",
            desc: "Filing after the due date incurs a heavy penalty of ₹5,000 for each director. We help you stay ahead of the schedule."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "Who needs to file DIR-3 KYC?",
            description: "Any individual who has been allotted a DIN and whose DIN status is 'Approved' is required to file the KYC annually.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "What is the consequence of not filing?",
            description: "If not filed by the due date, the DIN will be deactivated and marked as 'Deactivated due to non-filing of DIR-3 KYC'.",
            icon: <i className="fa-solid fa-triangle-exclamation"></i>
        },
        {
            id: 3,
            title: "Can I file KYC if I don't have a DSC?",
            description: "For the web-based KYC (if no changes from last year), DSC is not required. For form-based KYC (first time or changes), a valid DSC is mandatory.",
            icon: <i className="fa-solid fa-key"></i>
        },
        {
            id: 4,
            title: "What is the government fee?",
            description: "There is no government fee if filed before the due date. A penalty of ₹5,000 applies for late filings.",
            icon: <i className="fa-solid fa-receipt"></i>
        },
        {
            id: 5,
            title: "What if my mobile/email changes?",
            description: "If your contact details change, you must file the DIR-3 KYC e-form (not the web service) to update the registry's records.",
            icon: <i className="fa-solid fa-arrows-rotate"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            {/* Hero Section */}
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-center flex items-center"
                style={{ backgroundImage: "url('/images/logo/hands-ceo-construction-company-black-suit-typing-message-via-e-mail-partners-laptop-with-drawings-seal-stamp-divider-table-min.jpg')" }}
            >
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-white/70"></div>

                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    {/* Left Content */}
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Director KYC (DIR-3 KYC) Online</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Annual DIN Verification | Avoid ₹5,000 Penalty | Fast OTP-Based Filing
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
                            Securing your executive status with annual registration
                        </h2>
                    </div>

                    {/* Right Content - Reusable Form Component */}
                    <ServiceForm title="Director KYC (DIR-3)" />
                </div>
            </div>

            {/* Carousel Content Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Understanding Director KYC</h2>
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

            <DocumentsRequired documents={documents} />

            {/* Process Flow Section */}
            <ProcessFlow />

            {/* FAQ Carousel Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Got questions? We've got answers. Explore our common queries about Director E-KYC.
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
                title="Director KYC Consultation"
            />
        </div>
    );
};

export default DirectorEkyc;
