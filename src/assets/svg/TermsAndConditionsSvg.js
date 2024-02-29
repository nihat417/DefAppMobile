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
      fill="#FFAA2A"
      d="M22.5 13.333H15v13.334h10V15.833h-2.5v-2.5ZM15 11.667h8.333L26.667 15v11.667A1.667 1.667 0 0 1 25 28.333H15a1.667 1.667 0 0 1-1.667-1.666V13.333A1.667 1.667 0 0 1 15 11.667Zm1.667 7.5h6.666v1.666h-6.666v-1.666Zm0 3.333h6.666v1.667h-6.666V22.5Z"
    />
  </Svg>
)
export default SvgComponent
