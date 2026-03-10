import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CareersModal from '../components/CareersModal';
import Breadcrumbs from '../components/Breadcrumbs';

const roles = [
    { title: 'Intern', description: 'Gain hands-on experience and learn from industry experts.' },
    { title: 'Freelancers', description: 'Flexible roles for independent professionals.' },
    { title: 'Telecaller', description: 'Handle outbound calls and customer inquiries.' },
    { title: 'Sales Manager', description: 'Drive sales growth and manage client relationships.' },
    { title: 'Operations Manager', description: 'Oversee daily business operations and efficiency.' },
    { title: 'Accountant', description: 'Manage financial records and taxation filings.' },
    { title: 'Lawyer', description: 'Provide legal counsel and handle documentation.' },
    { title: 'C.A', description: 'Handle auditing, taxation, and financial advisory.' },
    { title: 'Company Secretary', description: 'Ensure corporate governance and compliance.' },
];

const Careers = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState('');

    const openModal = (role) => {
        setSelectedRole(role);
        setIsModalOpen(true);
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative py-32 px-6 lg:px-20 overflow-hidden bg-theme-black">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069"
                        alt="Join Our Team"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-theme-black/60"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tight">
                        Build Your <br />
                        <span className="text-theme-primary">Future</span> With Us
                    </h1>
                    <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
                        Join a team of visionaries and experts dedicated to simplifying compliance
                        and empowering businesses across the nation.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-theme-primary font-bold uppercase tracking-widest text-sm">Join Our Team</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-theme-black mt-4">Exciting Opportunities Await</h2>
                    <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
                        We are looking for passionate individuals to help us simplify filings and compliance for businesses across India.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {roles.map((role, index) => (
                        <motion.div
                            key={role.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-theme-primary transition-all group hover:shadow-xl hover:shadow-theme-primary/5"
                        >
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-theme-primary mb-6 shadow-sm group-hover:bg-theme-primary group-hover:text-white transition-colors">
                                <i className="fa-solid fa-briefcase text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-theme-black mb-3">{role.title}</h3>
                            <p className="text-gray-500 text-sm mb-6 leading-relaxed">{role.description}</p>
                            <button
                                onClick={() => openModal(role.title)}
                                className="inline-flex items-center gap-2 text-theme-primary font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all"
                            >
                                Apply Now <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="bg-theme-black py-20 px-6 lg:px-20 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
                    <img src="/images/shape/footer-one-shape.png" alt="pattern" className="w-full h-full object-cover" />
                </div>
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Don't see a role for you?</h2>
                        <p className="text-white/60 text-lg">Send us your resume anyway and we'll keep you in mind for future openings.</p>
                    </div>
                    <button
                        onClick={() => openModal('General Application')}
                        className="px-10 py-5 bg-theme-primary text-theme-black font-black rounded-full hover:scale-105 transition-transform"
                    >
                        SEND YOUR CV
                    </button>
                </div>
            </section>

            <CareersModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                role={selectedRole}
            />
        </div>
    );
};

export default Careers;
