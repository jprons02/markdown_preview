import React from 'react';
import marked from 'marked';
import DOMPurify from 'dompurify';

const Previewer = (props) => {
  
    const getMarkdownText = () => {
      return marked(DOMPurify.sanitize(props.markdown));
    }
    
    return (
      <div id="preview" dangerouslySetInnerHTML={{__html: getMarkdownText()}} />
    )
  }

  export default Previewer;