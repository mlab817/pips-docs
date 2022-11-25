import React from "react";
import {Card, Divider, Form, Input} from "antd";

export default function Description() {
    return (
        <Card style={{
            marginTop: 16
        }}>
            <Form.Item label='Project Description' rules={[{required:true}]}>
                <Input.TextArea autoSize={{ minRows: 3}} />
            </Form.Item>

            <Card.Meta
                title={<Divider orientation='left'>5. Project Description</Divider>}
                description={
                    <div>
                        <p>Identify the Components of the Program/Project in the Project Description text box
                        provided. If a Program, please identify the sub-programs/projects and explain the
                        objective of the program/project in terms of responding to the Philippine
                        Development Plan (PDP) / Results Matrices (RM).</p>

                        <p>If the PAP involves construction of a government facility, specify the definite
                        purpose for the facility to be constructed.</p>
                    </div>
                }
            />
        </Card>
    )
}