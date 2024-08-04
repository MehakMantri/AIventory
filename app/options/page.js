// app/options/page.js
'use client';

import React from 'react';
import { Container, Box, Typography, IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';
import InventoryIcon from '@mui/icons-material/Inventory';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SearchIcon from '@mui/icons-material/Search';

const OptionBox = ({ label, description, IconComponent, onClick }) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    bgcolor="white"
    borderRadius="12px"
    boxShadow="0 6px 12px rgba(0, 0, 0, 0.2)"
    p={4}
    width="250px"
    height="300px"  // Increased height for elongation
    textAlign="center"
    onClick={onClick}
    sx={{
      cursor: 'pointer',
      transition: '0.3s',
      '&:hover': { bgcolor: '#f5f5f5', transform: 'scale(1.03)' },
    }}
  >
    <IconButton sx={{ fontSize: 48, color: 'primary.main' }}>
      <IconComponent />
    </IconButton>
    <Typography variant="h6" mt={2}>
      {label}
    </Typography>
    <Typography variant="body2" color="textSecondary" mt={1}>
      {description}
    </Typography>
  </Box>
);

export default function Options() {
  const router = useRouter();

  const navigateToOption = (option) => {
    router.push(`/options/${option}`);
  };

  return (
    <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 4 }}>
      <Typography variant="h2" align="center" gutterBottom>
        AI-ventory
      </Typography>
      <Box display="flex" justifyContent="center" gap={4}>
        <OptionBox
          label="Inventory"
          description="Manage and track your inventory."
          IconComponent={InventoryIcon}
          onClick={() => navigateToOption('option1')}
        />
        <OptionBox
          label="Capture Option"
          description="Capture new inventory items."
          IconComponent={CameraAltIcon}
          onClick={() => navigateToOption('option2')}
        />
        <OptionBox
          label="AI Search"
          description="Search items using AI."
          IconComponent={SearchIcon}
          onClick={() => navigateToOption('option3')}
        />
      </Box>
    </Container>
  );
}
