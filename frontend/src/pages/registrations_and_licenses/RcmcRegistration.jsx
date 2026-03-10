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

const RcmcRegistration = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Import-Export Code (IEC)", icon: "fa-barcode" },
        { title: "PAN Card", icon: "fa-address-card" },
        { title: "Company Incorporation Certificate", icon: "fa-certificate" },
        { title: "MOU/AOA or Partnership Deed", icon: "fa-file-contract" },
        { title: "Authorized Signatory Details", icon: "fa-user-tie" }
    ];

    const cards = [
        {
            title: "Export Incentives",
            icon: "fa-money-bill-trend-up",
            desc: "RCMC is mandatory for claiming various incentives and benefits under the Foreign Trade Policy (FTP)."
        },
        {
            title: "Market Access",
            icon: "fa-handshake",
            desc: "Provides access to international markets through various Export Promotion Councils (EPCs) and Commodity Boards."
        },
        {
            title: "Duty Drawbacks",
            icon: "fa-shield-heart",
            desc: "Essential for availing duty-free imports of raw materials or capital goods for export production."
        },
        {
            title: "Expert Guidance",
            icon: "fa-user-graduate",
            desc: "EPCs provide valuable training, workshops, and market intelligence reports to help you grow your exports."
        },
        {
            title: "Business Networking",
            icon: "fa-users",
            desc: "Enables you to network with other exporters and participate in trade delegations organized by councils."
        },
        {
            title: "Legal Recognition",
            icon: "fa-check-double",
            desc: "Establishes your firm as a registered exporter with the relevant Board or Council, building global trust."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "What is RCMC?",
            description: "Registration Cum Membership Certificate (RCMC) is a certificate issued by Export Promotion Councils or Commodity Boards in India.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "Is RCMC mandatory?",
            description: "Yes, RCMC is mandatory for any exporter who wishes to avail benefits under the Foreign Trade Policy.",
            icon: <i className="fa-solid fa-file-circle-check"></i>
        },
        {
            id: 3,
            title: "How to choose a Council?",
            description: "You should register with the Export Promotion Council that corresponds to your primary product or service category.",
            icon: <i className="fa-solid fa-building-columns"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/logo/rcmc.jpg.jpeg')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">RCMC Registration</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Export Promotion Councils | FTP Benefits | Market Access | Duty Remissions
                        </p>
                        <div className="mb-4 sm:mb-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-1.5 bg-theme-primary text-[#1a2b1f] px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                <i className="fa-solid fa-video"></i> Connect with us
                            </button>
                        </div>
                        <h2 className="text-xl lg:text-3xl font-bold leading-relaxed">Claim Your Export Benefits with RCMC</h2>
                    </div>
                    <ServiceForm title="RCMC Registration" />
                </div>
            </div>

            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Benefits of RCMC Registration</h2>
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
                title="RCMC Registration Consultation"
            />
        </div>
    );
};

export default RcmcRegistration;
