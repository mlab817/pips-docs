import React, {useState} from 'react'
import {
    Alert,
    Avatar,
    Badge,
    Card,
    Col,
    Layout,
    Menu,
    PageHeader,
    Row,
    Skeleton,
    Space,
    Statistic,
    Tooltip
} from "antd";
import {BellFilled, DashboardOutlined, MenuFoldOutlined, NotificationFilled} from "@ant-design/icons";

const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(false)

    const menu = (
        <Menu theme='dark' items={[{
            label: 'Dashboard',
        },{
            label: 'PIP/TRIP'
        },{
            label: 'Tracker'
        },{
            label: 'Reports'
        },{
            type: 'divider'
        },{
            label: 'Admin'
        },{
            type: 'divider'
        },
        {
            label: 'Logout'
        }]} />
    )

    const statistics = [{
        title: 'DRAFT',
        value: 1
    },{
        title: 'FINALIZED',
        value: 1
    },{
        title: 'DROPPED',
        value: 1
    },{
        title: 'DROPPED BY IPD',
        value: 1
    },{
        title: 'TOTAL',
        value: 1
    },{
        title: 'TIME UNTIL DEADLINE',
        value: 1
    }]

    return (
        <Layout style={{
            border: '1px solid lightgray',
            marginBottom: 16
        }}>
            <Layout.Sider collapsible trigger={null} collapsed={collapsed} collapsedWidth={0}>
                {menu}
            </Layout.Sider>

            <Layout.Content>
                <Layout.Header style={{
                    width: '100%',
                    paddingLeft: 16,
                    paddingRight: 16,
                    backgroundColor: '#fff'
                }}>
                    <Row justify='space-between'>
                        <div>
                            <Tooltip title='Toggles sidebar show/hide'>
                                <MenuFoldOutlined onClick={() => setCollapsed(!collapsed)} />
                            </Tooltip>
                        </div>

                        <div>Deadline: {(new Date()).toLocaleString()}</div>

                        <Space justify='end'>
                            <Tooltip title='Status of Encoding'>
                                <Badge color='red' text='Closed' />
                            </Tooltip>

                            <Tooltip title='Opens notification center'>
                                <BellFilled />
                            </Tooltip>

                            <Tooltip title='Opens user menu'>
                                <Avatar>SA</Avatar>
                                System Admin
                            </Tooltip>
                        </Space>
                    </Row>
                </Layout.Header>

                <PageHeader style={{
                    borderTop: '1px solid black',
                    borderTopStyle: 'dashed',
                    backgroundColor: '#fff'
                }} title={<><DashboardOutlined /> <Tooltip title='Current Page'>Dashboard</Tooltip></>} />

                <Layout.Content style={{
                    minHeight: '400px',
                    padding: 16
                }}>
                    <Row style={{
                        minHeight: '360px'
                    }}>
                        <Skeleton />
                    </Row>

                    <Tooltip title='Shows quick information regarding the user'>
                        <Alert message='Office: IPD | Role: Admin | Reviews: '/>
                    </Tooltip>
                </Layout.Content>

                <Layout.Footer style={{
                    backgroundColor: '#fff',
                }}>
                    <Row justify='space-between'>
                        PIPS &copy; 2022 Investment Programming Division

                        <Tooltip title='Link to user manual'>
                            User Manual
                        </Tooltip>

                        <Tooltip title='App version'>
                            v.1.0.0
                        </Tooltip>
                    </Row>
                </Layout.Footer>
            </Layout.Content>
        </Layout>
    )
}

export default Dashboard