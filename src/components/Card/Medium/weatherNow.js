import React, { useEffect, useState } from "react";

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

function WeatherNow(props) {
  return (
    <div className="weatherCard">
      <div className="current-image">
        <div className="text-block">
          <span className="temperature">{props.ncst["T1H"]}</span>
          <span className="sky-status">{props.ncst["SKY"]}</span>
        </div>
      </div>

      <table className="current-table">
        <tbody>
          <tr>
            <td>
              <dl>
                <dt>강수형태</dt>
                <dd>{props.ncst["PTY"]}</dd>
              </dl>
            </td>
            <td>
              <dl>
                <dt>습도</dt>
                <dd>{props.ncst["REH"]}</dd>
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
                <dt>기온</dt>
                <dd>{props.ncst["T1H"]}</dd>
              </dl>
            </td>
          </tr>

          <tr>
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

function ODAMConvert(odam) {
  return `${odam.substring(4, 6)}.${odam.substring(6, 8)} ${odam.substring(
    8,
    10
  )}:${odam.substring(10, 12)}`;
}

export default WeatherNow;
