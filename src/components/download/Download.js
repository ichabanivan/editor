import React, { Component } from 'react';

import './Download.css';

import eventEmmiter from "./../../containers/eventEmmiter";

class Download extends Component {
  handleClick = () => {
    eventEmmiter.emit('bold')
  };

  render() {
    return (
      <div id="save">
        <a 
          id="downloadBtn" 
          href={"data:text/plain;charset=utf-8,%EF%BB%BF" + encodeURIComponent(this.props.html)}
          download="text.html"
          onClick={this.handleClick}
        >
          text.html
        </a>
      </div>
    );
  }
}

export default Download;
