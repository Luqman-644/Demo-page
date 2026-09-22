'use client';
import React, { useState, useEffect } from 'react';
import { Typography, Container, Box, MenuItem, FormControl, Select } from '@mui/material';
import Navbar from '../../components/Navbar';
import JobCard from '../../components/JobCard';
import { mock_jobs } from '../../mock/jobs/data';
import { useRouter } from 'next/navigation'

export default function LoginPage() {
    const [sortBy, setSortBy] = useState('date');
    const [authorized, setAuthorized] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const isLogged = localStorage.getItem('logged') === 'true';

        if (!isLogged) {
            router.push('/login');
        } else {
            setAuthorized(true);
        }
    }, [router]);

    const sortedJobs = [...mock_jobs].sort((a, b) => {
        if (sortBy === 'salary') return b.salary - a.salary;
        if (sortBy === 'title') return a.title.localeCompare(b.title);
        if (sortBy === 'date') return new Date(b.datePosted) - new Date(a.datePosted);
        return 0;
    });

    if (!authorized) {
        return null;
    }

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                backgroundImage: 'url("/pexels-codioful-7135053.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}
        >
            <Navbar />
            <Container maxWidth="lg" sx={{ mt: 10 }}>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Openings</Typography>

                    <FormControl size="small" sx={{ minWidth: 150, bgcolor: 'white', borderRadius: 1 }}>
                        <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                            <MenuItem value="date">Date Posted</MenuItem>
                            <MenuItem value="salary">Highest Salary</MenuItem>
                            <MenuItem value="title">Alphabetical (A-Z)</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                {sortedJobs.map(item => (
                    <JobCard key={item.id} job={item} />
                ))}
            </Container>
        </Box>
    );
}
