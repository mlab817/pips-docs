import React, { useState } from 'react'
import {Alert, Button, Card, Col, Form, Image, Input, message, Row, Typography} from "antd";
import {EyeInvisibleOutlined, EyeOutlined, LockOutlined, UserOutlined} from "@ant-design/icons";

export const LoginForm = () => {
    const [form] = Form.useForm()

    const handleSubmit = async (formData) => {
        message.success('Successful login.')
    }

    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => setShowPassword(!showPassword)

    return (
        <Row justify='center' style={{
            marginBottom: 16
        }}>
            <Col span={12}>
                <Card style={{
                    textAlign: 'center'
                }}>
                    <div style={{
                        flex: 1,
                        marginBottom: 16
                    }}>
                        <img src='/img/logo.svg' height={100} style={{
                            borderRadius: '50%',
                            border: '1px solid gray',
                            padding: 2
                        }} />
                    </div>

                    <Typography.Text>Public Investment Program System</Typography.Text>

                    <Form
                        form={form}
                        onFinish={handleSubmit}
                        style={{
                            marginTop: 16
                        }}
                        initialValues={{
                            username: 'username',
                            password: 'password',
                        }}
                    >
                        <Form.Item name='username' rules={[{ required: true, message: 'Username is required.' }]}>
                            <Input
                                autoComplete='username'
                                prefix={<UserOutlined className='site-form-item-icon' />}
                                placeholder='Username'
                                required
                            />
                        </Form.Item>

                        <Form.Item name='password' rules={[{ required: true, message: 'Password is required.' }]}>
                            <Input
                                autoComplete='current-password'
                                prefix={<LockOutlined className='site-form-item-icon' />}
                                suffix={
                                    showPassword ? (
                                        <EyeInvisibleOutlined onClick={toggleShowPassword} />
                                    ) : (
                                        <EyeOutlined onClick={toggleShowPassword} />
                                    )
                                }
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Password'
                                required
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type='text'
                                style={{
                                    float: 'right',
                                }}
                            >
                                Forgot password
                            </Button>
                        </Form.Item>

                        <Form.Item noStyle>
                            <Button style={{
                                width: '100%',
                                backgroundColor: '#006837',
                                color: '#fff'
                            }} htmlType='submit'>
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>

                <Card style={{
                    marginTop: 16,
                    textAlign: 'center'
                }}>
                    &copy; 2022 Investment Programming Division
                </Card>
            </Col>
        </Row>
    )
}