import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Winter Black Jacket", size: "Medium", price: 36, quantity: 1, img: "/images/resource/products/1.jpg" },
        { id: 2, name: "Swan Crop V-Neck Tee", size: "Small", price: 115, quantity: 1, img: "/images/resource/products/2.jpg" },
        { id: 3, name: "Blue Solid Casual Shirt", size: "Large", price: 68, quantity: 1, img: "/images/resource/products/3.jpg" }
    ]);

    const updateQuantity = (id, delta) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        ));
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = 70;
    const total = subtotal + shipping;

    return (
        <>
            <section className="page-title" style={{ backgroundImage: 'url(/images/background/page-title-bg.jpg)' }}>
                <div className="auto-container">
                    <div className="title-outer">
                        <h1 className="title">Cart</h1>
                        <ul className="page-breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li>Cart</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div className="container pt-120 pb-100">
                    <div className="section-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="table-responsive">
                                    <table className="table table-striped table-bordered tbl-shopping-cart">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Photo</th>
                                                <th>Product Name</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartItems.map((item) => (
                                                <tr key={item.id} className="cart_item">
                                                    <td className="product-remove"><button onClick={() => removeItem(item.id)} className="remove" style={{ border: 'none', background: 'none' }}>×</button></td>
                                                    <td className="product-thumbnail"><Link to="/product-details"><img alt={item.name} src={item.img} /></Link></td>
                                                    <td className="product-name">
                                                        <Link to="/product-details">{item.name}</Link>
                                                        <ul className="variation">
                                                            <li className="variation-size">Size: <span>{item.size}</span></li>
                                                        </ul>
                                                    </td>
                                                    <td className="product-price"><span className="amount">${item.price.toFixed(2)}</span></td>
                                                    <td className="product-quantity">
                                                        <div className="product-details__quantity">
                                                            <div className="quantity-box">
                                                                <button type="button" className="sub" onClick={() => updateQuantity(item.id, -1)}><i className="fa fa-minus"></i></button>
                                                                <input type="number" value={item.quantity} readOnly />
                                                                <button type="button" className="add" onClick={() => updateQuantity(item.id, 1)}><i className="fa fa-plus"></i></button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="product-subtotal"><span className="amount">${(item.price * item.quantity).toFixed(2)}</span></td>
                                                </tr>
                                            ))}
                                            <tr className="cart_item">
                                                <td colspan="3">
                                                    <form className="row g-3 coupon-form" onSubmit={(e) => e.preventDefault()}>
                                                        <div className="col-auto">
                                                            <input type="text" name="coupon_code" className="input-text form-control mr-1" placeholder="Coupon code" />
                                                        </div>
                                                        <div className="col-auto">
                                                            <button type="submit" className="apply-button"><span className="btn-title">Apply Coupon</span></button>
                                                        </div>
                                                    </form>
                                                </td>
                                                <td colspan="2">&nbsp;</td>
                                                <td><button type="button" className="theme-btn btn-two"><span className="btn-title">Update Cart</span></button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-md-12 mt-30">
                                <div className="row">
                                    <div className="col-md-5">
                                        <h4>Calculate Shipping</h4>
                                        <form className="form" onSubmit={(e) => e.preventDefault()}>
                                            <div className="mb-4 sm:mb-8">
                                                <select className="form-select bg-light mb-10">
                                                    <option>Select Country</option>
                                                    <option>Australia</option>
                                                    <option>UK</option>
                                                    <option>USA</option>
                                                </select>
                                            </div>
                                            <div className="my-3">
                                                <input type="text" className="form-control bg-light" placeholder="State/country" />
                                            </div>
                                            <div className="mb-4 sm:mb-8">
                                                <input type="text" className="form-control bg-light" placeholder="Postcod/zip" />
                                            </div>
                                            <div className="mb-30">
                                                <button type="button" className="theme-btn btn-two"><span className="btn-title">Update Totals</span></button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-2"></div>
                                    <div className="col-md-5">
                                        <h4>Cart Totals</h4>
                                        <table className="table table-bordered cart-total">
                                            <tbody>
                                                <tr>
                                                    <td>Cart Subtotal</td>
                                                    <td>${subtotal.toFixed(2)}</td>
                                                </tr>
                                                <tr>
                                                    <td>Shipping and Handling</td>
                                                    <td>${shipping.toFixed(2)}</td>
                                                </tr>
                                                <tr>
                                                    <td>Order Total</td>
                                                    <td>${total.toFixed(2)}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <Link className="theme-btn btn-two" to="/checkout"><span className="btn-title">Proceed to Checkout</span> </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cart;
