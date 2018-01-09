import React, { Component } from 'react';

import './Options.css';

import Button from "../elements/Button";
import Select from "../elements/Select";

import eventEmmiter from "./../../containers/eventEmmiter";

class Options extends Component {
  handleBold = () => {
    eventEmmiter.emit('bold')
  };

  handleItalic = () => {
    eventEmmiter.emit('italic')
  };

  handleUnderline = () => {
    eventEmmiter.emit('underline')
  };

  changeHeading = (e) => {
    let heading =  e.target.value; // h1-h6

    eventEmmiter.emit(heading);

    // Reset
    e.target.value = 0;
  };

  componentDidMount() {
    this.setState({
      heading: document.getElementById('heading')
    })
  }

  render() {
    return (
      <div className="options">
        <Button handleClick={this.handleBold} cssClass='bold'>Bold</Button>
        <Button handleClick={this.handleItalic} cssClass='italic'>Italic</Button>
        <Button handleClick={this.handleUnderline} cssClass='underline'>Underline</Button>
        <Select changeHeading={this.changeHeading} id="heading"/>
      </div>
    );
  }
}

export default Options;
