import React from 'react'

const Button = (props) => (
  <button className={props.classNameCSS} onClick={props.handleClick}>
    {props.children}
  </button>
);

export default Button;
