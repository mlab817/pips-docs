import React from "react";
import {Card, Divider, Form, TreeSelect} from "antd";

export default function InfrastructureSectors() {
    return (
        <Card style={{
            marginTop: 16
        }}>
            <Form.Item label='Infrastructure Sectors'>
                <TreeSelect treeDefaultExpandAll treeCheckable treeData={[
                    {
                        "value": 1,
                        "label": "Social Infrastructure",
                        "children": [
                            {
                                "value": 2,
                                "label": "Health"
                            },
                            {
                                "value": 3,
                                "label": "Education"
                            },
                            {
                                "value": 4,
                                "label": "Solid Waste Management"
                            },
                            {
                                "value": 5,
                                "label": "Housing"
                            },
                            {
                                "value": 6,
                                "label": "Public Safety/Security"
                            }
                        ]
                    },
                    {
                        "value": 7,
                        "label": "Power - Electrification",
                        "children": []
                    },
                    {
                        "value": 8,
                        "label": "Transportation",
                        "children": [
                            {
                                "value": 9,
                                "label": "Roads and Bridges"
                            },
                            {
                                "value": 10,
                                "label": "Water Transportation"
                            },
                            {
                                "value": 11,
                                "label": "Air Transportation"
                            },
                            {
                                "value": 12,
                                "label": "Rail Transportation"
                            },
                            {
                                "value": 13,
                                "label": "Urban Transportation"
                            }
                        ]
                    },
                    {
                        "value": 14,
                        "label": "Water Resources",
                        "children": [
                            {
                                "value": 15,
                                "label": "Irrigation"
                            },
                            {
                                "value": 16,
                                "label": "Water Supply"
                            },
                            {
                                "value": 17,
                                "label": "Flood Management"
                            },
                            {
                                "value": 18,
                                "label": "Sanitation/Sewerage/Septage"
                            }
                        ]
                    },
                    {
                        "value": 19,
                        "label": "Information and Communications Technology",
                        "children": []
                    },
                    {
                        "value": 20,
                        "label": "Others",
                        "children": [
                            {
                                "value": 21,
                                "label": "Urban/Heritage Renewal"
                            },
                            {
                                "value": 22,
                                "label": "Reclamation"
                            },
                            {
                                "value": 23,
                                "label": "Government Building"
                            },
                            {
                                "value": 24,
                                "label": "Multipurpose Facilities"
                            },
                            {
                                "value": 25,
                                "label": "Others"
                            }
                        ]
                    },
                    {
                        "value": 26,
                        "label": "Not Applicable",
                        "children": []
                    }
                ]} />
            </Form.Item>

            <Card.Meta
                title={<Divider orientation='left'>25. Infrastructure Sector</Divider>}
                description={<p>Choose among the sector/s and corresponding subsector/s
                    to which a PAP is classified. A combination of sectors/subsectors may be chosen
                    should the program/project have different infrastructure components. The
                    available choices are as illustrated below.</p>}
            />
        </Card>
    )
}