import React from 'react';
import { Button, Input } from 'antd';
import contact from "../../assets/contactus.jpg"


const { TextArea } = Input;
const Contact = () => {
   
    return (
        <div id='contact' class="max-w-6xl mx-auto py-10 font-mono flex flex-col gap-16 mt-20 bg-gradient-to-t from-[#F6F6F6] p-5 to-white">
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 text-center lg:text-start'>Bize Ulaşın...</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 ' >
                <div className='hidden md:block'>
                    <img src={contact} />
                </div>
                <form className='flex flex-col gap-5' >
                    <div className='flex items-center gap-5'>
                        <div className='w-full'>
                            <h1>AD :</h1>
                            <Input placeholder="Ad" />
                        </div>
                        <div className='w-full'>
                            <h1>SOYAD :</h1>
                            <Input placeholder="Soyad" />
                        </div>
                    </div>
                    <div>
                        <h1>EMAIL :</h1>
                        <Input type='email' placeholder="Email..." />
                    </div>
                    <div>
                        <h1>MESAJ :</h1>
                        <TextArea   placeholder="Mesajınız..." />
                    </div>
                    <Button onSubmit={()=>{}} type='primary' className='text-white font-mono bg-indigo-700'  >Gönder</Button>

                </form>
            </div>
        </div>
    )
}

export default Contact