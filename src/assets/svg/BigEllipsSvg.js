import React from "react";
import Svg, { Circle } from "react-native-svg";

const SvgComponent = ({ size }) => {
  let width, height, cx, cy, r;

  switch (size) {
    case "small":
      width = 13;
      height = 13;
      cx = 6.421;
      cy = 6.421;
      r = 6;
      break;
    case "middle":
      width = 31;
      height = 31;
      cx = 15.611;
      cy = 15.611;
      r = 15;
      break;
    case "big":
      width = 61;
      height = 61;
      cx = 30.222;
      cy = 30.222;
      r = 30;
      break;
    default:
      width = 13;
      height = 13;
      cx = 6.421;
      cy = 6.421;
      r = 6;
  }

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
    >
      <Circle
        cx={cx}
        cy={cy}
        r={r}
        fill="#FFC425"
        transform={`rotate(-106 ${cx} ${cy})`}
      />
    </Svg>
  );
};

export default SvgComponent;
