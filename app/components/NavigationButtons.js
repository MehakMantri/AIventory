// components/NavigationButtons.js
'use client';

import React from 'react';
import { Button, Stack } from '@mui/material';
import { useRouter } from 'next/navigation';

const NavigationButtons = () => {
  const router = useRouter();

  return (
    <Stack direction="row" spacing={2} mb={4} alignItems="center">
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => router.back()} 
        sx={{ flexGrow: 1 }}
      >
        Back
      </Button>
      <Button 
        variant="contained" 
        color="secondary" 
        onClick={() => router.forward()} 
        sx={{ flexGrow: 1 }}
      >
        Forward
      </Button>
    </Stack>
  );
};

export default NavigationButtons;
