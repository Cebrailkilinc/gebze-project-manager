import React,{useRef} from 'react'
import Slider from '../layouts/content/Slider'
import Projects from '../layouts/content/Projects'
import Person from '../layouts/content/Person';
import TopOfPage from '../layouts/components/TopOfPage';

import AnchorLink from 'react-anchor-link-smooth-scroll'
import Contact from '../layouts/content/Contact';

const Home = () => {


    return (
        <div>
            {/* <div className='h-screen w-3/4 fixed z-50 bg-white bg-opacity-80 block lg:hidden'  >asd</div>  */}            
            <Slider />
            <Projects />
            <Person  />
            <Contact/>
            <TopOfPage />
        </div>
    )
}

export default Home