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

const GstFormLut = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        { title: "GST Registration Certificate", icon: "fa-file-invoice" },
        { title: "PAN of business & authorised signatory", icon: "fa-id-card" },
        { title: "Aadhaar / Passport of authorised signatory", icon: "fa-passport" },
        { title: "Cancelled cheque / bank statement", icon: "fa-building-columns" },
        { title: "Authorisation letter / Board resolution", icon: "fa-file-signature" },
        { title: "Digital Signature Certificate (companies/LLP)", icon: "fa-key" },
        { title: "Previous LUT/Bond (if renewal)", icon: "fa-clock-rotate-left" }
    ];

    const cards = [
        {
            title: "Who should file LUT",
            icon: "fa-plane-departure",
            desc: "Exporters of goods/services and SEZ suppliers who want zero-rated supplies without paying IGST must submit LUT each financial year."
        },
        {
            title: "Annual validity",
            icon: "fa-calendar-check",
            desc: "A LUT is valid for one financial year. Renewal is required at the start of every FY to continue exporting without IGST."
        },
        {
            title: "Skip blocking working capital",
            icon: "fa-money-bill-wave",
            desc: "Avoid paying IGST upfront on exports and waiting for refunds. LUT lets you ship without cash blockage."
        },
        {
            title: "When to use Bond",
            icon: "fa-scale-balanced",
            desc: "If you have prosecution history for tax evasion over ₹2.5 crore in the past five years, you must furnish a Bond with bank guarantee instead of LUT."
        },
        {
            title: "Turnaround time",
            icon: "fa-clock",
            desc: "With correct KYC and DSC/e-sign, LUT acknowledgement is typically issued within 24-72 working hours."
        },
        {
            title: "Post‑approval compliance",
            icon: "fa-file-pen",
            desc: "Quote LUT ARN on export invoices, file returns on time, and track fulfilment of export obligations to stay compliant."
        }
    ];

    const lutSteps = [
        {
            title: "Share export details",
            description: "Tell us your GSTIN, IEC (if any), nature of exports, and prior LUT/Bond status.",
            image: "/images/resource/mailbox_3d_new.png",
            alt: "Share details"
        },
        {
            title: "KYC & authorisation",
            description: "We verify documents, prepare the LUT declaration and authorisation for your authorised signatory.",
            image: "/images/resource/expert_3d_new.png",
            alt: "KYC verification"
        },
        {
            title: "Online filing with DSC/e‑Sign",
            description: "We submit LUT on the GST portal, attach supporting documents, and sign using DSC or Aadhaar OTP.",
            image: "/images/resource/solutions_3d_new.png",
            alt: "Portal filing"
        },
        {
            title: "Receive ARN & acknowledgement",
            description: "You get the ARN and LUT acknowledgement. We guide you on quoting LUT on invoices and future renewals.",
            image: "/images/resource/completion_3d_new.png",
            alt: "Acknowledgement"
        }
    ];

    const faqs = [
        {
            id: 1,
            title: "What is GST LUT?",
            description: "A Letter of Undertaking lets exporters supply goods or services without paying IGST while undertaking to fulfil export conditions.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "How long is a LUT valid?",
            description: "It remains valid for the financial year in which it is filed. Renewal is needed at the start of the next FY.",
            icon: <i className="fa-solid fa-calendar-days"></i>
        },
        {
            id: 3,
            title: "Can I e‑sign without a DSC?",
            description: "Yes. Proprietors and partnerships can e‑sign with Aadhaar OTP. Companies and LLPs must use a Class 3 DSC.",
            icon: <i className="fa-solid fa-key"></i>
        },
        {
            id: 4,
            title: "What if I miss renewal?",
            description: "You would need to pay IGST on exports or furnish a Bond until a fresh LUT is approved. Timely renewal avoids disruptions.",
            icon: <i className="fa-solid fa-bell-exclamation"></i>
        },
        {
            id: 5,
            title: "Is a bank guarantee required?",
            description: "Only taxpayers with past prosecution for tax evasion over ₹2.5 crore need to furnish a Bond with bank guarantee instead of LUT.",
            icon: <i className="fa-solid fa-shield"></i>
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            {/* Hero Section */}
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/logo/GST-Portal-GST-Portal-New-Functionality-GST-Portal-LUT-Filing-FY-2025-26-taxscan.jpg')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>

                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">GST Form LUT Filing</h1>
                        <p className="text-lg lg:text-xl font-medium mb-4 sm:mb-8">
                            File LUT in days | Export without IGST | 8,000+ LUTs processed
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
                            Zero-rated exports without cash blockage
                        </h2>
                    </div>

                    <ServiceForm title="GST LUT Filing" />
                </div>
            </div>

            {/* Carousel Content Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why File LUT with MakeEasyFilings</h2>
                        <div className="w-24 h-1 bg-theme-primary mx-auto"></div>
                    </div>

                    <Swiper
                        modules={[Pagination, Autoplay, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{ delay: 3200, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-16 lut-swiper"
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
            <ProcessFlow steps={lutSteps} title="GST LUT Filing Process" />

            {/* FAQ Carousel Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Quick answers about filing GST LUT for exports and zero-rated supplies.
                        </p>
                        <div className="w-24 h-1 bg-theme-primary mx-auto mt-6"></div>
                    </div>

                    <Carousel items={faqs} autoplay={true} />
                </div>
            </section>

            

            <ConsultModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="GST Form LUT Consultation"
            />
        </div>
    );
};

export default GstFormLut;
