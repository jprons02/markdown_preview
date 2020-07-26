import React from 'react';

//Header component
const Header = (props) => {
    return (
      <div className="header">
        <div className="left">
          <i className="fa fa-free-code-camp"></i>
          {props.text}
        </div>
        <div className="right">
          <i 
            onClick={props.onMaxOrMinClick} 
            className={`${props.sectionIconClass} ${props.minMaxClass}`}>
          </i>
        </div>
      </div>
    )
  }

  export default Header;