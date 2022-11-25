import React from "react";
import {Card, Divider, Form, Switch} from "antd";

export default function Cip() {
    return (
        <Card style={{
            marginTop: 16
        }}>
            <Form.Item label='Core Investment Program/Project'>
                <Switch />
            </Form.Item>

            <Card.Meta
                title={<Divider orientation='left'>14. Core Investment Program/Project</Divider>}
                description={
                    <div>
                        <p>If the PAP meets the criteria to be classified as CIP based on the typologies of CIP below, please tick Core Investment Program/Project (CIP).</p>
                    </div>
                }
            />
        </Card>

    )
}