import React from "react";
import {Card, Divider, Form, Switch} from "antd";

export default function Covid() {
    return (
        <Card style={{
            marginTop: 16
        }}>
            <Form.Item label='Is it responsive to COVID-19/New Normal Intervention?'>
                <Switch />
            </Form.Item>

            <Card.Meta
                title={<Divider orientation='left'>22. Is it responsive to COVID-19/New Normal Intervention?</Divider>}
                description={
                    <div>
                        <p> Indicate if the PAP is a strategic response to the COVID-19 pandemic, or is a New Normal Intervention by toggling the switch.</p>
                    </div>
                }
            />
        </Card>

    )
}