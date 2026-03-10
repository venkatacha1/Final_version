import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

const ProfileCard = ({ image, name, title, socialColor = "#f9d74f", objectPosition = "object-top", linkedinUrl = "#", instagramUrl = "#" }) => {
    return (
        <div className="relative group w-full h-[400px] overflow-hidden rounded-2xl cursor-pointer">
            {/* Image Background */}
            <motion.img
                src={image}
                alt={name}
                className={`w-full h-full object-cover ${objectPosition}`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
            />

            {/* Overlay Gradient (Visible on Hover) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content (Slides up on Hover) */}
            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                {/* Decorative Line */}
                <div className="w-12 h-1 mb-4 rounded-full" style={{ backgroundColor: socialColor }}></div>

                {/* Name & Title (Optional here since we have it outside, but good for the card effect) */}
                <h3 className="text-white text-2xl font-bold font-title">{name}</h3>
                <p className="text-gray-200 font-text text-sm mb-4">{title}</p>

                {/* Social Icons */}
                <div className="flex gap-4">
                    {linkedinUrl !== "#" && (
                        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors backdrop-blur-sm">
                            <Linkedin size={20} />
                        </a>
                    )}

                    {instagramUrl !== "#" && (
                        <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors backdrop-blur-sm">
                            <Instagram size={20} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
