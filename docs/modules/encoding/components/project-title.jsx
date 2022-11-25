import React from "react";
import { Card, Divider, Form, Input } from "antd";

export default function ProjectTitle() {
    return (
        <Card>
            <Form.Item hasFeedback label='Project Title' rules={[{required:true}]} initialValue='PAP Title' name='title'>
                <Input.TextArea autoSize={{ minRows: 3}} showCount maxLength={255} />
            </Form.Item>

            <Card.Meta
                title={<Divider orientation='left'>1. Project Title</Divider>}
                description={
                    <div>
                        <p>Reflect the complete title of the program/project in the Project Title textbox. The
                        project title to be reflected should be identical with the project’s title in the budget
                        proposal to be submitted to DBM, if applicable.</p>

                        <p>Note: The title is limited to 255 characters including spaces.</p>
                    </div>
                }
            />
        </Card>
    )
}