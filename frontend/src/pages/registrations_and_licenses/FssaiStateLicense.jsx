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

const FssaiStateLicense = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Form B", icon: "fa-file-signature" },
        { title: "List of Directors/Partners", icon: "fa-users" },
        { title: "Address Proof", icon: "fa-location-dot" },
        { title: "Analysis Report (if applicable)", icon: "fa-flask" },
        { title: "NOC from Municipality", icon: "fa-building-shield" }
    ];

    const cards = [
        {
            title: "Medium Scale Business",
            icon: "fa-chart-simple",
            desc: "Mandatory for food businesses with an annual turnover between ₹12 Lakhs and ₹20 Crores."
        },
        {
            title: "Manufacturer/Processor",
            icon: "fa-industry",
            desc: "Required for manufacturing units having capacity up to 2 MT per day."
        },
        {
            title: "Business Credibility",
            icon: "fa-certificate",
            desc: "State License enhances the trust factor and credibility of your medium-sized food business."
        },
        {
            title: "Avoid Penalties",
            icon: "fa-gavel",
            desc: "Operating without a state license when applicable can attract heavy fines and legal action."
        },
        {
            title: "Wider Reach",
            icon: "fa-road",
            desc: "Allows you to operate within the state with full legal compliance."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "Who needs state license?",
            description: "Food businesses with turnover between ₹12 Lakhs - ₹20 Crores, or specific capacities like 2MT/day production.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "What is the validity?",
            description: "A state license can be issued for a period of 1 to 5 years, as chosen by the food business operator.",
            icon: <i className="fa-solid fa-calendar-days"></i>
        },
        {
            id: 3,
            title: "How much is the govt fee?",
            description: "The government fee ranges from ₹2000 to ₹5000 per year primarily, depending on the nature of business.",
            icon: <i className="fa-solid fa-indian-rupee-sign"></i>
        },
        {
            id: 4,
            title: "Can I upgrade later?",
            description: "Yes, if your turnover exceeds ₹20 Crores, you can apply for a modification to upgrade to a Central License.",
            icon: <i className="fa-solid fa-arrow-up-right-dots"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            {/* Hero Section */}
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-center flex items-center"
                style={{ backgroundImage: "url('/images/logo/Gemini_Generated_Image_153zn4153zn4153z.png')" }}
            >
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-white/70"></div>

                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    {/* Left Content */}
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">FSSAI State License</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            For Turnover ₹12L - ₹20 Cr | Valid for 1-5 Years
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
                            Expert Assistance for State License
                        </h2>
                    </div>

                    {/* Right Content - Reusable Form Component */}
                    <ServiceForm title="FSSAI State License" />
                </div>
            </div>

            {/* Carousel Content Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why FSSAI State License?</h2>
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
                            Got questions? We've got answers. Explore our common queries about FSSAI State License.
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
                title="FSSAI State License Consultation"
            />
        </div>
    );
};

export default FssaiStateLicense;
