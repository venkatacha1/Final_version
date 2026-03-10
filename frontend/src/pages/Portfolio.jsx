import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    useEffect(() => {
        if (window.Swiper) {
            new window.Swiper(".case-slider", {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                breakpoints: {
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1200: { slidesPerView: 4 },
                },
            });
        }
    }, []);

    const cases = [
        { category: "Cyber Security", title: "Revolutionizing Brand Strategy", img: "/images/case/case-image1.jpg" },
        { category: "IT Solution", title: "Technology and artificial Maintenance", img: "/images/case/case-image2.jpg" },
        { category: "Business Consultation", title: "Business Strategy to Cut Costs by 30%", img: "/images/case/case-image3.jpg" },
        { category: "Digital Agency", title: "Transforming Legacy Systems", img: "/images/case/case-image4.jpg" }
    ];

    return (
        <>
            <section className="page-title" style={{ backgroundImage: 'url(/images/background/page-title-bg.jpg)' }}>
                <div className="auto-container">
                    <div className="title-outer">
                        <h1 className="title">Case Study</h1>
                        <ul className="page-breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li>Case Study</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="case-section pt-120 pb-120">
                <div className="outer-box">
                    <div className="carousel-outer">
                        <div className="swiper case-slider">
                            <div className="swiper-wrapper">
                                {cases.map((item, index) => (
                                    <div key={index} className="swiper-slide">
                                        <div className="case-block">
                                            <div className="inner-box">
                                                <figure className="image">
                                                    <img src={item.img} alt={item.title} />
                                                </figure>
                                                <div className="content-box">
                                                    <span className="sub-title">{item.category}</span>
                                                    <h4 className="title"><Link to="/portfolio-details">{item.title}</Link></h4>
                                                </div>
                                                <Link className="arry-btn" to="/portfolio-details"><i className="fa-regular fa-arrow-up-right"></i></Link>
                                                <div className="hover-content">
                                                    <span className="sub-title">{item.category}</span>
                                                    <h4 className="title"><Link to="/portfolio-details">{item.title}</Link></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Portfolio;
