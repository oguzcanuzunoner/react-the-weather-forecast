import "./App.css";
import { OpenWeatherProvider } from "./context/OpenWeatherContext";
import Container from "./components/Container/Container.js";

function App() {
  return (
    <OpenWeatherProvider>
      <Container />
    </OpenWeatherProvider>
  );
}

export default App;
