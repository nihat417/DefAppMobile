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
      stroke="#66B600"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22.5 15.833h-5m5 3.334h-5m5 3.333h-3.333m-5-10h11.666v15l-.86-.737a1.667 1.667 0 0 0-2.169 0l-.86.737-.859-.737a1.667 1.667 0 0 0-2.17 0l-.86.737-.86-.737a1.667 1.667 0 0 0-2.168 0l-.86.737v-15Z"
    />
  </Svg>
)
export default SvgComponent
