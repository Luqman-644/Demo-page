'use client';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();

        const existingUsers = JSON.parse(localStorage.getItem('userDatabase')) || [];
        const matchedUser = existingUsers.find(
            (user) => user.email === email && user.password === password
        );

        if (matchedUser) {
            alert(`Login Successful!`);

            localStorage.setItem('user', email);
            localStorage.setItem('logged', 'true');
            router.push('/jobs');
            router.refresh();
        } else {
            alert('Invalid Email or Password!');
        }
    };

    return (
        <Box component="form" onSubmit={handleLogin} sx={{ display: 'flex', flexDirection: 'column', gap: 2, backgroundColor: 'white', p: 4, borderRadius: 3 }}>
            <Typography variant="h5" align="center">Login</Typography>
            <TextField label="Email" variant="outlined" fullWidth required value={email} onChange={e => setEmail(e.target.value)} />
            <TextField label="Password" type="password" variant="outlined" fullWidth required value={password} onChange={e => setPassword(e.target.value)} />
            <Button type="submit" variant="contained" color="primary" fullWidth>Sign In</Button>
        </Box>
    );
}
