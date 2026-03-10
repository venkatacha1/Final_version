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

const AuthorizedCapitalIncrease = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "MOA & AOA", icon: "fa-file-contract" },
        { title: "Board Resolution Copy", icon: "fa-certificate" },
        { title: "Notice of AGM/EGM", icon: "fa-envelope-open-text" },
        { title: "Director Identification Number (DIN)", icon: "fa-id-card" },
        { title: "Digital Signature Certificate (DSC)", icon: "fa-signature" }
    ];

    const cards = [
        {
            title: "Board Resolution",
            icon: "fa-users-rectangle",
            desc: "Drafting and passing a board resolution to propose the increase in authorized share capital."
        },
        {
            title: "EGM/AGM Meeting",
            icon: "fa-handshake",
            desc: "Conducting a General Meeting to obtain shareholder approval for the capital expansion."
        },
        {
            title: "MOA & AOA Alteration",
            icon: "fa-file-pen",
            desc: "Amending the Capital Clause of the Memorandum of Association and Articles of Association."
        },
        {
            title: "ROC Form SH-7 filing",
            icon: "fa-file-arrow-up",
            desc: "Filing Form SH-7 with the Registrar of Companies within 30 days of passing the resolution."
        },
        {
            title: "Stamp Duty Payment",
            icon: "fa-money-check-dollar",
            desc: "Payment of requisite stamp duty to the state government based on the increased capital amount."
        },
        {
            title: "Updated Business Records",
            icon: "fa-clipboard-check",
            desc: "Ensuring all statutory registers and company documents reflect the new authorized capital."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "What is Authorized Share Capital?",
            description: "It is the maximum amount of share capital that a company is authorized by its constitutional documents to issue to shareholders.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "How long does the increase process take?",
            description: "The entire process usually takes 7-10 working days, including ROC approval and certificate generation.",
            icon: <i className="fa-solid fa-hourglass-half"></i>
        },
        {
            id: 3,
            title: "Is stamp duty the same in all states?",
            description: "No, stamp duty rates vary from state to state in India and are calculated based on the amount of increase.",
            icon: <i className="fa-solid fa-map-location-dot"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/logo/What-is-Authorised-Share-Capital.png')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Increase in Authorized Share Capital</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Board Resolution | ROC Filing | MOA Alteration | Stamp Duty
                        </p>
                        <div className="mb-4 sm:mb-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-1.5 bg-theme-primary text-[#1a2b1f] px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                <i className="fa-solid fa-video"></i> Connect with us
                            </button>
                        </div>
                        <h2 className="text-xl lg:text-3xl font-bold leading-relaxed">Expand Your Business Horizons with Higher Capital Limits</h2>
                    </div>
                    <ServiceForm title="Increase in Authorized Share Capital" />
                </div>
            </div>

            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Capital Increase Process</h2>
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
                title="Authorized Capital Consultation"
            />
        </div>
    );
};

export default AuthorizedCapitalIncrease;
