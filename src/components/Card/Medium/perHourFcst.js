import "../Medium/perHourFcst.css";
import { useState, useRef } from "react";
import PerHourFcstUnit from "../Small/perHourFcstUnit.js";

function PerHourFcst(props) {
  const array = props.vilage;

  const scrollRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();

  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e) => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;

      scrollRef.current.scrollLeft = startX - e.pageX;

      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };

  return (
    <div className="weatherCard vilage">
      <div className="title">
        <strong>시간 별 날씨</strong>
      </div>
      <div
        className="vilage-list"
        onMouseDown={onDragStart}
        onMouseMove={isDrag ? onDragMove : null}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        ref={scrollRef}
      >
        {array.map((data) => {
          return <PerHourFcstUnit key={data.fcstTime} data={data} />;
        })}
      </div>
    </div>
  );
}

export default PerHourFcst;
