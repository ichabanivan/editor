import React, { Component } from 'react';
import './Editor.css';

class Editor extends Component {
  state = {
    prevKeyCode: null
  };

  handleInput = (e) => {
    let value = e.target.innerHTML;
    this.props.handleChangeText(value)
  };

  handleWrap = (e) => {
    console.log(e.keyCode);

    // The first sentence will wrap in paragraph (default: no wrap)
    if (e.target.innerHTML.length === 0) {
      this.props.handleP()
    }

    // Wrap in a paragraph instead of a div when you press any key after the enter (default: div)
    if (this.state.prevKeyCode) {
      this.props.handleP()
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
        onKeyDown={this.handleWrap}
      />
    );
  }
}

export default Editor;
