import React from 'react';
import css from './Projects.module.css';

import Button from '../../components/UI/Button/Button';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import StarIcon from '@material-ui/icons/Star';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const projects = (props) => {
    const timelineElements = [
        <VerticalTimelineElement
            onTimelineElementClick={() => {
                // eslint-disable-next-line no-alert
                //alert('onTimelineElementClick event fired');
                // console.log(props);
                // window.location = 'https://github.com/Cominis/my-personal-website';
            }}
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2020 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">Personal Website</h3>
            <h4 className="vertical-timeline-element-subtitle">By using React</h4>
            <p>
                Website to show my resume and projects. Currently in development.
                <br /><br />
            </p>
            <div>
                <a href="https://github.com/Cominis/my-personal-website">
                    <Button type='Primary'>go to project</Button>
                </a>
            </div>

        </VerticalTimelineElement>,
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2020"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">Simple Time Tracker</h3>
            <h4 className="vertical-timeline-element-subtitle">Android App</h4>
            <p>
                App for tracking time spent in particular activity. It's published on 'Google Play'.
                <br /><br />
            </p>
            <div>
                <a href="https://github.com/Cominis/TimeTracker">
                    <Button type='Primary'>go to project</Button>
                </a>
            </div>

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

export default projects;