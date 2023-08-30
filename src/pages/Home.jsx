import React,{useRef} from 'react'
import Slider from '../layouts/content/Slider'
import Projects from '../layouts/content/Projects'
import Person from '../layouts/content/Person';
import TopOfPage from '../layouts/components/TopOfPage';

const Home = () => {


    return (
        <div>
            {/* <div className='h-screen w-3/4 fixed z-50 bg-white bg-opacity-80 block lg:hidden'  >asd</div>  */}            <Slider />
            <Projects />
            <Person  />
            <TopOfPage />
        </div>
    )
}

export default Home