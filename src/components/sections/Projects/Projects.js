import React from 'react';
import SampleProjects from './subcomponents/SampleProjects';
import Testimonials from './subcomponents/Testimonials';


const Projects = (props) => {
    return (
        <>
            <SampleProjects innerWidth={props.innerWidth} />
            <Testimonials innerWidth={props.innerWidth} />
        </>
    )
}

export default Projects
