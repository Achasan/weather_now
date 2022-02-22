import React, { useEffect, useState } from "react";
import WeatherNow from "../Medium/weatherNow.js";
import axios from "axios";
import VilageTem from "../Medium/vilageTem.js";

/*
  T1H: "기온",
  RN1: "1시간 강수량",
  SKY: "하늘상태",
  UUU: "풍속(동서)",
  VVV: "풍속(남북)",
  REH: "습도",
  PTY: "강수형태",
  VEC: "풍향",
  WSD: "풍속",
*/

/*
  단기예보 SKY 코드
  1: 맑음
  2: 구름많음
  3: 흐림
*/

const temp = {
  T1H: "-",
  RN1: "-",
  SKY: "-",
  UUU: "-",
  VVV: "-",
  REH: "-",
  PTY: "-",
  VEC: "-",
  WSD: "-",
  ODAM: "-",
};

function WeatherCard() {
  let [ncst, setNcst] = useState(temp);
  let [vilageTmp, setVilageTmp] = useState([]);
  let [vilageSky, setVilageSky] = useState([]);

  useEffect(() => {
    axios
      .get("api/weather")
      .then((res) => {
        console.log(res.data);

        setNcst(res.data.ncst);
        setVilageTmp(res.data.vilageTmp);
        setVilageSky(res.data.vilageSky);
      })
      .catch("server error");
  }, []);

  return (
    <div className="weather-cards">
      <WeatherNow ncst={ncst} />
      <VilageTem />
    </div>
  );
}

export default WeatherCard;
