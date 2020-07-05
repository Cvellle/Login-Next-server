/**
 * Config file
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import dotenv from 'dotenv';
dotenv.config();
export default {
  db: process.env.DB,
  jwtSecret: process.env.JWT_SECRET,
  port: process.env.PORT,
  allowedOrigins: [
    'https://apollo-tau.vercel.app',
    'http://localhost:3000',
    'http://yourapp.com',
    'http://localhost:4020/graphql',
    'http://localhost:4000/graphql'
  ]
};
