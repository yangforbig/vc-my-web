// 🌐 Network Module - Main Export
// Unified access to all network functionality

// Export HTTP client
export { default as client } from './client.js';

// Export API modules
export * from './api.js';

// Export utility functions
export * from './utils.js';

// Network module metadata
export const network = {
  name: 'Network Module',
  version: '1.0.0',
  description: 'HTTP client and API utilities for personal website',
  
  // Configuration
  config: {
    client: 'ky',
    interceptors: true,
    retry: true,
    timeout: 10000,
  },
};

export default network; 