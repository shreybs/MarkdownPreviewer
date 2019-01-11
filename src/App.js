import React, { Component } from 'react';
import './App.css';
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'

import './main.css';


let marked = require("marked");
const defaultPlaceholder = `
# Welcome to the markdown editor               

## Made by Shreyas

[Visit my Site !](https://www.shreyasbs.com) 
             
\`cout<<"You can write code in here too";\`

**And this below is a multi line code**

\`\`\`  
            
var greet = "Hey Jude !";
console.log(greet);

\`\`\`              

- This is for a front end dev project
              
- Made for freecodecamp's certification              

- Used React and Vanilla CSS              

> Thanks for seeing my project.              

![Gandalf image](http://avatarbox.net/avatars/img34/gandalf_the_white_avatar_picture_35562.jpg) 
`
class App extends Component {

  state={
    markdown:defaultPlaceholder,
  }

  updateMarkdown = function(markdown){
    this.setState({markdown});
  }

  render() {
    let { markdown } = this.state;
    let customH1 = {fontSize : '21px' }
    let backgroundTint = {backgroundColor: 'rgb(255, 224, 228);', bordderRadius:'15px;'}

    return (
      <div className="App">
      <div>
        <FormGroup controlId="formControlsTextArea">
          <ControlLabel>Input Markdown here</ControlLabel><br/>
          <FormControl value = {markdown} componentClass="textarea" placeholder="" id="editor" onChange={(event)=>this.updateMarkdown(event.target.value)}>
           # Hey Yall ?
          </FormControl>
        </FormGroup>
      </div>
      <div style={backgroundTint}>
        <h1 style={customH1}> Markdown Preview </h1>
        <div className="Godder" dangerouslySetInnerHTML= {{__html:marked(markdown)}} id="preview"> 
        
        </div>      
      </div>
      </div>

    );
  }
}

export default App;
