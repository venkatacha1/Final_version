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

const FssaiRegistration = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Address proof", icon: "fa-location-dot" },
        { title: "Photograph", icon: "fa-camera" },
        { title: "Contact details", icon: "fa-address-book" },
        { title: "Company documents (if applicable)", icon: "fa-file-invoice" },
        { title: "Utility bill", icon: "fa-lightbulb" }
    ];

    const cards = [
        {
            title: "Food Safety Assurance",
            icon: "fa-utensils",
            desc: "Government implemented FSSAI to ensure that the food consumed by citizens is hygienic, safe, and does not spread diseases."
        },
        {
            title: "Business Growth",
            icon: "fa-chart-line",
            desc: "It promotes business opportunities by allowing the sale of food through online/e-commerce platforms and food contracts."
        },
        {
            title: "Global Expansion",
            icon: "fa-globe",
            desc: "It helps businesses expand into exports from India, meeting international food safety standards."
        },
        {
            title: "Consumer Trust",
            icon: "fa-hand-holding-heart",
            desc: "FSSAI logo on your product builds trust among consumers regarding quality and safety."
        },
        {
            title: "Legal Compliance",
            icon: "fa-scale-balanced",
            desc: "Avoid legal complications and fines by complying with mandatory food safety regulations."
        },
    ];

    const faqs = [
        {
            id: 1,
            title: "Who is eligible for FSSAI?",
            description: "It is mandatory for all food businesses to get registered under FoSCoS registration/License according to the nature of business/activity carried to avoid punishable offenses.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "Is there a government fee?",
            description: "Yes. Registration: ₹100/yr. State License: ₹2000-5000/yr. Central License: ₹7500/yr. (varies by turnover).",
            icon: <i className="fa-solid fa-indian-rupee-sign"></i>
        },
        {
            id: 3,
            title: "Is it mandatory to renew FSSAI?",
            description: "Yes, renewal must be done 30 days before the due date. A late fee of ₹100/day applies if missed.",
            icon: <i className="fa-solid fa-arrows-rotate"></i>
        },
        {
            id: 4,
            title: "How many types of FSSAI licenses are there?",
            description: "Three types: Basic Registration (turnover < 12L), State License (turnover 12L-20Cr), and Central License (turnover > 20Cr or export).",
            icon: <i className="fa-solid fa-list-ol"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            {/* Hero Section */}
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/logo/Gemini_Generated_Image_cu7j77cu7j77cu7j.png')" }}
            >
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-white/50"></div>

                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    {/* Left Content */}
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Get Food Safety Registration</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Get free expert consultation | Process in 5 days | 6754 Already registered
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
                            Applicable for all food businesses
                        </h2>
                    </div>

                    {/* Right Content - Reusable Form Component */}
                    <ServiceForm title="FSSAI Registration" />
                </div>
            </div>

            {/* Carousel Content Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Understanding FSSAI Registration</h2>
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
                        className="fssai-swiper"
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
                            Got questions? We've got answers. Explore our common queries about FSSAI Registration.
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
                title="FSSAI Registration Consultation"
            />
        </div>
    );
};

export default FssaiRegistration;
