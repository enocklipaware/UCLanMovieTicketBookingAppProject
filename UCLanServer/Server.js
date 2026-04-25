import {clerkMiddleware} from '@clerk/express';
import { serve } from "inngest/express";
import { inngest, functions } from "./Inngest/Index.js";
import showRouter from './Routes/ShowRoutes.js';
import bookingRoutes from './Routes/BookingRoutes.js';
import adminRouter from './Routes/AdminRoutes.js';
import userRouter from './Routes/UserRoutes.js';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './Config/db.js';

const app = express();
const port = 3000;

await connectDB();

//Stripe Webhook Endpoint Route
// app.use('/api/stripe', express.raw({type: 'application/json'}), stripeWebhook)

// Middleware
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// API Routes
app.get('/', (req, res) => res.send('Welcome to the UCLan Movie Ticket App Server!'));
app.use('/api/inngest', serve({ client: inngest, functions }));
app.use('/api/show', showRouter)
app.use('/api/booking', bookingRoutes)
app.use('/api/admin', adminRouter)
app.use('/api/user', userRouter)

// Start the server
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));