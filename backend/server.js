import path from 'path'; // tp upload images
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import connectDB from './config/db.js';
// import the error handler
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/UploadRoutes.js'
// use the cookie send during post request to fetch the user id
import cookieParser from 'cookie-parser';
// import products from './data/products.js';


// import database connection

// create a route to get products from products.js
// backend will run on port 5000
// frontend is running on 3000
// const port = 5000;
const port = process.env.PORT || 5000;

connectDB(); // connect to mongoDB

const app = express();

// body parser middleware from user
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// cookie parser middleware
app.use(cookieParser());

// creating a route
// get request, 
// arrow function takes request and response as args
// app.get('/' , (req, res)=>{
//     res.send("API is running ...")
// });

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/api/config/paypal', (req,res) => res.send({ clientId: process.env.PAYPAL_CLIENT_ID }));

// const _dirname = path.resolve(); // set _dirname to current directory
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// for hosting
if(process.env.NODE_ENV === 'production')
{
    // set static folder
    app.use(express.static(path.join(_dirname, '/frontend/build')));
    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
      );
}
else {
    const __dirname = path.resolve();
  app.use('/uploads', express.static(path.join(__dirname, '/uploads'))); 
    app.get('/', (req, res) => {
      res.send('API is running....');
    });
  }

app.use(notFound);
app.use(errorHandler);

// start the server
app.listen(port, ()=>console.log(`server running on port ${port}`));

// concurrently allows us to run frontend and backend server at the same time
// nodemon is used to make the server more efficient as we do not need to restart the server everytime after making a change
