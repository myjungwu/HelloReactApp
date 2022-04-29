import React, { Component } from 'react';
import './App.css';
import MyComponents from './components/MyComponents';
import MyComponentsFunc from './components/MyComponentsFunc';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <MyComponents name="ReactJS" age={100} />
        <hr/>
        <MyComponentsFunc name="함수형컴포넌트">
          <p>함수형 컴포넌트의 하위 엘리먼트</p>
        </MyComponentsFunc>
      </div>
    );
  }
}

export default App;