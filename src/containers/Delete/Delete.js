import React from 'react';
import css from './Delete.module.css';

import Shortcuts from '../../components/Shortcuts/Shortcuts';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

const deletes = () => {
    return (
        <React.Fragment>
            <div className={css.Me}>
                <img
                    src={require('../../assets/images/as.png')}
                    width='200px'
                    height='200px'
                    alt='as'
                />
                <p className={css.Name}>Daumantas <br /> Šimkus</p>
                <hr />
                <p className={css.Occupation}>Student at vu</p>
                <Button type='Primary'>Projects</Button>
                <Button type='Secondary'>Resume</Button>
                <div>
                    <Shortcuts width='40px' height='40px' />
                </div>

            </div>
        </React.Fragment>
    );
}

export default deletes;