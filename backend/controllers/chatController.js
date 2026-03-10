const crypto = require('crypto');
const asyncHandler = require('../middleware/asyncHandler');

const newSessionId = () => {
    if (typeof crypto.randomUUID === 'function') {
        return crypto.randomUUID();
    }

    return crypto.randomBytes(16).toString('hex');
};

const normalizeAction = (value) => (value || '').toString().trim();

// @desc    Handle chat flow actions
// @route   POST /api/chat
// @access  Public
const handleChat = asyncHandler(async (req, res) => {
    const actionRaw = normalizeAction(req.body?.action);
    const action = actionRaw.toLowerCase();
    const session_id = normalizeAction(req.body?.session_id) || newSessionId();

    if (!actionRaw || action === 'init') {
        return res.json({ session_id });
    }

    if (action === 'start new chat') {
        return res.json({ reset: true, session_id: newSessionId() });
    }

    if (action === 'faqs' || action === 'faq') {
        return res.json({
            session_id,
            message: 'You can find FAQs at /faq. Would you like help with a service?',
            options: ['Select Service', 'Start New Chat']
        });
    }

    if (action === 'select service') {
        return res.json({
            session_id,
            message: 'Which service are you interested in?',
            options: [
                'GST Registration',
                'Trademark Registration',
                'Company Incorporation',
                'Start New Chat'
            ]
        });
    }

    const serviceReplies = {
        'gst registration': 'GST Registration details are available at /services/gst-registration.',
        'trademark registration': 'Trademark Registration details are available at /services/trademark-registration.',
        'company incorporation': 'Company Incorporation details are available at /services/private-limited-compliance.'
    };

    if (serviceReplies[action]) {
        return res.json({
            session_id,
            message: serviceReplies[action],
            options: ['Select Service', 'Start New Chat']
        });
    }

    return res.json({
        session_id,
        message:
            'Thanks for reaching out. Please share more details, or browse services at /services.',
        options: ['FAQs', 'Select Service', 'Start New Chat']
    });
});

module.exports = {
    handleChat
};
