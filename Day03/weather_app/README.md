
# Day 3: Weather App

## Overview
For Day 3 of my React challenge, I developed a Weather App that allows users to search for weather information based on a city name. The app fetches real-time weather data from the OpenWeather API and displays important details such as temperature, humidity, wind speed, and weather condition icons. The app also provides dynamic icons to represent various weather conditions, such as clear skies, clouds, rain, or snow.

## Features
- **City Search**: Allows users to input a city name and retrieve current weather information for that location.
- **Real-Time Weather Data**: Fetches up-to-date weather data from the OpenWeather API.
- **Dynamic Weather Icons**: Based on the weather condition, the app displays appropriate weather icons (e.g., clear sky, clouds, rain, etc.).
- **Weather Information**: Displays key weather metrics such as temperature in Celsius, humidity percentage, and wind speed in kilometers per hour.

## Tech Stack
- **React**: For building the user interface and managing state.
- **OpenWeather API**: Provides real-time weather data for any given city.
- **CSS**: Used for styling the app and ensuring a responsive layout.
- **Environment Variables**: For securely storing the OpenWeather API key.

## Installation & Setup
Follow the steps below to set up the Weather App on your local machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/TheBMPatil/21_Days_21_Projects/tree/main/Day03/weather_app
   ```

2. **Install dependencies**:
   Navigate to the project directory and install the required dependencies:
   ```bash
   cd weather-app
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env` file in the root directory of the project and add your OpenWeather API key:
   ```env
   VITE_APP_ID=your_openweather_api_key
   ```

4. **Start the app**:
   Run the development server:
   ```bash
   npm run dev
   ```

5. **Open the app**:
   Once the server is running, open your browser and navigate to `http://localhost:3000` to view the Weather App.

## Screenshots
Below are some screenshots showcasing the app:

