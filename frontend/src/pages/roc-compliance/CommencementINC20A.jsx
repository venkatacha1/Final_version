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

const CommencementINC20A = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Bank Statement (Capital Deposit)", icon: "fa-building-columns" },
        { title: "Board Resolution for INC-20A", icon: "fa-certificate" },
        { title: "Certificate of Incorporation", icon: "fa-award" },
        { title: "PAN Card of Company", icon: "fa-id-card-clip" },
        { title: "Registered Office Proof", icon: "fa-location-dot" }
    ];

    const cards = [
        {
            title: "Capital Subscription",
            icon: "fa-money-bill-transfer",
            desc: "Each subscriber must deposit their agreed share capital into the company bank account."
        },
        {
            title: "Bank Statement Proof",
            icon: "fa-file-invoice-dollar",
            desc: "Obtaining bank statements showing the credit of subscription money from all shareholders."
        },
        {
            title: "Professional Certification",
            icon: "fa-user-tie",
            desc: "The e-form INC-20A must be certified by a practicing CA, CS, or Cost Accountant."
        },
        {
            title: "Form INC-20A Filing",
            icon: "fa-file-arrow-up",
            desc: "Filing the declaration of commencement of business with the ROC within 180 days of incorporation."
        },
        {
            title: "Penalty Protection",
            icon: "fa-shield-halved",
            desc: "Avoiding heavy penalties and potential company strike-off by filing within the legal deadline."
        },
        {
            title: "Business Ready",
            icon: "fa-briefcase",
            desc: "Once filed, the company is legally authorized to commence its business operations and exercise borrowing powers."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "What is Form INC-20A?",
            description: "It is a declaration that every director must file with the ROC stating that every subscriber to the MOA has paid the value of shares agreed to be taken by them.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "What happens if I don't file INC-20A?",
            description: "A penalty of ₹50,000 for the company and ₹1,000 per day for directors can be imposed. The ROC may also strike off the company if business isn't started.",
            icon: <i className="fa-solid fa-triangle-exclamation"></i>
        },
        {
            id: 3,
            title: "Is it applicable to all companies?",
            description: "It is applicable to all companies incorporated on or after 2nd November 2018 having a share capital.",
            icon: <i className="fa-solid fa-calendar-check"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/logo/pexels-pixabay-53621-2-1024x603.jpg')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Commencement of Business (INC-20A)</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Share Capital Deposit | Bank Statement | ROC Filing | Professional Verification
                        </p>
                        <div className="mb-4 sm:mb-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-1.5 bg-theme-primary text-[#1a2b1f] px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                <i className="fa-solid fa-video"></i> Connect with us
                            </button>
                        </div>
                        <h2 className="text-xl lg:text-3xl font-bold leading-relaxed">Legally Authorize Your Business Operations with Timely INC-20A Filing</h2>
                    </div>
                    <ServiceForm title="Commencement of Business (INC-20A)" />
                </div>
            </div>

            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">INC-20A Filing Process</h2>
                        <div className="w-24 h-1 bg-theme-primary mx-auto"></div>
                    </div>
                    < Swiper
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
                title="INC-20A Consultation"
            />
        </div>
    );
};

export default CommencementINC20A;
