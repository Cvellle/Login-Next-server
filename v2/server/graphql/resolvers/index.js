"use strict";
/**
 * Exporting all resolvers
 * @author Anurag Garg <garganurag893@gmail.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const rootResolver = {
    Query: Object.assign({}, user_1.UserQueries
    // Add other queries here
    ),
    Mutation: Object.assign({}, user_1.UserMutation
    // Add other mutations here
    ),
    Subscription: Object.assign({}, user_1.UserSubscription
    // Add other subscriptions here
    )
};
exports.default = rootResolver;
//# sourceMappingURL=index.js.map