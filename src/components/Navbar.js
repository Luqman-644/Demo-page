'use client';

import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation'; 

export default function Navbar() {
    const [logged, setLogged] = useState('false');
    const pathname = usePathname(); 
    const router = useRouter();

    useEffect(() => {
        const status = localStorage.getItem('logged');
        setLogged(status || 'false');
    }, [pathname]);

    const handleSignOut = () => {
        localStorage.removeItem('logged');
        localStorage.removeItem('user');
        setLogged('false');

        // 🌟 Safe navigation redirect sequence
        router.push('/login');
        router.refresh();
    };

    return (
        <AppBar position="static" elevation={2}>
            <Toolbar>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1.5, fontWeight: 'bold', mr: 4 }}>
                    <Image src="/logo.webp" alt="Company Logo" width={40} height={40} />
                    Hiredroid
                </Typography>

                <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
                    <Button component={Link} href='/jobs' sx={{ color: 'white', textTransform: 'none', fontSize: '1rem' }}>View Jobs</Button>
                    <Button component={Link} href='/addjob' sx={{ color: 'white', textTransform: 'none', fontSize: '1rem' }}>Add Jobs</Button>
                </Box>

                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                    {logged === 'true' ? (
                        <Button onClick={handleSignOut} variant="contained" disableElevation sx={{ textTransform: 'none', bgcolor: 'white', color: 'error.main', '&:hover': { bgcolor: '#f5f5f5' } }}>
                            Sign Out
                        </Button>
                    ) : (
                        <>
                            <Button component={Link} href='/login' color="inherit" sx={{ textTransform: 'none' }}>Login</Button>
                            <Button component={Link} href='/register' variant="contained" color="secondary" disableElevation sx={{ textTransform: 'none', bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: '#f5f5f5' } }}>Register</Button>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
