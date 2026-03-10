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

const GSTEWayBilling = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "GST Certificate / GSTIN", icon: "fa-certificate" },
        { title: "List of goods or invoice bill", icon: "fa-file-invoice" },
        { title: "Details of the vehicle (Road)", icon: "fa-truck" },
        { title: "Transporter Document/ID (Rail/Air/Water)", icon: "fa-plane" }
    ];

    const cards = [
        {
            title: "Compulsory Requirement",
            icon: "fa-file-circle-check",
            desc: "It is compulsory to generate a GST E-Way bill for those who transport their business goods from one place to another whose value exceeds Rs. 50,000."
        },
        {
            title: "Authorized Transport",
            icon: "fa-route",
            desc: "By generating an e-way bill, you are legally permitted to transport goods from one place to another without interruptions."
        },
        {
            title: "Avoid Penalties",
            icon: "fa-gavel",
            desc: "If you haven't filed your e-way bill before transport and goods are caught during inspection, you will be penalized under Section 122 of the CGST Act (Min Rs. 10,000)."
        },
        {
            title: "Prevent Seizure",
            icon: "fa-hand-paper",
            desc: "In case you have a GST e-way bill but goods are not listed correctly, your goods may be seized as per Section 129 of the CGST Act, 2017."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "What is a GST E-Way Bill?",
            description: "EWay Bill is an Electronic Way bill for movement of goods to be generated on the eWay Bill Portal. A GST registered person cannot transport goods exceeding Rs. 50,000 without it.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "Who needs to generate it?",
            description: "Any GST registered person transporting goods with a single invoice/bill/delivery challan value exceeding Rs. 50,000 needs to generate it.",
            icon: <i className="fa-solid fa-user-check"></i>
        },
        {
            id: 3,
            title: "What is the validity of an e-way bill?",
            description: "The validity depends on the distance. Generally, it is valid for 1 day for every 100 km or part thereof.",
            icon: <i className="fa-solid fa-clock"></i>
        },
        {
            id: 4,
            title: "What happens if I don't have an e-way bill?",
            description: "You may face a minimum penalty of Rs. 10,000 or the tax amount sought to be evaded (whichever is higher), and your goods/vehicle can be detained.",
            icon: <i className="fa-solid fa-triangle-exclamation"></i>
        },
        {
            id: 5,
            title: "Is it required for all transport modes?",
            description: "Yes, it is required for transport by Road, Rail, Air, and Water. The documents required (like Transporter ID) may vary slightly.",
            icon: <i className="fa-solid fa-truck-plane"></i>
        }
    ];

    const ewaySteps = [
        {
            title: "Submit invoice details",
            description: "Provide the invoice or bill details and transporter information through our simple form.",
            image: "/images/resource/mailbox_3d_new.png",
            alt: "Submit details"
        },
        {
            title: "Expert data validation",
            description: "Our GST specialists verify the distance, HSN codes, and vehicle details for accuracy.",
            image: "/images/resource/expert_3d_new.png",
            alt: "Expert review"
        },
        {
            title: "Generate E-Way bill",
            description: "We generate the E-Way bill on the portal and share the EBN (E-Way Bill Number) immediately.",
            image: "/images/resource/solutions_3d_new.png",
            alt: "E-Way Bill generation"
        },
        {
            title: "Ready for transport",
            description: "Receive your valid E-Way bill and start your goods movement with full legal compliance.",
            image: "/images/resource/completion_3d_new.png",
            alt: "Ready to ship"
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            {/* Hero Section */}
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/logo/Gemini_Generated_Image_ujtyysujtyysujty.png')" }}
            >
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-white/70"></div>

                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    {/* Left Content */}
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">GST E-Way Billing</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            File your E-way before you transport! | Process in a day | 6754 Already registered
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
                            Seamless E-Way Bill Generation for your Business
                        </h2>
                    </div>

                    {/* Right Content - Reusable Form Component */}
                    <ServiceForm title="GST E-Way Billing" />
                </div>
            </div>

            {/* Carousel Content Section - Understanding */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why GST E-Way Bill?</h2>
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

            {/* Documents Required Section */}
            <DocumentsRequired documents={documents} />

            {/* Process Flow Section */}
            <ProcessFlow steps={ewaySteps} title="E-Way Bill Generation Process" />

            {/* FAQ Carousel Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Got questions? We've got answers. Explore common queries about GST E-Way Billing.
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
                title="GST E-Way Billing Consultation"
            />
        </div>
    );
};

export default GSTEWayBilling;
