import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Select from 'react-select';
import { API_BASE_URL } from '../config/api';

const stateOptions = [
    { value: 'Andhra Pradesh', label: 'Andhra Pradesh' },
    { value: 'Arunachal Pradesh', label: 'Arunachal Pradesh' },
    { value: 'Assam', label: 'Assam' },
    { value: 'Bihar', label: 'Bihar' },
    { value: 'Chhattisgarh', label: 'Chhattisgarh' },
    { value: 'Goa', label: 'Goa' },
    { value: 'Gujarat', label: 'Gujarat' },
    { value: 'Haryana', label: 'Haryana' },
    { value: 'Himachal Pradesh', label: 'Himachal Pradesh' },
    { value: 'Jharkhand', label: 'Jharkhand' },
    { value: 'Karnataka', label: 'Karnataka' },
    { value: 'Kerala', label: 'Kerala' },
    { value: 'Madhya Pradesh', label: 'Madhya Pradesh' },
    { value: 'Maharashtra', label: 'Maharashtra' },
    { value: 'Manipur', label: 'Manipur' },
    { value: 'Meghalaya', label: 'Meghalaya' },
    { value: 'Mizoram', label: 'Mizoram' },
    { value: 'Nagaland', label: 'Nagaland' },
    { value: 'Odisha', label: 'Odisha' },
    { value: 'Punjab', label: 'Punjab' },
    { value: 'Rajasthan', label: 'Rajasthan' },
    { value: 'Sikkim', label: 'Sikkim' },
    { value: 'Tamil Nadu', label: 'Tamil Nadu' },
    { value: 'Telangana', label: 'Telangana' },
    { value: 'Tripura', label: 'Tripura' },
    { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
    { value: 'Uttarakhand', label: 'Uttarakhand' },
    { value: 'West Bengal', label: 'West Bengal' },
    { value: 'Andaman and Nicobar Islands', label: 'Andaman and Nicobar Islands' },
    { value: 'Chandigarh', label: 'Chandigarh' },
    { value: 'Dadra and Nagar Haveli and Daman and Diu', label: 'Dadra and Nagar Haveli and Daman and Diu' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Jammu and Kashmir', label: 'Jammu and Kashmir' },
    { value: 'Ladakh', label: 'Ladakh' },
    { value: 'Lakshadweep', label: 'Lakshadweep' },
    { value: 'Puducherry', label: 'Puducherry' },
];

const countryCodes = [
    { name: 'India', code: '+91', flag: '🇮🇳' },
    { name: 'United States', code: '+1', flag: '🇺🇸' },
    { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
    { name: 'Canada', code: '+1', flag: '🇨🇦' },
    { name: 'Australia', code: '+61', flag: '🇦🇺' },
    { name: 'Germany', code: '+49', flag: '🇩🇪' },
    { name: 'France', code: '+33', flag: '🇫🇷' },
    { name: 'Japan', code: '+81', flag: '🇯🇵' },
    { name: 'China', code: '+86', flag: '🇨🇳' },
    { name: 'Singapore', code: '+65', flag: '🇸🇬' },
    { name: 'UAE', code: '+971', flag: '🇦🇪' },
    { name: 'Saudi Arabia', code: '+966', flag: '🇸🇦' },
    { name: 'Pakistan', code: '+92', flag: '🇵🇰' },
    { name: 'Bangladesh', code: '+880', flag: '🇧🇩' },
    { name: 'Sri Lanka', code: '+94', flag: '🇱🇰' },
    { name: 'Nepal', code: '+977', flag: '🇳🇵' },
    { name: 'Malaysia', code: '+60', flag: '🇲🇾' },
    { name: 'Thailand', code: '+66', flag: '🇹🇭' },
    { name: 'South Korea', code: '+82', flag: '🇰🇷' },
    { name: 'Indonesia', code: '+62', flag: '🇮🇩' },
];

const CareersModal = ({ isOpen, onClose, role }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        countryCode: '+91',
        state: '',
    });
    const [resume, setResume] = useState(null);
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [countrySearch, setCountrySearch] = useState('');
    const [showCountryDropdown, setShowCountryDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setResume(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!resume) {
            setStatus({ type: 'error', message: 'Please upload your resume.' });
            return;
        }

        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('mobile', formData.mobile);
        data.append('state', formData.state);
        data.append('role', role);
        data.append('resume', resume);

        setLoading(true);
        setStatus({ type: 'info', message: 'Submitting application...' });

        try {
            await axios.post(`${API_BASE_URL}/careers`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setStatus({ type: 'success', message: 'Application submitted successfully!' });
            setFormData({ name: '', email: '', mobile: '', state: '' });
            setResume(null);
            setTimeout(() => {
                onClose();
                setStatus({ type: '', message: '' });
            }, 2000);
        } catch (error) {
            setStatus({
                type: 'error',
                message: error.response?.data?.message || 'Failed to submit application. Please try again.',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <div className="h-2 w-full bg-theme-primary"></div>
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
                        >
                            <i className="fa-solid fa-xmark text-2xl"></i>
                        </button>

                        <div className="p-8 lg:p-10">
                            <h2 className="text-3xl font-bold text-theme-black mb-2">Apply for {role}</h2>
                            <p className="text-gray-500 mb-8 font-medium">Please fill in your details to apply.</p>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-theme-black font-bold mb-2 text-xs uppercase tracking-wider">Full Name*</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-theme-primary/30 transition-all text-sm font-medium"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-theme-black font-bold mb-2 text-xs uppercase tracking-wider">Email Address*</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-theme-primary/30 transition-all text-sm font-medium"
                                        />
                                    </div>
                                    <div className="careers-phone-input">
                                        <label className="block text-theme-black font-bold mb-2 text-xs uppercase tracking-wider">Mobile Number*</label>
                                        <PhoneInput
                                            country={'in'}
                                            value={formData.mobile}
                                            onChange={(value) => setFormData({ ...formData, mobile: value })}
                                            enableSearch={true}
                                            searchPlaceholder="Search country..."
                                            containerClass="!w-full"
                                            inputClass="!w-full !h-12 !bg-gray-50 !border-gray-200 !rounded-xl !text-sm !font-medium"
                                            buttonClass="!bg-transparent !border-none"
                                            dropdownClass="!bg-white !shadow-lg !rounded-xl"
                                            searchClass="!bg-gray-50 !border-gray-200 !rounded-lg !px-3 !py-2 !mx-2 !my-2"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-theme-black font-bold mb-2 text-xs uppercase tracking-wider">State*</label>
                                    <Select
                                        className="state-select-dropdown"
                                        classNamePrefix="state-select"
                                        options={stateOptions}
                                        value={stateOptions.find(option => option.value === formData.state)}
                                        onChange={(selectedOption) => setFormData({ ...formData, state: selectedOption?.value || '' })}
                                        placeholder="Search state..."
                                        isClearable
                                        isSearchable
                                        styles={{
                                            control: (base, state) => ({
                                                ...base,
                                                padding: '6px 12px 6px 40px',
                                                backgroundColor: '#f9fafb',
                                                borderColor: state.isFocused ? '#FFD700' : '#e5e7eb',
                                                borderRadius: '12px',
                                                boxShadow: state.isFocused ? '0 0 0 2px rgba(255, 215, 0, 0.3)' : 'none',
                                                backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 512 512\'%3E%3Cpath fill=\'%23999\' d=\'M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z\'/%3E%3C/svg%3E")',
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: '15px center',
                                                backgroundSize: '16px 16px',
                                                '&:hover': {
                                                    borderColor: '#FFD700',
                                                },
                                                fontSize: '14px',
                                                fontWeight: '500',
                                            }),
                                            valueContainer: (base) => ({
                                                ...base,
                                                padding: '0',
                                            }),
                                            input: (base) => ({
                                                ...base,
                                                margin: '0',
                                                padding: '0',
                                            }),
                                            menu: (base) => ({
                                                ...base,
                                                borderRadius: '12px',
                                                overflow: 'hidden',
                                                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                                            }),
                                            option: (base, state) => ({
                                                ...base,
                                                backgroundColor: state.isSelected ? '#FFD700' : state.isFocused ? '#fff9e6' : 'white',
                                                color: state.isSelected ? '#000' : '#333',
                                                fontSize: '14px',
                                                fontWeight: state.isSelected ? '600' : '500',
                                                padding: '10px 15px',
                                                cursor: 'pointer',
                                            }),
                                            placeholder: (base) => ({
                                                ...base,
                                                color: '#9ca3af',
                                                fontSize: '14px',
                                            }),
                                        }}
                                    />
                                </div>

                                <div>
                                    <label className="block text-theme-black font-bold mb-2 text-xs uppercase tracking-wider">Upload Resume (PDF/DOC)*</label>
                                    <div className="relative group/file">
                                        <input
                                            type="file"
                                            required
                                            accept=".pdf,.doc,.docx"
                                            onChange={handleFileChange}
                                            className="hidden"
                                            id="resume-upload"
                                        />
                                        <label
                                            htmlFor="resume-upload"
                                            className="flex items-center gap-3 w-full px-5 py-3.5 bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer group-hover/file:border-theme-primary transition-all"
                                        >
                                            <i className="fa-solid fa-cloud-arrow-up text-xl text-gray-400 group-hover/file:text-theme-primary"></i>
                                            <span className="text-sm font-medium text-gray-400 group-hover/file:text-theme-black">
                                                {resume ? resume.name : 'Choose file...'}
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-theme-primary text-theme-black font-black py-4 rounded-xl hover:bg-theme-black hover:text-white transition-all duration-300 shadow-lg shadow-theme-primary/20 transform active:scale-95 disabled:opacity-50 uppercase tracking-widest text-sm"
                                    >
                                        {loading ? 'Submitting...' : 'Apply Now'}
                                    </button>
                                </div>

                                {status.message && (
                                    <p className={`text-center text-sm font-bold ${status.type === 'error' ? 'text-red-500' : 'text-green-600'}`}>
                                        {status.message}
                                    </p>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
            <style jsx global>{`
                .careers-phone-input .selected-flag {
                    background: transparent !important;
                }
                .careers-phone-input .form-control {
                    width: 100% !important;
                }
                
                /* Hide the default search icon above the input */
                .react-tel-input .country-list .search-emoji {
                    display: none !important;
                }
                
                /* Target all possible search input selectors for country code */
                .react-tel-input .country-list .search {
                    margin: 8px 10px !important;
                    padding: 0 !important;
                }
                
                .react-tel-input .country-list .search input,
                .react-tel-input input.search-class,
                input[placeholder="Search country..."] {
                    padding-left: 35px !important;
                    background: #f9fafb url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23999' d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z'/%3E%3C/svg%3E") no-repeat 8px center !important;
                    background-size: 16px 16px !important;
                    border: 1px solid #e5e7eb !important;
                    border-radius: 8px !important;
                    width: 100% !important;
                }
                
                /* Add search icon to react-select input */
                .css-1dimb5e-singleValue,
                .css-qbdosj-Input input {
                    padding-left: 25px !important;
                }
                
                .css-13cymwt-control,
                .css-t3ipsp-control {
                    position: relative;
                }
                
                .css-13cymwt-control::before,
                .css-t3ipsp-control::before {
                    content: "";
                    position: absolute;
                    left: 20px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 16px;
                    height: 16px;
                    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23999' d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z'/%3E%3C/svg%3E") no-repeat center;
                    background-size: contain;
                    pointer-events: none;
                    z-index: 10;
                }
            `}</style>
        </AnimatePresence>
    );
};

export default CareersModal;


