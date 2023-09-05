import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import { PictureOutlined, AppstoreAddOutlined, UsergroupAddOutlined } from '@ant-design/icons';

import * as myConstClass from "../constant/admin"
//Components
import AdminModal from './components/AdminModal';


const AdminBar = () => {
  const [open, setOpen] = useState(false);
  const [modalControl, setModalControl] = useState("slider-image");
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  
  const handleImageOpen = () => {
    setModalControl("slider-image")
    setOpen(true);
  };
  const handleAddProjectOpen = () => {
    setModalControl("add-project")
    setOpen(true);
  };
  const handleAddUserOpen = () => {
    setModalControl("add-user")
    setOpen(true);
  };
  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  return (
    <div className='fixed top-1/3 left-12 sm:left-24 transform -translate-x-1/2 bg-opacity-70 z-50 w-10 sm:w-20  bg-red-500 px-2 rounded-md text-white'>
      <AdminModal
        open={open}
        setOpen={setOpen}
        confirmLoading={confirmLoading}
        setConfirmLoading={setConfirmLoading}
        modalText={modalText}
        setModalText={setModalText}
        handleOk={ handleOk }
        handleCancel={handleCancel}
        modalControl={modalControl}
        />
      <ul className='flex flex-col space-y-5 items-center justify-between py-5'>
        <li>
          <PictureOutlined onClick={handleImageOpen} className='text-3xl hover:text-gray-600 cursor-pointer' />
        </li>
        <li>
          <AppstoreAddOutlined onClick={handleAddProjectOpen} className='text-3xl hover:text-gray-600 cursor-pointer' />
        </li>
        <li>
          <UsergroupAddOutlined onClick={handleAddUserOpen} className='text-3xl hover:text-gray-600 cursor-pointer' />
        </li>
      </ul>
    </div>
  )
}

export default AdminBar
