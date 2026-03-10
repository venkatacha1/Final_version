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

const ShareTransfer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Share Certificates", icon: "fa-certificate" },
        { title: "Share Transfer Form (SH-4)", icon: "fa-file-invoice" },
        { title: "Share Transfer Agreement", icon: "fa-file-contract" },
        { title: "ID & Address Proof of Transferor/Transferee", icon: "fa-id-card-clip" },
        { title: "Stamp Duty Payment Proof", icon: "fa-receipt" }
    ];

    const cards = [
        {
            title: "SH-4 Form Execution",
            icon: "fa-file-pen",
            desc: "The share transfer process starts with the execution of Form SH-4, signed by both the transferor (seller) and transferee (buyer)."
        },
        {
            title: "Stamp Duty Advisory",
            icon: "fa-gavel",
            desc: "Payment of appropriate stamp duty is mandatory for a valid share transfer. We provide expert advice on current stamp duty rates."
        },
        {
            title: "Board Approval",
            icon: "fa-user-check",
            desc: "All share transfers must be approved by the board of directors. We handle the drafting of board resolutions and minutes."
        },
        {
            title: "Updating Registers",
            icon: "fa-book-atlas",
            desc: "Ensuring that the Register of Members and Register of Share Transfers are updated correctly to reflect the new ownership."
        },
        {
            title: "New Certificates",
            icon: "fa-award",
            desc: "Assisting in the cancellation of old share certificates and the issuance of new ones to the transferee within the legal timeframe."
        },
        {
            title: "MGT-7 Reporting",
            icon: "fa-calendar-check",
            desc: "Reporting the changes in shareholding in the next Annual Return (MGT-7) filed with the Registrar of Companies."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "Is share transfer allowed in a Private Limited Company?",
            description: "Yes, but it is subject to the restrictions mentioned in the Articles of Association (AOA) of the company.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "What is Form SH-4?",
            description: "SH-4 is the official instrument of share transfer that must be executed and stamped for any transfer of shares in physical form.",
            icon: <i className="fa-solid fa-file-lines"></i>
        },
        {
            id: 3,
            title: "What is the deadline for board approval?",
            description: "The company must register the transfer and deliver the share certificates within one month from the date of receipt of SH-4.",
            icon: <i className="fa-solid fa-clock"></i>
        },
        {
            id: 4,
            title: "Can I transfer shares to a non-member?",
            description: "Yes, but usually the AOA requires that shares first be offered to existing members (Right of Pre-emption).",
            icon: <i className="fa-solid fa-user-group"></i>
        },
        {
            id: 5,
            title: "Is income tax applicable on share transfer?",
            description: "Yes, the transferor may be liable for Capital Gains tax, and the transferee may have tax implications if shares are transferred below FMV.",
            icon: <i className="fa-solid fa-hand-holding-dollar"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            {/* Hero Section */}
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-center flex items-center"
                style={{ backgroundImage: "url('/images/logo/Share-equity-scaled.jpg')" }}
            >
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-white/70"></div>

                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    {/* Left Content */}
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Share Transfer & Ownership Change</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Hassle-Free Documentation | Stamp Duty Support | Statutory Record Updates
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
                            Managing the smooth transition of equity in your company
                        </h2>
                    </div>

                    {/* Right Content - Reusable Form Component */}
                    <ServiceForm title="Share Transfer" />
                </div>
            </div>

            {/* Carousel Content Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Share Transfer Process</h2>
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
                            Got questions? We've got answers. Explore our common queries about Share Transfer.
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
                title="Share Transfer Consultation"
            />
        </div>
    );
};

export default ShareTransfer;
