import React from 'react'

const Select = (props) => (
  <select onChange={props.changeHeading}>
    <option value="0">Choose heading</option>
    <option value="h1">h1</option>
    <option value="h2">h2</option>
    <option value="h3">h3</option>
    <option value="h4">h4</option>
    <option value="h5">h5</option>
    <option value="h6">h6</option>
  </select>
)

export default Select;

