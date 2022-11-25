import React from "react";
import {Card, Divider, Form, Switch} from "antd";

export default function Trip() {
    return (
        <Card style={{
            marginTop: 16
        }}>
            <Form.Item label='Three-Year Rolling Infrastructure Program'>
                <Switch />
            </Form.Item>

            <Card.Meta
                title={<Divider orientation='left'>13. Three-Year Rolling Infrastructure Program</Divider>}
                description={
                    <div>
                        <p>Tick the checkbox if the PAP has infrastructure component.</p>
                    </div>
                }
            />
        </Card>

    )
}