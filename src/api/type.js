const GeocodingResponse = {
  name: '',
  local_names: {}, // optional
  lat: 0,
  lon: 0,
  country: '',
  state: '', // optional
};

const WeatherCondition = {
  id: 0,
  main: '',
  description: '',
  icon: '',
};

const WeatherData = {
  coord: { lat: 0, lon: 0 },
  weather: [
    {
      id: 0,
      main: '',
      description: '',
      icon: '',
    },
  ],
  main: {
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0,
  },
  wind: {
    speed: 0,
    deg: 0,
  },
  sys: {
    sunrise: 0,
    sunset: 0,
    country: '',
  },
  name: '',
  dt: 0,
};

const ForecastData = {
  list: [
    {
      dt: 0,
      main: {
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        humidity: 0,
      },
      weather: [
        {
          id: 0,
          main: '',
          description: '',
          icon: '',
        },
      ],
      wind: {
        speed: 0,
        deg: 0,
      },
      dt_txt: '',
    },
  ],
  city: {
    name: '',
    country: '',
    sunrise: 0,
    sunset: 0,
  },
};

export { GeocodingResponse, WeatherCondition, WeatherData, ForecastData };
