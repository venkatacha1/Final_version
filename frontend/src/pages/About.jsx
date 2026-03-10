import ProfileCard from '../components/ProfileCard';

const About = () => {
    return (
        <>
            <style jsx>{`
                .about-gradient-bg {
                    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
                }
                
                .about-section-modern {
                    padding: 80px 0;
                }
                
                .content-card {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    border-radius: 24px;
                    padding: 40px;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
                    transition: all 0.3s ease;
                }
                
                .content-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.12);
                }
                
                .badge-modern {
                    background: linear-gradient(135deg, #d4a017 0%, #b8860b 100%);
                    color: #000;
                    padding: 8px 20px;
                    border-radius: 50px;
                    font-weight: 600;
                    font-size: 13px;
                    display: inline-block;
                    box-shadow: 0 4px 15px rgba(212, 160, 23, 0.3);
                }
                
                .section-title-about {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #1a1a1a;
                    margin-bottom: 20px;
                    line-height: 1.3;
                }
                
                .section-subtitle {
                    color: #d4a017;
                    font-weight: 600;
                    font-size: 14px;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    margin-bottom: 15px;
                    display: inline-block;
                }
                
                .check-list-modern {
                    list-style: none;
                    padding: 0;
                    margin: 30px 0;
                }
                
                .check-list-modern li {
                    padding: 12px 0;
                    padding-left: 40px;
                    position: relative;
                    font-size: 16px;
                    color: #4a4a4a;
                    transition: all 0.3s ease;
                }
                
                .check-list-modern li:hover {
                    color: #1a1a1a;
                    transform: translateX(5px);
                }
                
                .check-list-modern li::before {
                    content: '✓';
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 28px;
                    height: 28px;
                    background: linear-gradient(135deg, #d4a017 0%, #b8860b 100%);
                    color: #000;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    font-size: 14px;
                }
                
                .image-wrapper-modern {
                    border-radius: 24px;
                    overflow: hidden;
                    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
                    transition: all 0.3s ease;
                }
                
                .image-wrapper-modern:hover {
                    transform: scale(1.02);
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
                }
                
                .image-wrapper-modern img {
                    width: 100%;
                    height: auto;
                    display: block;
                }
                
                .blockquote-modern {
                    background: linear-gradient(135deg, #fff9e6 0%, #fff4d1 100%);
                    border-left: 5px solid #d4a017;
                    padding: 30px;
                    border-radius: 16px;
                    margin: 30px 0;
                    box-shadow: 0 4px 20px rgba(212, 160, 23, 0.1);
                }
                
                .blockquote-modern p {
                    font-size: 17px;
                    line-height: 1.8;
                    color: #2a2a2a;
                    font-style: italic;
                    margin: 0;
                }
                
                .btn-modern {
                    background: linear-gradient(135deg, #d4a017 0%, #b8860b 100%);
                    color: #000;
                    padding: 14px 36px;
                    border-radius: 50px;
                    font-weight: 600;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(212, 160, 23, 0.3);
                }
                
                .btn-modern:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(212, 160, 23, 0.4);
                    color: #000;
                }
                
                .text-content p {
                    font-size: 16px;
                    line-height: 1.8;
                    color: #4a4a4a;
                    margin-bottom: 20px;
                }
                
                .text-content strong {
                    color: #1a1a1a;
                    font-weight: 600;
                }
            `}</style>

            {/* Page Title */}
            <section className="page-title" style={{ backgroundImage: 'url(/images/bg/about_header_clean.png)' }}>
                <div className="auto-container">
                    <div className="title-outer">
                        <h1 className="title">About Us</h1>
                    </div>
                </div>
            </section>

            {/* Company Overview Section */}
            <section className="about-section-modern about-gradient-bg">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-xl-6">
                            <div className="content-card">
                                <span className="section-subtitle">Who We Are</span>
                                <h2 className="section-title-about">
                                    India's Premier Digital Platform for <span style={{ color: '#d4a017' }}>Professional Services</span>
                                </h2>
                                <div className="text-content">
                                    <p>
                                        <strong>MakeEasyFilings</strong> is India's premier digital platform for professional services, connecting businesses with expert CAs, CSs, and Lawyers. We aim to be a one-stop solution for all your business needs, offering a seamless experience from registration to complex corporate compliance.
                                    </p>
                                    <p>
                                        Our mission is to bring businesses into the 21st Century. We strive to make managing finances and legal compliances <strong>simpler, stress-free, and time-saving</strong>, allowing entrepreneurs to focus purely on growth.
                                    </p>
                                </div>
                                <ul className="check-list-modern">
                                    <li>Business Registration & Corporate Compliance</li>
                                    <li>Income Tax, GST Filings & Accounting</li>
                                    <li>Legal Advice & Consulting Services</li>
                                    <li>Dedicated Expert Support Team</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="image-wrapper-modern">
                                <img src="/images/about/puzzle_collaboration.png" alt="Collaboration" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="about-section-modern" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-xl-5">
                            <ProfileCard
                                image="/images/about/founder_rajeesh_final.png"
                                name="Mr. Rajeesh Puliyan"
                                title="Managing Director & Founder"
                                objectPosition="object-center"
                                linkedinUrl="https://linkedin.com/in/rajeesh-puliyan-33871b17a"
                            />
                        </div>

                        <div className="col-xl-7">
                            <div className="content-card">
                                <span className="section-subtitle">Our Visionary Leader</span>
                                <div className="d-flex align-items-center flex-wrap mb-4 gap-3">
                                    <h2 className="section-title-about mb-0">Mr. Rajeesh Puliyan</h2>
                                    <span className="badge-modern">Managing Director & Founder</span>
                                </div>
                                <h3 style={{ fontSize: '1.8rem', color: '#2a2a2a', marginBottom: '25px', fontWeight: 600 }}>
                                    Driving Excellence in <span style={{ color: '#d4a017', fontWeight: 400 }}>Finance & Law</span>
                                </h3>
                                <div className="text-content">
                                    <p>
                                        Mr. Rajeesh Puliyan is the Managing Director and Founder of <strong>FINSERVE CAPRICON PRIVATE LIMITED</strong>. He is a distinguished figure in the realms of finance, law, and business consultancy. With a robust academic background comprising a <strong>BBA, MBA, and LLB</strong>, along with certifications in <strong>ERP-SAP, EDUIS, HDCA, and GST Practitioner</strong>, he brings a wealth of expertise to the table.
                                    </p>
                                    <p>
                                        With over eight years of hands-on experience, Rajeesh offers multifaceted skills in leadership, comprehensive business and legal solutions, intellectual asset consultancy, and tax planning. His expertise spans domains such as MCA, GST, and Income Tax.
                                    </p>
                                    <p>
                                        Originally hailing from Thrissur, Kerala, Rajeesh currently leads operations from Chennai, Tamil Nadu. His entrepreneurial journey is deeply rooted in his family legacy, inspired by his late father Mr. Rajan, a successful entrepreneur, and his mother Mrs. Sumithra K G, a women entrepreneur.
                                    </p>
                                </div>
                                <div className="blockquote-modern">
                                    <p>
                                        "We operate with a strong commitment to genuinity, ensuring that every business endeavor is driven by proper goals and executed within a customer-friendly environment."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Director Section */}
            <section className="about-section-modern about-gradient-bg">
                <div className="container">
                    <div className="row g-5 align-items-center flex-row-reverse">
                        <div className="col-xl-5">
                            <ProfileCard
                                image="/images/about/director_athira_custom.png"
                                name="Ms. Athira U"
                                title="Director"
                            />
                        </div>

                        <div className="col-xl-7">
                            <div className="content-card">
                                <span className="section-subtitle">Empowering Leadership</span>
                                <div className="d-flex align-items-center flex-wrap mb-4 gap-3">
                                    <h2 className="section-title-about mb-0">Ms. Athira U</h2>
                                    <span className="badge-modern">Director</span>
                                </div>
                                <h3 style={{ fontSize: '1.8rem', color: '#2a2a2a', marginBottom: '25px', fontWeight: 600 }}>
                                    A Legacy of <span style={{ color: '#d4a017', fontWeight: 400 }}>Entrepreneurship</span>
                                </h3>
                                <div className="text-content">
                                    <p>
                                        Adding to the legacy of entrepreneurship in the family, <strong>Ms. Athira U</strong> serves as the Director of FINSERVE CAPRICON PRIVATE LIMITED. She embodies the spirit of empowered women entrepreneurship, bringing fresh perspectives and dedicated leadership to the organization.
                                    </p>
                                    <p>
                                        Together with Mr. Rajeesh, the leadership team ensures that FINSERVE CAPRICON PRIVATE LIMITED stands as a trusted partner for clients seeking financial and legal solutions. Their dedication to excellence and integrity sets a high standard for the industry.
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <a className="btn-modern" href="/contact">
                                        Contact Us <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default About;
