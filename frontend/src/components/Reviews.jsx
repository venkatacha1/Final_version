import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle, ShieldCheck } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const GOOGLE_REVIEWS_URL = "https://www.google.com/search?sca_esv=39db3e34f79cc62f&sxsrf=ANbL-n6jElRVkaN-8YeHP9-pd6qihhuDtw:1770190201184&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOWEXWf364coqocDLrjUOYa7i5Xogo1NbnvDW4m_Ur2xZg10ddbkTc-n5bIfBqGtL2QjlcuNlgGTxeVAotj8C-lLIGWwj&q=MakeEasyFilings+Reviews&sa=X&ved=2ahUKEwj0l4GxqL-SAxVoV3ADHRFdJJIQ0bkNegQIOhAH&biw=1536&bih=776&dpr=1.25&aic=0";

const reviewsData = [
    {
        name: "Varshan Kannan",
        reviews: "3 reviews",
        date: "2 months ago",
        rating: 5,
        text: "I had an excellent experience with Make Easy Filing. All my brand-related processes, including trademark registration and other documentation, were handled seamlessly and efficiently. The team guided me through every step until I received my documents, demonstrating professionalism and exceptional client service. Their prompt responses and dedication truly stand out. I highly recommend Make Easy Filing to anyone seeking reliable support for registrations and related services."
    },
    {
        name: "VANSH VORA",
        reviews: "1 review",
        date: "4 months ago",
        rating: 5,
        text: "I recently filed my Income Tax Return (ITR) for the very first time using MyEasyFilings, and honestly, I was a bit nervous about the whole process. But I’m really glad I chose this team! From the beginning, everyone I interacted with was friendly and genuinely supportive. They explained the steps in simple language, patiently answered all my questions (no matter how basic), and made sure all my documents were in order. What really stood out was their attention to detail and timely communication. I never felt rushed or ignored at any point—the team kept updating me about my application status so I was never left wondering what was happening. Even when I made a mistake in providing a document, they calmly guided me on how to correct it. Overall, filing my ITR with MyEasyFilings turned out to be much smoother and less stressful than I expected. I highly recommend their services, especially if you’re filing taxes for the first time like me. The team is not just professional, but also very approachable and helpful. Thank you, MyEasyFilings!"
    },
    {
        name: "chandra sekhar",
        reviews: "10 reviews",
        date: "10 months ago",
        rating: 5,
        text: "I recently used MakeEasyFilings for my logo registration, and I must say they provided an excellent service. The process was smooth, and their team was very professional and responsive. They guided me through every step, ensuring that all legal aspects were covered. The registration was completed within the promised timeline without any hassle. I highly recommend MakeEasyFilings to anyone looking for reliable trademark and logo registration services!"
    },
    {
        name: "Thanga Pandian",
        reviews: "6 reviews",
        date: "a year ago",
        rating: 5,
        text: "We have processed of Trademark through them. Within 1 days we got registered in TM. Quick follow up excellent service. We from Coimbatore and they operating from Chennai. Highly safe to proceed through them. Thanks to MakeEasyFillings we have lots to do together."
    },
    {
        name: "Alex Martin",
        reviews: "2 reviews",
        date: "3 years ago",
        rating: 5,
        text: "Very polite, efficient and down to earth staff. I had no idea how to register a trademark in the beginning. This company not only registered my trademark but also they guided me like a good friend. I am extremely happy and satisfied with the service make easy filings offer, particularly one madam who took care of my registration. The fee they ask is very Very affordable and reasonable for a common man. They guide everything with much patience and professionalism. Their communication is excellent and they respond to every query within minutes. I just approached this company for registering my trademark, but I have chosen this company for all my future needs related to my startup company."
    },
    {
        name: "Ashok Smart",
        reviews: "7 reviews",
        date: "a year ago",
        rating: 5,
        text: "I am very happy with this organization specially thanks to Athira mam. She nicely share information and taken care to applying for my TM registration and completed the task as per scheduled."
    },
    {
        name: "LV GOWTHAM",
        reviews: "Local Guide",
        date: "2 years ago",
        rating: 5,
        text: "I was searching through google map for the best company to register my Trademarks name and I found this company ( MakeEasyFilings). I first contacted him to ask him for information about this, in which the employee named Aathira answered my questions properly and honestly, and then I told him to verify my registered name and immediately checked it and explained everything clearly to me. Aathira explained to me very honestly and told me all the basic things in it and completed his work within the days she told me, ( MakeEasyFilings ) is the best company in chennai ."
    }
];

