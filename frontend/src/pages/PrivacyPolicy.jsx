import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative py-16 sm:py-32 px-6 lg:px-20 overflow-hidden bg-theme-black">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2070"
                        alt="Privacy Policy"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-theme-black/70"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tight">
                        Privacy <br />
                        <span className="text-theme-primary">Policy</span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
                        Your privacy is important to us. Learn how we protect your information.
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
                            <h2 className="text-3xl font-bold text-theme-black mb-4">1. Introduction</h2>
                            <p className="text-gray-600 leading-relaxed">
                                MakeEasyFilings ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">2. Information We Collect</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We collect several types of information from and about users of our services:
                            </p>

                            <h3 className="text-xl font-bold text-theme-black mb-3 mt-6">Personal Information</h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                <li>Name, email address, and phone number</li>
                                <li>Business information (company name, registration details)</li>
                                <li>Financial information (PAN, GST number, bank details)</li>
                                <li>Address and contact details</li>
                                <li>Government-issued identification documents</li>
                            </ul>

                            <h3 className="text-xl font-bold text-theme-black mb-3 mt-6">Technical Information</h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                <li>IP address and browser type</li>
                                <li>Device information and operating system</li>
                                <li>Cookies and usage data</li>
                                <li>Pages visited and time spent on our website</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">3. How We Use Your Information</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We use the information we collect for various purposes:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                <li>To provide and maintain our services</li>
                                <li>To process your transactions and manage your orders</li>
                                <li>To communicate with you about our services</li>
                                <li>To comply with legal and regulatory requirements</li>
                                <li>To improve our website and services</li>
                                <li>To send you marketing communications (with your consent)</li>
                                <li>To detect and prevent fraud or unauthorized activities</li>
                                <li>To respond to your inquiries and provide customer support</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">4. Information Sharing and Disclosure</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We may share your information in the following circumstances:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf</li>
                                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                                <li><strong>Professional Advisors:</strong> With CAs, lawyers, and other professionals as needed</li>
                                <li><strong>Government Authorities:</strong> For filing returns, registrations, and compliance</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">5. Data Security</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mt-4">
                                <li>SSL encryption for data transmission</li>
                                <li>Secure servers and databases</li>
                                <li>Regular security audits and updates</li>
                                <li>Access controls and authentication</li>
                                <li>Employee training on data protection</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">6. Data Retention</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. This typically includes:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mt-4">
                                <li>Active account information: Duration of service relationship</li>
                                <li>Financial records: As required by tax and accounting laws (typically 7 years)</li>
                                <li>Legal documents: As required by applicable regulations</li>
                                <li>Marketing data: Until you opt out or request deletion</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">7. Your Rights</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                You have the following rights regarding your personal information:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                <li><strong>Access:</strong> Request a copy of your personal information</li>
                                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                                <li><strong>Restriction:</strong> Request restriction of processing</li>
                                <li><strong>Portability:</strong> Request transfer of your data</li>
                                <li><strong>Objection:</strong> Object to processing of your information</li>
                                <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">8. Cookies and Tracking</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small files stored on your device that help us:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mt-4">
                                <li>Remember your preferences and settings</li>
                                <li>Understand how you use our website</li>
                                <li>Improve our services and user experience</li>
                                <li>Provide personalized content and advertisements</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                You can control cookies through your browser settings. However, disabling cookies may affect the functionality of our website.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">9. Third-Party Links</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">10. Children's Privacy</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">11. Changes to This Policy</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">12. Contact Us</h2>
                            <p className="text-gray-600 leading-relaxed">
                                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
                            </p>
                            <div className="mt-4 p-6 bg-gray-50 rounded-xl">
                                <p className="text-gray-700 font-semibold">MakeEasyFilings - Privacy Team</p>
                                <p className="text-gray-600">Email: privacy@makeeasyfilings.com</p>
                                <p className="text-gray-600">Phone: +91 95000 31413 / +91 89251 52220</p>
                                <p className="text-gray-600">Address: [Your Business Address]</p>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-theme-primary/10 rounded-xl border-l-4 border-theme-primary">
                            <p className="text-sm text-gray-600">
                                <strong>Last Updated:</strong> February 2026
                            </p>
                            <p className="text-sm text-gray-600 mt-2">
                                By using our services, you acknowledge that you have read and understood this Privacy Policy.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
