import React, { useState } from "react";
import {Button, Card, Checkbox, Divider, Drawer, Form, Input, Select} from "antd";

const choices = [
    {
        value: -1,
        label: 'FAILED'
    },
    {
        value: 0,
        label: 'PENDING'
    },
    {
        value: 1,
        label: 'PASSED'
    }
]

const defaultFields = {
    pass_inclusion: 0,
    pass_inclusion_remarks: '',
    complete: 0,
    complete_remarks: '',
    consistent: 0,
    consistent_remarks: '',
    consulted: 0,
    consulted_remarks: '',
    cross_validation: 0,
    cross_validation_remarks: '',
    pdp_alignment: 0,
    pdp_alignment_remarks: '',
    passes_validation: 0,
    overall_remarks: '',
}

const ReviewValidation = () => {
    const [open, setOpen] = useState(false)

    const [loading, setLoading] = useState(false)

    const [form] = Form.useForm()

    const onSubmit = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }

    return (
        <Card style={{
            marginTop: 16,
            marginBottom: 16,
        }}>
            <Button type='primary' onClick={() => setOpen(true)}>Click Me!</Button>

            <Card.Meta
                title={<><Divider>Review & Validation</Divider></>}
                description='Click the button to view the validation form.'  />

            <Drawer size='large' title='Review' open={open} closable onClose={() => setOpen(false)} extra={<Button loading={loading} onClick={form.submit} type='primary'>Validate</Button>}>
                <Form form={form} layout='vertical' onFinish={onSubmit} initialValues={defaultFields}>
                    <Form.Item
                        name='pass_inclusion'
                        label='INCLUSION: The PAP passes the inclusion criteria'
                        rules={[{ required: true, message: 'This field is required.' }]}
                    >
                        <Select options={choices} />
                    </Form.Item>

                    <Form.Item
                        name='pass_inclusion_remarks'
                        label='Inclusion/Exclusion Remarks'
                        rules={[{ required: true, message: 'This field is required.' }]}
                    >
                        <Input.TextArea
                            autoSize={{
                                minRows: 3,
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        name='complete'
                        label='COMPLETENESS: The PAP passes the completeness criteria'
                        rules={[{ required: true, message: 'This field is required.' }]}
                    >
                        <Select options={choices} />
                    </Form.Item>

                    <Form.Item
                        name='complete_remarks'
                        label='CONSULTATION: Remarks on the completeness of the PAP'
                        rules={[{ required: true, message: 'This field is required.' }]}
                    >
                        <Input.TextArea
                            autoSize={{
                                minRows: 3,
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        name='consistent'
                        label='CONSISTENCY: The PAP passes consistency checks.'
                        rules={[{ required: true, message: 'This field is required.' }]}
                    >
                        <Select options={choices} />
                    </Form.Item>

                    <Form.Item
                        name='consistent_remarks'
                        label='Remarks on the consistency of the PAP'
                        rules={[{ required: true, message: 'This field is required.' }]}
                    >
                        <Input.TextArea
                            autoSize={{
                                minRows: 3,
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        name='consulted'
                        rules={[{ required: true, message: 'This field is required.' }]}
                        label='CONSULTATION: The PAP passes consultation checks.'>
                        <Select options={choices} />
                    </Form.Item>

                    <Form.Item
                        name='consulted_remarks'
                        label='Remarks on the consultation of the PAP with concerned operating units'
                        rules={[{ required: true, message: 'This field is required.' }]}
                    >
                        <Input.TextArea
                            autoSize={{
                                minRows: 3,
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        name='cross_validation'
                        label='CROSS-VALIDATION: The PAP passes cross-validation checks.'
                        rules={[{ required: true, message: 'This field is required.' }]}
                    >
                        <Select options={choices} />
                    </Form.Item>

                    <Form.Item
                        name='cross_validation_remarks'
                        label='Remarks on the cross-validation of the PAP with other reference documents'
                        rules={[{ required: true, message: 'This field is required.' }]}
                    >
                        <Input.TextArea
                            autoSize={{
                                minRows: 3,
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        name='pdp_alignment'
                        label='PDP ALIGNMENT: The PAP passes PDP alignment checks.'
                        rules={[{ required: true, message: 'This field is required.' }]}
                    >
                        <Select options={choices} />
                    </Form.Item>

                    <Form.Item
                        name='pdp_alignment_remarks'
                        label='Remarks on the validation of the alignment of the PAP with the PDP'
                        rules={[{ required: true, message: 'This field is required.' }]}
                    >
                        <Input.TextArea
                            autoSize={{
                                minRows: 3,
                            }}
                        />
                    </Form.Item>

                    <Divider>Final Validation Check</Divider>

                    <Form.Item
                        name='passes_validation'
                        label='OVERALL: This PAP passes ALL validation checks.'
                        rules={[{ required: true, message: 'This field is required.' }]}
                        extra='This will decide whether the PAP passes validation or not, and therefore should be submitted in the PIPOL System.'
                    >
                        <Select options={choices} />
                    </Form.Item>

                    <Form.Item
                        name='overall_remarks'
                        label='Overall Remarks'
                        rules={[{ required: true, message: 'This field is required.' }]}
                        extra='Indicate why the reviewer thinks this PAP should be submitted in the PIPOL System.'
                    >
                        <Input.TextArea
                            autoSize={{
                                minRows: 3,
                            }}
                        />
                    </Form.Item>

                    <Form.Item name='notify_office' valuePropName='checked'>
                        <Checkbox>Tick this box if you want to notify the office of this project.</Checkbox>
                    </Form.Item>
                </Form>
            </Drawer>
        </Card>
    )
}

export default ReviewValidation