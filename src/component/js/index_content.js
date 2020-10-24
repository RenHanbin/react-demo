/* 
index_content.js
首页登录注册content——表单样式
*/
import React from "react";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

class Content extends React.Component {
  // form表单提交行为处理（登录处理）
  gotoLogin(value) {
    console.log("获取的登录数据为：");
    console.log(value);
    // 获取用户名和密码，进行与后台的连接
    var userName = value.username;
    var userPwd = value.password;
    console.log("username=" + userName + "userPwd" + userPwd);
    // 和服务器端进行数据交互
    axios
      .get("http://localhost:4000/login", {
        params: {
          userName: userName,
          userPwd: userPwd,
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
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={this.gotoLogin}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "用户名不能为空！",
            },
          ]}
        >
          <Input placeholder="请输入您的用户名" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "密码不能为空！",
            },
          ]}
        >
          <Input type="password" placeholder="请输入您的密码" />
        </Form.Item>
        <Form.Item>
          <Link to="/Register/">没有账号？</Link>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Content;
