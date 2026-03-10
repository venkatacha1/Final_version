// services/crmDb.service.js
// Direct MongoDB write to CRM database.
// When a MEF form is submitted, this saves the lead directly into
// the CRM's "fillings" collection so it appears in Freshtank.
// This file also supports saving chatbot logs directly into CRM.

const mongoose = require('mongoose');

// Minimal Fillings schema - must match d:\mfrcf\backend\src\models\Fillings.model.js
const FillingsSchema = new mongoose.Schema(
    {
        name:        { type: String, required: true, trim: true },
        email:       { type: String, lowercase: true, trim: true },
        mobile:      { type: String, trim: true, default: '' },
        message:     { type: String, default: '' },
        serviceName: { type: String, required: true, trim: true },
        source:      { type: String, trim: true, default: 'External Form' },
        leadId:      { type: mongoose.Schema.Types.ObjectId, ref: 'Lead' },
        converted:   { type: Boolean, default: false },
        claimedBy: {
            id:         { type: mongoose.Schema.Types.ObjectId },
            name:       { type: String },
            role:       { type: String },
            employeeID: { type: String },
            claimedAt:  { type: Date }
        }
    },
    { timestamps: true }
);

const ChatbotLogSchema = new mongoose.Schema(
    {
        userId:          { type: String, required: true, trim: true },
        question:        { type: String, required: true, trim: true },
        chatbotResponse: { type: String, required: true, trim: true },
        source:          { type: String, default: 'makeeasyfillings' },
        leadName:        { type: String, default: '' },
        phone:           { type: String, default: '' },
        email:           { type: String, default: '' },
        service:         { type: String, default: '' },
        category:        { type: String, default: '' },
        createdAt:       { type: Date, default: Date.now }
    },
    { timestamps: false }
);

// connection singleton
let crmConn = null;
let CrmFilling = null;
let CrmChatbotLog = null;
let chatbotCollectionName = null;

async function getCrmConnection() {
    if (crmConn) return crmConn;

    const uri = process.env.CRM_MONGO_URI;
    if (!uri) {
        throw new Error('CRM_MONGO_URI is not set in .env');
    }

    crmConn = mongoose.createConnection(uri, { serverSelectionTimeoutMS: 8000 });

    // Wait for the connection to open
    await new Promise((resolve, reject) => {
        crmConn.once('open', resolve);
        crmConn.once('error', reject);
    });

    console.log('[CRM-DB] Connected to CRM MongoDB (crm_dev)');
    return crmConn;
}

async function getCrmFillingsModel() {
    if (CrmFilling) return CrmFilling; // already ready

    const conn = await getCrmConnection();

    // Force the same collection name the CRM uses: "fillings"
    CrmFilling = conn.model('CrmFillings', FillingsSchema, 'fillings');
    return CrmFilling;
}

async function resolveChatbotCollectionName(conn) {
    if (chatbotCollectionName) return chatbotCollectionName;

    const candidates = [
        'chatbot-logs',
        'chatbotlogs',
        'chatbot_logs',
        'chatbotLogs'
    ];

    try {
        const existing = await conn.db.listCollections({}, { nameOnly: true }).toArray();
        const existingNames = new Set(existing.map((c) => c.name));
        const matched = candidates.find((name) => existingNames.has(name));
        chatbotCollectionName = matched || 'chatbot-logs';
    } catch (err) {
        chatbotCollectionName = 'chatbot-logs';
    }

    return chatbotCollectionName;
}

async function getCrmChatbotLogModel() {
    if (CrmChatbotLog) return CrmChatbotLog;

    const conn = await getCrmConnection();
    const collectionName = await resolveChatbotCollectionName(conn);
    CrmChatbotLog = conn.model('CrmChatbotLogs', ChatbotLogSchema, collectionName);
    return CrmChatbotLog;
}

/**
 * Save a form submission directly into the CRM's fillings collection.
 * Call this fire-and-forget style - it will never throw to the caller.
 *
 * @param {{ name, email, mobile, serviceName, message, source }} payload
 */
async function saveToCrmFillings(payload) {
    try {
        const Model = await getCrmFillingsModel();

        // Clean service name (remove generic default title)
        const GENERIC_RE = /our experts will contact you!?/i;
        let serviceName = (payload.serviceName || '').replace(GENERIC_RE, '').trim();
        if (!serviceName) serviceName = 'General Inquiry';

        await Model.create({
            name:        payload.name        || '',
            email:       payload.email       || '',
            mobile:      payload.mobile      || '',
            message:     payload.message     || '',
            serviceName: serviceName,
            source:      payload.source || 'makeeasyfilings.com',
            converted:   false,
        });

        console.log(`[CRM-DB] Filling saved to CRM for "${serviceName}"`);
    } catch (err) {
        // Non-blocking - just log, never break the main form submission
        console.error('[CRM-DB] Failed to save to CRM MongoDB:', err.message || err);
    }
}

/**
 * Save a chatbot log directly into the CRM chatbot collection.
 * Fire-and-forget style - it will never throw to the caller.
 */
async function saveToCrmChatbotLogs(payload) {
    try {
        if (!payload?.userId || !payload?.question || !payload?.chatbotResponse) {
            return;
        }

        const Model = await getCrmChatbotLogModel();
        await Model.create({
            userId:          payload.userId,
            question:        payload.question,
            chatbotResponse: payload.chatbotResponse,
            source:          payload.source || 'makeeasyfillings',
            leadName:        payload.leadName || '',
            phone:           payload.phone || '',
            email:           payload.email || '',
            service:         payload.service || '',
            category:        payload.category || '',
            createdAt:       payload.createdAt || new Date()
        });

        console.log(`[CRM-DB] Chatbot log saved for userId ${payload.userId}`);
    } catch (err) {
        console.error('[CRM-DB] Failed to save chatbot log:', err.message || err);
    }
}

module.exports = { saveToCrmFillings, saveToCrmChatbotLogs };
