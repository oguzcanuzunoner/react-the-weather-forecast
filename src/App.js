import "./App.css";
import { OpenWeatherProvider } from "./context/OpenWeatherContext";
import Container from "./components/Container/Container.js";

function App() {
  return (
    <div className="App">
      <OpenWeatherProvider>
        <Container />
      </OpenWeatherProvider>
    </div>
  );
}

export default App;
