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

const IndianSubsidiary = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Certificate of Incorporation (Foreign Co)", icon: "fa-certificate" },
        { title: "Board Resolution for Indian Entity", icon: "fa-file-signature" },
        { title: "PAN & Aadhaar of Indian Director", icon: "fa-address-card" },
        { title: "Address Proof of Office in India", icon: "fa-map-location-dot" },
        { title: "Digital Signature Certificate (DSC)", icon: "fa-pen-nib" }
    ];

    const cards = [
        {
            title: "Global Expansion",
            icon: "fa-earth-asia",
            desc: "Foreign companies can establish their footprint in the rapidly growing Indian market with ease."
        },
        {
            title: "Separate Legal Entity",
            icon: "fa-id-badge",
            desc: "The subsidiary is an independent legal entity in India, protecting the foreign parent's assets."
        },
        {
            title: "100% FDI Eligibility",
            icon: "fa-money-bill-trend-up",
            desc: "Most sectors in India allow 100% Foreign Direct Investment (FDI) under the automatic route."
        },
        {
            title: "Tax Benefits",
            icon: "fa-file-contract",
            desc: "Availability of Double Taxation Avoidance Agreements (DTAA) reduces effective tax rates for foreign investors."
        },
        {
            title: "Access to Talent",
            icon: "fa-users-viewfinder",
            desc: "Tap into one of the world's largest and most diverse pools of skilled professional talent in India."
        },
        {
            title: "Stable Environment",
            icon: "fa-handshake-angle",
            desc: "Benefit from India's stable political and growing economic environment for long-term business success."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "Can a foreign company own 100% shares?",
            description: "Yes, in most sectors, a foreign company can own 100% of the shares of an Indian Subsidiary.",
            icon: <i className="fa-solid fa-crown"></i>
        },
        {
            id: 2,
            title: "Is an Indian Director mandatory?",
            description: "Yes, at least one director must be a resident of India (stayed for 182 days or more).",
            icon: <i className="fa-solid fa-user-check"></i>
        },
        {
            id: 3,
            title: "What is FDI compliance?",
            description: "The company must report the foreign investment to the RBI via the FIRMS portal within specific timelines.",
            icon: <i className="fa-solid fa-building-columns"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-center flex items-center"
                style={{ backgroundImage: "url('/images/logo/indian_subsidiary_hero.png')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Indian Subsidiary Registration (International)</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Foreign Investment | 100% FDI | Global Gateway to India
                        </p>
                        <div className="mb-4 sm:mb-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-1.5 bg-theme-primary text-[#1a2b1f] px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                <i className="fa-solid fa-video"></i> Connect with us
                            </button>
                        </div>
                        <h2 className="text-xl lg:text-3xl font-bold leading-relaxed">Enter the Indian Market with Confidence and Legal Precision</h2>
                    </div>
                    <ServiceForm title="Indian Subsidiary Registration" />
                </div>
            </div>

            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Investment Advantages</h2>
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
                title="Indian Subsidiary Consultation"
            />
        </div>
    );
};

export default IndianSubsidiary;
