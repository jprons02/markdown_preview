import React from 'react';
import marked from 'marked';
import DOMPurify from 'dompurify';

//Preview component
const Previewer = (props) => {
  
    const getMarkdownText = () => {
      return marked(DOMPurify.sanitize(props.markdown));
    }
    
    return (
      //code for marked.js to work
      <div id="preview" dangerouslySetInnerHTML={{__html: getMarkdownText()}} />
    )
  }

  export default Previewer;