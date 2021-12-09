import React, { useState } from 'react'
import { Input, Row, Col, Card } from 'antd';

export default function Form(props) {

    return (
        <Card title="Changing the name of the main character" style={{ width: "500px", margin: 'auto' }}>
            <Row gutter={20} >
                <Col span={12}>
                    <label>First Name : </label>
                    <Input placeholder="John" onChange={(e) => props.setFormData({ ...props.formData, 'firstName': e.target.value })} />
                </Col>
                <Col span={12}>
                    <label>Last Name : </label>
                    <Input placeholder="Doe" onChange={(e) => props.setFormData({ ...props.formData, 'lastName': e.target.value })} />
                </Col>
            </Row>
        </Card>
    )
}