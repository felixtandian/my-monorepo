"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.updateUser = void 0;
const firebaseConfig_1 = require("../config/firebaseConfig");
const USERS_COLLECTION = 'USERS';
const updateUser = async (user) => {
    await firebaseConfig_1.db.collection(USERS_COLLECTION).doc(user.id).set(user, { merge: true });
};
exports.updateUser = updateUser;
const getUserById = async (userId) => {
    const doc = await firebaseConfig_1.db.collection(USERS_COLLECTION).doc(userId).get();
    if (!doc.exists)
        return null;
    return doc.data();
};
exports.getUserById = getUserById;
