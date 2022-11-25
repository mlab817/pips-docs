import React from "react";
import {Card, Divider, Form, Switch} from "antd";

export default function Research() {
    return (
        <Card style={{
            marginTop: 16
        }}>
            <Form.Item label='Research and Development Program/Project'>
                <Switch />
            </Form.Item>

            <Card.Meta
                title={<Divider orientation='left'>20. Research and Development Program/Project</Divider>}
                description={
                    <div>
                        <p>Indicate if the Program/Project is a Research and Development Program/Project by ticking the checkbox.</p>
                    </div>
                }
            />
        </Card>

    )
}