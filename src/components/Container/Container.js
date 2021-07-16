import styles from "./styles.module.css";
import Weather from "../WeatherContainer/Weather";

const Container = () => {
  return (
    <div>
      <Weather />
    </div>
  );
};

export default Container;

/* API ->  https://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=41e46ee9bbd87b742d4f65fbb01893c9&units=metric&lang=tr
 */
