import React, { Component } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default class MainLayout extends Component {
  render() {
    return (
      <section className='main-layout'>
        <Header />
          {this.props.children}
        <Footer></Footer>
      </section>
    );
  }
}
