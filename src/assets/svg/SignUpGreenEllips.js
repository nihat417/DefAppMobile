import React from "react";
import Svg, {Circle} from 'react-native-svg';

const SvgComponent = ({size}) => {
  let width, height, cx, cy, r;

  switch (size) {
    case "small":
      width = 10;
      height = 10;
      cx = 5;
      cy = 5;
      r = 5
      break;
    case "middle":
      width = 15;
      height = 15;
      cx = 7.5;
      cy = 7.5;
      r = 7.5
      break;
    case "big":
      width = 20;
      height = 20;
      cx = 10;
      cy = 10;
      r = 10
      break;
  
    default:
      break;
  }
  return(
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none">
    <Circle cx={cx} cy={cy} r={r} fill="#66B600"/>
  </Svg>
  )
};
export default SvgComponent;
