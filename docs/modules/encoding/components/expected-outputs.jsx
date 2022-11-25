import React from "react";
import {Card, Divider, Form, Input} from "antd";

export default function ExpectedOutputs() {
    return (
        <Card style={{
            marginTop: 16
        }}>
            <Form.Item hasFeedback label='Expected Outputs/Deliverables' rules={[{required:true}]}>
                <Input.TextArea autoSize={{ minRows: 3}} showCount maxLength={500} />
            </Form.Item>

            <Card.Meta
                title={<Divider orientation='left'>29. Expected Outputs/Deliverables</Divider>}
                description={<div>
                    <p>Enumerate the Expected Outputs (or Actual Deliverables) of the program/project in the text box provided. Please provide specific outputs and units of measure (e.g., 100 km of FMRs, 1,000 seeds distributed, etc.).</p>
                </div>}
            />
        </Card>
    )
}
