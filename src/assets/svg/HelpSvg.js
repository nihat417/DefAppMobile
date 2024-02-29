import * as React from "react"
import Svg, { Circle, G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Circle cx={20} cy={20} r={19.5} fill="#fff" stroke="#fff" />
    <G clipPath="url(#a)">
      <Path
        stroke="#2AE1E1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.575 17.5a2.5 2.5 0 0 1 4.858.833c0 1.667-2.5 2.5-2.5 2.5M20 24.167h.008M28.333 20a8.333 8.333 0 1 1-16.666 0 8.333 8.333 0 0 1 16.666 0Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M10 10h20v20H10z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
