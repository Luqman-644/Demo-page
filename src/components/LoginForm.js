'use client';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useState } from 'react';

export default function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        const existingUsers = JSON.parse(localStorage.getItem('userDatabase')) || [];

        const matchedUser = existingUsers.find(
            (user) => user.email === email && user.password === password
        );

        if (matchedUser) {
            alert(`Login Successful! Welcome back, ${email}.`);
            localStorage.setItem('user', email);
            localStorage.setItem('logged', 'true');
        } else {
            alert('Invalid Email or Password! Please try again.');
        }
    };

    return (
        <Box component="form"
            onSubmit={handleLogin}
            sx={{
                display: 'flex', flexDirection: 'column', gap: 2,
                backgroundColor: 'white',
                paddingBlock: "50px",
                paddingInline: "20px",
                borderRadius: "20px"

            }}>
            <Typography variant="h5" align="center">Login</Typography>
            <TextField label="Email" variant="outlined" fullWidth required />
            <TextField label="Password" type="password" variant="outlined" fullWidth required />
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Sign In
            </Button>
        </Box>
    );
}
