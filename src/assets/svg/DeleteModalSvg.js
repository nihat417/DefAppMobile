import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={42}
    fill="none"
    {...props}
  >
    <Circle cx={21} cy={21} r={21} fill="#FF3115" />
    <Path
      fill="#fff"
      d="M19.625 14.125h2.75a1.375 1.375 0 0 0-2.75 0Zm-1.375 0a2.75 2.75 0 1 1 5.5 0h5.5a.687.687 0 1 1 0 1.375h-.776l-1.656 12.152a3.437 3.437 0 0 1-3.406 2.973h-4.824a3.438 3.438 0 0 1-3.406-2.973L13.525 15.5h-.775a.687.687 0 1 1 0-1.375h5.5Zm1.375 4.813a.687.687 0 1 0-1.375 0v6.875a.687.687 0 1 0 1.375 0v-6.875Zm3.438-.688a.687.687 0 0 1 .687.688v6.875a.687.687 0 1 1-1.375 0v-6.875a.687.687 0 0 1 .688-.688Zm-6.518 9.217a2.063 2.063 0 0 0 2.043 1.783h4.824a2.063 2.063 0 0 0 2.044-1.783L27.087 15.5H14.913l1.632 11.967Z"
    />
  </Svg>
)
export default SvgComponent
