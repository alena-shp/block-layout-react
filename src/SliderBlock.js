import React from "react"
import Slider, { Range } from "rc-slider"
import "rc-slider/assets/index.css"

import "./SliderBlock.scss"

const SliderBlock = props => {
  return (
    <>
      <Slider
        min={20}
        defaultValue={20}
        step={1}
        trackStyle={{ height: "100%", borderRadius: 0 }}
        handleStyle={{
          boxShadow: "none",
          background: "transparent",
          border: "none",
          top: "24px"
        }}
        railStyle={{ background: "transparent", height: "100%" }}
        className="slider-block"
      />
    </>
  )
}

export default SliderBlock
