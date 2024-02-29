import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Circle cx={20} cy={20} r={19.5} fill="#fff" stroke="#fff" />
    <Path
      fill="#FF8C03"
      d="M20 12.083a4.583 4.583 0 0 1 2.58 8.373 7.503 7.503 0 0 1 4.917 6.817.626.626 0 1 1-1.25.037 6.25 6.25 0 0 0-12.494 0 .625.625 0 1 1-1.25-.037 7.505 7.505 0 0 1 4.917-6.817A4.584 4.584 0 0 1 20 12.083Zm-3.333 4.584a3.333 3.333 0 1 0 6.666 0 3.333 3.333 0 0 0-6.666 0Z"
    />
  </Svg>
)
export default SvgComponent
