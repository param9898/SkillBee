import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.js';
import gigRoute from './routes/gig.js';
import orderRoute from './routes/order.js';
import conversationRoute from './routes/conversation.js';
import messageRoute from './routes/message.js';
import reviewRoute from './routes/review.js';
import authRoute from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
dotenv.config();
mongoose.set('strictQuery', true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error('MongoDB Connection Error:', error);
  }
};

app.use(cors({
  origin: 'http://localhost:5173', // Adjust this to your frontend's origin
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/gigs', gigRoute);
app.use('/api/orders', orderRoute);
app.use('/api/conversations', conversationRoute);
app.use('/api/messages', messageRoute);
app.use('/api/reviews', reviewRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong!';

  return res.status(errorStatus).send(errorMessage);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connect();
  console.log(`Server is running on port ${PORT}`);
});
