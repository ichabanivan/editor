import React, { Component } from 'react';

import Options from "./../components/options/Options";
import Download from "./../components/download/Download";
import Editor from "./../components/editor/Editor";
import Result from "./../components/result/Result";

import eventEmmiter from './eventEmmiter'

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.init();
    this.setCommand = this.setCommand.bind(this)
  }

  state = {
    html: ''
  };

  setCommand = (aCommandName, aValueArgument, aShowDefaultUI) => {
    aShowDefaultUI = aShowDefaultUI || false;
    aValueArgument = aValueArgument || null;
    document.execCommand(aCommandName, aShowDefaultUI, aValueArgument);
  };

  init = () => {
    eventEmmiter.on('bold', () => {
      this.setCommand('bold')
    });

    eventEmmiter.on('italic', () => {
      this.setCommand('italic')
    });

    eventEmmiter.on('underline', () => {
      this.setCommand('underline')

    });

    eventEmmiter.on('p', () => {
      this.setCommand('formatBlock', '<p>')

    });

    eventEmmiter.on('h1', () => {
      this.setCommand('formatBlock', '<h1>')

    });

    eventEmmiter.on('h2', () => {
      this.setCommand('formatBlock', '<h2>')

    });

    eventEmmiter.on('h3', () => {
      this.setCommand('formatBlock', '<h3>')
    });

    eventEmmiter.on('h4', () => {
      this.setCommand('formatBlock', '<h4>')
    });

    eventEmmiter.on('h5', () => {
      this.setCommand('formatBlock', '<h5>')
    });

    eventEmmiter.on('h6', () => {
      this.setCommand('formatBlock', '<h6>')
    });

    // Download and preview
    eventEmmiter.on('changeText', (e) => {
      this.setState({html: e})
    });
  };

  render() {
    return (
      <div className="App">
        <Options />
        <Editor />
        <Download html={this.state.html}/>
        <Result>{this.state.html}</Result>
      </div>
    );
  }
}
export default App;
