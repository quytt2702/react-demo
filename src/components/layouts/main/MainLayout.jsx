import React, { Component } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ReduxToastr from 'react-redux-toastr';

export default class MainLayout extends Component {
  render() {
    return (
      <section className='main-layout'>
        <Header />
        <ReduxToastr
          timeOut={3000}
          newestOnTop={true}
          preventDuplicates
          position="top-right"
          transitionIn="bounceIn"
          transitionOut="bounceOut"
          closeOnToastrClick/>
          {this.props.children}
        <Footer></Footer>
      </section>
    );
  }
}
