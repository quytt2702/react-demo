import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {MainLayout} from 'components/layouts';

class NotFound extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <MainLayout>
        <h1>
            404 - Not Found
        </h1>
      </MainLayout>
    );
  }
}

export default withRouter(NotFound)