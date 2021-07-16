import { createContext, useContext, useState } from "react";

export const OpenWeatherContext = createContext();

export const OpenWeatherProvider = ({ children }) => {
  const [city, setCity] = useState({
    plaka: 1,
    il_adi: "ADANA",
    lat: 37,
    lon: 35.3213333,
    northeast_lat: 37.072004,
    northeast_lon: 35.461995,
    southwest_lat: 36.935523,
    southwest_lon: 35.174706,
  });
  const [weather, setWeather] = useState(null);
  const values = {
    city,
    setCity,
    weather,
    setWeather,
  };

  return (
    <OpenWeatherContext.Provider value={values}>
      {children}
    </OpenWeatherContext.Provider>
  );
};

export const useOpenWeather = () => useContext(OpenWeatherContext);
