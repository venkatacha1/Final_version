const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { submitApplication } = require('../controllers/careerController');

// Multer storage configuration
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename(req, file, cb) {
        cb(
            null,
            `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
        );
    },
});

const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
        const ext = path.extname(file.originalname).toLowerCase();
        const allowedExt = ['.pdf', '.doc', '.docx'];
        const allowedMime = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ];

        const extOk = allowedExt.includes(ext);
        const mimeOk = allowedMime.includes(file.mimetype);

        if (extOk && (mimeOk || file.mimetype === 'application/octet-stream')) {
            return cb(null, true);
        }

        cb(new Error('Resumes Only (PDF/DOC/DOCX)!'));
    },
});

router.post('/', upload.single('resume'), submitApplication);

module.exports = router;
