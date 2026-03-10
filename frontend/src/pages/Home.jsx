import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';
import LogoLoop from '../components/LogoLoop';
import ConsultModal from '../components/ConsultModal';
import {
    Users,
    Clock,
    Headphones,
    Award,
    Gem,
    BadgeCheck,
    Shield,
    Building2,
    Wallet,
    FileCheck,
    Server,
    Globe,
    Smartphone,
    Zap,
    Palette,
    Rocket,
    ShieldCheck,
    ChevronRight,
    ArrowRight
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import NewsSection from '../components/NewsSection';
import { Hero3DCard } from '../components/Hero3DCard'; // Imported new component

import Reviews from '../components/Reviews';

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');

    const aboutImages = [
        { src: "/images/chartered_accountant_pro_new.png", alt: "Chartered Accountant" },
        { src: "/images/company_secretary_pro_new.png", alt: "Company Secretary" },
        { src: "/images/cost_accountant_pro_new.png", alt: "Cost Accountant" },
        { src: "/images/lawyer_professional_new.png", alt: "Lawyer" },
        { src: "/images/business_advisor_pro_new.png", alt: "Business Advisor" },
        { src: "/images/service_experts_pro.png", alt: "Service Experts" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % 4);
        }, 3000);
        const imageInterval = setInterval(() => {
            setActiveImageIndex((prev) => (prev + 1) % aboutImages.length);
        }, 4000);
        return () => {
            clearInterval(interval);
            clearInterval(imageInterval);
        };
    }, []);

    useEffect(() => {
        // Swiper initialization is usually handled by script.js, 
        // but if it runs too early, we might need to trigger a check.
        // We can dispatch a resize event to nudge some scripts.
        window.dispatchEvent(new Event('resize'));
    }, []);

    const slides = [
        {
            bg: "/images/banner/hero_new.png",
            subTitle: "Growth, Innovation, and Success",
            title: "transforming business growth Drive Success",
            active: true
        },
        {
            bg: "/images/banner/banner-image2.jpg",
            subTitle: "Strategy & Planning",
            title: "Innovative Solutions for Your Business",
            active: false
        },
        {
            bg: "/images/banner/banner-image3.jpg",
            subTitle: "Expert Consultants",
            title: "We Help You Achieve Your Goals",
            active: false
        }
    ];

    return (
        <>
            {/* Banner Section */}
            <section className="relative bg-[#10242a] text-white min-h-screen flex items-center pt-20 z-50 overflow-hidden">
                {/* Background Video Layer - Extends behind navbar */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src="/videos/Hero_Video.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/70"></div>
                </div>

                {/* Grid Overlay Removed */}

                <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-20">
                    <div className="flex flex-col items-start justify-center">

                        {/* Content */}
                        <div className="w-full lg:w-1/2">
                            <div className="max-w-xl">
                                <ScrollReveal animation="fadeInUp">
                                    <h6 className="text-theme-primary uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 text-xs sm:text-sm">
                                        India's Best Professionals Network
                                    </h6>
                                </ScrollReveal>
                                <ScrollReveal animation="fadeInUp" delay={0.2}>
                                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 sm:mb-4 sm:mb-8 lg:mb-10 leading-[1.2] sm:leading-[1.1]">
                                        Empowering Success,<br />
                                        Simplifying Accounting and Legal Services.
                                    </h1>
                                </ScrollReveal>
                                <ScrollReveal animation="fadeInUp" delay={0.4}>
                                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-10 lg:mt-12">
                                        <Link className="inline-flex justify-center px-8 sm:px-10 lg:px-12 py-4 sm:py-4.5 lg:py-5 bg-theme-primary text-theme-black rounded-full font-bold uppercase tracking-wider hover:bg-white hover:scale-105 transition-all duration-300 text-sm sm:text-base whitespace-nowrap" to="/contact">
                                            GET STARTED
                                        </Link>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Professional Service Hub Section */}
            <section className="relative bg-white pt-24 pb-24 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                    <div className="text-center mb-20">
                        <ScrollReveal animation="fadeInUp" width="100%">
                            <h6 className="text-theme-primary uppercase tracking-[0.3em] font-bold text-xs mb-4">Strategic Business Growth</h6>
                            <h2 className="text-4xl md:text-6xl font-normal text-black tracking-tight leading-tight">
                                Comprehensive <span className="text-theme-primary font-medium italic">Professional</span> Solutions
                            </h2>
                        </ScrollReveal>
                    </div>

                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-0 border border-gray-100 rounded-[3rem] overflow-hidden shadow-2xl shadow-black/5 bg-white">
                        {/* Column 1: Registration */}
                        <div className="group relative p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-gray-100 hover:bg-[#0a0a0a] transition-all duration-700 flex flex-col items-start text-left">
                            <div className="relative z-10 w-full flex flex-col items-start">
                                <div className="absolute -top-4 -right-4 lg:-top-8 lg:-right-8 opacity-10 font-black text-6xl lg:text-8xl select-none group-hover:text-theme-primary transition-colors">01</div>

                                <div className="w-20 h-20 rounded-2xl bg-theme-primary/10 flex items-center justify-center text-theme-primary mb-10 group-hover:bg-theme-primary group-hover:text-black transition-all duration-500">
                                    <Building2 size={36} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-3xl font-bold text-black mb-6 group-hover:text-white transition-colors">Registration Services</h3>
                                <p className="text-gray-500 text-lg leading-relaxed mb-10 group-hover:text-white/60 transition-colors max-w-sm">
                                    Launch your business venture with precision. We handle the complexities of incorporation and licensing.
                                </p>
                                <ul className="space-y-4 mb-12 text-left">
                                    {[
                                        { name: 'Private Limited Company', link: '/registration/private-limited' },
                                        { name: 'LLP Registration', link: '/registration/llp' },
                                        { name: 'OPC & Partnership', link: '/registration/partnership' }
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-400 group-hover:text-white/40 transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-theme-primary shrink-0"></div>
                                            <Link to={item.link} className="hover:text-theme-primary transition-colors">{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/registration/private-limited" className="inline-flex items-center gap-3 text-black font-bold uppercase tracking-widest text-xs group-hover:text-theme-primary transition-colors">
                                    Explore Solutions <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        {/* Column 2: Tax & Compliance */}
                        <div className="group relative p-12 lg:p-16 border-b lg:border-r lg:border-b-0 border-gray-100 bg-theme-primary/5 hover:bg-theme-primary transition-all duration-700 flex flex-col items-center text-center">
                            <div className="relative z-10 w-full flex flex-col items-center">
                                <div className="absolute -top-4 -right-4 lg:-top-8 lg:-right-8 opacity-10 font-black text-6xl lg:text-8xl select-none text-black group-hover:text-black/40 transition-colors">02</div>

                                <div className="w-20 h-20 rounded-2xl bg-[#0a0a0a] flex items-center justify-center text-theme-primary mb-10 group-hover:bg-white group-hover:text-theme-primary transition-all duration-500">
                                    <ShieldCheck size={36} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-3xl font-bold text-black mb-6">Tax & Compliance</h3>
                                <p className="text-black/60 text-lg leading-relaxed mb-10 group-hover:text-black/80 transition-colors max-w-sm">
                                    Navigate regulatory landscapes with confidence. Automated filings and expert monitoring for your peace of mind.
                                </p>
                                <ul className="space-y-4 mb-12 text-left w-fit mx-auto">
                                    {[
                                        { name: 'GST Return Filing', link: '/services/gst-filings' },
                                        { name: 'Income Tax Planning', link: '/tax-accounting/income-tax-returns' },
                                        { name: 'Audit & Assurance', link: '/tax-accounting/tax-audit' }
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-medium text-black transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                                            <Link to={item.link} className="transition-colors">{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/services/gst-registration" className="inline-flex items-center gap-3 text-black font-bold uppercase tracking-widest text-xs">
                                    View Compliance Hub <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        {/* Column 3: Intellectual Property */}
                        <div className="group relative p-12 lg:p-16 border-gray-100 hover:bg-[#0a0a0a] transition-all duration-700 flex flex-col items-center text-center">
                            <div className="relative z-10 w-full flex flex-col items-center">
                                <div className="absolute -top-4 -right-4 lg:-top-8 lg:-right-8 opacity-10 font-black text-6xl lg:text-8xl select-none group-hover:text-theme-primary transition-colors">03</div>

                                <div className="w-20 h-20 rounded-2xl bg-theme-primary/10 flex items-center justify-center text-theme-primary mb-10 group-hover:bg-theme-primary group-hover:text-black transition-all duration-500">
                                    <Shield size={36} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-3xl font-bold text-black mb-6 group-hover:text-white transition-colors">Intellectual Property</h3>
                                <p className="text-gray-500 text-lg leading-relaxed mb-10 group-hover:text-white/60 transition-colors max-w-sm">
                                    Protect your most valuable assets. Comprehensive IP protection for your brand, ideas, and innovations.
                                </p>
                                <ul className="space-y-4 mb-12 text-left w-fit mx-auto">
                                    {[
                                        { name: 'Trademark Registration', link: '/services/trademark-registration' },
                                        { name: 'Copyright Protection', link: '/services/copyright-services' },
                                        { name: 'Patent Consultation', link: '/services/patent-services' }
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-400 group-hover:text-white/40 transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-theme-primary shrink-0"></div>
                                            <Link to={item.link} className="hover:text-theme-primary transition-colors">{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/services/trademark-registration" className="inline-flex items-center gap-3 text-black font-bold uppercase tracking-widest text-xs group-hover:text-theme-primary transition-colors">
                                    Protect Your Brand <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* About Section */}
            <section className="pt-10 pb-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4 items-center">
                        <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0 wow fadeInLeft lg:-mt-24 relative">
                            <div className="relative group p-4 mb-12 h-[550px]">
                                <div className="absolute -inset-4 bg-theme-primary/10 rounded-[40px] rotate-3 transition-transform group-hover:rotate-0 duration-500"></div>

                                <div className="relative w-full h-full rounded-3xl shadow-2xl overflow-hidden z-10 bg-gray-100">
                                    {aboutImages.map((img, idx) => (
                                        <div
                                            key={idx}
                                            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${idx === activeImageIndex
                                                ? "opacity-100 scale-100 rotate-0"
                                                : "opacity-0 scale-110 rotate-1"
                                                }`}
                                        >
                                            <img
                                                src={img.src}
                                                alt={img.alt}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                                                <span className="text-theme-primary text-[13px] uppercase tracking-[0.3em] block mb-2">We Provide</span>
                                                <h4 className="text-white text-[23px] uppercase tracking-widest">{img.alt}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-theme-primary rounded-3xl flex items-center justify-center p-6 shadow-[0_20px_50px_rgba(249,215,79,0.3)] z-20 animate-bounce-slow">
                                    <div className="text-center text-theme-black">
                                        <span className="block text-[47px] mb-1">2018</span>
                                        <span className="text-[13px] uppercase tracking-widest">Since Est.</span>
                                    </div>
                                </div>
                            </div>

                            {/* Infinite Shuffling Deck Animation */}
                            <div className="relative min-h-[500px] h-auto lg:h-[350px] w-full mt-40">
                                {[
                                    { id: 0, title: "ISO certified", sub: "Customers Trust Us", type: "Reliable", icon: "fa-medal", color: "black" },
                                    { id: 1, title: "99% Success", sub: "We File For The Win", type: "Customizable", icon: "fa-chart-line", color: "yellow" },
                                    { id: 2, title: "5000+ Filings", sub: "Experts In What We Do", type: "Smooth", icon: "fa-file-signature", color: "black" },
                                    { id: 3, title: "Expert Guidance", sub: "Simplifying Law For You", type: "Professional", icon: "fa-scale-balanced", color: "yellow" }
                                ].map((card, i) => {
                                    const position = (i - activeIndex + 4) % 4;
                                    const isFront = position === 0;
                                    const isMiddle = position === 1;
                                    const isBack = position === 2;
                                    const isHidden = position === 3;

                                    return (
                                        <div
                                            key={card.id}
                                            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${isFront ? "z-30 translate-x-0 translate-y-0 scale-100 opacity-100" :
                                                isMiddle ? "z-20 translate-x-8 -translate-y-8 scale-95 opacity-80" :
                                                    isBack ? "z-10 translate-x-16 -translate-y-16 scale-90 opacity-50" :
                                                        "z-0 translate-x-24 -translate-y-24 scale-85 opacity-0 pointer-events-none"
                                                }`}
                                            style={{
                                                // Specific "shuffle out" logic when moving from front to back
                                                // This is handled by the smooth transition automatically in React
                                            }}
                                        >
                                            <div className={`${card.color === 'black' ? "bg-[#0a0a0a] border-white/20 text-white" : "bg-theme-primary border-black/10 text-black"
                                                } border rounded-2xl shadow-2xl overflow-hidden h-full flex flex-col`}>

                                                <div className="p-10 flex flex-col items-center justify-center flex-grow text-center relative overflow-hidden">
                                                    {card.color === 'black' && (
                                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-black/80 pointer-events-none"></div>
                                                    )}
                                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 z-10 ${card.color === 'black' ? "bg-white/10 text-theme-primary" : "bg-black/5 text-black"
                                                        }`}>
                                                        <i className={`fa-solid ${card.icon} text-2xl`}></i>
                                                    </div>
                                                    <h3 className={`text-[29px] mb-2 tracking-tight z-10 ${card.color === 'black' ? "text-white" : "text-black"}`}>{card.title}</h3>
                                                    <p className={`text-[13px] uppercase tracking-[0.2em] z-10 ${card.color === 'black' ? "text-white/90" : "text-black/60"
                                                        }`}>{card.sub}</p>

                                                    {/* Decorative Glow */}
                                                    <div className={`absolute -bottom-10 -right-10 w-32 h-32 blur-[50px] rounded-full ${card.color === 'black' ? "bg-theme-primary/10" : "bg-black/10"
                                                        }`}></div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-8 content-column wow fadeInRight">
                            <div className="pl-0 lg:pl-10">
                                <div className="mb-12">
                                    <h6 className="text-theme-primary uppercase tracking-[0.3em] mb-4 text-[13px]">
                                        ABOUT US
                                    </h6>
                                    <h2 className="text-[35px] lg:text-[59px] font-bold mb-4 sm:mb-8 text-black leading-tight tracking-tight" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                                        MakeEasyFilings
                                    </h2>
                                    <div className="space-y-6 text-theme-text text-[17px] leading-relaxed">
                                        <p>
                                            <span className="text-black">MakeEasyFilings</span> is India's most customer-trusted brand, helping entrepreneurs with end-to-end guidance and services throughout their business journey. We are powered by <span className="text-black uppercase tracking-tight">Finserve Capricorn Private Limited</span>, incorporated under the MCA Companies Act 2013.
                                        </p>
                                        <p className="border-l-4 border-theme-primary pl-6 italic text-gray-600 bg-gray-50/50 py-4 rounded-r-xl shadow-sm">
                                            "Being an Entrepreneur simply means setting up your own kingdom!"
                                        </p>
                                        <p>
                                            Starting our operations across South India in 2018, we stand with you to make your business efficient and productive with relevant licenses and registrations. As your best legal companion, we are dedicated to making business registrations and compliances easy for you!
                                        </p>
                                        <p className="text-black bg-theme-primary/10 p-4 rounded-xl border border-theme-primary/20">
                                            MakeEasyFilings is the best professional platform which also helps customers on legal and technology service and consultation.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
                                    <div className="group p-2">
                                        <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 mb-5 group-hover:bg-red-500 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-red-200 group-hover:shadow-xl group-hover:-translate-y-1">
                                            <i className="fa-solid fa-heart text-2xl"></i>
                                        </div>
                                        <h5 className="text-[19px] mb-3 text-black">Work With Heart</h5>
                                        <p className="text-[13px] leading-relaxed text-gray-500">We care about our customers, which makes us enthusiastic in our work.</p>
                                    </div>
                                    <div className="group p-2">
                                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 mb-5 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-blue-200 group-hover:shadow-xl group-hover:-translate-y-1">
                                            <i className="fa-solid fa-shield-halved text-2xl"></i>
                                        </div>
                                        <h5 className="text-[19px] mb-3 text-black">Reliable Services</h5>
                                        <p className="text-[13px] leading-relaxed text-gray-500">Our services are among the best. We always strive for excellence in everything we do.</p>
                                    </div>
                                    <div className="group p-2">
                                        <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-500 mb-5 group-hover:bg-green-500 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-green-200 group-hover:shadow-xl group-hover:-translate-y-1">
                                            <i className="fa-solid fa-headset text-2xl"></i>
                                        </div>
                                        <h5 className="text-[19px] mb-3 text-black">Great Support</h5>
                                        <p className="text-[13px] leading-relaxed text-gray-500">We support and achieve client goals with an unimaginable success rate.</p>
                                    </div>
                                </div>

                                <Link to="/about" className="inline-flex px-12 py-5 bg-black text-white rounded-full uppercase tracking-wider hover:bg-theme-primary hover:text-black hover:scale-105 transition-all duration-300 shadow-xl">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <ScrollReveal animation="fadeInUp">
                            <h6 className="text-theme-primary uppercase tracking-widest mb-2 font-bold">What We Offer</h6>
                        </ScrollReveal>
                        <ScrollReveal animation="fadeInUp" delay={0.2}>
                            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold">Our <span className="text-theme-primary">Valuable Services</span></h2>
                        </ScrollReveal>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Card 1: Branding & TM */}
                        <ScrollReveal animation="fadeInUp" delay={0.1}>
                            <Link to="/services/trademark-registration" className="block h-full cursor-pointer group/service">
                                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col items-center text-center">
                                    <div className="w-20 h-20 bg-theme-primary/10 rounded-2xl flex items-center justify-center text-4xl text-theme-primary mb-4 sm:mb-8 transition-colors group-hover/service:bg-theme-primary group-hover/service:text-theme-black">
                                        <Award className="w-10 h-10" />
                                    </div>
                                    <h4 className="text-2xl font-bold mb-4 group-hover/service:text-theme-primary transition-colors">Branding & TM</h4>
                                    <p className="text-theme-text leading-relaxed text-sm">
                                        Trademark (TM), Copyright (C), Registered (R) and complete Business Branding solutions.
                                    </p>
                                </div>
                            </Link>
                        </ScrollReveal>

                        {/* Card 2: GST Services */}
                        <ScrollReveal animation="fadeInUp" delay={0.2}>
                            <Link to="/services/gst-registration" className="block h-full cursor-pointer group/service">
                                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col items-center text-center">
                                    <div className="w-20 h-20 bg-theme-primary/10 rounded-2xl flex items-center justify-center text-4xl text-theme-primary mb-4 sm:mb-8 transition-colors group-hover/service:bg-theme-primary group-hover/service:text-theme-black">
                                        <FileCheck className="w-10 h-10" />
                                    </div>
                                    <h4 className="text-2xl font-bold mb-4 group-hover/service:text-theme-primary transition-colors">GST Services</h4>
                                    <p className="text-theme-text leading-relaxed text-sm">
                                        Hassle-free Registration, Regular Filing, Modification, & Revocation support.
                                    </p>
                                </div>
                            </Link>
                        </ScrollReveal>

                        {/* Card 3: ISO Certification */}
                        <ScrollReveal animation="fadeInUp" delay={0.3}>
                            <Link to="/others/iso-certification" className="block h-full cursor-pointer group/service">
                                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col items-center text-center">
                                    <div className="w-20 h-20 bg-theme-primary/10 rounded-2xl flex items-center justify-center text-4xl text-theme-primary mb-4 sm:mb-8 transition-colors group-hover/service:bg-theme-primary group-hover/service:text-theme-black">
                                        <BadgeCheck className="w-10 h-10" />
                                    </div>
                                    <h4 className="text-2xl font-bold mb-4 text-center group-hover/service:text-theme-primary transition-colors">ISO Certification</h4>
                                    <p className="text-theme-text leading-relaxed text-[13px] mb-4">
                                        9001:2015, 21001, 14001, 45001, 22000, 24000, 27001, CE Mark & more.
                                    </p>
                                    <div className="flex flex-col gap-1 w-full text-xs opacity-70">
                                        <div className="flex justify-between items-center">
                                            <span>Satisfaction</span>
                                            <div className="flex text-theme-primary gap-0.5"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span>Credibility</span>
                                            <div className="flex text-theme-primary gap-0.5"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span>Quality</span>
                                            <div className="flex text-theme-primary gap-0.5"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </ScrollReveal>

                        {/* Card 4: Company Registration */}
                        <ScrollReveal animation="fadeInUp" delay={0.4}>
                            <Link to="/registration/private-limited" className="block h-full cursor-pointer group/service">
                                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col items-center text-center">
                                    <div className="w-20 h-20 bg-theme-primary/10 rounded-2xl flex items-center justify-center text-4xl text-theme-primary mb-4 sm:mb-8 transition-colors group-hover/service:bg-theme-primary group-hover/service:text-theme-black">
                                        <Building2 className="w-10 h-10" />
                                    </div>
                                    <h4 className="text-2xl font-bold mb-4 group-hover/service:text-theme-primary transition-colors">Company Reg.</h4>
                                    <p className="text-theme-text leading-relaxed text-sm">
                                        One Person Company (OPC), Private Limited, Public Limited, and LLP Registration.
                                    </p>
                                </div>
                            </Link>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20 wow fadeInUp">
                        <h2 className="text-4xl lg:text-6xl font-normal text-black tracking-tight">
                            Why <span className="text-theme-primary font-medium">MakeEasyFilings</span>?
                        </h2>
                    </div>

                    <div className="flex flex-wrap justify-center -mx-4 mb-12">
                        {[
                            { title: "Happy Customers", icon: Users, delay: "0ms", color: "text-blue-500", bg: "bg-blue-50" },
                            { title: "On time service", icon: Clock, delay: "100ms", color: "text-orange-500", bg: "bg-orange-50" },
                            { title: "Customer Support", icon: Headphones, delay: "200ms", color: "text-green-500", bg: "bg-green-50" },
                            { title: "Experienced Professionals", icon: Award, delay: "300ms", color: "text-purple-500", bg: "bg-purple-50" }
                        ].map((item, idx) => (
                            <div key={idx} className="w-1/2 md:w-1/4 px-4 mb-12 group wow fadeInUp" data-wow-delay={item.delay}>
                                <div className="flex flex-col items-center">
                                    <div className={`relative w-24 h-24 mb-6 rounded-3xl ${item.bg} flex items-center justify-center transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-3 group-hover:shadow-2xl overflow-hidden`}>
                                        {/* Decorative inner glow */}
                                        <div className="absolute inset-x-0 top-0 h-1/2 bg-white/40 skew-y-12 transition-transform duration-700 group-hover:translate-y-12"></div>

                                        <item.icon className={`w-10 h-10 ${item.color} relative z-10 transition-all duration-500 group-hover:scale-110`} strokeWidth={1.5} />

                                        {/* Corner glow */}
                                        <div className={`absolute -bottom-2 -right-2 w-8 h-8 blur-xl rounded-full opacity-40 transition-all duration-500 group-hover:scale-150 ${item.color.replace('text', 'bg')}`}></div>
                                    </div>
                                    <h5 className="text-sm font-medium text-gray-800 text-center tracking-wide uppercase group-hover:text-theme-primary transition-colors duration-300">
                                        {item.title}
                                    </h5>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap justify-center -mx-4 max-w-5xl mx-auto">
                        {[
                            { title: "Quality, not quantity", icon: Gem, delay: "400ms", color: "text-cyan-500", bg: "bg-cyan-50" },
                            { title: "ISO Certified", icon: BadgeCheck, delay: "500ms", color: "text-yellow-600", bg: "bg-yellow-50" },
                            { title: "Data Privacy", icon: Shield, delay: "600ms", color: "text-indigo-500", bg: "bg-indigo-50" }
                        ].map((item, idx) => (
                            <div key={idx} className="w-1/2 md:w-1/3 px-4 mb-12 group wow fadeInUp" data-wow-delay={item.delay}>
                                <div className="flex flex-col items-center">
                                    <div className={`relative w-24 h-24 mb-6 rounded-3xl ${item.bg} flex items-center justify-center transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-3 group-hover:shadow-2xl overflow-hidden`}>
                                        {/* Decorative inner glow */}
                                        <div className="absolute inset-x-0 top-0 h-1/2 bg-white/40 skew-y-12 transition-transform duration-700 group-hover:translate-y-12"></div>

                                        <item.icon className={`w-10 h-10 ${item.color} relative z-10 transition-all duration-500 group-hover:scale-110`} strokeWidth={1.5} />

                                        {/* Corner glow */}
                                        <div className={`absolute -bottom-2 -right-2 w-8 h-8 blur-xl rounded-full opacity-40 transition-all duration-500 group-hover:scale-150 ${item.color.replace('text', 'bg')}`}></div>
                                    </div>
                                    <h5 className="text-sm font-medium text-gray-800 text-center tracking-wide uppercase group-hover:text-theme-primary transition-colors duration-300">
                                        {item.title}
                                    </h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Professional Network Section with ScrollStack Animation */}
            <section className="bg-gray-50/30 relative pb-10">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12 wow fadeInUp">
                        <h6 className="text-theme-primary uppercase tracking-[0.3em] mb-4 text-sm">
                            Our Network
                        </h6>
                        <h2 className="text-4xl lg:text-6xl font-normal text-black tracking-tight">
                            Meet Our <span className="text-theme-primary">Expert Professionals</span>
                        </h2>
                    </div>

                    <div className="relative">
                        <ScrollStack
                            className="bg-transparent"
                            itemDistance={120}
                            itemScale={0.05}
                            stackPosition="20%"
                            useWindowScroll={true}
                        >
                            {[
                                { title: "Chartered Accountants", desc: "Expert tax planning, auditing, and financial consultancy for businesses of all sizes.", img: "/images/chartered_accountant_pro_new.png", color: "bg-[#0a0a0a]" },
                                { title: "Company Secretaries", desc: "Ensuring regulatory compliance, corporate governance, and legal documentation.", img: "/images/company_secretary_pro_new.png", color: "bg-theme-primary" },
                                { title: "Professional Lawyers", desc: "Navigate complex legal landscapes with our experienced corporate and civil litigation experts.", img: "/images/lawyer_professional_new.png", color: "bg-[#0a0a0a]" },
                                { title: "Cost Accountants", desc: "Optimizing your business operations with strategic cost management and efficiency analysis.", img: "/images/cost_accountant_pro_new.png", color: "bg-theme-primary" },
                                { title: "Business Advisors", desc: "Strategic guidance to help you scale your business and achieve long-term success.", img: "/images/business_advisor_pro_new.png", color: "bg-[#0a0a0a]" }
                            ].map((item, idx) => (
                                <ScrollStackItem key={idx} itemClassName={`${item.color} overflow-hidden group/card !p-0`}>
                                    {/* Mobile/Tablet Background Image Overlay */}
                                    <div className="md:hidden absolute inset-0 z-0">
                                        <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-40" />
                                        <div className={`absolute inset-0 ${item.color === 'bg-[#0a0a0a]' ? 'bg-black/60' : 'bg-theme-primary/70'}`}></div>
                                    </div>

                                    <div className="flex flex-wrap md:flex-nowrap min-h-[450px] relative z-10">
                                        {/* Content Section */}
                                        <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                                            <h4 className={`text-3xl md:text-5xl font-normal mb-6 tracking-tight ${item.color === 'bg-[#0a0a0a]' ? 'text-white' : 'text-black'}`}>
                                                {item.title}
                                            </h4>
                                            <p className={`text-lg md:text-xl leading-relaxed mb-4 sm:mb-8 font-light ${item.color === 'bg-[#0a0a0a]' ? 'text-white/80' : 'text-black/80'}`}>
                                                {item.desc}
                                            </p>
                                            <div className="flex">
                                                <button
                                                    onClick={() => {
                                                        setModalTitle(item.title);
                                                        setIsModalOpen(true);
                                                    }}
                                                    className={`inline-flex px-10 py-4 rounded-full font-semibold transition-all duration-500 shadow-lg ${item.color === 'bg-[#0a0a0a]'
                                                        ? 'bg-theme-primary text-black hover:bg-white hover:scale-105'
                                                        : 'bg-black text-white hover:bg-white hover:text-black hover:scale-105'
                                                        }`}>
                                                    Consult Now
                                                </button>
                                            </div>
                                        </div>

                                        {/* Desktop Image Section */}
                                        <div className="hidden md:block md:w-1/2 relative overflow-hidden min-h-[450px]">
                                            <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover/card:scale-110">
                                                <img
                                                    src={item.img}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                {/* Gradient Mask to blend image with card color */}
                                                <div className={`absolute inset-0 bg-gradient-to-r ${item.color === 'bg-[#0a0a0a]'
                                                    ? 'from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent'
                                                    : 'from-theme-primary via-theme-primary/20 to-transparent'
                                                    }`}></div>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollStackItem>
                            ))}
                        </ScrollStack>
                    </div>
                </div>
            </section>

            {/* Authorised Partners Section */}
            <section className="py-20 bg-white border-y border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <ScrollReveal animation="fadeInUp">
                            <h2 className="text-3xl lg:text-4xl font-normal text-gray-400 tracking-tight">
                                Our <span className="text-gray-900 font-medium">Authorised Partners</span>
                            </h2>
                        </ScrollReveal>
                    </div>

                    <div className="wow fadeInUp" data-wow-delay="200ms">
                        <LogoLoop
                            logos={[
                                { name: "ICICI Bank", color: "text-[#f37021]", icon: Building2 },
                                { name: "eMudhra", color: "text-[#ed1c24]", icon: FileCheck },
                                { name: "Hostinger", color: "text-[#673de6]", icon: Server },
                                { name: "Google Partner", color: "text-[#4285f4]", icon: Gem },
                                { name: "Novelx", color: "text-[#d10000]", icon: Zap },
                                { name: "Pantasign", color: "text-[#00c2cb]", icon: Palette },
                                { name: "GoDaddy", color: "text-[#00a63f]", icon: Globe },
                                { name: "Paytm", color: "text-[#00baf2]", icon: Wallet },
                                { name: "IDFC FIRST Bank", color: "text-[#9e1b32]", icon: Building2 },
                                { name: "PhonePe", color: "text-[#5f259f]", icon: Smartphone }
                            ]}
                            speed={50}
                            gap={60}
                            logoHeight={40}
                            pauseOnHover={true}
                            renderItem={(item) => (
                                <div className="flex items-center gap-4 px-8 py-4 bg-gray-50/50 rounded-2xl border border-gray-100 hover:border-theme-primary transition-all duration-300 group/logo shadow-sm hover:shadow-md">
                                    <item.icon className={`w-6 h-6 ${item.color} transition-transform duration-300 group-hover/logo:scale-110`} strokeWidth={1.5} />
                                    <span className={`text-xl font-normal tracking-tight whitespace-nowrap ${item.color} opacity-80 group-hover/logo:opacity-100`}>
                                        {item.name}
                                    </span>
                                </div>
                            )}
                        />
                    </div>
                </div>
            </section>

            <Reviews />

            <NewsSection />

            {/* Consult Modal */}
            <ConsultModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={modalTitle}
            />
        </>
    );
};

export default Home;
