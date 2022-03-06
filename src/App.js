import "./App.css";

import Nav from "./components/Navbar/nav";
import WeatherPage from "./components/Card/Large/weatherPage";
import "./components/Navbar/nav.css";
import "./components/Card/Large/weatherPage.css";
import "./components/Card/Medium/weatherIcon.css";
import "./components/Card/Small/perHourFcstUnit.css";

function App() {
  return (
    <div className="App">
      <div className="main-logo">
        <a href="localhost:3000">Weather Now</a>
      </div>
      <Nav />
      <WeatherPage />
    </div>
  );
}

export default App;
