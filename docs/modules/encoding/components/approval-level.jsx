import React from "react";
import {Card, Divider, Form, Select} from "antd";

export default function ApprovalLevel() {
    return (
        <Card style={{
            marginTop: 16
        }}>
            <Form.Item label='Level of Approval'>
                <Select options={[{
                    label: 'Yet to be submitted to the NEDA Secretariat.'
                },{
                    label: 'Under the NEDA Secretariat Review'
                },{
                    label: 'ICC-TB Endorsed'
                },{
                    label: 'ICC-CC Approved'
                },{
                    label: 'NEDA Board-Confirmed'
                },{
                    label: 'Not Applicable'
                }]} />
            </Form.Item>

            <Card.Meta
                title={<Divider orientation='left'>9. Level of Approval</Divider>}
                description={<div>
                    <p>If the project/program will require ICC/NEDA Board approval, kindly provide the
                    status of ICC/NEDA Board processing of the program/project in the Level of
                    Approval box, if applicable.</p>

                    <ul>
                        <li> Yet to be submitted to the NEDA Secretariat. If this applies, provide the
                        Target Date of Submission in the Date of Approval field.</li>
                        <li> Under the NEDA Secretariat Review. If this applies, provide the Date of
                        Submission to NEDA Secretariat in the Date of Approval field.</li>
                        <li> ICC-TB Endorsed. If this applies, provide the Date of Approval in the
                        Date of Approval field.</li>
                        <li> ICC-CC Approved. If this applies, provide the Date of Approval in the Date of Approval
                        field.</li>
                        <li> Is NEDA Board-Confirmed. If this applies, provide the Date of Confirmation
                        in the Date of Approval field.</li>
                    </ul>
                </div>}
            />
        </Card>
    )
}