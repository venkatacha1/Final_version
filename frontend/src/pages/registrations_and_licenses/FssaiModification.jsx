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

const FssaiModification = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Current License Copy", icon: "fa-certificate" },
        { title: "Proof of Change", icon: "fa-file-contract" },
        { title: "Declaration for Modification", icon: "fa-pen-to-square" },
        { title: "Supporting Documents", icon: "fa-folder-open" }
    ];

    const cards = [
        {
            title: "Address Change",
            icon: "fa-map-pin",
            desc: "Shift your business premises? Update the new address in your FSSAI license."
        },
        {
            title: "Business Name Change",
            icon: "fa-signature",
            desc: "Rebrand your business? Ensure the new name is reflected in official records."
        },
        {
            title: "Product Addition",
            icon: "fa-basket-shopping",
            desc: "Adding new food categories to your menu or manufacturing line requires modification."
        },
        {
            title: "Capacity Expansion",
            icon: "fa-chart-line",
            desc: "Increasing production capacity? Update your license to avoid non-compliance."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "Is modification mandatory?",
            description: "Yes, any change in the business details that affects the conditions of the license must be updated.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "What is the modification fee?",
            description: "The government fee for modification is approx ₹1000 + differential amount if category changes.",
            icon: <i className="fa-solid fa-indian-rupee-sign"></i>
        },
        {
            id: 3,
            title: "How long does it take?",
            description: "It usually takes the same time as a new license application, depending on the scrutiny required.",
            icon: <i className="fa-solid fa-clock"></i>
        },
        {
            id: 4,
            title: "Can I change ownership?",
            description: "Yes, transfer of license in case of death or change of ownership requires filing for modification.",
            icon: <i className="fa-solid fa-people-arrows"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            {/* Hero Section */}
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-center flex items-center"
                style={{ backgroundImage: "url('/images/logo/Gemini_Generated_Image_fnw6oofnw6oofnw6.png')" }}
            >
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-white/70"></div>

                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    {/* Left Content */}
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">FSSAI Modification</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8 whitespace-nowrap">
                            Update Address | Add Products | Change Name
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
                            Keep Your Food License Current
                        </h2>
                    </div>

                    {/* Right Content - Reusable Form Component */}
                    <ServiceForm title="FSSAI Modification" />
                </div>
            </div>

            {/* Carousel Content Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Modification Scenarios</h2>
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
                            Got questions? We've got answers. Explore our common queries about FSSAI Modification.
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
                title="FSSAI Modification Consultation"
            />
        </div>
    );
};

export default FssaiModification;
