import React from 'react';
import css from './Info.module.css';

const info = (props) => {
    return (
        <div className={css.Info} style={{ ...props.style }}>
            <p className={css.Title}>{props.title}</p>
            <p>{props.info}</p>
        </div>
    );
}

export default info;