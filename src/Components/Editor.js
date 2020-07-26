import React from 'react';

//Editor component
const Editor = (props) => {
    return (
      <textarea 
        value={props.markdown}
        onChange={props.onChange}
        text={props.text}
        id="editor"
        type="text"
      />
    )
  }

  export default Editor;