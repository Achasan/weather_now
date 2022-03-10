import MidUnit from "../Small/midFcstUnit.js";

function MidFcst(props) {
  return (
    <div className="weatherCard large">
      <div className="title">
        <strong>주간날씨</strong>
      </div>

      <div className="mid-list">
        <div className="unit-container">
          <MidUnit />
          <MidUnit />
          <MidUnit />
          <MidUnit />
          <MidUnit />
        </div>
        <div className="unit-container">
          <MidUnit />
          <MidUnit />
          <MidUnit />
          <MidUnit />
          <MidUnit />
        </div>
      </div>
    </div>
  );
}

export default MidFcst;
