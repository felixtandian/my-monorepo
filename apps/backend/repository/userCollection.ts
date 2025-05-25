import { db } from '../config/firebaseConfig';
import { User } from '../entities/user';
import { collection, query, where, getDocs } from 'firebase/firestore';

const USERS_COLLECTION = 'USERS';

export const updateUser = async (user: User): Promise<void> => {
  await db.collection(USERS_COLLECTION).doc(user.id).set(user, { merge: true });
};

export const getUserById = async (userId: string): Promise<User | null> => {
  const doc = await db.collection(USERS_COLLECTION).doc(userId).get();
  if (!doc.exists) return null;
  return doc.data() as User;
};

export const getUserByEmail = async (email: string): Promise<User | null> => {
  const snapshot = await db.collection(USERS_COLLECTION)
    .where('email', '==', email)
    .limit(1)
    .get();

  if (snapshot.empty) return null;

  const userDoc = snapshot.docs[0];
  return userDoc.data() as User;
};