import React, {useState} from 'react'
import {Button, Card, Divider, Drawer, Form, Input, notification, Select} from "antd";

const options = [
    {
        "value": 1,
        "label": "IPD:DRAFT"
    },
    {
        "value": 2,
        "label": "IPD:ENDORSED"
    },
    {
        "value": 3,
        "label": "IPD:DROPPED"
    },
    {
        "value": 4,
        "label": "NEDA:VALIDATED"
    },
    {
        "value": 5,
        "label": "PC:CONFIRMED"
    },
    {
        "value": 6,
        "label": "NEDA:DROPPED"
    }
]

export default function PipolEntry() {
    const [open, setOpen] = useState(true)

    const [form] = Form.useForm()

    const [loading, setLoading] = useState(false)

    const onFinish = () => {
        setLoading(true)
        setTimeout(() => {
            notification.success({
                message: 'Success!',
                description: 'Successfully updated PIPOL entry'
            })
            setLoading(false)
        }, 1000)
    }

    return (
        <Card>
            <Button type='primary' onClick={() => setOpen(true)}>Click Me!</Button>

            <Drawer open={open} title='PIPOL Entry' closable onClose={() => setOpen(false)} extra={<Button loading={loading} onClick={form.submit} type='primary'>Save</Button>}>
                <Form
                    form={form}
                    initialValues={{
                        pipol_code: '',
                        pipol_status_id: 1,
                        pipol_url: '',
                        pipol_remarks: '',
                    }}
                    onFinish={onFinish}
                    layout='vertical'
                >
                    <Form.Item
                        name='pipol_code'
                        label='PIPOL Code'
                        rules={[{ required: true, message: 'PIPOL Code is required.' }]}
                        extra='The PIPOL Code as presented in the table of PIP entries. The previous pattern is YEAR-OU UACS Code-Incremental PAP Number.'
                    >
                        <Input placeholder='XXXX-XXXXX-XXXXXX' />
                    </Form.Item>

                    <Form.Item
                        name='pipol_status_id'
                        label='Status in PIPOL System'
                        rules={[{ required: true, message: 'PIPOL Status is required.' }]}
                        extra='Only draft, finalized and dropped are applicable to the IPD. The reviewed and validated status is for the concerned NEDA staff.'
                    >
                        <Select options={options} />
                    </Form.Item>

                    <Form.Item
                        name='pipol_url'
                        label='URL'
                        tooltip='Copy the URL of the project in the PIPOL System'
                        rules={[{required: true, message: 'This field is required.'}]}
                    >
                        <Input.TextArea
                            autoSize={{
                                minRows: 3,
                                maxRows: 5,
                            }}
                            showCount
                            maxLength={300}
                        />
                    </Form.Item>

                    <Form.Item
                        name='pipol_remarks'
                        label='Remarks'
                        tooltip='Any other information you wish to note'
                        rules={[{required: true, message: 'This field is required.'}]}
                    >
                        <Input.TextArea
                            showCount
                            autoSize={{
                                minRows: 3,
                                maxRows: 5,
                            }}
                            maxLength={500}
                        />
                    </Form.Item>
                </Form>
            </Drawer>

            <Card.Meta
                title={<Divider orientation='left'>PIPOL Entry</Divider>}
                description='The system allows reviewers to update the PIPOL entry information of the PAP provided they are finalized. This also provides a means to linked the PIP System to the PIPOL System through the PIPOL Code and PIPOL URL'
            />
        </Card>
    )
}