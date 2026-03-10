import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="relative bg-theme-black text-white overflow-hidden">
            <div className="flex flex-wrap lg:flex-nowrap">
                {/* Left Section */}
                <div className="w-full lg:w-[65%] px-6 lg:px-20 py-16 order-2 lg:order-1">
                    <div className="flex flex-wrap -mx-4 mb-16">
                        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                            <div className="flex items-center gap-5">
                                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 text-white text-xl">
                                    <i className="fa-sharp fa-solid fa-phone"></i>
                                </div>
                                <div>
                                    <span className="text-sm uppercase tracking-widest opacity-60">Call Us:</span>
                                    <h5 className="text-lg md:text-xl font-bold text-white mt-1">+91 95000 31413</h5>
                                    <h5 className="text-lg md:text-xl font-bold text-white mt-1">+91 89251 52220</h5>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <div className="flex items-center gap-5">
                                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 text-white text-xl">
                                    <i className="fa-sharp fa-solid fa-envelope"></i>
                                </div>
                                <div>
                                    <span className="text-sm uppercase tracking-widest opacity-60">Email Us:</span>
                                    <h5 className="text-lg md:text-xl font-bold text-white mt-1">
                                        <a href="mailto:info@makeeasyfilings.com" className="hover:text-theme-primary transition-colors">info@makeeasyfilings.com</a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-4 mb-16">
                        <div className="w-full md:w-1/4 px-4 mb-10 md:mb-0">
                            <h4 className="text-lg md:text-xl font-bold mb-8 text-white uppercase tracking-wider">Services</h4>
                            <ul className="space-y-4">
                                <li><Link to="/registration/private-limited" className="hover:text-theme-primary transition-colors text-white/60 font-medium text-sm md:text-base">Company Registration</Link></li>
                                <li><Link to="/services/trademark-registration" className="hover:text-theme-primary transition-colors text-white/60 font-medium text-sm md:text-base">Trademark Registration</Link></li>
                                <li><Link to="/services/gst-registration" className="hover:text-theme-primary transition-colors text-white/60 font-medium text-sm md:text-base">GST Registration</Link></li>
                                <li><Link to="/tax-accounting/income-tax-returns" className="hover:text-theme-primary transition-colors text-white/60 font-medium text-sm md:text-base">Income Tax Returns</Link></li>
                            </ul>
                        </div>

                        <div className="w-full md:w-1/4 px-4 mb-10 md:mb-0">
                            <h4 className="text-lg md:text-xl font-bold mb-8 text-white uppercase tracking-wider">Quick Links</h4>
                            <ul className="space-y-4">
                                <li><Link to="/about" className="hover:text-theme-primary transition-colors text-white/60 font-medium text-sm md:text-base">About Us</Link></li>
                                <li><Link to="/contact" className="hover:text-theme-primary transition-colors text-white/60 font-medium text-sm md:text-base">Contact Us</Link></li>
                                <li><Link to="/services" className="hover:text-theme-primary transition-colors text-white/60 font-medium text-sm md:text-base">Services</Link></li>

                            </ul>
                        </div>

                        <div className="w-full md:w-1/4 px-4 mb-10 md:mb-0">
                            <h4 className="text-lg md:text-xl font-bold mb-8 text-white uppercase tracking-wider">Support</h4>
                            <ul className="space-y-4">
                                <li><Link to="/faq" className="hover:text-theme-primary transition-colors text-white/60 font-medium text-sm md:text-base">FAQs</Link></li>
                                <li><Link to="/careers" className="hover:text-theme-primary transition-colors text-white/60 font-medium text-sm md:text-base">Careers</Link></li>
                                <li><Link to="/team" className="hover:text-theme-primary transition-colors text-white/60 font-medium text-sm md:text-base">Our Team</Link></li>
                            </ul>
                        </div>

                        <div className="w-full md:w-1/4 px-4">
                            <h4 className="text-lg md:text-xl font-bold mb-8 text-white uppercase tracking-wider">Our Policies</h4>
                            <ul className="space-y-4">
                                <li><Link to="/terms-and-conditions" className="hover:text-theme-primary transition-colors text-white/60 font-medium text-sm md:text-base">Terms & Conditions</Link></li>
                                <li><Link to="/refund-policy" className="hover:text-theme-primary transition-colors text-white/60 font-medium text-sm md:text-base">Refund Policy</Link></li>
                                <li><Link to="/privacy-policy" className="hover:text-theme-primary transition-colors text-white/60 font-medium text-sm md:text-base">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-10 border-t border-white/10">
                        <p className="text-sm text-white/40">© Copyright Finserve Capricon Private Limited. All Rights Reserved</p>
                        <p className="text-sm text-white/40">Developed with ❤️ by <a href="https://devlustro.com/" target="_blank" className="text-theme-primary font-bold hover:underline">Dev Team</a></p>
                    </div>
                </div>

                {/* Right Section (Yellow) */}
                <div className="w-full lg:w-[35%] bg-theme-primary text-theme-black p-10 lg:p-24 flex flex-col justify-center relative order-1 lg:order-2 group/footer">
                    {/* Background Pattern Shape (Topography Lines) */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none group-hover/footer:opacity-30 transition-opacity">
                        <img src="/images/shape/footer-one-shape.png" alt="Pattern" className="w-full h-full object-cover" />
                    </div>

                    <div className="relative z-10 w-full max-w-sm mx-auto">
                        <h3 className="text-3xl lg:text-5xl font-bold mb-12 leading-tight">Have a Project in your Mind?</h3>

                        <div className="relative inline-block group/btn">
                            <Link className="relative flex items-center justify-center w-56 h-56 rounded-full bg-theme-black text-white font-bold text-lg overflow-hidden transition-all duration-500 shadow-2xl z-10" to="/contact">
                                {/* The 'Expanding Yellow' Circle Layer */}
                                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-theme-primary rounded-full scale-100 group-hover/btn:scale-[6] transition-transform duration-700 ease-in-out pointer-events-none z-10"></div>

                                {/* Button Text Content */}
                                <div className="relative z-20 text-center transition-colors duration-500 group-hover/btn:text-theme-black">
                                    Contact Us <br />
                                    <i className="fa-regular fa-arrow-right mt-2 text-2xl group-hover/btn:translate-x-2 transition-transform"></i>
                                </div>
                            </Link>
                        </div>


                    </div>
                </div>

            </div>
        </footer>


    );
};

export default Footer;
