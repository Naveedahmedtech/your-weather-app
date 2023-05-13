const API_KEY = import.meta.env.VITE_API_KEY;


const fetchWeatherData = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default fetchWeatherData;
