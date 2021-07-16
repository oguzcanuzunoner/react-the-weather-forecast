import React from "react";
import moment from "moment";
import styles from "./styles.module.css";
import { useOpenWeather } from "../../context/OpenWeatherContext";

const Result = () => {
  const { weather } = useOpenWeather();
  const getDate = (date) => {
    const dateString = moment.unix(date).format("DD/MM/YYYY");
    return dateString;
  };
  return (
    <div className={styles.resultContainer}>
      {weather.daily.map((item, i) => (
        <div key={i} className={styles.forecast}>
          {item.weather[0].main === "Rain" && (
            <div className={styles.inForecast}>
              <img
                src={"http://openweathermap.org/img/wn/10d@2x.png"}
                alt="Rain"
              />
              <div>
                <strong> {item.temp.day}° </strong>
              </div>
              <span>Min : {item.temp.min}°</span>
              <span>Max : {item.temp.max}°</span>
              <div>{getDate(item.dt)}</div>
            </div>
          )}
          {item.weather[0].main === "Thunderstorm" && (
            <div className={styles.inForecast}>
              <img
                src={"http://openweathermap.org/img/wn/11d@2x.png"}
                alt="Thunderstorm"
              />
              <div>
                <strong> {item.temp.day}° </strong>
              </div>
              <span>Min : {item.temp.min}°</span>
              <span>Max : {item.temp.max}°</span>
              <div>{getDate(item.dt)}</div>
            </div>
          )}
          {item.weather[0].main === "Drizzle" && (
            <div className={styles.inForecast}>
              <img
                src={"http://openweathermap.org/img/wn/09d@2x.png"}
                alt="Drizzle	"
              />
              <div>
                <strong> {item.temp.day}° </strong>
              </div>
              <span>Min : {item.temp.min}°</span>
              <span>Max : {item.temp.max}°</span>
              <div>{getDate(item.dt)}</div>
            </div>
          )}
          {item.weather[0].main === "Snow" && (
            <div className={styles.inForecast}>
              <img
                src={"http://openweathermap.org/img/wn/13d@2x.png"}
                alt="Snow	"
              />
              <div>
                <strong> {item.temp.day}° </strong>
              </div>
              <span>Min : {item.temp.min}°</span>
              <span>Max : {item.temp.max}°</span>
              <div>{getDate(item.dt)}</div>
            </div>
          )}
          {item.weather[0].main === "Clouds" && (
            <div className={styles.inForecast}>
              <img
                src={"http://openweathermap.org/img/wn/02d@2x.png"}
                alt="Clouds"
              />
              <div>
                <strong> {item.temp.day}° </strong>
              </div>
              <span>Min : {item.temp.min}°</span>
              <span>Max : {item.temp.max}°</span>
              <div>{getDate(item.dt)}</div>
            </div>
          )}
          {item.weather[0].main === "Clear" && (
            <div className={styles.inForecast}>
              <img
                src={"http://openweathermap.org/img/wn/01d@2x.png"}
                alt="Clear"
              />
              <div>
                <strong> {item.temp.day}° </strong>
              </div>
              <span>Min : {item.temp.min}°</span>
              <span>Max : {item.temp.max}°</span>
              <div>{getDate(item.dt)}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default React.memo(Result);
