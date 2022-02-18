import "./App.css";

import Nav from "./components/Navbar/nav";
import { WeatherCard } from "./components/Card/Large/weatherCard.js";
import React, { useEffect, useState } from "react";
import "./components/Navbar/nav.css";
import "./components/Card/Large/weatherCard.css";
import axios from "axios";

function App() {
  let data = null;

  useEffect(() => {
    let response = axios.get("api/weather");
    console.log(response.data);
    data = response.data;
  }, []);

  return (
    <div className="App">
      <div className="main-logo">
        <a href="localhost:3000">Weather Now</a>
      </div>
      <Nav />
      <WeatherCard data={data} />
    </div>
  );
}

export default App;
