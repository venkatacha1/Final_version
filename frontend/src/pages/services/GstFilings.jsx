import React, { useEffect, useState } from 'react';
import ServiceForm from '../../components/ServiceForm';
import ProcessFlow from '../../components/ProcessFlow';
import DocumentsRequired from '../../components/DocumentsRequired';
import Carousel from '../../components/Carousel';
import ConsultModal from '../../components/ConsultModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const GstFilings = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const whyCards = [
        {
            title: "Mandatory Compliance",
            icon: "fa-file-invoice",
            desc: "GST-registered businesses must file returns on time, even if there are no sales or purchases."
        },
        {
            title: "Avoid Penalties",
            icon: "fa-shield-halved",
            desc: "Timely filing helps you avoid late fees and interest charged by the GST department."
        },
        {
            title: "Claim Input Tax Credit",
            icon: "fa-receipt",
            desc: "Filing sales and purchase returns enables you to claim ITC and meet tax obligations."
        },
        {
            title: "Build Financial Credibility",
            icon: "fa-building-columns",
            desc: "Regular filing builds credibility with banks and lenders for business loans."
        }
    ];

    const gstReturns = [
        {
            name: "GSTR 1",
            description: "Outward supply return for all B2B and B2C supplies.",
            due: "10th of every month"
        },
        {
            name: "GSTR 2",
            description: "Inward supply return.",
            due: "15th of every month"
        },
        {
            name: "GSTR 3",
            description: "Monthly return for inward supplies.",
            due: "20th of every month"
        },
        {
            name: "GSTR 4",
            description: "Return for composition scheme suppliers.",
            due: "18th of every month"
        },
        {
            name: "GSTR 5",
            description: "Return for non-resident taxable persons covering inward and outward supplies.",
            due: "20th of every month"
        },
        {
            name: "GSTR 6",
            description: "Return for Input Service Distributors.",
            due: "13th of every month"
        },
        {
            name: "GSTR 7",
            description: "Return for monthly tax deductors.",
            due: "10th of every month"
        },
        {
            name: "GSTR 8",
            description: "Monthly return for e-commerce operators.",
            due: "10th of every month"
        },
        {
            name: "GSTR 9",
            description: "Annual return for all GST taxpayers; audit required if turnover exceeds 2 crore.",
            due: "On or before 31st December every year"
        },
        {
            name: "GSTR 10",
            description: "Final return after GST cancellation.",
            due: "Within 3 months from the date of cancellation"
        },
        {
            name: "GSTR 11",
            description: "Return for UIN holders to claim refunds on inward supplies.",
            due: "As applicable"
        }
    ];

    const documents = [
        { title: "GST Certificate", icon: "fa-certificate" },
        { title: "Monthly Purchase Data", icon: "fa-cart-shopping" },
        { title: "Monthly Sales Data", icon: "fa-chart-line" },
        { title: "Bank Account Statement", icon: "fa-building-columns" },
        { title: "Input Tax Credit Reconciliation", icon: "fa-file-circle-check" }
    ];

    const faqs = [
        {
            id: 1,
            title: "What is a GST return?",
            description: "A GST return is a document containing details of sales, purchases, and tax liability filed with GST authorities.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "Do I need to file GST if there is no sale?",
            description: "Yes. Nil returns must be filed even if there are no transactions during a tax period.",
            icon: <i className="fa-solid fa-file-circle-check"></i>
        },
        {
            id: 3,
            title: "How often should GST returns be filed?",
            description: "Return frequency can be monthly, quarterly, or annually depending on your GST registration category.",
            icon: <i className="fa-solid fa-calendar-days"></i>
        },
        {
            id: 4,
            title: "What happens if I miss the due date?",
            description: "Late filing can attract penalties and interest, and may impact your compliance rating.",
            icon: <i className="fa-solid fa-triangle-exclamation"></i>
        },
        {
            id: 5,
            title: "Can I claim Input Tax Credit (ITC)?",
            description: "Yes, if your purchases are eligible and properly reported, you can claim ITC while filing returns.",
            icon: <i className="fa-solid fa-receipt"></i>
        }
    ];

    const processSteps = [
        {
            title: "Drop your Request",
            description: "Share your GST details and filing requirements through our quick form.",
            image: "/images/resource/mailbox_3d_new.png",
            alt: "Drop Request"
        },
        {
            title: "Expert will contact you",
            description: "Our GST expert will verify data, invoices, and timelines.",
            image: "/images/resource/expert_3d_new.png",
            alt: "Expert Contact"
        },
        {
            title: "Get your solutions",
            description: "We prepare and file your GST returns accurately and on time.",
            image: "/images/resource/solutions_3d_new.png",
            alt: "Solutions"
        },
        {
            title: "Get your work done",
            description: "Receive filing confirmation and stay compliant without hassle.",
            image: "/images/resource/completion_3d_new.png",
            alt: "Work Done"
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            {/* Hero Section */}
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/logo/Gemini_Generated_Image_wwqa87wwqa87wwqa.png')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>

                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">GST Return Filings</h1>
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
                            File your GST returns on time with expert support
                        </h2>
                    </div>

                    <ServiceForm title="GST Return Filings" />
                </div>
            </div>

            {/* GST Filings Overview */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">GST Filings</h2>
                        <div className="w-24 h-1 bg-theme-primary mx-auto"></div>
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                        <div className="absolute -top-10 -left-16 w-48 h-48 bg-theme-primary/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute -bottom-16 -right-10 w-56 h-56 bg-[#1a2b1f]/10 rounded-full blur-3xl animate-pulse"></div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {[
                                {
                                    title: "How GST works",
                                    summary: "GST taxes value added at every stage of supply.",
                                    detail: "Input tax credit lets you offset taxes paid on purchases against sales."
                                },
                                {
                                    title: "What is a return?",
                                    summary: "A GST return reports sales, purchases, and tax liability.",
                                    detail: "It helps determine your net GST payable for the period."
                                },
                                {
                                    title: "Filing frequency",
                                    summary: "Returns can be monthly, quarterly, or annual.",
                                    detail: "The frequency depends on your GST category and turnover."
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="group relative p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-theme-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="relative">
                                        <div className="w-10 h-10 mb-5 rounded-xl bg-theme-primary/20 text-theme-black flex items-center justify-center font-bold">
                                            0{index + 1}
                                        </div>
                                        <h3 className="text-lg font-bold text-[#1a2b1f] mb-2">{item.title}</h3>
                                        <p className="text-gray-600 text-base leading-relaxed">
                                            {item.summary}
                                        </p>
                                        <p className="text-gray-500 text-sm leading-relaxed mt-3 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500">
                                            {item.detail}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why GST Filings */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why GST Filings?</h2>
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
                        className="pb-16 gst-filings-swiper"
                    >
                        {whyCards.map((card, index) => (
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

            {/* Types of Filing GST */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Types of Filing GST &amp; Due Date</h2>
                        <div className="w-24 h-1 bg-theme-primary mx-auto"></div>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {gstReturns.map((gstReturn, index) => (
                            <div
                                key={index}
                                className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold">{gstReturn.name}</h3>
                                    <span className="text-xs font-bold uppercase tracking-wider bg-theme-primary/20 text-theme-black px-3 py-1 rounded-full">
                                        Due
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-4">{gstReturn.description}</p>
                                <p className="text-sm font-semibold text-[#1a2b1f]">{gstReturn.due}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Documents Required Section */}
            <DocumentsRequired documents={documents} />

            <ProcessFlow steps={processSteps} />

            {/* FAQ Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Got questions? We’ve got answers. Explore common queries about GST filings.
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
                title="GST Return Filings Consultation"
            />
        </div>
    );
};

export default GstFilings;
