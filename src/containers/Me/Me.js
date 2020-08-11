import React from 'react';
import css from './Me.module.css';

import Button from '../../components/UI/Button/Button';

const me = (props) => {


    const cantactClickedHandler = () => {
        props.history.replace('/contact');
    }

    const resumeClickedHandler = () => {
        props.history.replace('/resume');
    }

    const projectsClickedHandler = () => {
        props.history.replace('/projects');
    }

    return (
        <React.Fragment>
            <div className={css.parallax} >
                <h1 className={css.title}>Hi,  <br />I'm Daumantas</h1>
                <img
                    className={css.mainFoto}
                    src={require('../../assets/images/me.png')}
                    alt='Me'
                />
                <div>
                    <Button type='Primary' clicked={resumeClickedHandler}>Resume</Button>
                    <Button type='Secondary' clicked={projectsClickedHandler}>Projects</Button>
                </div>
            </div>
            <div className={css.about}>
                <h2>About Me</h2>
                <div className={css.inlineBlock}>
                    <h3>Daumantas Šimkus</h3>
                    <h4>Student at Vilnius University</h4>
                    <br /><br />
                        Self-taught Android apps developer who in spare time developing webpages and apps. Coding daily with React or Kotlin.
                        <br /><br />
                        This page is my first real React project of which I am proud of. I am eager to learn new languages and frameworks. Please feel free to contact me if you need any further information :)
                        <br /><br />
                        My skill set: PostgreSQL, SQLite, React, HTML, CSS, JavaScript, Assembly 8086, Git, Java, C#, Kotlin.
                        <br /><br />

                    <Button type='Primary' clicked={cantactClickedHandler} style={{ fontSize: '1rem' }}>Cantact me</Button>

                </div>
                <div className={css.inlineBlock}>
                    <img className={css.computerImage}
                        src={require('../../assets/images/comp.png')}
                        alt='Computer'
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default me;