"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUserData = exports.updateUserData = void 0;
const userCollection_1 = require("../repository/userCollection");
const updateUserData = async (req, res) => {
    try {
        const user = req.body;
        if (!user.id) {
            res.status(400).json({ status: 400, message: 'User ID is required' });
            return;
        }
        await (0, userCollection_1.updateUser)(user);
        res.status(200).json({ status: 200, message: 'User updated successfully' });
    }
    catch (error) {
        res.status(500).json({ status: 500, message: 'Update failed', error });
    }
};
exports.updateUserData = updateUserData;
const fetchUserData = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await (0, userCollection_1.getUserById)(userId);
        if (!user) {
            res.status(404).json({ status: 400, message: 'User not found' });
            return;
        }
        res.status(200).json({ status: 200, message: 'User found !', data: user });
    }
    catch (error) {
        res.status(500).json({ status: 500, message: 'Fetch failed', error });
    }
};
exports.fetchUserData = fetchUserData;
