import TemUnit from "../Small/vilageTemUnit.js";
import "../Medium/vilageTem.css";

function VilageTem() {
  return (
    <div className="weatherCard vilage">
      <div className="title">
        <strong>시간 별 날씨</strong>
      </div>
      <div className="tmp-list">
        <TemUnit />
        <TemUnit />
      </div>
    </div>
  );
}

export default VilageTem;
