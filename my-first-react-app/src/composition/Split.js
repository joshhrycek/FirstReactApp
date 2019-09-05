import React from 'react';
import './Split.css';

function Split(props) {
    const combindedClassName = `split ${props.className}`
    const newStyles = { flex: props.flexBasis}
    return (
    <div 
        className={combindedClassName}
        style={newStyles}>
      {props.children}
    </div>
    );
}

export default Split;