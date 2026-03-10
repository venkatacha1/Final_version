import React from 'react';
import { motion } from 'framer-motion';

const TermsAndConditions = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative py-16 sm:py-32 px-6 lg:px-20 overflow-hidden bg-theme-black">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2070"
                        alt="Terms and Conditions"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-theme-black/70"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tight">
                        Terms & <br />
                        <span className="text-theme-primary">Conditions</span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
                        Please read these terms and conditions carefully before using our services.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-6 lg:px-20 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="prose prose-lg max-w-none"
                >
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">General Terms</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                By accessing and placing an order with MakeEasyFilings, you confirm that you are in agreement with and bound by the terms of service contained in the Terms & Conditions outlined below.
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                <li>MakeEasyFilings shall not be liable for any direct, indirect, special, incidental or consequential damages</li>
                                <li>Users assume all costs for servicing, repair or correction of equipment or data</li>
                                <li>We reserve the rights to change prices and revise the resources usage policy at any time</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">License</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                MakeEasyFilings grants you a limited license to use our website:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                <li>Revocable and non-exclusive license</li>
                                <li>Non-transferable usage rights</li>
                                <li>Must comply with all terms of this Agreement</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">Key Definitions</h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                <li><strong>Cookie:</strong> Small data file stored by your web browser to identify you and remember preferences</li>
                                <li><strong>Company:</strong> FINSERVE CAPRICON PRIVATE LIMITED, Chennai 600 002</li>
                                <li><strong>Country:</strong> India</li>
                                <li><strong>Customer:</strong> Company, organization or person using MakeEasyFilings Service</li>
                                <li><strong>Device:</strong> Any internet-connected device (phone, tablet, computer)</li>
                                <li><strong>Personal Data:</strong> Information that identifies a natural person</li>
                                <li><strong>Service:</strong> Services provided by MakeEasyFilings platform</li>
                                <li><strong>Website:</strong> https://makeeasyfilings.in</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">Restrictions</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                You agree not to:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                <li>License, sell, rent, lease, or commercially exploit the service</li>
                                <li>Modify, reverse engineer, or create derivative works</li>
                                <li>Remove or alter any proprietary notices or trademarks</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">Payment Terms</h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                <li>Payment required for all fees in accordance with billing terms</li>
                                <li>Valid credit card required for Premium plans (Visa, MasterCard, etc.)</li>
                                <li>Immediate notification required for billing address or card changes</li>
                                <li>We reserve the right to change prices and billing methods</li>
                                <li>Users responsible for third-party fees incurred</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">Return and Refund Policy</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We want to ensure you have a rewarding experience. By placing an order, you agree to our terms and Privacy Policy.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                If you're not completely satisfied with our service, please contact us to discuss any issues.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">Your Rights & Responsibilities</h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                <li><strong>Suggestions:</strong> Any feedback provided becomes our exclusive property</li>
                                <li><strong>Consent:</strong> Using our service means you consent to these Terms & Conditions</li>
                                <li><strong>Third-party Links:</strong> We're not responsible for external websites</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">Cookies Policy</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We use Cookies to enhance performance and functionality:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                <li>Cookies are non-essential but improve user experience</li>
                                <li>Disabling cookies may limit website functionality</li>
                                <li>We never place Personally Identifiable Information in Cookies</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">Service Modifications</h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                <li>We may stop providing the Service at our sole discretion</li>
                                <li>Changes to Terms & Conditions will be posted on this page</li>
                                <li>Service may be modified, suspended or discontinued temporarily or permanently</li>
                                <li>Updates may include patches, bug fixes, and feature modifications</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">Third-Party Services</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We may display third-party content or provide links to external services:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                <li>We're not responsible for third-party accuracy or completeness</li>
                                <li>Access third-party services at your own risk</li>
                                <li>Subject to third parties' terms and conditions</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">Termination</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                This Agreement remains in effect until terminated:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                <li>We may suspend or terminate at any time with or without notice</li>
                                <li>Immediate termination if you fail to comply with any provision</li>
                                <li>You may terminate by deleting the service from your computer</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">Intellectual Property</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Our platform and content are protected by intellectual property laws:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                <li>All content owned by MakeEasyFilings or its licensors</li>
                                <li>Protected by copyright, trademark, and patent laws</li>
                                <li>Cannot be copied, modified, or distributed without permission</li>
                                <li>Unauthorized use is prohibited</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">Warranties & Liability</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                <strong>No Warranties:</strong>
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                <li>Service provided "AS IS" and "AS AVAILABLE"</li>
                                <li>No warranty that service will be uninterrupted or error-free</li>
                                <li>No guarantee of compatibility with other software or systems</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed mb-4 mt-4">
                                <strong>Limitation of Liability:</strong>
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                <li>Liability limited to amount paid for the service</li>
                                <li>Not liable for indirect, incidental, or consequential damages</li>
                                <li>Not liable for loss of profits, data, or business interruption</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">Dispute Resolution</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                <strong>Notice of Dispute:</strong>
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                <li>Send written notice to: info@makeeasyfilings.com</li>
                                <li>Include name, address, contact info, facts, and relief requested</li>
                                <li>60-day informal negotiation period</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed mb-4 mt-4">
                                <strong>Binding Arbitration:</strong>
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                <li>Disputes resolved exclusively by binding arbitration</li>
                                <li>You give up the right to litigate in court</li>
                                <li>Conducted per commercial arbitration rules</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">Additional Terms</h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                <li><strong>Indemnification:</strong> You agree to hold us harmless from claims arising from your use</li>
                                <li><strong>Severability:</strong> Invalid provisions won't affect remaining terms</li>
                                <li><strong>Waiver:</strong> Failure to exercise rights doesn't constitute waiver</li>
                                <li><strong>Amendments:</strong> We may modify terms with 30 days notice for material changes</li>
                                <li><strong>Promotions:</strong> Separate rules may apply to contests and promotions</li>
                                <li><strong>Typographical Errors:</strong> We can refuse/cancel orders with pricing errors</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">Contact Information</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                If you have any questions about these Terms and Conditions, please contact us:
                            </p>
                            <div className="p-6 bg-gray-50 rounded-xl">
                                <p className="text-gray-700 font-semibold">MakeEasyFilings</p>
                                <p className="text-gray-600">Email: info@makeeasyfilings.com</p>
                                <p className="text-gray-600">Phone: +91 95000 31413 / +91 89251 52220</p>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-theme-primary/10 rounded-xl border-l-4 border-theme-primary">
                            <p className="text-sm text-gray-600">
                                <strong>Last Updated:</strong> February 2026
                            </p>
                            <p className="text-sm text-gray-600 mt-2">
                                By using our services, you acknowledge that you have read and agreed to these Terms & Conditions.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default TermsAndConditions;
