import React from 'react'

import './Download.css';

const Download = (props) => (
  <div className="save">
    <a
      href={"data:text/plain;charset=utf-8,%EF%BB%BF" + encodeURIComponent(props.html)}
      download="text.html"
      onClick={props.handleBold}
    >
      text.html
    </a>
  </div>
);

export default Download;

