import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import {MainLayout} from 'components/layouts';

class Demo extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
      console.log('ok');
    return (
      <MainLayout>
        <p>
            Hello world!
        </p>
      </MainLayout>
    );
  }
}

export default withRouter(Demo)