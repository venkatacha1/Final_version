import React from 'react';
import { Link } from 'react-router-dom';

const Team = () => {
    const teamMembers = [
        { name: "Mr. Rajeesh Puliyan", role: "Managing Director & Founder", gender: "male" },
        { name: "Ms. Athira U", role: "Director", gender: "female" },
        { name: "Vignesh", role: "Lawyer", gender: "male" },
        { name: "Hari", role: "Consultant", gender: "male" },
        { name: "Athul", role: "Business Advisor", gender: "male" }
    ];

    return (
        <>
            <section className="page-title" style={{ backgroundImage: 'url(/images/background/page-title-bg.jpg)' }}>
                <div className="auto-container">
                    <div className="title-outer">
                        <h1 className="title">Meet Our Expert</h1>
                    </div>
                </div>
            </section>

            <section className="team-section pt-120 pb-120">
                <div className="team-shape wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                    <img className="sway__animation" src="/images/shape/team-shape.png" alt="Image" />
                </div>
                <div className="container">
                    <div className="row g-4 justify-content-center">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2.4 wow fadeInUp" data-wow-delay={`${index * 200}ms`} data-wow-duration="1500ms">
                                <style jsx>{`
                                    @media (min-width: 1200px) {
                                        .col-xl-2\.4 {
                                            flex: 0 0 auto;
                                            width: 20%;
                                        }
                                    }
                                `}</style>
                                <div className="team-block">
                                    <div className="inner-box">
                                        <div className="image-box bg-gray-100 flex items-center justify-center py-12 rounded-t-2xl group-hover:bg-theme-primary transition-colors duration-500">
                                            <i className={`fa-solid ${member.gender === 'male' ? 'fa-user-tie' : 'fa-user'} text-[120px] text-gray-300 group-hover:text-black transition-colors duration-500`}></i>
                                        </div>
                                        <div className="content-box text-center py-6">
                                            <h4 className="title text-lg font-bold"><Link to={`/team-details`}>{member.name}</Link></h4>
                                            <p className="sub-title text-sm text-theme-primary font-medium">{member.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Team;
