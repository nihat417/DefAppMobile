import * as React from "react"
import Svg, { G, Circle, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={46}
    height={46}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Circle cx={23} cy={21} r={18} fill="#fff" />
      <Path
        stroke="#0079E9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22.25 13.5h-1.5c-3.75 0-5.25 1.5-5.25 5.25v4.5c0 3.75 1.5 5.25 5.25 5.25h4.5c3.75 0 5.25-1.5 5.25-5.25v-1.5"
      />
      <Path
        stroke="#0079E9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="m26.03 14.265-5.91 5.91c-.225.225-.45.667-.495.99l-.323 2.257c-.12.818.458 1.388 1.276 1.275l2.257-.322c.315-.045.758-.27.99-.495l5.91-5.91c1.02-1.02 1.5-2.205 0-3.705s-2.685-1.02-3.705 0Z"
      />
      <Path
        stroke="#0079E9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M25.183 15.113a5.358 5.358 0 0 0 3.704 3.704"
      />
    </G>
    <Defs></Defs>
  </Svg>
)
export default SvgComponent
