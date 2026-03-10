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

const Bookkeeping = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "Daily Vouchers", icon: "fa-ticket" },
        { title: "Cash/Bank Records", icon: "fa-money-bill-1" },
        { title: "Salary/Payroll Sheets", icon: "fa-users-gear" },
        { title: "Vendor Invoices", icon: "fa-file-invoice" },
        { title: "Customer Receipts", icon: "fa-receipt" }
    ];

    const cards = [
        {
            title: "Daily Data Entry",
            icon: "fa-keyboard",
            desc: "Systematic recording of all daily financial transactions to maintain up-to-date and organized books."
        },
        {
            title: "Bank Reconciliation",
            icon: "fa-building-columns",
            desc: "Regular matching of your company's bank statements with your accounting records to ensure zero discrepancies."
        },
        {
            title: "Payroll Management",
            icon: "fa-user-check",
            desc: "Accurate processing of employee salaries, benefits, and tax deductions to ensure timely payments and compliance."
        },
        {
            title: "Accounts Payable",
            icon: "fa-file-export",
            desc: "Managing and tracking your outgoing payments to vendors and suppliers to maintain good credit and relations."
        },
        {
            title: "Accounts Receivable",
            icon: "fa-file-import",
            desc: "Monitoring customer payments and sending timely reminders to ensure healthy cash flow for your business."
        },
        {
            title: "MIS Reporting",
            icon: "fa-chart-simple",
            desc: "Providing insightful management reports (MIS) every month to help you track business performance effectively."
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "Why is Book-keeping important?",
            description: "It provides an accurate record of your business's financial activities, critical for tax compliance, audits, and business analysis.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "Can I do my own Book-keeping?",
            description: "While possible, professional book-keeping prevents errors and ensures your records follow professional accounting standards.",
            icon: <i className="fa-solid fa-user-pen"></i>
        },
        {
            id: 3,
            title: "Which accounting software do you use?",
            description: "We work with all major software like Tally, Zoho Books, QuickBooks, and can adapt to your preferred platform.",
            icon: <i className="fa-solid fa-database"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/bg/growth-bg.jpg')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">Virtual Book-Keeping Services</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            Bank Reconciliation | Data Entry | Payroll | Accounts Payable
                        </p>
                        <div className="mb-4 sm:mb-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-1.5 bg-theme-primary text-[#1a2b1f] px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                <i className="fa-solid fa-video"></i> Connect with us
                            </button>
                        </div>
                        <h2 className="text-xl lg:text-3xl font-bold leading-relaxed">Focus on Your Growth, While We Handle Your Books</h2>
                    </div>
                    <ServiceForm title="Bookkeeping Services" />
                </div>
            </div>

            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Understanding Book-keeping</h2>
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
                title="Virtual Book-Keeping Consultation"
            />
        </div>
    );
};

export default Bookkeeping;
