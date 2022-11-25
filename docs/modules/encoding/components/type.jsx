import React from 'react';
import {Card, Divider, Form, Select} from "antd";

export default function Type() {
    return (
        <Card style={{
            marginTop: 16
        }}>
            <Form.Item label='Program or Project' rules={[{required:true}]}>
                <Select value={1} options={[{
                    value: 1,
                    label: 'Program'
                }, {
                    value: 2,
                    label: 'Project'
                }]} />
            </Form.Item>

            <Card.Meta
                title={<Divider orientation='left'>2. Program or Project</Divider>}
                description={<div>
                    <p>Select if the proposed entry is a Project or a Program based on the following:</p>

                    <ul>
                        <li>A program is a group of activities and projects that contribute to a common particular outcome. A program should have the following: (a) unique expected results or outcomes; (b) a clear target population or client group external to the agency; (c) a defined method of intervention to achieve the desired result; and (d) a clear management structure that defines accountabilities; and</li>
                        <li>A project is a special undertaking carried out within a definite timeframe and intended to result in some pre-determined measure of goods and services.</li>
                    </ul>
                </div>}
            />
        </Card>
    )
}
