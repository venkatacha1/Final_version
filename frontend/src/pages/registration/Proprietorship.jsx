import React, { useEffect, useState } from 'react';
import ServiceForm from '../../components/ServiceForm';
import Carousel from '../../components/Carousel';
import ProcessFlow from '../../components/ProcessFlow';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import DocumentsRequired from '../../components/DocumentsRequired';
import ConsultModal from '../../components/ConsultModal';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const Proprietorship = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Identity proof", icon: "fa-id-card" },
        { title: "Address proof", icon: "fa-location-dot" },
        { title: "Photograph", icon: "fa-camera" },
        { title: "Utility bill of business place", icon: "fa-file-invoice" },
        { title: "Ownership/ Rental/ Lease Proof", icon: "fa-house-chimney" }
    ];

    const cards = [
        {
            title: "Sole Entity Overview",
            icon: "fa-address-card",
            desc: "A sole proprietorship is a business managed by one individual. Any Indian citizen can easily form this entity with our expert guidance, making it perfect for self-employed professionals."
        },
        {
            title: "Easy Online Formation",
            icon: "fa-file-circle-check",
            desc: "No physical documents are required. We facilitate the entire registration process online with minimal paperwork, ensuring you can start and run your business without complications."
        },
        {
            title: "Simplified Taxation",
            icon: "fa-calculator",
            desc: "Enjoy lower compliance requirements. Mandatory tax filing ensures transparency with the government and allows your business to avail valuable subsidies and schemes."
        },
        {
            title: "Funding & Investment",
            icon: "fa-vault",
            desc: "Businesses are funded through savings, borrowings, or bank loans. While you cannot sell shares, it offers complete financial control for owners with sufficient capital."
        },
        {
            title: "Why Founders Choose It",
            icon: "fa-thumbs-up",
            desc: "It is the oldest and simplest form of entity, ideal for beginners to learn business dynamics and generate savings before scaling to larger corporate structures."
        },
        {
            title: "Risk & Autonomy",
            icon: "fa-shield-halved",
            desc: "Benefit from absolute decision-making power. While the proprietor is responsible for all liabilities, the simplicity of the structure minimizes organizational risk."
        }
    ];

    const comparisonData = [
        { feature: "Liability", icons: "fa-shield-halved", prop: "Unlimited", part: "Unlimited", llp: "Limited", pvt: "Limited", public: "Limited" },
        { feature: "Legal Status", icons: "fa-identity-card", prop: "No Separate Entity", part: "No Separate Entity", llp: "Separate Entity", pvt: "Separate Entity", public: "Separate Entity" },
        { feature: "Stability", icons: "fa-infinity", prop: "Depends on Owner", part: "Dissolves on death", llp: "Perpetual", pvt: "Perpetual", public: "Perpetual" },
        { feature: "Fund Raising", icons: "fa-sack-dollar", prop: "Very Low", part: "Low", llp: "Moderate", pvt: "High", public: "Unlimited" },
        { feature: "Compliance", icons: "fa-list-check", prop: "Minimal", part: "Low", llp: "Low", pvt: "Moderate", public: "High" }
    ];

    const faqs = [
        {
            id: 1,
            title: "What is a Sole Proprietorship?",
            description: "A business owned and run by one person where there is no legal distinction between the owner and the business entity.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "How long does it take to register?",
            description: "Generally, it takes 1-3 business days to get all your registrations in order, depending on the nature of your business.",
            icon: <i className="fa-solid fa-clock"></i>
        },
        {
            id: 3,
            title: "Is physical presence required?",
            description: "No, the entire process is conducted online by MakeEasyFilings. You don't need to visit any office or submit physical copies.",
            icon: <i className="fa-solid fa-cloud-arrow-up"></i>
        },
        {
            id: 4,
            title: "What are the compliance requirements?",
            description: "Proprietorships have minimal annual compliance, primarily limited to Income Tax filing and GST returns (if registered).",
            icon: <i className="fa-solid fa-list-check"></i>
        },
        {
            id: 5,
            title: "Can I convert to a Pvt Ltd company?",
            description: "Yes, once your business grows, you can easily convert your proprietorship into a Private Limited Company or an LLP.",
            icon: <i className="fa-solid fa-arrow-right-arrow-left"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            {/* Hero Section */}
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-center flex items-center"
                style={{ backgroundImage: "url('/images/logo/Proprietorship Registration.jpg')" }}
            >
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-white/70"></div>

                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    {/* Left Content */}
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Get Proprietorship Registration</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Get free expert consultation | Process in a days | 6754 Already registered
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
                            Start your business easily - individual | freelancer
                        </h2>
                    </div>

                    {/* Right Content - Reusable Form Component */}
                    <ServiceForm title="Proprietorship Registration" />
                </div>
            </div>

            {/* Carousel Content Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Understanding Proprietorship</h2>
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

            {/* Benefits Table Section */}
            {/* Unified Comparison Matrix Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-theme-primary/5 -skew-x-12 translate-x-1/2"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10">
                    <div className="text-center mb-16">
                        <h6 className="text-theme-primary uppercase tracking-[0.3em] font-bold text-sm mb-4">Strategic Decision Maker</h6>
                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-[#0a0a0a] tracking-tight leading-none mb-6">
                            Business Selection <br />
                            <span className="text-theme-primary italic font-serif text-5xl lg:text-6xl">Matrix</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-theme-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="max-w-6xl mx-auto overflow-hidden rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all hover:shadow-2xl">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[1000px]">
                                <thead>
                                    <tr className="bg-[#0a0a0a]">
                                        <th className="px-6 py-10 text-white font-bold text-lg uppercase tracking-wider border-r border-white/10 sticky left-0 bg-[#0a0a0a] z-20">Key Features</th>
                                        <th className="px-6 py-10 text-[#FFD700] font-black text-lg uppercase tracking-wider text-center border-r border-white/10 bg-white/5 backdrop-blur-sm">Proprietorship</th>
                                        <th className="px-6 py-10 text-white font-bold text-lg uppercase tracking-wider text-center border-r border-white/10">Partnership</th>
                                        <th className="px-6 py-10 text-white font-bold text-lg uppercase tracking-wider text-center border-r border-white/10">LLP</th>
                                        <th className="px-6 py-10 text-white font-bold text-lg uppercase tracking-wider text-center border-r border-white/10">Private Ltd</th>
                                        <th className="px-6 py-10 text-white font-bold text-lg uppercase tracking-wider text-center">Public Ltd</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {comparisonData.map((row, idx) => (
                                        <tr key={idx} className="group hover:bg-gray-50/80 transition-all duration-500">
                                            <td className="px-6 py-8 border-r border-gray-50 sticky left-0 bg-white group-hover:bg-gray-50/80 z-10">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-xl bg-theme-primary/10 flex items-center justify-center shrink-0 group-hover:bg-theme-primary transition-all duration-500 shadow-sm">
                                                        <i className={`fa-solid ${row.icons} text-lg text-theme-primary group-hover:text-white transition-colors`}></i>
                                                    </div>
                                                    <span className="text-lg font-bold text-[#0a0a0a] tracking-tight">{row.feature}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-8 text-center text-lg font-bold text-theme-primary border-r border-gray-50 bg-theme-primary/5">{row.prop}</td>
                                            <td className="px-6 py-8 text-center text-lg font-medium text-gray-600 border-r border-gray-50">{row.part}</td>
                                            <td className="px-6 py-8 text-center text-lg font-medium text-gray-600 border-r border-gray-50">{row.llp}</td>
                                            <td className="px-6 py-8 text-center text-lg font-medium text-gray-600 border-r border-gray-50">{row.pvt}</td>
                                            <td className="px-6 py-8 text-center text-lg font-medium text-gray-600">{row.public}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-theme-primary/5 py-6 px-10 border-t border-gray-100 italic text-theme-primary text-center font-bold tracking-wide">
                            Choosing the right structure is the first step toward long-term business success.
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Flow Section */}
            <ProcessFlow />

            {/* FAQ Carousel Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Got questions? We've got answers. Explore our common queries about Proprietorship.
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
                title="Proprietorship Registration Consultation"
            />
        </div>
    );
};

export default Proprietorship;
