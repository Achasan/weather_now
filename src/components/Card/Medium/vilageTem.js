import TemUnit from "../Small/vilageTemUnit.js";
import "../Medium/vilageTem.css";

function VilageTem(props) {
  const array = props.vilage;

  return (
    <div className="weatherCard vilage">
      <div className="title">
        <strong>시간 별 날씨</strong>
      </div>
      <div className="tmp-list">
        {array.map((data) => {
          return <TemUnit key={data.fcstTime} data={data} />;
        })}
      </div>
    </div>
  );
}

export default VilageTem;
