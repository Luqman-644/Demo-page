'use client';
import React from 'react';
import { Card, CardContent, Typography, Box, Button, Avatar } from '@mui/material';

export default function JobCard({ job }) {
    return (
        <Card sx={{ mb: 2, borderRadius: 3 }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 3, p: 3 }}>

                <Avatar sx={{ bgcolor: '#0070f3', width: 48, height: 48 }}>
                    {job.company.charAt(0)}
                </Avatar>

                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{job.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{job.company}</Typography>
                </Box>

                <Box sx={{ minWidth: 120 }}>
                    <Typography variant="caption" color="text.secondary" display="block">{job.location}</Typography>
                </Box>

                <Box sx={{ minWidth: 120 }}>
                    <Typography variant="caption" color="text.secondary" display="block">Posted: {job.datePosted}</Typography>
                </Box>
                <Box sx={{ minWidth: 120 }}>
                    <Typography variant="caption" color="text.secondary" display="block">Salary: {job.salary}</Typography>
                </Box>

                <Box sx={{ minWidth: 120 }}>
                    <Typography variant="caption" color="text.secondary" display="block">{job.type}</Typography>
                </Box>

                <Button variant="contained" sx={{ borderRadius: 5, textTransform: 'none', px: 3 }}>
                    Apply now
                </Button>

            </CardContent>
        </Card>
    );
}
