import React from "react";
import {Card, Divider, Form, Select, Switch} from "antd";

export default function CipType() {
    return (
        <Card style={{
            marginTop: 16
        }}>
            <Form.Item label='Type of CIP'>
                <Select options={[
                    {
                        "value": 1,
                        "label": "Locally-funded major capital programs/projects with total project cost of at least PhP2.5 billion"
                    },
                    {
                        "value": 2,
                        "label": "ODA-assisted grant with total project cost of at least PhP2.5 billion"
                    },
                    {
                        "value": 3,
                        "label": "ODA-assisted loan regardless of amount that requires national government guarantee"
                    },
                    {
                        "value": 4,
                        "label": "Relending activities to LGUs and other target beneficiaries with total project cost of at least PhP 2.5 billion"
                    },
                    {
                        "value": 5,
                        "label": "Solicited national PPP projects"
                    },
                    {
                        "value": 6,
                        "label": "Joint Venture (JV) Agreement with government contribution amounting of at least PhP150 million"
                    },
                    {
                        "value": 7,
                        "label": "Administrative buildings with total project cost of at least PhP1 billion"
                    },
                    {
                        "value": 99,
                        "label": "Not Applicable"
                    }
                ]} />
            </Form.Item>

            <Card.Meta
                title={<Divider orientation='left'>15. Type of CIP</Divider>}
                description={
                    <div>
                        <p>Identify which CIP Typology the program/project can be classified:</p>

                        <ul>
                            <li> Locally-funded major capital program/project with total project cost of at
                            least PHP2.5 billion;</li>
                            <li> Official Development Assistance (ODA) grant - assisted program/project
                            with total project cost of at least PHP2.5 billion;</li>
                            <li> ODA loan-assisted program/project regardless of amount that requires
                                national government guarantee;</li>
                            <li> Relending program/project to LGUs and other target beneficiaries with total
                                project cost of at least PHP 2.5 billion;</li>
                            <li> Solicited national Public-Private Partnership (PPP) projects;</li>
                            <li> Joint Venture (JV) program/project with government contribution of at least
                                PHP 150 million.</li>
                        </ul>
                    </div>
                }
            />
        </Card>

    )
}