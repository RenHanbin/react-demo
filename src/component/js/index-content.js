/**
 * index_content.js
 * 首页登录注册content——表单样式
 */
import React from 'react';
import axios from 'axios';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import md5 from 'md5';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../css/index-content.css';

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

class Content extends React.Component {
  /**
   * form表单提交行为处理（登录处理）
   * @param {Object} value 表单参数对象
   */
  gotoLogin(value) {
    // 获取用户名和密码，进行与后台的连接
    const { username, password } = value;
    console.log(`username:${username};userPwd:${password}`);
    // 和服务器端进行数据交互
    axios
      .get('http://localhost:4000/login', {
        params: {
          username,
          userPwd: md5(password),
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
          <span className="welcome">登录</span>
        </div>
        <Form
          {...formItemLayout}
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={this.gotoLogin}
        >
          <Form.Item
            className="username"
            name="username"
            rules={[
              {
                required: true,
                message: '用户名不能为空！',
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="请输入您的用户名" />
          </Form.Item>
          <Form.Item
            className="password"
            name="password"
            rules={[
              {
                required: true,
                message: '密码不能为空！',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              name="password"
              placeholder="请输入您的密码"
            />
          </Form.Item>
          <Form.Item className="login-form-button">
            <Button
              className="login-button"
              type="primary"
              shape="round"
              htmlType="submit"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
        <div className="box-footer">
          <Link to="/Register/">没有账号？</Link>
        </div>
      </div>
    );
  }
}

export default Content;
