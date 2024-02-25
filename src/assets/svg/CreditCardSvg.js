import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={24}
    fill="none"
    {...props}
  >
    <Rect width={38} height={23.75} fill="#2D2D2D" rx={4.283} />
    <Path
      fill="#FFCD00"
      d="M22.127 11.875c0 2.562-1.226 4.846-3.13 6.32a8.268 8.268 0 0 0 5.054 1.723c4.509 0 8.177-3.608 8.177-8.043 0-4.435-3.668-8.043-8.177-8.043-1.844 0-3.62.615-5.05 1.72 1.9 1.476 3.126 3.76 3.126 6.323Z"
    />
    <Path
      fill="#FF5023"
      d="M22.126 11.875c0-2.562-1.226-4.847-3.13-6.32a8.22 8.22 0 0 0-5.047-1.723c-4.509 0-8.177 3.608-8.177 8.043 0 4.435 3.668 8.043 8.177 8.043a8.221 8.221 0 0 0 5.048-1.723c1.904-1.474 3.13-3.758 3.13-6.32Z"
    />
  </Svg>
)
export default SvgComponent
