import React, { useEffect, useState } from 'react';
import Globe3D from '../../components/Globe3D';
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

const InternationalTrademark = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Indian Trademark Certificate/Application", icon: "fa-certificate" },
        { title: "List of Designated Countries", icon: "fa-earth-americas" },
        { title: "Proof of Business Entity", icon: "fa-building" },
        { title: "Identity & Address Proof", icon: "fa-id-card" },
        { title: "Power of Attorney", icon: "fa-file-signature" }
    ];

    const cards = [
        {
            title: "Global Recognition",
            icon: "fa-globe",
            desc: "Secure your brand identity in multiple countries with a single application under the Madrid Protocol, facilitating international brand expansion."
        },
        {
            title: "Cost Efficient",
            icon: "fa-file-invoice-dollar",
            desc: "Save on heavy legal fees and individual country filing costs. One application covers several jurisdictions, significantly reducing administrative expenses."
        },
        {
            title: "Single Application",
            icon: "fa-paste",
            desc: "No need to file separate applications in each country. Manage your entire global portfolio through one centralized system with the WIPO."
        },
        {
            title: "Priority Rights",
            icon: "fa-flag-checkered",
            desc: "Claim priority based on your Indian application. This ensures your international protection date relates back to your original filing."
        },
        {
            title: "Simplified Management",
            icon: "fa-list-check",
            desc: "Renewals, name changes, or address updates can be managed through a single request, streamlining the maintenance of your global rights."
        },
        {
            title: "Brand Asset Value",
            icon: "fa-arrow-up-right-dots",
            desc: "International registration turns your brand into a worldwide asset, increasing company valuation and attracting global partners."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "What is the Madrid Protocol?",
            description: "The Madrid Protocol is an international system that allows trademark owners to protect their marks in multiple countries by filing a single application.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "Can I apply without an Indian Trademark?",
            description: "No, a 'basic' application or registration in India is a prerequisite for filing an international application under the Madrid System.",
            icon: <i className="fa-solid fa-circle-exclamation"></i>
        },
        {
            id: 3,
            title: "How many countries can I choose?",
            description: "You can choose from over 120 member countries of the Madrid Union, covering most major global economies.",
            icon: <i className="fa-solid fa-map-location-dot"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/logo/Gemini_Generated_Image_snxo7xsnxo7xsnxo.png')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">International Trademark Registration</h1>
                        <h2 className="text-xl lg:text-3xl font-bold mb-6 text-theme-black/80">
                            Expanding your brand protection across global borders
                        </h2>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8 text-gray-700">
                            Madrid Protocol | 120+ Countries | Global Portfolio Management
                        </p>
                        <div className="mb-4 sm:mb-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-1.5 bg-theme-primary text-[#1a2b1f] px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                <i className="fa-solid fa-video"></i> Connect with us
                            </button>
                        </div>
                    </div>
                    <ServiceForm title="International Trademark Registration" showCountryField={true} />
                </div>
            </div>

            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Benefits of International Registration</h2>
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

            <section className="py-16 bg-white overflow-hidden">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Global Coverage</h2>
                        <div className="w-24 h-1 bg-theme-primary mx-auto"></div>
                        <p className="mt-4 text-lg text-gray-600">Representing our extensive reach across key international markets.</p>
                    </div>
                    <Globe3D />
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
                title="International Trademark Consultation"
            />
        </div>
    );
};

export default InternationalTrademark;
