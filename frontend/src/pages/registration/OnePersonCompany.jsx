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

const OnePersonCompany = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Identity proof", icon: "fa-id-card" },
        { title: "Address proof", icon: "fa-location-dot" },
        { title: "Photograph", icon: "fa-camera" },
        { title: "Utility bill of business place", icon: "fa-file-invoice" },
        { title: "Ownership/ Rental/ Lease Proof", icon: "fa-house-chimney" },
        { title: "Nominee Consent (INC-3)", icon: "fa-file-signature" }
    ];

    const cards = [
        {
            title: "OPC Overview",
            icon: "fa-address-card",
            desc: "A One Person Company (OPC) is a corporate entity that allows a single promoter to enjoy the benefits of limited liability while maintaining complete control."
        },
        {
            title: "Limited Liability",
            icon: "fa-shield-halved",
            desc: "Protect your personal assets. In an OPC, the owner's liability is limited to their investment in the company, shielding personal property from business debts."
        },
        {
            title: "Separate Legal Entity",
            icon: "fa-building",
            desc: "An OPC is a distinct legal person in the eyes of the law, allowing it to own property, enter into contracts, and sue or be sued in its own name."
        },
        {
            title: "Perpetual Succession",
            icon: "fa-infinity",
            desc: "The company's existence continues uninterrupted even if the owner changes or passes away, thanks to the mandatory nomination of a second person."
        },
        {
            title: "Easy Transferability",
            icon: "fa-arrow-right-arrow-left",
            desc: "Ownership can be easily transferred by altering the shareholding and directorship, making it simpler than transferring a proprietorship."
        },
        {
            title: "Tax Benefits & Credibility",
            icon: "fa-award",
            desc: "An OPC carries more credibility than a proprietorship, making it easier to secure bank loans, attract vendors, and build trust with customers."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "What is a One Person Company (OPC)?",
            description: "A company formed with only one person as a member, combining the features of a sole proprietorship and a private limited company.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "Is a nominee mandatory for OPC?",
            description: "Yes, every OPC must nominate a person who will become the member of the company in the event of the sole member's death or incapacity.",
            icon: <i className="fa-solid fa-user-check"></i>
        },
        {
            id: 3,
            title: "Can I convert OPC to Private Limited?",
            description: "Yes, an OPC can be converted into a Private Limited Company or Public Limited Company under certain conditions.",
            icon: <i className="fa-solid fa-rotate"></i>
        },
        {
            id: 4,
            title: "What are the compliance requirements?",
            description: "OPCs have fewer compliance requirements compared to private limited companies, but must file annual returns and financial statements with the ROC.",
            icon: <i className="fa-solid fa-list-check"></i>
        },
        {
            id: 5,
            title: "Who can form an OPC?",
            description: "Only a natural person who is an Indian citizen and resident in India is eligible to incorporate an OPC.",
            icon: <i className="fa-solid fa-user-plus"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            {/* Hero Section */}
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-center flex items-center"
                style={{ backgroundImage: "url('/images/logo/one_person_company_hero.png')" }}
            >
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-white/70"></div>

                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    {/* Left Content */}
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">One Person Company Registration</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Get free expert consultation | Process in 5 - 7 days | 6754 Already registered
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
                            Get your OPC registration soon with us!
                        </h2>
                    </div>

                    {/* Right Content - Reusable Form Component */}
                    <ServiceForm title="One Person Company (OPC) Registration" />
                </div>
            </div>

            {/* Carousel Content Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Understanding One Person Company</h2>
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
                        className="pb-16 opc-swiper"
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
                            Got questions? We've got answers. Explore our common queries about One Person Company.
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
                title="One Person Company Consultation"
            />
        </div>
    );
};

export default OnePersonCompany;
