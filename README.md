# MakeEasyFilings

A MERN stack application for business consulting and filings.

## Setup

### Backend
1. `cd backend`
2. `npm install`
3. `npm start` (or `npm run dev` for nodemon)

### Frontend
1. `cd frontend`
2. `npm install`
3. `npm run dev`

## Dev API Notes
- The frontend uses a Vite dev proxy so `/api` requests are forwarded to the backend at `http://localhost:5001` by default.
- If your backend runs on a different host/port, set `VITE_DEV_API_TARGET` in `frontend/.env` (see `frontend/.env.example`).
- If CRM runs on port 5000, keep this website backend on port 5001 (update `backend/.env`) and point `VITE_DEV_API_TARGET` to 5001.

## Technologies
- React.js
- Node.js
- Express.js
- MongoDB
- Bootstrap
