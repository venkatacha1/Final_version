import React from 'react';
import { motion } from 'framer-motion';

const RefundPolicy = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative py-16 sm:py-32 px-6 lg:px-20 overflow-hidden bg-theme-black">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2070"
                        alt="Refund Policy"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-theme-black/70"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tight">
                        Refund <br />
                        <span className="text-theme-primary">Policy</span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
                        Our commitment to transparency and customer satisfaction.
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
                            <h2 className="text-3xl font-bold text-theme-black mb-4">1. General Policy</h2>
                            <p className="text-gray-600 leading-relaxed">
                                At MakeEasyFilings, we strive to provide the highest quality services to our clients. This Refund Policy outlines the circumstances under which refunds may be issued and the process for requesting a refund.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">2. Eligibility for Refund</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Refunds may be considered in the following situations:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                <li>Service not delivered within the promised timeframe due to our fault</li>
                                <li>Duplicate payment made for the same service</li>
                                <li>Service cancelled before work has commenced</li>
                                <li>Technical error resulting in incorrect charges</li>
                                <li>Service quality does not meet the agreed-upon standards</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">3. Non-Refundable Services</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                The following services are non-refundable:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                <li>Government fees and statutory charges</li>
                                <li>Services already completed and delivered</li>
                                <li>Third-party fees (professional fees, filing fees, etc.)</li>
                                <li>Consultation services already rendered</li>
                                <li>Services cancelled after work has been initiated</li>
                                <li>Custom or personalized services that have been started</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">4. Refund Process</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                To request a refund, please follow these steps:
                            </p>
                            <ol className="list-decimal list-inside text-gray-600 space-y-3 ml-4">
                                <li>Contact our support team at info@makeeasyfilings.com with your order details</li>
                                <li>Provide a detailed explanation of the reason for the refund request</li>
                                <li>Include any supporting documentation or evidence</li>
                                <li>Our team will review your request within 5-7 business days</li>
                                <li>If approved, the refund will be processed within 10-15 business days</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">5. Partial Refunds</h2>
                            <p className="text-gray-600 leading-relaxed">
                                In cases where work has been partially completed, we may offer a partial refund. The refund amount will be calculated based on the work completed and resources utilized. This will be determined on a case-by-case basis.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">6. Refund Timeline</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Once a refund is approved:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                <li>Credit/Debit Card: 7-10 business days</li>
                                <li>Net Banking: 5-7 business days</li>
                                <li>UPI: 3-5 business days</li>
                                <li>Wallet: 2-3 business days</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                Please note that the actual time may vary depending on your bank or payment provider.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">7. Service Modifications</h2>
                            <p className="text-gray-600 leading-relaxed">
                                If you wish to modify or upgrade your service instead of requesting a refund, please contact our support team. We will do our best to accommodate your needs and adjust the service accordingly.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">8. Dispute Resolution</h2>
                            <p className="text-gray-600 leading-relaxed">
                                If you are not satisfied with our refund decision, you may escalate the matter by contacting our senior management team. We are committed to resolving all disputes fairly and promptly.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">9. Exceptions</h2>
                            <p className="text-gray-600 leading-relaxed">
                                MakeEasyFilings reserves the right to make exceptions to this policy on a case-by-case basis. Any such exceptions will be at the sole discretion of management and will be communicated to the client in writing.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-theme-black mb-4">10. Contact Us</h2>
                            <p className="text-gray-600 leading-relaxed">
                                For any questions or concerns regarding our Refund Policy, please contact us:
                            </p>
                            <div className="mt-4 p-6 bg-gray-50 rounded-xl">
                                <p className="text-gray-700 font-semibold">MakeEasyFilings Support Team</p>
                                <p className="text-gray-600">Email: info@makeeasyfilings.com</p>
                                <p className="text-gray-600">Phone: +91 95000 31413 / +91 89251 52220</p>
                                <p className="text-gray-600">Business Hours: Monday - Saturday, 9:00 AM - 6:00 PM IST</p>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-theme-primary/10 rounded-xl border-l-4 border-theme-primary">
                            <p className="text-sm text-gray-600">
                                <strong>Last Updated:</strong> February 2026
                            </p>
                            <p className="text-sm text-gray-600 mt-2">
                                This policy is subject to change without prior notice. Please check this page regularly for updates.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default RefundPolicy;
