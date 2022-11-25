import React from "react";
import {Card, Divider, Form, Select, Switch} from "antd";

export default function Typology() {
    return (
        <Card style={{
            marginTop: 16
        }}>
            <Form.Item label='Typology of PIP'>
                <Select options={[
                    {
                        "value": 1,
                        "label": "Capital Investment Program and Project"
                    },
                    {
                        "value": 2,
                        "label": "Technical Assistance Program/Project (such as Research and Development, Institutional Development, Human Resource Capacity Building, or System/Process Improvement PAPs)"
                    },
                    {
                        "value": 3,
                        "label": "Relending Program/Project of GFIs to LGUs and Targets Beneficiary"
                    },
                    {
                        "value": 4,
                        "label": "Government Facilities"
                    },
                    {
                        "value": 99,
                        "label": "Not Applicable"
                    }
                ]} />
            </Form.Item>

            <Card.Meta
                title={<Divider orientation='left'>12. Typology of PIP</Divider>}
                description={
                    <div>
                        <p>Under the PIP, select under which Typology the program/project can be classified:</p>

                        <ul>
                            <li>Capital Investment Program/Project;</li>
                            <li>Technical Assistance Program/Project (such as Research and Development, Institutional Development, Human Resource Capacity Building or System/Process Improvement PAPs);</li>
                            <li>Relending Program/Project to local government units (LGUs) or Other Target Beneficiaries; or</li>
                            <li>Government Facilities. PAPs for the construction of government facilities that are part of agencies’ development strategies and contributing to the outcome and output targets contained in the PDP. This does NOT cover government buildings that are purely for administrative purposes.</li>
                        </ul>
                    </div>
                }
            />
        </Card>

    )
}