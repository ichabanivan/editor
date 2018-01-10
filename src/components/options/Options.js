import React, { Component } from 'react';

import './Options.css';

import Button from "../elements/Button";
import Select from "../elements/Select";

class Options extends Component {
  changeHeading = (e) => {
    let heading =  e.target.value; // h1-h6

    this.props.handleHeading(heading);

    // Reset
    e.target.value = 0;
  };

  render() {
    return (
      <div className="options">
        <Button handleClick={this.props.handleBold} classNameCSS='bold'>Bold</Button>
        <Button handleClick={this.props.handleItalic} classNameCSS='italic'>Italic</Button>
        <Button handleClick={this.props.handleUnderline} classNameCSS='underline'>Underline</Button>
        <Select changeHeading={this.changeHeading} />
      </div>
    );
  }
}

export default Options;
