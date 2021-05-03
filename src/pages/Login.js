import React, { Component } from 'react';
import { Row, Col, Layout, Modal, Input, Form, Select, Button, Pagination, message, Spin } from 'antd';
import dummy from '../services/API/dummy'

class Login extends Component {
    state = {
        dummyData: null,
        testData: "vinit is a chooth",
        isModalVisible: false
    }

    componentDidMount() {
        dummy().then((res) => {
            this.setState({
                dummyData: res
            })
            console.log(res)
        }).catch((error) => {
            console.log(error)
        })
    }

    onClick = () => {
        this.setState({
            testData: "asit is a chooth",
            isModalVisible: true
        })
    }



    render() {
        return (
            <Row>
                <Col span={24}>
                    <Row>
                        <Col span={6}>
                            Login page
                        </Col>
                        <Col span={6}>
                            <Button type="primary" onClick={this.onClick}>Primary Button</Button>
                        </Col>
                    </Row>
                    <Row>
                        {this.state.dummyData}
                    </Row>
                    <Row>
                        {this.state.testData}
                    </Row>
                </Col>
                <Modal
                    title="Basic Modal"
                    visible={this.state.isModalVisible}
                    onCancel={() => {
                        this.setState({
                            isModalVisible: false
                        })
                    }}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </Row>
        );
    }


}

export default Login;