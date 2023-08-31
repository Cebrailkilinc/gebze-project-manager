import React from 'react';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

const Contact = () => {
    return (
        <div id='things' class="max-w-6xl mx-auto py-10 font-mono flex flex-col gap-16 mt-20">
            <h1 className='text-5xl font-bold text-gray-900 text-center lg:text-start'>Bize Ulaşın...</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 ' >
                <div className='w-96 h-96'>
                    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />                        
                    </MapContainer>
                </div>
                <div>input </div>
            </div>

        </div>
    )
}

export default Contact