import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Content from './component/js/index-content';
import Register from './component/js/register-content';
import './App.css';
// 1.自定义登录注册组件
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="root-content">
          <Route exact path="/" component={Content} />
          <Route path="/Register" component={Register} />
        </div>
      </Router>
    );
  }
}
export default App;
