const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const fillingsRoutes = require('./routes/fillingsRoutes');
const careerRoutes = require('./routes/careerRoutes');
const commentRoutes = require('./routes/commentRoutes');
const botChatRoutes = require('./routes/botChatRoutes');
const { loadServicesFromExcel } = require('./modules/services/serviceLoader');
const { initScheduler } = require('./modules/scheduler/summaryScheduler');

// Environment variables loaded at top

connectDB();

const app = express();

const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

const isProduction = process.env.NODE_ENV === 'production';

const allowedOrigins = [
    'https://makeeasyfilings.com',
    'https://www.makeeasyfilings.com',
    ...(isProduction
        ? []
        : [
            'http://localhost:5173',
            'http://127.0.0.1:5173',
            'http://localhost:5174',
            'http://127.0.0.1:5174',
            'http://localhost:5175',
            'http://127.0.0.1:5175',
            'http://localhost:3000',
            'http://127.0.0.1:3000',
        ]),
];

app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
                return callback(null, true);
            }

            return callback(new Error('Not allowed by CORS'));
        },
        credentials: true,
    })
);

app.use(
    helmet({
        crossOriginResourcePolicy: { policy: 'cross-origin' },
    })
);

app.use(
    '/api',
    rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 200,
        standardHeaders: true,
        legacyHeaders: false,
        message: {
            message: 'Too many requests, please try again later.',
        },
    })
);

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

loadServicesFromExcel();
initScheduler();

app.get('/api/health', (req, res) => {
    res.status(200).json({
        status: 'ok',
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development',
    });
});

app.use('/api/v1/fillings', fillingsRoutes);
app.use('/api/careers', careerRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/v1/bot', botChatRoutes);

app.use('/uploads', express.static(uploadsDir));

app.get('/', (req, res) => {
    res.status(200).send('API is running...');
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});

const gracefulShutdown = async (signal) => {
    console.log(`${signal} received. Starting graceful shutdown...`);

    server.close(async () => {
        try {
            await mongoose.connection.close();
            console.log('MongoDB connection closed.');
            process.exit(0);
        } catch (error) {
            console.error('Error closing MongoDB connection:', error.message);
            process.exit(1);
        }
    });

    setTimeout(() => {
        console.error('Graceful shutdown timed out. Forcing exit.');
        process.exit(1);
    }, 10000).unref();
};

process.on('SIGINT', () => gracefulShutdown('SIGINT'));
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
