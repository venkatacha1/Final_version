import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { newsItems } from '../data/newsData';
import { API_BASE_URL } from '../config/api';

const NewsDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [latestPosts, setLatestPosts] = useState([]);

    useEffect(() => {
        const fetchBlogData = () => {
            try {
                setLoading(true);
                // Try to find the blog in our local data
                const foundBlog = newsItems.find(item => item.id.toString() === id.toString());

                if (foundBlog) {
                    setBlog(foundBlog);
                    setLatestPosts(newsItems.filter(p => p.id.toString() !== id.toString()).slice(0, 3));
                } else {
                    setError('Blog post not found in local data');
                }
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch blog details');
                setLoading(false);
            }
        };
        fetchBlogData();
    }, [id]);



    const [comments, setComments] = useState([]);
    const [commentForm, setCommentForm] = useState({ name: '', email: '', message: '' });
    const [commentLoading, setCommentLoading] = useState(false);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/comments/${id}`);
                const result = await response.json();
                if (result.success) {
                    setComments(result.data);
                }
            } catch (err) {
                console.error('Failed to fetch comments:', err);
            }
        };
        if (id) fetchComments();
    }, [id]);

    if (loading) return <div className="text-center pt-120 pb-120">Loading blog details...</div>;
    if (error) return <div className="text-center pt-120 pb-120 text-danger">{error}</div>;
    if (!blog) return <div className="text-center pt-120 pb-120">Blog post not found</div>;

    // Parse date for display (assuming DD/MM/YYYY or similar)
    const dateParts = (blog.date || '').split('/');
    const day = dateParts[0] || '01'; // Get the day part if available
    const monthMap = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthIndex = parseInt(dateParts[1]) - 1;
    const month = monthMap[monthIndex] || 'Jan';

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        if (!commentForm.name || !commentForm.message || !commentForm.email) return;

        setCommentLoading(true);
        try {
            const response = await fetch(`${API_BASE_URL}/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: commentForm.name,
                    email: commentForm.email,
                    message: commentForm.message,
                    blogId: id
                }),
            });

            const result = await response.json();
            if (result.success) {
                setComments([result.data, ...comments]);
                setCommentForm({ name: '', email: '', message: '' });
            }
        } catch (err) {
            console.error('Failed to submit comment:', err);
        } finally {
            setCommentLoading(false);
        }
    };

    return (
        <>
            <section className="page-title" style={{ backgroundImage: 'url(/images/background/page-title-bg.jpg)' }}>
                <div className="auto-container">
                    <div className="title-outer">
                        <h1 className="title">News Details</h1>
                        <ul className="page-breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/news">News</Link></li>
                            <li>News Details</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="blog-details pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="blog-details__left">
                                <div className="blog-details__img">
                                    <div className="relative overflow-hidden rounded-2xl shadow-lg">
                                        <img src={blog.image} alt={blog.title} className="w-full h-auto object-cover max-h-[500px]" />
                                        <div className="blog-details__date">
                                            <span className="day">{day}</span>
                                            <span className="month">{month}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-details__content mt-40">
                                    <ul className="list-unstyled blog-details__meta">
                                        <li><Link to="#"><i className="fas fa-user-circle"></i> {blog.author}</Link> </li>
                                        <li><Link to="#"><i className="fas fa-comments"></i> {comments.length} Comments</Link></li>
                                    </ul>
                                    <h3 className="blog-details__title">{blog.title}</h3>
                                    <div className="blog-details__text-container">
                                        <p className="blog-details__text-2 font-medium text-gray-800 leading-relaxed mb-4">
                                            {blog.content}
                                        </p>
                                        <p className="blog-details__text-2 text-gray-600 leading-relaxed italic border-l-4 border-theme-primary pl-4 my-8">
                                            "Our mission at MakeEasyFilings is to simplify complex legal and registration processes for every entrepreneur in India."
                                        </p>
                                        <p className="blog-details__text-2 text-gray-700 leading-relaxed">
                                            Stay tuned for more updates on regulatory changes and business compliance tips. We continuously monitor the Ministry of Corporate Affairs (MCA) and other government portals to bring you the most accurate and timely information.
                                        </p>
                                    </div>
                                </div>
                                <div className="blog-details__bottom">
                                    <div className="blog-details__social-list">
                                        <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                                        <a href="#"><i className="fab fa-facebook"></i></a>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>

                                {comments.length > 0 && (
                                    <div className="comment-one">
                                        <h3 className="comment-one__title">{comments.length} Comment{comments.length > 1 ? 's' : ''}</h3>
                                        {comments.map((comment, index) => (
                                            <div key={index} className="comment-one__single">
                                                <div className="comment-one__image"> <img src={comment.img} alt={comment.name} /> </div>
                                                <div className="comment-one__content">
                                                    <h3>{comment.name} <span>- {new Date(comment.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</span></h3>
                                                    <p>{comment.message}</p>
                                                    <Link to="#" className="theme-btn btn-style-two comment-one__btn"><span className="btn-title">Reply</span></Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div className="comment-form">
                                    <h3 className="comment-form__title mb-30">Leave a Comment</h3>
                                    <form onSubmit={handleCommentSubmit}>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="mb-3">
                                                    <input
                                                        name="form_name"
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="Enter Name"
                                                        value={commentForm.name}
                                                        onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="mb-3">
                                                    <input
                                                        name="form_email"
                                                        className="form-control"
                                                        type="email"
                                                        placeholder="Enter Email"
                                                        value={commentForm.email}
                                                        onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <textarea
                                                name="form_message"
                                                className="form-control"
                                                rows="5"
                                                placeholder="Enter Message"
                                                value={commentForm.message}
                                                onChange={(e) => setCommentForm({ ...commentForm, message: e.target.value })}
                                                required
                                            ></textarea>
                                        </div>
                                        <div className="mb-3">
                                            <button type="submit" className="theme-btn btn-two" disabled={commentLoading}>
                                                <span className="btn-title">{commentLoading ? 'Submitting...' : 'Submit Comment'}</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="sidebar">
                                <div className="sidebar__single sidebar__search">
                                    <form onSubmit={(e) => e.preventDefault()} className="sidebar__search-form">
                                        <input type="search" placeholder="Search here" />
                                        <button type="submit"><i className="far fa-search"></i></button>
                                    </form>
                                </div>
                                <div className="sidebar__single sidebar__post">
                                    <h3 className="sidebar__title">Latest Posts</h3>
                                    <ul className="sidebar__post-list list-unstyled">
                                        {latestPosts.map((post) => (
                                            <li key={post.id}>
                                                <div className="sidebar__post-image"> <img src={post.image} alt="" /> </div>
                                                <div className="sidebar__post-content">
                                                    <h3> <span className="sidebar__post-content-meta"><i className="fas fa-user-circle"></i>{post.author}</span> <Link to={`/news-details/${post.id}`}>{post.title}</Link> </h3>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewsDetails;

