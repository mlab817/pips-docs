import React from "react";
import {Card, Divider, Form, Select, Switch} from "antd";

export default function Gad() {
    return (
        <Card style={{
            marginTop: 16
        }}>
            <Form.Item label='Level of GAD Responsiveness'>
                <Select options={[
                    {
                        "value": 1,
                        "label": "GAD is invisible"
                    },
                    {
                        "value": 2,
                        "label": "Program/Project has promising GAD prospects"
                    },
                    {
                        "value": 3,
                        "label": "Program/Project is gender-sensitive"
                    },
                    {
                        "value": 4,
                        "label": "Program/Project is gender-responsive"
                    },
                    {
                        "value": 99,
                        "label": "Not Applicable"
                    }
                ]} />
            </Form.Item>

            <Card.Meta
                title={<Divider orientation='left'>16. Level of GAD Responsiveness</Divider>}
                description={
                    <div>
                        <p>Based on the score of the program/project using the Gender and Development (GAD) checklist, identify the Level of GAD Responsiveness of the program/project:</p>

                        <ul>
                            <li>GAD is invisible;</li>
                            <li>Program/Project has promising GAD prospects;</li>
                            <li>Program/Project is gender-sensitive;</li>
                            <li>Program/Project is gender-responsive; or</li>
                            <li>Not Applicable.</li>
                        </ul>

                        <p>The GAD checklist can be accessed through this <a href='https://www.neda.gov.ph/investment-coordination-committee' target='_blank' rel='noreferrer'>link</a> under Forms</p>
                    </div>
                }
            />
        </Card>

    )
}