import React from "react";
import {Card, Divider, Form, Switch} from "antd";

export default function RdcEndorsement() {
    return (
        <Card style={{
            marginTop: 16
        }}>
            <Form.Item label='Regional Development Council (RDC) Endorsement'>
                <Switch />
            </Form.Item>

            <Card.Meta
                title={<Divider orientation='left'>18. Regional Development Council (RDC) Endorsement</Divider>}
                description={
                    <div>
                        <p>If the PAP is included in the RDIP, tick the checkbox if it will require Regional Development Council (RDC) Endorsement.</p>
                    </div>
                }
            />
        </Card>

    )
}