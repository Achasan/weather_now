import "./App.css";
import axios from "axios";
import Nav from "./components/Navbar/nav";
import WeatherCard from "./components/Card/Large/weatherCard";
import "./components/Navbar/nav.css";

const inputData = {
  latitude: 37.620954053275064,
  longitude: 126.84644930369564,
  lang: "kr",
};

function App() {
  return (
    <div className="App">
      <div className="main-logo">
        <a href="localhost:3000">Weather Now</a>
      </div>
      <Nav />
    </div>
  );
}

function loadOpenWeather() {
  const appId = "11b2a61b3065746fd1a5d3b35e21c1fb";
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/onecall?lat=${inputData.latitude}&lon=${inputData.longitude}&lang=${inputData.lang}&appid=${appId}`
    )
    .then((result) => {
      console.log(result.data);
    })
    .catch(() => {
      console.log("api failed");
    });
}

function loadForecast() {
  axios
    .get("api/forecast")
    .then((res) => {
      console.log(res.data);
    })
    .catch(() => {
      console.log("api load failed");
    });
}

window.addEventListener("load", loadForecast);

// 성공 url
// http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=WIhsB06waJJMJZMm%2FM4SkVOW7q%2Fe0dtIWgG%2FjNK9eovNSpJl2jaCpkaUOpX6SSgDd4CbGTXZNEeYzl0RZ9e2Sg%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=20220204&base_time=0500&nx=36&ny=127

export default App;
