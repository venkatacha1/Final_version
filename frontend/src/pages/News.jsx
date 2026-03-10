import React from 'react';
import { Link } from 'react-router-dom';
import { newsItems } from '../data/newsData';

const News = () => {
    const blogs = newsItems;
    const loading = false;
    const error = null;

    if (loading) return <div className="text-center pt-120 pb-120">Loading news...</div>;
    if (error) return <div className="text-center pt-120 pb-120 text-danger">{error}</div>;

    return (
        <>
            <section className="page-title" style={{ backgroundImage: 'url(/images/background/page-title-bg.jpg)' }}>
                <div className="auto-container">
                    <div className="title-outer">
                        <h1 className="title">News Grid</h1>
                        <ul className="page-breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li>News</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="blog-section pt-120 pb-90">
                <div className="auto-container">
                    <div className="row g-4">
                        {blogs.map((blog, index) => (
                            <div key={blog.id} className="col-md-6 col-xl-4 wow fadeInLeft" data-wow-delay={`${(index % 3) * 100}ms`} data-wow-duration="1500ms">
                                <div className="blog-block-two mb-30 h-full">
                                    <div className="inner-box h-full flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden bg-white">
                                        <div className="image-box relative aspect-[16/10] overflow-hidden">
                                            <figure className="image w-full h-full m-0">
                                                <img
                                                    src={blog.image}
                                                    alt={blog.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                                />
                                                <span className="tag absolute top-4 left-4 bg-theme-primary text-black px-3 py-1 rounded-full text-xs font-bold shadow-md">
                                                    {blog.date}
                                                </span>
                                            </figure>
                                        </div>
                                        <div className="content-box">
                                            <ul className="info">
                                                <li>
                                                    <i className="fa-light fa-user" style={{ marginRight: '5px' }}></i>
                                                    <a href="#0">By {blog.author}</a>
                                                </li>
                                                <li>
                                                    <i className="fa-light fa-comment" style={{ marginRight: '5px' }}></i>
                                                    <a href="#0">Comments ({blog.comments || 0})</a>
                                                </li>
                                            </ul>
                                            <h4 className="title"><Link to={`/news-details/${blog.id}`}>{blog.title}</Link></h4>
                                            <Link className="btn-one-rounded mt-30" to={`/news-details/${blog.id}`}>Read More <i className="fa-solid fa-arrow-right"></i></Link>
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

export default News;
