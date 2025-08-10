// 📡 API Endpoints
// Contact form, portfolio, analytics, etc.

import client from './client.js';

// Contact Form API
export const contactAPI = {
  submit: async (data) => {
    // TODO: Implement contact form submission
    // return client.post('contact', { json: data });
  },
};

// Portfolio API
export const portfolioAPI = {
  getProjects: async () => {
    // TODO: Implement portfolio projects fetch
    // return client.get('portfolio/projects').json();
  },
  
  getProject: async (id) => {
    // TODO: Implement single project fetch
    // return client.get(`portfolio/projects/${id}`).json();
  },
};

// Analytics API
export const analyticsAPI = {
  trackVisit: async (data) => {
    // TODO: Implement visit tracking
    // return client.post('analytics/visit', { json: data });
  },
  
  getStats: async () => {
    // TODO: Implement stats retrieval
    // return client.get('analytics/stats').json();
  },
};

// Weather API - Open-Meteo (Free, No CORS, No API Key)
export const weatherAPI = {
  getCurrentWeather: async (latitude = 39.9042, longitude = 116.4074) => {
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&timezone=auto`;
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Weather API error: ${response.status}`);
      }
      
      const data = await response.json();
      return {
        ...data,
        location: {
          latitude: data.latitude,
          longitude: data.longitude,
          timezone: data.timezone
        },
        current: {
          ...data.current,
          weather_description: getWeatherDescription(data.current.weather_code)
        }
      };
    } catch (error) {
      console.error('Failed to fetch weather data:', error);
      throw error;
    }
  },

  getDailyForecast: async (latitude = 39.9042, longitude = 116.4074, days = 3) => {
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant&timezone=auto&forecast_days=${days}`;
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Weather forecast API error: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch weather forecast:', error);
      throw error;
    }
  }
};

// Historical Events API - Muffinlabs (Free, No CORS, No API Key)
export const historyAPI = {
  getTodayInHistory: async (month, day) => {
    try {
      // If no month/day provided, use today's date
      if (!month || !day) {
        const today = new Date();
        month = today.getMonth() + 1; // getMonth() returns 0-11
        day = today.getDate();
      }
      
      const url = `https://history.muffinlabs.com/date/${month}/${day}`;
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`History API error: ${response.status}`);
      }
      
      const data = await response.json();
      return {
        ...data,
        // Limit events to most significant ones
        data: {
          ...data.data,
          Events: data.data.Events?.slice(0, 3) || [], // Top 3 events
          Births: data.data.Births?.slice(0, 2) || [], // Top 2 births
          Deaths: data.data.Deaths?.slice(0, 2) || []  // Top 2 deaths
        }
      };
    } catch (error) {
      console.error('Failed to fetch historical events:', error);
      throw error;
    }
  }
};

// Weather code descriptions (WMO Weather interpretation codes)
const getWeatherDescription = (code) => {
  const descriptions = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy', 
    3: 'Overcast',
    45: 'Fog',
    48: 'Depositing rime fog',
    51: 'Light drizzle',
    53: 'Moderate drizzle',
    55: 'Dense drizzle',
    56: 'Light freezing drizzle',
    57: 'Dense freezing drizzle',
    61: 'Slight rain',
    63: 'Moderate rain',
    65: 'Heavy rain',
    66: 'Light freezing rain',
    67: 'Heavy freezing rain',
    71: 'Slight snow',
    73: 'Moderate snow',
    75: 'Heavy snow',
    77: 'Snow grains',
    80: 'Slight rain showers',
    81: 'Moderate rain showers',
    82: 'Violent rain showers',
    85: 'Slight snow showers',
    86: 'Heavy snow showers',
    95: 'Thunderstorm',
    96: 'Thunderstorm with slight hail',
    99: 'Thunderstorm with heavy hail'
  };
  
  return descriptions[code] || 'Unknown weather';
}; 