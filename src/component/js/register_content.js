/*
register_form.js
首页注册界面的form主体
 */

import React from "react";
import { Button, Form, Input, Tooltip } from "antd";
import axios from "axios";
import { QuestionCircleOutlined } from "@ant-design/icons";
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
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
class Register extends React.Component {
  // 注册响应
  gotoRegister(value) {
    var userName = value.username;
    var password = value.password;
    var userPhone = value.phone;
    var userEmial = value.email;
    console.log(
      "username:" +
        userName +
        "pwd:" +
        password +
        "userPhone:" +
        userPhone +
        "userEmail:" +
        userEmial
    );
    // 数据传递后台
    axios
      .get("http://localhost:4000/register", {
        params: {
          userName: userName,
          userPwd: password,
          userPhone: userPhone,
          userEmail: userEmial,
        },
      })
      .then((response) => {
        console.log("前端获得response" + response.data);
        alert(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  render() {
    return (
      <Form
        {...formItemLayout}
        name="register"
        onFinish={this.gotoRegister}
        initialValues={{
          prefix: "86",
        }}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="电子邮箱："
          rules={[
            {
              type: "email",
              message: "请输入正确的邮箱！",
            },
            {
              required: true,
              message: "请输入您的邮箱账号",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="密码："
          rules={[
            {
              required: true,
              message: "请输入您的密码!",
            },
            {
              min: 6,
              message: "密码不能少于6个字符哦",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="确认密码："
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "请确认您的密码!",
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("两次输入的密码不一致!");
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="username"
          label={
            <span>
              昵称&nbsp;
              <Tooltip title="昵称长度需小于10个字符">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          rules={[
            {
              required: true,
              message: "请输入您的昵称!",
              whitespace: true,
            },
            {
              max: 10,
              message: "昵称不能多于10个字符哦",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="电话号码："
          rules={[
            {
              required: true,
              message: "请输入您的手机号!",
            },
          ]}
        >
          <Input
            style={{
              width: "100%",
            }}
          />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Register;
