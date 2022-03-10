function MidUnit() {
  return (
    <div className="mid-unit">
      <div className="date">
        <span className="day">월</span>
        <br />
        <span className="month-day">3.12</span>
      </div>
      <div className="icon-block">
        <span>20%</span>
        <div className="current-image small sunny"></div>
        <span>30%</span>
        <div className="current-image small cloud-night"></div>
      </div>
      <div className="tem-block">
        <strong className="tem-min">5°</strong>
        <span>/</span>
        <strong className="tem-max">15°</strong>
      </div>
    </div>
  );
}

export default MidUnit;
