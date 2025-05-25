import admin from 'firebase-admin';
import * as serviceAccount from '../serviceAccountKey.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

console.log('✅ Firebase initialized');

const db = admin.firestore();


export { admin, db };