import {Button, Form, InputNumber, Select, Table} from 'antd'
import React, {Fragment} from 'react'
import './styles.css'
import { DeleteOutlined, MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'

const years = [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029]

const defaultValue = (dropdown) => ({
    [dropdown]: null,
    y2022: 0,
    y2023: 0,
    y2024: 0,
    y2025: 0,
    y2026: 0,
    y2027: 0,
    y2028: 0,
    y2029: 0
})

export default function CostBreakdown({ form, name, label, category, options, fields, add, remove }) {
    const columns = [
        {
            title: label?.toUpperCase(),
            key: name,
            dataIndex: name,
            render: (_, record) => (
                <Form.Item name={[record.name, category]} noStyle>
                    <Select options={options} style={{ width: '100%' }} />
                </Form.Item>
            ),
            width: '10%',
        },
        {
            title: '2022 & Prior',
            key: 'y2022',
            dataIndex: 'y2022',
            align: 'right',
            render: (_, record) => (
                <Form.Item name={[record.name, 'y2022']} noStyle>
                    <InputNumber
                        bordered={false}
                        controls={false}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
            ),
            width: '10%',
        },
        {
            title: '2023',
            key: 'y2023',
            dataIndex: 'y2023',
            align: 'right',
            render: (_, record) => (
                <Form.Item name={[record.name, 'y2023']} noStyle>
                    <InputNumber
                        bordered={false}
                        controls={false}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
            ),
            width: '10%',
        },
        {
            title: '2024',
            key: 'y2024',
            dataIndex: 'y2024',
            align: 'right',
            render: (_, record) => (
                <Form.Item name={[record.name, 'y2024']} noStyle>
                    <InputNumber
                        bordered={false}
                        controls={false}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
            ),
            width: '10%',
        },
        {
            title: '2025',
            key: 'y2025',
            dataIndex: 'y2025',
            align: 'right',
            render: (_, record) => (
                <Form.Item name={[record.name, 'y2025']} noStyle>
                    <InputNumber
                        bordered={false}
                        controls={false}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
            ),
            width: '10%',
        },
        {
            title: '2026',
            key: 'y2026',
            dataIndex: 'y2026',
            align: 'right',
            render: (_, record) => (
                <Form.Item name={[record.name, 'y2026']} noStyle>
                    <InputNumber
                        bordered={false}
                        controls={false}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
            ),
            width: '10%',
        },
        {
            title: '2027',
            key: 'y2027',
            dataIndex: 'y2027',
            align: 'right',
            render: (_, record) => (
                <Form.Item name={[record.name, 'y2027']} noStyle>
                    <InputNumber
                        bordered={false}
                        controls={false}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
            ),
            width: '10%',
        },
        {
            title: '2028',
            key: 'y2028',
            dataIndex: 'y2028',
            align: 'right',
            render: (_, record) => (
                <Form.Item name={[record.name, 'y2028']} noStyle>
                    <InputNumber
                        bordered={false}
                        controls={false}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
            ),
            width: '10%',
        },
        {
            title: 'Continuing Years',
            key: 'y2029',
            dataIndex: 'y2029',
            align: 'right',
            render: (_, record) => (
                <Form.Item name={[record.name, 'y2029']} noStyle>
                    <InputNumber
                        bordered={false}
                        controls={false}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
            ),
            width: '10%',
        },
        {
            title: 'Total',
            key: 'total',
            dataIndex: 'total',
            align: 'right',
            className: 'pr-8',
            render: (_, record) => {
                return years
                    .map((year) => form.getFieldValue([name, record.name, `y${year}`]))
                    .reduce((acc, cur) => {
                        acc += cur
                        return acc
                    }, 0)
                    .toLocaleString()
            },
            width: '10%',
        },
        {
            title: <DeleteOutlined />,
            key: 'actions',
            dataIndex: 'actions',
            align: 'center',
            render: (_, record) => (
                <MinusCircleOutlined
                    style={{
                        color: 'red',
                    }}
                    onClick={() => remove(record.name)}
                />
            ),
            width: '5%',
        },
    ]

    return (
        <Fragment>
            <Table
                rowKey={(field) => field.name}
                dataSource={fields}
                columns={columns}
                pagination={false}
                size='small'
                summary={(fields) => {
                    const reduced = fields.reduce(
                        (acc, cur) => {
                            acc.y2022 += form.getFieldValue([name, cur.name, 'y2022']) ?? 0
                            acc.y2023 += form.getFieldValue([name, cur.name, 'y2023']) ?? 0
                            acc.y2024 += form.getFieldValue([name, cur.name, 'y2024']) ?? 0
                            acc.y2025 += form.getFieldValue([name, cur.name, 'y2025']) ?? 0
                            acc.y2026 += form.getFieldValue([name, cur.name, 'y2026']) ?? 0
                            acc.y2027 += form.getFieldValue([name, cur.name, 'y2027']) ?? 0
                            acc.y2028 += form.getFieldValue([name, cur.name, 'y2028']) ?? 0
                            acc.y2029 += form.getFieldValue([name, cur.name, 'y2029']) ?? 0
                            acc.total +=
                                (form.getFieldValue([name, cur.name, 'y2022']) ?? 0) +
                                (form.getFieldValue([name, cur.name, 'y2023']) ?? 0) +
                                (form.getFieldValue([name, cur.name, 'y2024']) ?? 0) +
                                (form.getFieldValue([name, cur.name, 'y2025']) ?? 0) +
                                (form.getFieldValue([name, cur.name, 'y2026']) ?? 0) +
                                (form.getFieldValue([name, cur.name, 'y2027']) ?? 0) +
                                (form.getFieldValue([name, cur.name, 'y2028']) ?? 0) +
                                (form.getFieldValue([name, cur.name, 'y2029']) ?? 0)
                            return acc
                        },
                        {
                            y2022: 0,
                            y2023: 0,
                            y2024: 0,
                            y2025: 0,
                            y2026: 0,
                            y2027: 0,
                            y2028: 0,
                            y2029: 0,
                            total: 0,
                        },
                    )

                    return (
                        <Table.Summary.Row>
                            <Table.Summary.Cell index={0}>Total</Table.Summary.Cell>
                            <Table.Summary.Cell index={1} className='text-right pr-8'>
                                {reduced.y2022?.toLocaleString()}
                            </Table.Summary.Cell>
                            <Table.Summary.Cell index={2} className='text-right pr-8'>
                                {reduced.y2023?.toLocaleString()}
                            </Table.Summary.Cell>
                            <Table.Summary.Cell index={3} className='text-right pr-8'>
                                {reduced.y2024?.toLocaleString()}
                            </Table.Summary.Cell>
                            <Table.Summary.Cell index={4} className='text-right pr-8'>
                                {reduced.y2025?.toLocaleString()}
                            </Table.Summary.Cell>
                            <Table.Summary.Cell index={5} className='text-right pr-8'>
                                {reduced.y2026?.toLocaleString()}
                            </Table.Summary.Cell>
                            <Table.Summary.Cell index={6} className='text-right pr-8'>
                                {reduced.y2027?.toLocaleString()}
                            </Table.Summary.Cell>
                            <Table.Summary.Cell index={7} className='text-right pr-8'>
                                {reduced.y2028?.toLocaleString()}
                            </Table.Summary.Cell>
                            <Table.Summary.Cell index={8} className='text-right pr-8'>
                                {reduced.y2029?.toLocaleString()}
                            </Table.Summary.Cell>
                            <Table.Summary.Cell index={9} className='text-right pr-8'>
                                {reduced.total?.toLocaleString()}
                            </Table.Summary.Cell>
                        </Table.Summary.Row>
                    )
                }}
                style={{
                    marginBottom: 16,
                }}
            />

            <Button icon={<PlusCircleOutlined />} onClick={() => add(defaultValue(category))}>
                Add
            </Button>
        </Fragment>
    )
}
