import React from "react";
import styles from "./styles.module.css";
import { useOpenWeather } from "../../context/OpenWeatherContext";
import Iller from "./LotandLat.json";
import Result from "../Result/Result";

import axios from "axios";
import { useEffect } from "react";

const Weather = () => {
  const { city, setCity, weather, setWeather } = useOpenWeather();

  useEffect(() => {
    const getAPI = async (city) => {
      await axios(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&exclude=current,hourly,minutely,alerts&units=metric&appid=41e46ee9bbd87b742d4f65fbb01893c9&units=metric`
      )
        .then((res) => setWeather(res.data))
        .catch((e) => console.log(e));
    };
    getAPI(city);
  }, [city, setWeather]);

  return (
    <>
      {weather && (
        <div className={styles.container}>
          <div className={styles.details}>
            <div className={styles.city}>
              <span>
                <select
                  name="city"
                  className={styles.classBox}
                  onChange={(e) => {
                    const jsonFormat = JSON.parse(e.target.value);
                    setCity(jsonFormat);
                  }}
                >
                  {Iller.iller.map((item) => (
                    <option value={JSON.stringify(item)} key={item.plaka}>
                      {item.il_adi}
                    </option>
                  ))}
                </select>
              </span>
            </div>
          </div>
          <hr />
          <Result />
        </div>
      )}
    </>
  );
};

export default React.memo(Weather);
