import React from "react";
import {Card, DatePicker, Divider, Form} from "antd";

export default function ApprovalDate() {
    return (
        <Card style={{
            marginTop: 16
        }}>
            <Form.Item label='Date of Approval'>
                <DatePicker />
            </Form.Item>

            <Card.Meta
                title={<Divider orientation='left'>10. Date of Approval</Divider>}
                description='The date for the latest Level of Approval'
            />
        </Card>
    )
}
