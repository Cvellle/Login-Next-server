"use strict";
/**
 * Primary file for extracting proper schema structured objects
 * @author Anurag Garg <garganurag893@gmail.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformUser = exports.getUser = void 0;
const tslib_1 = require("tslib");
const date_1 = tslib_1.__importDefault(require("../../helpers/date"));
const user_1 = tslib_1.__importDefault(require("../../models/user"));
/**
 * Get user object with schema typing
 * @param id
 */
const getUser = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.findById(id);
        return Object.assign(Object.assign({}, user._doc), { _id: user.id, createdAt: date_1.default(user._doc.createdAt), updatedAt: date_1.default(user._doc.updatedAt) });
    }
    catch (err) {
        throw err;
    }
});
exports.getUser = getUser;
/**
 * Get user object with schema typing
 * @param user
 */
const transformUser = (user) => {
    return Object.assign(Object.assign({}, user._doc), { _id: user.id, createdAt: date_1.default(user._doc.createdAt), updatedAt: date_1.default(user._doc.updatedAt) });
};
exports.transformUser = transformUser;
//# sourceMappingURL=merge.js.map