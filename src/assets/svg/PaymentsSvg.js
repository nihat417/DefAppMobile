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
      fill="#369BFF"
      d="M23.125 22.083a.625.625 0 1 0 0 1.25h2.083a.625.625 0 0 0 0-1.25h-2.083Zm-11.458-5.208a2.708 2.708 0 0 1 2.708-2.708h11.25a2.709 2.709 0 0 1 2.708 2.708v6.25a2.709 2.709 0 0 1-2.708 2.708h-11.25a2.708 2.708 0 0 1-2.708-2.708v-6.25Zm15.416 1.042v-1.042a1.459 1.459 0 0 0-1.458-1.458h-11.25a1.458 1.458 0 0 0-1.458 1.458v1.042h14.166Zm-14.166 1.25v3.958c0 .805.653 1.458 1.458 1.458h11.25a1.459 1.459 0 0 0 1.458-1.458v-3.958H12.917Z"
    />
  </Svg>
)
export default SvgComponent
