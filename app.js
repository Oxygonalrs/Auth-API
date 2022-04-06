import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connect from './config/connectdb.js';
import connectDB from './config/connectdb.js';
import userRoutes from './routes/userRoutes.js';
dotenv.config();

const app = express();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
// Cors
app.use(cors());

// Database
connectDB(DATABASE_URL);

// JSON for API
app.use(express.json())

// Routes
app.use('/api/user', userRoutes)

app.listen(port, ()=>{
    console.log(`Server listening at https://localhost:${port}`)
});
