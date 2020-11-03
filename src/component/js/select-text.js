// select选择控件
import React, { useState } from 'react';
import { Select } from 'antd';
import axios from 'axios';
import 'antd/dist/antd.css';
const { Option } = Select;

// 函数组件编写
function MySelect() {
  // 组件中的的两个state：data表示查找的列表，value表示在input框中输入的值
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');

  // 状态处理函数handleChange(input变化时回调)
  const handleChange = (e) => {
    console.log(`选中项为${e}`);
    setValue(e);
  };

  // 变化处理函数handleSelect（根据value值进行模糊查询）
  const handleSearch = (e) => {
    console.log(e);
    const major = e;
    axios
      .get('http://localhost:4000/getLikeMajorList', {
        params: {
          major,
        },
      })
      .then((response) => {
        console.log('前端获得response', response.data);
        setData(response.data);
      })
      .catch(function (err) {
        console.log(err);
        setData([]);
      });
  };

  // 失去焦点时handleBlur,清空data
  const handleBlur = () => {
    setData([]);
  };

  return (
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder="请输入专业名称"
      onSearch={handleSearch}
      onBlur={handleBlur}
      onChange={handleChange}
    >
      {data.map((d) => {
        return (
          <Option key={d.id} value={d.name}>
            {d.name}
          </Option>
        );
      })}
    </Select>
  );
}

export default MySelect;
// let timeout;
// let currentValue;

// function fetch(value, callback) {
//   if (timeout) {
//     clearTimeout(timeout);
//     timeout = null;
//   }
//   currentValue = value;

//   function fake() {
//     const str = querystring.encode({
//       code: 'utf-8',
//       q: value,
//     });
//     jsonp(`https://suggest.taobao.com/sug?${str}`)
//       .then(response => response.json())
//       .then(d => {
//         if (currentValue === value) {
//           const { result } = d;
//           const data = [];
//           result.forEach(r => {
//             data.push({
//               value: r[0],
//               text: r[0],
//             });
//           });
//           callback(data);
//         }
//       });
//   }

//   timeout = setTimeout(fake, 300);
// }

// class SearchInput extends React.Component {
//   state = {
//       // 要填充的列表data，input中的具体值value
//     data: [],
//     value: undefined,
//   };

//   handleSearch = value => {
//     if (value) {
//         //有数据就填充，fetch是用来向后台获取数据的func,这里或许可以改成自己写的请求函数
//       fetch(value, data => this.setState({ data }));
//     } else {
//         // 没有数据就把data置为空
//       this.setState({ data: [] });
//     }
//   };

//   handleChange = value => {
//     this.setState({ value });
//   };

//   render() {
//       // option中的key是唯一确定这个option的关键因素
//     const options = this.state.data.map(d => <Option key={d.value}>{d.text}</Option>);
//     return (
//       <Select
//         showSearch
//         value={this.state.value}
//         placeholder={this.props.placeholder}
//         style={this.props.style}
//         defaultActiveFirstOption={false}
//         showArrow={false}
//         filterOption={false}
//         onSearch={this.handleSearch}
//         onChange={this.handleChange}
//         notFoundContent={null}
//       >
//         {options}
//       </Select>
//     );
//   }
// }

// ReactDOM.render(<SearchInput placeholder="input search text" style={{ width: 200 }} />, mountNode);
