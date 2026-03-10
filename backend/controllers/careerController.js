const Career = require('../models/Career');
const asyncHandler = require('../middleware/asyncHandler');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');

// @desc    Submit career application
// @route   POST /api/careers
// @access  Public
const submitApplication = asyncHandler(async (req, res) => {
    const { name, email, mobile, state, role } = req.body;
    const resumeFile = req.file;

    if (!resumeFile) {
        res.status(400);
        throw new Error('Please upload a resume');
    }

    const career = await Career.create({
        name,
        email,
        mobile,
        state,
        role,
        resumePath: resumeFile.path,
    });

    if (career) {
        const hasEmailConfig = process.env.EMAIL_USER && process.env.EMAIL_PASS;

        if (!hasEmailConfig) {
            res.status(201).json({
                success: true,
                message: 'Application submitted successfully!',
            });
            return;
        }

        // Send Email
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Or your preferred service
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'resume@makeeasyfilings.com',
            subject: `New Career Application: ${role} - ${name}`,
            text: `
                Name: ${name}
                Email: ${email}
                Mobile: ${mobile}
                State: ${state}
                Role: ${role}
            `,
            attachments: [
                {
                    filename: resumeFile.originalname,
                    path: resumeFile.path,
                },
            ],
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(201).json({
                success: true,
                message: 'Application submitted successfully!',
            });
        } catch (error) {
            console.error('Email sending failed:', error);
            // Even if email fails, we saved it to DB
            res.status(201).json({
                success: true,
                message: 'Application saved, but email notification failed.',
            });
        }
    } else {
        res.status(400);
        throw new Error('Invalid application data');
    }
});

module.exports = {
    submitApplication,
};
