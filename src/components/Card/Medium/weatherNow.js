import React, { useEffect } from "react";
import "../Large/weatherCard.css";

function WeatherNow(props) {
  useEffect(() => {
    props.ncst["PTY"] === "없음"
      ? weatherIconInit(props.ncst["SKY"])
      : weatherIconInit(props.ncst["PTY"]);
  });

  return (
    <div className="weatherCard">
      <div className="current-image">
        <div className="text-block">
          <strong className="temperature">{props.ncst["T1H"]}</strong>
          <span className="sky-status">
            {props.ncst["PTY"] === "없음"
              ? props.ncst["SKY"]
              : props.ncst["PTY"]}
          </span>
        </div>
      </div>

      <table className="current-table">
        <tbody>
          <tr>
            <td>
              <dl>
                <dt>기온</dt>
                <dd>{props.ncst["T1H"]}</dd>
              </dl>
            </td>
            <td>
              <dl>
                <dt>강수형태</dt>
                <dd>{props.ncst["PTY"]}</dd>
              </dl>
            </td>
            <td>
              <dl>
                <dt>1시간 강수량</dt>
                <dd>{props.ncst["RN1"]}</dd>
              </dl>
            </td>
            <td>
              <dl>
                <dt>습도</dt>
                <dd>{props.ncst["REH"]}</dd>
              </dl>
            </td>
          </tr>

          <tr>
            <td>
              <dl>
                <dt>풍향</dt>
                <dd>{props.ncst["VEC"]}</dd>
              </dl>
            </td>
            <td>
              <dl>
                <dt>풍속</dt>
                <dd>{props.ncst["WSD"]}</dd>
              </dl>
            </td>
            <td>
              <dl>
                <dt>풍속(동서)</dt>
                <dd>{props.ncst["UUU"]}</dd>
              </dl>
            </td>
            <td>
              <dl>
                <dt>풍속(남북)</dt>
                <dd>{props.ncst["VVV"]}</dd>
              </dl>
            </td>
          </tr>
          <tr>
            <td colSpan="4" className="fcstVersion">
              {ODAMConvert(props.ncst["ODAM"]) + "기준"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const weatherIcon = {
  맑음: "./src/assets/icon/sunny.svg",
  구름많음: "./src/assets/icon/sunny.svg",
  흐림: "/src/assets/icon/cloud_black.svg",
  비: "/src/assets/icon/rain.svg",
  "비/눈": "/src/assets/icon/rain_snow.svg",
  눈: "/src/assets/icon/snow.svg",
  소나기: "/src/assets/icon/shower.svg",
  빗방울: "/src/assets/icon/raindrop.svg",
  빗방울눈날림: "/src/assets/icon/snow_little.svg",
  눈날림: "/src/assets/icon/rain_snow.svg",
};

function weatherIconInit(directory) {
  const currentImage = document.querySelector(".current-image");
  console.log(currentImage);

  currentImage.style.backgroundImage = `url('${weatherIcon[directory]}')`;
}

//src={`${process.env.PUBLIC_URL}/cloud_black.svg`}

function ODAMConvert(odam) {
  if (odam === undefined) {
    return "-";
  }

  return `${odam.substring(4, 6)}.${odam.substring(6, 8)} ${odam.substring(
    8,
    10
  )}:${odam.substring(10, 12)}`;
}

export default WeatherNow;
