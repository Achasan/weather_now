import React, { useEffect, useState } from "react";
import axios from "axios";

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

function WeatherCard() {
  let [fcstData, fcstDataModify] = useState({
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
  });

  useEffect(() => {
    axios.get("api/weather").then((res) => {
      console.log(res.data);
      let odam = res.data.ncst["ODAM"];
      odam = `${odam.substring(4, 6)}.${odam.substring(6, 8)} ${odam.substring(
        8,
        10
      )}:${odam.substring(10, 12)}`;
      res.data.ncst["ODAM"] = odam;
      fcstDataModify(res.data.ncst);
    });
  }, []);

  return (
    <div className="weatherCard">
      <div className="current-image">
        <div className="text-block">
          <span className="temperature">{fcstData["T1H"]}</span>
          <span className="sky-status">{fcstData["SKY"]}</span>
        </div>
      </div>

      <table className="current-table">
        <tbody>
          <tr>
            <td>
              <dl>
                <dt>강수형태</dt>
                <dd>{fcstData["PTY"]}</dd>
              </dl>
            </td>
            <td>
              <dl>
                <dt>습도</dt>
                <dd>{fcstData["REH"]}</dd>
              </dl>
            </td>
            <td>
              <dl>
                <dt>1시간 강수량</dt>
                <dd>{fcstData["RN1"]}</dd>
              </dl>
            </td>
            <td>
              <dl>
                <dt>기온</dt>
                <dd>{fcstData["T1H"]}</dd>
              </dl>
            </td>
          </tr>

          <tr>
            <td>
              <dl>
                <dt>풍속(동서)</dt>
                <dd>{fcstData["UUU"]}</dd>
              </dl>
            </td>
            <td>
              <dl>
                <dt>풍속(남북)</dt>
                <dd>{fcstData["VVV"]}</dd>
              </dl>
            </td>
            <td>
              <dl>
                <dt>풍향</dt>
                <dd>{fcstData["VEC"]}</dd>
              </dl>
            </td>
            <td>
              <dl>
                <dt>풍속</dt>
                <dd>{fcstData["WSD"]}</dd>
              </dl>
            </td>
          </tr>
          <tr>
            <td colSpan="4" className="fcstVersion">
              {fcstData["ODAM"] + "기준"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default WeatherCard;
