import React, { Component } from 'react';

import Options from "./../components/options/Options";
import Download from "./../components/download/Download";
import Editor from "./../components/editor/Editor";
import Result from "./../components/result/Result";

import './App.css';

class App extends Component {
  state = {
    html: ''
  };

  setCommand = (aCommandName, aValueArgument, aShowDefaultUI) => {
    aShowDefaultUI = aShowDefaultUI || false;
    aValueArgument = aValueArgument || null;
    document.execCommand(aCommandName, aShowDefaultUI, aValueArgument);
  };

  handleBold = () => {
    this.setCommand('bold');
  };

  handleItalic = () => {
    this.setCommand('italic');
  };

  handleUnderline = () => {
    this.setCommand('underline');
  };

  // h1-h6
  handleHeading = (e) => {
    this.setCommand('formatBlock', `<${e}>`)
  };

  handleP = () => {
    this.setCommand('formatBlock', '<p>')
  };

  handleChangeText = (e) => {
    this.setState({html: e})
  };

  render() {
    return (
      <div className="App">
        <Options
          handleBold={this.handleBold}
          handleItalic={this.handleItalic}
          handleUnderline={this.handleUnderline}
          handleHeading={this.handleHeading}
        />
        <Editor
          handleP ={this.handleP}
          handleChangeText={this.handleChangeText}
        />
        <Download
          html={this.state.html}
          handleBold={this.handleBold}
        />
        <Result>
          {this.state.html}
        </Result>
      </div>
    );
  }
}

export default App;
