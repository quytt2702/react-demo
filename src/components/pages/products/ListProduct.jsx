import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {ListProduct as Product} from 'components/products';
import {MainLayout} from 'components/layouts';

class ListProduct extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <MainLayout>
        <Product/>
      </MainLayout>
    );
  }
}

export default withRouter(ListProduct)