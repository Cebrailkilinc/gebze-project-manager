import React from 'react'
import { DownOutlined, SmileOutlined, CaretDownOutlined, MenuOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';


const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Urban QoL Dashboard
            </a>
        ),
    },
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                YKaltesiEndeksPuaniDashboard: 
            </a>
        ),
    },
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
               Akıllı Şehirler Yaşam Kalitesi Puan Endeksi
            </a>
        ),
    },
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Akıllı Şehirler Yaşam Kalitesi Genel Puan
            </a>
        ),
    },
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Piksel_Bazli_Dashboard
            </a>
        ),
    },
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Arsa Rayiç Değerindeki Değişimin Analizi
            </a>
        ),
    },
    
];

const Navbar = () => {
    return (
        <div className='fixed top-5 left-1/2 transform -translate-x-1/2 bg-opacity-70 z-50 flex w-11/12 items-center justify-between bg-indigo-600 px-10  rounded-md text-white'  >
           <Link to={"/"} > <div className='font-medium' >GTU</div></Link>
            <div className='flex lg:hidden py-5' ><MenuOutlined /></div>

            <div className='hidden lg:flex items-center gap-10 font-medium '>
                <div >
                    <Dropdown
                        className='py-2'
                        menu={{
                            items,
                        }}
                    >
                        <div className='cursor-pointer  px-3 ' onClick={(e) => e.preventDefault()}>
                            <Space className='cursor-pointer py-3 px-3 rounded-lg hover:bg-indigo-800'>
                                Projeler
                                <CaretDownOutlined />
                            </Space>
                        </div>
                    </Dropdown>
                </div>
                <div className='cursor-pointer hover:bg-indigo-800 p-3 rounded-lg'>
                    Ekip
                </div>
                <Link to={"/aboutus"} >
                    <div className='cursor-pointer hover:bg-indigo-800 p-3 rounded-lg'>
                        Hakkımızda
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Navbar