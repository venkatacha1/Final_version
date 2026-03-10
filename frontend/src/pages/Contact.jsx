import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config/api';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [activeMap, setActiveMap] = useState(0);

    const maps = [
        {
            title: "Head Office (Chennai)",
            url: "https://maps.google.com/maps?q=Spencer+Plaza+Mall+Mount+Road+Annasalai+Chennai&t=&z=13&ie=UTF8&iwloc=&output=embed"
        },
        {
            title: "Branch Office (Kerala)",
            url: "https://maps.google.com/maps?q=Achus+Apartment+Civil+Lane+Road+Thrissur+Kerala&t=&z=13&ie=UTF8&iwloc=&output=embed"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveMap((prev) => (prev + 1) % maps.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [maps.length]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const mobileDigits = (formData.mobile || '').replace(/\D/g, '');
        const phoneRegex = /^[0-9]{10,15}$/;
        if (!phoneRegex.test(mobileDigits)) {
            setStatus({ type: 'error', message: 'Please enter a valid mobile number.' });
            return;
        }

        setStatus({ type: 'info', message: 'Sending...' });
        try {
            await axios.post(`${API_BASE_URL}/v1/fillings`, {
                ...formData,
                mobile: mobileDigits,
                serviceName: 'General Inquiry'
            });
            setStatus({ type: 'success', message: 'Message sent successfully!' });
            setFormData({ name: '', email: '', mobile: '', message: '' });
        } catch (error) {
            console.error(error);
            setStatus({ type: 'error', message: 'Failed to send message.' });
        }
    };

    return (
        <>
            <style jsx>{`
                .contact-gradient-bg {
                    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                }
                
                .glass-card {
                    background: rgba(255, 255, 255, 0.98);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.5);
                    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.08);
                    transition: all 0.3s ease;
                    border-radius: 30px;
                }
                
                .form-label-modern {
                    font-weight: 600;
                    font-size: 14px;
                    color: #444;
                    margin-bottom: 8px;
                    display: block;
                    padding-left: 5px;
                }

                .input-wrapper {
                    position: relative;
                    margin-bottom: 5px;
                }
                
                .input-wrapper i {
                    position: absolute;
                    left: 20px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #d4a017;
                    font-size: 18px;
                    z-index: 10;
                    transition: all 0.3s ease;
                    width: 20px;
                    text-align: center;
                }

                .input-wrapper textarea + i {
                    top: 25px;
                    transform: none;
                }
                
                .form-control-modern {
                    border: 2px solid #edeff2;
                    border-radius: 16px;
                    padding: 16px 20px 16px 55px;
                    font-size: 16px;
                    transition: all 0.3s ease;
                    background: #fdfdfd;
                    width: 100%;
                    color: #333;
                }
                
                .form-control-modern:focus {
                    border-color: #f9d74f;
                    background: #ffffff;
                    box-shadow: 0 5px 20px rgba(249, 215, 79, 0.15);
                    outline: none;
                }

                .form-control-modern::placeholder {
                    color: #999;
                    font-weight: 400;
                }

                .input-wrapper:focus-within i {
                    color: #b8860b;
                    transform: translateY(-50%) scale(1.1);
                }
                
                .btn-submit-modern {
                    background: linear-gradient(135deg, #f9d74f 0%, #d4a017 100%);
                    border: none;
                    padding: 18px 50px;
                    border-radius: 50px;
                    font-weight: 700;
                    font-size: 17px;
                    color: #000;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    box-shadow: 0 10px 30px rgba(212, 160, 23, 0.3);
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                }
                
                .btn-submit-modern:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 40px rgba(212, 160, 23, 0.4);
                    background: linear-gradient(135deg, #d4a017 0%, #f9d74f 100%);
                }

                .btn-submit-modern:active {
                    transform: translateY(-2px);
                }
                
                .map-container {
                    border-radius: 30px;
                    overflow: hidden;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
                    position: relative;
                }
                
                .map-badge {
                    position: absolute;
                    top: 25px;
                    right: 25px;
                    z-index: 10;
                    background: #f9d74f;
                    color: #000;
                    padding: 12px 24px;
                    border-radius: 50px;
                    font-weight: 700;
                    font-size: 14px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                    border: 2px solid #fff;
                }
                
                .address-card {
                    background: #fff;
                    border-radius: 24px;
                    padding: 35px;
                    height: 100%;
                    transition: all 0.4s ease;
                    border: 2px solid transparent;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
                }
                
                .address-card.active {
                    border-color: #f9d74f;
                    box-shadow: 0 15px 50px rgba(249, 215, 79, 0.25);
                    transform: translateY(-5px);
                }
                
                .icon-box-modern {
                    width: 75px;
                    height: 75px;
                    background: linear-gradient(135deg, #f9d74f 0%, #d4a017 100%);
                    border-radius: 22px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 8px 25px rgba(212, 160, 23, 0.25);
                    margin-bottom: 25px;
                }
                
                .contact-info-card {
                    background: #fff;
                    border-radius: 24px;
                    padding: 40px;
                    transition: all 0.4s ease;
                    border: 1px solid #eee;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
                }
                
                .contact-info-card:hover {
                    border-color: #f9d74f;
                    transform: translateY(-8px);
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
                }
                
                .section-title-modern {
                    position: relative;
                    padding-bottom: 25px;
                    margin-bottom: 35px;
                    font-size: 36px;
                }
                
                .section-title-modern::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 100px;
                    height: 5px;
                    background: #f9d74f;
                    border-radius: 10px;
                }

                .badge-top {
                    background: #f9d74f;
                    color: #000;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    padding: 10px 25px;
                    border-radius: 50px;
                    font-size: 13px;
                    margin-bottom: 20px;
                    display: inline-block;
                }

                @media (max-width: 768px) {
                    .glass-card {
                        padding: 30px 20px !important;
                        border-radius: 20px;
                    }
                    .section-title-modern {
                        font-size: 28px;
                    }
                    .form-control-modern {
                        padding: 18px 20px 18px 55px;
                        font-size: 17px;
                    }
                    .form-label-modern {
                        font-size: 15px;
                        margin-bottom: 10px;
                    }
                    .btn-submit-modern {
                        width: 100%;
                        padding: 20px 30px;
                        font-size: 18px;
                        justify-content: center;
                    }
                    .badge-top {
                        font-size: 11px;
                        padding: 8px 20px;
                    }
                }
            `}</style>

            <section className="page-title" style={{ backgroundImage: 'url(/images/bg/page-title-bg.jpg)' }}>
                <div className="auto-container">
                    <div className="title-outer">
                        <h1 className="title">Contact Us</h1>
                    </div>
                </div>
            </section>

            <section className="contact-details pt-5 pb-5 contact-gradient-bg">
                <div className="container py-5">

                    {/* Contact Form */}
                    <div className="row mb-5">
                        <div className="col-lg-12">
                            <div className="glass-card p-5">
                                <div className="text-center mb-5">
                                    <span className="badge-top">Get in Touch</span>
                                    <h2 className="fw-bold mb-3 section-title-modern">Send us a Message</h2>
                                    <p className="text-muted fs-5">Have a question? We're here to help you growing your business.</p>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-4">
                                        <div className="col-md-4">
                                            <label className="form-label-modern">Full Name</label>
                                            <div className="input-wrapper">
                                                <i className="fa-solid fa-user"></i>
                                                <input
                                                    name="name"
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="form-control-modern"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label-modern">Email Address</label>
                                            <div className="input-wrapper">
                                                <i className="fa-solid fa-envelope"></i>
                                                <input
                                                    name="email"
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="form-control-modern"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label-modern">Phone Number</label>
                                            <div className="input-wrapper">
                                                <i className="fa-solid fa-phone"></i>
                                                <span className="position-absolute fw-bold text-muted" style={{ left: '42px', top: '51%', transform: 'translateY(-50%)', zIndex: 10 }}>+91</span>
                                                <input
                                                    name="mobile"
                                                    type="tel"
                                                    required
                                                    value={formData.mobile}
                                                    onChange={handleChange}
                                                    className="form-control-modern"
                                                    style={{ paddingLeft: '80px' }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <label className="form-label-modern">Message Details</label>
                                            <div className="input-wrapper">
                                                <i className="fa-solid fa-message"></i>
                                                <textarea
                                                    name="message"
                                                    required
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    className="form-control-modern"
                                                    rows="5"
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12 text-center mt-5">
                                            <button type="submit" className="btn-submit-modern">
                                                <i className="fa-solid fa-paper-plane"></i>
                                                Send Your Message
                                            </button>
                                        </div>
                                    </div>
                                    {status.message && (
                                        <div className={`alert mt-4 ${status.type === 'error' ? 'alert-danger' : 'alert-success'} rounded-4 p-4 border-0 shadow-sm`}>
                                            <i className={`fa-solid ${status.type === 'error' ? 'fa-circle-xmark' : 'fa-circle-check'} me-2`}></i>
                                            {status.message}
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Map & Addresses */}
                    <div className="row g-4 align-items-stretch mb-5">
                        <div className="col-lg-7">
                            <div className="map-container h-100 position-relative" style={{ minHeight: '500px' }}>
                                <div className="map-badge">
                                    <i className="fa-solid fa-location-dot me-2"></i>
                                    {maps[activeMap].title}
                                </div>
                                <iframe
                                    key={activeMap}
                                    src={maps[activeMap].url}
                                    style={{ border: 0, width: '100%', height: '100%', minHeight: '500px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="fade-in-map"
                                ></iframe>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="d-flex flex-column h-100 gap-4">
                                {/* Head Office */}
                                <div className={`address-card ${activeMap === 0 ? 'active' : ''}`}>
                                    <div className="d-flex align-items-start gap-4">
                                        <div className="icon-box-modern flex-shrink-0">
                                            <i className="fa-solid fa-building text-dark" style={{ fontSize: '28px' }}></i>
                                        </div>
                                        <div>
                                            <h4 className="fw-bold mb-3" style={{ color: '#1a1a1a' }}>Head Office (Chennai)</h4>
                                            <p className="text-muted mb-3 lh-lg">
                                                F203, Phase 3, Spencer Plaza Mall,<br />
                                                Mount Road, Annasalai,<br />
                                                Chennai - 600 002
                                            </p>
                                            <small className="text-muted fw-semibold">
                                                <i className="fa-solid fa-shield-halved me-2 text-warning"></i>
                                                Powered by Finserve Capricon Private Limited
                                            </small>
                                        </div>
                                    </div>
                                </div>

                                {/* Branch Office */}
                                <div className={`address-card ${activeMap === 1 ? 'active' : ''}`}>
                                    <div className="d-flex align-items-start gap-4">
                                        <div className="icon-box-modern flex-shrink-0">
                                            <i className="fa-solid fa-map-location-dot text-dark" style={{ fontSize: '28px' }}></i>
                                        </div>
                                        <div>
                                            <h4 className="fw-bold mb-3" style={{ color: '#1a1a1a' }}>Branch Office (Kerala)</h4>
                                            <p className="text-muted mb-0 lh-lg">
                                                No. 54/1419, 2nd Floor, Achus Apartment,<br />
                                                Civil Lane Road, Near Collectorate Office,<br />
                                                Ayyanthole, Thrissur, Kerala - 680003
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Contacts */}
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="contact-info-card text-center">
                                        <div className="icon-box-modern mx-auto mb-4">
                                            <i className="fa-solid fa-headset text-dark" style={{ fontSize: '28px' }}></i>
                                        </div>
                                        <h5 className="fw-bold mb-3">Customer Support</h5>
                                        <p className="mb-0">
                                            <a href="tel:+919500031413" className="text-dark fw-semibold text-decoration-none hover-text-warning">
                                                +91 95000 31413
                                            </a>
                                            <span className="mx-2">|</span>
                                            <a href="tel:+918925152220" className="text-dark fw-semibold text-decoration-none hover-text-warning">
                                                +91 89251 52220
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="contact-info-card text-center">
                                        <div className="icon-box-modern mx-auto mb-4">
                                            <i className="fa-solid fa-envelope text-dark" style={{ fontSize: '28px' }}></i>
                                        </div>
                                        <h5 className="fw-bold mb-3">Email Us</h5>
                                        <p className="mb-0">
                                            <a href="mailto:info@makeeasyfilings.com" className="text-dark fw-semibold text-decoration-none hover-text-warning">
                                                info@makeeasyfilings.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Contact;


