function PerHourFcstUnit(props) {
  const fcstTime = props.data.fcstTime;

  const isMidnight = fcstTime.substring(4, 8) === "0000" ? true : false;

  const parameter = props.data.pty === "없음" ? props.data.sky : props.data.pty;

  return (
    <div className={isMidnight ? "vilage-unit midnight" : "vilage-unit"}>
      <div className="time">
        <span className="tiny">{`${fcstTime.substring(4, 6)}:00`}</span>
      </div>
      <div
        className={
          "current-image small " +
          weatherIconInit(parameter, fcstTime.substring(4, 6))
        }
      ></div>

      <div className="vilage-tem">
        <strong>{props.data.tmp}</strong>
      </div>
      <div className="precipitation">
        <span className="tiny">{"☔" + props.data.pop}</span>
      </div>
      {isMidnight ? (
        <div className="date">
          <strong className="tiny">
            {fcstTime.substring(0, 2)}/{fcstTime.substring(2, 4)}
          </strong>
        </div>
      ) : null}
    </div>
  );
}

function weatherIconInit(fcstValue, fcstTime) {
  const icons = {
    맑음: "sunny",
    구름많음: "cloud",
    흐림: "cloud-strong",
    비: "rain",
    "비/눈": "rain-snow",
    눈: "snow",
    소나기: "shower",
    빗방울: "raindrop",
    빗방울눈날림: "snow-little",
    눈날림: "snow-little",
  };

  const nightIcons = {
    맑음: "sunny-night",
    구름많음: "cloud-night",
    흐림: "cloud-strong-night",
    비: "rain",
    "비/눈": "rain-snow",
    눈: "snow",
    소나기: "shower",
    빗방울: "raindrop",
    빗방울눈날림: "snow-little",
    눈날림: "snow-little",
  };

  if (fcstTime >= 18 || fcstTime <= 6) {
    return fcstValue === null ? "sunny" : nightIcons[fcstValue];
  }

  return fcstValue === null ? "sunny" : icons[fcstValue];
}

export default PerHourFcstUnit;
