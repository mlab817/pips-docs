import React from "react";
import {Card, Divider, Form, Select} from "antd";

export default function Prerequisites() {
    return (
        <Card style={{
            marginTop: 16
        }}>
            <Form.Item label='Status of Implementation Readiness'>
                <Select mode='multiple' options={[
                    {
                        "value": 1,
                        "label": "Pre-Feasibility Study/Business Case"
                    },
                    {
                        "value": 2,
                        "label": "Feasibility Study"
                    },
                    {
                        "value": 3,
                        "label": "Level of Approval"
                    },
                    {
                        "value": 4,
                        "label": "Right-of-Way Acquisition"
                    },
                    {
                        "value": 5,
                        "label": "Resettlement Action Plan"
                    },
                    {
                        "value": 6,
                        "label": "Environmental Compliance Certificate"
                    },
                    {
                        "value": 7,
                        "label": "RDC Endorsement"
                    },
                    {
                        "value": 8,
                        "label": "Detailed Engineering Design"
                    },
                    {
                        "value": 9,
                        "label": "Other Pre-Investment Activities"
                    },
                    {
                        "value": 10,
                        "label": "Not Applicable"
                    }
                ]} />
            </Form.Item>

            <Card.Meta
                title={<Divider orientation='left'>26. Status of Implementation Readiness</Divider>}
                description={<div>
                    <p>Choose which among the following
                    requirements/indicators of readiness for the submitted program/project have
                    already been complied with. A check mark indicates that a particular requirement
                    has been complied with and that the same may be provided in the technical budget
                    hearings (TBHs) or as may be requested by NEDA or DBM.</p>

                    <ul>
                        <li>Pre-Feasibility Study/Business Case</li>
                        <li>Feasibility Study</li>
                        <li>Level of Approval</li>
                        <li>Right-of-Way Acquisition</li>
                        <li>Resettlement Action Plan</li>
                        <li>Environmental Compliance Certificate</li>
                        <li>RDC Endorsement</li>
                        <li>Detailed Engineering Design</li>
                        <li>Other Pre-Investment Activities</li>
                        <li>Not Applicable</li>
                    </ul>
                </div>}
            />
        </Card>
    )
}