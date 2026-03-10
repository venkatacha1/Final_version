import React from 'react';
import ServiceForm from './ServiceForm';

const ConsultModal = ({ isOpen, onClose, title }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative z-10 w-full max-w-lg mx-4 animate-fadeIn">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute -top-5 -right-5 w-12 h-12 bg-black rounded-full shadow-2xl flex items-center justify-center text-white hover:bg-theme-primary hover:text-black transition-all z-20 group border-4 border-white"
                    aria-label="Close modal"
                >
                    <i className="fa-solid fa-xmark text-xl group-hover:rotate-90 transition-transform duration-300"></i>
                </button>

                {/* Form */}
                <ServiceForm title={title || "Our Experts will contact you!"} />
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: scale(0.95) translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
            `}</style>
        </div>
    );
};

export default ConsultModal;
