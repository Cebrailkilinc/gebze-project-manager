import React from 'react';
import product1 from "../../assets/product1.jpg";
import product2 from "../../assets/product2.jpg";
import { SearchOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Dropdown, Space, Button, Tooltip } from 'antd';

const product = [
    {
        id: 1,
        head: "Urban QoL Dashboard",
        description: "Tempora veritatis nobis impedit odit tenetur obcaecati est amet vel maiores, beatae, id voluptatum corrupti et laudantium dolorem doloremque fugit. Assumenda, blanditiis.",
        img: product1,
        url:"https://www.arcgis.com/apps/dashboards/1ba9f8e1737d4b29a68270b0533623f8"
    },
    {
        id: 2,
        head: "Yasam Kalitesi Endeksi",
        description: "Tempora veritatis nobis impedit odit tenetur obcaecati est amet vel maiores, beatae, id voluptatum corrupti et laudantium dolorem doloremque fugit. Assumenda, blanditiis.",
        img: product2,
        url:"https://www.arcgis.com/apps/dashboards/0869386076694a569978e7c090a2d903"
    },
    {
        id: 3,
        head: "Akıllı Şehirler Yaşam Kalitesi Puan Endeksi: ",
        description: "Tempora veritatis nobis impedit odit tenetur obcaecati est amet vel maiores, beatae, id voluptatum corrupti et laudantium dolorem doloremque fugit. Assumenda, blanditiis.",
        img: product2,
        url:"https://www.arcgis.com/apps/dashboards/049032bf592c4a0bbbe9db6e8c88b7a3"
    },
    {
        id: 4,
        head: "Akıllı Şehirler Yaşam Kalitesi Genel Puan",
        description: "Tempora veritatis nobis impedit odit tenetur obcaecati est amet vel maiores, beatae, id voluptatum corrupti et laudantium dolorem doloremque fugit. Assumenda, blanditiis.",
        img: product2,
        url:"https://www.arcgis.com/apps/dashboards/81df8ab80508463a8dbbfaadd37663c8"
    },
    {
        id: 5,
        head: "Piksel_Bazli_Dashboard",
        description: "Tempora veritatis nobis impedit odit tenetur obcaecati est amet vel maiores, beatae, id voluptatum corrupti et laudantium dolorem doloremque fugit. Assumenda, blanditiis.",
        img: product2,
        url:"https://www.arcgis.com/apps/dashboards/25f1d21bc18b4b34917dd7e1d0481e7c"
    },
    {
        id: 6,
        head: "Arsa Rayiç Değerindeki Değişimin Analizi",
        description: "Tempora veritatis nobis impedit odit tenetur obcaecati est amet vel maiores, beatae, id voluptatum corrupti et laudantium dolorem doloremque fugit. Assumenda, blanditiis.",
        img: product2,
        url:"https://storymaps.arcgis.com/stories/611a2874a0d2459797e56f7eae13194c"
    }

]

const Projects = () => {
    return (
        <div className='max-w-6xl mx-auto py-10 font-mono flex flex-col gap-20 px-3 lg:px-0'>
            <h1 className='text-5xl font-bold text-gray-900 text-center lg:text-start'>Çözümlerimiz</h1>
            {
                product.map((item, i) => (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className='border-2  rounded-lg overflow-hidden cursor-pointer ' >
                            <img src={item.img} className='object-cover transition duration-1000 ease-in-out hover:scale-150 hover:opacity-50' />
                        </div>

                        <div className='flex flex-col justify-center items-center  text-center gap-10 font-mono' >
                            <h1 className='text-3xl'>{item.head}</h1>
                            <p>{item.description}</p>
                            
                            <Button onClick={()=>{window.open(item.url,'_blank')}} type='primary' className='text-white font-mono bg-indigo-700' icon={<ArrowRightOutlined />} >Ürünü İncele</Button>
                        </div>
                    </div>
                ))
            }            
        </div>
    )
}

export default Projects