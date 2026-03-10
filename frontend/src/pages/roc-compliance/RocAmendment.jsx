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

const RocAmendment = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Certified True Copy of Resolution", icon: "fa-file-signature" },
        { title: "Altered MOA/AOA", icon: "fa-file-contract" },
        { title: "Notice of General Meeting", icon: "fa-bullhorn" },
        { title: "Direct's Consent/Resignation letter", icon: "fa-user-pen" },
        { title: "Proof of New Address (if change)", icon: "fa-location-dot" }
    ];

    const cards = [
        {
            title: "Change in Name",
            icon: "fa-tags",
            desc: "Assisting in the legal process of changing your company's name, including name availability check and ROC approval (Form RUN & MGT-14)."
        },
        {
            title: "Registered Office Change",
            icon: "fa-building-circle-arrow-right",
            desc: "Helping you shift your registered office within the same city, to another city, or another state (Form INC-22 & INC-23)."
        },
        {
            title: "Object Clause Amendment",
            icon: "fa-bullseye",
            desc: "Modifying the main objects of your company in the Memorandum of Association (MOA) to pivot or expand your business activities."
        },
        {
            title: "Capital Increase",
            icon: "fa-chart-line-up",
            desc: "Increasing the Authorized Share Capital of your company to enable further investment or issuance of new shares (Form SH-7)."
        },
        {
            title: "Director Appointment/Removal",
            icon: "fa-user-group",
            desc: "Managing the entire paperwork for appointing new directors or processing the resignation/removal of existing ones (Form DIR-12)."
        },
        {
            title: "MOA/AOA Alteration",
            icon: "fa-file-pen",
            desc: "Comprehensive support for any general alteration in the Memorandum or Articles of Association to suit your evolving business needs."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "Can I change my company name anytime?",
            description: "Yes, a company can change its name by passing a special resolution and obtaining approval from the ROC, provided it hasn't defaulted on filings.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "How long does a registered office change take?",
            description: "A change within the same state typically takes 15-30 days, while shifting to another state can take 2-4 months due to RD approval requirements.",
            icon: <i className="fa-solid fa-clock"></i>
        },
        {
            id: 3,
            title: "What is the process for adding a Director?",
            description: "It involves obtaining a DIN, a DSC, passing a board resolution, and filing Form DIR-12 with the ROC within 30 days.",
            icon: <i className="fa-solid fa-user-plus"></i>
        },
        {
            id: 4,
            title: "Do I need to file with the ROC for every change?",
            description: "Most structural changes like change in directors, capital, name, or objects MUST be filed with the ROC to be legally valid.",
            icon: <i className="fa-solid fa-file-shield"></i>
        },
        {
            id: 5,
            title: "What is an Authorized Capital increase?",
            description: "It is the process of increasing the maximum amount of share capital the company is authorized to issue to its shareholders.",
            icon: <i className="fa-solid fa-money-bill-trend-up"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            {/* Hero Section */}
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-center flex items-center"
                style={{ backgroundImage: "url('/images/logo/compliances-for-change-in-registered-office-of-a-company.jpg')" }}
            >
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-white/70"></div>

                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    {/* Left Content */}
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">ROC Amendment & Company Changes</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Update Company Details | Legal Documentation | Seamless ROC Approval
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
                            Helping your business evolve with professional legal support
                        </h2>
                    </div>

                    {/* Right Content - Reusable Form Component */}
                    <ServiceForm title="ROC Amendment & Company Changes" />
                </div>
            </div>

            {/* Carousel Content Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Common Company Amendments</h2>
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
                        className="pb-16 proprietorship-swiper"
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
                            Got questions? We've got answers. Explore our common queries about ROC Amendments.
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
                title="ROC Amendment Consultation"
            />
        </div>
    );
};

export default RocAmendment;
