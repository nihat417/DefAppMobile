import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Path
      fill="#66B600"
      d="M16 18a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-8a3 3 0 1 0 0 5.999A3 3 0 0 0 16 10Z"
    />
    <Path
      fill="#66B600"
      d="m16 30-8.436-9.949c-.117-.15-.233-.3-.348-.451A10.889 10.889 0 0 1 5 13a11 11 0 1 1 22 0c.003 2.382-.775 4.7-2.215 6.597l-.001.003s-.3.394-.345.447L16 30ZM8.813 18.395s.233.308.286.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.9 8.9 0 0 0 25 13a9 9 0 0 0-18 0 8.905 8.905 0 0 0 1.813 5.395Z"
    />
  </Svg>
)
export default SvgComponent
