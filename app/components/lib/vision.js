import axios from 'axios';
import FormData from 'form-data'; // Import FormData if using Node.js

const subscriptionKey = process.env.AZURE_COMPUTER_VISION_KEY;
const endpoint = 'https://capture-inventory.cognitiveservices.azure.com/'; // Use the provided endpoint

export const analyzeImageFromBinary = async (imageFile) => {
  const url = `${endpoint}vision/v3.2/describe`; // Append the correct API path

  try {
    const formData = new FormData();
    formData.append('file', imageFile);

    const response = await axios.post(
      url,
      formData,
      {
        headers: {
          'Ocp-Apim-Subscription-Key': subscriptionKey,
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error analyzing image:', error.response ? error.response.data : error.message);
    throw error;
  }
};
