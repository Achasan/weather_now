function TemUnit(props) {
  const isMidnight =
    props.data.fcstTime.substring(4, 8) === "0000" ? true : false;

  const fcstTime = props.data.fcstTime;

  return (
    <div
      className={isMidnight ? "vilage-tem-unit midnight" : "vilage-tem-unit"}
    >
      <div className="time">
        <span className="tiny">{`${fcstTime.substring(4, 6)}:00`}</span>
      </div>
      {props.data.pty === "없음"
        ? weatherIconInit(props.data.sky)
        : weatherIconInit(props.data.pty)}
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

const weatherIconSmall = {
  맑음: "current-image small sunny",
  구름많음: "current-image small cloud",
  흐림: "current-image small cloud-strong",
  비: "current-image small rain",
  "비/눈": "current-image small rain-snow",
  눈: "current-image small snow",
  소나기: "current-image small shower",
  빗방울: "current-image small raindrop",
  빗방울눈날림: "current-image small snow-little",
  눈날림: "current-image small snow-little",
};

function weatherIconInit(fcstValue) {
  const className = weatherIconSmall[fcstValue];

  return <div className={className}></div>;
}

export default TemUnit;
