import React from "react";
import {Card, Divider, Form, Switch} from "antd";


export default function RegularProgram() {
    return (
        <Card style={{
            marginTop: 16
        }}>
            <Form.Item label='Regular Program'>
                <Switch />
            </Form.Item>

            <Card.Meta
                title={<Divider orientation='left'>3. Regular Program</Divider>}
                description='A regular program refers to a program being implemented by agencies on a continuing basis.'
            />
        </Card>
    )
}