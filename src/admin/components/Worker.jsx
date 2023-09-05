import { PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import {   
    DatePicker,
    Form,
    Input,
} from 'antd';
import Picture from './Picture';
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const Worker = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5' >
            <h1 className='text-3xl' >Worker Control</h1>
            <Form
                labelCol={{
                    span: 10,
                }}
                wrapperCol={{
                    span: 16,
                }}
                layout="horizontal"               
                style={{
                    maxWidth: 600,
                    marginTop:20
                }}
            >
                <Form.Item label="Personel Adı">
                    <Input />
                </Form.Item>
                <Form.Item label="Personel Soyadı">
                    <Input />
                </Form.Item>
                <Form.Item label="Personel Departman">
                    <Input />
                </Form.Item>               
                <Form.Item label="Katılım Tarihi">
                    <DatePicker />
                </Form.Item>                
            </Form>
            <Picture />
        </div>
  )
}

export default Worker