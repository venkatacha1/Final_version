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

const ISOCertification = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Business Registration Proof", icon: "fa-certificate" },
        { title: "Nature of Business Details", icon: "fa-briefcase" },
        { title: "Product/Service Catalog", icon: "fa-list-check" },
        { title: "Organizational Chart", icon: "fa-sitemap" },
        { title: "KYC of Directors", icon: "fa-address-card" }
    ];

    const cards = [
        {
            title: "Global Standards",
            icon: "fa-earth-americas",
            desc: "Align your business processes with globally recognized ISO standards to enhance international trade."
        },
        {
            title: "Quality Assurance",
            icon: "fa-shield-check",
            desc: "ISO 9001 certification demonstrates your commitment to quality and customer satisfaction consistently."
        },
        {
            title: "Market Advantage",
            icon: "fa-ranking-star",
            desc: "Gain a competitive edge in tenders and contracts where ISO certification is a mandatory requirement."
        },
        {
            title: "Operational Efficiency",
            icon: "fa-gears",
            desc: "Identify and eliminate inefficiencies in your business operations through standardized ISO workflows."
        },
        {
            title: "Trust & Credibility",
            icon: "fa-handshake-angle",
            desc: "Instill trust in your customers and partners by proving your adherence to safety and quality norms."
        },
        {
            title: "Risk Management",
            icon: "fa-user-shield",
            desc: "Proactively identify and mitigate business risks with ISO's structured management systems."
        }
    ];

    const isoStandards = [
        { code: "ISO 9001:2015", name: "Quality Management System", color: "text-amber-600" },
        { code: "ISO 14001:2015", name: "Environmental Management System", color: "text-emerald-600" },
        { code: "ISO 45001:2018", name: "Occupational Health & Safety", color: "text-blue-600" },
        { code: "ISO 22000:2018", name: "Food Safety Management System", color: "text-orange-600" },
        { code: "ISO 27001:2013", name: "Information Security Management", color: "text-purple-600" },
        { code: "ISO 13485:2016", name: "Quality Management - Medical Devices", color: "text-rose-600" },
        { code: "IATF 16949:2016", name: "Automotive Quality Management", color: "text-slate-700" },
        { code: "SA 8000:2014", name: "Social Accountability", color: "text-indigo-600" },
        { code: "FSSC 22000", name: "Food Safety Certification Scheme", color: "text-lime-600" },
        { code: "ISO 21001:2018", name: "Educational Organization Management", color: "text-cyan-600" },
        { code: "ISO 20000:2018", name: "IT Service Management", color: "text-violet-600" },
        { code: "ISO 55001:2014", name: "Asset Management System", color: "text-zinc-600" },
        { code: "ISO 41001:2018", name: "Facility Management System", color: "text-teal-600" },
        { code: "ISO 27018:2014", name: "IT - Security Techniques", color: "text-blue-700" },
        { code: "ISO 39001:2012", name: "Road Traffic Safety Management", color: "text-red-600" },
        { code: "ISO 37001:2016", name: "Anti-bribery management system", color: "text-yellow-700" },
        { code: "ISO 22301:2012", name: "Business Continuity Management", color: "text-sky-600" },
        { code: "ISO 21898:2004", name: "Packaging - FIBCs (Non-Dangerous)", color: "text-brown-600" },
        { code: "ISO 10004:2018", name: "Quality Mgmt - Customer Satisfaction", color: "text-pink-600" },
        { code: "ISO 10668:2010", name: "Brand Valuation Requirements", color: "text-orange-700" },
        { code: "ISO 10002:2018", name: "Quality Mgmt - Complaints Handling", color: "text-green-700" }
    ];

    const faqs = [
        {
            id: 1,
            title: "Which ISO is best for my business?",
            description: "ISO 9001 is general quality management. Others like ISO 14001 (Environment) or ISO 27001 (IT) are specific.",
            icon: <i className="fa-solid fa-circle-info"></i>
        },
        {
            id: 2,
            title: "How long is the certificate valid?",
            description: "Most ISO certifications are valid for 3 years, with annual surveillance audits required to maintain it.",
            icon: <i className="fa-solid fa-calendar-check"></i>
        },
        {
            id: 3,
            title: "Does ISO guarantee success?",
            description: "While it doesn't guarantee success, it significantly improves efficiency and helps in scaling business.",
            icon: <i className="fa-solid fa-chart-line"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-center flex items-center"
                style={{ backgroundImage: "url('/images/logo/images (5).jpg')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">ISO Certification & Quality Standards</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Global recognition | Quality management | Process efficiency
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
                        <h2 className="text-xl lg:text-3xl font-bold leading-relaxed">Elevating Your Business to Global Standards of Quality and Excellence</h2>
                    </div>
                    <ServiceForm title="ISO Certification" />
                </div>
            </div>

            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">The ISO Advantage</h2>
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

            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-theme-primary/5 -skew-x-12 translate-x-1/2"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h6 className="text-theme-primary uppercase tracking-[0.2em] font-bold text-sm mb-4">Standards Repository</h6>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] tracking-tight">
                                Comprehensive <span className="text-theme-primary italic">ISO</span> Frameworks
                            </h2>
                        </div>
                        <div className="text-gray-500 font-medium text-lg border-l-4 border-theme-primary pl-6">
                            Adhering to over 20+ specialized global standards for niche industries.
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {isoStandards.map((std, idx) => (
                            <div key={idx} className="group relative p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-[#0a0a0a] hover:border-[#0a0a0a] hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-2 transition-all duration-500">
                                <div className="absolute top-4 right-6 opacity-0 group-hover:opacity-20 font-black text-4xl text-white transition-opacity duration-500 select-none">
                                    {(idx + 1).toString().padStart(2, '0')}
                                </div>
                                <div className={`text-sm font-bold uppercase tracking-widest mb-4 ${std.color} group-hover:text-theme-primary transition-colors`}>
                                    {std.code}
                                </div>
                                <h4 className="text-xl font-bold text-black group-hover:text-white transition-colors leading-snug">
                                    {std.name}
                                </h4>
                                <div className="mt-6 w-10 h-1 bg-theme-primary group-hover:w-full transition-all duration-700"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <DocumentsRequired documents={documents} />

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
                title="ISO Certification Consultation"
            />
        </div>
    );
};

export default ISOCertification;
