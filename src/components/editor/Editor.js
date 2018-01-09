import React, { Component } from 'react';
import './Editor.css';

import eventEmmiter from "./../../containers/eventEmmiter";

class Editor extends Component {
  state = {
    prevKeyCode: null
  };

  handleInput = (e) => {
    let value = e.target.innerHTML
    eventEmmiter.emit('changeText', value)
  };

  wrap = (e) => {
    console.log(e.keyCode)
    // The first sentence will wrap in paragraph (default: no wrap)
    if (e.target.innerHTML.length === 0) {
      eventEmmiter.emit('p')
    }

    // Wrap in a paragraph instead of a div when you press any key after the enter (default: div)
    if (this.state.prevKeyCode) {
      eventEmmiter.emit('p')
    }

    if (e.keyCode === 13 && document.queryCommandEnabled("formatBlock")) {
      this.setState({prevKeyCode: 13})
    } else {
      this.setState({prevKeyCode: null})
    }
  };

  render() {
    return (
      <div
        onInput={this.handleInput}
        contentEditable="true"
        className="editor"
        onKeyDown={this.wrap}
      />
    );
  }
}

export default Editor;
