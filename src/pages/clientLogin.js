import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, message, Radio } from 'antd';
import BackgroundTop from '../assets/images/login_background_top.svg'
import BackgroundBottom from '../assets/images/login_background_bottom.svg'
import Logo from '../assets/images/logo.png';

const Login = (props) => {
    const [isLoggingIn, setIsLoggingIn] = useState(false)
    const [displayText, setDisplayText] = useState("display some data")

    const onFinish = values => {
        handleLogin(values.username, values.password)
    };

    const onFinishFailed = errorInfo => {
        message.error(errorInfo)
    };

    const handleLogin = (username, password) => {
        setIsLoggingIn(true)
        const params = {
            u_name: username,
            p_word: password,
            login_type: null
        }

    }



    return (
        <div className='login-page'>
            <Row justify='center' align='middle' style={{ height: '100vh', backgroundColor: '#292929', color: '#ffffff' }}>
                <Row justify='center' style={{ position: 'absolute', width: '100vw', height: '100vh', top: 0, overflow: 'hidden' }}>
                    <img src={BackgroundTop} alt="" width='100%' style={{ top: 0, left: 0 }} />
                </Row>
                <Row justify='center' style={{ position: 'absolute', width: '100vw', bottom: 0 }}>
                    <img src={BackgroundBottom} alt="" width='100%' height='80%' style={{ bottom: 0 }} />
                </Row>
                <Col>
                    <div>
                        <img src={Logo} alt='logo' height={60} />
                        <div><b>Ops Dashboard</b></div>
                    </div>
                    <div style={{ width: 420, backgroundColor: 'white', display: 'flex', flex: 1, justifyContent: 'center', borderRadius: 10, marginTop: 15, paddingTop: 30, paddingBottom: 30 }}>
                        <Form
                            style={{ width: '80%' }}
                            name="basic"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            layout='vertical'
                            hideRequiredMark={true}
                        >
                            <Row>
                                <Col span={12}>
                                    <p>{displayText}</p>
                                </Col>
                                <Col span={12}>
                                    {displayText} <Radio>Radio</Radio>
                                </Col>
                            </Row>
                            <Form.Item
                                label="Email"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input style={{ height: 48, borderRadius: 4 }} />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password style={{ height: 48, borderRadius: 4 }} />
                            </Form.Item>
                            <Form.Item>
                                <Button onClick={() => { setIsLoggingIn(true); setDisplayText("some other text"); }} loading={isLoggingIn} style={{ backgroundColor: '#E56951', width: '100%', height: 48, color: 'white', borderRadius: 4 }}>
                                    Login
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Login;
