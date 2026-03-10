import React, { useEffect, useState } from 'react';
import ServiceForm from '../../components/ServiceForm';
import ProcessFlow from '../../components/ProcessFlow';
import DocumentsRequired from '../../components/DocumentsRequired';
import Carousel from '../../components/Carousel';
import ConsultModal from '../../components/ConsultModal';

const GstModification = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const procedureSteps = [
        { title: "Amend Application", icon: "fa-file-pen" },
        { title: "Upload documents", icon: "fa-cloud-arrow-up" },
        { title: "Verification", icon: "fa-user-check" },
        { title: "Get Acknowledgement", icon: "fa-clipboard-check" },
        { title: "Get Certificate", icon: "fa-award" }
    ];

    const documents = [
        { title: "GSTIN/ GST Certificate", icon: "fa-certificate" },
        { title: "Details of Amendment", icon: "fa-file-lines" },
        { title: "KYC Documents", icon: "fa-id-card" },
        { title: "Other documents required will be informed by the expert.", icon: "fa-circle-info" },
        { title: "Company documents (other than proprietor)", icon: "fa-building" }
    ];

    const faqs = [
        {
            id: 1,
            title: "What is GST modification?",
            description: "It is the process of amending or updating details in your GST registration.",
            icon: <i className="fa-solid fa-circle-question"></i>
        },
        {
            id: 2,
            title: "Which details can be amended?",
            description: "You can update core or non-core details such as business name, address, authorized signatory, or bank details.",
            icon: <i className="fa-solid fa-pen-to-square"></i>
        },
        {
            id: 3,
            title: "Do I need to submit documents?",
            description: "Yes, supporting documents are required based on the type of amendment requested.",
            icon: <i className="fa-solid fa-file-circle-check"></i>
        },
        {
            id: 4,
            title: "How long does it take?",
            description: "Timelines vary by amendment type and department review, but we help ensure a smooth process.",
            icon: <i className="fa-solid fa-clock"></i>
        },
        {
            id: 5,
            title: "Will I get a new GST certificate?",
            description: "Yes, once approved you receive an updated GST certificate reflecting the changes.",
            icon: <i className="fa-solid fa-award"></i>
        }
    ];

    const processSteps = [
        {
            title: "Drop your Request",
            description: "Share your GST modification requirement with basic details.",
            image: "/images/resource/mailbox_3d_new.png",
            alt: "Drop Request"
        },
        {
            title: "Expert will contact you",
            description: "Our GST expert will verify your amendment details and documents.",
            image: "/images/resource/expert_3d_new.png",
            alt: "Expert Contact"
        },
        {
            title: "Get your solutions",
            description: "We file the amendment application and coordinate with the department.",
            image: "/images/resource/solutions_3d_new.png",
            alt: "Solutions"
        },
        {
            title: "Get your work done",
            description: "Receive acknowledgement and updated GST certificate.",
            image: "/images/resource/completion_3d_new.png",
            alt: "Work Done"
        }
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#1a2b1f]">
            {/* Hero Section */}
            <div
                className="relative min-h-[500px] h-auto lg:h-[650px] w-full bg-cover bg-right flex items-center"
                style={{ backgroundImage: "url('/images/logo/gst-modification.png')" }}
            >
                <div className="absolute inset-0 bg-white/70"></div>

                <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-0">
                    <div className="max-w-4xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">GST Modification</h1>
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
                            Get your GST Modification soon with us!
                        </h2>
                    </div>

                    <ServiceForm title="GST Modification" />
                </div>
            </div>

            {/* GST Modification Overview */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">GST Modification</h2>
                        <div className="w-24 h-1 bg-theme-primary mx-auto"></div>
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                        <div className="absolute -top-10 -left-16 w-48 h-48 bg-theme-primary/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute -bottom-16 -right-10 w-56 h-56 bg-[#1a2b1f]/10 rounded-full blur-3xl animate-pulse"></div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {[
                                {
                                    title: "Keep records accurate",
                                    summary: "Update GST details quickly to avoid mismatches.",
                                    detail: "Amend core or non‑core fields with the right documents."
                                },
                                {
                                    title: "Know your GSTIN",
                                    summary: "GST has been live since July 1, 2017.",
                                    detail: "Your GSTIN remains valid until cancelled or suspended."
                                },
                                {
                                    title: "Special cases",
                                    summary: "Non‑resident and casual taxpayers may be time‑bound.",
                                    detail: "Validity is fixed by the authorities at registration."
                                },
                                {
                                    title: "Simple process",
                                    summary: "Any registered business can request modification.",
                                    detail: "File the amendment with supporting documents."
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

            {/* Procedure for GST Modification */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Procedure for GST Modification</h2>
                        <div className="w-24 h-1 bg-theme-primary mx-auto"></div>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
                        {procedureSteps.map((step, index) => (
                            <div
                                key={index}
                                className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 text-center"
                            >
                                <div className="w-16 h-16 bg-theme-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <i className={`fa-solid ${step.icon} text-2xl text-theme-black`}></i>
                                </div>
                                <h3 className="text-lg font-bold">{step.title}</h3>
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
                            Got questions? We’ve got answers. Explore common queries about GST modification.
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
                title="GST Modification Consultation"
            />
        </div>
    );
};

export default GstModification;
