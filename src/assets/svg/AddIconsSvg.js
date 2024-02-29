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
      fill="#66B600"
      d="M20 21.25A3.125 3.125 0 1 1 20 15a3.125 3.125 0 0 1 0 6.25Zm0-5A1.875 1.875 0 1 0 20 20a1.875 1.875 0 0 0 0-3.75Z"
    />
    <Path
      fill="#66B600"
      d="m20 28.75-5.273-6.218a21.797 21.797 0 0 1-.217-.282 6.806 6.806 0 0 1-1.385-4.125 6.875 6.875 0 1 1 13.75 0 6.802 6.802 0 0 1-1.384 4.123l-.001.002s-.188.246-.216.28L20 28.75Zm-4.492-7.253.179.234L20 26.817l4.319-5.093.174-.229a5.562 5.562 0 0 0 1.132-3.37 5.625 5.625 0 1 0-11.25 0 5.566 5.566 0 0 0 1.133 3.372Z"
    />
  </Svg>
)
export default SvgComponent
