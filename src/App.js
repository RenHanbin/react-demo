import React from "react";
import Content from "./component/js/index_content";
import Register from "./component/js/register_content";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

// 1.自定义登录注册组件
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Content} />
          <Route path="/Register" component={Register} />
        </div>
      </Router>
    );
  }
}
export default App;
