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

const IPRDispute = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Proof of Ownership", icon: "fa-certificate" },
        { title: "Evidence of Infringement", icon: "fa-magnifying-glass" },
        { title: "Prior Use Evidence", icon: "fa-clock-rotate-left" },
        { title: "Legal Authorization", icon: "fa-file-signature" },
        { title: "Correspondence Records", icon: "fa-folder-open" }
    ];

    const cards = [
        {
            title: "Trademark Infringement",
            icon: "fa-shield-halved",
            desc: "Protect your brand from unauthorized use or deceptive similarity by third parties to safeguard your reputation."
        },
        {
            title: "Copyright Violations",
            icon: "fa-copy",
            desc: "Legal action against plagiarism, unauthorized reproduction, or distribution of your creative works."
        },
        {
            title: "Design Disputes",
            icon: "fa-pen-ruler",
            desc: "Defending your unique product designs against imitation and unauthorized manufacturing."
        },
        {
            title: "Patent Litigation",
            icon: "fa-lightbulb",
            desc: "Expert legal representation in disputes related to inventive steps, novelty, and industrial application."
        },
        {
            title: "Legal Notices",
            icon: "fa-envelope-open-text",
            desc: "Strategic drafting and responding to legal notices for cease and desist, ensuring your rights are upheld."
        },
        {
            title: "Expert Representation",
            icon: "fa-gavel",
            desc: "Experienced IP attorneys providing robust representation in hearings, tribunals, and courts of law."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "What is IPR infringement?",
            description: "IPR infringement is the unauthorized use of an intellectual property right, such as a trademark, patent, or copyright, without the owner's permission.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "How to handle a legal notice?",
            description: "If you receive a cease and desist notice, consult an IP expert immediately to draft a strategic and legally sound response.",
            icon: <i className="fa-solid fa-file-invoice"></i>
        },
        {
            id: 3,
            title: "Can disputes be settled out of court?",
            description: "Yes, many IP disputes are settled through mediation or alternative dispute resolution (ADR) to save time and resources.",
            icon: <i className="fa-solid fa-handshake"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/logo/IMAGE1.jpg')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">IPR Dispute & Litigation</h1>
                        <h2 className="text-xl lg:text-3xl font-bold mb-6 text-theme-black/80">
                            Safeguarding your intellectual assets with expert legal backing
                        </h2>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8 text-gray-700">
                            Infringement Protection | Legal Notices | Expert Advocacy
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
                    <ServiceForm title="IPR Dispute & Litigation" showDisputeField={true} />
                </div>
            </div>

            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Dispute Resolution Services</h2>
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
                title="IPR Dispute Consultation"
            />
        </div>
    );
};

export default IPRDispute;
