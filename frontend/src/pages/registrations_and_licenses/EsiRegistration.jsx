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

const EsiRegistration = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Registration Certificate (Incorporation/GST)", icon: "fa-certificate" },
        { title: "Employee Details (Name, Salary, etc.)", icon: "fa-users-line" },
        { title: "Address Proof of Establishment", icon: "fa-location-dot" },
        { title: "Directors/Partners KYC", icon: "fa-user-check" },
        { title: "Bank Account Details", icon: "fa-money-check" }
    ];

    const cards = [
        {
            title: "Mandatory for 10+ Employees",
            icon: "fa-users",
            desc: "Generally applicable to non-seasonal factories with 10 or more persons."
        },
        {
            title: "Health Benefits",
            icon: "fa-heart-pulse",
            desc: "Provides full medical care to employees and their families."
        },
        {
            title: "Sickness Benefit",
            icon: "fa-bed-pulse",
            desc: "Employees are entitled to cash benefits during periods of sickness."
        },
        {
            title: "Maternity Benefit",
            icon: "fa-person-breastfeeding",
            desc: "Paid leaves for maternity are covered under the ESI scheme."
        },
        {
            title: "Dependent Benefit",
            icon: "fa-hands-holding-child",
            desc: "Financial support to dependents in case of employment injury leading to death."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "Who needs ESI Registration?",
            description: "Establishments with 10 or more employees drawing wages up to ₹21,000 per month.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "What is the contribution rate?",
            description: "Employer contributes 3.25% and Employee contributes 0.75% of the wages.",
            icon: <i className="fa-solid fa-percent"></i>
        },
        {
            id: 3,
            title: "What are the benefits?",
            description: "Medical, Sickness, Maternity, Disablement, and Dependent benefits, plus funeral expenses.",
            icon: <i className="fa-solid fa-notes-medical"></i>
        },
        {
            id: 4,
            title: "How to register?",
            description: "Registration is completely online. We assist you through the Shram Suvidha Portal.",
            icon: <i className="fa-solid fa-laptop-medical"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            {/* Hero Section */}
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-center flex items-center"
                style={{ backgroundImage: "url('/images/logo/Gemini_Generated_Image_z6yc8nz6yc8nz6yc.png')" }}
            >
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-white/70"></div>

                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    {/* Left Content */}
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">ESI Registration</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8 whitespace-nowrap">
                            Employees' State Insurance | Medical Benefits
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
                            Health & Social Security for Employees
                        </h2>
                    </div>

                    {/* Right Content - Reusable Form Component */}
                    <ServiceForm title="ESI Registration" />
                </div>
            </div>

            {/* Carousel Content Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why ESI Registration?</h2>
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
                            Got questions? We've got answers. Explore our common queries about ESI Registration.
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
                title="ESI Registration Consultation"
            />
        </div>
    );
};

export default EsiRegistration;
