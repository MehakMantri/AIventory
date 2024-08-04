'use client';

import React, { useState } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { analyzeImageFromBinary } from '../../components/lib/vision'; // Adjust the path if necessary

export default function Option2() {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleAnalyze = async () => {
    if (!file) {
      setError('Please upload an image file.');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const result = await analyzeImageFromBinary(file);
      if (result && result.description && result.description.captions.length > 0) {
        setDescription(result.description.captions[0].text);
      } else {
        setDescription('No description available.');
      }
    } catch (err) {
      setError('Error analyzing image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Image Analysis
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <Button variant="contained" color="primary" onClick={handleAnalyze} disabled={loading}>
          {loading ? 'Analyzing...' : 'Analyze Image'}
        </Button>
        {description && (
          <Typography variant="body1" mt={2}>
            <strong>Description:</strong> {description}
          </Typography>
        )}
        {error && (
          <Typography variant="body1" color="error" mt={2}>
            {error}
          </Typography>
        )}
      </Box>
    </Container>
  );
}
