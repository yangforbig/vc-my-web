// 🌐 HTTP Client Configuration
// Centralized ky client setup with interceptors

import ky from 'ky';

// Base configuration
const baseConfig = {
  prefixUrl: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_BASE_URL) || 'http://localhost:3000',
  timeout: 10000,
  retry: {
    limit: 2,
    methods: ['get', 'put', 'head', 'delete', 'options', 'trace'],
  },
};

// Create base client with hooks (ky's way of interceptors)
const client = ky.create({
  ...baseConfig,
  hooks: {
    beforeRequest: [
      (request) => {
        // Add auth headers if needed
        // const token = localStorage.getItem('token');
        // if (token) {
        //   request.headers.set('Authorization', `Bearer ${token}`);
        // }
      }
    ],
    beforeError: [
      (error) => {
        // Global error handling
        console.error('API Error:', error);
        return error;
      }
    ]
  }
});

export default client; 