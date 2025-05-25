/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loginUser } from '../../store/userSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector(state => state.user);
  const loginStatus = useSelector((state: RootState) => state.user.loginStatus);

  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
  };

  return (
    <Box maxWidth={360} mx="auto" mt={10} p={3} boxShadow={3} borderRadius={2}>
      <Typography variant="h5" mb={3}>Login</Typography>
      <TextField
        label="Email"
        type="email"
        fullWidth
        margin="normal"
        value={email}
        onChange={e => setEmail(e.target.value)}
        InputLabelProps={{ style: { color: 'white' } }}
        InputProps={{ style: { color: 'white' } }}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={e => setPassword(e.target.value)}
        InputLabelProps={{ style: { color: 'white' } }}
        InputProps={{ style: { color: 'white' } }}
      />
      {error && (
        <Typography color="error" mt={1}>
          {error}
        </Typography>
      )}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 3 }}
        onClick={handleLogin}
      >
        Log In
      </Button>
      {loginStatus && (
        <Typography variant="body2" sx={{ mt: 1 }}>
          {loginStatus}
        </Typography>
      )}
    </Box>
  );
}
