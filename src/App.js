import React, { Component } from 'react';
import Header from "./components/Header";
import Content from "./components/Content";
import ReduxToastr from 'react-redux-toastr';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
          <ReduxToastr
          timeOut={2000}
          newestOnTop={true}
          preventDuplicates
          transitionIn="bounceIn"
          transitionOut="bounceOut"
        />
        <Header></Header>
        <Content></Content>
      </div>
    );
  }
}

export default App;
