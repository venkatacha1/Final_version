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

const ImportExportLicense = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "PAN Card", icon: "fa-id-card" },
        { title: "Address Proof of Entity", icon: "fa-location-dot" },
        { title: "Bank Certificate/Cancelled Cheque", icon: "fa-money-check" },
        { title: "Digital Signature Certificate", icon: "fa-key" },
        { title: "Photograph", icon: "fa-camera" }
    ];

    const cards = [
        {
            title: "Global Market Access",
            icon: "fa-globe",
            desc: "IEC Code unlocks the international market, allowing you to import and export goods and services without legal hurdles."
        },
        {
            title: "Lifetime Validity",
            icon: "fa-infinity",
            desc: "Once obtained, the IEC requires no renewal. It is valid for a lifetime unless surrendered."
        },
        {
            title: "No Compliance Pains",
            icon: "fa-check-double",
            desc: "Unlike other tax registrations, IEC doesn't require filing returns, making it low maintenance."
        },
        {
            title: "Government Benefits",
            icon: "fa-hand-holding-dollar",
            desc: "Registered exporters can avail benefits from Customs, Export Promotion Council, and DGFT schemes."
        },
        {
            title: "Legitimacy",
            icon: "fa-scale-balanced",
            desc: "It serves as a primary proof of being an importer/exporter, adding credibility to your business."
        },
    ];

    const faqs = [
        {
            id: 1,
            title: "Who requires an IEC?",
            description: "Anyone who wants to import or export goods/services from or to India requires an IEC. It is mandatory for customs clearance and sending/receiving money in foreign currency.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "Is IEC required for service exports?",
            description: "Yes, if you are providing services and receiving foreign currency, IEC is required to avail benefits under the Service Exports from India Scheme (SEIS).",
            icon: <i className="fa-solid fa-briefcase"></i>
        },
        {
            id: 3,
            title: "How long does it take to get IEC?",
            description: "With MakeEasyFilings, you can get your IEC Code within 1-2 working days after submission of all documents.",
            icon: <i className="fa-solid fa-clock"></i>
        },
        {
            id: 4,
            title: "Is renewal required?",
            description: "No, IEC has lifetime validity. However, you must update the IEC details every year between April and June.",
            icon: <i className="fa-solid fa-calendar-check"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            {/* Hero Section */}
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-center flex items-center"
                style={{ backgroundImage: "url('/images/logo/Gemini_Generated_Image_im48piim48piim48.png')" }}
            >
                {/* Subtle Overlay - Update image if available, using placeholder from fssai for layout consistency */}
                <div className="absolute inset-0 bg-white/70"></div>

                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    {/* Left Content */}
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Import Export Code (IEC) Registration</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8 whitespace-nowrap">
                            Go Global | Lifetime Validity | No Return Filing
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
                            Mandatory for all Importers & Exporters
                        </h2>
                    </div>

                    {/* Right Content - Reusable Form Component */}
                    <ServiceForm title="Import Export Code (IEC) Registration" />
                </div>
            </div>

            {/* Carousel Content Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why GET IEC Registration?</h2>
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

            <DocumentsRequired documents={documents} />

            {/* Process Flow Section */}
            <ProcessFlow />

            {/* FAQ Carousel Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Got questions? We've got answers. Explore our common queries about IEC Registration.
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
                title="IEC Registration Consultation"
            />
        </div>
    );
};

export default ImportExportLicense;
