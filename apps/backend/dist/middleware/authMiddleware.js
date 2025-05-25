"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        res.status(401).json({ status: 401, message: 'Unauthorized' });
        return;
    }
    next();
};
exports.authMiddleware = authMiddleware;
