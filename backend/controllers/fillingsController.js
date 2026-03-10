const Filling = require('../models/Filling');
const asyncHandler = require('../middleware/asyncHandler');
const { sendEmail } = require('../services/email.service');
const { saveToCrmFillings } = require('../services/crmDb.service');

// @desc    Create new filling lead
// @route   POST /api/v1/fillings
// @access  Public
const createFilling = asyncHandler(async (req, res) => {
  const { name, email, message, mobile, serviceName, disputeFor, country, companyType } = req.body;

  const filling = await Filling.create({
    name,
    email,
    mobile,
    message,
    serviceName,
    disputeFor,
    country,
    companyType
  });

  if (filling) {
    // Save directly to CRM MongoDB (no CRM server needed — fire and forget)
    saveToCrmFillings({ name, email, mobile, message, serviceName });

    // Send admin notification email only (no user email)
    const adminEmail = process.env.ADMIN_LEADS_EMAIL || process.env.EMAIL_USER;
    if (adminEmail) {
      const safeName = typeof name === 'string' && name.trim() ? name.trim() : 'N/A';
      const requestedService = serviceName || 'General Inquiry';
      const resolvedCountry = country || 'India';
      const emailSubject = `New Lead - ${requestedService}`;
      const emailBody = `New lead received from MakeEasyFilings.

Name: ${safeName}
Email: ${email || 'N/A'}
Phone: ${mobile || 'N/A'}
Service: ${requestedService}
Country: ${resolvedCountry}
`;

      const emailHtml = `
        <div style="margin:0; padding:24px; background:#0b0b0b;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px; margin:0 auto; border:1px solid #2c2c2c; border-radius:14px; overflow:hidden; background:#141414;">
            <tr>
              <td style="padding:22px 24px; text-align:center; background:#101010;">
                <div style="color:#f6c300; font-size:22px; font-weight:800; letter-spacing:0.4px;">MakeEasyFilings</div>
                <div style="color:#bdbdbd; font-size:12px; margin-top:6px;">Admin Lead Notification</div>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 24px; color:#e6e6e6; font-size:14px; line-height:1.7;">
                <div style="margin:0 0 10px 0;"><strong>New lead received.</strong></div>
                <div><strong>Name:</strong> ${safeName}</div>
                <div><strong>Email:</strong> ${email || 'N/A'}</div>
                <div><strong>Phone:</strong> ${mobile || 'N/A'}</div>
                <div><strong>Service:</strong> ${requestedService}</div>
                <div><strong>Country:</strong> ${resolvedCountry}</div>
              </td>
            </tr>
          </table>
        </div>
      `;

      try {
        const emailResult = await sendEmail(adminEmail, emailSubject, emailBody, emailHtml);
        if (!emailResult) {
          console.warn('Admin lead email skipped or failed');
        }
      } catch (emailErr) {
        console.error('Admin lead email error:', emailErr?.message || emailErr);
      }
    } else {
      console.warn('Admin lead email skipped: missing ADMIN_LEADS_EMAIL/EMAIL_USER');
    }

    res.status(201).json({
      _id: filling._id,
      name: filling.name,
      email: filling.email,
      success: true,
      message: 'Information received successfully!'
    });
  } else {
    res.status(400);
    throw new Error('Invalid data provided');
  }
});

// @desc    Get all fillings
// @route   GET /api/v1/fillings
// @access  Public (should be Private if Auth implemented)
const getFillings = asyncHandler(async (req, res) => {
  const fillings = await Filling.find({}).sort({ createdAt: -1 });
  res.json(fillings);
});

module.exports = {
  createFilling,
  getFillings,
};
