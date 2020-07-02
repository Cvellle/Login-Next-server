"use strict";
/**
 * Define model for user
 * @author Anurag Garg <garganurag893@gmail.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
/**
 * User Schema
 */
const userSchema = new mongoose_1.default.Schema({
    _id: mongoose_1.default.Schema.Types.ObjectId,
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String
    }
}, {
    timestamps: true
});
/**
 * Statics
 */
userSchema.statics = {
    /**
     * Get User
     * @param {ObjectId} id - The objectId of user.
     */
    get(id) {
        return this.findById(id)
            .execAsync()
            .then((user) => {
            if (user) {
                return user;
            }
        });
    }
};
exports.default = mongoose_1.default.model('User', userSchema);
//# sourceMappingURL=user.js.map