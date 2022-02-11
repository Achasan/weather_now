import "./App.css";
import axios from "axios";
import Nav from "./components/Navbar/nav";
import WeatherCard from "./components/Card/Large/weatherCard";
import "./components/Navbar/nav.css";
import "./components/Card/Large/weatherCard.css";

function App() {
  return (
    <div className="App">
      <div className="main-logo">
        <a href="localhost:3000">Weather Now</a>
      </div>
      <Nav />
      <WeatherCard />
    </div>
  );
}

function loadForecast() {
  axios
    .get("api/UltraSrtNcst")
    .then((res) => {
      console.log(res.data);
    })
    .catch(() => {
      console.log("api load failed");
    });
}

window.addEventListener("load", loadForecast);

export default App;
