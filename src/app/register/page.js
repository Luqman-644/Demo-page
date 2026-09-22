'use client';

import { Container, Box } from '@mui/material';
import Navbar from '../../components/Navbar';
import RegisterForm from '../../components/RegisterForm';

export default function RegisterPage() {
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
      }}>
      <Navbar />
      <Container maxWidth="xs" sx={{ mt: 10 }}>
        <RegisterForm />
      </Container>
    </Box>
  );
}
