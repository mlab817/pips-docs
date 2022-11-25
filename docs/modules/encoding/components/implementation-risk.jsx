import React from "react";
import {Card, Divider, Form, Input} from "antd";

export default function ImplementationRisk() {
    return (
        <Card style={{
            marginTop: 16
        }}>
            <Form.Item hasFeedback label='Implementation Risks and Mitigation Strategies' rules={[{required:true}]}>
                <Input.TextArea autoSize={{ minRows: 3}} showCount maxLength={500} />
            </Form.Item>

            <Card.Meta
                title={<Divider orientation='left'>27. Implementation Risks and Mitigation Strategies</Divider>}
                description={<div>
                    <p>The proponent should provide information on the potential or actual risks, if any, that may hinder the proposal. The proponent should also provide information on how the potential or actual risks can be mitigated.</p>
                </div>}
            />
        </Card>
    )
}
