import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
    const [activeFaq, setActiveFaq] = useState(1);

    const faqs = [
        { id: 0, q: "1. Do you offer marketing contracts or relationships?", a: "Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum." },
        { id: 1, q: "2. What kind of marketing efforts do you specialize ?", a: "Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum." },
        { id: 2, q: "3. Can I use the demos made by Ewebot?", a: "Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum." },
        { id: 3, q: "4. What everybody ought to know about digital marketing?", a: "Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum." }
    ];

    const services = [
        "Web Development",
        "UI/UX Design",
        "Digital Marketing",
        "Product Design",
        "Branding & Illustration",
        "Mobile Solutions",
        "App Development"
    ];

    return (
        <>
            <section className="page-title" style={{ backgroundImage: 'url(/images/background/page-title-bg.jpg)' }}>
                <div className="auto-container">
                    <div className="title-outer">
                        <h1 className="title">Service Details</h1>
                        <ul className="page-breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li>Service Details</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="services-details pt-120 pb-120">
                <div className="container">
                    <div className="row align-items-lg-center">
                        <div className="col-lg-6">
                            <div className="sec-title mb-40">
                                <h6 className="sub-title wow fadeInUp bg-transparent ps-0" data-wow-delay="00ms" data-wow-duration="1500ms">Service Details</h6>
                                <h2 className="title mb-30 wow splt-txt" data-splitting>Product Devlopment <br className="d-none d-lg-block" /> For Butter Business</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project-details__top mt-lg-5">
                                <div className="text mb-40">Rorem ipsum dolor sit ametconsectetur adipiscing elit,tempor Rorem ipsum dolor sit ametconsectetur adipiscing elit, sed do eiusmod temporRorem ipsum dolor</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="services-details__content position-relative my-5">
                                <img src="/images/resource/service-details.jpg" alt="Service Details" />
                                <div className="btn-wrp d-flex align-items-center">
                                    <a className="video-btn playbtnanim wow fadeInLeft" data-wow-delay="700ms" data-wow-duration="1500ms" href="https://www.youtube.com/watch?v=Lplq8RjQ0zU" data-fancybox="gallery" data-caption=""><i className="fa-sharp fa-solid fa-play"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8">
                            <div className="services-details__content">
                                <h3>Description</h3>
                                <p className="mb-30">UX design refers to the term “user experience design”, while UI stands for “user interface design”. Both elements are crucial to a product and work closely together. But despite their professional relationship, the roles themselves are quite different, referring to very different aspects of the product development process and the design discipline.</p>
                                <p className="mb-30">In relation to websites and apps, UI design considers the look, feel, and interactivity of the product. It’s all about making sure that the user interface of a product is as intuitive as possible, and that means carefully considering each and every visual, interactive element the user might encounter.</p>
                                <div className="service-nr-list">
                                    <h3 className="mb-5">Service Process</h3>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="nr-list mb-5">
                                                <h4 className="title d-flex align-items-center mb-4"><span>01</span> Creative Analysis</h4>
                                                <p>Creative analysis is important. It is common for marketers to measure campaign performance at a superficial level. But to fully understand it</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="nr-list mb-5">
                                                <h4 className="title d-flex align-items-center mb-4"><span>02</span> Design & Scatches</h4>
                                                <p>A design sketch is a graphical sketched representation of a design plan. A design sketch, see example figure, is a visualization</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="nr-list mb-5">
                                                <h4 className="title d-flex align-items-center mb-4"><span>03</span> Prototype & Wireframing</h4>
                                                <p>A prototype is a barebones, relatively simple working model of an app or webpage. They are typically the next step in the product design.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="nr-list mb-5">
                                                <h4 className="title d-flex align-items-center mb-4"><span>04</span> Delivery & Deploy</h4>
                                                <p>Continuous delivery is an extension of continuous integration since it automatically deploys all to a testing and/or production</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content mt-40">
                                    <div className="text">
                                        <h3 className="mb-4">Service Outcome</h3>
                                        <ul className="outcome-list mb-5">
                                            <li><i className="fal fa-check"></i> Excepteur sint occaecat cupidatat a deserunt mollit anim id est laborum.</li>
                                            <li><i className="fal fa-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</li>
                                            <li><i className="fal fa-check"></i> accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo</li>
                                            <li><i className="fal fa-check"></i> inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </li>
                                        </ul>
                                    </div>
                                    <div className="feature-list my-5">
                                        <div className="row clearfix">
                                            <div className="col-md-6 column">
                                                <img className="mb-3" src="/images/resource/service-details-2.jpg" alt="images" />
                                            </div>
                                            <div className="col-md-6 column">
                                                <img className="mb-3" src="/images/resource/service-details-3.jpg" alt="images" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="innerpage">
                                    <ul className="accordion-box wow fadeInRight">
                                        {faqs.map((faq) => (
                                            <li key={faq.id} className={`accordion block ${activeFaq === faq.id ? 'active-block' : ''}`}>
                                                <div className={`acc-btn ${activeFaq === faq.id ? 'active' : ''}`} onClick={() => setActiveFaq(faq.id)}>
                                                    {faq.q}
                                                    <div className="icon fa fa-plus"></div>
                                                </div>
                                                <div className={`acc-content ${activeFaq === faq.id ? 'current' : ''}`}>
                                                    <div className="content">
                                                        <div className="text">{faq.a}</div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service-sidebar mt-5 mt-lg-0">
                                <div className="sidebar-widget service-sidebar-single">
                                    <div className="sidebar-service-list mb-30">
                                        <h4 className="title">More Services</h4>
                                        <ul>
                                            {services.map((service, index) => (
                                                <li key={index} className={service === "UI/UX Design" ? "current" : ""}>
                                                    <Link to="/service-details"><i className="far fa-arrow-right"></i><span>{service}</span></Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="sidebar-service-list mb-30">
                                        <h4 className="title">Contact With us</h4>
                                        <ul className="address">
                                            <li>New South Head Rd, Double Bay</li>
                                            <li>2028, New York</li>
                                            <li><a href="mailto:info@example.com">info@example.com</a></li>
                                            <li><a href="tel:+1300-877-503">+1300 877 503</a></li>
                                        </ul>
                                    </div>
                                    <div className="sidebar-service-list">
                                        <h4 className="title">More Services</h4>
                                        <form onSubmit={(e) => e.preventDefault()}>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="mb-20">
                                                        <input className="form-control" type="text" placeholder="Your Name" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-12">
                                                    <div className="mb-20">
                                                        <input className="form-control" type="email" placeholder="Email Address" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-12">
                                                    <div className="mb-20">
                                                        <textarea className="form-control" name="message" rows="5" placeholder="Write a Message"></textarea>
                                                        <button className="btn-two rounded-1 mt-30" type="submit">Send Message Us</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
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

export default ServiceDetails;
