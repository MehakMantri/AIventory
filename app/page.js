// app/page.js
'use client';

import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import { styled } from '@mui/system';

const BackgroundImage = styled('div')({
  backgroundImage: 'url("https://images.unsplash.com/photo-1721937718756-3bfec49f42a2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGludmVudG9yeXxlbnwwfHwwfHx8MA%3D%3D")', // Replace with your image path
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const ContentBox = styled(Box)({
  backgroundColor: 'rgba(255, 255, 255, 0.02)',
  padding: '40px',
  borderRadius: '12px',
  textAlign: 'center',
  maxWidth: '600px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
});

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/options');
  };

  return (
    
    <BackgroundImage>
      <ContentBox>
        <Typography variant="h1" color="#1e3a8a" gutterBottom>
          AIVentory
        </Typography>
        <Typography variant="h5" color="#374151" paragraph>
          AIventory: Smarter Inventory, Seamless Management
        </Typography>
        <Button variant="contained" onClick={handleClick}>
          Get Started
        </Button>
      </ContentBox>
    </BackgroundImage>
  );
}
