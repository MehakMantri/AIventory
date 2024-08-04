'use client';

import React, { useState } from 'react';
import { Container, Typography, Button, Box, CircularProgress, IconButton } from '@mui/material';
import { CloudUpload as CloudUploadIcon } from '@mui/icons-material';
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
    <Container maxWidth="md">
      <Box display="flex" flexDirection="column" alignItems="center" py={4}>
        <Typography variant="h3" align="center" gutterBottom>
          Image Analysis
        </Typography>
        
        <Box display="flex" flexDirection="column" alignItems="center" width="100%">
          <input
            type="file"
            accept="image/*"
            id="file-upload"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <label htmlFor="file-upload">
            <IconButton
              component="span"
              color="primary"
              size="large"
              sx={{ mb: 2 }}
            >
              <CloudUploadIcon />
            </IconButton>
            <Typography variant="body1" align="center" sx={{ mb: 2 }}>
              {file ? file.name : 'Upload an image'}
            </Typography>
          </label>

          {file && (
            <Box
              component="img"
              src={URL.createObjectURL(file)}
              alt="Preview"
              sx={{ maxWidth: '100%', maxHeight: 300, mb: 2 }}
            />
          )}

          <Button
            variant="contained"
            color="primary"
            onClick={handleAnalyze}
            disabled={loading}
            sx={{ mb: 2 }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Analyze Image'}
          </Button>

          {description && (
            <Typography variant="body1" align="center">
              <strong>Description:</strong> {description}
            </Typography>
          )}
          {error && (
            <Typography variant="body1" color="error" align="center">
              {error}
            </Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
}
