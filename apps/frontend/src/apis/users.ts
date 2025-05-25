/* eslint-disable @typescript-eslint/no-explicit-any */

import { db } from '../firebase/firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';

const baseUrl = process.env.NEXT_APP_API_URL || 'http://localhost:8000/api/';

export async function getUsers(userid: string) {
    const response = await fetch(`${baseUrl}users/${userid}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer some-token`, 
        },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    return response.json();
}

export async function updateUserData(userData: any ) {
    const response = await fetch(`${baseUrl}updateUsers/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 
                `Bearer some-token`,
        },
        body: JSON.stringify(userData),
    });
    if (!response.ok) {
        throw new Error('Failed to update user data');
    }
    return response.json();
}

export async function loginUser(email: string, password: string) {
  const response = await fetch(`${baseUrl}login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Login failed');
  }

  return response.json(); 
}