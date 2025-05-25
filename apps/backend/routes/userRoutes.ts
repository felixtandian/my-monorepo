import express from 'express';
import { updateUserData, fetchUserData } from '../controller/userController';
import { authMiddleware } from '../middleware/authMiddleware';
import { loginUser } from '../controller/userController';

const router = express.Router();

router.put('/updateUsers', authMiddleware, updateUserData);
router.get('/users/:id', authMiddleware, fetchUserData);
router.post('/login', loginUser);

export default router;
