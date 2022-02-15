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
  });

  useEffect(async () => {
    await axios.get("api/UltraSrtNcst").then((res) => fcstDataModify(res.data));
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
        </tbody>
      </table>
    </div>
  );
}

export default WeatherCard;
