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

const IncomeTaxScrutiny = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Scrutiny Notice copy (143(2))", icon: "fa-file-shield" },
        { title: "Books of Accounts", icon: "fa-book" },
        { title: "Details of High Value Transactions", icon: "fa-money-bill-transfer" },
        { title: "Bank Statements (All accounts)", icon: "fa-building-columns" },
        { title: "Ownership Proofs of Assets", icon: "fa-key" }
    ];

    const cards = [
        {
            title: "Expert Representation",
            icon: "fa-user-tie",
            desc: "Expert representation before the Assessing Officer (AO) by qualified tax professionals handling your case end-to-end."
        },
        {
            title: "Factual Compilation",
            icon: "fa-file-signature",
            desc: "Systematic compilation of all required facts, documents, and evidence to support the claims made in your tax return."
        },
        {
            title: "Virtual Assessment",
            icon: "fa-laptop-code",
            desc: "Complete handling of the Faceless Assessment process, including filing of digital responses and participating in video hearings."
        },
        {
            title: "Strategic Planning",
            icon: "fa-chess",
            desc: "Strategic drafting of responses to counter the queries raised by the department, effectively protecting your interests."
        },
        {
            title: "Documentation Review",
            icon: "fa-magnifying-glass-plus",
            desc: "Thorough review of all your business and personal financial documentation to identify and fix potential vulnerabilities."
        },
        {
            title: "Conclusion Handling",
            icon: "fa-check-double",
            desc: "Assisting until the final assessment order is passed, ensuring all points are addressed and the case is closed properly."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "What is Income Tax Scrutiny?",
            description: "Scrutiny assessment is a detailed investigation of a return by the department to ensure the taxpayer hasn't understated income or overstated loss.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "Is Scrutiny only for big businesses?",
            description: "No, scrutiny can be picked up for any taxpayer based on criteria like high-value transactions, mismatches, or random selection.",
            icon: <i className="fa-solid fa-scale-balanced"></i>
        },
        {
            id: 3,
            title: "How long does a Scrutiny case last?",
            description: "A scrutiny assessment usually takes several months to a year, depending on the complexity and volume of information requested.",
            icon: <i className="fa-solid fa-clock"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/about/about-two-image.jpg')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Income Tax Scrutiny Assessment</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            143(3) Scrutiny | Faceless Assessment | Case Representation
                        </p>
                        <div className="mb-4 sm:mb-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-1.5 bg-theme-primary text-[#1a2b1f] px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                <i className="fa-solid fa-video"></i> Connect with us
                            </button>
                        </div>
                        <h2 className="text-xl lg:text-3xl font-bold leading-relaxed">Professional Support for Complex Scrutiny Cases</h2>
                    </div>
                    <ServiceForm title="Income Tax Scrutiny" />
                </div>
            </div>

            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Handling Scrutiny Cases</h2>
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
                title="Income Tax Scrutiny Case Consultation"
            />
        </div>
    );
};

export default IncomeTaxScrutiny;
