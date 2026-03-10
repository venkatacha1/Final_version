import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../config/api';

const Checkout = () => {
    const navigate = useNavigate();
    const [activeAccordion, setActiveAccordion] = useState(0);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');

    const [billingDetails, setBillingDetails] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: 'Andhra Pradesh',
        country: 'India'
    });

    const states = [
        'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
        'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh',
        'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
        'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
        'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh',
        'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Jammu and Kashmir',
        'Ladakh', 'Lakshadweep', 'Puducherry'
    ];

    const [orderNotes, setOrderNotes] = useState('');

    const handleInputChange = (e) => {
        setBillingDetails({ ...billingDetails, [e.target.name]: e.target.value });
    };

    const paymentMethods = [
        { title: "Credit Card / Debit Card", content: "Make your payment with credit or debit card." },
        { title: "Direct Bank Transfer", content: "Make your payment directly into our bank account." },
        { title: "Cheque Payment", content: "Please send a check to Store Name." },
        { title: "Other Payment", content: "Pay via PayPal." }
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Phone number validation (10 digits)
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(billingDetails.phone)) {
            setStatus('Error: Please enter a valid 10-digit mobile number.');
            return;
        }

        setLoading(true);
        setStatus('Processing order...');

        const orderData = {
            orderItems: [
                {
                    name: "Headphone",
                    qty: 2,
                    image: "/images/resource/products/1.jpg",
                    price: "36.00"
                }
            ],
            billingDetails: {
                ...billingDetails,
                phone: `+91 ${billingDetails.phone}`
            },
            paymentMethod: paymentMethods[activeAccordion].title,
            itemsPrice: "250.00",
            taxPrice: "0.00",
            shippingPrice: "0.00",
            totalPrice: "250.00",
            orderNotes
        };

        try {
            const { data } = await axios.post(`${API_BASE_URL}/orders`, orderData);
            setStatus('Order placed successfully! Order ID: ' + data._id);
            setLoading(false);
            // Optionally redirect after success
            // setTimeout(() => navigate('/'), 3000);
        } catch (error) {
            setStatus('Failed to place order. Please try again.');
            setLoading(false);
        }
    };

    return (
        <>
            <section className="page-title" style={{ backgroundImage: 'url(/images/background/page-title-bg.jpg)' }}>
                <div className="auto-container">
                    <div className="title-outer">
                        <h1 className="title">Checkout</h1>
                        <ul className="page-breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li>Checkout</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div className="container pt-80 pb-120">
                    <div className="section-content">
                        <form onSubmit={handleSubmit}>
                            <div className="row mt-30">
                                <div className="col-md-6">
                                    <div className="billing-details">
                                        <h3 className="mb-30">Billing Details</h3>
                                        <div className="row">
                                            <div className="mb-3 col-md-6">
                                                <label>First Name*</label>
                                                <input type="text" name="firstName" className="form-control" required value={billingDetails.firstName} onChange={handleInputChange} />
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label>Last Name*</label>
                                                <input type="text" name="lastName" className="form-control" required value={billingDetails.lastName} onChange={handleInputChange} />
                                            </div>
                                            <div className="col-md-12">
                                                <div className="mb-3">
                                                    <label>Company Name</label>
                                                    <input type="text" name="companyName" className="form-control" value={billingDetails.companyName} onChange={handleInputChange} />
                                                </div>
                                                <div className="mb-3">
                                                    <label>Email Address*</label>
                                                    <input type="email" name="email" className="form-control" required value={billingDetails.email} onChange={handleInputChange} />
                                                </div>
                                                <div className="mb-3">
                                                    <label>Phone Number*</label>
                                                    <div className="d-flex gap-2">
                                                        <div className="form-control" style={{ width: '100px', backgroundColor: '#f9f9f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                                                            +91
                                                        </div>
                                                        <input type="tel" name="phone" className="form-control" required value={billingDetails.phone} onChange={handleInputChange} />
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label>Address*</label>
                                                    <input type="text" name="address" className="form-control" required value={billingDetails.address} onChange={handleInputChange} />
                                                </div>
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label>City*</label>
                                                <input type="text" name="city" className="form-control" required value={billingDetails.city} onChange={handleInputChange} />
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label>State/Province*</label>
                                                <select name="state" className="form-select" value={billingDetails.state} onChange={handleInputChange}>
                                                    <option value="">Select State</option>
                                                    {states.map(state => (
                                                        <option key={state} value={state}>{state}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h3>Additional information</h3>
                                    <label>Order notes&nbsp;<span className="optional">(optional)</span></label>
                                    <textarea className="form-control" rows="3" value={orderNotes} onChange={(e) => setOrderNotes(e.target.value)}></textarea>
                                </div>
                                <div className="col-md-12 mt-30">
                                    <h3>Your order</h3>
                                    <table className="table table-striped table-bordered tbl-shopping-cart">
                                        <thead>
                                            <tr>
                                                <th>Photo</th>
                                                <th>Product Name</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="product-thumbnail"><img alt="product" src="/images/resource/products/1.jpg" /></td>
                                                <td className="product-name">Headphone x 2</td>
                                                <td><span className="amount">$36.00</span></td>
                                            </tr>
                                            <tr>
                                                <td>Order Total</td>
                                                <td>&nbsp;</td>
                                                <td>$250.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-md-12 mt-60">
                                    <div className="payment-method innerpage">
                                        <h3 className="mb-30">Choose a Payment Method</h3>
                                        <ul className="accordion-box">
                                            {paymentMethods.map((method, index) => (
                                                <li key={index} className={`accordion block ${activeAccordion === index ? 'active-block' : ''}`}>
                                                    <div className={`acc-btn ${activeAccordion === index ? 'active' : ''}`} onClick={() => setActiveAccordion(index)}>
                                                        {method.title}
                                                    </div>
                                                    <div className={`acc-content ${activeAccordion === index ? 'current' : ''}`}>
                                                        <div className="payment-info">
                                                            <p className="mb-0">{method.content}</p>
                                                            {index === 0 && (
                                                                <div className="row clearfix mt-3">
                                                                    <div className="col-md-6 mb-3">
                                                                        <input type="text" className="form-control" placeholder="Name on Card" />
                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <input type="text" className="form-control" placeholder="Card Number" />
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="mt-30">
                                            <button type="submit" className="theme-btn btn-two" disabled={loading}>
                                                <span className="btn-title">{loading ? 'Processing...' : 'Place Order'}</span>
                                            </button>
                                            {status && <p className={`mt-3 ${status.includes('successfully') ? 'text-success' : 'text-danger'}`}>{status}</p>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Checkout;


