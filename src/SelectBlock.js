import React from "react"
import Select from "react-select"
import "./SelectBlock.scss"

const options = [
  { value: "1990", label: "1990" },
  { value: "1991", label: "1991" },
  { value: "1992", label: "1992" },
  { value: "1993", label: "1993" },
  { value: "1994", label: "1994" },
  { value: "1995", label: "1995" },
  { value: "1996", label: "1996" },
  { value: "1997", label: "1997" }
]

const SelectBlock = ({ className, ...restProps }) => (
  <Select
    className={`select-block ${className}`}
    classNamePrefix="select-block-option"
    options={options}
    {...restProps}
  />
)

export default SelectBlock
