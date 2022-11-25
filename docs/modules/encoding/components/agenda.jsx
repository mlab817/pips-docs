import React from "react";
import {Card, Divider, Form, Select} from "antd";

export default function Agenda() {
    return (
        <Card style={{
            marginTop: 16
        }}>
            <Form.Item label='Socioeconomic Agenda'>
                <Select mode='multiple' options={[
                    {
                        "value": 1,
                        "label": "1. Improve purchasing power of Filipinos"
                    },
                    {
                        "value": 2,
                        "label": "2. Invest in human capital development"
                    },
                    {
                        "value": 3,
                        "label": "3. Ensure sound macroeconomic fundamentals"
                    },
                    {
                        "value": 4,
                        "label": "4. Improve sectoral competitiveness"
                    },
                    {
                        "value": 5,
                        "label": "5. Increase macroeconomic competitiveness"
                    },
                    {
                        "value": 6,
                        "label": "6. Uphold public order and safety, peace and security"
                    },
                    {
                        "value": 7,
                        "label": "7. Improve physical & digital connectivity, and water & energy security"
                    },
                    {
                        "value": 8,
                        "label": "8. Enhance climate and disaster resilience"
                    }
                ]} />
            </Form.Item>

            <Card.Meta
                title={<Divider orientation='left'>30. Socioeconomic Agenda</Divider>}
                description={<p>Select which of the Socioeconomic Agenda the program/project is expected to address. User can select more than one (1) agendum, if applicable</p>}
            />
        </Card>

    )
}