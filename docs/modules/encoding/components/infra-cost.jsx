import React from "react";
import {Card, Divider, Form} from "antd";
import CostBreakdown from "./cost-breakdown";

export default function InfraCost() {
    const [form] = Form.useForm()

    return (
        <Card style={{
            marginTop: 16,
            marginBottom: 16
        }}>
            <Form form={form} initialValues={{
                fs_infrastructures: [{
                    funding_source_id: 1,
                    y2022: 0,
                    y2023: 0,
                    y2024: 0,
                    y2025: 0,
                    y2026: 0,
                    y2027: 0,
                    y2028: 0,
                    y2029: 0,
                }]
            }}>
                <Form.List name='fs_infrastructures'>
                    {(fields, { add, remove }) => (
                        <CostBreakdown
                            form={form}
                            label='Funding Source'
                            name='fs_infrastructures'
                            category='funding_source_id'
                            add={add}
                            remove={remove}
                            fields={fields}
                            options={[
                                {
                                    "value": 1,
                                    "label": "NG-Local"
                                },
                                {
                                    "value": 2,
                                    "label": "NG-ODA Loan"
                                },
                                {
                                    "value": 3,
                                    "label": "NG-ODA Grant"
                                },
                                {
                                    "value": 4,
                                    "label": "GOCC/GFI"
                                },
                                {
                                    "value": 5,
                                    "label": "Private Sector"
                                },
                                {
                                    "value": 6,
                                    "label": "Others"
                                }
                            ]}
                        />
                    )}
                </Form.List>
            </Form>

            <Card.Meta
                title={<Divider>28. Infrastructure Cost per Funding Source (in absolute Php terms)</Divider>}
                description={<div>
                    <p>Funding Source - Select the funding source from the following:</p>

                    <ul>
                        <li>NG-Local</li>
                        <li>NG-ODA Loan</li>
                        <li>NG-ODA Grant</li>
                        <li>GOCC/GFI</li>
                        <li>Private Sector</li>
                        <li>Others</li>
                    </ul>

                    <p>Annual Investment Cost - Input the annual investment cost in absolute Php terms.</p>
                </div>}
            />
        </Card>
    )
}