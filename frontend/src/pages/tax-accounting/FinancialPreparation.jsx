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

const FinancialPreparation = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Bank Statements", icon: "fa-building-columns" },
        { title: "Purchase & Sales Invoices", icon: "fa-file-invoice" },
        { title: "Expense Vouchers", icon: "fa-receipt" },
        { title: "Asset Purchase Details", icon: "fa-truck-loading" },
        { title: "Previous Year Financials", icon: "fa-clock-rotate-left" }
    ];

    const cards = [
        {
            title: "Balance Sheet",
            icon: "fa-scale-balanced",
            desc: "Accurate preparation of your company's statement of financial position, detailing assets, liabilities, and equity."
        },
        {
            title: "Profit & Loss Account",
            icon: "fa-chart-line",
            desc: "Detailed summary of revenues, costs, and expenses incurred during a specific period to determine net profit."
        },
        {
            title: "Cash Flow Statement",
            icon: "fa-money-bill-transfer",
            desc: "Tracking the inflow and outflow of cash to help you understand your business's liquidity and solvency."
        },
        {
            title: "Accounting Standards",
            icon: "fa-check-double",
            desc: "Ensuring all your financial reports comply with Indian Accounting Standards (Ind AS) and ICAI guidelines."
        },
        {
            title: "Audit Readiness",
            icon: "fa-clipboard-list",
            desc: "Preparing comprehensive schedules and notes to accounts to make your statutory and tax audits smooth."
        },
        {
            title: "Financial Analysis",
            icon: "fa-magnifying-glass-chart",
            desc: "Beyond just numbers, we provide insights into your financial health to support strategic business planning."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "What is Financial Preparation?",
            description: "It involves compiling and organizing a business's financial data into standard reports like Balance Sheet and P&L for stakeholders.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "Is it mandatory for small businesses?",
            description: "Yes, maintaining and preparing financials is crucial for tax filing, loan applications, and assessing business performance.",
            icon: <i className="fa-solid fa-business-time"></i>
        },
        {
            id: 3,
            title: "How often should financials be prepared?",
            description: "While annual preparation is mandatory, monthly or quarterly preparation helps in better real-time business management.",
            icon: <i className="fa-solid fa-calendar-check"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/bg/consult-bg.jpg')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Financial Statement Preparation</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Balance Sheet | P&L Account | Cash Flow | Audit Schedules
                        </p>
                        <div className="mb-4 sm:mb-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-1.5 bg-theme-primary text-[#1a2b1f] px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                <i className="fa-solid fa-video"></i> Connect with us
                            </button>
                        </div>
                        <h2 className="text-xl lg:text-3xl font-bold leading-relaxed">Accurate Financial Reporting for Your Business Success</h2>
                    </div>
                    <ServiceForm title="Financial Preparation" />
                </div>
            </div>

            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Understanding Financial Preparation</h2>
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
                title="Financial Statement Preparation Consultation"
            />
        </div>
    );
};

export default FinancialPreparation;
