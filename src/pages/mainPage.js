import React from 'react';
import { Row, Col, Layout, Modal, Input, Form, Dropdown, Button, Pagination, Menu, Spin, Table, Tag, message, Typography, DatePicker, Select, Space, Tooltip, notification, } from 'antd';
import { EditOutlined, FilterOutlined, UnorderedListOutlined, CaretDownOutlined, CaretUpOutlined, CloseOutlined, CopyOutlined } from '@ant-design/icons'



const { Header, Content } = Layout;
const { Search } = Input;
const { Text } = Typography;
const { RangePicker } = DatePicker;

notification.config({
    placement: 'bottomLeft',
    bottom: 50,
});

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            totalPages: 1,
            currentPage: 1,
            loading: false,
            newSearch: false,
            showColumns: null,
            selectedRowKeys: []
        };
    }


    componentDidMount() {
        console.log("component has monted")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("component has update")
    }

    componentWillUnmount() {
        console.log("component has unmont")
    }

    onFinishFailed = (value) => {
        this.setState({
            loading: value
        })
    };



    render() {
        return (
            <div className="h-100">

                <Button onClick={() => { this.onFinishFailed(true) }}>text inside</Button>

            </div>

        );
    }
}
