import React from 'react';
import css from './Button.module.css'

const button = (props) => (
    <button
        className={[css.Button, css[props.type]].join(' ')}
        style={{ ...props.style }}
        onClick={props.clicked}
    >{props.children}</button>
);

export default button