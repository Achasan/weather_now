import TemUnit from "../Small/vilageTemUnit.js";
import "../Medium/vilageTem.css";
import { useState, useEffect, useRef } from "react";

function VilageTem(props) {
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
        className="tmp-list"
        onMouseDown={onDragStart}
        onMouseMove={isDrag ? onDragMove : null}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        ref={scrollRef}
      >
        {array.map((data) => {
          return <TemUnit key={data.fcstTime} data={data} />;
        })}
      </div>
    </div>
  );
}

export default VilageTem;
