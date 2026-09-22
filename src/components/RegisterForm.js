'use client';

import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleRegister = (e) => {
        e.preventDefault();

        const existingUsers = JSON.parse(localStorage.getItem('userDatabase')) || [];

        const userExists = existingUsers.some(user => user.email === email);
        if (userExists) {
            alert('This email is already registered!');
            return;
        }

        const newUser = { email, password };
        existingUsers.push(newUser);

        localStorage.setItem('userDatabase', JSON.stringify(existingUsers));

        alert('Registration Successful! Redirecting to login...');
        router.push('/login');
    };

    return (
        <Box component="form"
            onSubmit={handleRegister}
            sx={{
                display: 'flex', flexDirection: 'column', gap: 2, paddingBlock: "50px",
                backgroundColor: "white",
                paddingInline: "20px",
                borderRadius: "20px"
            }}>
            <Typography variant="h5" align="center">Create an Account</Typography>

            <TextField label="Full Name" variant="outlined" fullWidth />

            <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 1 }}>
                Sign Up
            </Button>
        </Box>
    );
}
