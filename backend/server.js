import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";

import connectDB from './config/mongodb.js';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js'; // Import userRouter

const app = express();
const port = process.env.PORT || 4000;
connectDB();

const allowOrigins = [
    'http://localhost:5173',      // For your local development
    process.env.FRONTEND_URL      // For your live Vercel deployment
];

const corsOptions = {
    origin: (origin, callback) => {
        // If the origin is in our allowed list (or if it's not a browser request like Postman), allow it.
        if (allowOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true, // This is essential for sending cookies
};

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: allowOrigins })); // Adjust origin as needed

app.get('/', (req, res) => res.send("API WORKING"));
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter); // Use userRouter

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});