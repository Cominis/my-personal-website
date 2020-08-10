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
                <h1 className={css.title}>Hi,  <br />I am Daumantas</h1>
                <img
                    className={css.item}
                    src={require('../../assets/images/as.png')}
                    width='200px'
                    height='200px'
                    alt='as'
                />
                <div>
                    <Button type='Primary' clicked={resumeClickedHandler}>Resume</Button>
                    <Button type='Secondary' clicked={projectsClickedHandler}>Projects</Button>
                </div>
            </div>
            <div className={css.about}>
                <h2>About Me</h2>
                <div>
                    <div className={css.text}>
                        <h3>Daumantas Šimkus</h3>
                        <h4>Student at Vilnius University</h4>
                        <br /><br />
                        Self-taught Android apps developer who even published his own app on google play. Currently unemployed but coding daily with React or Kotlin.
                        <br /><br />
                        This page is my first real React project of which I am proud of. I am eager to learn new languages and frameworks. If you think I would be a good employee, please contact me :)
                        <br /><br />
                        My stack: PostgreSQL, SQLite, React, HTML, CSS, JavaScript, Assembly 8086, Github, Java, C#, Kotlin.
                    </div>
                    <img
                        src={require('../../assets/images/comp.png')}
                        width='448px'
                        height='448px'
                        alt='as'
                    />
                </div>
                <div>
                    <Button type='Primary' clicked={cantactClickedHandler}>Cantact me</Button>
                </div>

            </div>
        </React.Fragment>
    );
}

export default me;