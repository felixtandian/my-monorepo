import { Request, Response } from 'express';
import { RequestHandler } from 'express';
import { updateUser, getUserById, getUserByEmail} from '../repository/userCollection';
import { User } from '../entities/user';

export const updateUserData: RequestHandler = async (req, res) => {
  try {
    const user: User = req.body;
    if (!user.id) {
      res.status(400).json({status: 400, message: 'User ID is required' });
      return;
    }
    await updateUser(user);
    res.status(200).json({status: 200, message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({status: 500,  message: 'Update failed', error });
  }
};

export const fetchUserData: RequestHandler = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await getUserById(userId);
    if (!user) {
      res.status(404).json({status: 400, message: 'User not found' });
      return;
    }
    res.status(200).json({status: 200, message: 'User found !', data:user});
  } catch (error) {
    res.status(500).json({status:500, message: 'Fetch failed', error });
  }
};

export const loginUser: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log('Email input:', email);
    console.log('Password input:', password);

    if (!email || !password) {
      res.status(400).json({ message: 'Email and password required' });
      return;
    }

    const user = await getUserByEmail(email);

    console.log('User fetched:', user);

    if (!user) {
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    if (user.password !== password) {
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    const { password: _, ...userData } = user;
    res.status(200).json({ message: 'Login successful', user: userData });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Login failed', error });
  }
};
