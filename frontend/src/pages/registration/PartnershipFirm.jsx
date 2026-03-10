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

const PartnershipFirm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "PAN Card of Partners", icon: "fa-address-card" },
        { title: "Aadhaar Card of Partners", icon: "fa-id-card" },
        { title: "Partnership Deed", icon: "fa-file-signature" },
        { title: "Address Proof of Business", icon: "fa-house" },
        { title: "Bank Statement", icon: "fa-building-columns" }
    ];

    const cards = [
        {
            title: "Easy to Start",
            icon: "fa-rocket",
            desc: "Registration is not mandatory, making it one of the easiest business forms to start with minimal formalities."
        },
        {
            title: "Shared Responsibility",
            icon: "fa-people-group",
            desc: "Combine resources, expertise, and capital with your partners to build a stronger and more capable business."
        },
        {
            title: "Decision Making",
            icon: "fa-handshake",
            desc: "Balanced decision-making process where partners contribute their unique skills to the growth of the firm."
        },
        {
            title: "Tax Benefits",
            icon: "fa-calculator",
            desc: "Partnership firms enjoy specific tax advantages and simpler compliance compared to corporate structures."
        },
        {
            title: "Unlimited Partners",
            icon: "fa-users",
            desc: "Add more partners as your business grows to inject fresh capital and ideas into the organization."
        },
        {
            title: "Operational Flexibility",
            icon: "fa-gears",
            desc: "Easy to manage and modify the terms of the partnership through a simple supplemental deed whenever required."
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
            title: "Is registration mandatory for Partnership Firm?",
            description: "No, registration is optional under the Indian Partnership Act, 1932, but registered firms enjoy more legal rights.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "What is a Partnership Deed?",
            description: "A written agreement among partners specifying the terms, profit-sharing ratio, and rules for governing the firm.",
            icon: <i className="fa-solid fa-file-contract"></i>
        },
        {
            id: 3,
            title: "What is the maximum number of partners?",
            description: "Currently, the maximum limit for partners in a partnership firm is 50.",
            icon: <i className="fa-solid fa-users"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-center flex items-center"
                style={{ backgroundImage: "url('/images/logo/partnership_firm_hero.png')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Partnership Firm Registration</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Legalize your partnership | Simple process | Expert guidance
                        </p>
                        <div className="mb-4 sm:mb-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-1.5 bg-theme-primary text-[#1a2b1f] px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                <i className="fa-solid fa-video"></i> Connect with us
                            </button>
                        </div>
                        <h2 className="text-xl lg:text-3xl font-bold leading-relaxed">Collaborate and Grow with a Registered Partnership</h2>
                    </div>
                    <ServiceForm title="Partnership Firm Registration" />
                </div>
            </div>

            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Partnership?</h2>
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
                                        <th className="px-6 py-10 text-white font-bold text-lg uppercase tracking-wider text-center border-r border-white/10">Proprietorship</th>
                                        <th className="px-6 py-10 text-[#FFD700] font-black text-lg uppercase tracking-wider text-center border-r border-white/10 bg-white/5 backdrop-blur-sm">Partnership</th>
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
                                            <td className="px-6 py-8 text-center text-lg font-medium text-gray-600 border-r border-gray-50">{row.prop}</td>
                                            <td className="px-6 py-8 text-center text-lg font-bold text-theme-primary border-r border-gray-50 bg-theme-primary/5">{row.part}</td>
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
                title="Partnership Firm Consultation"
            />
        </div>
    );
};

export default PartnershipFirm;
