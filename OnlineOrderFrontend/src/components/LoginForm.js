import React, {Component} from 'react';
import { Form, Input, Button, Checkbox,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { login } from "../utils";


class LoginForm extends Component {
    state = {
        loading:false,
    };

    onFinish = (values) => {
        this.setState({loading: true})
        console.log('Received values of form: ', values);
        login(values)
            .then( () => {
                // show login success
                message.success(`Login Successful`);
                this.props.onSuccess();
            })
            .catch( err => {
                //show err
                message.error(err.message);
            })
            .finally(()=>{
                this.setState({loading:false})
            })
    };

    render() {
        return (
            <Form
                name="normal_login"
                className="login-form"
                onFinish={this.onFinish}
                style={{
                    width: 300,
                    margin: "auto",
                }}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                    </Form.Item>


                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>

                </Form.Item>
            </Form>
        );
    }
}

export default LoginForm;

