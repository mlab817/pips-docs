import React from "react";
import {Card, Divider, Form, TreeSelect} from "antd";

export default function PdpChapters() {
    return (
        <Card style={{
            marginTop: 16
        }}>
            <Form.Item label='Other PDP Chapters'>
                <TreeSelect treeCheckable treeDefaultExpandAll treeData={[
                    {
                        "value": 1,
                        "label": "Chapter 4 Promote Human Capital and Social Development",
                        "children": [
                            {
                                "value": 2,
                                "label": "Chapter 4.1 Boost Health"
                            },
                            {
                                "value": 3,
                                "label": "Chapter 4.2 Improve Education and Lifelong Learning"
                            },
                            {
                                "value": 4,
                                "label": "Chapter 4.3 Establish Livable Communities"
                            }
                        ]
                    },
                    {
                        "value": 5,
                        "label": "Chapter 5 Increase Income Earning Ability",
                        "children": [
                            {
                                "value": 6,
                                "label": "Chapter 5.1 Expand Training and Skills Development"
                            },
                            {
                                "value": 7,
                                "label": "Chapter 5.2 Intensify Employment Facilitation"
                            }
                        ]
                    },
                    {
                        "value": 8,
                        "label": "Chapter 6 Provide Universal Access to Quality Health and Nutrition Services",
                        "children": [
                            {
                                "value": 9,
                                "label": "Chapter 6.1 Ensure Food Security and Proper Nutrition"
                            },
                            {
                                "value": 10,
                                "label": "Chapter 6.2 Rationalize Social Protection"
                            }
                        ]
                    },
                    {
                        "value": 11,
                        "label": "Chapter 7 Modernize agriculture and agri-business",
                        "children": []
                    },
                    {
                        "value": 12,
                        "label": "Chapter 8 Revitalize Industry",
                        "children": []
                    },
                    {
                        "value": 13,
                        "label": "Chapter 9 Reinvigorate Services",
                        "children": []
                    },
                    {
                        "value": 14,
                        "label": "Chapter 10 Advance Research & Development, Technology, and Innovation",
                        "children": []
                    },
                    {
                        "value": 15,
                        "label": "Chapter 11 Promote Trade and Investments",
                        "children": []
                    },
                    {
                        "value": 16,
                        "label": "Chapter 12 Ensure Macroeconomic Stability",
                        "children": [
                            {
                                "value": 17,
                                "label": "Chapter 12.1 Promote an Innovative, Inclusive, and Healthy Financial Sector"
                            },
                            {
                                "value": 18,
                                "label": "Chapter 12.2 Ensure sound fiscal management and improve Tax Regime"
                            }
                        ]
                    },
                    {
                        "value": 19,
                        "label": "Chapter 13 Expand and Upgrade Infrastructure",
                        "children": []
                    },
                    {
                        "value": 20,
                        "label": "Chapter 14 Promote Competition and Improve Regulatory Efficiency",
                        "children": []
                    },
                    {
                        "value": 21,
                        "label": "Chapter 15 Ensure Peace, Security, and Public Safety and Enhance Administration of Justice",
                        "children": [
                            {
                                "value": 22,
                                "label": "Chapter 15.1 Ensure Peace, Security, and Public Safety"
                            },
                            {
                                "value": 23,
                                "label": "Chapter 15.2 Enhance Administration of Justice"
                            }
                        ]
                    },
                    {
                        "value": 24,
                        "label": "Chapter 16 Practice Good Governance and Improve Bureaucratic Efficiency",
                        "children": []
                    },
                    {
                        "value": 25,
                        "label": "Chapter 17 Accelerate Climate Action and Strengthen Disaster Resilience",
                        "children": []
                    }
                ]} />
            </Form.Item>

            <Card.Meta
                title={<Divider orientation='left'>24. Other PDP Chapter/s</Divider>}
                description='Select from the dropdown list all the Other PDP Chapter under which the program/project is expected to contribute to.'
            />
        </Card>
    )
}