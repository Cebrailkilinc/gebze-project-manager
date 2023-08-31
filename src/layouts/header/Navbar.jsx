import React from 'react'
import { DownOutlined, SmileOutlined, CaretDownOutlined, MenuOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'



const Navbar = ({ handleClick }) => {

    const items = [
        {
            key: '1',
            label: (
                <AnchorLink href='#1'>
                    Urban QoL Dashboard
                </AnchorLink>
            ),
        },
        {
            key: '2',
            label: (
                <AnchorLink  href='#2'>
                    YKaltesiEndeksPuaniDashboard:
                </AnchorLink >
            ),
        },
        {
            key: '3',
            label: (
                <AnchorLink href='#3'>
                    Akıllı Şehirler Yaşam Kalitesi Puan Endeksi
                </AnchorLink >
            ),
        },
        {
            key: '4',
            label: (
                <AnchorLink href='#4'>
                    Akıllı Şehirler Yaşam Kalitesi Genel Puan
                </AnchorLink >
            ),
        },
        {
            key: '5',
            label: (
                <AnchorLink href='#5'>
                    Piksel_Bazli_Dashboard
                </AnchorLink >
            ),
        },
        {
            key: '6',
            label: (
                <AnchorLink  href='#6'>
                    Arsa Rayiç Değerindeki Değişimin Analizi
                </AnchorLink>
            ),
        },

    ];
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
                <AnchorLink href='#things'>
                    <div className='cursor-pointer hover:bg-indigo-800 p-3 rounded-lg'>
                        Ekip
                    </div>
                </AnchorLink>
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