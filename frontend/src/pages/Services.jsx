import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Building2,
    User,
    Users,
    Scale,
    Landmark,
    Heart,
    FileText,
    Calculator,
    ShieldCheck,
    Gavel,
    Copyright,
    PenTool,
    Lamp,
    Coffee,
    Globe,
    FileCheck,
    Users2,
    Briefcase,
    BadgePercent,
    ClipboardCheck,
    ArrowRight,
    Sparkles,
    Shield,
    Zap
} from 'lucide-react';
import ProcessFlow from '../components/ProcessFlow';

const serviceCategories = [
    {
        title: "Registration Services",
        description: "Launch your business venture with the right legal structure and expert guidance.",
        icon: Building2,
        badge: "Company Formation",
        services: [
            { name: "Proprietorship", link: "/registration/proprietorship", icon: User },
            { name: "One Person Company", link: "/registration/opc", icon: User },
            { name: "Partnership Firm", link: "/registration/partnership", icon: Users },
            { name: "Private Limited", link: "/registration/private-limited", icon: Building2 },
            { name: "LLP Registration", link: "/registration/llp", icon: Scale },
            { name: "Public Limited", link: "/registration/public-limited", icon: Landmark },
            { name: "Section 8 (NGO)", link: "/registration/section-8", icon: Heart },
        ]
    },
    {
        title: "Taxation & GST",
        description: "Stay compliant and optimize your tax liabilities with our expert tax professionals.",
        icon: BadgePercent,
        badge: "Tax Compliance",
        services: [
            { name: "GST Registration", link: "/services/gst-registration", icon: FileText },
            { name: "GST Filings", link: "/services/gst-filings", icon: Calculator },
            { name: "Income Tax Returns", link: "/tax-accounting/income-tax-returns", icon: ShieldCheck },
            { name: "GST Modification", link: "/services/gst-modification", icon: FileText },
            { name: "GST E-Way Bill", link: "/services/gst-eway-billing", icon: Globe },
            { name: "GSTR-9 Audit", link: "/services/gstr-9-audit", icon: ClipboardCheck },
        ]
    },
    {
        title: "Intellectual Property",
        description: "Protect your ideas, brand, and innovations with our comprehensive IP services.",
        icon: Copyright,
        badge: "Identity Security",
        services: [
            { name: "Trademark Registration", link: "/services/trademark-registration", icon: Landmark },
            { name: "Trademark Objection", link: "/services/trademark-objection", icon: Gavel },
            { name: "Copyright Services", link: "/services/copyright-services", icon: Copyright },
            { name: "Design Service", link: "/services/design-service", icon: PenTool },
            { name: "Patent Services", link: "/services/patent-services", icon: Lamp },
            { name: "Trademark Hearing", link: "/services/trademark-hearing", icon: Gavel },
        ]
    },
    {
        title: "Compliance & Licenses",
        description: "Ensure your business meets all regulatory requirements and holds necessary licenses.",
        icon: Shield,
        badge: "Regulatory",
        services: [
            { name: "FSSAI Registration", link: "/services/fssai-registration", icon: Coffee },
            { name: "ISO Certification", link: "/others/iso-certification", icon: ShieldCheck },
            { name: "Import Export License", link: "/services/import-export-license", icon: Globe },
            { name: "ROC Compliance", link: "/services/private-limited-compliance", icon: Building2 },
            { name: "Director eKYC", link: "/services/director-ekyc", icon: User },
            { name: "EPF/ESI Registration", link: "/services/epf-registration", icon: Users2 },
        ]
    }
];

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const Services = () => {
    return (
        <div className="bg-[#fcfcfc] min-h-screen font-title">
            <style jsx>{`
                .mesh-gradient {
                    background-color: #10242a;
                    background-image: 
                        radial-gradient(at 0% 0%, rgba(249, 215, 79, 0.1) 0px, transparent 50%),
                        radial-gradient(at 100% 100%, rgba(249, 215, 79, 0.05) 0px, transparent 50%);
                }
                .glass-card {
                    background: rgba(255, 255, 255, 0.8);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.4);
                }
                .text-shadow {
                    text-shadow: 0 2px 10px rgba(0,0,0,0.2);
                }
                .service-icon-blob {
                    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
                }
            `}</style>

            {/* Hero Section */}
            <section className="relative pt-40 pb-32 mesh-gradient overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.15, scale: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-theme-primary rounded-full blur-[120px] pointer-events-none"
                ></motion.div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-theme-primary/10 border border-theme-primary/20 text-theme-primary mb-4 sm:mb-8"
                        >
                            <Sparkles size={16} />
                            <span className="text-xs font-bold uppercase tracking-widest">Our Professional Portfolio</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-white text-5xl md:text-7xl font-normal leading-tight mb-4 sm:mb-8"
                        >
                            Elevate Your Business with <br />
                            <span className="text-theme-primary font-medium italic">Premium</span> Expert Services
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-white/60 text-xl leading-relaxed max-w-2xl mx-auto"
                        >
                            From seamless incorporation to complex regulatory filings, we provide high-end solutions designed for modern entrepreneurs.
                        </motion.p>
                    </div>
                </div>

                {/* Decorative Scroll Down */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Discover</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-px h-12 bg-gradient-to-b from-theme-primary to-transparent"
                    ></motion.div>
                </motion.div>
            </section>

            {/* Service Categories Section */}
            <section className="py-32 relative">
                <div className="container mx-auto px-4">
                    {serviceCategories.map((category, catIndex) => (
                        <div key={catIndex} className="mb-32 last:mb-0">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8"
                            >
                                <div className="max-w-2xl">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 rounded-2xl bg-theme-primary flex items-center justify-center text-black shadow-lg shadow-theme-primary/20 rotate-3">
                                            <category.icon size={32} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <span className="text-theme-primary text-xs font-bold uppercase tracking-widest mb-1 block">
                                                {category.badge}
                                            </span>
                                            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-normal text-black tracking-tight">{category.title}</h2>
                                        </div>
                                    </div>
                                    <p className="text-gray-500 text-xl leading-relaxed">{category.description}</p>
                                </div>
                                <div className="lg:mb-2">
                                    <Link to="/contact" className="group flex items-center gap-4 py-3 px-8 rounded-full border border-gray-200 hover:border-theme-primary transition-all duration-300">
                                        <span className="text-black font-bold uppercase tracking-widest text-xs">Consult Experts</span>
                                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-theme-primary transition-colors">
                                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </Link>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                            >
                                {category.services.map((service, serIndex) => (
                                    <motion.div key={serIndex} variants={itemVariants}>
                                        <Link
                                            to={service.link}
                                            className="group relative block h-full"
                                        >
                                            <div className="glass-card h-full p-8 rounded-[2rem] border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
                                                <div className="relative mb-4 sm:mb-8">
                                                    <div className="w-16 h-16 service-icon-blob bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-theme-primary/10 group-hover:text-theme-primary transition-all duration-500">
                                                        <service.icon size={28} strokeWidth={1.5} />
                                                    </div>
                                                    <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                        <div className="w-8 h-8 rounded-full bg-theme-primary flex items-center justify-center shadow-lg">
                                                            <Zap size={14} className="fill-black" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <h4 className="text-2xl font-normal text-black mb-4 tracking-tight group-hover:text-theme-primary transition-colors">
                                                    {service.name}
                                                </h4>

                                                <p className="text-gray-500 leading-relaxed text-sm mb-6">
                                                    Professional expertise in navigating the complexities of {service.name.toLowerCase()} with precision.
                                                </p>

                                                <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300 group-hover:text-theme-primary transition-colors">Explore Solution</span>
                                                    <ArrowRight size={16} className="text-gray-300 group-hover:text-theme-primary group-hover:translate-x-2 transition-all" />
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features Spotlight */}
            <section className="py-24 bg-[#10242a] relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: ShieldCheck, title: "100% Compliance", desc: "Rigorous standards for every filing" },
                            { icon: Zap, title: "Swift Execution", desc: "Digital-first approach for faster results" },
                            { icon: Users, title: "Expert Panel", desc: "CAs, CSs and Lawyers at your service" }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="flex flex-col items-center text-center text-white"
                            >
                                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-theme-primary mb-6 border border-white/10">
                                    <feature.icon size={28} />
                                </div>
                                <h5 className="text-xl font-medium mb-2 text-white">{feature.title}</h5>
                                <p className="text-white/50 text-sm leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Flow Section */}
            <div className="bg-white">
                <ProcessFlow title="Execution Strategy" />
            </div>

            {/* Enhanced CTA Section */}
            <section className="py-32 bg-[#fcfcfc]">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto bg-[#10242a] pt-20 pb-20 px-12 rounded-[4rem] text-center relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]"
                    >
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #f9d74f 0%, transparent 50%)' }}></div>

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-normal text-white mb-4 sm:mb-8 leading-tight">
                                Ready to <span className="text-theme-primary">Transform</span> Your Business Compliance?
                            </h2>
                            <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                                Join 500+ businesses who trust MakeEasyFilings for their professional needs. Get started with a premium consultation today.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <Link to="/contact" className="px-10 py-5 bg-theme-primary text-black rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:scale-105 transition-all duration-500 shadow-xl shadow-theme-primary/10">
                                    Book Initial Consultation
                                </Link>
                                <Link to="/contact" className="px-10 py-5 bg-white/5 text-white border border-white/10 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all duration-300">
                                    View Pricing
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Services;
