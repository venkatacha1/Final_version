import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    const pricingPlans = [
        {
            title: "Personal Plan",
            price: "$2500/ Month",
            features: ["Unlimited features", "Multi language content", "30 Days free trial features", "Data backup and recovery", "Updates via dashboard & slack", "Synced to cloud database"],
            delay: "00ms"
        },
        {
            title: "Premium Plan",
            price: "$3500/ Month",
            features: ["Unlimited features", "Multi language content", "30 Days free trial features", "Data backup and recovery", "Updates via dashboard & slack", "Synced to cloud database"],
            delay: "200ms",
            active: true,
            tag: "recommend"
        },
        {
            title: "Standard Plan",
            price: "choose pricing plan",
            features: ["Unlimited features", "Multi language content", "30 Days free trial features", "Data backup and recovery", "Updates via dashboard & slack", "Synced to cloud database"],
            delay: "400ms"
        }
    ];

    return (
        <>
            <section className="page-title" style={{ backgroundImage: 'url(/images/background/page-title-bg.jpg)' }}>
                <div className="auto-container">
                    <div className="title-outer">
                        <h1 className="title">Packages</h1>
                        <ul className="page-breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li>Packages</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="pricing-section have-after pt-120 pb-120">
                <div className="container">
                    <div className="row g-4">
                        {pricingPlans.map((plan, index) => (
                            <div key={index} className="col-md-6 col-xl-4 wow fadeInLeft" data-wow-delay={plan.delay} data-wow-duration="1500ms">
                                <div className={`pricing-block ${plan.active ? 'active' : ''}`}>
                                    <div className="inner-box">
                                        {plan.tag && <div className="tag">{plan.tag}</div>}
                                        <div className="head">
                                            <div className="icon">
                                                <svg width="55" height="49" viewBox="0 0 55 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.80043 1.91176C9.92321 -0.233244 12.9935 -0.233242 14.1162 1.91176L21.9931 16.9601C23.0387 18.9576 21.5898 21.3514 19.3352 21.3514H3.58144C1.32689 21.3514 -0.122003 18.9576 0.923544 16.9601L8.80043 1.91176Z" fill="#1A4137" />
                                                    <path d="M40.8838 1.91176C42.0065 -0.233244 45.0768 -0.233242 46.1996 1.91176L54.0765 16.9601C55.122 18.9576 53.6731 21.3514 51.4186 21.3514H35.6648C33.4102 21.3514 31.9613 18.9576 33.0069 16.9601L40.8838 1.91176Z" fill="#1A4137" />
                                                    <path d="M35.3769 48.1673C37.6314 48.1673 39.0803 45.7735 38.0348 43.776L30.1579 28.7277C29.0351 26.5827 25.9649 26.5827 24.8421 28.7277L16.9652 43.776C15.9197 45.7735 17.3685 48.1673 19.6231 48.1673H35.3769Z" fill="#1A4137" />
                                                    <path d="M8.80043 43.0895C9.92321 45.2345 12.9935 45.2345 14.1162 43.0895L21.9931 28.0411C23.0387 26.0437 21.5898 23.6499 19.3352 23.6499H3.58144C1.32689 23.6499 -0.122003 26.0437 0.923544 28.0411L8.80043 43.0895Z" fill="#1A4137" />
                                                    <path d="M51.4186 23.6499C53.6731 23.6499 55.122 26.0437 54.0765 28.0411L46.1996 43.0895C45.0768 45.2345 42.0065 45.2345 40.8838 43.0895L33.0069 28.0411C31.9613 26.0437 33.4102 23.6499 35.6648 23.6499H51.4186Z" fill="#1A4137" />
                                                </svg>
                                            </div>
                                            <h4 className="title">{plan.title}</h4>
                                            <p className="sub-title">Customized anything in anytime</p>
                                        </div>
                                        <ul className="list">
                                            {plan.features.map((feature, fIndex) => (
                                                <li key={fIndex}>
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '10px' }}>
                                                        <path d="M8.00078 0.394531C6.49641 0.394531 5.02582 0.84063 3.77498 1.67642C2.52414 2.5122 1.54922 3.70013 0.973526 5.08999C0.397827 6.47985 0.247198 8.00922 0.540687 9.48468C0.834175 10.9602 1.5586 12.3155 2.62235 13.3792C3.68611 14.443 5.04141 15.1674 6.51688 15.4609C7.99234 15.7544 9.52171 15.6037 10.9116 15.028C12.3014 14.4523 13.4894 13.4774 14.3251 12.2266C15.1609 10.9757 15.607 9.50515 15.607 8.00078C15.6045 5.98424 14.8024 4.051 13.3765 2.62509C11.9506 1.19918 10.0173 0.397012 8.00078 0.394531ZM11.6539 5.01016L8.17266 10.3539C8.00974 10.6511 7.78994 10.9134 7.52578 11.1258C7.33752 11.2523 7.11976 11.328 6.89362 11.3455C6.66748 11.363 6.44066 11.3218 6.23516 11.2258C5.94097 11.0597 5.68198 10.8378 5.47266 10.5727L4.42891 9.41328C4.16641 9.12265 4.20391 8.61328 4.67891 8.58203C4.90101 8.58843 5.11713 8.65543 5.30391 8.77578L11.6539 5.01016Z" fill="#1A4137" />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="text-center mt-40">
                                            <Link className="btn-one-rounded" to="#0">{plan.price}</Link>
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

export default Pricing;
