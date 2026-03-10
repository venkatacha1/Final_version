import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StarBorder from '../components/StarBorder';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            q: "What services does MakeEasyFilings offer?",
            a: "We offer a comprehensive range of business services including Company Registration (Pvt Ltd, LLP, OPC), GST Registration & Filing, Trademark Registration, Import/Export License (IEC), and Virtual Office solutions."
        },
        {
            q: "What documents are required for Private Limited Company registration?",
            a: "The primary documents required include PAN Card and Aadhaar Card of all directors, passport-sized photos, and address proof for the registered office (Electricity Bill/Rent Agreement + NOC). We guide you through the specific requirements based on your entity type."
        },
        {
            q: "How long does the company registration process take?",
            a: "Typically, the registration process for a Private Limited Company takes between 7 to 10 working days, subject to government processing times and document submission accuracy."
        },
        {
            q: "Is GST registration mandatory for all businesses?",
            a: "GST registration is mandatory for businesses with an annual turnover exceeding ₹40 lakhs (₹20 lakhs for service providers and special category states) or for those involved in inter-state e-commerce."
        },
        {
            q: "What is the difference between a Proprietorship and a Private Limited Company?",
            a: "A Proprietorship is the simplest form of business owned by one person with unlimited liability. A Private Limited Company is a separate legal entity with limited liability for its shareholders, making it more suitable for scalable businesses seeking investment."
        },
        {
            q: "Can I register a company at my residential address?",
            a: "Yes, you can use your residential address as the registered office for your company. You will need to provide a utility bill and a No Objection Certificate (NOC) from the owner."
        },
        {
            q: "What is a Virtual Office and how does it help?",
            a: "A Virtual Office provides a professional business address for company and GST registration without the cost of a physical office. It includes mail handling and other office services, perfect for remote teams and startups."
        },
        {
            q: "Do you provide support for Trademark registration?",
            a: "Yes, we assist with Trademark searches, filing applications, and handling objections to help protect your brand identity and intellectual property."
        }
    ];

    return (
        <>
            <section className="page-title" style={{ backgroundImage: 'url(/images/background/page-title-bg.jpg)' }}>
                <div className="auto-container">
                    <div className="title-outer">
                        <h1 className="title">FAQs</h1>
                    </div>
                </div>
            </section>

            <section className="faq-page-wrapper">
                <div className="faq-header">
                    <h2 className="faq-title">Frequently Asked Questions</h2>
                    <p className="faq-subtitle">Common questions about our services, registration process, and compliance.</p>
                </div>

                <div className="faq-container">
                    {faqs.map((faq, index) => (
                        <StarBorder
                            key={index}
                            className={`faq-item-wrapper ${activeIndex === index ? 'active' : ''}`}
                            color="black"
                            speed="4s"
                            onClick={() => toggleFaq(index)}
                        >
                            <div className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                                <button className="faq-question">
                                    {faq.q}
                                    <span className="faq-icon">
                                        <i className={`fa ${activeIndex === index ? 'fa-times' : 'fa-plus'}`}></i>
                                    </span>
                                </button>
                                <div className="faq-answer-wrapper">
                                    <div className="faq-answer">
                                        <div className="faq-answer-content">
                                            {faq.a}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </StarBorder>
                    ))}
                </div>
            </section>
        </>
    );
};

export default FAQ;
