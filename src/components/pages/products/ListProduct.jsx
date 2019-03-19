import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import {ListContainer} from 'components/products';
import {MainLayout} from 'components/layouts';

class ListProduct extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <MainLayout>
        <ListContainer/>
      </MainLayout>
    );
  }
}

export default withRouter(ListProduct)