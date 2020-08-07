import React from 'react';
import images from '../../assets/images/shortcutImages';
import css from './Shortcuts.module.css'
const shortcut = (props) => {

    return images.map(el =>
        (<a href={el.link} className={css.Shortcuts}>
            <img
                src={el.src}
                alt={el.alt}
                width={props.width}
                height={props.height}
            />
        </a >));
}

export default shortcut