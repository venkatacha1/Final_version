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

const StartupIndia = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Certificate of Incorporation", icon: "fa-certificate" },
        { title: "Nature of Business Pitch", icon: "fa-person-chalkboard" },
        { title: "Company PAN", icon: "fa-address-card" },
        { title: "Brief Description of Innovation", icon: "fa-lightbulb" },
        { title: "Website / Video Link", icon: "fa-link" }
    ];

    const cards = [
        {
            title: "Tax Holiday",
            icon: "fa-percent",
            desc: "Startups are eligible for 100% tax exemption on profits for 3 consecutive years within the first 10 years."
        },
        {
            title: "Self Certification",
            icon: "fa-check-double",
            desc: "Startups can self-certify compliance under 3 labor laws and 6 environmental laws for the first few years."
        },
        {
            title: "IPR Support",
            icon: "fa-shield-halved",
            desc: "Up to 80% rebate in patent filing fees and 50% rebate in trademark filing fees for DPIIT recognized startups."
        },
        {
            title: "Public Procurement",
            icon: "fa-building-columns",
            desc: "Preference in government tenders with exemptions on prior experience and prior turnover requirements."
        },
        {
            title: "Funding Access",
            icon: "fa-sack-dollar",
            desc: "Access to the ₹10,000 crore Fund of Funds and ease of raising capital through various startup schemes."
        },
        {
            title: "Easy Exit",
            icon: "fa-right-from-bracket",
            desc: "Simplified winding up norms for startups within 90 days under the Insolvency and Bankruptcy Code."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "What is DPIIT recognition?",
            description: "DPIIT recognition is the official status given by the government to a startup to avail all legal benefits.",
            icon: <i className="fa-solid fa-medal"></i>
        },
        {
            id: 2,
            title: "Can a proprietorship be a startup?",
            description: "No, a startup must be incorporated as a Private Limited, LLP, or a Registered Partnership Firm.",
            icon: <i className="fa-solid fa-circle-xmark"></i>
        },
        {
            id: 3,
            title: "How old can a startup be?",
            description: "A startup remains eligible for recognition for up to 10 years from its date of incorporation.",
            icon: <i className="fa-solid fa-calendar-days"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-center flex items-center"
                style={{ backgroundImage: "url('/images/logo/65229.STARTUP INDIA REGISTRATION.png')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Start-up India Registration & DPIIT</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Govt Benefits | Tax Exemptions | Startup Ecosystem
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
                        <h2 className="text-xl lg:text-3xl font-bold leading-relaxed">Fueling Innovation and Growth through the Startup India Initiative</h2>
                    </div>
                    <ServiceForm title="Startup India Registration" />
                </div>
            </div>

            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">The Startup Ecosystem</h2>
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
                title="Startup India Consultation"
            />
        </div>
    );
};

export default StartupIndia;
