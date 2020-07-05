"use strict";
/**
 * Config file
 * @author Anurag Garg <garganurag893@gmail.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    db: process.env.DB,
    jwtSecret: process.env.JWT_SECRET,
    port: process.env.PORT,
    allowedOrigins: [
        'https://login-apollo.herokuapp.com/',
        'https://login-apollo.herokuapp.com/graphql',
        'https://apollo-tau.vercel.app',
        'http://localhost:3000',
        'http://yourapp.com',
        'http://localhost:4020',
        'http://localhost:4000',
        'http://localhost:4000/graphql'
    ]
};
//# sourceMappingURL=index.js.map