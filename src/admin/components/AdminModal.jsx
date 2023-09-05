import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import * as myConstClass from "../../constant/admin"
import Picture from './Picture';
import Project from './Project';
import Worker from './Worker';
import Visit from './Visit';
const AdminModal = (props) => {

    return (
        <div className='' >
            <Modal
                bodyStyle={{ overflowY: 'scroll', maxHeight:"400px", scrollbarColor:"red"}}
                open={props.open}
                onOk={props.handleOk}
                confirmLoading={props.confirmLoading}
                onCancel={props.handleCancel}
            >
                {props.modalControl == myConstClass.ADD_IMG && <Visit />}
                {props.modalControl == myConstClass.ADD_PROJECT && <Project />}
                {props.modalControl == myConstClass.ADD_USER && <Worker />}

            </Modal>
        </div>
    )
}

export default AdminModal