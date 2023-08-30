import React from 'react'
import { Carousel } from 'antd';
import slide1 from "../../assets/slider1.jpg"
import slide2 from "../../assets/slider2.jpg"
import slide3 from "../../assets/slider3.jpg"

const contentStyle = {
    height: '100vh',
    color: '#fff',
    lineHeight: '360px',
    textAlign: 'center',
    background: '#364d79',
};

const Slider = () => {
    return (
        <div className='z-0' >
            <Carousel autoplay dots={false} autoplaySpeed={3000} >
                <div>
                    <div style={contentStyle}>
                        <img className='object-cover w-full h-full' src={slide1} />                        
                        
                    </div>               
                    
                </div>
                <div className='flex items-center justify-center'>
                    <div style={contentStyle}>
                        <img className='object-cover w-full h-full' src={slide2} />
                        <h1>asdadss</h1>
                    </div>                    
                </div>
                <div>
                    <div style={contentStyle}>
                        <img className='object-cover w-full h-full' src={slide3} />
                    </div>
                </div>               
            </Carousel>
        </div>
    )
}

export default Slider