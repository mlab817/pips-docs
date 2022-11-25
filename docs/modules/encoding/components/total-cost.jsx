import React from "react";
import {Card, Divider, Form, Input, InputNumber} from "antd";

export default function TotalCost() {
    return (
        <Card style={{
            marginTop: 16
        }}>
            <Form.Item label='Total Cost (in absolute Php terms)' rules={[{required:true}]} initialValue={0}>
                <InputNumber controls={false} style={{
                    width: '100%'
                }} />
            </Form.Item>

            <Card.Meta
                title={<Divider orientation='left'>6. Total Cost (in absolute Php terms)</Divider>}
                description={
                    <div>
                        <p>The total cost of the program / project in absolute peso terms. For programs,
                            report only the costs for years 2023-2028. For projects, report the total cost from the
                            start of the project to its last year of implementation.</p>
                    </div>
                }
            />
        </Card>
    )
}