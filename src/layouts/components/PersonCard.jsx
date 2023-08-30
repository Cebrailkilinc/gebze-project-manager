import React from 'react'
import { Card } from 'antd';

const { Meta } = Card;

const PersonCard = () => {
    return (
        <div className='flex flex-col items-center gap-5 justify-center border border-indigo-500 rounded-lg px-5 py-10'>
            <div className='border-2 overflow-hidden cursor-pointer rounded-full h-40 w-40' >
                <img src={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"} className='object-cover transition duration-1000 ease-in-out hover:scale-105 hover:opacity-50' />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h1>Cebrail KILINÇ</h1>
                <h6>Frontend Developer.</h6>
            </div>
        </div>
    )
}

export default PersonCard