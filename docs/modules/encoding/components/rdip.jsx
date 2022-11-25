import React from "react";
import {Card, Divider, Form, Switch} from "antd";

export default function Rdip() {
    return (
        <Card style={{
            marginTop: 16
        }}>
            <Form.Item label='Regional Development Investment Program/Project (RDIP)'>
                <Switch />
            </Form.Item>

            <Card.Meta
                title={<Divider orientation='left'>17. Regional Development Investment Program/Project (RDIP)</Divider>}
                description={
                    <div>
                        <p>Indicate if the Program/Project is included in the RDIP by ticking the checkbox.</p>
                    </div>
                }
            />
        </Card>

    )
}