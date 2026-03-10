import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../config/api';

const ProductDetails = () => {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('description');
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(`${API_BASE_URL}/products/${id}`);
                setProduct(data);

                // Fetch related products (using first few products for demo)
                const { data: allProducts } = await axios.get(`${API_BASE_URL}/products`);
                setRelatedProducts(allProducts.filter(p => p._id !== id).slice(0, 4));

                setLoading(false);
            } catch (err) {
                setError('Failed to fetch product details');
                setLoading(false);
            }
        };
        fetchProductData();
    }, [id]);

    if (loading) return <div className="text-center pt-120 pb-120">Loading product details...</div>;
    if (error) return <div className="text-center pt-120 pb-120 text-danger">{error}</div>;
    if (!product) return <div className="text-center pt-120 pb-120">Product not found</div>;

    return (
        <>
            <section className="page-title" style={{ backgroundImage: 'url(/images/background/page-title-bg.jpg)' }}>
                <div className="auto-container">
                    <div className="title-outer">
                        <h1 className="title">Product Details</h1>
                        <ul className="page-breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li>Product Details</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="product-details">
                <div className="container pt-120 pb-70">
                    <div className="row">
                        <div className="col-lg-6 col-xl-6">
                            <div className="bxslider">
                                <div className="slider-content">
                                    <figure className="image-box">
                                        <img src={product.image} alt={product.name} />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6 product-info">
                            <div className="product-details__top">
                                <h3 className="product-details__title">{product.name} <span>{product.price}</span> </h3>
                            </div>
                            <div className="product-details__reveiw">
                                {[...Array(5)].map((_, i) => (
                                    <i key={i} className={`fa fa-star ${i < Math.floor(product.rating || 5) ? '' : 'text-muted'}`}></i>
                                ))}
                                <span>{product.numReviews || 0} Customer Reviews</span>
                            </div>
                            <div className="product-details__content">
                                <p className="product-details__content-text1">{product.description || 'Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo venenatis ligula commodo leez sed blandit convallis dignissim onec vel pellentesque neque.'}</p>
                                <p className="product-details__content-text2"><strong>REF.</strong> {product._id?.substring(0, 8)} <br /> Available in store</p>
                            </div>

                            <div className="product-details__quantity">
                                <h3 className="product-details__quantity-title">Choose quantity</h3>
                                <div className="quantity-box">
                                    <button type="button" className="sub" onClick={() => setQuantity(Math.max(1, quantity - 1))}><i className="fa fa-minus"></i></button>
                                    <input type="number" value={quantity} readOnly />
                                    <button type="button" className="add" onClick={() => setQuantity(quantity + 1)}><i className="fa fa-plus"></i></button>
                                </div>
                            </div>

                            <div className="product-details__buttons">
                                <div className="product-details__buttons-1">
                                    <Link to="/cart" className="theme-btn btn-style-two"><span className="btn-title">Add to Cart</span></Link>
                                </div>
                                <div className="product-details__buttons-2">
                                    <Link to="#" className="theme-btn btn-style-two"><span className="btn-title">Add to Wishlist</span></Link>
                                </div>
                            </div>
                            <div className="product-details__social">
                                <div className="title mt-10">
                                    <h3>Share with friends</h3>
                                </div>
                                <ul className="social-icon-one product-share">
                                    <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="product-description">
                <div className="container pt-0 pb-90">
                    <div className="product-discription">
                        <div className="tabs-box">
                            <div className="tab-btn-box text-center">
                                <ul className="tab-btns tab-buttons clearfix">
                                    <li className={`tab-btn ${activeTab === 'description' ? 'active-btn' : ''}`} onClick={() => setActiveTab('description')}>Description</li>
                                    <li className={`tab-btn ${activeTab === 'reviews' ? 'active-btn' : ''}`} onClick={() => setActiveTab('reviews')}>Reviews</li>
                                </ul>
                            </div>
                            <div className="tabs-content">
                                {activeTab === 'description' && (
                                    <div className="tab active-tab">
                                        <div className="text">
                                            <h3 className="product-description__title">Description</h3>
                                            <p className="product-description__text1">{product.description || 'Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don\'t look even slightly believable.'}</p>
                                            <div className="product-description__list">
                                                <ul className="list-unstyled">
                                                    <li><p><span className="fa fa-arrow-right"></span> Nam at elit nec neque suscipit gravida.</p></li>
                                                    <li><p><span className="fa fa-arrow-right"></span> Aenean egestas orci eu maximus tincidunt.</p></li>
                                                    <li><p><span className="fa fa-arrow-right"></span> Curabitur vel turpis id tellus cursus laoreet.</p></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {activeTab === 'reviews' && (
                                    <div className="tab active-tab">
                                        <div className="customer-comment">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 comment-column">
                                                    <div className="single-comment-box">
                                                        <div className="inner-box">
                                                            <figure className="comment-thumb"><img src="/images/resource/testi-2.jpg" alt="" /></figure>
                                                            <div className="inner">
                                                                <ul className="rating clearfix">
                                                                    <li><i className="fas fa-star"></i></li>
                                                                    <li><i className="fas fa-star"></i></li>
                                                                    <li><i className="fas fa-star"></i></li>
                                                                    <li><i className="fas fa-star"></i></li>
                                                                    <li><i className="fas fa-star"></i></li>
                                                                </ul>
                                                                <h5>Jon D. William, <span>10 Jan, 2023 . 4:00 pm</span></h5>
                                                                <p>Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="related-product">
                <div className="container pt-0 pb-90">
                    <h3>Related Products</h3>
                    <div className="row clearfix">
                        {relatedProducts.map((relProduct) => (
                            <div key={relProduct._id} className="product-block col-lg-3 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image">
                                        <Link to={`/product-details/${relProduct._id}`}><img src={relProduct.image} alt={relProduct.name} /></Link>
                                    </div>
                                    <div className="content">
                                        <h4><Link to={`/product-details/${relProduct._id}`}>{relProduct.name}</Link></h4>
                                        <span className="price">{relProduct.price}</span>
                                        <span className="rating">
                                            {[...Array(5)].map((_, i) => (
                                                <i key={i} className={`fa fa-star ${i < Math.floor(relProduct.rating || 5) ? '' : 'text-muted'}`}></i>
                                            ))}
                                        </span>
                                    </div>
                                    <div className="icon-box">
                                        <Link to="#" className="ui-btn like-btn"><i className="fa fa-heart"></i></Link>
                                        <Link to="/cart" className="ui-btn add-to-cart"><i className="fa fa-shopping-cart"></i></Link>
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

export default ProductDetails;



