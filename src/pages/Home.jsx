import React, { useRef } from 'react'

//Component imports
import Slider from '../layouts/content/Slider'
import Projects from '../layouts/content/Projects'
import Person from '../layouts/content/Person';
import TopOfPage from '../layouts/components/TopOfPage';
import Contact from '../layouts/content/Contact';


const Home = () => {

    return (
        <>          
            <Slider />
            <Projects />
            <Person />
            <Contact />
            <TopOfPage />
        </>
    )
}

export default Home