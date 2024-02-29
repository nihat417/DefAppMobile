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
    <Circle cx={20} cy={20} r={20} fill="#fff" />
    <Path
      fill="#FB4A59"
      d="M15.417 12.667a1.834 1.834 0 0 1 1.833-1.834h5.5a1.833 1.833 0 0 1 1.833 1.834V14.5h3.667a.917.917 0 1 1 0 1.833h-.98l-.795 11.13a1.833 1.833 0 0 1-1.828 1.704h-9.294a1.834 1.834 0 0 1-1.83-1.704l-.792-11.13h-.981a.917.917 0 0 1 0-1.833h3.667v-1.833ZM17.25 14.5h5.5v-1.833h-5.5V14.5Zm-2.682 1.833.786 11h9.294l.785-11H14.568Zm3.599 1.834a.917.917 0 0 1 .916.916v5.5a.917.917 0 0 1-1.833 0v-5.5a.917.917 0 0 1 .917-.916Zm3.666 0a.917.917 0 0 1 .917.916v5.5a.917.917 0 1 1-1.833 0v-5.5a.917.917 0 0 1 .916-.916Z"
    />
  </Svg>
)
export default SvgComponent
