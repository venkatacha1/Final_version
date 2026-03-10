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

const ExpeditedTrademark = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Identity Proof", icon: "fa-id-card" },
        { title: "Address Proof", icon: "fa-location-dot" },
        { title: "Brand Name & Logo", icon: "fa-copyright" },
        { title: "MSME/Startup Certificate", icon: "fa-certificate" },
        { title: "Power of Attorney", icon: "fa-file-signature" }
    ];

    const cards = [
        {
            title: "Faster Examination",
            icon: "fa-bolt-lightning",
            desc: "The application is examined much faster than the standard route, drastically reducing the waiting time for the examination report."
        },
        {
            title: "Prioritized Processing",
            icon: "fa-arrow-up-wide-short",
            desc: "Move ahead in the queue. Expedited requests are prioritized by the Trademarks Registry for quicker resolution of objections."
        },
        {
            title: "MSME/Startup Benefits",
            icon: "fa-rocket",
            desc: "Startups and MSMEs can avail of this service to secure their brand identity rapidly in a competitive market."
        },
        {
            title: "Immediate Protection",
            icon: "fa-shield-check",
            desc: "By accelerating the process, you gain legal certainty and protection against infringers significantly sooner."
        },
        {
            title: "Expert Monitoring",
            icon: "fa-eye",
            desc: "Our team continuously monitors the application status, ensuring timely responses to any registry inquiries or objections."
        },
        {
            title: "End-to-End Support",
            icon: "fa-user-gear",
            desc: "From filing the request to handling hearings (if any), we provide comprehensive support for a smooth expedited journey."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "What is expedited registration?",
            description: "Expedited trademark registration is a specialized process where the examination and further processing are done on a priority basis.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "Who is eligible?",
            description: "Small enterprises (MSMEs), Startups, and individuals can apply for expedited processing by providing the required certificates.",
            icon: <i className="fa-solid fa-user-check"></i>
        },
        {
            id: 3,
            title: "How fast is the process?",
            description: "While standard registration takes 6-12 months, expedited processing can result in registration within 3-6 months, depending on objections.",
            icon: <i className="fa-solid fa-gauge-high"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/logo/Gemini_Generated_Image_cn0470cn0470cn04.png')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Expedited Trademark Registration</h1>
                        <h2 className="text-xl lg:text-3xl font-bold mb-6 text-theme-black/80">
                            Accelerate your brand protection journey with priority filing
                        </h2>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8 text-gray-700">
                            Faster Processing | MSME Privileges | Rapid Registration
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
                    <ServiceForm title="Expedited Trademark Registration" />
                </div>
            </div>

            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Expedited Route?</h2>
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
                title="Expedited Trademark Consultation"
            />
        </div>
    );
};

export default ExpeditedTrademark;
