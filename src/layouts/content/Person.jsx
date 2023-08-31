import React from 'react'
import PersonCard from '../components/PersonCard'

const Person = () => {
    return (
        <div id='things' class="max-w-6xl mx-auto py-10 font-mono flex flex-col gap-16 mt-20">
            <h1 className='text-5xl font-bold text-gray-900 text-center lg:text-start'>Ekibimiz...</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ' >
                <div><PersonCard /></div>
                <div><PersonCard /></div>
                <div><PersonCard /></div>
                <div><PersonCard /></div>
                <div><PersonCard /></div>                        
            </div>

        </div>
    )
}

export default Person