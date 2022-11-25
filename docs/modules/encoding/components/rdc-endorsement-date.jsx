import React from "react";
import {Card, DatePicker, Divider, Form, Switch} from "antd";

export default function RdcEndorsementDate() {
    return (
        <Card style={{
            marginTop: 16
        }}>
            <Form.Item label='RDC Endorsement Date'>
                <DatePicker />
            </Form.Item>

            <Card.Meta
                title={<Divider orientation='left'>19. RDC Endorsement Date </Divider>}
                description={
                    <div>
                        <p>If the project requires RDC endorsement, provide Date of Endorsement in the date picker field.</p>
                    </div>
                }
            />
        </Card>

    )
}