const Reviews = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 relative z-10 px-4">
                    <div className="max-w-xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-primary/10 text-theme-primary text-xs font-bold uppercase tracking-widest mb-4">
                            <ShieldCheck size={14} />
                            <span>Trusted Verified Reviews</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            Client <span className="text-theme-primary">Success Stories</span>
                        </h2>
                        <p className="text-gray-500 mt-4 text-lg leading-relaxed">
                            Don't just take our word for it. See what thousands of businesses and entrepreneurs are saying about their journey with us.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                        <div className="text-right">
                            <p className="text-sm font-medium text-gray-500">Google Rating</p>
                            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 justify-end hover:opacity-80 transition-opacity">
                                <span className="text-2xl font-bold text-gray-900">4.9</span>
                                <div className="flex text-yellow-500">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="fill-current" />
                                    ))}
                                </div>
                            </a>
                        </div>
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-sm">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-6 h-6" />
                        </div>
                    </div>
                </div>

                <div className="relative px-2">
                    {/* Custom Navigation Buttons */}
                    <div className="review-prev absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-gray-100 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center text-gray-700 hover:bg-theme-primary hover:text-theme-black hover:border-theme-primary cursor-pointer transition-all duration-300 hidden xl:flex group">
                        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                    </div>
                    <div className="review-next absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-gray-100 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center text-gray-700 hover:bg-theme-primary hover:text-theme-black hover:border-theme-primary cursor-pointer transition-all duration-300 hidden xl:flex group">
                        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </div>

                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={24}
                        slidesPerView={1}
                        loop={true}
                        speed={800}
                        navigation={{
                            prevEl: '.review-prev',
                            nextEl: '.review-next',
                        }}
                        pagination={{ clickable: true, dynamicBullets: true, el: '.custom-pagination' }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        breakpoints={{
                            640: { slidesPerView: 1, spaceBetween: 20 },
                            768: { slidesPerView: 2, spaceBetween: 24 },
                            1024: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                        className="!pb-12 !px-2 !overflow-visible [&_.swiper-wrapper]:!items-stretch"
                    >
                        {reviewsData.map((review, index) => {
                            const isLong = review.text.length > 280;
                            const displayText = isLong ? review.text.substring(0, 280) + "..." : review.text;

                            return (
                                <SwiperSlide key={index} className="!h-auto pt-10 flex">
                                    <a
                                        href={GOOGLE_REVIEWS_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white rounded-[2rem] p-8 w-full border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 relative flex flex-col group mt-6 cursor-pointer"
                                    >
                                        {/* Quote Icon */}
                                        <div className="absolute -top-6 left-8 w-12 h-12 bg-theme-primary text-theme-black rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                                            <Quote className="w-6 h-6 fill-current" />
                                        </div>

                                        <div className="flex items-start justify-between mb-6 mt-2">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 rounded-full ring-2 ring-gray-50 p-0.5 bg-gradient-to-br from-gray-100 to-gray-200">
                                                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-lg font-bold text-gray-700 uppercase">
                                                        {review.name.charAt(0)}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900 leading-tight flex items-center gap-1">
                                                        {review.name}
                                                        <CheckCircle size={14} className="text-blue-500 fill-blue-50" />
                                                    </h4>
                                                    <span className="text-xs font-medium text-gray-400">{review.date}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <div className="flex text-yellow-400 gap-0.5 mb-2">
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <Star key={i} size={16} className="fill-current" />
                                                ))}
                                            </div>
                                        </div>

                                        <p className="text-gray-600 leading-relaxed mb-6 text-[15px] flex-grow">
                                            "{displayText}"
                                            {isLong && (
                                                <span
                                                    className="inline-block ml-1 text-theme-primary font-semibold group-hover:underline"
                                                >
                                                    Read more
                                                </span>
                                            )}
                                        </p>

                                        <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                                            <div className="flex items-center gap-1.5 opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-4 h-4" />
                                                <span className="text-xs font-semibold text-gray-500">Posted on Google</span>
                                            </div>
                                            <span className="text-theme-primary text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">Verified</span>
                                        </div>
                                    </a>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    <div className="custom-pagination mt-8 flex justify-center gap-2"></div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
