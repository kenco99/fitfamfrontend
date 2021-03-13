import React, { Component } from 'react';
import { Row, Col, Layout, Modal, Input, Form, Select, Button, Pagination, message, Spin } from 'antd';
import dummy from '../services/API/dummy'

class Login extends Component {

    state = {
        dummyData: null,
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



    render() {
        return (
            <Row>
                <Col>
                    <Row>
                        Login page
                </Row>
                    <Row>
                        {this.state.dummyData}
                    </Row>
                </Col>
            </Row>
        );
    }


}

export default Login;