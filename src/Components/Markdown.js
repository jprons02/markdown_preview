import React from 'react';
import Editor from './Editor';
import Previewer from './Previewer';
import Header from './Header';

const placeholder = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org/), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`

const editorText = " EDITOR";
const previewText = " PREVIEWER";

class Markdown extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        markdown: placeholder,
        editorMaximized: false,
        previewerMaximized:false
      }
    }
    
    onTextChange = (e) => {
      this.setState({
        markdown: e.target.value
      });
    };
    
    //Changing state on click to opposite. 
    onEditorChange = () => this.setState({editorMaximized: !this.state.editorMaximized});
    onPreviewerChange = () => this.setState({previewerMaximized: !this.state.previewerMaximized});
    
    onMaxOrMinClick = (e) => {
      const isEditorIcon = e.target.classList.contains("editor-icon");
      const isPreviewerIcon = e.target.classList.contains("previewer-icon");
  
      isEditorIcon ? this.onEditorChange() : this.onPreviewerChange();
      isPreviewerIcon ? this.onPreviewerChange() : this.onEditorChange();
      
    }
  
    render() {
      
      const classes = 
            this.state.editorMaximized ? 
              {
                editorSize: "editor-wrap maximize",
                editorMinMaxClass:"fa fa-compress",
                previewerSize: "previewer-wrap hidden"
              } : 
            this.state.previewerMaximized ?
              {
                previewerSize:"previewer-wrap maximize",
                previewerMinMaxClass: "fa fa-compress",
                editorSize: "editor-wrap hidden"
              } :
              {
                editorSize: "editor-wrap",
                editorMinMaxClass: "fa fa-arrows-alt",
                previewerSize: "previewer-wrap",
                previewerMinMaxClass: "fa fa-arrows-alt"
              };
      
      return(
        <div className="container">
          <div className={classes.editorSize}>
            <Header 
              text={editorText}
              onMaxOrMinClick={this.onMaxOrMinClick}
              sectionIconClass="editor-icon"
              minMaxClass={classes.editorMinMaxClass}
            />
            <Editor 
              markdown={this.state.markdown}
              onChange={this.onTextChange}
            />
          </div>
          <div className={classes.previewerSize}>
            <Header 
              text={previewText}
              onMaxOrMinClick={this.onMaxOrMinClick}
              sectionIconClass="previewer-icon"
              minMaxClass={classes.previewerMinMaxClass}
            />
            <Previewer 
              markdown={this.state.markdown}
            />
          </div>
        </div>
      )
    }
  }

  export default Markdown;