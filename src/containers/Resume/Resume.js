import React from 'react';
import css from './Resume.module.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import StarIcon from '@material-ui/icons/Star';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const resume = () => {

    const timelineElements = [
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
            date="May 2020"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">
                First app
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
                Vilnius, Lithuania
            </h4>
            <p>I published 'Simple Time Tracker' app to the 'Google Play' store.</p>
        </VerticalTimelineElement>,
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
            date="January 2020"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">
                Game Jam
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
                Vilnius, Lithuania
            </h4>
            <p>Participated and created a game with Unity engine.</p>
        </VerticalTimelineElement>,
        <VerticalTimelineElement
            onTimelineElementClick={() => {
                // eslint-disable-next-line no-alert
                //alert('onTimelineElementClick event fired');
            }}
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="December 2019"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">Sitecore Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Internship at Mocow, Vilnius</h4>
            <p>
                Coded with C#, used MVC
          </p>
        </VerticalTimelineElement>,
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
            date="December 2018"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">
                Hacker Games
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
                Vilnius, Lithuania
            </h4>
            <p>Participated and won in 'The Most Realistic Product' category.</p>
        </VerticalTimelineElement>,
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
            date="2017 - present"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">
                Bachelor of Software Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
            <p>Student</p>
        </VerticalTimelineElement>,
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2010 - July 2014"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">
                J. Vienožinskis Art School
          </h3>
            <h4 className="vertical-timeline-element-subtitle">Diploma</h4>
            <p>
                Four years of study.
            </p>
        </VerticalTimelineElement>,
        <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<StarIcon />}
        />,
    ];


    return (
        <VerticalTimeline>
            {timelineElements}
        </VerticalTimeline>
    );
}

export default resume;