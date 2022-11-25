import React from "react";
import {Card, Divider, Form, Switch} from "antd";

export default function Ict() {
    return (
        <Card style={{
            marginTop: 16
        }}>
            <Form.Item label='ICT Program/Project'>
                <Switch />
            </Form.Item>

            <Card.Meta
                title={<Divider orientation='left'>21. ICT Program/Project</Divider>}
                description={
                    <div>
                        <p>Indicate if the Program/Project is and ICT Program/Project by ticking the checkbox.</p>
                    </div>
                }
            />
        </Card>

    )
}