"use strict";
/**
 * Bootstrap your app
 * @author Anurag Garg <garganurag893@gmail.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bluebird_1 = tslib_1.__importDefault(require("bluebird"));
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const config_1 = tslib_1.__importDefault(require("./config"));
const express_1 = tslib_1.__importDefault(require("./config/express"));
/**
 * Promisify All The Mongoose
 * @param mongoose
 */
bluebird_1.default.promisifyAll(mongoose_1.default);
/**
 * Connecting Mongoose
 * @param uris
 * @param options
 */
mongoose_1.default.connect(config_1.default.db, {
    bufferMaxEntries: 0,
    keepAlive: true,
    // reconnectInterval: 500,
    // reconnectTries: 30,
    socketTimeoutMS: 0,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
/**
 * Throw error when not able to connect to database
 */
mongoose_1.default.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${config_1.default.db}`);
});
/**
 * Initialize Express
 */
const ExpressServer = new express_1.default();
ExpressServer.init();
/**
 * Listen to port
 */
ExpressServer.httpServer.listen(process.env.PORT, function () {
  console.log(`??  ==> API Server now listening on PORT ${PORT}!`);
});
//# sourceMappingURL=index.js.map
