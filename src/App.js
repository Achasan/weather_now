import "./App.css";

import Nav from "./components/Navbar/nav";
import WeatherCard from "./components/Card/Large/weatherCard.js";
import "./components/Navbar/nav.css";
import "./components/Card/Large/weatherCard.css";
import "./components/Card/Medium/weatherNow.css";

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

export default App;
