import { PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import {
    Button,
    Cascader,
    Checkbox,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Slider,
    Switch,
    TreeSelect,
    Upload,
} from 'antd';
import Picture from './Picture';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

const Project = () => {
   
    return (
        <div className='flex flex-col justify-center items-center gap-10' >
            <h1 className='text-3xl' >Slider Control</h1>
            <Form
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                layout="horizontal"               
                style={{
                    maxWidth: 600,
                }}
            >
                <Form.Item label="Proje Başlığı">
                    <Input />
                </Form.Item>
                <Form.Item label="Proje URL">
                    <Input />
                </Form.Item>
                <Form.Item label="Proje Açıklaması">
                    <TextArea rows={4} />
                </Form.Item>

                <Form.Item label="Başlangıç-Bitiş">
                    <RangePicker />
                </Form.Item>
            </Form>
            <Picture/>
        </div>
    )
}

export default Project