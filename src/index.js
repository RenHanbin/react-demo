import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import MySelect from './component/js/select-text'
import * as serviceWorker from './serviceWorker';

 ReactDOM.render(
   <MySelect />,
   //<App/>
   document.getElementById('login_register')
 );


// const children = [];
// for (let i = 10; i < 36; i++) {
//   children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
// }

// 定义列表数据（从数据库中获取）
// const majorList=[];

// function handleChange(value) {
//   // console.log(`selected ${value}`);
//   // 根据value从后台获取模糊列表
//   const {major} = value;
//   console.log(`输入的数据为：${major}`);
//   // 和服务器端进行数据交互
//   axios
//   .get('http://localhost:4000/getLikeMajorList', {
//     params: {
//       major,
//     },
//   })
//   .then((response) => {
//     console.log('前端获得response' + response.data);
//     console.log(response.data);
//     majorList = response.data;
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
// }

// ReactDOM.render(
//   <Select name="major" mode="tags" style={{ width: '100%' }} placeholder="输入您理想的专业" onChange={handleChange}>
//     { majorList }
//   </Select>,
//   document.getElementById('login_register')
//   //mountNode,
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
