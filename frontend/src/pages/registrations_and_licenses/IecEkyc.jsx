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

const IecEkyc = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "IEC Code Number", icon: "fa-hashtag" },
        { title: "DSC (Class 2/3)", icon: "fa-key" },
        { title: "Aadhar/PAN Details", icon: "fa-id-card" },
        { title: "Bank Details", icon: "fa-building-columns" }
    ];

    const cards = [
        {
            title: "Mandatory Update",
            icon: "fa-triangle-exclamation",
            desc: "DGFT has made it mandatory for all IEC holders to update their details annually."
        },
        {
            title: "Seamless Customs",
            icon: "fa-truck-fast",
            desc: "Updated KYC ensures smooth customs clearance and avoid shipment hold-ups."
        },
        {
            title: "Active Status",
            icon: "fa-toggle-on",
            desc: "Failure to update KYC can lead to the deactivation of your IEC, halting all imports/exports."
        },
        {
            title: "Prevent Fraud",
            icon: "fa-shield-halved",
            desc: "Regular updates help prevent misuse of your IEC code by unauthorized entities."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "Why is IEC E-KYC mandatory?",
            description: "To ensure the correctness of IEC holder's details and to deactivate dormant IECs, DGFT has made annual E-KYC mandatory.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "When should I do the E-KYC?",
            description: "It must be done every year between April to June, even if there are no changes in your details.",
            icon: <i className="fa-solid fa-calendar-days"></i>
        },
        {
            id: 3,
            title: "What happens if I miss the deadline?",
            description: "Your IEC will be deactivated. You can re-activate it by filing the update with a penalty/late fee.",
            icon: <i className="fa-solid fa-ban"></i>
        },
        {
            id: 4,
            title: "Do I need a DSC?",
            description: "Yes, a valid Digital Signature Certificate (DSC) is required to authenticate the E-KYC process on the DGFT portal.",
            icon: <i className="fa-solid fa-file-signature"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            {/* Hero Section */}
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-center flex items-center"
                style={{ backgroundImage: "url('/images/logo/2.-KYC-Fulfilled-by-Verifying-IEC-and-GSTIN-No-Physical-Check-Needed—CESTAT (1).jpg')" }}
            >
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-white/70"></div>

                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    {/* Left Content */}
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">IEC E-KYC Update</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8 whitespace-nowrap">
                            Mandatory Annual Update | Avoid Deactivation
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
                            Keep Your Import Export License Active
                        </h2>
                    </div>

                    {/* Right Content - Reusable Form Component */}
                    <ServiceForm title="IEC E-KYC Update" />
                </div>
            </div>

            {/* Carousel Content Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Importance of IEC E-KYC</h2>
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
                        className="fssai-swiper"
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

            <DocumentsRequired documents={documents} title="Requirements" />

            {/* Process Flow Section */}
            <ProcessFlow />

            {/* FAQ Carousel Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Got questions? We've got answers. Explore our common queries about IEC E-KYC.
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
                title="IEC E-KYC Update Consultation"
            />
        </div>
    );
};

export default IecEkyc;
