import React, { Component } from 'react';
import './App.css';
import FormGroup from '../node_modules/react-bootstrap/FormGroup'
import FormLabel from '../node_modules/react-bootstrap/FormLabel'

let marked = require('marked');

class App extends React.Component {

  constructor(props){ 
    super(props);
    
    this.state = {
      markdown: ''
    }
    
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      markdown: event.target.value
    });
    let getMarkdown = this.state.markdown;
    let regex = /\r/gi;
    getMarkdown = getMarkdown.replace(regex, '<br>')
    this.state.markdown = getMarkdown
  }

  render(){
    let {markdown} = this.state;
    let textAreaStyle = {'width': 500, 'height': 700};
    
    return (
      <div className="App container">
        <div className = 'row'>
          <div className = 'col-md-6 input'>
              <h1>MarkDown Input</h1>
            <textarea id='editor' controlClass = 'textarea' placeholder='Enter Markdown' onChange = {this.handleChange} value={markdown} style={textAreaStyle}></textarea>
          </div>
          <div className = 'col-md-6 output'>
            <h1>Markdown Output</h1>
            <div id='preview' dangerouslySetInnerHTML= {{__html: marked(this.state.markdown)}}>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default App;
