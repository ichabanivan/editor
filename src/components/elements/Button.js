import React from 'react'

const Button = (props) => (
  <button className={props.cssClass} onClick={props.handleClick}>
    {props.children}
  </button>
);

export default Button;
