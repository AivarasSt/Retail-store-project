const express = require('express');
const morgan = require('morgan');
const Mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const authRouter = require('./routes/auth-router');
const userRouter = require('./routes/user-router');
const brandRouter = require('./routes/brand-router');
const orderRouter = require('./routes/order-router');
const collectionRouter = require('./routes/collection-router');
const productRouter = require('./routes/product-router');

const server = express();
const {
  SERVER_DOMAIN,
  SERVER_PORT,
  DB_CONNECTION,
  PUBLIC_PATH,
} = process.env;

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// Middlewares
server.use(morgan('tiny'));
server.use(cors(corsOptions));
server.use(express.json());
server.use(express.static(PUBLIC_PATH));

// Response handlers
server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);
server.use('/api/brands', brandRouter);
server.use('/api/collections', collectionRouter);
server.use('/api/orders', orderRouter);
server.use('/api/products', productRouter);

server.listen(SERVER_PORT, () => {
  console.log(`puslapis veikia ant ${SERVER_DOMAIN}:${SERVER_PORT}/`);
  (async () => {
    try {
      await Mongoose.connect(DB_CONNECTION);
      console.log('Prisijungta prie duomenų bazės');
    } catch (error) {
      console.error('Nepavyko prisijungti prie duomenų bazės');
    }
  })();
});