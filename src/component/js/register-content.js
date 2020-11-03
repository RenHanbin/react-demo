/**
 * register_form.js
 * 首页注册界面的form主体
 */
import React from 'react';
import axios from 'axios';
import { Button, Form, Input } from 'antd';
import md5 from 'md5';
import '../css/register-content.css';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
class Register extends React.Component {
  /**
   * form表单提交行为处理（注册处理）
   * @param {Object} value 表单参数对象
   */
  gotoRegister(value) {
    // const {username, password, phone, email} = value;
    const { username, password, userPhone, userEmail } = value;
    console.log(
      `username: ${username} 
      password：${password}
      userPhone:${userPhone}
      userEmail:${userEmail}`
    );  
    // 数据传递后台
    axios
      .get('http://localhost:4000/register', {
        // 如果参数名称相同的话，可以直接传参数名字
        params: {
          username,
          userPwd: md5(password),
          userPhone,
          userEmail,
        },
      })
      .then((response) => {
        console.log('前端获得response' + response.data);
        alert(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="box">
        <div className="box-header">
          <span className="register">注册</span>
        </div>
        <Form
          className="register-form"
          {...formItemLayout}
          name="register"
          onFinish={this.gotoRegister}
          initialValues={{
            prefix: '86',
          }}
          scrollToFirstError
        >
          <Form.Item
            className="email"
            name="userEmail"
            rules={[
              {
                type: 'email',
                message: '请输入正确的邮箱！',
              },
              {
                required: true,
                message: '请输入您的邮箱账号',
              },
            ]}
          >
            <Input placeholder="邮箱" />
          </Form.Item>

          <Form.Item
            className="password"
            name="password"
            rules={[
              {
                required: true,
                message: '请输入您的密码!',
              },
              {
                min: 6,
                message: '密码不能少于6个字符哦',
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="密码" />
          </Form.Item>

          <Form.Item
            className="confirm"
            name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: '请确认您的密码!',
              },
              ({ getFieldValue }) => ({
                validator(_rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('两次输入的密码不一致!');
                },
              }),
            ]}
          >
            <Input.Password placeholder="确认密码" />
          </Form.Item>

          <Form.Item
            className="username"
            name="username"
            rules={[
              {
                required: true,
                message: '请输入您的昵称!',
                whitespace: true,
              },
              {
                max: 10,
                message: '昵称不能多于10个字符哦',
              },
            ]}
          >
            <Input placeholder="昵称" />
          </Form.Item>

          <Form.Item
            className="phone"
            name="userPhone"
            rules={[
              {
                required: true,
                message: '请输入您的手机号!',
              },
            ]}
          >
            <Input
              style={{
                width: '100%',
              }}
              placeholder="电话号码"
            />
          </Form.Item>

          <Form.Item className="form-button">
            <Button
              type="primary"
              shape="round"
              htmlType="submit"
              className="register-button"
            >
              注册
            </Button>
          </Form.Item>
        </Form>
        <div className="box-footer">
          <span className="footer">footer</span>
        </div>
      </div>
    );
  }
}

export default Register;
