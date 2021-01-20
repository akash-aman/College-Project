import React from 'react'
import style from './style.css';
function style(props) {
    return (
        <div className={style}>
          {props.children}  
        </div>
    )
}

export default style;
