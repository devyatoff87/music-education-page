import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

function About() {
    let { profileId } = useParams();
    console.log(profileId);
    return (
        <div>
            About
            {/* <Outlet /> */}
        </div>
    )
}

export default About
