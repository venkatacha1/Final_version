import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../config/api';

const Shop = () => {
    const [filter, setFilter] = useState('all');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axios.get(`${API_BASE_URL}/products`);
                setProducts(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch products');
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const filterTabs = [
        { label: "All", value: "all" },
        { label: "Compass", value: "dairy" },
        { label: "Reel", value: "pantry" },
        { label: "Stearing", value: "meat" },
        { label: "Jacket", value: "fruit" },
        { label: "Binocular", value: "vagetables" }
    ];

    const filteredProducts = filter === 'all'
        ? products
        : products.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()));

    if (loading) return <div className="text-center pt-120 pb-120">Loading products...</div>;
    if (error) return <div className="text-center pt-120 pb-120 text-danger">{error}</div>;

    return (
        <>
            <section className="page-title" style={{ backgroundImage: 'url(/images/background/page-title-bg.jpg)' }}>
                <div className="auto-container">
                    <div className="title-outer">
                        <h1 className="title">Shop</h1>
                        <ul className="page-breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li>Products</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="featured-products">
                <div className="auto-container">
                    <div className="mixitup-gallery">
                        <div className="filters clearfix">
                            <ul className="filter-tabs filter-btns clearfix">
                                {filterTabs.map((tab) => (
                                    <li
                                        key={tab.value}
                                        className={filter === tab.value ? 'active filter' : 'filter'}
                                        onClick={() => setFilter(tab.value)}
                                    >
                                        {tab.label}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="filter-list row">
                            {filteredProducts.map((product) => (
                                <div key={product._id} className="product-block col-lg-3 col-md-6 col-sm-12">
                                    <div className="inner-box">
                                        <div className="image">
                                            <Link to={`/product-details/${product._id}`}><img src={product.image} alt={product.name} /></Link>
                                        </div>
                                        <div className="content">
                                            <h4><Link to={`/product-details/${product._id}`}>{product.name}</Link></h4>
                                            <span className="price">{product.price}</span>
                                            <span className="rating">
                                                {[...Array(5)].map((_, i) => (
                                                    <i key={i} className={`fa fa-star ${i < Math.floor(product.rating || 5) ? '' : 'text-muted'}`}></i>
                                                ))}
                                            </span>
                                        </div>
                                        <div className="icon-box">
                                            <Link to={`/product-details/${product._id}`} className="ui-btn like-btn"><i className="fa fa-heart"></i></Link>
                                            <Link to="/cart" className="ui-btn add-to-cart"><i className="fa fa-shopping-cart"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Shop;


