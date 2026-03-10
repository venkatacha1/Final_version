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

const FssaiCentralLicense = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Form B", icon: "fa-file-signature" },
        { title: "List of Directors", icon: "fa-users" },
        { title: "Plan of Processing Unit", icon: "fa-map" },
        { title: "Import/Export Code (if applicable)", icon: "fa-globe" },
        { title: "Water Analysis Report", icon: "fa-flask" }
    ];

    const cards = [
        {
            title: "Large Scale Business",
            icon: "fa-building",
            desc: "Mandatory for food businesses with an annual turnover exceeding ₹20 Crores."
        },
        {
            title: "Importers/Exporters",
            icon: "fa-plane-departure",
            desc: "Compulsory for businesses involved in importing or exporting food products."
        },
        {
            title: "Multi-State Operation",
            icon: "fa-map-location",
            desc: "Required for head offices having operations in more than one state."
        },
        {
            title: "Government Supplies",
            icon: "fa-handshake",
            desc: "Often a prerequisite for supplying food products to government agencies and railways."
        },
        {
            title: "E-Commerce",
            icon: "fa-cart-shopping",
            desc: "Mandatory for e-commerce food business operators."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "Who needs central license?",
            description: "Turnover > ₹20 Crores, Importers, Exporters, and operators in Central Govt agencies (Railways, Airports).",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "What is the fee structure?",
            description: "The government fee is approx ₹7500 per year. It varies slightly based on specific business activities.",
            icon: <i className="fa-solid fa-indian-rupee-sign"></i>
        },
        {
            id: 3,
            title: "How long does it take?",
            description: "It typically takes 30-60 days as it involves verification by the Central Food Safety Authority.",
            icon: <i className="fa-solid fa-clock"></i>
        },
        {
            id: 4,
            title: "Is facility inspection mandatory?",
            description: "Yes, a Food Safety Officer usually inspects the premises before granting the Central License.",
            icon: <i className="fa-solid fa-clipboard-check"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            {/* Hero Section */}
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-center flex items-center"
                style={{ backgroundImage: "url('/images/logo/Gemini_Generated_Image_r53z4sr53z4sr53z.png')" }}
            >
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-white/70"></div>

                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    {/* Left Content */}
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">FSSAI Central License</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Turnover &gt; ₹20 Cr | Importers & Exporters
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
                            Highest Standard of Food Safety
                        </h2>
                    </div>

                    {/* Right Content - Reusable Form Component */}
                    <ServiceForm title="FSSAI Central License" />
                </div>
            </div>

            {/* Carousel Content Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why FSSAI Central License?</h2>
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
                            Got questions? We've got answers. Explore our common queries about FSSAI Central License.
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
                title="FSSAI Central License Consultation"
            />
        </div>
    );
};

export default FssaiCentralLicense;
