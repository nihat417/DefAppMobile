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
    <G stroke="#FFAA2A" clipPath="url(#a)">
      <Path
        strokeWidth={1.5}
        d="M11.667 23.333c0-2.356 0-3.535.732-4.267.732-.733 1.911-.733 4.268-.733h6.666c2.357 0 3.536 0 4.268.733.732.732.732 1.91.732 4.267s0 3.536-.732 4.268c-.732.732-1.911.732-4.268.732h-6.666c-2.357 0-3.536 0-4.268-.732-.732-.732-.732-1.911-.732-4.268Z"
      />
      <Path
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15 18.333v-1.666a5 5 0 1 1 10 0v1.666"
      />
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.667 23.333h.007m3.319 0H20m3.326 0h.007"
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
