import React from 'react'
import { Button, Tooltip, Space } from 'antd';
import {ArrowUpOutlined } from '@ant-design/icons';

const TopOfPage = () => {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <div onClick={scrollToTop} className='z-50 fixed bottom-2 right-5 border  bg-blue-700 rounded-full cursor-pointer hover:bg-blue-900  transition delay-150 duration-300 ease-in-out ' >
            <ArrowUpOutlined className='text-white p-3' />
        </div>
    )
}

export default TopOfPage