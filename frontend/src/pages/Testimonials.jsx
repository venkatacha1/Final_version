import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
    useEffect(() => {
        // Initialize swiper if available via script.js or local init
        if (window.Swiper) {
            new window.Swiper(".testimonial-slider-three", {
                loop: true,
                navigation: {
                    nextEl: ".testimonial-next-three",
                    prevEl: ".testimonial-prev-three",
                },
            });
        }
    }, []);

    const testimonials = [
        {
            text: "Ascend the mountain not to plant your flag, but to embrace the challenge, savour the journey, and marvel at the view. Climb to experience the world, not for the world to notice you. This is why they stand out journey, and marvel at the view experience the world, not to notice",
            name: "Robert J. Hare",
            role: "Business Owner"
        },
        {
            text: "Ascend the mountain not to plant your flag, but to embrace the challenge, savour the journey, and marvel at the view. Climb to experience the world, not for the world to notice you. This is why they stand out journey, and marvel at the view experience the world, not to notice",
            name: "Kathryn Murphy",
            role: "Web Designer"
        },
        {
            text: "Ascend the mountain not to plant your flag, but to embrace the challenge, savour the journey, and marvel at the view. Climb to experience the world, not for the world to notice you. This is why they stand out journey, and marvel at the view experience the world, not to notice",
            name: "Dianne Russell",
            role: "Junior manager"
        }
    ];

    return (
        <>
            <section className="page-title" style={{ backgroundImage: 'url(/images/background/page-title-bg.jpg)' }}>
                <div className="auto-container">
                    <div className="title-outer">
                        <h1 className="title">Testimonial</h1>
                        <ul className="page-breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li>Testimonial</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="testimonial-section-three">
                <div className="sec-wrp pb-50 pt-120 mt-120 mb-120">
                    <div className="sec-shape">
                        <img className="animation__rotate" src="/images/shape/dual-circle420.png" alt="Image" />
                    </div>
                    <div className="container">
                        <div className="outer-box">
                            <div className="row g-5">
                                <div className="col-xl-7 order-2 order-xl-1">
                                    <div className="sec-title mb-30">
                                        <h6 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Testimonial</h6>
                                        <div className="flex-content">
                                            <h2 className="title text-white wow splt-txt" data-splitting>What our customers say <span className="font-weight-300">about us</span></h2>
                                            <div className="btn-wrp">
                                                <button className="testimonial-prev-three"><i className="fa-regular fa-angle-left"></i></button>
                                                <button className="testimonial-next-three"><i className="fa-regular fa-angle-right"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper testimonial-slider-three">
                                        <div className="swiper-wrapper">
                                            {testimonials.map((t, idx) => (
                                                <div key={idx} className="swiper-slide">
                                                    <div className="testimonial-block-three">
                                                        <p className="text">{t.text}</p>
                                                        <div className="info">
                                                            <h4 className="title">{t.name}/<span>{t.role}</span></h4>
                                                            <img src="/images/icon/testimonial-three-icon.png" alt="Icon" />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5 order-1 order-xl-2 image-column d-none d-sm-block">
                                    <div className="inner-column">
                                        <figure className="image">
                                            <img src="/images/testimonial/testimonial-three-image.png" alt="Image" />
                                            <div className="icon">
                                                <svg width="33" height="25" viewBox="0 0 33 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M29.1965 1.98168C30.9987 3.96415 32.0801 6.12685 32.0801 9.73134C32.0801 16.0392 27.5745 21.6262 21.2666 24.5098L19.6446 22.1668C25.592 18.9228 26.8536 14.7776 27.214 12.0743C26.3129 12.6149 25.0513 12.7952 23.7897 12.6149C20.5457 12.2545 18.0225 9.73134 18.0225 6.30707C18.0225 4.68505 18.7434 3.06303 19.8248 1.80146C21.0864 0.539885 22.5282 -0.000789642 24.3304 -0.000789642C26.3129 -0.000789642 28.1151 0.900331 29.1965 1.98168ZM11.174 1.98168C12.9763 3.96415 14.0576 6.12685 14.0576 9.73134C14.0576 16.0392 9.55198 21.6262 3.24412 24.5098L1.6221 22.1668C7.56951 18.9228 8.83109 14.7776 9.19153 12.0743C8.29041 12.6149 7.02884 12.7952 5.76727 12.6149C2.52322 12.2545 7.62939e-05 9.73134 7.62939e-05 6.30707C7.62939e-05 4.68505 0.720974 3.06303 1.80232 1.80146C2.88367 0.539885 4.50569 -0.000789642 6.30794 -0.000789642C8.29041 -0.000789642 10.0927 0.900331 11.174 1.98168Z" fill="#051B05" />
                                                </svg>
                                            </div>
                                            <h3 className="title">“Awesome Work”</h3>
                                        </figure>
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

export default Testimonials;
